import { Phone, Wrench, AlertCircle, CheckCircle } from 'lucide-react';

export default function AutoRepair() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Auto Repair Norco, CA
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              If something doesn't feel right with your car, don't ignore it.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At McCarthy Automotive Repair, we help drivers in Norco quickly figure out what's wrong and get it fixed without the guesswork or unnecessary repairs. With over 45 years of hands-on experience, we've worked on everything, from daily drivers to diesel trucks, foreign and domestic.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-2xl mb-12">
            <p className="text-lg text-gray-800 leading-relaxed">
              When you bring your vehicle in, you're not getting a random guess or a list of upsells. You're getting a proper diagnostic, a clear explanation, and a straightforward path to getting your car back on the road.
            </p>
          </div>

          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <AlertCircle className="text-red-600 flex-shrink-0 mt-1" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Strange Noise? Smell? Warning Light?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  If you're noticing something off, whether it's a noise, a smell, or your check engine light turning on, it's better to catch it early before it turns into something bigger.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  We have the tools and experience to quickly pinpoint the issue and fix it right the first time.
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  Not sure what's going on?<br />
                  That's exactly what our free diagnostic is for.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <div className="flex items-start gap-4">
              <Wrench className="text-blue-600 flex-shrink-0 mt-1" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Check Engine Light
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Your check engine light can mean a range of things, from something minor to a more serious issue.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  If it's not flashing, you can usually continue driving for a short time, but it's still best to have it checked as soon as possible.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  If the light starts flashing, pull over safely, turn off your engine, and call for assistance.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  At McCarthy Automotive Repair, we use professional diagnostic tools to identify exactly what's causing the issue, so you're not left guessing or paying for unnecessary repairs.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-start gap-4">
              <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Stay Ahead with Regular Maintenance
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  A lot of major repairs can be avoided with proper maintenance.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Simple services like:
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 mb-4 space-y-2">
                  <li>Oil changes</li>
                  <li>Brake inspections</li>
                  <li>Fluid checks and flushes</li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  can help prevent bigger, more expensive problems down the line.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  If you're not sure what your vehicle needs, we'll walk you through it and help you stay on top of it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
