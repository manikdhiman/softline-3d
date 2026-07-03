'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const MENU_ITEMS = [
  { id: 'cooler', name: 'Air Coolers', path: '/products/coolers' },
  { id: 'tv', name: 'LED Televisions', path: '/products/televisions' },
  { id: 'washing', name: 'Washing Machines', path: '/products/washing-machines' },
  { id: 'grinder', name: 'Mixer Grinders', path: '/products/mixer-grinders' },
  { id: 'geyser', name: 'Water Geysers', path: '/products/geysers' },
  { id: 'fan', name: 'Ceiling Fans', path: '/products/fans' }
];

export default function Navbar() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="w-full bg-[#070A13]/60 backdrop-blur-xl border-b border-white/10 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        <div className="flex items-center space-x-3">
          <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse" />
          <Link href="/" className="text-xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 select-none">
            SOFTLINE
          </Link>
        </div>
        
        <nav className="flex space-x-8 text-xs font-mono tracking-wider uppercase items-center h-full">
          <Link href="/" className={`transition-all duration-200 ${pathname === '/' ? 'text-cyan-400 font-bold' : 'text-gray-400 hover:text-white'}`}>
            Home
          </Link>
          
          {/* Dropdown Hover Container */}
          <div 
            className="relative h-full flex items-center cursor-pointer group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className={`transition-all duration-200 flex items-center gap-1 ${pathname.startsWith('/products') ? 'text-cyan-400 font-bold' : 'text-gray-400 hover:text-white'}`}>
              Products ▼
            </span>

            {/* Dropdown Card Grid */}
            <div className={`absolute top-20 left-1/2 -translate-x-1/2 w-64 bg-[#0d1527] border border-white/10 p-4 rounded-xl shadow-2xl transition-all duration-200 ${dropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              <div className="flex flex-col space-y-2">
                {MENU_ITEMS.map((item) => (
                  <Link 
                    key={item.id} 
                    href={item.path}
                    onClick={() => setDropdownOpen(false)}
                    className="p-2 text-left rounded-lg text-xs hover:bg-white/5 text-gray-300 hover:text-cyan-400 transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <a href="#" className="text-gray-400 hover:text-white transition-all duration-200">
            About Us
          </a>
        </nav>

        <span className="hidden sm:inline-block text-[9px] font-mono tracking-[0.2em] bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-cyan-400">
          ESTD 2009
        </span>
        
      </div>
    </header>
  );
}