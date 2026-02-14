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
    <nav className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-md ${scrolled ? 'bg-primary/95 shadow-xl py-2 border-b border-accent/20' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
           {/* Logo */}
           <div className="h-16 w-16 rounded-full overflow-hidden flex items-center justify-center hover:shadow-lg transition-shadow duration-300">
             <img
               src="https://cdn.builder.io/api/v1/image/assets%2Fd3a4464df72a43a692e71a2ce12b099e%2F30746911f3f346ee8e67ee39458303d5?format=webp&width=800&height=1200"
               alt="Public Dental Clinic Logo"
               className="h-full w-full object-contain"
             />
           </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              smooth={true}
              offset={-80}
              className={`cursor-pointer font-medium transition-all duration-300 relative hover:after:scale-x-100 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent after:origin-left after:scale-x-0 after:transition-transform after:duration-300 ${scrolled ? 'text-white' : 'text-white/90 hover:text-white'}`}
            >
              {link.name}
            </ScrollLink>
          ))}
          <a
            href={`tel:${CLINIC_DETAILS.phone}`}
            className="flex items-center gap-2 bg-cta text-white px-5 py-2.5 rounded-full hover:bg-ctaHover shadow-lg hover:shadow-xl transition-all duration-300 text-sm font-semibold"
          >
            <Phone size={16} />
            {CLINIC_DETAILS.displayPhone}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-primary">
          {isOpen ? <X size={28} /> : <Menu size={28} className={scrolled ? 'text-white' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-t border-accent/30 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-3">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="text-white font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-colors border-b border-gray-700"
                >
                  {link.name}
                </ScrollLink>
              ))}
              <a
                href={`tel:${CLINIC_DETAILS.phone}`}
                className="flex items-center justify-center gap-2 bg-cta text-white px-4 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
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
