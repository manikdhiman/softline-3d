'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-80px)] text-white flex flex-col justify-between p-6 md:p-12">
      
      {/* Main Minimalist Hero Section */}
      <div className="w-full max-w-7xl mx-auto my-auto text-center md:text-left py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div>
          <span className="text-xs font-mono tracking-[0.3em] text-cyan-400 uppercase block mb-3">
            Welcome to Softline Industries
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-6">
            PREMIUM HOUSEHOLD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              APPLIANCES.
            </span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg mb-8 max-w-lg leading-relaxed">
            Engineering high-performance air coolers, televisions, washing machines, and home electronics with absolute integrity. Discover durability built to last.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link href="/products" className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl text-center transition shadow-lg shadow-blue-600/20">
              Explore 3D Catalog
            </Link>
            <a href="#" className="border border-white/10 hover:border-white/20 bg-white/5 text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl text-center transition">
              Learn More
            </a>
          </div>
        </div>

        {/* Right Side Visual Block */}
        <div className="hidden md:flex justify-center items-center">
          <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-blue-600/20 to-cyan-400/10 border border-cyan-500/20 flex items-center justify-center relative animate-pulse">
            <div className="w-60 h-60 rounded-full bg-gradient-to-br from-[#0d1527] to-[#070A13] border border-white/5 flex flex-col items-center justify-center p-6 text-center shadow-2xl">
              <span className="text-2xl font-black text-cyan-400">15+</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-400 mt-1 font-mono">Years of Excellence</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Banner */}
      <footer className="w-full max-w-7xl mx-auto border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-mono">
        <div>© 2026 Softline Industries. All rights reserved.</div>
        <div className="space-x-4">
          <a href="#" className="hover:text-gray-300">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300">Terms of Service</a>
        </div>
      </footer>

    </main>
  );
}