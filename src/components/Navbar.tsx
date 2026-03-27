import { Phone, Clock, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const servicePages = [
    { name: 'Auto Repair', path: 'auto-repair' },
    { name: 'Factory Scheduled Maintenance', path: 'factory-maintenance' },
    { name: 'Fleet Repair', path: 'fleet-repair' },
  ];

  const navItems = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
  ];


  return (
    <div className="sticky top-0 z-50">
      <div className="bg-gray-900 text-white py-2.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 text-sm">
            <a
              href="tel:951.737.2124"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <Phone size={16} />
              <span className="font-medium">(951) 737-2124</span>
            </a>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span className="hidden md:inline">MON - FRI: 8AM - 5PM | SAT-SUN: CLOSED</span>
              <span className="md:hidden">MON-FRI: 8AM-5PM | SAT-SUN: CLOSED</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div
              className="text-xl sm:text-2xl font-bold text-gray-900 cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              McCarthy Automotive Repair
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => onNavigate(item.path)}
                  className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${
                    currentPage === item.path ? 'text-blue-600' : ''
                  }`}
                >
                  {item.name}
                </button>
              ))}

              <div
                className="relative"
                ref={servicesRef}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  onClick={() => onNavigate('services')}
                  className={`text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center gap-1 ${
                    currentPage === 'services' || servicePages.some(s => s.path === currentPage) ? 'text-blue-600' : ''
                  }`}
                >
                  Services
                  <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {isServicesOpen && (
                  <div className="absolute top-full left-0 pt-2 w-64 z-50">
                    <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                      {servicePages.map((service) => (
                        <button
                          key={service.path}
                          onClick={() => {
                            onNavigate(service.path);
                            setIsServicesOpen(false);
                          }}
                          className={`w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors ${
                            currentPage === service.path ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
                          }`}
                        >
                          {service.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <a
                href="tel:951.737.2124"
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium flex items-center gap-2"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>

            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden pb-4">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => {
                    onNavigate(item.path);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors ${
                    currentPage === item.path ? 'text-blue-600 font-medium' : ''
                  }`}
                >
                  {item.name}
                </button>
              ))}

              <div className="py-2">
                <button
                  onClick={() => {
                    if (isMobileServicesOpen) {
                      onNavigate('services');
                      setIsMenuOpen(false);
                      setIsMobileServicesOpen(false);
                    } else {
                      setIsMobileServicesOpen(true);
                    }
                  }}
                  className={`flex items-center justify-between w-full text-gray-700 hover:text-blue-600 transition-colors ${
                    currentPage === 'services' || servicePages.some(s => s.path === currentPage) ? 'text-blue-600 font-medium' : ''
                  }`}
                >
                  Services
                  <ChevronDown size={16} className={`transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {isMobileServicesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {servicePages.map((service) => (
                      <button
                        key={service.path}
                        onClick={() => {
                          onNavigate(service.path);
                          setIsMenuOpen(false);
                          setIsMobileServicesOpen(false);
                        }}
                        className={`block w-full text-left py-2 text-sm ${
                          currentPage === service.path ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'
                        }`}
                      >
                        {service.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="tel:951.737.2124"
                className="mt-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
