export default function DownloadsPage() {
  const docs = [
    { title: "Product Catalog 2026", size: "4.2 MB", type: "PDF Document" },
    { title: "Air Cooler Installation & Maintenance Guide", size: "1.8 MB", type: "User Manual" },
    { title: "LED TV User Manual & Safety Instructions", size: "2.5 MB", type: "User Manual" },
    { title: "E-Waste Disposal Guidelines", size: "850 KB", type: "Compliance PDF" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="text-sky-600 text-xs font-semibold uppercase tracking-wider">Document Center</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">Downloads & Manuals</h1>
          <p className="text-slate-600 text-sm mt-2">Access official Softline product catalogs and user documentation.</p>
        </div>

        <div className="space-y-4">
          {docs.map((doc, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-sky-100 shadow-sm flex items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-slate-900 text-base">{doc.title}</h3>
                <p className="text-xs text-slate-500 mt-1">{doc.type} • {doc.size}</p>
              </div>
              <button className="bg-sky-50 hover:bg-sky-600 text-sky-700 hover:text-white font-semibold text-xs px-4 py-2.5 rounded-lg border border-sky-200 hover:border-sky-600 transition">
                Download
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}