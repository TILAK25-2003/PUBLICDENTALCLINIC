import { motion } from 'framer-motion';
import { SERVICES } from '../data/clinicData';

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-serif">Comprehensive Dental <span className="text-accent">Services</span></h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-700 leading-relaxed">Advanced treatments for all your dental needs under one roof.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-accent hover:shadow-2xl transition-all duration-300 group cursor-default flex flex-col h-full"
            >
              <div className="relative h-40 overflow-hidden bg-gray-200">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-all duration-300">
                  <service.icon className="text-accent group-hover:text-accent transition-colors duration-300" size={24} />
                </div>
                <h3 className="font-semibold text-primary group-hover:text-accent transition-colors duration-300 mb-3 text-sm">
                  {service.name}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
