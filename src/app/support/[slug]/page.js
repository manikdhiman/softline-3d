'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

export default function SupportDynamicPage() {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState(null);

  // Form State Architecture matching screenshots
  const [complaintForm, setComplaintForm] = useState({
    fullName: '', emailAddress: '', phoneNumber: '', city: '',
    productCategory: '', purchaseDate: '', serialNumber: '', dealerName: '',
    complaintType: '', description: '', preferredContact: ''
  });

  const toggleTab = (index) => {
    setActiveTab(activeTab === index ? null : index);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Secure Transmission Logged. Support ticket has been successfully registered.');
  };

  // Frequently Asked Questions Dataset
  const FAQ_DATASET = [
    { q: "What products does Softline Industries manufacture?", a: "Softline Industries engineers and manufactures premium iron & plastic air coolers, LED televisions, washing machines, mixer grinders, geysers, and fans." },
    { q: "Where is Softline Industries located?", a: "Our corporate office and manufacturing facilities are located Near G S Farm House, Salwan Road, Assandh, Haryana - 132039." },
    { q: "How long has Softline Industries been in business?", a: "Softline Industries was established in 2009. We have been delivering reliable home hardware configurations for over 17 years." }
  ];

  return (
    <main className="max-w-4xl mx-auto w-full p-6 md:p-12 text-white flex-1 flex flex-col justify-center">
      
      <div className="mb-6">
        <Link href="/" className="text-xs font-mono text-gray-500 hover:text-cyan-400 transition">← Return to Home</Link>
      </div>

      {/* RENDER VIEW 1: Frequently Asked Questions */}
      {slug === 'faqs' && (
        <div className="bg-[#0d1527]/40 border border-white/10 p-6 md:p-8 rounded-2xl space-y-6">
          <div>
            <h1 className="text-3xl font-black uppercase tracking-tight text-white">Frequently Asked Questions</h1>
          </div>
          <hr className="border-white/10" />
          <div className="space-y-3">
            {FAQ_DATASET.map((item, index) => (
              <div key={index} className="border border-white/5 bg-[#070A13]/40 rounded-xl overflow-hidden">
                <button onClick={() => toggleTab(index)} className="w-full text-left p-4 flex justify-between items-center hover:bg-white/5 transition-colors focus:outline-none">
                  <span className="text-xs font-bold font-mono tracking-wide text-white">{item.q}</span>
                  <span className="text-xs font-mono">▼</span>
                </button>
                <div className={`font-mono text-xs text-gray-400 leading-relaxed overflow-hidden transition-all duration-200 ${activeTab === index ? 'p-4 pt-0 border-t border-white/5 max-h-40' : 'max-h-0'}`}>
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* REBUILT RENDER VIEW 2: HIGH-END SERVICE REGISTRATION FORM (From image_eab22b.png series) */}
      {slug === 'complaint' && (
        <div className="space-y-6">
          
          {/* Top Urgent Alert Broadcast Banner from image_eab22b.png */}
          <div className="w-full bg-blue-950/40 backdrop-blur-md border border-blue-500/20 rounded-xl p-4 flex items-start gap-3 text-xs font-mono text-gray-300 leading-relaxed">
            <span className="text-cyan-400 font-bold text-sm">ℹ</span>
            <div>
              For urgent issues, call our helpline at <span className="text-cyan-400 font-bold select-all">+91 8295433063</span> (Mon–Sat, 9 AM – 6 PM). For online complaints, we aim to respond within <span className="text-white font-bold">24 hours</span>.
            </div>
          </div>

          <form onSubmit={handleFormSubmit} className="bg-[#0d1527]/50 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-2xl space-y-8 shadow-2xl">
            
            {/* STEP 1 BLOCK: INDIVIDUAL CONSUMER DETAILS */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center font-mono text-[10px] font-bold">1</div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">Your Details</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1">
                  <label className="text-[10px] font-mono text-gray-400 uppercase">Full Name *</label>
                  <input type="text" required placeholder="Rahul Sharma" className="bg-white/5 border border-white/10 px-4 py-2.5 rounded-lg text-xs font-mono text-white focus:border-cyan-400 outline-none transition" onChange={e => setComplaintForm({...complaintForm, fullName: e.target.value})} />
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="text-[10px] font-mono text-gray-400 uppercase">Email Address *</label>
                  <input type="email" required placeholder="rahul@example.com" className="bg-white/5 border border-white/10 px-4 py-2.5 rounded-lg text-xs font-mono text-white focus:border-cyan-400 outline-none transition" onChange={e => setComplaintForm({...complaintForm, emailAddress: e.target.value})} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1">
                  <label className="text-[10px] font-mono text-gray-400 uppercase">Phone Number *</label>
                  <input type="text" required placeholder="+91 98765 43210" className="bg-white/5 border border-white/10 px-4 py-2.5 rounded-lg text-xs font-mono text-white focus:border-cyan-400 outline-none transition" onChange={e => setComplaintForm({...complaintForm, phoneNumber: e.target.value})} />
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="text-[10px] font-mono text-gray-400 uppercase">City *</label>
                  <input type="text" required placeholder="New Delhi" className="bg-white/5 border border-white/10 px-4 py-2.5 rounded-lg text-xs font-mono text-white focus:border-cyan-400 outline-none transition" onChange={e => setComplaintForm({...complaintForm, city: e.target.value})} />
                </div>
              </div>
            </div>

            <hr className="border-white/5" />

            {/* STEP 2 BLOCK: HARDWARE SPECIFICATION PROFILE */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center font-mono text-[10px] font-bold">2</div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">Product Details</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1">
                  <label className="text-[10px] font-mono text-gray-400 uppercase">Product Category *</label>
                  <select required className="bg-[#0d1527] border border-white/10 px-4 py-2.5 rounded-lg text-xs font-mono text-white focus:border-cyan-400 outline-none cursor-pointer" onChange={e => setComplaintForm({...complaintForm, productCategory: e.target.value})}>
                    <option value="">Select product...</option>
                    <option value="coolers">Air Coolers</option>
                    <option value="televisions">LED Televisions</option>
                    <option value="washing">Washing Machines</option>
                    <option value="grinders">Mixer Grinders</option>
                    <option value="geysers">Water Geysers</option>
                    <option value="fans">Ceiling Fans</option>
                  </select>
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="text-[10px] font-mono text-gray-400 uppercase">Purchase Date <span className="text-gray-500">(optional)</span></label>
                  <input type="date" className="bg-white/5 border border-white/10 px-4 py-2.5 rounded-lg text-xs font-mono text-white focus:border-cyan-400 outline-none transition" onChange={e => setComplaintForm({...complaintForm, purchaseDate: e.target.value})} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1">
                  <label className="text-[10px] font-mono text-gray-400 uppercase">Serial Number <span className="text-gray-500">(optional — on product sticker)</span></label>
                  <input type="text" placeholder="SL-XXXXXXXX" className="bg-white/5 border border-white/10 px-4 py-2.5 rounded-lg text-xs font-mono text-white focus:border-cyan-400 outline-none transition" onChange={e => setComplaintForm({...complaintForm, serialNumber: e.target.value})} />
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="text-[10px] font-mono text-gray-400 uppercase">Dealer / Store Name <span className="text-gray-500">(optional)</span></label>
                  <input type="text" placeholder="Where you purchased from" className="bg-white/5 border border-white/10 px-4 py-2.5 rounded-lg text-xs font-mono text-white focus:border-cyan-400 outline-none transition" onChange={e => setComplaintForm({...complaintForm, dealerName: e.target.value})} />
                </div>
              </div>
            </div>

            <hr className="border-white/5" />

            {/* STEP 3 BLOCK: INCIDENT DESCRIPTION & TRANSMISSION */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center font-mono text-[10px] font-bold">3</div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">Complaint Details</h3>
              </div>
              <div className="flex flex-col space-y-1">
                <label className="text-[10px] font-mono text-gray-400 uppercase">Complaint Type *</label>
                <select required className="bg-[#0d1527] border border-white/10 px-4 py-2.5 rounded-lg text-xs font-mono text-white focus:border-cyan-400 outline-none cursor-pointer" onChange={e => setComplaintForm({...complaintForm, complaintType: e.target.value})}>
                  <option value="">Select type...</option>
                  <option value="technical">Technical Malfunction</option>
                  <option value="damage">Physical Component Damage</option>
                  <option value="installation">Installation Delay</option>
                  <option value="other">Other Operational Inquiries</option>
                </select>
              </div>
              <div className="flex flex-col space-y-1">
                <label className="text-[10px] font-mono text-gray-400 uppercase">Describe the Issue * <span className="text-gray-500">(min. 10 characters)</span></label>
                <textarea rows="4" required placeholder="Please describe the problem in detail — when it started, what happens, any error messages..." className="bg-white/5 border border-white/10 p-4 rounded-lg text-xs font-mono text-white focus:border-cyan-400 outline-none resize-none transition" onChange={e => setComplaintForm({...complaintForm, description: e.target.value})} />
              </div>
              <div className="flex flex-col space-y-1">
                <label className="text-[10px] font-mono text-gray-400 uppercase">Preferred Contact Method *</label>
                <select required className="bg-[#0d1527] border border-white/10 px-4 py-2.5 rounded-lg text-xs font-mono text-white focus:border-cyan-400 outline-none cursor-pointer" onChange={e => setComplaintForm({...complaintForm, preferredContact: e.target.value})}>
                  <option value="">Select...</option>
                  <option value="phone">Voice Call Support</option>
                  <option value="email">Email Logs Correspondence</option>
                </select>
              </div>
            </div>

            {/* Fraud Notice Safety Caution Box from image_eab284.png */}
            <div className="w-full bg-orange-950/20 border border-orange-500/20 rounded-xl p-4 flex items-start gap-3 text-[11px] font-mono text-orange-400/90 leading-relaxed">
              <span className="text-orange-400 font-bold">⚠️</span>
              <div>
                Please do not share financial information (bank/card details) in the form above. Softline Industries will never ask for payment to resolve a complaint.
              </div>
            </div>

            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 font-bold text-xs uppercase tracking-widest py-4 rounded-xl transition shadow-xl shadow-blue-600/20">
              Submit Complaint
            </button>
          </form>
        </div>
      )}

      {/* RENDER VIEW 3: E-Waste Environmental Protection Policy */}
      {slug === 'e-waste' && (
        <div className="bg-[#0d1527]/40 border border-white/10 p-8 rounded-2xl space-y-6">
          <h1 className="text-3xl font-black uppercase tracking-tight text-white">E-Waste Recycling Matrix</h1>
          <hr className="border-white/10" />
          <div className="font-mono text-xs text-gray-400 space-y-4 leading-relaxed">
            <p>Softline Industries is completely committed to environmental sustainability and compliant electronic waste management.</p>
          </div>
        </div>
      )}

      {/* RENDER VIEW 4: Document Catalog Downloads Repository */}
      {slug === 'downloads' && (
        <div className="bg-[#0d1527]/40 border border-white/10 p-8 rounded-2xl space-y-6">
          <h1 className="text-3xl font-black uppercase tracking-tight text-white">Resource Downloads</h1>
          <hr className="border-white/10" />
          <div className="space-y-3 font-mono text-xs">
            {['Tejas-100-Cooler-Manual.pdf', 'HydroCare-Pro-Washing-Installation-Spec.pdf'].map((file, idx) => (
              <div key={idx} className="flex justify-between items-center p-3 bg-white/5 border border-white/5 rounded-lg">
                <span className="text-gray-300">{file}</span>
                <button onClick={() => alert('Downloading resource file asset...')} className="text-cyan-400 hover:underline font-bold">Download ↓</button>
              </div>
            ))}
          </div>
        </div>
      )}

    </main>
  );
}