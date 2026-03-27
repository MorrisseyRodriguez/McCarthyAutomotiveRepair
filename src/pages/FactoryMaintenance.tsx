import { Phone, FileText, Shield, CheckCircle } from 'lucide-react';

export default function FactoryMaintenance() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Factory Scheduled Maintenance Norco, CA
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Every vehicle comes with a recommended service schedule based on mileage.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              But real driving conditions, heat, stop-and-go traffic, daily wear, can change what your car actually needs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              At McCarthy Automotive Repair, we don't just follow a generic schedule.<br />
              We look at your vehicle, how you drive, and what condition it's in right now, then give you a maintenance plan that actually makes sense.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-2xl mb-12">
            <div className="flex items-start gap-4">
              <FileText className="text-blue-600 flex-shrink-0 mt-1" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Maintenance That Matches Your Vehicle
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  After a routine service or inspection, we'll walk you through what your car needs now and what can wait.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  No guesswork. No unnecessary services.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Just a clear plan to keep your vehicle running strong and avoid bigger problems down the road.
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  If something doesn't feel right while driving, don't wait for your next scheduled service, bring it in and get it checked.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <div className="flex items-start gap-4">
              <Shield className="text-green-600 flex-shrink-0 mt-1" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Still Under Warranty? You Have Options
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  You don't have to go to the dealership for scheduled maintenance.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  McCarthy Automotive Repair is a reliable alternative, offering the same level of service without the inflated pricing or runaround.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We can follow your manufacturer's recommended schedule and keep your vehicle properly maintained without affecting your warranty.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-start gap-4">
              <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  We'll Help You Stay Ahead of Problems
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  If you don't have your owner's manual or aren't sure what your vehicle needs at your current mileage, we can look it up and guide you through it.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Our goal is simple:
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  Keep your car running the way it should, without overcomplicating things or overcharging you.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-10 rounded-2xl text-center border-2 border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Schedule Your Service Today
            </h3>
            <p className="text-xl text-gray-700 mb-8">
              If your vehicle is due for maintenance or you just want to make sure everything is running the way it should…
            </p>
            <a
              href="tel:951.737.2124"
              className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors font-bold text-lg"
            >
              <Phone size={24} />
              Call (951) 737-2124
            </a>
            <p className="text-sm mt-6 text-gray-600">
              Give us a call and we'll take care of it.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
