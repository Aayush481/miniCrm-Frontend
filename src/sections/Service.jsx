import React from 'react';
import { motion, useScroll, vw } from 'framer-motion'
const services = [
  {
    id: 1,
    name: "Bridal Makeup",
    description: "Full bridal look with HD foundation, eye detailing, and traditional styling.",
    priceRange: "₹15,000 - ₹25,000",
    duration: "4-6 hours",
    category: "Wedding",
    popular: true
  },
  {
    id: 2,
    name: "Engagement Makeup",
    description: "Elegant and modern look tailored for engagement ceremonies.",
    priceRange: "₹8,000 - ₹12,000",
    duration: "3-4 hours",
    category: "Wedding",
    popular: false
  },
  {
    id: 3,
    name: "Party Makeup",
    description: "Quick glam with contouring, eye shimmer, and hairstyling for parties.",
    priceRange: "₹3,000 - ₹6,000",
    duration: "1-2 hours",
    category: "Events",
    popular: true
  },
  {
    id: 4,
    name: "Reception Makeup",
    description: "Sophisticated evening look with bold lips and radiant base.",
    priceRange: "₹10,000 - ₹15,000",
    duration: "3-4 hours",
    category: "Wedding",
    popular: false
  },
  {
    id: 5,
    name: "Saree Draping & Hairstyling",
    description: "Professional saree draping with matching hairstyle.",
    priceRange: "₹2,000 - ₹4,000",
    duration: "1-2 hours",
    category: "Add-on",
    popular: false
  },
  {
    id: 6,
    name: "Pre-Wedding Shoot Makeup",
    description: "Natural yet photogenic look for outdoor or studio shoots.",
    priceRange: "₹7,000 - ₹10,000",
    duration: "2-3 hours",
    category: "Photoshoot",
    popular: true
  },
  

];
const Service = () => {

  const { scrollYProgress } = useScroll();
  console.log(scrollYProgress)
  return (
    <section id="service" className='w-full h-screen relative  flex justify-center items-center mt-10 bg-black  '>
      <h1 className='text-white text-4xl md:text-5xl font-bold absolute top-10 '>Services</h1>
      <div className='absolute w-[80%] h-[70%] shadow-inner  rounded-lg   overflow-x-hidden flex justify-center items-center'>
         <div className='w-4 h-full bg-teal-400 absolute -left-5    blur-2xl '/>
        <div className="overflow-hidden w-full ">
         
  <motion.div
    className="flex gap-10"
    animate={{ x: ["0%", "-120%"] }}
    transition={{
      duration: 12,       
      ease: "linear",     
      repeat: Infinity,  
    }}
  >
    {[...services, ...services].map((ser, idx) => (
      <motion.div
        whileHover={{scale:1.2}}
        key={idx}
        className="bg-white/90   border border-white/20 rounded-2xl flex flex-col justify-between items-center text-center p-10 w-84 shrink-0 "
      >
        <h1 className="text-pink-800 font-extrabold text-3xl font-sans">{ser.name}</h1>
        <h2 className="text-black font-bold text-[20px]  mb-2 mt-4">{ser.description}</h2>
        <h3 className="text-black font-bold text-sm mb-2">{ser.category}</h3>
        <p className="text-gray-900 italic text-sm sm:text-base mb-2">{ser.priceRange}</p>
      </motion.div>
    ))}
  </motion.div>
</div>
 <div className='w-4 h-full bg-teal-400 absolute -right-5    blur-3xl '/>
      </div>
    </section>
  );
}

export default Service;
