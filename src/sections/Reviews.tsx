import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

// Indian Patient Reviews
const indianReviews = [
  {
    id: 1,
    name: "Rajesh Kumar Singh",
    rating: 5,
    text: "Outstanding dental care experience! Dr. Kunal and his team are highly professional and compassionate. My gum treatment was painless and the results are fantastic. Would highly recommend to everyone in Muzaffarpur.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Priya Sharma",
    rating: 5,
    text: "Dr. Maitraiyee is amazing! She explained every step of my dental implant procedure. The clinic is clean, modern and staff is very welcoming. Best dental clinic I've visited in Bihar.",
    date: "1 week ago"
  },
  {
    id: 3,
    name: "Amit Patel",
    rating: 5,
    text: "Had my root canal treatment done here. Painless procedure with quick recovery. Dr. Kunal's expertise is evident. Thank you for giving me back my beautiful smile!",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Sneha Verma",
    rating: 5,
    text: "Teeth whitening results are incredible! I look so much more confident now. The team is friendly and the treatment was quick. Highly satisfied with the service.",
    date: "10 days ago"
  },
  {
    id: 5,
    name: "Vikram Mishra",
    rating: 5,
    text: "Got my orthodontic braces done here. The doctors are very experienced and caring. Regular follow-ups are well managed. Loving the progress with my teeth alignment!",
    date: "1 month ago"
  }
];

const generateReviews = () => indianReviews;

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
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
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
              className="bg-secondary/30 backdrop-blur-xl rounded-2xl p-8 md:p-12 text-center border border-accent/30 shadow-2xl"
            >
              <Quote className="text-accent/60 w-12 h-12 mx-auto mb-6" />
              <p className="text-lg md:text-xl text-white italic mb-6 leading-relaxed">
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
                idx === currentIndex ? 'bg-accent w-8' : 'bg-gray-600 hover:bg-accent/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
