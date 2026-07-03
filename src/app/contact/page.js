'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: 'Enquiry', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message transmission logged successfully.');
  };

  return (
    <main className="max-w-7xl mx-auto w-full p-6 md:p-12 text-white flex-1 flex flex-col justify-center">
      <div className="mb-10 text-center md:text-left">
        <span className="text-xs font-mono tracking-[0.3em] text-cyan-400 uppercase">Connect with us</span>
        <h1 className="text-4xl font-black uppercase mt-1 tracking-tight">Contact Hub</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Real Information Profile Blocks from Screenshot */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-[#0d1527]/40 border border-white/10 p-5 rounded-xl font-mono text-xs">
            <span className="text-cyan-400 font-bold uppercase block mb-2">📍 Our Office</span>
            <p className="text-gray-300 leading-relaxed">Near G S Farm House, Salwan Road, Assandh, Haryana - 132039</p>
            <span className="text-gray-500 mt-2 block">Assandh, Karnal, Haryana</span>
          </div>

          <div className="bg-[#0d1527]/40 border border-white/10 p-5 rounded-xl font-mono text-xs">
            <span className="text-cyan-400 font-bold uppercase block mb-2">📞 Call Us</span>
            <p className="text-lg font-bold text-white tracking-wider">+91 8295433063</p>
            <span className="text-gray-500 mt-1 block">Mon – Sat, 9:00 AM – 6:00 PM</span>
          </div>

          <div className="bg-[#0d1527]/40 border border-white/10 p-5 rounded-xl font-mono text-xs">
            <span className="text-cyan-400 font-bold uppercase block mb-2">✉️ Email Us</span>
            <p className="text-gray-300 select-all">softlineindustriesknl@gmail.com</p>
            <span className="text-gray-500 mt-1 block">Response matrix within 24 hours</span>
          </div>

          <div className="bg-[#0d1527]/40 border border-white/10 p-5 rounded-xl font-mono text-xs">
            <span className="text-cyan-400 font-bold uppercase block mb-2">⏰ Business Hours</span>
            <p className="text-gray-300">Monday – Saturday</p>
            <span className="text-gray-500 mt-1 block">9:00 AM – 6:00 PM IST</span>
          </div>
        </div>

        {/* Right Side: Interactive Transmission Form View from Screenshot */}
        <form onSubmit={handleSubmit} className="lg:col-span-8 bg-[#0d1527]/60 border border-white/10 p-6 md:p-8 rounded-2xl space-y-4 shadow-2xl backdrop-blur-md">
          <h2 className="text-xl font-bold uppercase tracking-wide text-white">Send us a Message</h2>
          <p className="text-xs text-gray-400 font-mono">Fill in the form data matrix below and our technical desk will review details.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-1">
              <label className="text-[10px] font-mono text-gray-400 uppercase">Full Name *</label>
              <input type="text" required placeholder="Rahul Sharma" className="bg-white/5 border border-white/10 px-4 py-3 rounded-lg text-xs font-mono text-white focus:border-cyan-400 outline-none" onChange={e => setForm({...form, name: e.target.value})} />
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-[10px] font-mono text-gray-400 uppercase">Email *</label>
              <input type="email" required placeholder="rahul@example.com" className="bg-white/5 border border-white/10 px-4 py-3 rounded-lg text-xs font-mono text-white focus:border-cyan-400 outline-none" onChange={e => setForm({...form, email: e.target.value})} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-1">
              <label className="text-[10px] font-mono text-gray-400 uppercase">Phone</label>
              <input type="text" placeholder="+91 98765 43210" className="bg-white/5 border border-white/10 px-4 py-3 rounded-lg text-xs font-mono text-white focus:border-cyan-400 outline-none" onChange={e => setForm({...form, phone: e.target.value})} />
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-[10px] font-mono text-gray-400 uppercase">Enquiry Type *</label>
              <select className="bg-[#0d1527] border border-white/10 px-4 py-3 rounded-lg text-xs font-mono text-white focus:border-cyan-400 outline-none cursor-pointer" onChange={e => setForm({...form, type: e.target.value})}>
                <option>General Enquiry</option>
                <option>Product Service Support</option>
                <option>Dealership / Distribution</option>
                <option>Corporate Bulk Order</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <label className="text-[10px] font-mono text-gray-400 uppercase">Subject *</label>
            <input type="text" required placeholder="How can we help?" className="bg-white/5 border border-white/10 px-4 py-3 rounded-lg text-xs font-mono text-white focus:border-cyan-400 outline-none" onChange={e => setForm({...form, subject: e.target.value})} />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="text-[10px] font-mono text-gray-400 uppercase">Message *</label>
            <textarea rows="4" required placeholder="Tell us more about your enquiry..." className="bg-white/5 border border-white/10 p-4 rounded-lg text-xs font-mono text-white focus:border-cyan-400 outline-none resize-none" onChange={e => setForm({...form, message: e.target.value})} />
          </div>

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 font-bold text-xs uppercase tracking-widest py-4 rounded-xl transition shadow-lg shadow-blue-600/30">
            Transmit Secure Message
          </button>
        </form>
      </div>
    </main>
  );
}