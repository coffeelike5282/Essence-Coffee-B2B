import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Solutions } from './components/Solutions';
import { Expert } from './components/Expert';
import { ContactForm } from './components/ContactForm';
import { PremiumServices } from './components/PremiumServices';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="antialiased min-h-screen flex flex-col bg-background text-on-surface">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <PainPoints />
        <Solutions />
        <Expert />
        <ContactForm />
        <PremiumServices />
      </main>
      <Footer />
    </div>
  );
};

export default App;
