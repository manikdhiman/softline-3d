'use client';

import { useState } from 'react';
import SceneCanvas from '@/components/3d/SceneCanvas';
import Link from 'next/link';

const PRODUCT_DATA = [
  { 
    id: 'cooler', 
    name: 'Tejas 100 Tower', 
    category: 'Air Coolers',
    specs: { type: 'Tower Plastic', capacity: '100L', motor: '1.75mm Copper', fan: '20" Aluminum' }
  },
  { 
    id: 'tv', 
    name: 'SL-4300 WebOS', 
    category: 'LED Televisions',
    specs: { display: '43" Ultra HD', system: 'WebOS 4K', audio: '20W Stereo', mount: 'Wall / Table' }
  },
  { 
    id: 'washing', 
    name: 'HydroCare Pro', 
    category: 'Washing Machines',
    specs: { capacity: '8.5 Kg', drive: 'Direct Inverter', cycles: '12 Smart Modes', tub: 'Diamond Steel' }
  },
  { 
    id: 'grinder', 
    name: 'TurboBlend 750', 
    category: 'Mixer Grinders',
    specs: { power: '750W High Torque', blades: 'SS-304 Hardened', speeds: '3 + Pulse', coupling: 'Nylon' }
  },
  { 
    id: 'geyser', 
    name: 'AquaTherm Glass', 
    category: 'Water Geysers',
    specs: { volume: '25 Liters', rating: '5-Star BEE', element: 'Glass-Lined', pressure: '8 Bar Rated' }
  },
  { 
    id: 'fan', 
    name: 'AeroBreeze V2', 
    category: 'Ceiling Fans',
    specs: { sweep: '1200 mm', coating: 'Dust-Resistant', speed: '400 RPM', power: '52W Eco' }
  }
];

export default function ProductsPage() {
  const [activeId, setActiveId] = useState('cooler');
  const activeProduct = PRODUCT_DATA.find(p => p.id === activeId);

  return (
    <main className="relative min-h-[calc(100vh-80px)] text-white overflow-x-hidden">
      {/* 3D WebGL Context Layer */}
      <SceneCanvas activeId={activeId} />

      {/* Premium UI Overlay Layer */}
      <div className="relative z-10 min-h-[calc(100vh-80px)] flex flex-col justify-between p-6 md:p-10 pointer-events-none">
        
        {/* Technical Data Specification Sheet Grid wrapper */}
        <div className="w-full max-w-7xl mx-auto my-auto pt-4 flex flex-col space-y-4">
          
          {/* Action Navigation: Dedicated Back Button */}
          <div className="pointer-events-auto">
            <Link href="/" className="inline-flex items-center text-xs font-mono tracking-wider text-gray-400 hover:text-cyan-400 transition-colors uppercase bg-white/5 border border-white/15 px-4 py-2 rounded-lg">
              ← Back to Home
            </Link>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-4 bg-[#0d1527]/70 backdrop-blur-xl border border-white/10 p-6 rounded-2xl pointer-events-auto shadow-2xl shadow-black/50">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 block mb-1">
                {activeProduct.category}
              </span>
              <h1 className="text-3xl font-black tracking-tight uppercase mb-4 text-white">
                {activeProduct.name}
              </h1>
              
              <hr className="border-white/10 mb-4" />
              
              {/* Spec Matrix Renderer */}
              <div className="space-y-3 font-mono text-xs">
                {Object.entries(activeProduct.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-gray-500 uppercase">{key}</span>
                    <span className="text-gray-200 font-semibold text-right">{value}</span>
                  </div>
                ))}
              </div>

              <Link href="/products/showcase" className="w-full border border-cyan-400/30 hover:bg-cyan-400/10 text-cyan-400 font-bold text-xs uppercase tracking-wider py-3 rounded-xl text-center transition block mt-6">
                Switch to Cinematic View
              </Link>

              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl transition mt-2 shadow-lg shadow-blue-600/30">
                Download Technical Spec Sheet
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Bottom Control Strip */}
        <div className="w-full max-w-7xl mx-auto pointer-events-auto pt-6">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 bg-[#070A13]/80 backdrop-blur-md border border-white/5 p-3 rounded-2xl">
            {PRODUCT_DATA.map((product) => (
              <button
                key={product.id}
                onClick={() => setActiveId(product.id)}
                className={`flex flex-col text-left p-3 rounded-xl transition-all duration-300 border ${
                  activeId === product.id
                    ? 'bg-gradient-to-b from-blue-600/20 to-cyan-500/5 border-cyan-400 shadow-lg shadow-cyan-500/10'
                    : 'bg-white/5 border-transparent hover:bg-white/10'
                }`}
              >
                <span className="text-[9px] font-mono uppercase tracking-wider text-gray-500 mb-1">Select</span>
                <span className="text-xs font-bold truncate text-white">{product.category}</span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}