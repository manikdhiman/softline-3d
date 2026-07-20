'use client';

import Link from 'next/link';

export default function DownloadsPage() {
  const FILES = [
    { title: 'Tejas-100-Cooler-Manual.pdf', size: '4.2 MB' },
    { title: 'HydroCare-Pro-Washing-Installation-Spec.pdf', size: '2.8 MB' },
    { title: 'Softline-Corporate-Product-Catalog-2026.pdf', size: '12.4 MB' }
  ];

  return (
    <main className="max-w-4xl mx-auto w-full p-6 md:p-12 text-slate-900 flex-1 flex flex-col justify-center pt-28">
      <div className="mb-6">
        <Link href="/" className="text-xs font-mono text-slate-500 hover:text-sky-600 transition">← Return to Home</Link>
      </div>

      <div className="bg-white border border-sky-100 p-6 md:p-8 rounded-2xl space-y-6 shadow-sm">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tight text-slate-900">Resource Downloads</h1>
          <p className="text-xs text-slate-500 font-mono mt-1">Access verified official equipment user manuals.</p>
        </div>
        
        <hr className="border-slate-100" />
        
        <div className="space-y-3 font-mono text-xs">
          {FILES.map((file, idx) => (
            <div key={idx} className="flex justify-between items-center p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="flex flex-col">
                <span className="text-slate-900 font-bold">{file.title}</span>
                <span className="text-[10px] text-slate-500 uppercase mt-0.5">{file.size} · PDF Document</span>
              </div>
              <button onClick={() => alert('Downloading file...')} className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-4 py-2 rounded-lg text-[11px] uppercase transition">
                Download ↓
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}