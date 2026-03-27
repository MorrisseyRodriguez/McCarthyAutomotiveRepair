import { MapPin, Phone, Wrench } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-slate-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section with Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="flex items-center gap-4">
            <MapPin className="text-blue-400 flex-shrink-0" size={48} />
            <div>
              <p className="text-blue-400 text-lg font-medium mb-1">Directions to</p>
              <a
                href="https://maps.google.com/?q=2551+Hamner+Ave,+Norco,+CA+92860"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors text-xl font-semibold"
              >
                McCarthy Automotive
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="text-white flex-shrink-0" size={48} />
            <div>
              <p className="text-white text-lg font-medium mb-1">Call Us Today</p>
              <a
                href="tel:951.737.2124"
                className="text-blue-400 hover:text-blue-300 transition-colors text-xl font-semibold"
              >
                (951) 737-2124
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Wrench className="text-blue-400 flex-shrink-0" size={48} />
            <div>
              <p className="text-blue-400 text-lg font-medium mb-1">Our Services</p>
              <button
                onClick={() => onNavigate('services')}
                className="text-blue-400 hover:text-blue-300 transition-colors text-xl font-semibold text-left"
              >
                View Our Services
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-12"></div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4 border-b-2 border-blue-400 pb-2 inline-block">About Us</h4>
            <div className="space-y-2 text-gray-300 mt-4">
              <p>2551 Hamner Ave,</p>
              <p>Norco, CA 92860</p>
              <p className="mt-4">
                <span className="font-semibold">Shop Number:</span>{' '}
                <a href="tel:951.737.2124" className="text-gray-300 hover:text-white transition-colors">
                  (951) 737-2124
                </a>
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.yelp.com/biz/mccarthy-automotive-repair-norco"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 px-4 py-3 rounded hover:bg-red-700 transition-colors flex items-center gap-2"
                aria-label="Yelp"
              >
                <img src="/src/Images/yelp.png" alt="Yelp" className="h-5" />
                <span className="text-white font-semibold">Yelp</span>
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4 border-b-2 border-blue-400 pb-2 inline-block">Our Services</h4>
            <div className="space-y-2 text-gray-300 mt-4">
              <button
                onClick={() => onNavigate('services')}
                className="block hover:text-white transition-colors text-left"
              >
                ✓ Engine Diagnostics & Check Engine Light
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="block hover:text-white transition-colors text-left"
              >
                ✓ Brake & ABS Repair
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="block hover:text-white transition-colors text-left"
              >
                ✓ Transmission & Engine Repair
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="block hover:text-white transition-colors text-left"
              >
                ✓ Suspension & Steering
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="block hover:text-white transition-colors text-left"
              >
                ✓ A/C & Heating Systems
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="block hover:text-white transition-colors text-left"
              >
                ✓ Auto Electrical
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="block hover:text-white transition-colors text-left"
              >
                ✓ Diesel, Foreign & Domestic Vehicles
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="block hover:text-white transition-colors text-left"
              >
                ✓ Cars & Trucks
              </button>
            </div>
          </div>

          {/* Our Hours */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4 border-b-2 border-blue-400 pb-2 inline-block">Our Hours</h4>
            <div className="space-y-2 text-gray-300 mt-4">
              <div className="flex justify-between gap-8">
                <span>Monday:</span>
                <span className="text-right">8:00AM - 6:00PM</span>
              </div>
              <div className="flex justify-between gap-8">
                <span>Tuesday:</span>
                <span className="text-right">8:00AM - 6:00PM</span>
              </div>
              <div className="flex justify-between gap-8">
                <span>Wednesday:</span>
                <span className="text-right">8:00AM - 6:00PM</span>
              </div>
              <div className="flex justify-between gap-8">
                <span>Thursday:</span>
                <span className="text-right">8:00AM - 6:00PM</span>
              </div>
              <div className="flex justify-between gap-8">
                <span>Friday:</span>
                <span className="text-right">8:00AM - 6:00PM</span>
              </div>
              <div className="flex justify-between gap-8">
                <span>Saturday:</span>
                <span className="text-right">8:00AM - 5:00PM</span>
              </div>
              <div className="flex justify-between gap-8">
                <span>Sunday:</span>
                <span className="text-right font-semibold">CLOSED</span>
              </div>
            </div>
          </div>

          {/* Our Location */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4 border-b-2 border-blue-400 pb-2 inline-block">Our Location</h4>
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.6486287397804!2d-117.56892!3d33.93111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcae1f1234abcd%3A0x1234567890abcdef!2s2551%20Hamner%20Ave%2C%20Norco%2C%20CA%2092860!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="McCarthy Automotive Repair Location"
                className="rounded"
              ></iframe>
              <a
                href="https://maps.google.com/?q=2551+Hamner+Ave,+Norco,+CA+92860"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 text-blue-400 hover:text-blue-300 transition-colors text-sm"
              >
                Open in Maps →
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} McCarthy Automotive Repair. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
