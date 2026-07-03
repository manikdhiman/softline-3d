'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

export default function SupportDynamicPage() {
  const { slug } = useParams();
  
  // Tracks active toggled index for accordion systems
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (index) => {
    setActiveTab(activeTab === index ? null : index);
  };

  // Full Question Database pulled verbatim from image_eaaac9.png reference tracker
  const FAQ_DATASET = [
    {
      q: "What products does Softline Industries manufacture?",
      a: "Softline Industries engineers and manufactures a premium catalog of household appliances and consumer electronics, including high-performance iron and plastic air coolers, LED televisions, washing machines, high-torque mixer grinders, water geysers, and aerodynamic ceiling fans."
    },
    {
      q: "Where is Softline Industries located?",
      a: "Our primary corporate office and state-of-the-art manufacturing facilities are located Near G S Farm House, Salwan Road, Assandh, Haryana - 132039."
    },
    {
      q: "How long has Softline Industries been in business?",
      a: "Softline Industries was established in 2009. We have been engineering reliable household hardware configurations and delivering exceptional home solutions for over 17 years."
    },
    {
      q: "What types of air coolers does Softline offer?",
      a: "We offer a diverse cooling matrix including heavy-duty industrial Iron Air Coolers, highly portable and sleek Plastic Air Coolers, and high-velocity Tower and Room Coolers designed with massive water tank capacities for optimal summer thermal management."
    },
    {
      q: "What washing machine models are available?",
      a: "Our laundry systems line features highly efficient semi-automatic and full-automatic washing machines (such as our HydroCare Pro series), built with direct inverter drives, intelligent smart cycle controllers, and durable diamond steel tubs."
    },
    {
      q: "Do your LED televisions support smart features?",
      a: "Yes! Our premium smart LED televisions operate on advanced operating systems (including WebOS 4K interfaces), delivering ultra-high definition resolution, immersive stereo sound processing, built-in application hubs, and fluid casting support."
    },
    {
      q: "What is the warranty period for Softline products?",
      a: "Softline hardware profiles come standard with a comprehensive 1-year product warranty coverage on manufacturing defects, with extended protection timelines available for specific internal parts like copper motors and inverter compressors."
    },
    {
      q: "How do I claim warranty service?",
      a: "You can open an official support ticket directly through the 'File a Complaint' module in the navbar, email your purchase billing receipt data to softlineindustriesknl@gmail.com, or speak with an engineer at +91 8295433063."
    },
    {
      q: "Do you provide installation support?",
      a: "Absolutely. Our regional service centers deploy certified field engineers to assist with unboxing, mounting smart televisions, and calibrating washing machine connections straight out of the box."
    },
    {
      q: "My air cooler is not cooling properly. What should I do?",
      a: "First, check that the cooling cells and pads are clean and free of sediment build-up. Ensure the water pump is fully submerged, working properly, and the room has enough ventilation to let fresh air flow through the cooling path."
    },
    {
      q: "My washing machine is showing an error or not working correctly.",
      a: "Turn off the main power and check that the water inlet supply valves are clear and fully open. If a specific error code flashes on the digital display matrix panel, consult your model documentation guide or file a service claim on our portal."
    },
    {
      q: "The TV screen has display issues or lines.",
      a: "Verify all HDMI and cable terminal connection inputs are tightly plugged in. Perform a hard system reset by disconnecting the main wall plug socket for 60 seconds. If vertical or horizontal lines continue to flash across the matrix panel, contact our repair center immediately."
    },
    {
      q: "What is your return or replacement policy?",
      a: "Items purchased through our authorized trade network qualify for localized replacement options if our field tech notes unfixable factory hardware issues within our standard return frame window."
    }
  ];

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

      {/* RENDER VIEW 1: REBUILT EXPANSIBLE FAQs SYSTEM (From image_eaaac9.png) */}
      {slug === 'faqs' && (
        <div className="bg-[#0d1527]/40 border border-white/10 p-6 md:p-8 rounded-2xl space-y-6">
          <div>
            <h1 className="text-3xl font-black uppercase tracking-tight text-white">Frequently Asked Questions</h1>
            <p className="text-xs text-gray-400 font-mono mt-1">Click on a question card matrix to view support documentation solutions.</p>
          </div>
          
          <hr className="border-white/10" />
          
          <div className="space-y-3">
            {FAQ_DATASET.map((item, index) => (
              <div 
                key={index}
                className="border border-white/5 bg-[#070A13]/40 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleTab(index)}
                  className="w-full text-left p-4 flex justify-between items-center hover:bg-white/5 transition-colors focus:outline-none group"
                >
                  <span className={`text-xs font-bold font-mono tracking-wide transition-colors ${activeTab === index ? 'text-cyan-400' : 'text-white group-hover:text-cyan-400'}`}>
                    {item.q}
                  </span>
                  <span className={`text-xs font-mono transition-transform duration-300 ${activeTab === index ? 'text-cyan-400 rotate-180' : 'text-gray-500'}`}>
                    ▼
                  </span>
                </button>

                <div 
                  className={`transition-all duration-300 ease-in-out font-mono text-xs text-gray-400 leading-relaxed overflow-hidden ${
                    activeTab === index ? 'max-h-60 p-4 pt-0 border-t border-white/5 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* RENDER VIEW 2: Interactive Toggle Complaint Support Matrix */}
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