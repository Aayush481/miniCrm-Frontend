import React from 'react';
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";


const Footer = () => {
    return (
        <footer className="w-full bg-black text-gray-300 py-10 flex flex-col gap-7 justify-center items-center">
            <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Column 1 */}
                <div className="flex flex-col">
                    <h3 className="text-3xl font-bold text-pink-800 mb-2">Anamika</h3>
                    <h5 className="text-md text-gray-200">
                        Luxury Bridal Makeup Artist in Saharanpur
                    </h5>
                    <p className="text-sm text-gray-400">Creating timeless bridal looks for your special day</p>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col">
                    <h3 className="text-xl font-semibold text-white mb-2">Quick Links</h3>
                    <ul className="space-y-2 text-sm  ">
                        <li><a href="#home" className="hover:text-pink-800">Home</a></li>
                        <li><a href="#about" className="hover:text-pink-800">About Us</a></li>
                        <li><a href="#portfolio" className="hover:text-pink-800">Portfolio</a></li>
                        <li><a href="#testimonials" className="hover:text-pink-800">Testimonials</a></li>
                        <li><a href="#services" className="hover:text-pink-800">Services</a></li>
                        <li><a href="#contact" className="hover:text-pink-800">Contact</a></li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col">
                    <h3 className="text-xl font-semibold text-white mb-2">Connect With Us</h3>
                    <p className="text-sm text-gray-400 mb-4">Ready to look and feel your best on your special day?
                        Get in touch to book your appointment or discuss your makeup needs.</p>
                    <div className="flex gap-4 mt-4 items-center">
                        <a
                            href="https://wa.me/91XXXXXXXXXX"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-500 hover:text-pink-600 text-xl sm:text-2xl"
                            aria-label="WhatsApp"
                        >
                            <FaWhatsapp />
                        </a>

                        <a
                            href="https://instagram.com/anamika"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-500 hover:text-pink-600 text-xl sm:text-2xl"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="https://maps.app.goo.gl/XXXXXXXX"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-500 hover:text-pink-600 text-xl sm:text-2xl"
                            aria-label="Location"
                        >
                            <HiLocationMarker />
                        </a>
                    </div>

                </div>

            </div>

            {/* Bottom Copyright */}
            <div className="mt-8 text-gray-500 text-sm">
                <p>© 2026 Anamika. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
