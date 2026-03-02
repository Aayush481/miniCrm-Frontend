import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Priya Sharma",
    event: "Bridal",
    feedback: "Anamika made me feel like a queen on my wedding day. The golden glow look was flawless and lasted all night!",
    location: "Saharanpur",
    image: "https://tse1.mm.bing.net/th/id/OIP.Qbb9DD69DHeKiC069j1_9wHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    name: "Neha Verma",
    event: "Engagement",
    feedback: "I wanted a soft, romantic vibe and Anamika delivered perfectly. Everyone complimented my glowing skin and subtle shimmer.",
    location: "Deoband",
    image: "https://tse3.mm.bing.net/th/id/OIP.12MGBgunTwpYOitNDth5-wHaE8?w=612&h=408&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    name: "Ritika Gupta",
    event: "Partywear",
    feedback: "Her trendy bold look was exactly what I needed for my cocktail party. The makeup was vibrant yet elegant.",
    location: "Dehradun",
    image: "https://img.freepik.com/premium-photo/professional-women-business-indian-female-headshots-portraits_203363-181.jpg"
  },
  {
    name: "Simran Kaur",
    event: "Bridal",
    feedback: "I was nervous about airbrush makeup, but Anamika’s technique was so natural and comfortable. My photos turned out stunning.",
    location: "Chandigarh",
    image: "https://randomuser.me/api/portraits/women/19.jpg"
  },
  {
    name: "Aarti Mishra",
    event: "Engagement",
    feedback: "She understood my minimal style and gave me a chic, fresh look. I felt confident and radiant throughout the ceremony.",
    location: "Badgoon",
    image: "https://tse3.mm.bing.net/th/id/OIP.NtU93B-uREuQLGER0Bs1ygHaE8?w=1254&h=836&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    name: "Megha Kapoor",
    event: "Partywear",
    feedback: "The glitter glam look was so fun! My friends kept asking who did my makeup. Highly recommend Anamika for any occasion.",
    location: "Saharanpur",
    image: "https://i.pinimg.com/736x/2e/df/1d/2edf1dcd4af5b67429ecf344ec2168d9.jpg"
  }
];

const Testimonial = () => {
  return (
    <section
      id="testimonials"
      className="relative w-full min-h-screen bg-black text-white flex flex-col items-center px-4 sm:px-6 md:px-10 py-16 sm:py-20"
    >
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-10 sm:mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Client Testimonials
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 w-full max-w-6xl mx-auto">
        {testimonials.map((tes, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl flex flex-col justify-between items-center text-center transform transition duration-500 hover:scale-105 hover:rotate-1 p-6 sm:p-8 w-full h-full max-w-sm mx-auto"
          >
            <img
              src={tes.image}
              alt={tes.event}
              className="w-16 h-16 sm:w-20 sm:h-20 border-2 rounded-full border-white/40 object-cover mb-4"
              loading="lazy"
            />
            <h2 className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-2">{tes.name}</h2>
            <h3 className="text-white font-medium text-sm sm:text-base md:text-lg mb-2">{tes.feedback}</h3>
            <p className="text-gray-300 italic text-xs sm:text-sm md:text-base mb-2">{tes.event}</p>
            <p className="text-gray-400 italic text-xs sm:text-sm">{tes.location}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;