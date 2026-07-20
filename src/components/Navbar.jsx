'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const isActive = (path) => pathname === path || pathname.startsWith(`${path}/`);

  return (
    <header className="w-full bg-white/90 backdrop-blur-md border-b border-sky-100 fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* BRAND LOGO */}
        <div className="flex items-center space-x-3">
          <div className="w-2.5 h-2.5 bg-sky-500 rounded-full animate-pulse" />
          <Link href="/" className="text-xl font-black tracking-widest text-slate-900 select-none">
            SOFTLINE
          </Link>
        </div>

        {/* NAVIGATION LINKS */}
        <nav className="hidden md:flex space-x-8 text-xs font-mono tracking-wider uppercase items-center h-full">
          
          {/* HOME LINK */}
          <div className="relative pb-1.5 flex items-center">
            <Link 
              href="/" 
              className={`transition-colors duration-200 ${isActive('/') && pathname === '/' ? 'text-sky-600 font-bold' : 'text-slate-600 hover:text-sky-600'}`}
            >
              Home
            </Link>
            {pathname === '/' && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-sky-500 rounded-full" />}
          </div>

          {/* PRODUCTS DROPDOWN */}
          <div 
            className="relative pb-1.5 flex items-center cursor-pointer group"
            onMouseEnter={() => setActiveDropdown('products')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span className={`transition-colors duration-200 ${isActive('/products') ? 'text-sky-600 font-bold' : 'text-slate-600 group-hover:text-sky-600'}`}>
              Products ▼
            </span>
            {isActive('/products') && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-sky-500 rounded-full" />}

            {activeDropdown === 'products' && (
              <div className="absolute top-full left-0 w-48 bg-white border border-sky-100 shadow-xl rounded-xl p-2 space-y-1 font-mono text-[11px] z-50">
                <Link href="/products/coolers" className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-sky-50 hover:text-sky-600">Air Coolers</Link>
                <Link href="/products/televisions" className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-sky-50 hover:text-sky-600">Smart TVs</Link>
                <Link href="/products/washing" className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-sky-50 hover:text-sky-600">Washing Machines</Link>
              </div>
            )}
          </div>

          {/* COMPANY DROPDOWN */}
          <div 
            className="relative pb-1.5 flex items-center cursor-pointer group"
            onMouseEnter={() => setActiveDropdown('company')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span className={`transition-colors duration-200 ${isActive('/company') ? 'text-sky-600 font-bold' : 'text-slate-600 group-hover:text-sky-600'}`}>
              Company ▼
            </span>
            {isActive('/company') && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-sky-500 rounded-full" />}

            {activeDropdown === 'company' && (
              <div className="absolute top-full left-0 w-48 bg-white border border-sky-100 shadow-xl rounded-xl p-2 space-y-1 font-mono text-[11px] z-50">
                <Link href="/company/about" className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-sky-50 hover:text-sky-600">About Us</Link>
                <Link href="/company/journey" className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-sky-50 hover:text-sky-600">Our Journey</Link>
              </div>
            )}
          </div>

          {/* SUPPORT DROPDOWN */}
          <div 
            className="relative pb-1.5 flex items-center cursor-pointer group"
            onMouseEnter={() => setActiveDropdown('support')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span className={`transition-colors duration-200 ${isActive('/support') ? 'text-sky-600 font-bold' : 'text-slate-600 group-hover:text-sky-600'}`}>
              Support ▼
            </span>
            {isActive('/support') && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-sky-500 rounded-full" />}

            {activeDropdown === 'support' && (
              <div className="absolute top-full left-0 w-52 bg-white border border-sky-100 shadow-xl rounded-xl p-2 space-y-1 font-mono text-[11px] z-50">
                <Link href="/support/complaint" className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-sky-50 hover:text-sky-600">File a Complaint</Link>
                <Link href="/support/faqs" className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-sky-50 hover:text-sky-600">FAQs</Link>
                <Link href="/support/e-waste" className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-sky-50 hover:text-sky-600">E-Waste Policy</Link>
                <Link href="/support/downloads" className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-sky-50 hover:text-sky-600">Downloads</Link>
              </div>
            )}
          </div>

        </nav>

        {/* ESTABLISHED BADGE */}
        <span className="text-[10px] font-mono tracking-[0.2em] bg-sky-50 border border-sky-200 px-4 py-1.5 rounded-full text-sky-700 font-bold">
          ESTD 2009
        </span>

      </div>
    </header>
  );
}