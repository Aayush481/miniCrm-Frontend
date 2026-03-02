import React, { useState } from "react";
import { motion } from "framer-motion";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    eventDate: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone" && value && !/^\d+$/.test(value)) return;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  }; 

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.service.trim()) newErrors.service = "Service is required";
    if (!formData.eventDate.trim())
      newErrors.eventDate = "Event date is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    if (!validateForm()) return;

    setStatus("sending");

    try {
      const res = await fetch("http://localhost:5000/api/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          status :"New",
        })
        ,
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        eventDate: "",
      });
       setStatus("")
      const data = await res.json()
      console.log(data._id);     
      alert("Your form has been submitted successfully. A confirmation email will be sent after your booking is confirmed.");
    } catch (err) {
      setStatus("error");
      console.error(err.message);
    }
  };

  return (
    <section
      id="booking"
      className="relative w-full min-h-screen bg-black text-white flex justify-center items-center p-4"
    >
      <div className="w-full sm:w-[70vw] flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Booking</h1>
        <p className="text-xs text-white/60 mb-4">
          Fields marked with <span className="text-red-500">*</span> are required
        </p>

        {/* Animated Border */}
        <motion.div
          initial={{ backgroundPosition: "0% 50%" }}
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="p-[3px] rounded-xl bg-linear-to-r from-pink-800 via-teal-400 to-teal-800 bg-[length:200%_200%] w-full sm:w-[60vw]"
        >
          <div className="bg-black rounded-xl p-6 sm:p-8">
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`w-full p-3 rounded-md bg-black/30 border ${errors.name ? "border-red-500" : "border-white/20"
                    }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-1"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-md bg-black/30 border border-white/20"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold mb-1"
                >
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className={`w-full p-3 rounded-md bg-black/30 border ${errors.phone ? "border-red-500" : "border-white/20"
                    }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Service */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-semibold mb-1"
                >
                  Service <span className="text-red-500">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-md bg-black/30 border ${errors.service ? "border-red-500" : "border-white/20"
                    }`}
                >
                  <option value="">Select a service</option>
                  <option value="bridal">Bridal Makeup</option>
                  <option value="engagement">Engagement Makeup</option>
                  <option value="party">Party Makeup</option>
                  <option value="saree">Saree Draping / Hair Styling</option>
                </select>
                {errors.service && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.service}
                  </p>
                )}
              </div>

              {/* Event Date */}
              <div>
                <label
                  htmlFor="eventDate"
                  className="block text-sm font-semibold mb-1"
                >
                  Event Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-md bg-black/30 border ${errors.eventDate ? "border-red-500" : "border-white/20"
                    }`}
                />
                {errors.eventDate && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.eventDate}
                  </p>
                )}
              </div>

              {/* Status */}
              <p className="text-sm text-center">
                {status === "sending" && "Sending..."}
                {status === "success" && "Booking submitted successfully ✅"}
                {status === "error" && "Something went wrong ❌"}
              </p>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3 rounded-lg bg-pink-600 hover:bg-pink-700 transition font-semibold disabled:opacity-60"
              >
                Book Now
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;
