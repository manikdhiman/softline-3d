'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen text-white flex flex-col justify-between bg-[#070A13]">
      
      {/* SECTION 1: HERO CONTAINER DISPLAY */}
      <section className="w-full max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-16 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div>
          <span className="text-xs font-mono tracking-[0.3em] text-cyan-400 uppercase block mb-3">
            Welcome to Softline Industries
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-6 uppercase">
            PREMIUM HOUSEHOLD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              APPLIANCES.
            </span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg mb-8 max-w-lg leading-relaxed">
            Engineering high-performance air coolers, televisions, washing machines, and home electronics with absolute integrity. Discover durability built to last.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/products/coolers" className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl text-center transition shadow-lg shadow-blue-600/20">
              Explore Products
            </Link>
            <Link href="/contact" className="border border-white/10 hover:border-white/20 bg-white/5 text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl text-center transition">
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-blue-600/20 to-cyan-400/10 border border-cyan-500/20 flex items-center justify-center relative animate-pulse">
            <div className="w-56 h-56 md:w-60 md:h-60 rounded-full bg-gradient-to-br from-[#0d1527] to-[#070A13] border border-white/5 flex flex-col items-center justify-center p-6 text-center shadow-2xl">
              <span className="text-2xl font-black text-cyan-400">17+</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-400 mt-1 font-mono">Years of Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: LIVE CORPORATE STATS PANEL (From image_e9b2a4.png) */}
      <section className="w-full bg-[#0d1527]/40 border-t border-b border-white/10 py-12 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <span className="text-2xl text-blue-500 mb-2">🏅</span>
            <div className="text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">17+</div>
            <div className="text-xs text-gray-400 font-mono mt-1 uppercase tracking-wider">Years of Excellence</div>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl text-blue-500 mb-2">👥</span>
            <div className="text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">1,000+</div>
            <div className="text-xs text-gray-400 font-mono mt-1 uppercase tracking-wider">Dealers Nationwide</div>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl text-blue-500 mb-2">🏭</span>
            <div className="text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">5M+</div>
            <div className="text-xs text-gray-400 font-mono mt-1 uppercase tracking-wider">Products Manufactured</div>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl text-blue-500 mb-2">🛡️</span>
            <div className="text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">500+</div>
            <div className="text-xs text-gray-400 font-mono mt-1 uppercase tracking-wider">Service Centers</div>
          </div>
        </div>
      </section>

      {/* SECTION 3: TRUST & INNOVATION FEATURES (From image_e9b2cb.jpg) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-mono bg-blue-600/10 border border-blue-500/20 px-3 py-1 rounded text-cyan-400 uppercase tracking-widest">
            Since 2009
          </span>
          <h2 className="text-3xl md:text-4xl font-black mt-4 uppercase tracking-tight leading-tight">
            Built on Trust, <span className="text-orange-500">Driven by Innovation</span>
          </h2>
          <p className="text-gray-400 text-xs md:text-sm font-mono leading-relaxed mt-4">
            Founded in 2009 in Assandh, Haryana, Softline Industries has grown from iron air coolers to a trusted range of home appliances. Quality manufacturing, reliable components, and customer-focused design are at the heart of everything we do.
          </p>
          
          <ul className="mt-6 space-y-3 font-mono text-xs text-gray-300">
            <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Quality Manufacturing at Every Step</li>
            <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Durable & Reliable Components</li>
            <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Customer-Focused Design</li>
            <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Responsible & Eco-Friendly Processes</li>
          </ul>

          <div className="mt-8">
            <Link href="/company/about" className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl transition shadow-lg shadow-orange-500/20">
              Learn More About Us →
            </Link>
          </div>
        </div>

        {/* Mock Factory Operations Visual Block Container */}
        <div className="relative bg-[#0d1527]/60 border border-white/10 p-4 rounded-2xl shadow-2xl">
          <div className="w-full h-64 bg-white/5 rounded-xl flex flex-col items-center justify-center border border-dashed border-white/10 text-center p-6">
            <span className="text-xs font-mono text-gray-400 block uppercase tracking-widest mb-2">[ Manufacturing Facility Viewport ]</span>
            <span className="text-[10px] text-gray-500 font-mono">Visual asset maps framing active high-speed automated appliance production assemblies</span>
          </div>
          <div className="absolute -bottom-4 -left-4 bg-white text-black p-4 rounded-xl shadow-2xl font-mono text-center border border-gray-100">
            <div className="text-lg font-black text-orange-500">17+</div>
            <div className="text-[9px] uppercase tracking-wider text-gray-500">Years Exp</div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TESTIMONIAL FEEDBACK REVIEWS (From image_e9b307.png) */}
      <section className="w-full bg-[#0d1527]/20 border-t border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tight">What Our Customers Say</h2>
            <p className="text-xs font-mono text-gray-400 mt-2">Hear from the people who trust Softline Industries for their home electronics.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#070A13]/60 border border-white/10 p-6 rounded-xl flex flex-col justify-between shadow-xl">
              <div>
                <div className="text-orange-400 text-xs tracking-wider mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-xs text-gray-400 font-mono leading-relaxed">
                  &ldquo;Softline's iron cooler has been running flawlessly for two summers now. The build quality is excellent and the cooling is very effective even in peak heat. Highly recommended.&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center space-x-3 font-mono text-xs">
                <div className="w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center font-bold">RK</div>
                <div>
                  <div className="font-bold text-white">Rajesh Kumar</div>
                  <div className="text-[10px] text-gray-500">Karnal · Air Cooler</div>
                </div>
              </div>
            </div>

            <div className="bg-[#070A13]/60 border border-white/10 p-6 rounded-xl flex flex-col justify-between shadow-xl">
              <div>
                <div className="text-orange-400 text-xs tracking-wider mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-xs text-gray-400 font-mono leading-relaxed">
                  &ldquo;The LED TV picture quality is outstanding — colours are vivid and the display is very clear. Great value for money and the build feels premium.&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center space-x-3 font-mono text-xs">
                <div className="w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center font-bold">PS</div>
                <div>
                  <div className="font-bold text-white">Priya Sharma</div>
                  <div className="text-[10px] text-gray-500">Panipat · LED Television</div>
                </div>
              </div>
            </div>

            <div className="bg-[#070A13]/60 border border-white/10 p-6 rounded-xl flex flex-col justify-between shadow-xl">
              <div>
                <div className="text-orange-400 text-xs tracking-wider mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-xs text-gray-400 font-mono leading-relaxed">
                  &ldquo;As a dealer for Softline products, I can confidently say their coolers and washing machines have the lowest return rate in my store. Customers are always satisfied.&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center space-x-3 font-mono text-xs">
                <div className="w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center font-bold">AP</div>
                <div>
                  <div className="font-bold text-white">Amit Patel</div>
                  <div className="text-[10px] text-gray-500">Ambala · Multiple Products</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: MASTER ENTERPRISE FOOTER SYSTEM (From image_e9b340.png) */}
      <footer className="w-full bg-[#090d16] border-t border-white/10 pt-16 pb-8 text-white font-mono">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Upper Footer Action Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12 border-b border-white/10">
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-black uppercase tracking-tight">Ready to Experience Quality?</h2>
              <p className="text-xs text-gray-400 mt-1">Connect with our team to discuss your requirements or find a dealer near you.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition">
                  Contact Us →
                </Link>
                <Link href="/contact" className="border border-white/10 hover:border-white/20 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition bg-white/5">
                  Find a Dealer
                </Link>
              </div>
            </div>

            {/* Newsletter Subscription Box */}
            <div className="lg:col-span-5 bg-[#070A13] border border-white/10 p-5 rounded-xl">
              <h4 className="text-xs font-bold uppercase tracking-wide mb-1 text-white">Stay Updated</h4>
              <p className="text-[11px] text-gray-500 mb-3">Subscribe to our newsletter for product launches and news.</p>
              <form onSubmit={(e) => { e.preventDefault(); alert('Subscription catalog log loaded.'); }} className="flex gap-2">
                <input type="email" required placeholder="Enter your email" className="flex-1 bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-xs text-white outline-none focus:border-orange-500" />
                <button type="submit" className="bg-orange-500 hover:bg-orange-600 p-2.5 rounded-lg text-white transition flex items-center justify-center">
                  ➔
                </button>
              </form>
            </div>
          </div>

          {/* Link Catalog Layout Blocks */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 text-xs">
            <div className="space-y-4">
              <h4 className="font-bold text-white uppercase tracking-wider">Softline Industries</h4>
              <p className="text-gray-500 text-[11px] leading-relaxed">Leading manufacturer of consumer electronics and home appliances with state-of-the-art manufacturing facilities.</p>
              <div className="text-[11px] text-gray-400 space-y-2">
                <div>📍 Near G S Farm House, Salwan Road, Assandh, Haryana-132039</div>
                <div>📞 +91 8295433063</div>
                <div className="truncate">✉️ softlineindustriesknl@gmail.com</div>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <h4 className="font-bold text-white uppercase tracking-wider mb-2">Products</h4>
              <Link href="/products/coolers" className="text-gray-400 hover:text-white transition">Air Coolers</Link>
              <Link href="/products/televisions" className="text-gray-400 hover:text-white transition">LED Televisions</Link>
              <Link href="/products/mixer-grinders" className="text-gray-400 hover:text-white transition">Juicer Mixer Grinder</Link>
              <Link href="/products/washing-machines" className="text-gray-400 hover:text-white transition">Washing Machines</Link>
              <Link href="/products/geysers" className="text-gray-400 hover:text-white transition">Water Geysers</Link>
              <Link href="/products/fans" className="text-gray-400 hover:text-white transition">Ceiling Fans</Link>
            </div>

            <div className="flex flex-col space-y-2">
              <h4 className="font-bold text-white uppercase tracking-wider mb-2">Company</h4>
              <Link href="/company/about" className="text-gray-400 hover:text-white transition">About Us</Link>
              <Link href="/company/journey" className="text-gray-400 hover:text-white transition">Our Journey</Link>
            </div>

            <div className="flex flex-col space-y-2">
              <h4 className="font-bold text-white uppercase tracking-wider mb-2">Support</h4>
              <Link href="/support/faqs" className="text-gray-400 hover:text-white transition">FAQs</Link>
              <Link href="/support/complaint" className="text-gray-400 hover:text-white transition">File a Complaint</Link>
              <Link href="/support/downloads" className="text-gray-400 hover:text-white transition">Downloads</Link>
              <Link href="/support/e-waste" className="text-gray-400 hover:text-white transition">E-Waste Policy</Link>
            </div>
          </div>

          <div className="text-center text-[10px] text-gray-600 border-t border-white/5 pt-6">
            © 2026 Softline Industries. All rights reserved.
          </div>

        </div>
      </footer>

    </main>
  );
}