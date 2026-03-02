import React, { useEffect, useState, useRef } from 'react';
import Hambarger from './Hambarger';
import logo from '../assets/logo1.png';
import { FiMenu } from "react-icons/fi";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [inHome, setInHome] = useState(false);
  const timeout = useRef(null);
  const homeRef = useRef(null);
  const lastScrollY = useRef(0);

  // IntersectionObserver
  useEffect(() => {
    homeRef.current = document.getElementById('home');
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInHome(true);
        setVisible(true);
        if (timeout.current) clearTimeout(timeout.current);
      } else {
        setInHome(false);
        setVisible(false);
      }
    }, { threshold: 0.1 });

    if (homeRef.current) observer.observe(homeRef.current);

    return () => {
      if (homeRef.current) observer.unobserve(homeRef.current);
    };
  }, []);

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY.current) < 5) return;

      if (!inHome) {
        if (currentScrollY > lastScrollY.current) {
          setVisible(false);
          if (timeout.current) clearTimeout(timeout.current);
        } else {
          setVisible(true);
          if (timeout.current) clearTimeout(timeout.current);
          timeout.current = setTimeout(() => {
            setVisible(false);
          }, 3000);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, [inHome]);

  return (
    <>
      <nav
        className={`fixed -top-4 left-0 w-full flex items-center justify-between px-6 z-50 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        {/* Logo Section */}
        <div className="flex items-center sm:space-x-2 font-extrabold">
          <img src={logo} alt="Logo" className="w-50 h-30" />
        </div>

        {/* Menu Button & Ul */}
        <div className="flex items-center">
          <button
            className="text-white text-3xl focus:outline-none block lg:hidden"
            aria-label="Menu open"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <FiMenu />
          </button>

          {/* nav content */}
          <ul className="hidden lg:flex lg:items-center lg:justify-center gap-6 xl:gap-10">
            {['Home', 'About', 'Service', 'Portfolio','Booking', 'Testimonials', 'Contact'].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-lg xl:text-2xl text-white font-semibold hover:text-pink-400 transition-colors duration-500"
                >
                  {item}
                </a>
              </motion.li>
            ))}

            {/* Admin link */}
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + 7 * 0.1 }}
            >
              <Link
                to="/admin/login"
                className="text-lg xl:text-2xl text-white font-semibold hover:text-pink-400 transition-colors duration-500"
              >
                Admin
              </Link>
            </motion.li>
          </ul>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="text-white hover:text-gray-300 bg-linear-to-r from-pink-500 to-blue-500 px-1 py-1 xl:px-5 xl:py-2  rounded-full font-medium shadow-lg hover:opacity-90 transition-opacity duration-300"
          >
            Reach Out
          </a>
        </div>
      </nav>

      {/* Overlay Menu */}
      <Hambarger isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Navbar;