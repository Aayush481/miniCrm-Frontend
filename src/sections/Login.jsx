import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [err, setErr] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (err[name]) setErr((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErr = {};
    if (!formData.email.trim()) newErr.email = "Email is required";
    if (!formData.password.trim()) newErr.password = "Password is required";
    setErr(newErr);
    return Object.keys(newErr).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      alert("Please enter email and password first");
      return;
    }

    setStatus("sending");

    try {
      const { email, password } = formData;

      const res = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      let data = {};
      try {
        data = await res.json();
      } catch {
        data = {};
      }

      if (res.ok) {
        localStorage.setItem("adminToken", data.token);
        navigate("/admin/dashboard");
      } else {
        alert(data.message || "Login Failed");
      }

      console.log("Login response:", data);
    } catch (err) {
      setStatus("error");
      alert("Server not reachable");
      console.log("err :", err);
    }
  };

  return (
    <section className="w-full h-screen relative flex justify-center items-center flex-col bg-black text-white px-4">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 blur-[100px] sm:blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 blur-[100px] sm:blur-[120px]" />
      </div>

      {/* Heading */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center">
        <h2 className="px-7 text-2xl sm:text-3xl md:text-5xl mb-5 font-bold">Login</h2>
        <p className="text-gray-400 text-sm sm:text-base">Login necessary only for admin</p>
      </div>

      {/* Form container */}
      <motion.div
        initial={{ "--angle": "0deg" }}
        animate={{ "--angle": "360deg" }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{ background: "conic-gradient(from var(--angle), white 10%, black 10%)" }}
        className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%] flex flex-col justify-center items-start p-3 sm:p-4 md:p-2 mt-20 rounded"
      >
        <form
          className="w-full space-y-6 p-5 sm:p-7 bg-black rounded-lg shadow-2xl z-20"
          onSubmit={handleSubmit}
        >
          {/* Email */}
          <div className="flex flex-col text-white">
            <label htmlFor="email" className="mb-2 text-base sm:text-lg">Email ID:</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded border border-gray-300 text-white"
              value={formData.email}
              onChange={handleChange}
            />
            {err.email && <span className="text-red-500 text-sm">{err.email}</span>}
          </div>

          {/* Password */}
          <div className="flex flex-col text-white">
            <label htmlFor="password" className="mb-2 text-base sm:text-lg">Password:</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full p-2 rounded border border-gray-300 text-white "
              value={formData.password}
              onChange={handleChange}
            />
            {err.password && <span className="text-red-500 text-sm">{err.password}</span>}
          </div>

          {/* Submit button */}
          <div className="flex justify-center mt-10">
            <motion.button
              initial={{ scale: 1 }}
              whileTap={{ scale: 1.2,opacity:0.8 ,disable:true }}
              whileHover={{ rotate: ["15deg", "0deg"] }}
              transition={{ duration: 0.3, ease: "easeInOut", type: "spring" }}
              type="submit"
              className="px-4 py-2 w-full sm:w-auto bg-pink-600 text-white rounded hover:bg-pink-700"
            >
              Submit
            </motion.button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default Login;