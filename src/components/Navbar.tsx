import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CLINIC_DETAILS } from '../data/clinicData';

const ScrollLink = Link as any;

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'Doctors', to: 'doctors' },
    { name: 'Services', to: 'services' },
    { name: 'Reviews', to: 'reviews' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
           {/* Logo */}
           <img
             src="https://cdn.builder.io/api/v1/image/assets%2Fd3a4464df72a43a692e71a2ce12b099e%2F35a3abb907af456f92a9559fb0dc590a?format=webp&width=800&height=1200"
             alt="Public Dental Clinic Logo"
             className="h-20 w-20 object-contain rounded-full"
           />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              smooth={true}
              offset={-80}
              className={`cursor-pointer font-medium hover:text-cta transition-colors ${scrolled ? 'text-primary' : 'text-white/90 hover:text-white'}`}
            >
              {link.name}
            </ScrollLink>
          ))}
          <a 
            href={`tel:${CLINIC_DETAILS.phone}`}
            className="flex items-center gap-2 bg-cta text-white px-4 py-2 rounded-full hover:bg-ctaHover transition-colors text-sm font-semibold"
          >
            <Phone size={16} />
            {CLINIC_DETAILS.displayPhone}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-primary">
          {isOpen ? <X size={28} /> : <Menu size={28} className={scrolled ? 'text-primary' : 'text-primary md:text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="text-primary font-medium py-2 border-b border-gray-50"
                >
                  {link.name}
                </ScrollLink>
              ))}
              <a 
                href={`tel:${CLINIC_DETAILS.phone}`}
                className="flex items-center justify-center gap-2 bg-cta text-white px-4 py-3 rounded-lg font-semibold"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
