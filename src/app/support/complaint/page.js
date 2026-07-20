'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ComplaintPage() {
  const [formData, setFormData] = useState({
    fullName: '', emailAddress: '', phoneNumber: '', city: '',
    productCategory: '', purchaseDate: '', serialNumber: '', dealerName: '',
    complaintType: '', description: '', preferredContact: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Secure Transmission Logged. Support ticket has been successfully registered.');
  };

  return (
    <main className="max-w-7xl mx-auto w-full p-6 md:p-12 text-slate-900 flex-1 flex flex-col justify-center pt-28">
      
      <div className="mb-8">
        <Link href="/" className="text-xs font-mono text-slate-500 hover:text-sky-600 transition">
          ← Return to Home
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT PANEL */}
        <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-24">
          <div className="bg-white border border-sky-100 rounded-2xl p-6 shadow-sm space-y-4">
            <span className="text-[10px] font-mono tracking-[0.3em] text-sky-600 font-bold uppercase block">System Status</span>
            <h2 className="text-2xl font-black tracking-tight uppercase leading-none text-slate-900">Service Desk Terminal</h2>
            <p className="text-xs text-slate-600 font-mono leading-relaxed">
              Welcome to the unified ticketing module. Submitting this matrix establishes a secure transmission link directly to our engineering diagnostics division.
            </p>
            
            <div className="pt-4 border-t border-slate-100 space-y-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 text-slate-700">
                <span className="text-sky-600 font-bold block mb-1">📞 URGENT ASSISTANCE</span>
                +91 8295433063 <br />
                <span className="text-[10px] text-slate-500">Mon–Sat, 9 AM – 6 PM IST</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="lg:col-span-8">
          <form onSubmit={handleFormSubmit} className="bg-white border border-sky-100 p-6 md:p-8 rounded-2xl space-y-8 shadow-sm">
            
            {/* STEP 1 */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
                <div className="w-6 h-6 rounded-lg bg-sky-500 text-white flex items-center justify-center font-mono text-[11px] font-bold">
                  01
                </div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-900">Your Details</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1">
                  <label className="text-[10px] font-mono text-slate-500 uppercase">Full Name *</label>
                  <input type="text" required placeholder="Rahul Sharma" className="bg-slate-50 border border-slate-200 focus:border-sky-500 px-4 py-2.5 rounded-xl text-xs font-mono text-slate-900 outline-none" value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} />
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="text-[10px] font-mono text-slate-500 uppercase">Email Address *</label>
                  <input type="email" required placeholder="rahul@example.com" className="bg-slate-50 border border-slate-200 focus:border-sky-500 px-4 py-2.5 rounded-xl text-xs font-mono text-slate-900 outline-none" value={formData.emailAddress} onChange={e => setFormData({...formData, emailAddress: e.target.value})} />
                </div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
                <div className="w-6 h-6 rounded-lg bg-sky-500 text-white flex items-center justify-center font-mono text-[11px] font-bold">
                  02
                </div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-900">Product Details</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1">
                  <label className="text-[10px] font-mono text-slate-500 uppercase">Product Category *</label>
                  <select required className="bg-slate-50 border border-slate-200 focus:border-sky-500 px-4 py-2.5 rounded-xl text-xs font-mono text-slate-900 outline-none" value={formData.productCategory} onChange={e => setFormData({...formData, productCategory: e.target.value})}>
                    <option value="">Select product...</option>
                    <option value="coolers">Air Coolers</option>
                    <option value="televisions">LED Televisions</option>
                    <option value="washing">Washing Machines</option>
                  </select>
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="text-[10px] font-mono text-slate-500 uppercase">Serial Number (optional)</label>
                  <input type="text" placeholder="SL-XXXXXXXX" className="bg-slate-50 border border-slate-200 focus:border-sky-500 px-4 py-2.5 rounded-xl text-xs font-mono text-slate-900 outline-none" value={formData.serialNumber} onChange={e => setFormData({...formData, serialNumber: e.target.value})} />
                </div>
              </div>
            </div>

            <button type="submit" className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs uppercase tracking-widest py-4 rounded-xl transition shadow-sm">
              Transmit Support Ticket
            </button>

          </form>
        </div>

      </div>
    </main>
  );
}