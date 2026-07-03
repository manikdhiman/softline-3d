'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ComplaintPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    city: '',
    productCategory: '',
    purchaseDate: '',
    serialNumber: '',
    dealerName: '',
    complaintType: '',
    description: '',
    preferredContact: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Secure Transmission Logged. Support ticket has been successfully registered.');
  };

  return (
    <main className="max-w-7xl mx-auto w-full p-6 md:p-12 text-white flex-1 flex flex-col justify-center pt-28">
      
      <div className="mb-8">
        <Link href="/" className="text-xs font-mono text-gray-500 hover:text-cyan-400 transition">
          ← Return to Home
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT SIDE PANEL: FIXED STRUCTURAL CONTROL CENTER BANNER */}
        <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-24">
          <div className="bg-gradient-to-br from-[#0d1527] to-[#070A13] border border-white/10 rounded-2xl p-6 shadow-2xl space-y-4">
            <span className="text-[10px] font-mono tracking-[0.3em] text-cyan-400 uppercase block">System Status</span>
            <h2 className="text-2xl font-black tracking-tight uppercase leading-none">Service Desk Terminal</h2>
            <p className="text-xs text-gray-400 font-mono leading-relaxed">
              Welcome to the unified ticketing module. Submitting this matrix establishes a secure transmission link directly to our engineering diagnostics division.
            </p>
            
            <div className="pt-4 border-t border-white/5 space-y-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-blue-950/20 border border-blue-500/20 text-gray-300">
                <span className="text-cyan-400 font-bold block mb-1">📞 URGENT ASSISTANCE</span>
                +91 8295433063 <br />
                <span className="text-[10px] text-gray-500">Mon–Sat, 9 AM – 6 PM IST</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-gray-400 text-[11px]">
                ⏳ Response matrix turnaround window targets full resolution tracking within <span className="text-white font-bold">24 hours</span>.
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE PANEL: MODULAR STEPPED GLASS FORM */}
        <div className="lg:col-span-8">
          <form onSubmit={handleFormSubmit} className="bg-[#0d1527]/30 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-2xl space-y-10 shadow-2xl">
            
            {/* BLOCK 1: USER CONTEXT CONFIGURATION */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b border-white/5">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 text-white flex items-center justify-center font-mono text-[11px] font-bold shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                  01
                </div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-white">Your Details</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-1.5 group">
                  <label className="text-[10px] font-mono text-gray-500 uppercase">Full Name *</label>
                  <input type="text" required placeholder="Rahul Sharma" className="bg-[#070A13]/60 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 px-4 py-3 rounded-xl text-xs font-mono text-white outline-none transition duration-200" value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} />
                </div>
                <div className="flex flex-col space-y-1.5 group">
                  <label className="text-[10px] font-mono text-gray-500 uppercase">Email Address *</label>
                  <input type="email" required placeholder="rahul@example.com" className="bg-[#070A13]/60 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 px-4 py-3 rounded-xl text-xs font-mono text-white outline-none transition duration-200" value={formData.emailAddress} onChange={e => setFormData({...formData, emailAddress: e.target.value})} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-1.5 group">
                  <label className="text-[10px] font-mono text-gray-500 uppercase">Phone Number *</label>
                  <input type="text" required placeholder="+91 98765 43210" className="bg-[#070A13]/60 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 px-4 py-3 rounded-xl text-xs font-mono text-white outline-none transition duration-200" value={formData.phoneNumber} onChange={e => setFormData({...formData, phoneNumber: e.target.value})} />
                </div>
                <div className="flex flex-col space-y-1.5 group">
                  <label className="text-[10px] font-mono text-gray-500 uppercase">City *</label>
                  <input type="text" required placeholder="New Delhi" className="bg-[#070A13]/60 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 px-4 py-3 rounded-xl text-xs font-mono text-white outline-none transition duration-200" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} />
                </div>
              </div>
            </div>

            {/* BLOCK 2: HARDWARE SPECIFICATION LOGS */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b border-white/5">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 text-white flex items-center justify-center font-mono text-[11px] font-bold shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                  02
                </div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-white">Product Details</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-1.5 group">
                  <label className="text-[10px] font-mono text-gray-500 uppercase">Product Category *</label>
                  <select required className="bg-[#070A13]/80 border border-white/10 focus:border-cyan-400 px-4 py-3 rounded-xl text-xs font-mono text-white outline-none cursor-pointer transition duration-200" value={formData.productCategory} onChange={e => setFormData({...formData, productCategory: e.target.value})}>
                    <option value="">Select product...</option>
                    <option value="coolers">Air Coolers</option>
                    <option value="televisions">LED Televisions</option>
                    <option value="washing">Washing Machines</option>
                    <option value="grinders">Mixer Grinders</option>
                    <option value="geysers">Water Geysers</option>
                    <option value="fans">Ceiling Fans</option>
                  </select>
                </div>
                <div className="flex flex-col space-y-1.5 group">
                  <label className="text-[10px] font-mono text-gray-500 uppercase">Purchase Date <span className="text-gray-600">(optional)</span></label>
                  <input type="date" className="bg-[#070A13]/60 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 px-4 py-3 rounded-xl text-xs font-mono text-white outline-none transition duration-200" value={formData.purchaseDate} onChange={e => setFormData({...formData, purchaseDate: e.target.value})} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-1.5 group">
                  <label className="text-[10px] font-mono text-gray-500 uppercase">Serial Number <span className="text-gray-600">(optional)</span></label>
                  <input type="text" placeholder="SL-XXXXXXXX" className="bg-[#070A13]/60 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 px-4 py-3 rounded-xl text-xs font-mono text-white outline-none transition duration-200" value={formData.serialNumber} onChange={e => setFormData({...formData, serialNumber: e.target.value})} />
                </div>
                <div className="flex flex-col space-y-1.5 group">
                  <label className="text-[10px] font-mono text-gray-500 uppercase">Dealer / Store Name <span className="text-gray-600">(optional)</span></label>
                  <input type="text" placeholder="Where you purchased from" className="bg-[#070A13]/60 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 px-4 py-3 rounded-xl text-xs font-mono text-white outline-none transition duration-200" value={formData.dealerName} onChange={e => setFormData({...formData, dealerName: e.target.value})} />
                </div>
              </div>
            </div>

            {/* BLOCK 3: INCIDENT PROFILE FEEDBACK MATRIX */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b border-white/5">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 text-white flex items-center justify-center font-mono text-[11px] font-bold shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                  03
                </div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-white">Complaint Details</h3>
              </div>

              <div className="flex flex-col space-y-1.5 group">
                <label className="text-[10px] font-mono text-gray-500 uppercase">Complaint Type *</label>
                <select required className="bg-[#070A13]/80 border border-white/10 focus:border-cyan-400 px-4 py-3 rounded-xl text-xs font-mono text-white outline-none cursor-pointer transition duration-200" value={formData.complaintType} onChange={e => setFormData({...formData, complaintType: e.target.value})}>
                  <option value="">Select type...</option>
                  <option value="technical">Technical Malfunction</option>
                  <option value="damage">Physical Component Damage</option>
                  <option value="installation">Installation Delay</option>
                  <option value="other">Other Operational Inquiries</option>
                </select>
              </div>

              <div className="flex flex-col space-y-1.5 group">
                <label className="text-[10px] font-mono text-gray-500 uppercase">Describe the Issue *</label>
                <textarea rows="4" required placeholder="Please describe the problem in detail..." className="bg-[#070A13]/60 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 p-4 rounded-xl text-xs font-mono text-white outline-none resize-none transition duration-200" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
              </div>

              <div className="flex flex-col space-y-1.5 group">
                <label className="text-[10px] font-mono text-gray-500 uppercase">Preferred Contact Method *</label>
                <select required className="bg-[#070A13]/80 border border-white/10 focus:border-cyan-400 px-4 py-3 rounded-xl text-xs font-mono text-white outline-none cursor-pointer transition duration-200" value={formData.preferredContact} onChange={e => setFormData({...formData, preferredContact: e.target.value})}>
                  <option value="">Select...</option>
                  <option value="phone">Voice Call Support</option>
                  <option value="email">Email Logs Correspondence</option>
                </select>
              </div>
            </div>

            {/* SECURITY WARNING BOX */}
            <div className="w-full bg-orange-950/20 border border-orange-500/20 rounded-xl p-4 flex items-start gap-3 text-[11px] font-mono text-orange-400/90 leading-relaxed">
              <span className="text-orange-400 font-bold">⚠️</span>
              <div>
                Please do not share financial information (bank/card details) in the form above. Softline Industries will never ask for payment to resolve a complaint.
              </div>
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs uppercase tracking-widest py-4 rounded-xl transition duration-300 shadow-xl shadow-cyan-500/10">
              Transmit Support Ticket
            </button>
          </form>
        </div>

      </div>
    </main>
  );
}