'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function SupportDynamicPage() {
  const { slug } = useParams();

  return (
    <main className="max-w-4xl mx-auto w-full p-6 md:p-12 text-white flex-1 flex flex-col justify-center">
      
      {/* Back Reference Navigation */}
      <div className="mb-6">
        <Link href="/" className="text-xs font-mono text-gray-500 hover:text-cyan-400 transition">← Return to Home</Link>
      </div>

      {/* RENDER VIEW 1: Frequently Asked Questions */}
      {slug === 'faqs' && (
        <div className="bg-[#0d1527]/40 border border-white/10 p-8 rounded-2xl space-y-6">
          <h1 className="text-3xl font-black uppercase tracking-tight text-white">Frequently Asked Questions</h1>
          <hr className="border-white/10" />
          <div className="space-y-4 font-mono text-xs">
            <div className="border-b border-white/5 pb-4">
              <h3 className="text-cyan-400 font-bold mb-1">Q: How do I claim product warranty support services?</h3>
              <p className="text-gray-400">A: Contact our service desk at +91 8295433063 or transmit your request directly using our centralized File a Complaint sub-page module.</p>
            </div>
            <div className="border-b border-white/5 pb-4">
              <h3 className="text-cyan-400 font-bold mb-1">Q: Where can I obtain official product spec catalog literature sheets?</h3>
              <p className="text-gray-400">A: Full spec document downloads are located natively inside individual product detail viewports or via the Downloads tab above.</p>
            </div>
          </div>
        </div>
      )}

      {/* RENDER VIEW 2: File a Complaint Input Form */}
      {slug === 'complaint' && (
        <form onSubmit={(e) => { e.preventDefault(); alert('Complaint filed successfully.'); }} className="bg-[#0d1527]/40 border border-white/10 p-8 rounded-2xl space-y-4">
          <h1 className="text-3xl font-black uppercase tracking-tight text-white">Service Support Ticket</h1>
          <p className="text-xs text-gray-400 font-mono">File an official claim case regarding hardware, repair engineering, or component support.</p>
          <hr className="border-white/10" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" required placeholder="Product Serial Batch ID Number" className="bg-white/5 border border-white/10 px-4 py-3 rounded-lg text-xs font-mono text-white focus:border-cyan-400 outline-none" />
            <input type="text" required placeholder="Date of Purchase" className="bg-white/5 border border-white/10 px-4 py-3 rounded-lg text-xs font-mono text-white focus:border-cyan-400 outline-none" />
          </div>
          <textarea rows="4" required placeholder="Elaborate on hardware malfunction behaviors..." className="bg-white/5 border border-white/10 p-4 rounded-lg text-xs font-mono text-white focus:border-cyan-400 outline-none resize-none" />
          
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 font-bold text-xs uppercase tracking-widest py-4 rounded-xl transition shadow-lg shadow-blue-600/20">
            Submit Support Ticket
          </button>
        </form>
      )}

      {/* RENDER VIEW 3: E-Waste Environmental Protection Policy */}
      {slug === 'e-waste' && (
        <div className="bg-[#0d1527]/40 border border-white/10 p-8 rounded-2xl space-y-6">
          <h1 className="text-3xl font-black uppercase tracking-tight text-white">E-Waste Recycling Matrix</h1>
          <hr className="border-white/10" />
          <div className="font-mono text-xs text-gray-400 space-y-4 leading-relaxed">
            <p>Softline Industries is completely committed to environmental sustainability and compliant electronic waste management. In adherence with global environmental standards, we ensure clean end-of-life device recycling profiles.</p>
            <p className="text-cyan-400 font-bold">Do not discard old household appliance systems inside regular municipal waste collection centers.</p>
            <p>Please safely coordinate system drop-offs by scheduling an industrial item recycling pickup loop with our central helpline channel desks.</p>
          </div>
        </div>
      )}

      {/* RENDER VIEW 4: Document Catalog Downloads Repository */}
      {slug === 'downloads' && (
        <div className="bg-[#0d1527]/40 border border-white/10 p-8 rounded-2xl space-y-6">
          <h1 className="text-3xl font-black uppercase tracking-tight text-white">Resource Downloads</h1>
          <hr className="border-white/10" />
          <div className="space-y-3 font-mono text-xs">
            {['Tejas-100-Cooler-Manual.pdf', 'HydroCare-Pro-Washing-Installation-Spec.pdf', 'Softline-Corporate-Product-Catalog-2026.pdf'].map((file, idx) => (
              <div key={idx} className="flex justify-between items-center p-3 bg-white/5 border border-white/5 rounded-lg">
                <span className="text-gray-300">{file}</span>
                <button onClick={() => alert('Downloading resource file asset...')} className="text-cyan-400 hover:underline font-bold">Download ↓</button>
              </div>
            ))}
          </div>
        </div>
      )}

    </main>
  );
}