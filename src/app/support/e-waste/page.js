'use client';

import Link from 'next/link';

export default function EWastePage() {
  return (
    <main className="max-w-4xl mx-auto w-full p-6 md:p-12 text-slate-900 flex-1 flex flex-col justify-center pt-28 space-y-8">
      <div className="mb-2">
        <Link href="/" className="text-xs font-mono text-slate-500 hover:text-sky-600 transition">← Return to Home</Link>
      </div>

      <div className="border-b border-sky-100 pb-4">
        <span className="text-xs font-mono tracking-[0.3em] text-sky-600 font-bold uppercase block mb-1">Compliance & Environment</span>
        <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-slate-900">E-Waste Management Policy</h1>
      </div>

      <div className="bg-white border border-sky-100 p-6 rounded-2xl shadow-sm space-y-3">
        <h2 className="text-lg font-bold font-mono uppercase tracking-wide text-sky-600">Our Commitment</h2>
        <p className="text-xs font-mono text-slate-600 leading-relaxed">
          Softline Industries is committed to environmentally responsible management of electronic waste in compliance with the E-Waste (Management) Rules, 2016, as amended.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-emerald-50/50 border border-emerald-200 p-5 rounded-xl space-y-2">
          <span className="text-[10px] font-mono text-emerald-700 uppercase font-bold block">✓ Mandatory Actions</span>
          <ul className="space-y-1.5 text-xs font-mono text-slate-700">
            <li>▪ Remove batteries before disposal.</li>
            <li>▪ Use authorized collection centers.</li>
          </ul>
        </div>

        <div className="bg-red-50/50 border border-red-200 p-5 rounded-xl space-y-2">
          <span className="text-[10px] font-mono text-red-700 uppercase font-bold block">🚯 Prohibited Actions</span>
          <ul className="space-y-1.5 text-xs font-mono text-slate-700">
            <li>▪ Do not break or disassemble products.</li>
            <li>▪ Do not dispose of e-waste in landfills.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}