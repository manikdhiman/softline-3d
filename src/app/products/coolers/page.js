'use client';

import Link from 'next/link';

export default function AirCoolersPage() {
  const AIR_COOLERS_DATA = [
    {
      id: 'tejas-100-tower',
      badge: 'Premium Build',
      name: 'TEJAS 100 TOWER',
      imagePath: '/images/products/tejas-100.png',
      fallbackIcon: '🌬️',
      specMatrix: {
        tankCapacity: '100 Litres',
        airDelivery: '4500 m³/hr',
        motorType: 'Pure Copper Motor',
        coolingPad: 'High-Density Honeycomb'
      },
      shortDesc: 'Industrial grade engineering configuration optimized for rapid ambient room cooling loops.'
    },
    {
      id: 'vayu-80-desert',
      badge: 'High Performance',
      name: 'VAYU 80 DESERT',
      imagePath: '/images/products/vayu-80.png',
      fallbackIcon: '💨',
      specMatrix: {
        tankCapacity: '80 Litres',
        airDelivery: '5200 m³/hr',
        motorType: 'Heavy Duty Motor',
        coolingPad: 'Wood Wool / Honeycomb'
      },
      shortDesc: 'Extra-large airflow throughput capacity engineered to combat peak arid summer environments.'
    },
    {
      id: 'marut-50-personal',
      badge: 'Compact Efficient',
      name: 'MARUT 50 PERSONAL',
      imagePath: '/images/products/marut-50.png',
      fallbackIcon: '❄️',
      specMatrix: {
        tankCapacity: '50 Litres',
        airDelivery: '2800 m³/hr',
        motorType: 'High Speed Silent',
        coolingPad: '3-Sided Honeycomb'
      },
      shortDesc: 'Sleek, low-noise bedroom configuration delivering localized immediate temperature drop vectors.'
    }
  ];

  return (
    <main className="min-h-screen text-slate-900 bg-slate-50 pt-28 pb-20 px-6 max-w-7xl mx-auto">
      
      {/* HEADER */}
      <div className="border-b border-sky-100 pb-4 mb-12">
        <span className="text-xs font-mono tracking-[0.3em] text-sky-600 uppercase block mb-1 font-bold">
          Equipment Catalog
        </span>
        <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-slate-900">
          Air Coolers
        </h1>
      </div>

      {/* LIGHT BLUE / WHITE CARD GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {AIR_COOLERS_DATA.map((product) => (
          <div 
            key={product.id}
            className="group bg-white border border-sky-100 hover:border-sky-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
          >
            {/* IMAGE PORTAL */}
            <div className="w-full h-64 bg-sky-50/50 relative border-b border-sky-100 flex items-center justify-center p-6">
              <div className="absolute top-4 left-4 bg-sky-100 border border-sky-200 text-sky-700 font-mono text-[9px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-md z-10">
                {product.badge}
              </div>

              <div className="w-full h-full relative flex items-center justify-center">
                <img 
                  src={product.imagePath} 
                  alt={product.name}
                  className="max-w-full max-h-full object-contain transform transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                
                <div className="hidden flex-col items-center justify-center text-center font-mono space-y-2">
                  <span className="text-4xl">{product.fallbackIcon}</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest">[ 2D Product Image ]</span>
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-6 space-y-4">
              <div>
                <h2 className="text-lg font-black tracking-wide text-slate-900 uppercase group-hover:text-sky-600 transition-colors">
                  {product.name}
                </h2>
                <p className="text-[11px] font-mono text-slate-500 mt-1 leading-relaxed">
                  {product.shortDesc}
                </p>
              </div>

              {/* TECHNICAL SPECS */}
              <div className="border-t border-slate-100 pt-4 space-y-2 font-mono text-[11px]">
                <div className="text-[10px] uppercase font-bold text-sky-600 tracking-wider mb-2 block">
                  ⚡ Technical Telemetry Metrics:
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                    <span className="text-[9px] text-slate-400 uppercase block">Tank Vol</span>
                    <span className="font-bold text-slate-800">{product.specMatrix.tankCapacity}</span>
                  </div>
                  <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                    <span className="text-[9px] text-slate-400 uppercase block">Air Delivery</span>
                    <span className="font-bold text-slate-800">{product.specMatrix.airDelivery}</span>
                  </div>
                </div>
              </div>

              <Link 
                href={`/products/showcase?id=${product.id}`}
                className="w-full bg-sky-500 hover:bg-sky-600 text-white text-center block font-mono text-[10px] font-bold uppercase tracking-widest py-3 rounded-xl transition duration-200 shadow-sm"
              >
                View Details Viewport →
              </Link>
            </div>

          </div>
        ))}
      </div>

    </main>
  );
}