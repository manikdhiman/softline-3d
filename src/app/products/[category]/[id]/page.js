'use client';

import { useParams, useSearchParams } from 'next/navigation';
import SceneCanvas from '@/components/3d/SceneCanvas';
import Link from 'next/link';

const SPEC_DATABASE = {
  'cooler-tejas': { name: 'Tejas 100 Tower', category: 'Air Coolers', specs: { type: 'Tower Plastic', capacity: '100L', motor: '1.75mm Copper', fan: '20" Aluminum' } },
  'tv-webos': { name: 'SL-4300 WebOS', category: 'LED Televisions', specs: { display: '43" Ultra HD', system: 'WebOS 4K', audio: '20W Stereo', mount: 'Wall / Table' } },
  'washing-pro': { name: 'HydroCare Pro', category: 'Washing Machines', specs: { capacity: '8.5 Kg', drive: 'Direct Inverter', cycles: '12 Smart Modes', tub: 'Diamond Steel' } },
  'grinder-turbo': { name: 'TurboBlend 750', category: 'Mixer Grinders', specs: { power: '750W High Torque', blades: 'SS-304 Hardened', speeds: '3 + Pulse', coupling: 'Nylon' } },
  'geyser-aqua': { name: 'AquaTherm Glass', category: 'Water Geysers', specs: { volume: '25 Liters', rating: '5-Star BEE', element: 'Glass-Lined', pressure: '8 Bar Rated' } },
  'fan-aero': { name: 'AeroBreeze V2', category: 'Ceiling Fans', specs: { sweep: '1200 mm', coating: 'Dust-Resistant', speed: '400 RPM', power: '52W Eco' } }
};

export default function ProductDetailPage() {
  const { category, id } = useParams();
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || 'cooler';
  
  const productInfo = SPEC_DATABASE[id];

  if (!productInfo) {
    return <div className="p-12 text-center text-gray-500 font-mono">Product Profile Configuration Context Array Empty.</div>;
  }

  return (
    <main className="relative min-h-[calc(100vh-80px)] flex flex-col md:flex-row text-white bg-[#070A13]">
      
      {/* LEFT PANEL: The Dedicated 3D Canvas Asset Workspace viewport */}
      <div className="relative w-full md:w-7/12 h-[50vh] md:h-[calc(100vh-80px)] border-b md:border-b-0 md:border-r border-white/5">
        <SceneCanvas activeId={type} />
        <div className="absolute bottom-4 left-4 z-10 pointer-events-none bg-black/40 backdrop-blur-md px-4 py-2 border border-white/5 rounded-lg text-[10px] font-mono text-gray-400">
          ◀ Drag to Rotate Object Context Loop ▶
        </div>
      </div>

      {/* RIGHT PANEL: Tech Specification Metric Sheet Overlay UI */}
      <div className="w-full md:w-5/12 p-8 md:p-12 overflow-y-auto flex flex-col justify-between bg-[#0d1527]/30 backdrop-blur-sm">
        <div>
          <Link href={`/products/${category}`} className="text-xs font-mono text-gray-500 hover:text-cyan-400 transition">
            ← Back to {productInfo.category}
          </Link>
          
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase block mt-6 mb-1">{productInfo.category}</span>
          <h1 className="text-4xl font-black uppercase tracking-tight text-white mb-6">{productInfo.name}</h1>
          
          <hr className="border-white/10 mb-6" />

          <div className="space-y-4 font-mono text-xs">
            {Object.entries(productInfo.specs).map(([key, value]) => (
              <div key={key} className="flex justify-between border-b border-white/5 pb-3">
                <span className="text-gray-500 uppercase">{key}</span>
                <span className="text-gray-300 font-semibold text-right">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3 pt-8">
          {/* Dynamic Link triggering focus exhibition view loop for this asset model type */}
          <Link 
            href={`/products/showcase?type=${type}`}
            className="w-full text-center block bg-transparent border border-cyan-400/40 hover:bg-cyan-400/10 text-cyan-400 font-bold text-xs uppercase tracking-wider py-4 rounded-xl transition shadow-lg"
          >
            Activate Fullscreen Cinematic View
          </Link>
          <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl transition shadow-xl shadow-blue-600/20">
            Download Technical Data Sheet
          </button>
        </div>

      </div>
    </main>
  );
}