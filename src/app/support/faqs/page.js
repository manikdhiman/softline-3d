'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function FAQsPage() {
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (index) => {
    setActiveTab(activeTab === index ? null : index);
  };

  const FAQ_DATASET = [
    {
      q: "What products does Softline Industries manufacture?",
      a: "Softline Industries engineers and manufactures air coolers, LED televisions, washing machines, mixer grinders, geysers, and ceiling fans."
    },
    {
      q: "Where is Softline Industries located?",
      a: "Our corporate office and manufacturing facilities are located Near G S Farm House, Salwan Road, Assandh, Haryana - 132039."
    },
    {
      q: "What is the warranty period for Softline products?",
      a: "Softline products come standard with a 1-year product warranty coverage on manufacturing defects."
    }
  ];

  return (
    <main className="max-w-4xl mx-auto w-full p-6 md:p-12 text-slate-900 flex-1 flex flex-col justify-center pt-28">
      <div className="mb-6">
        <Link href="/" className="text-xs font-mono text-slate-500 hover:text-sky-600 transition">← Return to Home</Link>
      </div>

      <div className="bg-white border border-sky-100 p-6 md:p-8 rounded-2xl space-y-6 shadow-sm">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tight text-slate-900">Frequently Asked Questions</h1>
          <p className="text-xs text-slate-500 font-mono mt-1">Click a card to view support documentation solutions.</p>
        </div>
        
        <hr className="border-slate-100" />
        
        <div className="space-y-3">
          {FAQ_DATASET.map((item, index) => (
            <div key={index} className="border border-slate-200 bg-slate-50/50 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleTab(index)}
                className="w-full text-left p-4 flex justify-between items-center hover:bg-sky-50/50 transition-colors focus:outline-none"
              >
                <span className={`text-xs font-bold font-mono tracking-wide ${activeTab === index ? 'text-sky-600' : 'text-slate-900'}`}>
                  {item.q}
                </span>
                <span className={`text-xs font-mono transition-transform duration-200 ${activeTab === index ? 'text-sky-600 rotate-180' : 'text-slate-400'}`}>
                  ▼
                </span>
              </button>

              <div className={`font-mono text-xs text-slate-600 leading-relaxed overflow-hidden transition-all duration-200 ${activeTab === index ? 'p-4 pt-0 border-t border-slate-100 max-h-40' : 'max-h-0'}`}>
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}