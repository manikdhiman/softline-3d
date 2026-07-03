'use client';

import Link from 'next/link';

export default function OurJourneyPage() {
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
      desc: 'Responding to evolving consumer preferences, we expanded into plastic air coolers — offering modern design, improved portability, corrosion resistance, and enhanced energy efficiency. Softline quickly became a trusted name for best-quality coolers in its category.'
    },
    {
      year: '2014',
      title: 'Expansion into Room Coolers',
      desc: 'We expanded our cooling range with room coolers featuring higher air delivery, larger tank capacity, and better cooling coverage — all designed keeping Indian climate conditions in mind for powerful peak-summer performance.'
    },
    {
      year: '2016',
      title: 'Washing Machines Launch',
      desc: 'As part of our long-term growth strategy, Softline diversified into home appliances with the launch of our washing machine range — built for efficiency, fabric care, and long-term durability with a focus on quality manufacturing and reliable components.'
    },
    {
      year: '2018',
      title: 'LED Televisions Introduction',
      desc: 'We entered the LED television market with a range designed to offer clarity, smart features, and energy efficiency — introduced with the same commitment that defines every Softline product: quality manufacturing, proper packaging, and customer-focused design.'
    }
  ];

  return (
    <main className="min-h-screen text-white bg-[#070A13] flex flex-col justify-between">
      
      {/* SECTION 1: CINEMATIC HEADER BANNER (From image_e9d4d3.png) */}
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

      {/* SECTION 2: WHERE IT ALL BEGAN STATEMENT (From image_e9d4d3.png) */}
      <section className="w-full max-w-4xl mx-auto px-6 py-16 text-center md:text-left">
        <span className="text-xs font-mono bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded text-cyan-400 uppercase tracking-widest">
          Founded in 2009
        </span>
        <h2 className="text-2xl md:text-3xl font-black mt-4 uppercase tracking-tight text-white mb-4">
          Where It All Began
        </h2>
        <p className="text-gray-400 font-mono text-xs md:text-sm leading-relaxed space-y-4">
          Softline Industries began its journey with a clear vision — to deliver reliable, high-quality home appliances that combine performance, durability, and modern design. Before establishing Softline as a dedicated brand, we were actively involved in the electronics industry, gaining deep market experience, technical knowledge, and a strong understanding of customer needs.
        </p>
        <div className="text-xs font-mono text-cyan-400 font-bold mt-4">
          With this foundation, Softline Industries was born.
        </div>
      </section>

      {/* SECTION 3: ALTERNATING HIGH-TECH TIMELINE VERTICAL GRAPH (From image_ea26ea.png series) */}
      <section className="w-full bg-[#0d1527]/20 border-t border-b border-white/5 py-20 relative">
        <div className="max-w-5xl mx-auto px-6 relative">
          
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">Key Milestones</h2>
            <div className="w-12 h-0.5 bg-cyan-400 mx-auto mt-3" />
          </div>

          {/* Central Connecting Vertical Line Element */}
          <div className="absolute left-1/2 top-32 bottom-12 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-600 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-16">
            {CHRONOLOGY_TIMELINE.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`flex flex-col md:flex-row items-center justify-between w-full relative ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Empty Spacer Column Component for standard layout constraints */}
                  <div className="w-full md:w-[45%] hidden md:block" />

                  {/* High-visibility Center Chrono Node Identifier */}
                  <div className="absolute left-1/2 w-4 h-4 rounded-full bg-[#070A13] border-2 border-cyan-400 -translate-x-1/2 z-10 hidden md:flex items-center justify-center animate-pulse" />

                  {/* Structured Dynamic Card Component */}
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

      {/* SECTION 4: DUAL STRATEGIC MISSION & VISION SLITS (From image_ea27a6.png) */}
      <section className="w-full max-w-4xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#0d1527]/40 border border-white/10 p-6 rounded-xl font-mono text-xs">
          <span className="text-cyan-400 font-bold block text-sm mb-2 uppercase tracking-wide"> Our Vision</span>
          <p className="text-gray-400 leading-relaxed">To deliver innovative and dependable home appliances that improve everyday living while maintaining the highest standards of quality and service.</p>
        </div>
        <div className="bg-[#0d1527]/40 border border-white/10 p-6 rounded-xl font-mono text-xs">
          <span className="text-cyan-400 font-bold block text-sm mb-2 uppercase tracking-wide"> Our Mission</span>
          <p className="text-gray-400 leading-relaxed">To continuously evolve with technology, expand responsibly, and create products that bring comfort and satisfaction to every home.</p>
        </div>
      </section>

      {/* SECTION 5: FUTURE ROADMAP AND BEYOND PANEL (From image_ea27c4.png) */}
      <section className="w-full bg-[#090d16] border-t border-white/10 py-20 font-mono">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-6 text-center md:text-left">
            Moving Towards 2026 & Beyond
          </h2>
          
          <ul className="space-y-3 text-xs text-gray-300 mb-8 pl-2">
            <li className="flex items-center gap-3"><span className="text-cyan-400">⚡</span> Continuous product innovation</li>
            <li className="flex items-center gap-3"><span className="text-cyan-400">⚡</span> Expansion into new markets</li>
            <li className="flex items-center gap-3"><span className="text-cyan-400">⚡</span> Strong dealer and distributor network</li>
            <li className="flex items-center gap-3"><span className="text-cyan-400">⚡</span> Customer-centric service support</li>
            <li className="flex items-center gap-3"><span className="text-cyan-400">⚡</span> Modern manufacturing techniques</li>
          </ul>

          <hr className="border-white/5 mb-6" />
          
          <p className="text-xs text-cyan-400 font-bold leading-relaxed text-center md:text-left">
            Our goal is simple — to become a household name known for trust, durability, affordability, and performance.
          </p>
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