import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DiscountModal from './components/DiscountModal';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import AutoRepair from './pages/AutoRepair';
import FactoryMaintenance from './pages/FactoryMaintenance';
import FleetRepair from './pages/FleetRepair';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showDiscountModal, setShowDiscountModal] = useState(false);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDiscountModal(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'services':
        return <Services />;
      case 'about':
        return <About />;
      case 'auto-repair':
        return <AutoRepair />;
      case 'factory-maintenance':
        return <FactoryMaintenance />;
      case 'fleet-repair':
        return <FleetRepair />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
      <DiscountModal
        isOpen={showDiscountModal}
        onClose={() => setShowDiscountModal(false)}
      />
    </div>
  );
}

export default App;
