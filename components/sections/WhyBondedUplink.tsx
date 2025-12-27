"use client";

import React from "react";
import { Activity, ArrowRight } from "lucide-react";
import { cn } from "@/components/ui/cn";

type SectionProps = {
  sectionClassName?: string;
};

// --- DATA DEFINITIONS ---

type CompareRow = {
  left: React.ReactNode;
  right: React.ReactNode;
};

const ROWS: CompareRow[] = [
  {
    left: (
      <span className="text-slate-500 font-medium text-[11px] sm:text-sm group-hover:text-slate-300 transition-colors">
        1 (Others idle)
      </span>
    ),
    right: (
      <span className="relative z-10 text-white font-bold text-[11px] sm:text-sm">
        All (Aggregated)
      </span>
    ),
  },
  {
    left: (
      <span className="text-slate-500 font-medium text-[11px] sm:text-sm group-hover:text-slate-300 transition-colors">
        Drops (IP Change)
      </span>
    ),
    right: (
      <span className="relative z-10 text-emerald-400 font-bold text-[11px] sm:text-sm group-hover:text-emerald-300 transition-all">
        Preserved
      </span>
    ),
  },
  {
    left: (
      <span className="text-slate-500 text-[11px] sm:text-sm group-hover:text-slate-300 transition-colors">
        Resets / Buffering
      </span>
    ),
    right: (
      <span className="relative z-10 text-white font-bold text-[11px] sm:text-sm">
        Stable
      </span>
    ),
  },
  {
    left: (
      <span className="text-slate-500 text-[11px] sm:text-sm group-hover:text-slate-300 transition-colors">
        Seconds{" "}
        <span className="text-[9px] sm:text-[10px] opacity-60 block sm:inline">
          (Impact)
        </span>
      </span>
    ),
    right: (
      <span className="relative z-10 text-white font-bold text-[11px] sm:text-sm">
        Milliseconds{" "}
        <span className="text-[9px] sm:text-[10px] font-normal text-emerald-400 block sm:inline">
          (Seamless)
        </span>
      </span>
    ),
  },
  {
    left: (
      <span className="font-black tracking-widest text-red-500/80 text-xs sm:text-base group-hover:text-red-500 transition-colors">
        RISKY
      </span>
    ),
    right: (
      <span className="relative z-10 font-black tracking-widest text-emerald-400 text-xs sm:text-base group-hover:text-emerald-300 transition-colors">
        SAFE
      </span>
    ),
  },
];

// --- COMPONENT FOR A SINGLE ROW ---

function CompareDataRow({
  left,
  right,
  isLast,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
  isLast?: boolean;
}) {
  return (
    <div
      className={cn(
        "group relative grid grid-cols-2",
        // Separation lines (except last)
        !isLast && "border-b border-white/5",
        
        // Rounding logic: Only apply bottom rounding to the last item if it's NOT hovered
        // (We actually apply it always, but the hover scale effectively overrides it visually)
        isLast && "sm:rounded-b-3xl",

        // Sizing & Base
        "px-1 sm:px-2 py-1",
        "bg-slate-950",

        // --- HOVER EFFECT ---
        "transition-all duration-200 ease-out",
        "hover:scale-[1.02] hover:bg-[#0F1623] hover:z-20 hover:shadow-2xl hover:rounded-xl hover:border-transparent",
        "active:scale-[1.02] active:bg-[#0F1623]",
        
        // Add a subtle border highlight on hover
        "hover:ring-1 hover:ring-white/10"
      )}
    >
      {/* Divider Line (Visual only, fades out on hover) */}
      <div className="absolute inset-y-0 left-1/2 w-px bg-white/5 group-hover:opacity-0 transition-opacity" />

      {/* Left Cell */}
      <div className="relative z-10 py-4 sm:py-6 px-2 sm:px-4 text-center flex items-center justify-center">
        {left}
      </div>

      {/* Right Cell */}
      <div className="relative z-10 py-4 sm:py-6 px-2 sm:px-4 text-center flex items-center justify-center">
         {/* Subtle Tint behind right side text */}
        <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/[0.03] transition-colors rounded-r-lg" />
        {right}
      </div>
    </div>
  );
}

// --- MAIN SECTION ---

