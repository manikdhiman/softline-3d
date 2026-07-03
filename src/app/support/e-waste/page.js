'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function EWastePage() {
  // Controls individual guideline item expansion toggles
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  const COMPLIANCE_STEPS = [
    {
      id: 'step1',
      type: 'do',
      title: 'Remove batteries before disposal where applicable',
      desc: 'Isolating cell arrays prevents chemical corrosion leakage inside raw terminal scrap bins. Ensure lithium assemblies are extracted cleanly prior to scheduling a logistics drop.'
    },
    {
      id: 'step2',
      type: 'do',
      title: 'Use authorized collection centers for safe disposal',
      desc: 'Dropping items at verified regional points guarantees compliance with official environmental protections, redirecting materials straight into safe breakdown streams.'
    },
    {
      id: 'step3',
      type: 'do',
      title: 'Keep products in original packaging during transport to collection centers',
      desc: 'Using original boxes prevents accidental impact cracking or structural damage during local transport, ensuring internal parts remain sealed and safe.'
    },
    {
      id: 'step4',
      type: 'dont',
      title: 'Do not break or disassemble electronic products manually',
      desc: 'Opening casings by hand poses risk of inhaling toxic dust particles or coming into contact with sharp glass. Always leave item extraction to certified technicians.'
    },
    {
      id: 'step5',
      type: 'dont',
      title: 'Do not dispose of e-waste in standard landfills or open water bodies',
      desc: 'Standard landfills allow hazardous chemicals to leach directly into surrounding topsoil layers. Proper disposal prevents heavy elements from contaminating groundwater systems.'
    }
  ];

  return (
    <main className="max-w-5xl mx-auto w-full p-6 md:p-12 text-white flex-1 flex flex-col justify-center pt-28 space-y-12">
      
      <div className="mb-2">
        <Link href="/" className="text-xs font-mono text-gray-500 hover:text-cyan-400 transition">← Return to Home</Link>
      </div>

      {/* SECTION 1: INTRO BANNER OVERLAY */}
      <div className="border-b border-white/5 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <span className="text-xs font-mono tracking-[0.3em] text-emerald-400 uppercase block mb-1">Ecological Terminal</span>
          <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">E-Waste Policy</h1>
        </div>
        <div className="text-[10px] font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-2 rounded-xl uppercase tracking-wider">
          Compliance Status: Active 🟢
        </div>
      </div>

      {/* SECTION 2: COMMITMENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        <div className="lg:col-span-7 bg-gradient-to-br from-[#0d1527] to-[#070A13] border border-white/10 p-6 rounded-2xl shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-300">
          <div className="absolute -right-8 -bottom-8 text-8xl opacity-[0.02] group-hover:opacity-[0.05] transition-opacity select-none">🌱</div>
          <div className="space-y-3">
            <h2 className="text-base font-bold font-mono uppercase tracking-wide text-emerald-400">Our Commitment</h2>
            <p className="text-xs font-mono text-gray-400 leading-relaxed">
              Softline Industries is committed to environmentally responsible management of electronic waste in compliance with the E-Waste (Management) Rules, 2016, as amended. We take responsibility for the proper disposal and recycling of our products at end-of-life.
            </p>
          </div>
          <div className="text-[10px] text-gray-500 font-mono pt-6 border-t border-white/5 mt-4">
            REGULATORY MATRIX REF: EW-2016-AMENDED
          </div>
        </div>

        <div className="lg:col-span-5 bg-gradient-to-tr from-emerald-950/20 to-blue-950/20 border border-emerald-500/10 p-6 rounded-2xl flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-white">Consumer Responsibility</h2>
            <p className="text-[11px] font-mono text-gray-300 leading-relaxed">
              As a consumer, you play a vital role in e-waste management. Please do not dispose of electronic products with regular household waste. Instead, drop off end-of-life products at any of our authorized collection centers.
            </p>
          </div>
          <span className="text-[10px] text-emerald-400 font-mono tracking-wide block mt-4">🌿 Eco System Care Protocol</span>
        </div>

      </div>

      {/* SECTION 3: REBUILT INTERACTIVE COMPLIANCE ACCORDIONS (From image_eb13a9.png) */}
      <div className="space-y-4">
        <div>
          <h2 className="text-sm font-bold font-mono uppercase tracking-wider text-white">Handling Guidelines</h2>
          <p className="text-[11px] text-gray-500 font-mono">Click a card to expand item instructions and safety breakdowns.</p>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {COMPLIANCE_STEPS.map((item) => {
            const isTarget = activeCard === item.id;
            const isDo = item.type === 'do';
            return (
              <div 
                key={item.id} 
                className={`border bg-[#070A13]/60 rounded-xl overflow-hidden transition-all duration-300 ${
                  isTarget 
                    ? isDo ? 'border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.05)]' : 'border-red-500/40 shadow-[0_0_15px_rgba(239,68,68,0.05)]'
                    : 'border-white/5 hover:border-white/10'
                }`}
              >
                {/* Trigger Row Header */}
                <button
                  onClick={() => toggleCard(item.id)}
                  className="w-full text-left p-4 flex justify-between items-center focus:outline-none group"
                >
                  <div className="flex items-center space-x-3">
                    <span className={`text-xs font-mono font-bold ${isDo ? 'text-emerald-400' : 'text-red-400'}`}>
                      {isDo ? '✓' : '🚯'}
                    </span>
                    <span className="text-xs font-bold font-mono text-white group-hover:text-gray-300 transition-colors">
                      {item.title}
                    </span>
                  </div>
                  <span className={`text-[10px] font-mono transition-transform duration-300 ${isTarget ? 'rotate-180 text-cyan-400' : 'text-gray-600'}`}>
                    ▼
                  </span>
                </button>

                {/* Expanding Content Block */}
                <div 
                  className={`transition-all duration-300 ease-in-out font-mono text-[11px] text-gray-400 leading-relaxed overflow-hidden ${
                    isTarget ? 'max-h-40 p-4 pt-0 border-t border-white/5 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {item.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION 4: PROGRESS LOGISTICS PROTOCOL PATH */}
      <div className="border-t border-white/5 pt-8">
        <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-gray-500 mb-6 text-center">3-Step Hardware Recycling Protocol</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center font-mono text-xs relative">
          
          <div className="bg-[#0d1527]/40 border border-white/10 p-5 rounded-xl relative group hover:border-emerald-500/20 transition-colors">
            <div className="text-emerald-400 font-bold mb-1">01 / LOG REQUEST</div>
            <p className="text-gray-500 text-[11px] leading-relaxed">Contact our support center line array to register old equipment item logs.</p>
          </div>

          <div className="bg-[#0d1527]/40 border border-white/10 p-5 rounded-xl relative group hover:border-emerald-500/20 transition-colors">
            <div className="text-emerald-400 font-bold mb-1">02 / SECURE HUB DROP</div>
            <p className="text-gray-500 text-[11px] leading-relaxed">Deliver your appliance in secure packaging to our collection terminal centers.</p>
          </div>

          <div className="bg-[#0d1527]/40 border border-white/10 p-5 rounded-xl relative group hover:border-emerald-500/20 transition-colors">
            <div className="text-emerald-400 font-bold mb-1">03 / SHRED & EXTRACT</div>
            <p className="text-gray-500 text-[11px] leading-relaxed">Authorized recovery systems parse compound hardware clean from runoff hazards.</p>
          </div>

        </div>
      </div>

    </main>
  );
}