import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Solutions } from './components/Solutions';
import { Expert } from './components/Expert';
import { ContactForm } from './components/ContactForm';
import { PremiumServices } from './components/PremiumServices';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Disable dragging of images/links
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

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