export default function BondingVsFailover({ sectionClassName }: SectionProps) {
  return (
    <section
      id="bonding"
      className={cn("mx-auto w-full max-w-6xl relative z-20", sectionClassName)}
    >
      {/* MAIN CONTAINER 
        We use `overflow-visible` so the hover cards can pop out of the container bounds.
      */}
      <div className="bg-slate-950 sm:rounded-3xl sm:border sm:border-white/10 sm:shadow-2xl relative">
        
        {/* 1) HEADER (Rounded Top) */}
        <div className="border-b border-white/5 bg-slate-900/50 p-6 sm:p-8 text-center backdrop-blur-sm sm:rounded-t-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 mb-4">
            <Activity className="h-3 w-3" />
            The Core Technology
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
            Why Bonding Beats Failover
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-slate-400 leading-relaxed px-4">
            Standard routers switch connections <i>after</i> they break
            (failover). MR.NET combines them <i>before</i> they break (bonding).
          </p>
        </div>

        {/* 2) VISUAL DIAGRAMS (Top Half) */}
        <div className="grid grid-cols-2 divide-x divide-white/5 border-b border-white/5">
          
          {/* LEFT: Failover (Interactive Tubes) */}
          <div className="flex flex-col">
            <div className="border-b border-white/5 bg-slate-900/40 py-4 sm:py-6 text-center">
              <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.1em] sm:tracking-[0.2em] text-slate-500">
                Cheap Failover
              </h3>
            </div>
            
            <div className="flex flex-col items-center justify-center p-4 sm:p-10 h-full">
              <div className="relative flex items-center gap-2 sm:gap-4 opacity-80 mb-4 sm:mb-8">
                {/* Inputs */}
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  {/* Green Tube */}
                  <div className="group/tube relative cursor-pointer transition-all hover:scale-105 hover:brightness-125">
                     <svg className="h-2.5 sm:h-3 w-10 sm:w-16 transition-all drop-shadow-none group-hover/tube:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" viewBox="0 0 64 12" fill="none">
                      <path d="M0 6H54L48 1M54 6L48 11" stroke="url(#f-in-1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  {/* Blue Tube */}
                  <div className="group/tube relative cursor-pointer transition-all hover:scale-105 hover:brightness-125">
                    <svg className="h-2.5 sm:h-3 w-10 sm:w-16 transition-all drop-shadow-none group-hover/tube:drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" viewBox="0 0 64 12" fill="none">
                      <path d="M0 6H54L48 1M54 6L48 11" stroke="url(#f-in-2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  {/* Purple Tube */}
                  <div className="group/tube relative cursor-pointer transition-all hover:scale-105 hover:brightness-125">
                    <svg className="h-2.5 sm:h-3 w-10 sm:w-16 transition-all drop-shadow-none group-hover/tube:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" viewBox="0 0 64 12" fill="none">
                      <path d="M0 6H54L48 1M54 6L48 11" stroke="url(#f-in-3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {/* Router */}
                <div className="relative w-14 h-10 sm:w-20 sm:h-16 flex items-center justify-center grayscale opacity-90">
                  <img src="/image/GenericRouter.png" alt="Failover Router" className="object-contain w-full h-full" />
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-slate-800 rounded-full p-1 sm:p-1.5 border border-slate-700">
                    <ArrowRight className="h-2 w-2 sm:h-3 sm:w-3 text-slate-500" />
                  </div>
                </div>

                {/* Output */}
                <svg className="h-2.5 sm:h-3 w-10 sm:w-16" viewBox="0 0 64 12" fill="none">
                  <path d="M0 6H54L48 1M54 6L48 11" stroke="url(#f-out-gap)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                {/* DEFS for Gradients */}
                <svg className="absolute w-0 h-0">
                  <defs>
                      <linearGradient id="f-in-1" x1="0" y1="6" x2="64" y2="6" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#10b981" />
                        <stop offset="0.6" stopColor="#10b981" />
                        <stop offset="0.6" stopColor="transparent" />
                        <stop offset="0.7" stopColor="transparent" />
                        <stop offset="0.7" stopColor="#10b981" />
                        <stop offset="1" stopColor="#10b981" />
                      </linearGradient>
                      <linearGradient id="f-in-2" x1="0" y1="6" x2="64" y2="6" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#06b6d4" />
                        <stop offset="0.3" stopColor="#06b6d4" />
                        <stop offset="0.3" stopColor="transparent" />
                        <stop offset="0.4" stopColor="transparent" />
                        <stop offset="0.4" stopColor="#06b6d4" />
                        <stop offset="1" stopColor="#06b6d4" />
                      </linearGradient>
                      <linearGradient id="f-in-3" x1="0" y1="6" x2="64" y2="6" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#a855f7" />
                        <stop offset="0.45" stopColor="#a855f7" />
                        <stop offset="0.45" stopColor="transparent" />
                        <stop offset="0.5" stopColor="transparent" />
                        <stop offset="0.5" stopColor="#a855f7" />
                        <stop offset="0.85" stopColor="#a855f7" />
                        <stop offset="0.85" stopColor="transparent" />
                        <stop offset="0.9" stopColor="transparent" />
                        <stop offset="0.9" stopColor="#a855f7" />
                      </linearGradient>
                      <linearGradient id="f-out-gap" x1="0" y1="6" x2="64" y2="6" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#a855f7" />
                        <stop offset="0.35" stopColor="#a855f7" />
                        <stop offset="0.35" stopColor="transparent" />
                        <stop offset="0.65" stopColor="transparent" />
                        <stop offset="0.65" stopColor="#a855f7" />
                        <stop offset="1" stopColor="#a855f7" />
                      </linearGradient>
                  </defs>
                </svg>
              </div>
              <p className="max-w-[140px] sm:max-w-[200px] text-center text-[10px] sm:text-xs leading-relaxed text-slate-500">
                Only 1 link active. The large gaps represent downtime.
              </p>
            </div>
          </div>

          {/* RIGHT: Bonding (Interactive Tubes) */}
          <div className="flex flex-col relative overflow-hidden sm:rounded-tr-none">
            <div className="absolute inset-0 bg-red-500/5 pointer-events-none" />
            
            <div className="border-b border-white/5 bg-slate-900/40 py-4 sm:py-6 text-center relative z-10">
              <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.1em] sm:tracking-[0.2em] text-red-400">
                MR.NET Bonding
              </h3>
            </div>

            <div className="flex flex-col items-center justify-center p-4 sm:p-10 h-full relative z-10">
              <div className="relative flex items-center gap-2 sm:gap-4 mb-4 sm:mb-8">
                {/* Inputs */}
                <div className="flex flex-col gap-1.5 sm:gap-2">
                   <div className="group/tube relative cursor-pointer transition-all hover:scale-105 hover:brightness-125">
                    <svg className="h-2.5 sm:h-3 w-10 sm:w-16 transition-all drop-shadow-none group-hover/tube:drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]" viewBox="0 0 64 12" fill="none">
                      <path d="M0 6H54L48 1M54 6L48 11" stroke="url(#b-in-1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="group/tube relative cursor-pointer transition-all hover:scale-105 hover:brightness-125">
                    <svg className="h-2.5 sm:h-3 w-10 sm:w-16 transition-all drop-shadow-none group-hover/tube:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]" viewBox="0 0 64 12" fill="none">
                      <path d="M0 6H54L48 1M54 6L48 11" stroke="url(#b-in-2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="group/tube relative cursor-pointer transition-all hover:scale-105 hover:brightness-125">
                    <svg className="h-2.5 sm:h-3 w-10 sm:w-16 transition-all drop-shadow-none group-hover/tube:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]" viewBox="0 0 64 12" fill="none">
                      <path d="M0 6H54L48 1M54 6L48 11" stroke="url(#b-in-3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {/* Router */}
                <div className="relative w-16 h-12 sm:w-24 sm:h-20 flex items-center justify-center">
                  <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full" />
                  <img src="/image/MRNET-router-vector.png" alt="Bonding Router" className="relative z-10 object-contain w-full h-full drop-shadow-2xl" />
                  <div className="absolute -top-2 sm:-top-3 right-0 z-20 flex items-center gap-1 bg-slate-900 border border-emerald-500/30 px-1 sm:px-1.5 py-0.5 rounded-full shadow-lg">
                    <Activity className="h-2 w-2 sm:h-2.5 sm:w-2.5 text-emerald-400" />
                    <span className="text-[6px] sm:text-[8px] font-bold text-emerald-400 uppercase tracking-wider">Bonding</span>
                  </div>
                </div>

                {/* Output */}
                <svg className="h-6 w-10 sm:h-8 sm:w-16 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]" viewBox="0 0 64 24" fill="none">
                  <path d="M0 12H54L48 4M54 12L48 20" stroke="url(#bonding-output-grad)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                 {/* DEFS for Bonding Gradients */}
                <svg className="absolute w-0 h-0">
                  <defs>
                    <linearGradient id="b-in-1" x1="0" y1="6" x2="64" y2="6" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#10b981" />
                      <stop offset="1" stopColor="#10b981" />
                    </linearGradient>
                    <linearGradient id="b-in-2" x1="0" y1="6" x2="64" y2="6" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#06b6d4" />
                      <stop offset="1" stopColor="#06b6d4" />
                    </linearGradient>
                     <linearGradient id="b-in-3" x1="0" y1="6" x2="64" y2="6" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#a855f7" />
                      <stop offset="1" stopColor="#a855f7" />
                    </linearGradient>
                    <linearGradient id="bonding-output-grad" x1="0" y1="0" x2="0" y2="24" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#10b981" />
                      <stop offset="0.5" stopColor="#06b6d4" />
                      <stop offset="1" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>

              </div>
              <p className="max-w-[160px] sm:max-w-[240px] text-center text-[10px] sm:text-xs leading-relaxed text-slate-300">
                All links active. Gaps filled instantly.
              </p>
            </div>
          </div>
        </div>

        {/* 3) DATA ROWS (PRO "Card Lift") */}
        <div className="relative z-[9999] flex flex-col bg-slate-950 sm:rounded-b-3xl overflow-visible">
          {ROWS.map((row, idx) => (
            <CompareDataRow
              key={idx}
              left={row.left}
              right={row.right}
              isLast={idx === ROWS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}