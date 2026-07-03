'use client';

import { useSearchParams } from 'next/navigation';
import SceneCanvas from '@/components/3d/SceneCanvas';
import Link from 'next/link';

const LOOKUP_DATA = {
  'cooler': { title: 'AIR COOLERS', tag: 'High-Velocity industrial cooling cells.' },
  'tv': { title: 'LED TELEVISIONS', tag: 'Vivid resolution matrix arrays.' },
  'washing': { title: 'WASHING MACHINES', tag: 'Heavy-duty system hardware.' },
  'grinder': { title: 'MIXER GRINDERS', tag: 'High-torque culinary powerhouses.' },
  'geyser': { title: 'WATER GEYSERS', tag: 'Thermal glass insulated cores.' },
  'fan': { title: 'CEILING FANS', tag: 'Aerodynamic fluid dynamics.' }
};

export default function ProductShowcase() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || 'cooler';
  
  const currentAsset = LOOKUP_DATA[type] || LOOKUP_DATA['cooler'];

  return (
    <main className="relative min-h-[calc(100vh-80px)] text-white overflow-x-hidden bg-[#0B0F19]">
      <SceneCanvas activeId={type} />

      <div className="relative z-10 min-h-[calc(100vh-80px)] flex flex-col justify-between p-8 md:p-16 pointer-events-none">
        
        <header className="w-full max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
          <button onClick={() => window.history.back()} className="inline-flex items-center text-xs font-mono tracking-wider text-gray-400 hover:text-cyan-400 transition-colors uppercase bg-white/5 border border-white/15 px-4 py-2 rounded-lg">
            ← Return to Spec Sheet
          </button>
          <div className="text-xs font-mono tracking-widest text-cyan-400 uppercase hidden sm:block bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full">
            Premium Exhibition Focus Mode Active
          </div>
        </header>

        <div className="w-full max-w-7xl mx-auto my-auto pt-12">
          <div className="max-w-xl pointer-events-auto">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-4 uppercase select-none transition-all">
              SOFTLINE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {currentAsset.title}
              </span>
            </h1>
            <p className="text-gray-400 font-mono text-xs md:text-sm tracking-wide mb-8 uppercase">
              {currentAsset.tag}
            </p>
          </div>
        </div>

        <footer className="w-full max-w-7xl mx-auto border-t border-white/5 pt-6 text-[10px] font-mono text-gray-600">
          SOFTLINE INDUSTRIES VISUALIZATION LABS V2.6
        </footer>

      </div>
    </main>
  );
}