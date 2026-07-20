import Link from 'next/link';
import Image from 'next/image';

// Lightweight SVG Icon Fallbacks
const ShieldCheck = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const Cpu = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
);

const Users = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const Wrench = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
  </svg>
);

const ArrowRight = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const CheckCircle2 = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Star = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const Award = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15l-2 5l2-1.5l2 1.5l-2-5m0 0A5 5 0 1 0 12 5a5 5 0 0 0 0 10z" />
  </svg>
);

const ChevronRight = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

export default function HomePage() {
  const stats = [
    { label: "Years of Excellence", value: "17+" },
    { label: "Dealers Nationwide", value: "500+" },
    { label: "Products Manufactured", value: "1M+" },
    { label: "Service Centers", value: "150+" },
  ];

  const products = [
    {
      id: "coolers",
      title: "Air Coolers",
      desc: "Powerful and energy-efficient cooling solutions built for Indian summers — available in iron and plastic body variants.",
      image: "/images/product-cooler.jpg",
      badge: "Best Seller",
      highlights: ["Iron & Plastic Options", "High Air Delivery", "Large Tank Capacity", "Corrosion Resistant"]
    },
    {
      id: "tv",
      title: "LED Televisions",
      desc: "Crystal-clear visuals with vibrant colors and energy-efficient performance for everyday home entertainment.",
      image: "/images/product-led-tv.jpg",
      badge: "HD / Full HD",
      highlights: ["Energy-Efficient Panel", "Wide Viewing Angle", "HDMI & USB Ports", "Built-in Speakers"]
    },
    {
      id: "juicer",
      title: "Juicer Mixer Grinders",
      desc: "Versatile kitchen appliances designed for efficient juicing, mixing, and heavy-duty grinding.",
      image: "/images/product-grinder.webp",
      badge: "Kitchen Care",
      highlights: ["Powerful Motor", "Stainless Steel Blades", "Multiple Speed Settings", "Overload Protection"]
    },
    {
      id: "washing",
      title: "Washing Machines",
      desc: "Reliable and efficient washing machines engineered for fabric care, durability, and smooth performance.",
      image: "/images/product-washing.jpg",
      badge: "Fabric Care",
      highlights: ["Semi & Fully Automatic", "Multiple Wash Programs", "Rust-Proof Drum", "Eco-Energy Use"]
    },
    {
      id: "geyser",
      title: "Water Geysers",
      desc: "Fast-heating and energy-efficient water geysers for reliable hot water supply throughout winter.",
      image: "/images/product-geyser.png",
      badge: "Rapid Heat",
      highlights: ["Quick Heating Tech", "Anti-Corrosion Tank", "Pressure Valve", "Safety Thermostat"]
    },
    {
      id: "fan",
      title: "Ceiling Fans",
      desc: "Stylish and energy-efficient ceiling fans delivering powerful air circulation for year-round comfort.",
      image: "/images/product-fan.png",
      badge: "Low Power",
      highlights: ["High Air Delivery", "Silent Operation", "Durable Blade Build", "Multiple Color Options"]
    }
  ];

  const testimonials = [
    {
      quote: "Softline's iron cooler has been running flawlessly for two summers now. The build quality is excellent and cooling is top-tier.",
      name: "Rajesh Kumar",
      location: "Karnal",
      product: "Air Cooler"
    },
    {
      quote: "The LED TV display quality is outstanding — colors are crisp and vibrant. Exceptional value for money.",
      name: "Priya Sharma",
      location: "Panipat",
      product: "LED Television"
    },
    {
      quote: "As an authorized dealer, Softline products have the lowest return rate in my store. Customers always leave satisfied.",
      name: "Amit Patel",
      location: "Ambala",
      product: "Multiple Products"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-slate-50 pt-12 pb-20 md:pt-20 md:pb-32 border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-sky-100/80 border border-sky-200 text-sky-800 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full">
                <Award className="w-4 h-4 text-sky-600" />
                <span>Since 2009 — 17+ Years of Excellence</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Engineering Tomorrow&apos;s <br className="hidden sm:inline" />
                <span className="text-sky-600">Home Electronics</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                From high-delivery air coolers to smart LED TVs, Softline Industries delivers quality-engineered home appliances trusted by millions across India.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link 
                  href="/products/coolers" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-medium px-7 py-3.5 rounded-xl shadow-md shadow-sky-500/20 transition duration-200"
                >
                  Explore Products
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/company/about" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-sky-50 text-slate-700 border border-slate-200 hover:border-sky-200 font-medium px-7 py-3.5 rounded-xl transition duration-200"
                >
                  Our Story
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-sky-100/80 grid grid-cols-3 gap-4 text-left">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-sky-600 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-600">Durable Build</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-sky-600 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-600">Energy Efficient</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-sky-600 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-600">Pan-India Service</span>
                </div>
              </div>
            </div>

            {/* Hero Right Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none bg-white p-4 rounded-2xl border border-sky-100 shadow-xl shadow-sky-100/50">
                <div className="relative h-72 sm:h-96 rounded-xl overflow-hidden bg-slate-100">
                  <Image 
                    src="/images/cooler.webp" 
                    alt="Softline Industries Cooler Showcase" 
                    fill 
                    className="object-cover hover:scale-105 transition duration-500" 
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex items-end p-6">
                    <div className="text-white">
                      <span className="text-xs font-semibold uppercase tracking-wider text-sky-300">Featured Innovation</span>
                      <h3 className="text-xl font-bold">Desert Cooling Series</h3>
                      <p className="text-xs text-slate-200 mt-1">High air delivery built for tough Indian summers.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 2. STATS BAR */}
      <section className="bg-white border-b border-sky-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-sky-100">
            {stats.map((stat, idx) => (
              <div key={idx} className={`pt-4 lg:pt-0 ${idx % 2 === 1 ? 'border-l lg:border-l-0 border-sky-100' : ''}`}>
                <p className="text-3xl sm:text-4xl font-extrabold text-sky-600 tracking-tight">{stat.value}</p>
                <p className="text-sm font-medium text-slate-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 3. PRODUCT CATALOG GRID */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sky-600 text-sm font-semibold uppercase tracking-wider">Our Product Range</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">
            Engineered for Comfort, Built for Life
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Explore our wide lineup of durable consumer electronics and home appliances manufactured in Assandh, Haryana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl border border-sky-100 hover:border-sky-300 shadow-sm hover:shadow-md transition duration-300 flex flex-col overflow-hidden group"
            >
              {/* Image Container */}
              <div className="relative h-52 bg-slate-100 overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-sky-700 text-xs font-semibold px-2.5 py-1 rounded-md border border-sky-100">
                  {item.badge}
                </span>
              </div>

              {/* Details */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                  {item.desc}
                </p>

                <ul className="space-y-2 mb-6 mt-auto">
                  {item.highlights.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href={`/products/${item.id}`} 
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-sky-50 hover:bg-sky-600 text-sky-700 hover:text-white font-semibold text-sm py-2.5 rounded-lg border border-sky-100 hover:border-sky-600 transition duration-200"
                >
                  View Details
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 4. COMPANY HISTORY & TRUST */}
      <section className="bg-white border-y border-sky-100 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-sky-600 text-sm font-semibold uppercase tracking-wider">Since 2009</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                Built on Trust, Driven by Precision Engineering
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Founded in Assandh, Haryana, Softline Industries started with high-durability iron air coolers. Over the last 17+ years, we have expanded into state-of-the-art facilities producing LED TVs, Washing Machines, Geysers, and Kitchen Appliances.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-50 p-4 rounded-xl border border-sky-100">
                  <h4 className="font-semibold text-slate-900 text-sm">Quality First</h4>
                  <p className="text-xs text-slate-500 mt-1">Rigorous quality checks at every step of manufacturing.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-sky-100">
                  <h4 className="font-semibold text-slate-900 text-sm">Pan-India Support</h4>
                  <p className="text-xs text-slate-500 mt-1">Responsive customer support and service center grid.</p>
                </div>
              </div>

              <div className="pt-2">
                <Link 
                  href="/company/about" 
                  className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-semibold text-sm group"
                >
                  Learn more about our journey 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </Link>
              </div>
            </div>

            {/* Visual Box */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-sky-100 shadow-md h-80 sm:h-96 bg-slate-100">
                <Image 
                  src="/images/hero-manufacturing.jpg" 
                  alt="Softline Manufacturing Facility" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/20" />
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-sky-100 shadow-lg max-w-xs">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-sky-100 rounded-lg text-sky-600">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Headquarters</p>
                      <p className="text-sm font-bold text-slate-900">Assandh, Haryana-132039</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 5. TESTIMONIALS */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sky-600 text-sm font-semibold uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-2">What Our Customers & Partners Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-sky-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div>
                  <p className="font-bold text-slate-900 text-sm">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.location}</p>
                </div>
                <span className="text-xs font-semibold bg-sky-50 text-sky-600 px-2.5 py-1 rounded-md border border-sky-100">
                  {item.product}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 6. CALL TO ACTION */}
      <section className="bg-gradient-to-r from-sky-600 to-sky-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to Experience Softline Quality?</h2>
          <p className="text-sky-100 max-w-2xl mx-auto text-base sm:text-lg">
            Connect with our team to inquire about dealership opportunities, product catalogs, or customer support.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <Link 
              href="/support/complaint" 
              className="bg-white text-sky-700 hover:bg-sky-50 font-semibold px-8 py-3.5 rounded-xl shadow-lg transition"
            >
              Contact Support
            </Link>
            <Link 
              href="/support/downloads" 
              className="bg-sky-800/60 hover:bg-sky-800 text-white font-semibold px-8 py-3.5 border border-sky-400/40 rounded-xl transition"
            >
              Download Catalog
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}