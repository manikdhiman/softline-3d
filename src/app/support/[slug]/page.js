'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

export default function SupportDynamicPage() {
  const { slug } = useParams();
  
  // Controls accordion item toggling behavior
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (index) => {
    if (activeTab === index) {
      setActiveTab(null); // Second click: hide content cleanly
    } else {
      setActiveTab(index); // First click: expand selected item
    }
  };

  const COMPLAINT_ACCORDION = [
    {
      title: "1. How do I register a formal hardware product complaint?",
      content: "To initiate an engineering service file, check the silver sticker badge situated near your appliance motor base array to capture your active Batch Serial ID. Reach out directly to our central support command line at +91 8295433063 or submit your specific problem framework logs to softlineindustriesknl@gmail.com for immediate technician assignment."
    },
    {
      title: "2. What is the standard response time for a registered ticket?",
      content: "Our operational service matrix processes incoming service claims within 24 working hours. Once validated, an authorized field repair engineer will be dispatched to your location coordinates for diagnostic testing and resolution management."
    },
    {
      title: "3. How can I trace the active status of my unresolved service case?",
      content: "Every registered hardware complaint generates a unique chronological case reference ticket. You can receive real-time updates regarding components, replacement lead times, or scheduling windows by tracking directly with our customer desk during active business hours (9:00 AM – 6:00 PM)."
    },
    {
      title: "4. What documentation is required to claim localized warranty processing?",
      content: "You must provide your official purchase cash memo bill validation sheet alongside the authentic stamped warranty booklet card issued by your authorized Softline regional distribution partner at the point of trade configuration."
    }
  ];

  return (
    <main className="max-w-4xl mx-auto w-full p-6 md:p-12 text-white flex-1 flex flex-col justify-center">
      
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

      {/* REBUILT RENDER VIEW 2: Interactive Toggle Complaint Support Matrix */}
      {slug === 'complaint' && (
        <div className="bg-[#0d1527]/40 border border-white/10 p-6 md:p-8 rounded-2xl space-y-6">
          <div>
            <h1 className="text-3xl font-black uppercase tracking-tight text-white">Customer Complaint Resolution</h1>
            <p className="text-xs text-gray-400 font-mono mt-1">Select your specific inquiry path below. Click once to view solution instructions, click again to collapse.</p>
          </div>
          
          <hr className="border-white/10" />
          
          <div className="space-y-3">
            {COMPLAINT_ACCORDION.map((item, index) => (
              <div 
                key={index} 
                className="border border-white/5 bg-[#070A13]/40 rounded-xl overflow-hidden transition-all duration-300"
              >
                {/* Trigger Row Element */}
                <button
                  onClick={() => toggleTab(index)}
                  className="w-full text-left p-4 flex justify-between items-center hover:bg-white/5 transition-colors focus:outline-none"
                >
                  <span className="text-xs font-bold font-mono tracking-wide text-white group-hover:text-cyan-400">
                    {item.title}
                  </span>
                  <span className={`text-xs font-mono transition-transform duration-300 ${activeTab === index ? 'text-cyan-400 rotate-180' : 'text-gray-500'}`}>
                    ▼
                  </span>
                </button>

                {/* Collapsible content tray controlled by structural state conditions */}
                <div 
                  className={`transition-all duration-300 ease-in-out font-mono text-xs text-gray-400 leading-relaxed overflow-hidden ${
                    activeTab === index ? 'max-h-60 p-4 pt-0 border-t border-white/5 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
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