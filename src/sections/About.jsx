import React from 'react';
import { motion } from 'framer-motion'


const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-7 flex flex-col items-center justify-center max-w-full w-full p-6 space-y-6 bg-black    "
    >
      {/* Main Flex Container */}
      <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-10 lg:gap-20 pt-7">

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="relative w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-linear-to-r from-[#065f5b] via-[#00bf8f] to-[#6ae2de] rounded-full blur-3xl opacity-80"></div>
          <div className="relative w-full h-full rounded-full border-4 border-white overflow-hidden">
            <img
              src="https://i.pinimg.com/originals/3c/ab/d3/3cabd382277c28fd33164d5005ada03e.jpg"
              alt="Profile"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="flex flex-col justify-center text-center lg:text-left sm:ml-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-2 py-1 bg-linear-to-r from-pink-900  via-pink-600 to-pink-400 bg-clip-text text-transparent">
              Anamika
            </h1>
            <p className="text-white mb-2 text-lg sm:text-xl">Professional Makeup Artist</p>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
              I’m known for creating elegant, long-lasting bridal looks that feel comfortable, natural, and
               photograph beautifully — especially for Indian weddings.
            </p>
          </div>
           
          {/* Info Boxes */}
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 py-8 text-gray-300">
            <div className="flex flex-col items-center w-auto p-4  border border-white rounded-lg bg-gray-950">
              <p className="opacity-60">Experience</p>
              <p>5+ years</p>
            </div>
            <div className="flex flex-col items-center w-auto p-4  border border-white rounded-lg bg-gray-950">
              <p className="opacity-60">Speciality</p>
              <p>Bridal Makeup</p>
            </div>
            <div className="flex flex-col items-center w-auto p-4  border border-white rounded-lg bg-gray-950 bg-opacity-0">
              <p className="opacity-60 ">Focus</p>
              <p>Client satisfaction</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-4 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a
              href="#portfolio"
              className="text-white font-bold bg-pink-800 px-5 py-3 rounded-xl shadow-lg hover:opacity-90 transition-opacity duration-300 hover:transform hover:scale-105"

            >
              See My Work
            </a>
            <a
              href="#contact"

              className="text-black bg-white px-5 py-3 rounded-xl font-medium shadow-lg 
              hover:opacity-90 transition-opacity duration-300 hover:transform hover:scale-105 "
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div> 

      {/* About Me Section */}
      <div className="mt-6 text-center lg:text-left px-0">
        <h1 className="text-white text-2xl sm:text-3xl font-extrabold">About me</h1>
        <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-5xl mt-2 mx-auto lg:mx-0">
          With more than five years of dedicated practice, I has mastered the art of enhancing natural
          beauty through makeup. My work spans weddings, engagements, and special events, where I combines my
          technical skill with a warm, client-focused approach. Every look is tailored to reflect the personality and
          style of the individual, ensuring they feel comfortable, elegant, and camera-ready.
        </p>
      </div>
    </motion.section>
  );
}

export default About;
