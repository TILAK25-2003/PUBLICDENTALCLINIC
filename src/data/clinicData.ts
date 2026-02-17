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
    patients: "8000+",
    image: "https://images.dualite.app/c0a7dabd-b4a5-491f-a8a0-1b8ab3c6d039/WhatsApp_Image_2026-02-17_at_11.30.36_AM-00a85a8b-0ca9-4e42-afc9-83d41506ae99.webp"
  },
  {
    id: 2,
    name: "Dr. Maitraiyee Ekshipta",
    registration: "8553/A",
    qualification: "BDS (Patna), Ex-Resident (Buddha dental college, Patna)",
    experience: "7+ Years",
    specialization: "Gum Specialist & Oral Implantologist",
    patients: "5000+",
    image: "https://images.dualite.app/c0a7dabd-b4a5-491f-a8a0-1b8ab3c6d039/WhatsApp_Image_2026-02-17_at_11.30.23_AM-2879b3d1-9549-41c2-b317-c0161385d468.webp"
  }
];

export const SERVICES = [
  { name: "Teeth Whitening", icon: Sparkles, description: "Professional bleaching to brighten your smile and remove stains", image: "https://cdn.builder.io/api/v1/image/assets%2Fd3a4464df72a43a692e71a2ce12b099e%2Fc5c38065570743a9b36e1c7d49291283?format=webp&width=800&height=1200" },
  { name: "Bonding", icon: Gem, description: "Tooth-colored resin applied to repair chips and gaps", image: "https://cdn.builder.io/api/v1/image/assets%2Fd3a4464df72a43a692e71a2ce12b099e%2F09af41763a354c8e97ffdf8ba4b82a82?format=webp&width=800&height=1200" },
  { name: "Check-ups", icon: ShieldCheck, description: "Regular dental exams to detect issues early and maintain oral health", image: "https://cdn.builder.io/api/v1/image/assets%2Fd3a4464df72a43a692e71a2ce12b099e%2F033eafe45a90406bb5c78dfb770ede73?format=webp&width=800&height=1200" },
  { name: "Cosmetic Procedures", icon: Sparkles, description: "Treatments to improve appearance of teeth and smile", image: "https://cdn.builder.io/api/v1/image/assets%2Fd3a4464df72a43a692e71a2ce12b099e%2Ff19461ed60bc463696f3c21c6ae78aa6?format=webp&width=800&height=1200" },
  { name: "Dental Implants", icon: Syringe, description: "Permanent replacement for missing teeth with titanium posts", image: "https://cdn.builder.io/api/v1/image/assets%2Fd3a4464df72a43a692e71a2ce12b099e%2F85bc594832d145d08cdc675fad955789?format=webp&width=800&height=1200" },
  { name: "Dentures & Bridges", icon: Activity, description: "Removable or fixed replacements for multiple missing teeth", image: "https://cdn.builder.io/api/v1/image/assets%2Fd3a4464df72a43a692e71a2ce12b099e%2F27879e4147334f98a8d41230de270e5a?format=webp&width=800&height=1200" },
  { name: "Emergency Care", icon: AlertCircle, description: "Urgent dental treatment for pain, accidents, and sudden issues", image: "https://cdn.builder.io/api/v1/image/assets%2Fd3a4464df72a43a692e71a2ce12b099e%2Fa5c77c9c451749a49fe42b63a08db4bf?format=webp&width=800&height=1200" },
  { name: "Extractions", icon: Pill, description: "Safe removal of damaged or problematic teeth", image: "https://cdn.builder.io/api/v1/image/assets%2Fd3a4464df72a43a692e71a2ce12b099e%2Fa44d84c2ed064b0bb2a3ba70ddeb62f3?format=webp&width=800&height=1200" },
  { name: "Fillings and Sealants", icon: TrendingUp, description: "Protection against cavities by filling holes and sealing grooves", image: "https://cdn.builder.io/api/v1/image/assets%2Fd3a4464df72a43a692e71a2ce12b099e%2Fdbcc2d3066484c3297e2e56b42a6570c?format=webp&width=800&height=1200" },
  { name: "Laser Dentistry", icon: Zap, description: "Advanced laser technology for precise and painless treatments", image: "https://cdn.builder.io/api/v1/image/assets%2Fd3a4464df72a43a692e71a2ce12b099e%2F1176449fd2a946ac9f365110bcaa4f3f?format=webp&width=800&height=1200" },
  { name: "Mouth Guards", icon: ShieldCheck, description: "Custom guards to protect teeth during sports or grinding", image: "https://cdn.builder.io/api/v1/image/assets%2Fd3a4464df72a43a692e71a2ce12b099e%2F21d27268c7c64479b2c48e2695f6d3b1?format=webp&width=800&height=1200" },
  { name: "Online Dentist Booking", icon: Activity, description: "Schedule appointments conveniently through our website", image: "https://cdn.builder.io/api/v1/image/assets%2Fd3a4464df72a43a692e71a2ce12b099e%2F10a1dbbf4313407e96e9e0ef66229cbe?format=webp&width=800&height=1200" },
  { name: "Oral Surgery", icon: Stethoscope, description: "Surgical procedures for complex dental and jaw issues", image: "https://cdn.builder.io/api/v1/image/assets%2Fd3a4464df72a43a692e71a2ce12b099e%2F281c89fb22d0477b843cba2e2bba7764?format=webp&width=800&height=1200" },
  { name: "Pediatric Dentistry", icon: Baby, description: "Specialized care for children's dental health and development", image: "https://cdn.builder.io/api/v1/image/assets%2Fd3a4464df72a43a692e71a2ce12b099e%2Fd82ed18598434bc392f4bfcaf1e35db8?format=webp&width=800&height=1200" },
  { name: "Root Canals", icon: Activity, description: "Treatment to save infected or damaged teeth by removing the nerve", image: "https://cdn.builder.io/api/v1/image/assets%2Fd3a4464df72a43a692e71a2ce12b099e%2Fdf53809e8a68465ea08c200c5a48d93e?format=webp&width=800&height=1200" },
  { name: "Teeth Cleaning", icon: Smile, description: "Professional cleaning to remove plaque and tartar buildup", image: "https://cdn.builder.io/api/v1/image/assets%2Fd3a4464df72a43a692e71a2ce12b099e%2Fd9a67487120c4f0b8ea73eb3e269a27e?format=webp&width=800&height=1200" },
  { name: "Teeth Reshaping", icon: TrendingUp, description: "Contouring to improve shape and appearance of teeth", image: "https://cdn.builder.io/api/v1/image/assets%2Fd3a4464df72a43a692e71a2ce12b099e%2F668f815d35704d37b1bd4e34822a2360?format=webp&width=800&height=1200" },
  { name: "Veneers & Crowns", icon: Gem, description: "Caps and shells to strengthen teeth and enhance smile aesthetics", image: "https://cdn.builder.io/api/v1/image/assets%2Fd3a4464df72a43a692e71a2ce12b099e%2F144cdc4dc11d448a9ff929c310e2d828?format=webp&width=800&height=1200" },
  { name: "Aligners", icon: Smile, description: "Clear, removable trays to straighten teeth without visible braces", image: "https://cdn.builder.io/api/v1/image/assets%2Fd3a4464df72a43a692e71a2ce12b099e%2F3988b114bff04044b0fd5d02775cd5a1?format=webp&width=800&height=1200" },
  { name: "Traditional Braces", icon: Smile, description: "Metal brackets and wires to gradually align and straighten teeth", image: "https://cdn.builder.io/api/v1/image/assets%2Fd3a4464df72a43a692e71a2ce12b099e%2Ff47bea1019d14d38a504b54d9ff2092f?format=webp&width=800&height=1200" },
  { name: "Bone Grafting", icon: Syringe, description: "Restoring bone structure for implants or gum health", image: "https://cdn.builder.io/api/v1/image/assets%2Fd3a4464df72a43a692e71a2ce12b099e%2Fd1ac05a4f2614991aae6da86c0c7099c?format=webp&width=800&height=1200" },
  { name: "Gum Surgery", icon: HeartPulse, description: "Treatment for gum disease and restoration of gum health", image: "https://cdn.builder.io/api/v1/image/assets%2Fd3a4464df72a43a692e71a2ce12b099e%2F556198f14df64ef6aedc2b171d656442?format=webp&width=800&height=1200" },
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
