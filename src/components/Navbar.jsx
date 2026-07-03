'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full max-w-7xl mx-auto flex justify-between items-center bg-[#0d1527]/40 backdrop-blur-xl border border-white/15 px-8 py-4 rounded-full pointer-events-auto transition-all">
      <div className="flex items-center space-x-3">
        <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse" />
        <Link href="/" className="text-xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 select-none">
          SOFTLINE
        </Link>
      </div>
      
      <nav className="hidden md:flex space-x-8 text-xs font-mono tracking-wider uppercase">
        <Link href="/" className={`transition-all duration-200 ${pathname === '/' ? 'text-cyan-400 font-bold' : 'text-gray-400 hover:text-white'}`}>
          Home
        </Link>
        <Link href="/products" className={`transition-all duration-200 ${pathname === '/products' ? 'text-cyan-400 font-bold' : 'text-gray-400 hover:text-white'}`}>
          Tech Specs
        </Link>
        <Link href="/products/showcase" className={`transition-all duration-200 ${pathname === '/products/showcase' ? 'text-cyan-400 font-bold' : 'text-gray-400 hover:text-white'}`}>
          Cinematic
        </Link>
      </nav>

      <span className="text-[9px] font-mono tracking-[0.2em] bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-cyan-400">
        ESTD 2009
      </span>
    </header>
  );
}