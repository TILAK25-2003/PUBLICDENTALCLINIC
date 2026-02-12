import { motion } from 'framer-motion';
import { DOCTORS } from '../data/clinicData';
import { Award, Users, GraduationCap } from 'lucide-react';

export const Doctors = () => {
  return (
    <section id="doctors" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-serif">Meet Our Experts</h2>
          <div className="w-20 h-1 bg-cta mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Highly qualified specialists with years of experience in advanced dental procedures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {DOCTORS.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-2/5 h-64 md:h-auto relative">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent md:hidden"></div>
                </div>
                
                <div className="p-6 md:w-3/5 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-primary mb-1">{doctor.name}</h3>
                  <p className="text-cta font-medium text-sm mb-4">{doctor.specialization}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="text-accent shrink-0 mt-1" size={18} />
                      <p className="text-gray-600 text-sm">{doctor.qualification}</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Award className="text-accent shrink-0" size={18} />
                      <p className="text-gray-700 font-medium text-sm">{doctor.experience} Experience</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Users className="text-accent shrink-0" size={18} />
                      <p className="text-gray-700 font-medium text-sm">{doctor.patients} Patients Treated</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
