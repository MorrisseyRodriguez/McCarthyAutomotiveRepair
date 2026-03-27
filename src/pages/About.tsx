import { Phone } from 'lucide-react';

export default function About() {
  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
            Combined 80 Years of Service and Experience, Serving Norco Drivers
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-1 lg:order-1">
              <p className="text-lg text-gray-700 leading-relaxed">
                With a combined 80 years of service and experience by the team, Larry Whitcomb has built McCarthy Automotive Repair on one simple principle, take care of people the right way. When you bring your car in, you're not getting guesswork, upsells, or runaround. You're getting straight answers from someone who's spent decades diagnosing and fixing real problems on every type of vehicle, foreign, domestic, diesel, electrical, you name it. Whether it's routine maintenance or something more serious, you'll know exactly what's wrong, what it takes to fix it, and what it's going to cost. No surprises, no pressure, only honest work that gets you back on the road.
              </p>
            </div>
            <div className="order-2 lg:order-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <img
                    src="/images/20260326_105129.jpg"
                    alt="Auto repair service"
                    className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <img
                    src="/images/20260326_105322.jpg"
                    alt="Auto diagnostic equipment"
                    className="w-full h-[250px] object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <img
                    src="/images/20260326_105334.jpg"
                    alt="Auto repair parts"
                    className="w-full h-[250px] object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 sm:p-12 rounded-2xl text-center">
            <a
              href="tel:951.737.2124"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg"
            >
              <Phone size={24} />
              Give Us A Call Today!
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Commitment to You
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Honest Diagnostics
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                We don't guess and replace parts hoping to fix the problem. We properly diagnose your vehicle so you only pay for what you actually need.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Clear Communication
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                We explain exactly what's wrong with your vehicle in plain language, what needs to be done, and why. You'll understand the issue before any work begins.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Fair, Transparent Pricing
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                No hidden fees, no surprise charges, no high-pressure upselling. You get a clear estimate upfront and the final bill matches what we quoted.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Quality Workmanship
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                With a combined 80 years of service and experience by the team, we've seen and fixed it all. Your repair is done right the first time, so you can drive with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
