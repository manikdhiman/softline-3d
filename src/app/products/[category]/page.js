'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

const CATEGORY_MAP = {
  'coolers': { name: 'Air Coolers', items: [{ id: 'cooler-tejas', name: 'Tejas 100 Tower', type: 'cooler' }] },
  'televisions': { name: 'LED Televisions', items: [{ id: 'tv-webos', name: 'SL-4300 WebOS', type: 'tv' }] },
  'washing-machines': { name: 'Washing Machines', items: [{ id: 'washing-pro', name: 'HydroCare Pro', type: 'washing' }] },
  'mixer-grinders': { name: 'Mixer Grinders', items: [{ id: 'grinder-turbo', name: 'TurboBlend 750', type: 'grinder' }] },
  'geysers': { name: 'Water Geysers', items: [{ id: 'geyser-aqua', name: 'AquaTherm Glass', type: 'geyser' }] },
  'fans': { name: 'Ceiling Fans', items: [{ id: 'fan-aero', name: 'AeroBreeze V2', type: 'fan' }] }
};

export default function CategoryPage() {
  const { category } = useParams();
  const currentCategory = CATEGORY_MAP[category];

  if (!currentCategory) {
    return <div className="p-12 text-center text-sm text-gray-500 font-mono">Category Profile Array Reference Context Empty.</div>;
  }

  return (
    <main className="max-w-7xl mx-auto w-full p-6 md:p-12 text-white">
      <div className="mb-8">
        <Link href="/" className="text-xs font-mono text-gray-500 hover:text-cyan-400 transition">← Back to Home</Link>
        <h1 className="text-4xl font-black uppercase mt-2 tracking-tight">{currentCategory.name}</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentCategory.items.map((product) => (
          <Link 
            key={product.id}
            href={`/products/${category}/${product.id}?type=${product.type}`}
            className="group bg-[#0d1527]/50 border border-white/10 p-6 rounded-2xl flex flex-col justify-between hover:border-cyan-400 transition duration-300 shadow-xl"
          >
            <div>
              <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">Premium Build</span>
              <h2 className="text-xl font-bold uppercase mt-1 text-white group-hover:text-cyan-400 transition">{product.name}</h2>
              <p className="text-xs text-gray-400 font-mono mt-4">Industrial Grade Engineering Spec Matrix Loaded</p>
            </div>
            <span className="text-xs font-mono text-cyan-400 mt-6 inline-block group-hover:translate-x-1 transition-transform">View Details Viewport →</span>
          </Link>
        ))}
      </div>
    </main>
  );
}