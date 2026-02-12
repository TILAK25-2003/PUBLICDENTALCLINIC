import {
  Stethoscope,
  Smile,
  Activity,
  Sparkles,
  ShieldCheck,
  Syringe,
  Zap,
  Baby,
  HeartPulse,
  Gem,
  AlertCircle,
  TrendingUp,
  Pill
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
    registration: "6610/A",
    qualification: "BDS (Rohtak), MDS (Delhi NCR), A.O.I.P (Spain), M.I.S.P",
    experience: "11+ Years",
    specialization: "Gum Specialist & Oral Implantologist",
    patients: "5000+",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fd3a4464df72a43a692e71a2ce12b099e%2F6a3b04a3b012465a83cea67d375992fa?format=webp&width=800&height=1200"
  },
  {
    id: 2,
    name: "Dr. Maitraiyee Ekshipta",
    registration: "8553/A",
    qualification: "BDS (Patna), Ex-Resident (Budhha, Bhilai)",
    experience: "7+ Years",
    specialization: "Gum Specialist & Oral Implantologist",
    patients: "2500+",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fd3a4464df72a43a692e71a2ce12b099e%2F1d5a299fdc314a16b05a81ef0f8f3f92?format=webp&width=800&height=1200"
  }
];

export const SERVICES = [
  { name: "Teeth Whitening", icon: Sparkles },
  { name: "Bonding", icon: Gem },
  { name: "Check-ups", icon: ShieldCheck },
  { name: "Cosmetic Procedures", icon: Sparkles },
  { name: "Dental Implants", icon: Syringe },
  { name: "Dentures & Bridges", icon: Activity },
  { name: "Emergency Care", icon: AlertCircle },
  { name: "Extractions", icon: Pill },
  { name: "Fillings and Sealants", icon: TrendingUp },
  { name: "Laser Dentistry", icon: Zap },
  { name: "Mouth Guards", icon: ShieldCheck },
  { name: "Online Dentist Booking", icon: Activity },
  { name: "Oral Surgery", icon: Stethoscope },
  { name: "Pediatric Dentistry", icon: Baby },
  { name: "Root Canals", icon: Activity },
  { name: "Teeth Cleaning", icon: Smile },
  { name: "Teeth Reshaping", icon: TrendingUp },
  { name: "Veneers & Crowns", icon: Gem },
  { name: "Aligners", icon: Smile },
  { name: "Traditional Braces", icon: Smile },
  { name: "Bone Grafting", icon: Syringe },
  { name: "Gum Surgery", icon: HeartPulse },
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
