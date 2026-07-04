'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

// 1. Move your main showcase rendering logic into a separate internal child component
function ShowcaseContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category') || 'all';

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold font-mono">
        Active Catalogue Stream: [ {category.toUpperCase()} ]
      </h1>
      {/* ... keeping all your original filter mapping / 3D grids logic here ... */}
    </div>
  );
}

// 2. Wrap the core content in a Suspense component inside the default main export
export default function ShowcasePage() {
  return (
    <main className="min-h-screen text-white bg-[#070A13] pt-28 px-6 max-w-7xl mx-auto">
      
      {/* Wrapping in Suspense bails out the static generator safely */}
      <Suspense fallback={
        <div className="w-full h-40 flex items-center justify-center font-mono text-xs text-gray-500 animate-pulse">
          LOADING DIGITAL CATALOGUE SYSTEM GRID...
        </div>
      }>
        <ShowcaseContent />
      </Suspense>

    </main>
  );
}