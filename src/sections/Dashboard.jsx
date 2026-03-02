import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiXCircle, FiClock } from "react-icons/fi";

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [loading,setLoading] = useState(true);

 
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:5000/api/clients");
        const data = await res.json();
        setBookings(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching bookings:", err);
      }
    };
    fetchBookings();
    
  }, []);

  // Update booking status
  const updateStatus = async (id, newStatus) => {
    try {
      const res = await fetch(`http://localhost:5000/api/clients/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      const updated = await res.json();

      // Update state
      setBookings((prev) =>
        prev.map((b) => (b._id === id ? { ...b, status: updated.status } : b))
      );
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  return (
    <section className="w-full min-h-screen bg-black text-white px-4 sm:px-6 md:px-10 py-16">
      {/* Heading */}
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Booking Dashboard
      </motion.h2>

      {/*  Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm sm:text-base">
          <thead>
            <tr className="bg-white/10 text-left">
              <th className="p-3">Client</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Service</th>
              <th className="p-3">Event Date</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading===true ? <p className="text-center mt-[30vh] p-3 ml-[35vw]">Loading...</p> :bookings.map((b, idx) => (
              <motion.tr
                key={b._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="border-b border-white/20 hover:bg-white/5"
              >
                <td className="p-3">{b.name}</td>
                <td className="p-3">{b.email}</td>
                <td className="p-3">{b.phone}</td>
                <td className="p-3">{b.service}</td>
                <td className="p-3">{b.eventDate}</td>
                <td className="p-3">
                  {b.status === "Booked" && (
                    <span className="flex items-center text-green-400">
                      <FiCheckCircle className="mr-1" /> Booked
                    </span>
                  )}
                  {b.status === "Completed" && (
                    <span className="flex items-center text-blue-400">
                      <FiCheckCircle className="mr-1" /> Completed
                    </span>
                  )}
                  {b.status === "Contacted" && (
                    <span className="flex items-center text-yellow-400">
                      <FiClock className="mr-1" /> Contacted
                    </span>
                  )}
                  {b.status === "New" && (
                    <span className="flex items-center text-gray-400">
                      <FiClock className="mr-1" /> New
                    </span>
                  )}
                  {b.status === "Rejected" && (
                    <span className="flex items-center text-red-400">
                      <FiXCircle className="mr-1" /> Rejected
                    </span>
                  )}
                </td>
                <td className="p-3 flex gap-2 flex-wrap">
                  <button
                    onClick={() => updateStatus(b._id, "Booked")}
                    className="px-3 py-1 bg-green-600 rounded hover:bg-green-700 text-white text-xs sm:text-sm"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => updateStatus(b._id, "Rejected")}
                    className="px-3 py-1 bg-red-600 rounded hover:bg-red-700 text-white text-xs sm:text-sm"
                  >
                    Reject
                  </button>
                  <button
                    onClick={() => updateStatus(b._id, "Completed")}
                    className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-700 text-white text-xs sm:text-sm"
                  >
                    Completed
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Dashboard;