import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { CLINIC_DETAILS } from '../data/clinicData';

export const WhatsAppFloat = () => {
  const whatsappUrl = `https://wa.me/${CLINIC_DETAILS.phone.replace('+', '')}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ delay: 1, type: 'spring' }}
      whileHover={{ scale: 1.15, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center cursor-pointer transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} fill="white" />
    </motion.a>
  );
};
