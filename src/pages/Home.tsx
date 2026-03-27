import { Phone, Wrench, Award, DollarSign, Search, Star } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface HomeProps {
  onNavigate?: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [expandedReviews, setExpandedReviews] = useState<Set<number>>(new Set());

  const testimonials = [
    {
      name: 'Dana M.',
      location: 'Rialto, CA',
      text: 'McCarthy Auto Repair is honest, reliable, with top notch customer service. I highly recommend. My car needed major repairs. Larry was honest with the price and prioritise the work for me to decide.',
    },
    {
      name: 'Ren E.',
      location: 'Berkeley, CA',
      text: 'I called around to a few places in the area for quote and this one immediately stood out for being reasonably priced (actually the only place that gave a normal price compared to others that were charging a lot extra) as well as friendly and attentive with a family vibe. I was able to thankfully drop off my car fairly close to the end of the day on late notice for all rotors/breaks, the job got done, and I had my car back within a couple of hours. LARRY and his team are amazing and I\'ll definitely go back should my car ever need anything.',
    },
    {
      name: 'Brian J.',
      location: 'Mira Loma, CA',
      text: 'The owner, Larry, and his fellow mechanic, Bob, went above and beyond to make sure our daughter\'s car was repaired. They diligently worked on her car until they solved the issue plaguing her steering wheel and made sure we knew she would be safe on the road. He even called us a few days later to check to see that the car was running to our satisfaction. We would HIGHLY recommend McCarthy Auto repair!!',
    },
    {
      name: 'Kimbel R.',
      location: 'Lake Forest, CA',
      text: 'Very fair and fast repair. Brought my car in at 11 and was done at 2. Very friendly and knowledgeable would recommend him had my VW Routan worked on.',
    },
    {
      name: 'Shauna H.',
      location: 'Beaumont, CA',
      text: 'Another shop tried to charge me $1000-$1500 for a nonexistent problem before replacing my battery. I had my car towed to McCarthy auto, who tested my car for free and told me it just needed a new battery. Even though he is an hour away he is my new mechanic, the drive is worth the peace of mind to know I\'m dealing with a mechanic with integrity. You will never be over charged or pay for anything unnecessary!',
    },
    {
      name: 'Scott M.',
      location: 'Corona, CA',
      text: 'Excellent work getting my 1965 Mustang back on the road without charging exorbitant prices. One of the few mechanics in the IE that is qualified and willing to work on old cars. Picked up one car and dropped another off, 2003 VW Passat. Got that fixed up quickly and for a reasonable price. Would definitely recommend.',
    },
  ];

  const toggleReview = (index: number) => {
    const newExpanded = new Set(expandedReviews);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedReviews(newExpanded);
  };

  const getPreviewText = (text: string) => {
    const lines = text.split('\n').join(' ').split('. ');
    if (lines.length <= 3) return text;
    return lines.slice(0, 3).join('. ') + '.';
  };

  const needsExpansion = (text: string) => {
    const lines = text.split('\n').join(' ').split('. ');
    return lines.length > 3;
  };

  const allTestimonials = [...testimonials, ...testimonials];

  const services = [
    { icon: Search, name: 'Engine Diagnostics & Check Engine Light' },
    { icon: Wrench, name: 'Brake & ABS Repair' },
    { icon: Wrench, name: 'Transmission & Engine Repair' },
    { icon: Wrench, name: 'Suspension & Steering' },
    { icon: Wrench, name: 'A/C & Heating Systems' },
    { icon: Wrench, name: 'Auto Electrical' },
    { icon: Wrench, name: 'Diesel, Foreign & Domestic Vehicles' },
    { icon: Wrench, name: 'Cars & Trucks' },
  ];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer || isPaused || isDragging) return;

    let scrollAmount = scrollContainer.scrollLeft;
    const scrollSpeed = 0.5;

    const scroll = () => {
      if (!isPaused && !isDragging && scrollContainer) {
        scrollAmount += scrollSpeed;
        scrollContainer.scrollLeft = scrollAmount;

        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
          scrollContainer.scrollLeft = 0;
        }
      }
      requestAnimationFrame(scroll);
    };

    const animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.cursor = 'grabbing';
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const x = e.touches[0].pageX;
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div>
      <section className="relative h-[70vh] lg:h-[72vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/Images/20260326_105322.jpg"
            alt="Professional automotive repair"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
              Best Norco Automotive Repair Service
              <br />
              <span className="text-blue-400">Give us a call Today!</span>
            </h1>
            <a
              href="tel:951.737.2124"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg"
            >
              <Phone size={24} />
              Call Today to inquire or book an appointment!
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
              You don't need another mechanic throwing random fixes at your car.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
              At McCarthy Automotive Repair, we find the real problem first, fix it right, and keep your costs fair.
            </p>
            <p className="text-lg sm:text-xl font-semibold text-gray-900">
              45+ years of experience. Trusted by drivers across Norco.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
            Why Drivers in Norco Trust McCarthy With Their Car
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Search className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                We Fix the Problem, Not Guess at It
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Most shops start replacing parts and hoping it works. We start with a proper diagnostic, so you only pay for what your car actually needs.
              </p>
            </div>

            <div className="p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                45 Years of Experience Means Fewer Surprises
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Foreign, domestic, diesel, electrical, transmission, doesn't matter. If it's under the hood, we've seen it, fixed it, and fixed it right.
              </p>
            </div>

            <div className="p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <DollarSign className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Fair Pricing, No Upsells, No Games
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We show you what's wrong, explain what actually needs to be done, and let you decide.
              </p>
            </div>

            <div className="p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Wrench className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Free Diagnostic
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Not sure what's wrong? We'll figure it out and explain it clearly before any work begins.
              </p>
            </div>
          </div>
          <div className="mt-16 text-center">
            <button
              onClick={() => onNavigate?.('services')}
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg"
            >
              View Our Services
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
            Our Services
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/src/Images/20260326_105129.jpg"
                alt="McCarthy Automotive Repair Shop"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-900 font-medium">{service.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Certified. Trusted. Proven.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-100 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-gray-700" size={64} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">ASE Certified</h3>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-gray-700" size={64} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">TechNet Professional</h3>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-gray-700" size={64} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Smog Check Licensed</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8">
            See What Our Customers Are Saying
          </h2>

          <div className="bg-white py-6 mb-8 rounded-xl shadow-sm">
            <a
              href="https://www.yelp.com/biz/mccarthy-automotive-repair-norco?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-wrap items-center justify-center gap-4 hover:opacity-80 transition-opacity"
            >
              <div className="flex items-center gap-2">
                <img src="/src/Images/yelp.png" alt="Yelp" className="h-8" />
                <span className="text-gray-800 text-lg font-semibold">Yelp</span>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={24} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600 text-lg">4.7 Rating</span>
            </a>
          </div>

          <div
            ref={scrollContainerRef}
            className="overflow-x-auto overflow-y-hidden cursor-grab active:cursor-grabbing scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
          >
            <div className="flex gap-6 select-none pointer-events-none">
              {allTestimonials.map((testimonial, index) => {
                const isExpanded = expandedReviews.has(index);
                const showExpand = needsExpansion(testimonial.text);

                return (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[400px] bg-white p-8 rounded-2xl shadow-lg pointer-events-auto"
                  >
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={20} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 text-base leading-relaxed mb-4">
                      "{isExpanded ? testimonial.text : getPreviewText(testimonial.text)}"
                    </p>
                    {showExpand && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleReview(index);
                        }}
                        onMouseDown={(e) => e.stopPropagation()}
                        onTouchStart={(e) => e.stopPropagation()}
                        className="text-blue-600 hover:text-blue-700 font-semibold text-sm mb-4 transition-colors"
                      >
                        {isExpanded ? 'Show Less' : 'Read More'}
                      </button>
                    )}
                    <div className={showExpand ? '' : 'mt-2'}>
                      <p className="font-bold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Have a question or something wrong with your car?
          </h2>
          <a
            href="tel:951.737.2124"
            className="inline-flex items-center gap-3 bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors font-semibold shadow-lg"
          >
            <Phone size={20} />
            Give Us A Call Today!
          </a>
        </div>
      </section>
    </div>
  );
}
