'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-[#070A13]/60 backdrop-blur-xl border-b border-white/10 fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Brand Identity Branding Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse" />
          <Link href="/" className="text-xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 select-none">
            SOFTLINE
          </Link>
        </div>
        
        {/* Adjusted Main Persistent Navigation Link Blocks */}
        <nav className="flex space-x-8 text-xs font-mono tracking-wider uppercase">
          <Link href="/" className={`transition-all duration-200 ${pathname === '/' ? 'text-cyan-400 font-bold' : 'text-gray-400 hover:text-white'}`}>
            Home
          </Link>
          <Link href="/products" className={`transition-all duration-200 ${pathname === '/products' ? 'text-cyan-400 font-bold' : 'text-gray-400 hover:text-white'}`}>
            Products
          </Link>
          <a href="#" className="text-gray-400 hover:text-white transition-all duration-200">
            About Us
          </a>
        </nav>

        {/* Corporate Established Timestamp Tag */}
        <span className="hidden sm:inline-block text-[9px] font-mono tracking-[0.2em] bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-cyan-400">
          ESTD 2009
        </span>
        
      </div>
    </header>
  );
}