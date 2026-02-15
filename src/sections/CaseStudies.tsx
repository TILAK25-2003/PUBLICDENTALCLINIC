import { motion } from 'framer-motion';

interface CaseStudy {
  id: number;
  title: string;
  image: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    title: 'Gum Disease Treatment & Restoration',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Fd3a4464df72a43a692e71a2ce12b099e%2Feea9bf431edc4384ab8f78b9208662ef?format=webp&width=800&height=1200',
  },
  {
    id: 2,
    title: 'Oral Surgery & Implant Case',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Fd3a4464df72a43a692e71a2ce12b099e%2F81bfeb043d544f9998a44679c7ed3659?format=webp&width=800&height=1200',
  },
  {
    id: 3,
    title: 'Complete Smile Makeover',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Fd3a4464df72a43a692e71a2ce12b099e%2F28a96127342d4769b1ab10a75b338d89?format=webp&width=800&height=1200',
  },
  {
    id: 4,
    title: 'Advanced Periodontal Treatment',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Fd3a4464df72a43a692e71a2ce12b099e%2F51ade653bb85449b8ec66aa33701be8c?format=webp&width=800&height=1200',
  },
  {
    id: 5,
    title: 'Dental Restoration Success',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Fd3a4464df72a43a692e71a2ce12b099e%2Fb1bbb26716b843658eb67a31d75b946b?format=webp&width=800&height=1200',
  },
];

export const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-20 bg-white">
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
            Our <span className="text-[#D4AF37]">Case Studies</span>
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Real transformations showcasing our expertise in restorative and cosmetic dentistry
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="group"
            >
              <div className="h-full bg-white rounded-[16px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-[#D4AF37] flex flex-col">
                {/* Image Container */}
                <div className="relative h-96 overflow-hidden bg-gray-200">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg md:text-xl font-bold text-[#0B1C2D] mb-3 font-serif group-hover:text-[#D4AF37] transition-colors duration-300">
                    {caseStudy.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                    Professional dental treatment with exceptional results. Witness the transformation through our expert care.
                  </p>
                  
                  {/* Learn More Link */}
                  <motion.div
                    className="mt-4 flex items-center text-[#D4AF37] font-semibold text-sm"
                    whileHover={{ x: 5 }}
                  >
                    View Details
                    <span className="ml-2">→</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
