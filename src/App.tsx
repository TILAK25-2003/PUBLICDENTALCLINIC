import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Doctors } from './sections/Doctors';
import { DoctorsDedication } from './sections/DoctorsDedication';
import { Services } from './sections/Services';
import { OurUSPs } from './sections/OurUSPs';
import { Reviews } from './sections/Reviews';
import { Appointment } from './sections/Appointment';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';

function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Doctors />
      <DoctorsDedication />
      <Services />
      <OurUSPs />
      <Reviews />
      <Appointment />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}

export default App;
