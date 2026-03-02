import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom"



const Hambarger = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (

        <motion.div className="fixed top-0 right-0 h-full w-[100%] sm:w-[60%] lg:w-[25%] flex justify-center items-center z-100 bg-black">
          <button className="fixed top-3 right-3 focus:outline-none" aria-label="Close menu">
            <FiX size={40} color="#fff" onClick={onClose} />
          </button>
          <ul className="flex flex-col items-center gap-6 text-3xl">
            {['Home', 'About', 'Service', 'Portfolio','Booking', 'Testimonials', 'Contact'].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-lg xl:text-3xl text-white font-semibold hover:text-pink-400 transition-colors duration-500"
                  onClick={onClose}
                >
                  {item}
                </a>
              </motion.li>
            ))}

            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + 7 * 0.1 }}
            >
              <Link
                to="/admin/login"
                className="text-lg xl:text-3xl text-white font-semibold hover:text-pink-400 transition-colors duration-500"
              onClick={onClose}>
                Admin
              </Link>
            </motion.li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Hambarger;