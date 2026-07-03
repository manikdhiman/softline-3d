'use client';

import Link from 'next/link';

export default function EWastePage() {
  return (
    <main className="max-w-4xl mx-auto w-full p-6 md:p-12 text-white flex-1 flex flex-col justify-center pt-28 space-y-10">
      <div className="mb-2">
        <Link href="/" className="text-xs font-mono text-gray-500 hover:text-cyan-400 transition">← Return to Home</Link>
      </div>

      <div className="border-b border-white/5 pb-6">
        <span className="text-xs font-mono tracking-[0.3em] text-cyan-400 uppercase block mb-1">Compliance & Environment</span>
        <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">E-Waste Management Policy</h1>
      </div>

      <div className="bg-gradient-to-br from-[#0d1527] to-[#070A13] border border-white/10 p-6 rounded-2xl shadow-xl space-y-3 relative overflow-hidden">
        <div className="absolute right-6 top-6 text-4xl opacity-10 select-none">🌱</div>
        <h2 className="text-lg font-bold font-mono uppercase tracking-wide text-cyan-400">Our Commitment</h2>
        <p className="text-xs font-mono text-gray-400 leading-relaxed">
          Softline Industries is committed to environmentally responsible management of electronic waste in compliance with the E-Waste (Management) Rules, 2016, as amended. We take responsibility for the proper disposal and recycling of our products at end-of-life.
        </p>
      </div>

      <div className="bg-blue-950/20 border border-blue-500/20 rounded-2xl p-6 space-y-2">
        <h2 className="text-sm font-bold uppercase tracking-wider text-white">Consumer Responsibility</h2>
        <p className="text-xs font-mono text-gray-300 leading-relaxed">
          As a consumer, you play a vital role in e-waste management. Please do not dispose of electronic products with regular household waste. Instead, drop off end-of-life products at any of our authorized collection centers.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-sm font-bold font-mono uppercase tracking-wider text-white">Handling Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#0d1527]/40 border border-emerald-500/10 p-5 rounded-xl space-y-3">
            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold block">✓ Mandatory Actions</span>
            <ul className="space-y-2 text-xs font-mono text-gray-400">
              <li className="flex items-start gap-2"><span className="text-emerald-400 font-bold">▪</span> Remove batteries before disposal where applicable.</li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 font-bold">▪</span> Use authorized collection centers for safe disposal.</li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 font-bold">▪</span> Keep products in original packaging during transport.</li>
            </ul>
          </div>

          <div className="bg-[#0d1527]/40 border border-red-500/10 p-5 rounded-xl space-y-3">
            <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest font-bold block">🚯 Prohibited Actions</span>
            <ul className="space-y-2 text-xs font-mono text-gray-400">
              <li className="flex items-start gap-2"><span className="text-red-400 font-bold">▪</span> Do not break or disassemble electronic products manually.</li>
              <li className="flex items-start gap-2"><span className="text-red-400 font-bold">▪</span> Do not dispose of e-waste in standard landfills or water bodies.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}