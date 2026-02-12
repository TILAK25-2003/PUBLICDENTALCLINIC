import { 
  Stethoscope, 
  Smile, 
  Activity, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Phone, 
  MapPin,
  Calendar,
  Syringe,
  Zap,
  Baby,
  HeartPulse
} from 'lucide-react';

export const CLINIC_DETAILS = {
  name: "PUBLIC DENTAL CLINIC",
  phone: "+918059641243",
  displayPhone: "+91 80596 41243",
  location: "Muzaffarpur, Bihar",
  maps: {
    clinic1: "https://maps.app.goo.gl/FhyfstXTmxE7cz2Y8?g_st=aw",
    clinic2: "https://maps.app.goo.gl/W3fiDSZerRbJ7hzD8?g_st=aw"
  }
};

export const DOCTORS = [
  {
    id: 1,
    name: "Dr. Kunal Gaurav Seth",
    qualification: "BDS (Rohtak), MDS (Delhi NCR), A.O.I.P (Spain), M.I.S.P",
    experience: "11+ Years",
    specialization: "Gum Specialist & Oral Implantologist",
    patients: "5000+",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop" // Placeholder professional doctor image
  },
  {
    id: 2,
    name: "Dr. Maitraiyee Ekshipta",
    qualification: "BDS (Patna), Ex-Resident (Budhha, Bhilai)",
    experience: "7+ Years",
    specialization: "Gum Specialist & Oral Implantologist",
    patients: "5000+",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800&auto=format&fit=crop" // Placeholder professional doctor image
  }
];

export const SERVICES = [
  { name: "Teeth Whitening", icon: Sparkles },
  { name: "Dental Implants", icon: Syringe },
  { name: "Root Canal Treatment", icon: Activity },
  { name: "Orthodontics (Braces)", icon: Smile },
  { name: "Pediatric Dentistry", icon: Baby },
  { name: "Gum Surgery", icon: HeartPulse },
  { name: "Oral Surgery", icon: Stethoscope },
  { name: "Veneers & Crowns", icon: ShieldCheck },
  { name: "Laser Dentistry", icon: Zap },
  { name: "Emergency Care", icon: Clock },
  { name: "Teeth Cleaning", icon: Sparkles },
  { name: "Aligners", icon: Smile },
];

export const TIMINGS = {
  clinic1: {
    weekdays: "10:00 AM – 2:30 PM & 4:00 PM – 8:00 PM",
    sunday: "11:00 AM – 4:00 PM"
  },
  clinic2: {
    weekdays: "10:00 AM – 5:00 PM",
    sunday: "Closed"
  }
};
