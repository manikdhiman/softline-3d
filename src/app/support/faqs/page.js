'use client';

import { useState } from 'react';

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    { q: "How do I claim warranty for Softline products?", a: "You can submit a ticket on our Service Ticket page or contact our helpline at +91 8295433063 with your invoice bill." },
    { q: "Where are Softline products manufactured?", a: "All our products are precision-engineered and assembled at our primary manufacturing center in Assandh, Haryana." },
    { q: "How can I become an authorized dealer?", a: "Fill out the contact form on our website or visit our headquarters to discuss regional dealership opportunities." },
    { q: "What water capacity options are available for air coolers?", a: "We manufacture air coolers ranging from compact 45L plastic units up to 110L commercial iron body coolers." },
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="text-sky-600 text-xs font-semibold uppercase tracking-wider">Help & Support</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">Frequently Asked Questions</h1>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-sky-100 overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left p-6 font-bold text-slate-900 text-base sm:text-lg flex justify-between items-center hover:bg-sky-50/50 transition"
              >
                <span>{faq.q}</span>
                <span className="text-sky-600 font-bold text-xl ml-4">{openIdx === idx ? '−' : '+'}</span>
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-sky-50 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}