import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Button } from '../components/ui/Button';
import { CalendarCheck, ArrowRight } from 'lucide-react';

const ScrollLink = Link as any;

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2000&auto=format&fit=crop" 
          alt="Modern Dental Clinic" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <div className="inline-block px-4 py-2 bg-accent/20 border border-accent backdrop-blur-md rounded-full text-accent text-sm font-semibold mb-6">
            ✓ Trusted by 5000+ Patients
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 font-serif">
            World-Class Dental Care in <span className="text-accent">Muzaffarpur</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            Expert Gum Specialists & Oral Implantologists dedicated to restoring your smile with precision and care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <ScrollLink to="appointment" smooth={true} offset={-80}>
              <Button variant="primary" className="w-full sm:w-auto gap-2">
                <CalendarCheck size={20} />
                Book Appointment
              </Button>
            </ScrollLink>
            <ScrollLink to="services" smooth={true} offset={-80}>
              <Button variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary gap-2">
                Our Services
                <ArrowRight size={20} />
              </Button>
            </ScrollLink>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-accentLight via-transparent to-transparent z-10"></div>
    </section>
  );
};
