import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { CLINIC_DETAILS } from '../data/clinicData';
import { Send, Calendar } from 'lucide-react';

type FormData = {
  name: string;
  phone: string;
  date: string;
  timeSlot: string;
};

export const Appointment = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const message = `Hello ${CLINIC_DETAILS.name},\n\nName: ${data.name}\nPhone: ${data.phone}\nPreferred Date: ${data.date}\nTime Slot: ${data.timeSlot}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${CLINIC_DETAILS.phone.replace('+', '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="appointment" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Info Side */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 font-serif">
              Ready to Smile with Confidence?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Book your appointment easily via WhatsApp. Fill out the form, and we'll confirm your slot instantly.
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-cta">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <Calendar className="text-cta" />
                Clinic Timings
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600 mt-4">
                <div>
                  <p className="font-semibold text-primary">Clinic 1</p>
                  <p>Mon–Sat: 10:00 AM – 2:30 PM & 4:00 PM – 8:00 PM</p>
                  <p>Sun: 11:00 AM – 4:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold text-primary">Clinic 2</p>
                  <p>Mon–Sat: 10:00 AM – 5:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Book Appointment</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Patient Name</label>
                <input
                  {...register("name", { required: true })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cta focus:border-transparent outline-none transition-all"
                  placeholder="Enter your full name"
                />
                {errors.name && <span className="text-red-500 text-xs mt-1">Name is required</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number</label>
                <input
                  {...register("phone", { required: true })}
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cta focus:border-transparent outline-none transition-all"
                  placeholder="+91 XXXXX XXXXX"
                />
                {errors.phone && <span className="text-red-500 text-xs mt-1">Phone number is required</span>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                  <input
                    {...register("date", { required: true })}
                    type="date"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cta focus:border-transparent outline-none transition-all"
                  />
                  {errors.date && <span className="text-red-500 text-xs mt-1">Date is required</span>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Time Slot</label>
                  <select
                    {...register("timeSlot", { required: true })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cta focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">Select Time</option>
                    <option value="Morning (10AM - 1PM)">Morning (10AM - 1PM)</option>
                    <option value="Afternoon (2PM - 5PM)">Afternoon (2PM - 5PM)</option>
                    <option value="Evening (5PM - 8PM)">Evening (5PM - 8PM)</option>
                  </select>
                  {errors.timeSlot && <span className="text-red-500 text-xs mt-1">Time slot is required</span>}
                </div>
              </div>

              <Button type="submit" fullWidth className="mt-4 gap-2">
                <Send size={18} />
                Book via WhatsApp
              </Button>
              <p className="text-xs text-center text-gray-500 mt-2">
                You will be redirected to WhatsApp to send the details.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
