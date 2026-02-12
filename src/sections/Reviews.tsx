import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { faker } from '@faker-js/faker';

// Simulating Google Reviews Data
const generateReviews = () => {
  return Array.from({ length: 5 }).map(() => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    rating: 5,
    text: faker.lorem.paragraph(2),
    date: "2 weeks ago"
  }));
};

export const Reviews = () => {
  const [reviews] = useState(generateReviews());
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section id="reviews" className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute right-0 top-0 w-64 h-64 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-cta rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Patient Stories</h2>
          <div className="w-20 h-1 bg-cta mx-auto rounded-full"></div>
          <div className="flex items-center justify-center gap-2 mt-4 text-yellow-400">
             <Star fill="currentColor" />
             <Star fill="currentColor" />
             <Star fill="currentColor" />
             <Star fill="currentColor" />
             <Star fill="currentColor" />
             <span className="text-white ml-2 font-medium">5.0 Google Rating</span>
          </div>
        </div>

        <div className="max-w-3xl mx-auto h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 text-center border border-white/10"
            >
              <Quote className="text-cta/50 w-12 h-12 mx-auto mb-6" />
              <p className="text-lg md:text-xl text-gray-200 italic mb-6 leading-relaxed">
                "{reviews[currentIndex].text}"
              </p>
              <div>
                <h4 className="font-bold text-white text-lg">{reviews[currentIndex].name}</h4>
                <p className="text-sm text-gray-400">Patient</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-cta w-8' : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
