import Image from 'next/image';
import Link from 'next/link';

// Inline Icons
const AwardIcon = () => (
  <svg className="w-6 h-6 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15l-2 5l2-1.5l2 1.5l-2-5m0 0A5 5 0 1 0 12 5a5 5 0 0 0 0 10z" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-6 h-6 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-4 h-4 text-sky-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function AboutPage() {
  const leadership = [
    { name: "Executive Team", role: "Manufacturing Operations", desc: "Overseeing state-of-the-art assembly lines in Assandh, Haryana." },
    { name: "Engineering Division", role: "R&D & Quality Control", desc: "Ensuring energy efficiency and durability across all product lines." },
    { name: "Dealer Relations", role: "Pan-India Sales", desc: "Connecting 500+ dealer networks with reliable logistics." },
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sky-600 text-sm font-semibold uppercase tracking-wider">Company Overview</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-2 tracking-tight">
            About Softline Industries
          </h1>
          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            Delivering quality-engineered consumer electronics and home appliances since 2009.
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl border border-sky-100 shadow-sm">
            <div className="p-3 bg-sky-50 w-fit rounded-xl mb-4 border border-sky-100">
              <AwardIcon />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Mission</h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To engineer high-performance, energy-efficient, and accessible home electronics that improve everyday living for households across India.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-sky-100 shadow-sm">
            <div className="p-3 bg-sky-50 w-fit rounded-xl mb-4 border border-sky-100">
              <UsersIcon />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Vision</h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To build an enduring enterprise rooted in trust, innovation, and eco-friendly manufacturing standardizations.
            </p>
          </div>
        </div>

        {/* Manufacturing Focus */}
        <div className="bg-white rounded-2xl border border-sky-100 shadow-sm p-8 sm:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">Manufacturing Excellence</h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                From our facility in Assandh, Haryana, Softline Industries manages full lifecycle manufacturing for Air Coolers, LED TVs, Washing Machines, and Geysers.
              </p>
              <ul className="space-y-2 pt-2">
                {["In-house quality testing", "Corrosion-resistant materials", "Eco-compliant production process", "National dealer support network"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-5 relative h-64 rounded-xl overflow-hidden bg-slate-100 border border-sky-100">
              <Image src="/images/hero-manufacturing.jpg" alt="Softline Manufacturing" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Organization Pillars */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Operational Teams</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadership.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-sky-100 shadow-sm">
                <h4 className="text-lg font-bold text-slate-900">{item.name}</h4>
                <p className="text-xs font-semibold text-sky-600 mb-2">{item.role}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}