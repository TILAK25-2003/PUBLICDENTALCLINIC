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
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center cursor-pointer"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} fill="white" />
    </motion.a>
  );
};
