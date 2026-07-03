'use client';

import Link from 'next/link';

export default function AboutUsPage() {
  const CORE_VALUES = [
    {
      icon: '🎯',
      title: 'Quality First',
      desc: 'From raw material sourcing to final packaging, every product undergoes careful inspection and performance testing.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      desc: 'We continuously evolve with technology to bring modern, high-performance products to Indian households.'
    },
    {
      icon: '🌱',
      title: 'Sustainability',
      desc: 'Eco-friendly manufacturing processes and responsible sourcing to minimise our environmental footprint.'
    },
    {
      icon: '🤝',
      title: 'Customer Focus',
      desc: 'Proper packaging, secure handling, and consistent after-sales support are as important as the product itself.'
    }
  ];

  const LEADERSHIP_TEAM = [
    {
      initials: 'GM',
      name: 'Gulshan Manchanda',
      quote: '“Quality is not an act, it is a habit — and at Softline, it is our identity.”'
    },
    {
      initials: 'NG',
      name: 'Nitesh Garg',
      quote: '“Every product we build carries the trust of millions of Indian families. That responsibility drives us.”'
    },
    {
      initials: 'SM',
      name: 'Suresh Manchanda',
      quote: '“We don’t just manufacture appliances — we engineer reliability into every home.”'
    },
    {
      initials: 'SM',
      name: 'Surender Mehta',
      quote: '“Growth means nothing without the people who believe in you. Our customers are our greatest strength.”'
    }
  ];

  return (
    <main className="min-h-screen text-white bg-[#070A13] flex flex-col justify-between">
      
      {/* SECTION 1: CINEMATIC HERO BANNER DISPLAY (From image_e9ca2a.jpg) */}
      <section className="w-full bg-[#0d1527]/60 border-b border-white/10 pt-16 pb-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs font-mono tracking-[0.3em] text-cyan-400 uppercase block mb-2">
            Corporate Profile
          </span>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
            About Softline Industries
          </h1>
          <p className="text-gray-400 font-mono text-xs md:text-sm max-w-2xl leading-relaxed">
            Delivering reliable, high-quality home appliances combining performance, durability, and modern design — since 2009.
          </p>
        </div>
      </section>

      {/* SECTION 2: THE SPLIT GRID MISSION STATEMENT MODULE (From image_e9ca2a.jpg) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-25 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <span className="text-xs font-mono bg-blue-600/10 border border-blue-500/20 px-3 py-1 rounded text-cyan-400 uppercase tracking-widest">
            Our Mission
          </span>
          <h2 className="text-2xl md:text-3xl font-black mt-4 uppercase tracking-tight text-white">
            Empowering Every Indian Home with Quality Appliances
          </h2>
          <p className="text-gray-400 text-xs md:text-sm font-mono leading-relaxed mt-4">
            Founded in 2009, Softline Industries began with iron air coolers and a simple belief — every Indian household deserves reliable, high-quality home appliances at an affordable price. Built on years of prior industry experience, we continue to scale up manufacturing output channels to frame modern customer demands.
          </p>
        </div>

        {/* Visual Mock Showcase Container right frame */}
        <div className="lg:col-span-5 bg-[#0d1527]/40 border border-white/10 p-4 rounded-2xl shadow-2xl">
          <div className="w-full h-56 bg-white/5 rounded-xl flex flex-col items-center justify-center border border-dashed border-white/10 text-center p-6">
            <span className="text-[10px] font-mono text-gray-400 block uppercase tracking-widest mb-1">[ Assembly Plant Viewport ]</span>
            <span className="text-[9px] text-gray-500 font-mono">Precision electronics engineering testing parameters overlay loop</span>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE CORE VALUES CARD MATRIX (From image_e9ccd5.png) */}
      <section className="w-full bg-[#0d1527]/20 border-t border-b border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tight text-white">Our Core Values</h2>
            <p className="text-xs font-mono text-gray-400 mt-2">The principles that guide everything we do.</p>
            <div className="w-12 h-0.5 bg-cyan-400 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((value, idx) => (
              <div key={idx} className="bg-[#070A13]/60 border border-white/10 p-6 rounded-xl flex flex-col items-center text-center shadow-xl">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-xl mb-4">
                  {value.icon}
                </div>
                <h3 className="text-sm font-bold uppercase text-white tracking-wide mb-2">{value.title}</h3>
                <p className="text-[11px] text-gray-400 font-mono leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CORPORATE EXECUTIVE LEADERSHIP ROW (From image_e9cd0c.png) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black uppercase tracking-tight text-white">Our Leadership</h2>
          <p className="text-xs font-mono text-gray-400 mt-2">The people behind Softline Industries.</p>
          <div className="w-12 h-0.5 bg-cyan-400 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {LEADERSHIP_TEAM.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              {/* Monogram profile container avatar matching exact screenshot structure */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-b from-[#0d1527] to-[#070A13] border-2 border-cyan-400/20 shadow-xl flex items-center justify-center mb-4 transition-all duration-300 hover:border-cyan-400">
                <span className="text-xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                  {member.initials}
                </span>
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-white">{member.name}</h3>
              <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wider mt-1 mb-3">Executive Board</p>
              <p className="text-[11px] text-gray-400 font-mono italic px-4 leading-relaxed">
                {member.quote}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER CLUSTER */}
      <footer className="w-full max-w-7xl mx-auto border-t border-white/5 p-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-mono bg-[#070A13]">
        <div>© 2026 Softline Industries. All rights reserved.</div>
        <div className="space-x-4">
          <Link href="/company/journey" className="hover:text-gray-300">Our Journey</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact Desk</Link>
        </div>
      </footer>

    </main>
  );
}