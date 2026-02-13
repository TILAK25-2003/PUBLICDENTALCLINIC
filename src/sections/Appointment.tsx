import { useForm, useWatch } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { CLINIC_DETAILS } from '../data/clinicData';
import { Send, Calendar } from 'lucide-react';

type FormData = {
  name: string;
  phone: string;
  clinic: string;
  date: string;
  timeSlot: string;
};

const timeSlots = [
  { value: "Morning (10AM - 1PM)", label: "Morning (10AM - 1PM)" },
  { value: "Afternoon (2PM - 5PM)", label: "Afternoon (2PM - 5PM)" },
  { value: "Evening (5PM - 8PM)", label: "Evening (5PM - 8PM)" }
];

const getAvailableSlots = (clinic: string) => {
  if (clinic === "Clinic 1") {
    // Clinic 1: Mon–Sat: 10:00 AM – 2:30 PM & 4:00 PM – 8:00 PM, Sun: 11:00 AM – 4:00 PM
    return {
      "Morning (10AM - 1PM)": true,
      "Afternoon (2PM - 5PM)": true, // 2PM-2:30PM available + 4PM-5PM available
      "Evening (5PM - 8PM)": true
    };
  } else if (clinic === "Clinic 2") {
    // Clinic 2: Mon–Sat: 10:00 AM – 5:00 PM, Sun: Closed
    return {
      "Morning (10AM - 1PM)": true,
      "Afternoon (2PM - 5PM)": true,
      "Evening (5PM - 8PM)": false // Clinic closes at 5PM
    };
  }
  return {
    "Morning (10AM - 1PM)": false,
    "Afternoon (2PM - 5PM)": false,
    "Evening (5PM - 8PM)": false
  };
};

export const Appointment = () => {
  const { register, handleSubmit, formState: { errors }, control } = useForm<FormData>();
  const selectedClinic = useWatch({ control, name: 'clinic' });
  const availableSlots = getAvailableSlots(selectedClinic);

  const onSubmit = (data: FormData) => {
    const message = `Hello ${CLINIC_DETAILS.name},\n\nName: ${data.name}\nPhone: ${data.phone}\nPreferred Clinic: ${data.clinic}\nPreferred Date: ${data.date}\nTime Slot: ${data.timeSlot}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${CLINIC_DETAILS.phone.replace('+', '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="appointment" className="py-20 bg-gradient-to-b from-background to-accentLight">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Info Side */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif">
              Ready to Smile with Confidence?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Book your appointment easily via WhatsApp. Fill out the form, and we'll confirm your slot instantly.
            </p>
            
            <div className="bg-secondary/50 p-6 rounded-xl shadow-lg border-l-4 border-accent backdrop-blur-sm">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-white">
                <Calendar className="text-accent" />
                Clinic Timings
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300 mt-4">
                <div>
                  <p className="font-semibold text-accent">Clinic 1</p>
                  <p>Mon–Sat: 10:00 AM – 2:30 PM & 4:00 PM – 8:00 PM</p>
                  <p>Sun: 11:00 AM – 4:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold text-accent">Clinic 2</p>
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
            className="lg:w-1/2 w-full bg-secondary/80 p-8 rounded-2xl shadow-2xl border border-accent/30 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Book Appointment</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-1">Patient Name</label>
                <input
                  {...register("name", { required: true })}
                  className="w-full px-4 py-3 rounded-lg border border-accent/30 bg-background focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-white placeholder-gray-500"
                  placeholder="Enter your full name"
                />
                {errors.name && <span className="text-red-500 text-xs mt-1">Name is required</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-1">WhatsApp Number</label>
                <input
                  {...register("phone", { required: true })}
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-accent/30 bg-background focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-white placeholder-gray-500"
                  placeholder="+91 XXXXX XXXXX"
                />
                {errors.phone && <span className="text-red-500 text-xs mt-1">Phone number is required</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-1">Preferred Clinic</label>
                <select
                  {...register("clinic", { required: true })}
                  className="w-full px-4 py-3 rounded-lg border border-accent/30 bg-background focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-white"
                >
                  <option value="">Select Clinic</option>
                  <option value="Clinic 1">Clinic 1</option>
                  <option value="Clinic 2">Clinic 2</option>
                </select>
                {errors.clinic && <span className="text-red-500 text-xs mt-1">Clinic selection is required</span>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-1">Preferred Date</label>
                  <input
                    {...register("date", { required: true })}
                    type="date"
                    className="w-full px-4 py-3 rounded-lg border border-accent/30 bg-background focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-white"
                  />
                  {errors.date && <span className="text-red-500 text-xs mt-1">Date is required</span>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-1">Time Slot</label>
                  <select
                    {...register("timeSlot", { required: true })}
                    className="w-full px-4 py-3 rounded-lg border border-accent/30 bg-background focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-white disabled:bg-background/50 disabled:cursor-not-allowed"
                    disabled={!selectedClinic}
                  >
                    <option value="">Select Time</option>
                    {timeSlots.map((slot) => (
                      <option
                        key={slot.value}
                        value={slot.value}
                        disabled={!availableSlots[slot.value as keyof typeof availableSlots]}
                      >
                        {slot.label} {!availableSlots[slot.value as keyof typeof availableSlots] ? '(Not Available)' : ''}
                      </option>
                    ))}
                  </select>
                  {errors.timeSlot && <span className="text-red-500 text-xs mt-1">Time slot is required</span>}
                </div>
              </div>

              <Button type="submit" fullWidth className="mt-4 gap-2">
                <Send size={18} />
                Book via WhatsApp
              </Button>
              <p className="text-xs text-center text-gray-400 mt-2">
                You will be redirected to WhatsApp to send the details.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
