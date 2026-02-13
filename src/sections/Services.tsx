import { motion } from 'framer-motion';
import { SERVICES } from '../data/clinicData';

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-accentLight">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-serif">Comprehensive Dental Services</h2>
          <div className="w-20 h-1 bg-cta mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600">Advanced treatments for all your dental needs under one roof.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-lg bg-white border border-accent/20 hover:border-secondary/40 hover:shadow-xl transition-all duration-300 group cursor-default"
            >
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:bg-secondary transition-colors duration-300">
                <service.icon className="text-secondary group-hover:text-white transition-colors duration-300" size={24} />
              </div>
              <h3 className="font-semibold text-primary group-hover:text-secondary transition-colors duration-300 mb-2">
                {service.name}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
