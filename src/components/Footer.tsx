import { CLINIC_DETAILS } from '../data/clinicData';
import { Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-4">PUBLIC DENTAL CLINIC</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Providing world-class dental care with a focus on patient comfort and advanced treatments. Your smile is our priority.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 transform hover:scale-110" target="_blank" rel="noreferrer">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/public_dental_clinic?utm_source=qr&igsh=MWFobWl6NmcZTHnMA==" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 transform hover:scale-110" target="_blank" rel="noreferrer">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 transform hover:scale-110" target="_blank" rel="noreferrer">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-accent">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#hero" className="hover:text-accent transition-colors duration-300">Home</a></li>
              <li><a href="#doctors" className="hover:text-accent transition-colors duration-300">Our Doctors</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors duration-300">Treatments</a></li>
              <li><a href="#appointment" className="hover:text-accent transition-colors duration-300">Book Appointment</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-accent">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="shrink-0 text-accent mt-1" size={20} />
                <span>{CLINIC_DETAILS.location}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone className="shrink-0 text-accent" size={20} />
                <a href={`tel:${CLINIC_DETAILS.phone}`} className="hover:text-accent transition-colors duration-300">
                  {CLINIC_DETAILS.displayPhone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Public Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
