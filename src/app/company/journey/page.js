'use client';

import Link from 'next/link';

export default function OurJourneyPage() {
  const CHAPTER_CARDS = [
    {
      badge: 'The Beginning',
      title: 'Iron Air Coolers (2009)',
      desc: 'Our journey started with iron air coolers, built with strength, durability, and performance at their core. At a time when reliability mattered more than anything, our iron coolers earned trust for their robust build quality and efficient cooling performance. This phase laid the groundwork for our reputation in the cooling industry.'
    },
    {
      badge: 'Innovation & Evolution',
      title: 'Plastic Air Coolers',
      desc: 'As technology and consumer preferences evolved, so did we. Recognising the growing demand for lightweight, stylish, and low-maintenance products, we expanded into plastic air coolers — offering modern designs, improved portability, corrosion resistance, and enhanced energy efficiency. Over time, Softline established itself as a trusted name delivering some of the best-quality coolers in its category.'
    },
    {
      badge: 'Expanding Comfort',
      title: 'Room Coolers',
      desc: 'With growing customer trust and market demand, we moved into room coolers with higher air delivery, larger tank capacity, and better cooling coverage. Our products were designed keeping Indian climate conditions in mind, ensuring powerful performance even in peak summer.'
    },
    {
      badge: 'Diversification',
      title: 'Home Appliances',
      desc: 'As part of our long-term growth strategy, Softline Industries expanded into washing machines — built for efficiency, fabric care, and long-term durability — and LED televisions, designed to offer clarity, smart features, and energy efficiency. Every product was introduced with the same commitment: quality manufacturing, proper packaging, reliable components, and customer-focused design.'
    }
  ];

  const CHRONOLOGY_TIMELINE = [
    {
      year: '2009',
      title: 'Company Founded',
      desc: 'Softline Industries was established in Assandh, Haryana, built on years of prior experience in the electronics industry. Our journey began with a clear vision — reliable, high-quality home appliances combining performance, durability, and modern design.'
    },
    {
      year: '2009',
      title: 'Iron Air Coolers — The Beginning',
      desc: 'We launched our first product: iron air coolers built for strength and efficient cooling performance. At a time when reliability mattered most, our robust iron coolers earned immediate customer trust and laid the groundwork for our reputation in the cooling industry.'
    },
    {
      year: '2012',
      title: 'Innovation: Plastic Air Coolers',
      desc: 'Responding to evolving consumer preferences, we expanded into plastic air coolers — offering modern design, improved portability, corrosion resistance, and enhanced energy efficiency.'
    },
    {
      year: '2014',
      title: 'Expansion into Room Coolers',
      desc: 'We expanded our cooling range with room coolers featuring higher air delivery, larger tank capacity, and better cooling coverage.'
    },
    {
      year: '2016',
      title: 'Washing Machines Launch',
      desc: 'As part of our long-term growth strategy, Softline diversified into home appliances with the launch of our washing machine range.'
    },
    {
      year: '2018',
      title: 'LED Televisions Introduction',
      desc: 'We entered the LED television market with a range designed to offer clarity, smart features, and energy efficiency.'
    }
  ];

  const ROADMAP_VECTORS = [
    { num: '01', title: 'Product Innovation', desc: 'Continuous deployment of advanced engineering architectures and smart system integrations across all appliance categories.' },
    { num: '02', title: 'Market Expansion', desc: 'Expanding physical supply pipelines and corporate visibility across new regional trade markets nationwide.' },
    { num: '03', title: 'Network Strength', desc: 'Reinforcing a robust, highly communicative network of trusted dealers, distributors, and franchise partners.' },
    { num: '04', title: 'Service Centers', desc: 'Scaling up customer-centric service technical desks to ensure flawless, immediate after-sales support.' },
    { num: '05', title: 'Modern Manufacturing', desc: 'Integrating high-speed automated production assemblies and precision quality control testing protocols.' }
  ];

  return (
    <main className="min-h-screen text-white bg-[#070A13] flex flex-col justify-between">
      
      {/* SECTION 1: CINEMATIC HEADER BANNER */}
      <section className="w-full bg-[#0d1527]/60 border-b border-white/10 pt-16 pb-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs font-mono tracking-[0.3em] text-cyan-400 uppercase block mb-2">
            Historical Roadmap
          </span>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Our Journey
          </h1>
          <p className="text-gray-400 font-mono text-xs md:text-sm max-w-2xl leading-relaxed">
            From a single product built on trust to a full home appliance brand — the Softline Industries story since 2009.
          </p>
        </div>
      </section>

      {/* SECTION 2: WHERE IT ALL BEGAN STATEMENT */}
      <section className="w-full max-w-4xl mx-auto px-6 py-16">
        <span className="text-xs font-mono bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded text-cyan-400 uppercase tracking-widest">
          Founded in 2009
        </span>
        <h2 className="text-2xl md:text-3xl font-black mt-4 uppercase tracking-tight text-white mb-4">
          Where It All Began
        </h2>
        <p className="text-gray-400 font-mono text-xs md:text-sm leading-relaxed">
          Softline Industries began its journey with a clear vision — to deliver reliable, high-quality home appliances that combine performance, durability, and modern design. Before establishing Softline as a dedicated brand, we were actively involved in the electronics industry, gaining deep market experience, technical knowledge, and a strong understanding of customer needs.
        </p>
        <div className="text-xs font-mono text-cyan-400 font-bold mt-4">
          With this foundation, Softline Industries was born.
        </div>
      </section>

      {/* NEW SECTION 3: OUR STORY, CHAPTER BY CHAPTER */}
      <section className="w-full max-w-4xl mx-auto px-6 pb-20 space-y-8">
        <div>
          <h2 className="text-2xl font-black uppercase tracking-tight text-white">Our Story, Chapter by Chapter</h2>
          <div className="w-12 h-0.5 bg-cyan-400 mt-2" />
        </div>

        <div className="space-y-6">
          {CHAPTER_CARDS.map((chapter, idx) => (
            <div 
              key={idx} 
              className="w-full bg-[#0d1527]/40 border border-white/10 p-6 rounded-2xl shadow-xl flex flex-col items-start transition-all duration-300 hover:border-cyan-400/50"
            >
              <span className="text-[9px] font-mono font-bold uppercase tracking-widest bg-blue-600/15 border border-blue-500/30 text-cyan-400 px-3 py-1 rounded-full mb-3">
                {chapter.badge}
              </span>
              <h3 className="text-lg font-bold text-white uppercase tracking-wide mb-2">
                {chapter.title}
              </h3>
              <p className="text-xs text-gray-400 font-mono leading-relaxed">
                {chapter.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: PROCESS COMMITMENT ROW */}
      <section className="w-full max-w-4xl mx-auto px-6 pb-20">
        <span className="text-xs font-mono bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded text-emerald-400 uppercase tracking-widest">
          Our Commitment
        </span>
        <h2 className="text-2xl md:text-3xl font-black mt-4 uppercase tracking-tight text-white mb-4">
          Quality Is Our Process
        </h2>
        <p className="text-gray-400 font-mono text-xs md:text-sm leading-relaxed">
          At Softline Industries, quality is not just a promise — it is our process. From sourcing raw materials to final packaging, each product undergoes careful inspection and performance testing. We believe that proper packaging, secure handling, and consistent after-sales support are as important as the product itself.
        </p>
      </section>

      {/* SECTION 5: ALTERNATING KEY TIMELINE GRAPH */}
      <section className="w-full bg-[#0d1527]/20 border-t border-b border-white/5 py-20 relative">
        <div className="max-w-5xl mx-auto px-6 relative">
          
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">Key Milestones</h2>
            <div className="w-12 h-0.5 bg-cyan-400 mx-auto mt-3" />
          </div>

          <div className="absolute left-1/2 top-32 bottom-12 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-600 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-16">
            {CHRONOLOGY_TIMELINE.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`flex flex-col md:flex-row items-center justify-between w-full relative ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-full md:w-[45%] hidden md:block" />
                  <div className="absolute left-1/2 w-4 h-4 rounded-full bg-[#070A13] border-2 border-cyan-400 -translate-x-1/2 z-10 hidden md:flex items-center justify-center animate-pulse" />
                  <div className="w-full md:w-[45%] bg-[#0d1527]/60 border border-white/10 p-6 rounded-2xl shadow-xl hover:border-cyan-400 transition-all duration-300">
                    <span className="text-[10px] font-mono bg-blue-600/20 border border-blue-500/30 px-2.5 py-1 rounded-md text-cyan-400 font-bold uppercase tracking-wider block w-max mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-base font-bold uppercase tracking-wide text-white mb-2">{item.title}</h3>
                    <p className="text-[11px] text-gray-400 font-mono leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 6: DUAL STRATEGIC MISSION & VISION SLITS */}
      <section className="w-full max-w-4xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#0d1527]/40 border border-white/10 p-6 rounded-xl font-mono text-xs">
          <span className="text-cyan-400 font-bold block text-sm mb-2 uppercase tracking-wide">Our Vision</span>
          <p className="text-gray-400 leading-relaxed">To deliver innovative and dependable home appliances that improve everyday living while maintaining the highest standards of quality and service.</p>
        </div>
        <div className="bg-[#0d1527]/40 border border-white/10 p-6 rounded-xl font-mono text-xs">
          <span className="text-cyan-400 font-bold block text-sm mb-2 uppercase tracking-wide">Our Mission</span>
          <p className="text-gray-400 leading-relaxed">To continuously evolve with technology, expand responsibly, and create products that bring comfort and satisfaction to every home.</p>
        </div>
      </section>

      {/* UPGRADED HIGH-TECH SECTION 7: FUTURE ROADMAP DESIGN GRID (From image_ea3a4b.png) */}
      <section className="w-full bg-[#090d16] border-t border-white/10 py-24 font-mono">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="mb-12 text-center md:text-left">
            <span className="text-xs tracking-[0.3em] text-cyan-400 uppercase block mb-2">Corporate Horizon</span>
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white">
              Moving Towards 2026 & Beyond
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 mt-3 mx-auto md:mx-0" />
          </div>
          
          {/* Replaced old text list with an asymmetric feature grid matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {ROADMAP_VECTORS.map((vector, idx) => (
              <div 
                key={idx}
                className="bg-[#070A13]/80 border border-white/15 p-6 rounded-xl relative overflow-hidden group hover:border-cyan-400/50 transition-all duration-300"
              >
                {/* Decorative background index accent typography */}
                <div className="absolute right-3 top-1 text-3xl font-black text-white/[0.02] select-none tracking-tighter group-hover:text-cyan-400/[0.04] transition-colors">
                  {vector.num}
                </div>
                
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs text-cyan-400 animate-pulse">⚡</span>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white group-hover:text-cyan-400 transition-colors">
                    {vector.title}
                  </h4>
                </div>
                
                <p className="text-[11px] text-gray-500 leading-relaxed">
                  {vector.desc}
                </p>
              </div>
            ))}
          </div>

          <hr className="border-white/5 mb-10" />
          
          {/* Upgraded Concluding Goal Statement Banner */}
          <div className="bg-gradient-to-r from-blue-900/10 via-cyan-900/5 to-transparent border-l-2 border-cyan-400 p-6 rounded-r-xl">
            <p className="text-xs md:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-gray-200 leading-relaxed">
              Our goal is simple — to become a household name known for trust, durability, affordability, and performance.
            </p>
          </div>
          
        </div>
      </section>

      {/* MASTER FOOTER ROW */}
      <footer className="w-full max-w-7xl mx-auto border-t border-white/5 p-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-mono bg-[#070A13]">
        <div>© 2026 Softline Industries. All rights reserved.</div>
        <div className="space-x-4">
          <Link href="/company/about" className="hover:text-gray-300">About Us</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact Desk</Link>
        </div>
      </footer>

    </main>
  );
}