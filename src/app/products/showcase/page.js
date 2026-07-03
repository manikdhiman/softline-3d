'use client';

import { useState } from 'react';
import SceneCanvas from '@/components/3d/SceneCanvas';
import Link from 'next/link';

const SHORT_DATA = [
  { id: 'cooler', title: 'AIR COOLERS', tag: 'High-Velocity industrial cooling cells.' },
  { id: 'tv', title: 'LED TELEVISIONS', tag: 'Vivid resolution matrix arrays.' },
  { id: 'washing', title: 'WASHING MACHINES', tag: 'Heavy-duty system hardware.' },
  { id: 'grinder', title: 'MIXER GRINDERS', tag: 'High-torque culinary powerhouses.' },
  { id: 'geyser', title: 'WATER GEYSERS', tag: 'Thermal glass insulated cores.' },
  { id: 'fan', title: 'CEILING FANS', tag: 'Aerodynamic fluid dynamics.' }
];

export default function ProductShowcase() {
  const [activeId, setActiveId] = useState('cooler');
  const activeProduct = SHORT_DATA.find(p => p.id === activeId) || SHORT_DATA[0];

  return (
    <main className="relative min-h-screen text-white bg-[#0B0F19] overflow-x-hidden">
      {/* Background 3D Viewport Layer */}
      <SceneCanvas activeId={activeId} />

      {/* Front-facing interface typography overlay */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between p-8 md:p-16 pointer-events-none">
        
        {/* Upper Navigation Layer */}
        <header className="w-full max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
          <Link href="/products" className="text-xs font-mono tracking-widest text-gray-400 hover:text-cyan-400 transition uppercase">
            ← Back to Tech Specs
          </Link>
          <div className="text-sm font-black tracking-widest text-cyan-400">PREMIUM SERIES</div>
        </header>

        {/* Cinematic Centered Title Overlays */}
        <div className="w-full max-w-7xl mx-auto my-auto pt-24">
          <div className="max-w-xl pointer-events-auto">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-4 uppercase select-none transition-all">
              SOFTLINE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {activeProduct.title}
              </span>
            </h1>
            <p className="text-gray-400 font-mono text-xs md:text-sm tracking-wide mb-8 uppercase">
              {activeProduct.tag}
            </p>
          </div>
        </div>

        {/* Minimal Selection Strips */}
        <footer className="w-full max-w-7xl mx-auto pointer-events-auto flex flex-wrap gap-6 border-t border-white/5 pt-8">
          {SHORT_DATA.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={`text-xs font-mono tracking-widest uppercase transition pb-2 border-b-2 ${
                activeId === item.id ? 'text-cyan-400 border-cyan-400' : 'text-gray-500 border-transparent hover:text-gray-300'
              }`}
            >
              {item.id}
            </button>
          ))}
        </footer>

      </div>
    </main>
  );
}