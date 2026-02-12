import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Doctors } from './sections/Doctors';
import { Services } from './sections/Services';
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
      <Services />
      <Reviews />
      <Appointment />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}

export default App;
