import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { CalendarCheck } from 'lucide-react';
import { scroller } from 'react-scroll';

export const Hero = () => {
  const handleBookAppointment = () => {
    scroller.scrollTo('appointment', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -80, // Matches the Navbar offset to handle fixed header
    });
  };

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
          <div className="inline-block px-5 py-2.5 bg-accent/20 border border-accent backdrop-blur-md rounded-full text-accent text-sm font-semibold mb-8 hover:bg-accent/30 transition-colors">
            ✓ Trusted by 8000+ Patients
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-serif">
            World-Class Dental Care in <span className="text-accent">Muzaffarpur</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
            Expert Gum Specialists & Oral Implantologists dedicated to restoring your smile with precision and care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="primary"
              className="w-full sm:w-auto gap-2"
              onClick={handleBookAppointment}
            >
              <CalendarCheck size={20} />
              Book Appointment
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-accentLight via-transparent to-transparent z-10"></div>
    </section>
  );
};
