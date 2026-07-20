import Image from 'next/image';
import Link from 'next/link';

const CheckIcon = () => (
  <svg className="w-3.5 h-3.5 text-sky-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function CoolersPage() {
  const coolersList = [
    { name: "Heavy Iron Body Desert Cooler", type: "Iron Body", capacity: "85L", airThrow: "45 ft", features: ["High-density Honeycomb", "Heavy Duty Motor", "Anti-Rust Coating"] },
    { name: "Compact Slim Plastic Air Cooler", type: "Plastic Body", capacity: "45L", airThrow: "30 ft", features: ["Low Power Draw", "Multi-Directional Wheels", "Quiet Operation"] },
    { name: "Jumbo Commercial Cooler", type: "Iron Body", capacity: "110L", airThrow: "60 ft", features: ["Large Water Inlet", "High-Volume Fan", "Thermal Protection"] },
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Banner */}
        <div className="bg-white rounded-2xl border border-sky-100 p-8 sm:p-12 mb-12 shadow-sm">
          <span className="text-sky-600 text-xs font-semibold uppercase tracking-wider">Product Catalog</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">Air Coolers Range</h1>
          <p className="text-slate-600 mt-2 text-sm sm:text-base max-w-2xl">
            High air delivery cooling systems built for performance during peak summer conditions.
          </p>
        </div>

        {/* Cooler Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coolersList.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-sky-100 hover:border-sky-300 shadow-sm overflow-hidden flex flex-col transition duration-200">
              <div className="relative h-56 bg-slate-100">
                <Image src="/images/product-cooler.jpg" alt={item.name} fill className="object-cover" />
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-sky-700 text-xs font-semibold px-2.5 py-1 rounded-md border border-sky-100">
                  {item.type}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.name}</h3>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-500 mb-4 bg-sky-50/50 p-2.5 rounded-lg border border-sky-100/60">
                  <div>Tank: <span className="font-semibold text-slate-800">{item.capacity}</span></div>
                  <div>Air Throw: <span className="font-semibold text-slate-800">{item.airThrow}</span></div>
                </div>
                <ul className="space-y-2 mb-6 mt-auto">
                  {item.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckIcon />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/support/complaint" className="w-full text-center bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm py-2.5 rounded-lg transition duration-200">
                  Inquire Now
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}