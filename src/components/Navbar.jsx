'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-sky-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center text-white font-extrabold text-xl shadow-md shadow-sky-500/20 group-hover:bg-sky-700 transition">
              S
            </div>
            <div>
              <span className="text-xl font-black text-slate-900 tracking-tight block leading-none">SOFTLINE</span>
              <span className="text-[10px] font-bold text-sky-600 uppercase tracking-widest block mt-0.5">Industries</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
            <Link href="/" className="hover:text-sky-600 transition">Home</Link>
            
            {/* Products Dropdown link */}
            <div className="relative group">
              <Link href="/products/coolers" className="hover:text-sky-600 transition inline-flex items-center gap-1 py-2">
                Products
                <svg className="w-4 h-4 text-slate-400 group-hover:text-sky-600 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute top-full left-0 w-48 bg-white border border-sky-100 rounded-xl shadow-lg p-2 hidden group-hover:block space-y-1">
                <Link href="/products/coolers" className="block px-3 py-2 text-xs text-slate-700 hover:bg-sky-50 hover:text-sky-700 rounded-lg transition">Air Coolers</Link>
                <Link href="/products/televisions" className="block px-3 py-2 text-xs text-slate-700 hover:bg-sky-50 hover:text-sky-700 rounded-lg transition">LED Televisions</Link>
              </div>
            </div>

            <Link href="/company/about" className="hover:text-sky-600 transition">Company</Link>
            <Link href="/support/faqs" className="hover:text-sky-600 transition">FAQs</Link>
            <Link href="/support/downloads" className="hover:text-sky-600 transition">Downloads</Link>
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              href="/support/complaint" 
              className="bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs px-5 py-2.5 rounded-xl shadow-sm transition duration-200"
            >
              Service Ticket
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-sky-50 focus:outline-none"
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-sky-100 space-y-3">
            <Link href="/" className="block text-sm font-semibold text-slate-700 hover:text-sky-600" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/products/coolers" className="block text-sm font-semibold text-slate-700 hover:text-sky-600" onClick={() => setMobileMenuOpen(false)}>Air Coolers</Link>
            <Link href="/products/televisions" className="block text-sm font-semibold text-slate-700 hover:text-sky-600" onClick={() => setMobileMenuOpen(false)}>LED Televisions</Link>
            <Link href="/company/about" className="block text-sm font-semibold text-slate-700 hover:text-sky-600" onClick={() => setMobileMenuOpen(false)}>Company</Link>
            <Link href="/support/faqs" className="block text-sm font-semibold text-slate-700 hover:text-sky-600" onClick={() => setMobileMenuOpen(false)}>FAQs</Link>
            <Link href="/support/downloads" className="block text-sm font-semibold text-slate-700 hover:text-sky-600" onClick={() => setMobileMenuOpen(false)}>Downloads</Link>
            <Link href="/support/complaint" className="block w-full text-center bg-sky-600 text-white text-xs font-semibold py-2.5 rounded-lg" onClick={() => setMobileMenuOpen(false)}>Service Ticket</Link>
          </div>
        )}
      </div>
    </header>
  );
}