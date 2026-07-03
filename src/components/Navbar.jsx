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

const SUPPORT_ITEMS = [
  { name: 'FAQs', path: '/support/faqs' },
  { name: 'File a Complaint', path: '/support/complaint' },
  { name: 'E-Waste Policy', path: '/support/e-waste' },
  { name: 'Downloads', path: '/support/downloads' }
];

const COMPANY_ITEMS = [
  { name: 'About Us', path: '/company/about' },
  { name: 'Our Journey', path: '/company/journey' }
];

export default function Navbar() {
  const pathname = usePathname();
  const [productOpen, setProductOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  const isTabActive = (pathPrefix) => pathname.startsWith(pathPrefix);

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
          {/* Home Link with Dynamic Color & Underline Highlight */}
          <Link 
            href="/" 
            className={`transition-all duration-200 h-full flex items-center ${
              pathname === '/' 
                ? 'text-cyan-400 font-bold border-b-2 border-cyan-400' 
                : 'text-gray-400 hover:text-white border-b-2 border-transparent'
            }`}
          >
            Home
          </Link>
          
          {/* Products Dropdown Tab Trigger */}
          <div 
            className="relative h-full flex items-center cursor-pointer"
            onMouseEnter={() => setProductOpen(true)}
            onMouseLeave={() => setProductOpen(false)}
          >
            <span className={`transition-all duration-200 h-full flex items-center gap-1 ${
              isTabActive('/products') 
                ? 'text-cyan-400 font-bold border-b-2 border-cyan-400' 
                : 'text-gray-400 hover:text-white border-b-2 border-transparent'
            }`}>
              Products ▼
            </span>
            <div className={`absolute top-20 left-1/2 -translate-x-1/2 w-64 bg-[#0d1527] border border-white/10 p-4 rounded-xl shadow-2xl transition-all duration-200 ${productOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              <div className="flex flex-col space-y-2">
                {MENU_ITEMS.map((item) => (
                  <Link key={item.id} href={item.path} onClick={() => setProductOpen(false)} className={`p-2 rounded-lg text-xs transition block ${pathname === item.path ? 'bg-cyan-500/10 text-cyan-400 font-bold' : 'hover:bg-white/5 text-gray-300 hover:text-white'}`}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Company Dropdown Tab Trigger */}
          <div 
            className="relative h-full flex items-center cursor-pointer"
            onMouseEnter={() => setCompanyOpen(true)}
            onMouseLeave={() => setCompanyOpen(false)}
          >
            <span className={`transition-all duration-200 h-full flex items-center gap-1 ${
              isTabActive('/company') 
                ? 'text-cyan-400 font-bold border-b-2 border-cyan-400' 
                : 'text-gray-400 hover:text-white border-b-2 border-transparent'
            }`}>
              Company ▼
            </span>
            <div className={`absolute top-20 left-1/2 -translate-x-1/2 w-48 bg-[#0d1527] border border-white/10 p-4 rounded-xl shadow-2xl transition-all duration-200 ${companyOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              <div className="flex flex-col space-y-2">
                {COMPANY_ITEMS.map((item, idx) => (
                  <Link key={idx} href={item.path} onClick={() => setCompanyOpen(false)} className={`p-2 rounded-lg text-xs transition block ${pathname === item.path ? 'bg-cyan-500/10 text-cyan-400 font-bold' : 'hover:bg-white/5 text-gray-300 hover:text-white'}`}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Support Dropdown Tab Trigger */}
          <div 
            className="relative h-full flex items-center cursor-pointer"
            onMouseEnter={() => setSupportOpen(true)}
            onMouseLeave={() => setSupportOpen(false)}
          >
            <span className={`transition-all duration-200 h-full flex items-center gap-1 ${
              isTabActive('/support') 
                ? 'text-cyan-400 font-bold border-b-2 border-cyan-400' 
                : 'text-gray-400 hover:text-white border-b-2 border-transparent'
            }`}>
              Support ▼
            </span>
            <div className={`absolute top-20 left-1/2 -translate-x-1/2 w-56 bg-[#0d1527] border border-white/10 p-4 rounded-xl shadow-2xl transition-all duration-200 ${supportOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              <div className="flex flex-col space-y-2">
                {SUPPORT_ITEMS.map((item, idx) => (
                  <Link key={idx} href={item.path} onClick={() => setSupportOpen(false)} className={`p-2 rounded-lg text-xs transition block ${pathname === item.path ? 'bg-cyan-500/10 text-cyan-400 font-bold' : 'hover:bg-white/5 text-gray-300 hover:text-white'}`}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Link */}
          <Link 
            href="/contact" 
            className={`transition-all duration-200 h-full flex items-center ${
              pathname === '/contact' 
                ? 'text-cyan-400 font-bold border-b-2 border-cyan-400' 
                : 'text-gray-400 hover:text-white border-b-2 border-transparent'
            }`}
          >
            Contact
          </Link>
        </nav>

        <span className="hidden sm:inline-block text-[9px] font-mono tracking-[0.2em] bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-cyan-400">
          ESTD 2009
        </span>
        
      </div>
    </header>
  );
}