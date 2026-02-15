import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Shield,
  Clock,
  Stethoscope,
  Zap,
  Heart,
} from 'lucide-react';

interface USP {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

const USPS: USP[] = [
  {
    id: 1,
    title: 'Quality Assurance',
    description:
      'We maintain the highest clinical standards to ensure safe, reliable, and long-lasting dental treatments.',
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: 'Advanced Sterilization Protocols',
    description:
      'Strict international sterilization systems and autoclave procedures to guarantee complete infection control.',
    icon: Shield,
  },
  {
    id: 3,
    title: 'Fast & Efficient Treatment',
    description:
      'Optimized workflows and modern equipment allow quick, precise, and comfortable procedures.',
    icon: Clock,
  },
  {
    id: 4,
    title: 'Experienced Doctors',
    description:
      'Our skilled dental professionals bring years of expertise and compassionate patient care.',
    icon: Stethoscope,
  },
  {
    id: 5,
    title: 'Latest Technology',
    description:
      'Equipped with digital X-rays, advanced diagnostics, and cutting-edge dental tools for precision dentistry.',
    icon: Zap,
  },
  {
    id: 6,
    title: 'Patient-Centric Care',
    description:
      'Personalized treatment plans focused on comfort, transparency, and long-term oral health.',
    icon: Heart,
  },
];

export const OurUSPs = () => {
  return (
    <section id="usps" className="py-20 bg-[#F8F6F2]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1C2D] mb-4 font-serif">
            Why Choose <span className="text-[#D4AF37]">Us</span>
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Premium Dental Care with Precision & Compassion
          </p>
        </motion.div>

        {/* USP Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {USPS.map((usp, index) => (
            <motion.div
              key={usp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="group"
            >
              <div className="h-full bg-white rounded-[16px] p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-[#D4AF37] flex flex-col">
                {/* Icon Container */}
                <motion.div
                  className="w-16 h-16 rounded-full bg-[#0B1C2D] flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <usp.icon
                    size={28}
                    className="text-white group-hover:text-[#0B1C2D] transition-colors duration-300"
                  />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-[#0B1C2D] mb-3 font-serif group-hover:text-[#D4AF37] transition-colors duration-300">
                  {usp.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-base flex-grow">
                  {usp.description}
                </p>

                {/* Decorative element on hover */}
                <motion.div
                  className="mt-4 h-1 w-12 bg-[#D4AF37] rounded-full origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
