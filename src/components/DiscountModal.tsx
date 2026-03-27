import { X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface DiscountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DiscountModal({ isOpen, onClose }: DiscountModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-70"
        onClick={handleClose}
      ></div>

      <div
        className={`relative bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${
          isVisible ? 'scale-100' : 'scale-95'
        }`}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <X size={24} className="text-gray-700" />
        </button>

        <div className="p-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Special Discount Offer
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-xl md:text-2xl font-semibold text-blue-600">
              Thank You for Your Service!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/silhouette-of-soldiers-on-the-background-of-the-american-flag-military-soldier-silhouettes-against-the-american-flag-ai-generated-free-photo.jpg"
                alt="Military Veterans"
                className="w-full h-48 object-cover"
              />
              <div className="bg-slate-900 text-white p-4 text-center">
                <h3 className="text-xl font-bold">Veterans</h3>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/Screenshot_2026-03-27_123057.png"
                alt="First Responders"
                className="w-full h-48 object-cover"
              />
              <div className="bg-red-700 text-white p-4 text-center">
                <h3 className="text-xl font-bold">First Responders</h3>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-2 border-blue-600 rounded-lg p-6 text-center">
            <p className="text-lg md:text-xl text-slate-800 leading-relaxed mb-4">
              We proudly offer <span className="font-bold text-blue-600">special discounts</span> to all
              <span className="font-bold"> Veterans</span> and <span className="font-bold">First Responders</span> as
              a token of our appreciation for your dedicated service to our community and country.
            </p>
            <p className="text-lg text-slate-700">
              Call us at{' '}
              <a href="tel:951.737.2124" className="font-bold text-blue-600 hover:text-blue-700">
                (951) 737-2124
              </a>{' '}
              to learn more!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
