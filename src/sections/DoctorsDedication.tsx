import { motion } from 'framer-motion';

export const DoctorsDedication = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-serif">Our Dedication to Excellence</h2>
          <div className="w-20 h-1 bg-cta mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Meet our highly skilled and dedicated doctors committed to providing the finest dental care with precision, compassion, and the latest technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Dr. Maitraiyee */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className="relative h-96 overflow-hidden bg-gray-200">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fd3a4464df72a43a692e71a2ce12b099e%2Ff69a188e3fb34f149ee2d0f352594896?format=webp&width=800&height=1200"
                alt="Dr. Maitraiyee - Dental Procedure"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold text-primary mb-2">Dr. Maitraiyee Ekshipta</h3>
              <p className="text-gray-600 text-sm">
                Demonstrating meticulous attention to detail and compassionate patient care in every procedure.
              </p>
            </div>
          </motion.div>

          {/* Dr. Kunal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className="relative h-96 overflow-hidden bg-gray-200">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fd3a4464df72a43a692e71a2ce12b099e%2F94c9fe28b05e4aacae60f6ed1cacecdf?format=webp&width=800&height=1200"
                alt="Dr. Kunal - Dental Procedure"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold text-primary mb-2">Dr. Kunal Gaurav Seth</h3>
              <p className="text-gray-600 text-sm">
                Applying advanced techniques and years of expertise to ensure exceptional results for every patient.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-white p-8 rounded-2xl shadow-md border-l-4 border-cta max-w-3xl mx-auto"
        >
          <p className="text-center text-gray-700 text-lg">
            <span className="font-semibold text-primary">Why Trust Us?</span> Our doctors bring years of specialized experience, advanced training, and an unwavering commitment to patient satisfaction. Every procedure is performed with precision, using state-of-the-art technology and the highest standards of clinical care.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
