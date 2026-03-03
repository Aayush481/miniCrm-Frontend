import React from 'react';
import { motion } from 'framer-motion'


const Home = () => {
  return (
    <main id="home" className="relative w-full min-h-screen flex flex-col lg:flex-row  justify-center 
    items-center  px-auto  bg-linear-to-br from-black via-black via-75% to-teal-800 backdrop-blur-3xl z-0 overflow-hidden ">
     

      {/*left Text Section */}

      <div className="w-full lg:w-1/2 flex flex-col justify-center lg:ml-40 lg: mt-10 md:mt-4  lg:mt-0 text-center lg:text-left  pt-20">
        <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-pink-800">
          Anamika
        </h1>
        <div className="bg-gradient-to-br from-[#632b58] via-pink-500 to-black rounded-bl-lg rounded-tl-lg h-[7px] w-[180px] md:w-[240px] mx-auto lg:mx-0 mt-5" />
        <h3 className="font-semibold text-white text-2xl md:text-3xl lg:text-4xl mt-7">
          Luxury Bridal Makeup Artist in Saharanpur 
        </h3>
        <p className="mt-5 text-gray-300 text-base md:text-lg w-full md:w-4/5 mx-auto lg:mx-0">
          Bringing out your natural beauty with professional bridal and event makeup services in Saharanpur.
        </p>
        <button className="py-5 px-6 text-lg bg-pink-800 text-white rounded-full mt-10 w-fit mx-auto lg:mx-0 shadow-2xl backdrop-blur-2xl hover:bg-gradient-to-r hover:scale-110 from-red-950 via-pink-600 to-pink-400">
          <a href="#portfolio">view portfolio</a>
        </button>
      </div>



      {/* right Image Section */}
       <div className="w-full lg:w-3/5 relative flex justify-center items-center mt-10 lg:mt-0  mb-20 lg:mb-0">
        <img
          src="https://tse2.mm.bing.net/th/id/OIP.Z70SmJwe-bvRxgV_yt4uxQHaJO?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Makeup artist applying bridal makeup"
          className="w-2/3 max-w-[250px] md:max-w-[350px] lg:max-w-[400px] object-cover object-center rounded-full border-4 border-white shadow-2xl shadow-black backdrop-brightness-90 backdrop-blur-3xl"
        />
        <div className="absolute top-7 left-48 w-[50%] h-[90%] bg-teal-400 rounded-full blur-3xl animate-pulse pointer-events-none z-[-1]" />
      </div>



    </main>
  );
};

export default Home;