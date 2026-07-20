import Image from 'next/image';
import Link from 'next/link';

export default function TelevisionsPage() {
  const tvs = [
    { name: "32\" HD Ready Smart LED TV", display: "1366 x 768", audio: "20W Stereo Sound", smart: "Android OS Built-In", badge: "Popular Choice" },
    { name: "43\" Full HD Smart LED TV", display: "1920 x 1080", audio: "24W Surround Sound", smart: "Screen Mirroring + Apps", badge: "Best Value" },
    { name: "55\" Ultra HD 4K Smart TV", display: "3840 x 2160", audio: "30W Dolby Audio", smart: "Voice Remote & HDR10+", badge: "Premium Series" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="bg-white rounded-2xl border border-sky-100 p-8 sm:p-12 mb-12 shadow-sm">
          <span className="text-sky-600 text-xs font-semibold uppercase tracking-wider">Product Catalog</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">Smart LED Televisions</h1>
          <p className="text-slate-600 mt-2 text-sm sm:text-base max-w-2xl">
            Vibrant color reproduction, energy-efficient LED panels, and seamless streaming capabilities.
          </p>
        </div>

        {/* TV Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tvs.map((tv, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-sky-100 hover:border-sky-300 shadow-sm overflow-hidden flex flex-col transition duration-200">
              <div className="relative h-56 bg-slate-100">
                <Image src="/images/product-led-tv.jpg" alt={tv.name} fill className="object-cover" />
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-sky-700 text-xs font-semibold px-2.5 py-1 rounded-md border border-sky-100">
                  {tv.badge}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{tv.name}</h3>
                
                <div className="space-y-2 text-xs text-slate-600 mb-6 bg-slate-50 p-3 rounded-xl border border-sky-100">
                  <div className="flex justify-between"><span className="text-slate-400">Resolution:</span> <span className="font-semibold text-slate-800">{tv.display}</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Audio Output:</span> <span className="font-semibold text-slate-800">{tv.audio}</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Features:</span> <span className="font-semibold text-slate-800">{tv.smart}</span></div>
                </div>

                <Link href="/support/complaint" className="mt-auto w-full text-center bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm py-2.5 rounded-lg transition">
                  Inquire Dealership
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}