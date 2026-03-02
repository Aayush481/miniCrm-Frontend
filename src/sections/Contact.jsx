import React, { useState } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/bride.png";


const InputField = ({ label, name, value, onChange, error, type = "text" }) => (
  <div>
    <label className="block mb-1">{label} <span className="text-red-600">*</span></label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-2 rounded-lg bg-black/30 border border-white/10"
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;


    if ((name === "phone" || name === "budget") && value && !/^\d+$/.test(value)) {
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Required";
    if (!formData.phone.trim()) newErrors.phone = "Required";
    if (!formData.service.trim()) newErrors.service = "Required";
    if (formData.service !== "others" && !formData.budget.trim())
      newErrors.budget = "Required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("sending");

    try {


      const response = await fetch("http://localhost:5000/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: "query submission email",
          text: `
    Name: ${formData.name}
    Phone: ${formData.phone}
    Service: ${formData.service}
    Budget: ${formData.budget}
    Message: ${formData.message}
  `,
        })
      });

      if (!response.ok) throw new Error("Failed to send message");

-
      setStatus("success");
      setFormData({
        name: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
      });
      setTimeout(()=>{
        setStatus("");
      },2000)

    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[400px] h-[400px] rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 blur-[120px]" />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left image */}
        <div className="relative flex justify-center">

          <motion.img
            src="https://static.vecteezy.com/system/resources/previews/051/015/952/non_2x/pink-brush-3d-illustration-with-makeup-tools-beauty-products-and-a-range-of-cosmetic-accessories-free-png.png"
            className="hidden lg:block absolute w-21 left-38 xl:left-45 top-13 z-100"
            animate={{
              x: [-180, 8, -180],
              rotate: [0, 0, 120]
            }}

            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", type: "loop" }}
            alt="brush"
          />
          <img src="https://static.vecteezy.com/system/resources/previews/055/043/193/non_2x/compact-face-powder-on-transparent-background-free-png.png" className="w-34 h-24 mx-0 relative hidden lg:block lg:left-10 xl:left-10 top-25" />


          <img
            src={img1}
            alt="Bride"
            className="w-full max-w-sm sm:max-w-lg md:max-w-xl object-cover drop-shadow-2xl relative -left-20 lg:block hidden"
          />
        </div>

        {/* form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 shadow-xl "

        >
          <h2 className="text-3xl font-bold mb-5">
            Let’s connect
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* name */}
            <InputField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />

            {/* phone */}
            <InputField
              label="Phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
            />


            {/* service */}
            <div>
              <label className="block mb-1">Service <span className="text-red-600">*</span></label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full p-2 rounded-lg bg-black/30 border text-white border-white/10"
              >
                <option value="" disabled>
                  Select a Service
                </option>
                <option value="bride" className="text-black font-semibold" >Bridal Makeup</option>
                <option value="enagement" className="text-black font-semibold">Engagement Makeup</option>
                <option value="party" className="text-black font-semibold">Party Makeup</option>
                <option value="others" className="text-black font-semibold">Others</option>
              </select>
              {errors.service && (
                <p className="text-red-500 text-sm">{errors.service}</p>
              )}
            </div>

            {/* budget */}
            {formData.service && formData.service !== "others" && (
              <InputField
                label="Budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                error={errors.budget}
              />
            )}

            {/* message */}
            <div>
              <label className="block mb-1">Your Message </label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 rounded-lg bg-black/30 border border-white/10"
              />
              {errors.idea && (
                <p className="text-red-500 text-sm">{errors.idea}</p>
              )}
            </div>

            {/* Status */}
            {status && (
              <p className="text-sm">
                {status === "sending" && "Sending..."}
                {status === "success" && "Message sent successfully ✅"}
                {status === "error" && "Something went wrong ❌"}
              </p>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={status === "sending"}
              className="w-full bg-pink-600 hover:bg-pink-700 rounded-xl py-3 font-semibold"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
