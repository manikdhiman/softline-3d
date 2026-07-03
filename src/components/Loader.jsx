'use client';

import { useProgress } from '@react-three/drei';

export default function Loader() {
  const { active, progress } = useProgress();

  // If there are no 3D files actively loading, hide the overlay completely
  if (!active) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070A13]">
      <div className="relative flex flex-col items-center max-w-xs w-full px-6">
        {/* Animated pulsing core indicator */}
        <div className="w-12 h-12 rounded-full border-2 border-cyan-400/20 border-t-cyan-400 animate-spin mb-6" />
        
        {/* Softline Branding Context */}
        <h2 className="text-sm font-black tracking-[0.3em] text-white uppercase mb-1">
          SOFTLINE
        </h2>
        <p className="text-[10px] font-mono tracking-widest text-gray-500 uppercase mb-4">
          Loading 3D Asset Environment
        </p>

        {/* Outer Progress Bar Frame */}
        <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
          {/* Dynamic filled line controlled by WebGL progress */}
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage text display */}
        <span className="text-[10px] font-mono text-cyan-400 mt-2">
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
}