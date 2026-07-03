'use client';

import { useState } from 'react';
import SceneCanvas from '@/components/3d/SceneCanvas';

// Dataset representing Softline's core layout categories
const PRODUCT_DATA = [
  { id: 'cooler', name: 'Air Coolers', desc: 'Powerful iron & plastic body cooling configurations.' },
  { id: 'tv', name: 'LED Televisions', desc: 'Vibrant color matrices and ultra-thin profile designs.' },
  { id: 'washing', name: 'Washing Machines', desc: 'Heavy-duty fabric care and efficient cycle management.' },
  { id: 'grinder', name: 'Mixer Grinders', desc: 'High-torque precision motors for hardware longevity.' },
  { id: 'geyser', name: 'Water Geysers', desc: 'High-efficiency thermal storage tanks with glass-lined heating elements.' },
  { id: 'fan', name: 'Ceiling Fans', desc: 'Aerodynamic high-speed blades with dust-resistant coating.' }
];
export default function Home() {
  const [activeProduct, setActiveProduct] = useState('cooler');

  return (
    <main className="relative min-h-screen text-white bg-[#0B0F19] overflow-x-hidden">
      {/* LAYER 0: Active 3D Graphics Canvas Layer */}
      <SceneCanvas activeId={activeProduct} />

      {/* LAYER 10: Interface Elements & State Controls */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between p-6 md:p-12 pointer-events-none">
        
        {/* Transparent Header Navigation Row */}
        <header className="w-full max-w-7xl mx-auto flex justify-between items-center bg-white/5 backdrop-blur-md border border-white/10 px-8 py-4 rounded-full pointer-events-auto">
          <div className="text-xl font-black tracking-wider text-cyan-400">SOFTLINE</div>
          <nav className="hidden md:flex space-x-8 text-sm text-gray-300">
            <a href="#" className="hover:text-cyan-400 transition">Products</a>
            <a href="#" className="hover:text-cyan-400 transition">Company</a>
            <a href="#" className="hover:text-cyan-400 transition">Support</a>
          </nav>
          <button className="border border-cyan-400/30 text-cyan-400 text-xs tracking-widest px-6 py-2 rounded-full hover:bg-cyan-400/10 transition uppercase">
            Contact
          </button>
        </header>

        {/* Dynamic Title Context Box */}
        <div className="w-full max-w-7xl mx-auto my-auto pt-16">
          <div className="max-w-md pointer-events-auto">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase">
              {PRODUCT_DATA.find(p => p.id === activeProduct)?.name}
            </h1>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              {PRODUCT_DATA.find(p => p.id === activeProduct)?.desc}
            </p>
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs uppercase tracking-wider px-6 py-3 rounded transition shadow-lg shadow-blue-600/20">
              View Catalog Spec
            </button>
          </div>
        </div>

        {/* Bottom Interactive Product Selector Row */}
        <div className="w-full max-w-7xl mx-auto pointer-events-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-black/20 backdrop-blur-md border border-white/5 p-4 rounded-xl">
            {PRODUCT_DATA.map((product) => (
              <button
                key={product.id}
                onClick={() => setActiveProduct(product.id)}
                className={`flex flex-col text-left p-4 rounded-lg transition border ${
                  activeProduct === product.id
                    ? 'bg-blue-600/10 border-cyan-400 shadow-md'
                    : 'bg-white/5 border-transparent hover:bg-white/10'
                }`}
              >
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">Category</span>
                <span className="text-sm font-semibold">{product.name}</span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}