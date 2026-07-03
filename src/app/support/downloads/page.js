'use client';

import Link from 'next/link';

export default function DownloadsPage() {
  const FILES = [
    { title: 'Tejas-100-Cooler-Manual.pdf', size: '4.2 MB' },
    { title: 'HydroCare-Pro-Washing-Installation-Spec.pdf', size: '2.8 MB' },
    { title: 'Softline-Corporate-Product-Catalog-2026.pdf', size: '12.4 MB' }
  ];

  return (
    <main className="max-w-4xl mx-auto w-full p-6 md:p-12 text-white flex-1 flex flex-col justify-center pt-28">
      <div className="mb-6">
        <Link href="/" className="text-xs font-mono text-gray-500 hover:text-cyan-400 transition">← Return to Home</Link>
      </div>

      <div className="bg-[#0d1527]/40 border border-white/10 p-6 md:p-8 rounded-2xl space-y-6">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tight text-white">Resource Downloads</h1>
          <p className="text-xs text-gray-400 font-mono mt-1">Access verified official equipment user manuals and technical data sheets below.</p>
        </div>
        
        <hr className="border-white/10" />
        
        <div className="space-y-3 font-mono text-xs">
          {FILES.map((file, idx) => (
            <div key={idx} className="flex justify-between items-center p-4 bg-[#070A13]/60 border border-white/5 rounded-xl hover:border-cyan-400/30 transition duration-200">
              <div className="flex flex-col">
                <span className="text-gray-200 font-bold">{file.title}</span>
                <span className="text-[10px] text-gray-500 uppercase mt-0.5">{file.size} · PDF Document</span>
              </div>
              <button onClick={() => alert('Downloading resource file asset...')} className="text-cyan-400 hover:text-white transition font-bold border border-cyan-400/20 hover:bg-cyan-400/10 px-4 py-2 rounded-lg text-[11px] uppercase tracking-wider">
                Download ↓
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}