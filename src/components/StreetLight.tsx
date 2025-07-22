'use client';

import { useState } from "react";

export default function StreetLight() {
    const [on, setOn] = useState(false);
    
  return (
    <div className="relative h-[700px] flex items-end justify-center overflow-hidden">
        {/* Streetlamp (stylized) */}
        <div className="relative rotate-180 z-10 flex flex-col items-center">
          {/* Pole */}
          <div className="w-2 h-[280px] bg-[#1e2635]" />

          {/* Top cap */}
          <div className="w-12 h-4 bg-[#233451] rounded-t-md shadow-sm" />

          {/* Glass head */}
          <div className="relative w-12 h-16 bg-gradient-to-b from-[#f5f3b0] to-[#dac470] rounded-b-full border-x-4 border-[#233451] border-b-8 shadow-[0_0_40px_10px_rgba(218,196,112,0.3)]">
            {/* Internal glow bulb */}
            {on && (
              <div className="absolute left-1/2 top-[30%] w-4 h-4 -translate-x-1/2 rounded-full bg-yellow-300 shadow-[0_0_20px_5px_rgba(255,230,0,0.5)]" />
            )}
          </div>

          {/* Bottom ring/cap */}
          <div className="w-10 h-2 bg-[#1e2635] rounded-b-md -mt-1" />
        </div>

        {/* Starry overlay */}
        <div className="absolute inset-0 bg-[repeating-conic-gradient(#ffffff99_0%,_#ffffff00_0.000075%,_#ffffff00_0.0005%,_#ffffff00_0.12345%)] filter blur-[0.5px] brightness-150 z-0" />

        {/* Light beam */}
        {on && (
          <div className="absolute bottom-0 h-[65vh] w-[650px] bg-gradient-to-b from-[#dac470cc] via-[#dac47033] to-transparent opacity-90 rounded-t-full blur-2xl z-0 clip-path-[polygon(43%_0%,_53%_0.35%,_100%_100%,_0_100%)]" />
        )}

        {/* Ground circle glow */}
        {on && (
          <div className="absolute bottom-0 w-[650px] h-[80px] bg-[#dac5706e] rounded-full z-0 blur-2xl" />
        )}

        {/* Toggle */}
        <button
          className="absolute bottom-10 px-6 py-2 bg-white text-black rounded shadow hover:bg-gray-200 z-10"
          onClick={() => setOn(!on)}
        >
          {on ? 'Turn Off' : 'Turn On'}
        </button>
      </div>
  )
}