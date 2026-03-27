import { Phone, Truck, Shield, Clock } from 'lucide-react';

export default function FleetRepair() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Fleet Repair Norco, CA
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              If your business depends on vehicles, you can't afford downtime.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At McCarthy Automotive Repair, we help keep your fleet running reliably so your drivers stay on the road and your business keeps moving. Whether you have one vehicle or an entire fleet, we'll work with you to keep everything maintained and operating the way it should.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-2xl mb-12">
            <div className="flex items-start gap-4">
              <Truck className="text-blue-600 flex-shrink-0 mt-1" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Maintenance That Works Around Your Business
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  We understand that every business is different.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  That's why we don't use a one-size-fits-all approach. We look at how your vehicles are used, how often they're driven, and what they need to stay reliable day in and day out.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Our goal is simple:
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  Keep your vehicles working, and prevent costly breakdowns before they happen.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <div className="flex items-start gap-4">
              <Clock className="text-red-600 flex-shrink-0 mt-1" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Reduce Downtime. Avoid Costly Repairs.
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Regular maintenance is the easiest way to avoid major repairs and unexpected issues.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  By staying ahead of wear and tear, you reduce the chances of vehicles breaking down, drivers getting stranded, or jobs getting delayed.
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  We help you stay ahead so your business doesn't fall behind.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-start gap-4">
              <Shield className="text-green-600 flex-shrink-0 mt-1" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  A Shop You Can Rely On
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  With over 45 years of experience, McCarthy Automotive Repair has worked on everything from daily work vehicles to larger fleets.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  When you bring your vehicles to us, you're getting:
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 mb-4 space-y-2">
                  <li>Straight answers</li>
                  <li>Fair pricing</li>
                  <li>Reliable repairs done right</li>
                </ul>
                <p className="text-lg font-semibold text-gray-900">
                  No runaround. No unnecessary work. Just a shop you can count on.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-10 rounded-2xl text-center border-2 border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Keep Your Fleet Running Strong
            </h3>
            <p className="text-xl text-gray-700 mb-8">
              If you manage a fleet and want to keep your vehicles reliable, safe, and on the road…
            </p>
            <a
              href="tel:951.737.2124"
              className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors font-bold text-lg"
            >
              <Phone size={24} />
              Call (951) 737-2124
            </a>
            <p className="text-sm mt-6 text-gray-600">
              Give us a call and let's set up a plan that works for your business.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
