export default function ComplaintPage() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <span className="text-sky-600 text-xs font-semibold uppercase tracking-wider">Customer Support</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">File a Service Complaint</h1>
          <p className="text-slate-600 text-sm mt-2">
            Fill out the service ticket below for warranty assistance or repair support.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-sky-100 p-6 sm:p-10 shadow-sm">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Full Name</label>
                <input type="text" placeholder="Enter your full name" className="w-full bg-slate-50 border border-sky-100 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white transition" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Phone Number</label>
                <input type="tel" placeholder="+91 00000 00000" className="w-full bg-slate-50 border border-sky-100 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white transition" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Product Category</label>
                <select className="w-full bg-slate-50 border border-sky-100 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white transition">
                  <option>Air Coolers</option>
                  <option>LED Television</option>
                  <option>Washing Machine</option>
                  <option>Water Geyser</option>
                  <option>Juicer Mixer Grinder</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Pincode / Location</label>
                <input type="text" placeholder="e.g. 132039" className="w-full bg-slate-50 border border-sky-100 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white transition" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Describe Issue</label>
              <textarea rows={4} placeholder="Provide details regarding the product issue..." className="w-full bg-slate-50 border border-sky-100 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white transition" />
            </div>

            <button type="submit" className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm py-3.5 rounded-xl shadow-md shadow-sky-500/10 transition duration-200">
              Submit Service Request
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}