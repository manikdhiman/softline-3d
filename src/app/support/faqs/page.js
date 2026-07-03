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

  return (
    <main className="max-w-4xl mx-auto w-full p-6 md:p-12 text-white flex-1 flex flex-col justify-center pt-28">
      <div className="mb-6">
        <Link href="/" className="text-xs font-mono text-gray-500 hover:text-cyan-400 transition">← Return to Home</Link>
      </div>

      <div className="bg-[#0d1527]/40 border border-white/10 p-6 md:p-8 rounded-2xl space-y-6">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tight text-white">Frequently Asked Questions</h1>
          <p className="text-xs text-gray-400 font-mono mt-1">Click on a question card matrix to view support documentation solutions.</p>
        </div>
        
        <hr className="border-white/10" />
        
        <div className="space-y-3">
          {FAQ_DATASET.map((item, index) => (
            <div key={index} className="border border-white/5 bg-[#070A13]/40 rounded-xl overflow-hidden transition-all duration-300">
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

              <div className={`transition-all duration-300 ease-in-out font-mono text-xs text-gray-400 leading-relaxed overflow-hidden ${activeTab === index ? 'max-h-60 p-4 pt-0 border-t border-white/5 opacity-100' : 'max-h-0 opacity-0'}`}>
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}