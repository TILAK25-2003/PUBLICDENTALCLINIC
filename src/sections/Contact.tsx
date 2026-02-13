import { MapPin } from 'lucide-react';
import { CLINIC_DETAILS } from '../data/clinicData';
import { Button } from '../components/ui/Button';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-accentLight to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">Visit Us</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Clinic 1 */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-accent/20">
            <div className="bg-primary p-4 text-white">
              <h3 className="text-xl font-bold">Clinic 1 Location</h3>
            </div>
            <div className="h-64 w-full bg-accentLight relative">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.857640242502!2d85.3647!3d26.1209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDA3JzE1LjIiTiA4NcKwMjEnNTIuOSJF!5e0!3m2!1sen!2sin!4v1629909613654!5m2!1sen!2sin"
                 width="100%" 
                 height="100%" 
                 style={{border:0}} 
                 allowFullScreen 
                 loading="lazy"
               ></iframe>
            </div>
            <div className="p-6 bg-secondary/50">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="text-accent shrink-0" />
                <p className="text-gray-300">Khadi bhandar, Khadi gramodyog market complex, chowk, Kanhauli, Muzaffarpur, Bihar 842002</p>
              </div>
              <a href={CLINIC_DETAILS.maps.clinic1} target="_blank" rel="noreferrer">
                <Button variant="outline" fullWidth className="text-sm">Get Directions</Button>
              </a>
            </div>
          </div>

          {/* Clinic 2 */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-accent/20">
            <div className="bg-primary p-4 text-white">
              <h3 className="text-xl font-bold">Clinic 2 Location</h3>
            </div>
            <div className="h-64 w-full bg-accentLight relative">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.857640242502!2d85.3647!3d26.1209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDA3JzE1LjIiTiA4NcKwMjEnNTIuOSJF!5e0!3m2!1sen!2sin!4v1629909613654!5m2!1sen!2sin"
                 width="100%" 
                 height="100%" 
                 style={{border:0}} 
                 allowFullScreen 
                 loading="lazy"
               ></iframe>
            </div>
            <div className="p-6 bg-secondary/50">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="text-accent shrink-0" />
                <p className="text-gray-300">Jalan Aushadhalay, Saraiyaganj tower, Near chunnilal megamart, Muzaffarpur, Bihar 842001</p>
              </div>
              <a href={CLINIC_DETAILS.maps.clinic2} target="_blank" rel="noreferrer">
                <Button variant="outline" fullWidth className="text-sm">Get Directions</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
