import { Phone } from 'lucide-react';

export default function Services() {
  const services = [
    'Engine Diagnostics & Check Engine Light',
    'Brake & ABS Repair',
    'Transmission & Engine Repair',
    'Suspension & Steering',
    'A/C & Heating Systems',
    'Auto Electrical',
    'Diesel, Foreign & Domestic Vehicles',
    'Cars & Trucks',
  ];

  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At McCarthy Automotive Repair, we bring a combined 80 years of service and experience by the team to every job. From routine maintenance to more complex repairs, we've got your vehicle covered, bumper to bumper.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We know car repairs aren't something anyone looks forward to. But when something feels off, it's better to take care of it early before it turns into a bigger issue.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                With the daily driving and stop-and-go conditions around Norco, your vehicle goes through more than you think. If it's not performing the way it should, give us a call or stop by, we'll take a look and get you back on the road.
              </p>

              <div className="space-y-3 mb-8">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1 flex-shrink-0">✓</span>
                    <p className="text-gray-700 text-lg">{service}</p>
                  </div>
                ))}
              </div>

              <a
                href="tel:951.737.2124"
                className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold shadow-lg"
              >
                <Phone size={24} />
                Call Us Today
              </a>
            </div>

            <div className="lg:sticky lg:top-8">
              <img
                src="https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Auto repair service"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
