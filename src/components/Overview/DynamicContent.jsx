import React, { useState } from "react";

export default function DynamicContent({ currentView }) {
    const [arr] = useState([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ]);
  return (
    <section className="mt-10 mb-20">
      {currentView === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Grid Placeholder Cards */}
          {arr.map((i) => (
            <div
              key={i}
              className="h-44 border border-white/10 rounded-xl bg-white/[0.02] p-5 hover:border-white/20 transition-all cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-full bg-accentA/20 mb-4 border border-accentA/30"></div>
              <h3 className="font-semibold text-[1rem]">Dev Team {i}</h3>
              <p className="text-zinc-500 text-xs mt-1">4 Members • Active</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {/* List Placeholder Rows */}
          {arr.map((i) => (
            <div
              key={i}
              className="h-[65px] border border-white/10 rounded-lg bg-white/[0.02] px-5 flex items-center justify-between hover:bg-white/[0.04] transition-all cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded bg-zinc-800 border border-white/10"></div>
                <div>
                  <h3 className="text-sm font-medium">Design System {i}</h3>
                  <p className="text-[10px] text-zinc-500 italic">
                    Updated 2h ago
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-xs text-zinc-400">Public</span>
                <button className="text-zinc-500 hover:text-white transition-colors">
                  •••
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
