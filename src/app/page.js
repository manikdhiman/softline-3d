'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen text-white flex flex-col justify-between">
      
      {/* SECTION 1: HERO DISPLAY PANEL */}
      <section className="w-full max-w-7xl mx-auto px-6 pt-16 md:pt-28 pb-20 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div>
          <span className="text-xs font-mono tracking-[0.3em] text-cyan-400 uppercase block mb-3">
            Welcome to Softline Industries
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-6 uppercase">
            PREMIUM HOUSEHOLD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              APPLIANCES.
            </span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg mb-8 max-w-lg leading-relaxed">
            Engineering high-performance air coolers, televisions, washing machines, and home electronics with absolute integrity. Discover durability built to last.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/products/coolers" className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl text-center transition shadow-lg shadow-blue-600/20">
              Explore Products
            </Link>
            <Link href="/contact" className="border border-white/10 hover:border-white/20 bg-white/5 text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl text-center transition">
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Right Side Corporate Ring Graphic */}
        <div className="flex justify-center items-center">
          <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-blue-600/20 to-cyan-400/10 border border-cyan-500/20 flex items-center justify-center relative animate-pulse">
            <div className="w-56 h-56 md:w-60 md:h-60 rounded-full bg-gradient-to-br from-[#0d1527] to-[#070A13] border border-white/5 flex flex-col items-center justify-center p-6 text-center shadow-2xl">
              <span className="text-2xl font-black text-cyan-400">15+</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-400 mt-1 font-mono">Years of Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CORE VALUE INDUSTRIAL ENGINEERING PILLARS */}
      <section className="w-full bg-[#0d1527]/30 border-t border-b border-white/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-white/5 bg-[#070A13]/40 p-6 rounded-xl font-mono text-xs">
            <span className="text-cyan-400 font-bold block text-sm mb-2">⚡ HIGH TORQUE MOTORS</span>
            <p className="text-gray-400 leading-relaxed">Every appliance core utilizes 100% heavy-duty copper winded assemblies tailored for maximum torque longevity and efficient load cycles.</p>
          </div>
          <div className="border border-white/5 bg-[#070A13]/40 p-6 rounded-xl font-mono text-xs">
            <span className="text-cyan-400 font-bold block text-sm mb-2">💎 PREMIUM MATERIAL BODY</span>
            <p className="text-gray-400 leading-relaxed">Engineered using tough structural impact-resistant composites and specialized thermal linings built to endure heavy environmental stressors.</p>
          </div>
          <div className="border border-white/5 bg-[#070A13]/40 p-6 rounded-xl font-mono text-xs">
            <span className="text-cyan-400 font-bold block text-sm mb-2">🌱 ECO POWER COMPLIANCE</span>
            <p className="text-gray-400 leading-relaxed">Our appliances run on optimized star-rated energy hardware controllers designed to slash thermal waste while driving maximum output results.</p>
          </div>
        </div>
      </section>

      {/* SECTION 3: HOMEPAGE PRODUCT CATALOG LINKS PREVIEW MAP */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-cyan-400 tracking-[0.2em] uppercase">Browse Collections</span>
          <h2 className="text-3xl font-black uppercase tracking-tight mt-1">Our Product Verticals</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Air Coolers", desc: "Tower and heavy industrial plastic configurations.", link: "/products/coolers" },
            { name: "LED Televisions", desc: "Vibrant high-resolution smart panel matrices.", link: "/products/televisions" },
            { name: "Washing Machines", desc: "Smart drum fabric care systems.", link: "/products/washing-machines" },
            { name: "Mixer Grinders", desc: "High speed durable processing units.", link: "/products/mixer-grinders" },
            { name: "Water Geysers", desc: "Insulated thermal storage containment systems.", link: "/products/geysers" },
            { name: "Ceiling Fans", desc: "Aerodynamic high speed air displacement blade systems.", link: "/products/fans" }
          ].map((item, idx) => (
            <Link 
              key={idx} 
              href={item.link} 
              className="bg-[#0d1527]/50 border border-white/10 p-6 rounded-xl hover:border-cyan-400 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <h3 className="text-lg font-bold uppercase text-white group-hover:text-cyan-400 transition mb-2">{item.name}</h3>
                <p className="text-xs text-gray-400 font-mono leading-relaxed">{item.desc}</p>
              </div>
              <span className="text-[10px] font-mono tracking-wider text-cyan-400 mt-6 inline-block group-hover:translate-x-1 transition-transform">
                Open Catalog →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 4: CORPORATE BOTTOM INFOGRAPHIC STATS */}
      <section className="w-full bg-[#0d1527]/20 border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center font-mono">
          <div>
            <div className="text-2xl md:text-3xl font-black text-white">100%</div>
            <div className="text-[10px] text-gray-500 uppercase mt-1">Copper Motors</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-black text-white">24 HR</div>
            <div className="text-[10px] text-gray-500 uppercase mt-1">Service SLA Response</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-black text-white">Assandh</div>
            <div className="text-[10px] text-gray-500 uppercase mt-1">Corporate HQ Location</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-black text-white">Eco Max</div>
            <div className="text-[10px] text-gray-500 uppercase mt-1">Recycle Compliant</div>
          </div>
        </div>
      </section>

      {/* FOOTER ROW */}
      <footer className="w-full max-w-7xl mx-auto border-t border-white/5 p-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-mono bg-[#070A13]">
        <div>© 2026 Softline Industries. All rights reserved.</div>
        <div className="space-x-4">
          <Link href="/support/e-waste" className="hover:text-gray-300">E-Waste Policy</Link>
          <Link href="/support/complaint" className="hover:text-gray-300">Support Desk</Link>
        </div>
      </footer>

    </main>
  );
}