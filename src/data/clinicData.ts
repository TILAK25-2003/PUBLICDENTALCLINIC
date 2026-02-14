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
    qualification: "BDS (Patna), Ex-Resident (Buddha dental college, Patna)",
    experience: "7+ Years",
    specialization: "Gum Specialist & Oral Implantologist",
    patients: "2500+",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fd3a4464df72a43a692e71a2ce12b099e%2F1d5a299fdc314a16b05a81ef0f8f3f92?format=webp&width=800&height=1200"
  }
];

export const SERVICES = [
  { name: "Teeth Whitening", icon: Sparkles, description: "Professional bleaching to brighten your smile and remove stains", image: "https://cdn.builder.io/api/v1/image/assets%2Fd3a4464df72a43a692e71a2ce12b099e%2Fc5c38065570743a9b36e1c7d49291283?format=webp&width=800&height=1200" },
  { name: "Bonding", icon: Gem, description: "Tooth-colored resin applied to repair chips and gaps", image: "https://cdn.builder.io/api/v1/image/assets%2Fd3a4464df72a43a692e71a2ce12b099e%2F09af41763a354c8e97ffdf8ba4b82a82?format=webp&width=800&height=1200" },
  { name: "Check-ups", icon: ShieldCheck, description: "Regular dental exams to detect issues early and maintain oral health", image: "https://images.unsplash.com/photo-1606811841689-23db76ef1eb3?w=400&h=300&fit=crop" },
  { name: "Cosmetic Procedures", icon: Sparkles, description: "Treatments to improve appearance of teeth and smile", image: "https://images.unsplash.com/photo-1606811841689-23db76ef1eb3?w=400&h=300&fit=crop" },
  { name: "Dental Implants", icon: Syringe, description: "Permanent replacement for missing teeth with titanium posts", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop" },
  { name: "Dentures & Bridges", icon: Activity, description: "Removable or fixed replacements for multiple missing teeth", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop" },
  { name: "Emergency Care", icon: AlertCircle, description: "Urgent dental treatment for pain, accidents, and sudden issues", image: "https://images.unsplash.com/photo-1631217307130-fe8110dc763e?w=400&h=300&fit=crop" },
  { name: "Extractions", icon: Pill, description: "Safe removal of damaged or problematic teeth", image: "https://images.unsplash.com/photo-1631217307130-fe8110dc763e?w=400&h=300&fit=crop" },
  { name: "Fillings and Sealants", icon: TrendingUp, description: "Protection against cavities by filling holes and sealing grooves", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop" },
  { name: "Laser Dentistry", icon: Zap, description: "Advanced laser technology for precise and painless treatments", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop" },
  { name: "Mouth Guards", icon: ShieldCheck, description: "Custom guards to protect teeth during sports or grinding", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop" },
  { name: "Online Dentist Booking", icon: Activity, description: "Schedule appointments conveniently through our website", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop" },
  { name: "Oral Surgery", icon: Stethoscope, description: "Surgical procedures for complex dental and jaw issues", image: "https://images.unsplash.com/photo-1631217307130-fe8110dc763e?w=400&h=300&fit=crop" },
  { name: "Pediatric Dentistry", icon: Baby, description: "Specialized care for children's dental health and development", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop" },
  { name: "Root Canals", icon: Activity, description: "Treatment to save infected or damaged teeth by removing the nerve", image: "https://images.unsplash.com/photo-1631217307130-fe8110dc763e?w=400&h=300&fit=crop" },
  { name: "Teeth Cleaning", icon: Smile, description: "Professional cleaning to remove plaque and tartar buildup", image: "https://images.unsplash.com/photo-1606811841689-23db76ef1eb3?w=400&h=300&fit=crop" },
  { name: "Teeth Reshaping", icon: TrendingUp, description: "Contouring to improve shape and appearance of teeth", image: "https://images.unsplash.com/photo-1606811841689-23db76ef1eb3?w=400&h=300&fit=crop" },
  { name: "Veneers & Crowns", icon: Gem, description: "Caps and shells to strengthen teeth and enhance smile aesthetics", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop" },
  { name: "Aligners", icon: Smile, description: "Clear, removable trays to straighten teeth without visible braces", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop" },
  { name: "Traditional Braces", icon: Smile, description: "Metal brackets and wires to gradually align and straighten teeth", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop" },
  { name: "Bone Grafting", icon: Syringe, description: "Restoring bone structure for implants or gum health", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop" },
  { name: "Gum Surgery", icon: HeartPulse, description: "Treatment for gum disease and restoration of gum health", image: "https://images.unsplash.com/photo-1631217307130-fe8110dc763e?w=400&h=300&fit=crop" },
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
