"use client";

import React from "react";
import { Activity, ArrowRight } from "lucide-react";

export default function BondingVsFailover() {
  return (
    // UPDATED SECTION CLASSES:
    // Added: -mt-12 sm:-mt-24 (Negative margin to pull up)
    // Added: relative z-20 (Stacking order)
    <section 
      id="bonding" 
      className="mx-auto max-w-6xl px-0 sm:px-4 pb-16 sm:pb-24"
    >
      {/* MOBILE: Rounded-none, Border-0, Full Width 
        DESKTOP: Rounded-3xl, Border, Shadow 
      */}
      <div className="overflow-hidden bg-slate-950 sm:rounded-3xl sm:border sm:border-white/10 sm:shadow-2xl">
        
        {/* SECTION INTRO */}
        <div className="border-b border-white/5 bg-slate-900/50 p-6 sm:p-8 text-center backdrop-blur-sm">
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

        {/* UNIFIED COMPARISON GRID */}
        <div className="grid grid-cols-2 divide-x divide-white/5 bg-slate-950">
          
          {/* COLUMN 1: CHEAP FAILOVER */}
          <div className="flex flex-col">
            {/* Header Title */}
            <div className="border-b border-white/5 bg-slate-900/40 py-4 sm:py-6 text-center">
              <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.1em] sm:tracking-[0.2em] text-slate-500">
                Cheap Failover
              </h3>
            </div>

            {/* Visual Diagram (Row 1) */}
            <div className="flex flex-col items-center justify-center p-4 sm:p-10 border-b border-white/5 transition-colors hover:bg-white/[0.01]">
              <div className="relative flex items-center gap-2 sm:gap-4 opacity-80 mb-4 sm:mb-8">
                
                {/* --- INPUTS (Green, Blue, Purple) --- */}
                {/* Mobile: w-10 (shorter), Desktop: w-16 */}
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  {/* Green Arrow */}
                  <svg className="h-2.5 sm:h-3 w-10 sm:w-16" viewBox="0 0 64 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6H54L48 1M54 6L48 11" stroke="url(#failover-input-1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                      <linearGradient id="failover-input-1" x1="0" y1="6" x2="64" y2="6" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#10b981"/>
                        <stop offset="0.6" stopColor="#10b981"/>
                        <stop offset="0.6" stopColor="transparent"/>
                        <stop offset="0.7" stopColor="transparent"/>
                        <stop offset="0.7" stopColor="#10b981"/>
                        <stop offset="1" stopColor="#10b981"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* Blue Arrow */}
                  <svg className="h-2.5 sm:h-3 w-10 sm:w-16" viewBox="0 0 64 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6H54L48 1M54 6L48 11" stroke="url(#failover-input-2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                      <linearGradient id="failover-input-2" x1="0" y1="6" x2="64" y2="6" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#06b6d4"/>
                        <stop offset="0.3" stopColor="#06b6d4"/>
                        <stop offset="0.3" stopColor="transparent"/>
                        <stop offset="0.4" stopColor="transparent"/>
                        <stop offset="0.4" stopColor="#06b6d4"/>
                        <stop offset="1" stopColor="#06b6d4"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* Purple Arrow */}
                  <svg className="h-2.5 sm:h-3 w-10 sm:w-16" viewBox="0 0 64 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6H54L48 1M54 6L48 11" stroke="url(#failover-input-3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                      <linearGradient id="failover-input-3" x1="0" y1="6" x2="64" y2="6" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#a855f7"/>
                        <stop offset="0.45" stopColor="#a855f7"/>
                        <stop offset="0.45" stopColor="transparent"/>
                        <stop offset="0.5" stopColor="transparent"/>
                        <stop offset="0.5" stopColor="#a855f7"/>
                        <stop offset="0.85" stopColor="#a855f7"/>
                        <stop offset="0.85" stopColor="transparent"/>
                        <stop offset="0.9" stopColor="transparent"/>
                        <stop offset="0.9" stopColor="#a855f7"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Router: Grayscale */}
                {/* Mobile: w-14, Desktop: w-20 */}
                <div className="relative w-14 h-10 sm:w-20 sm:h-16 flex items-center justify-center grayscale opacity-90">
                  <img
                    src="/image/GenericRouter.png"
                    alt="Failover Router"
                    className="object-contain w-full h-full"
                  />
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-slate-800 rounded-full p-1 sm:p-1.5 border border-slate-700">
                    <ArrowRight className="h-2 w-2 sm:h-3 sm:w-3 text-slate-500" />
                  </div>
                </div>

                {/* --- OUTPUT (Purple with Big Gap shifted LEFT) --- */}
                {/* Mobile: w-10, Desktop: w-16 */}
                <svg className="h-2.5 sm:h-3 w-10 sm:w-16" viewBox="0 0 64 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6H54L48 1M54 6L48 11" stroke="url(#failover-output-purple-gap)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                      <linearGradient id="failover-output-purple-gap" x1="0" y1="6" x2="64" y2="6" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#a855f7"/>
                        {/* Shaft ends earlier (35%) */}
                        <stop offset="0.35" stopColor="#a855f7"/>
                        {/* Big Gap Starts */}
                        <stop offset="0.35" stopColor="transparent"/>
                        {/* Big Gap Ends earlier (65%) */}
                        <stop offset="0.65" stopColor="transparent"/>
                        {/* Head Starts */}
                        <stop offset="0.65" stopColor="#a855f7"/>
                        <stop offset="1" stopColor="#a855f7"/>
                      </linearGradient>
                    </defs>
                  </svg>
              </div>
              <p className="max-w-[140px] sm:max-w-[200px] text-center text-[10px] sm:text-xs leading-relaxed text-slate-500">
                Only 1 link active. The large gaps represent downtime.
              </p>
            </div>

            {/* Data Rows */}
            <div className="flex-1 flex flex-col divide-y divide-white/5">
               <div className="py-4 sm:py-6 px-2 sm:px-4 text-center text-slate-500 font-medium text-[11px] sm:text-sm">
                 1 (Others idle)
               </div>
               <div className="py-4 sm:py-6 px-2 sm:px-4 text-center text-slate-500 font-medium text-[11px] sm:text-sm">
                 Drops (IP Change)
               </div>
               <div className="py-4 sm:py-6 px-2 sm:px-4 text-center text-slate-500 decoration-red-500/50 text-[11px] sm:text-sm">
                 Resets / Buffering
               </div>
               <div className="py-4 sm:py-6 px-2 sm:px-4 text-center text-slate-500 text-[11px] sm:text-sm">
                 Seconds <span className="text-[9px] sm:text-[10px] opacity-60 block sm:inline">(Impact)</span>
               </div>
               <div className="py-6 sm:py-8 text-center font-black tracking-widest text-red-500/80 text-xs sm:text-base mt-auto">
                 RISKY
               </div>
            </div>
          </div>

          {/* COLUMN 2: MR.NET BONDING */}
          <div className="flex flex-col relative overflow-hidden">
             {/* Background Glow for entire column */}
             <div className="absolute inset-0 bg-red-500/5 pointer-events-none" />

            {/* Header Title */}
            <div className="border-b border-white/5 bg-slate-900/40 py-4 sm:py-6 text-center relative z-10">
              <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.1em] sm:tracking-[0.2em] text-red-400">
                MR.NET Bonding
              </h3>
            </div>

            {/* Visual Diagram (Row 1) */}
            <div className="flex flex-col items-center justify-center p-4 sm:p-10 border-b border-white/5 relative z-10 transition-colors hover:bg-white/[0.01]">
              <div className="relative flex items-center gap-2 sm:gap-4 mb-4 sm:mb-8">
                {/* Inputs: Colored with tiny gaps */}
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <svg className="h-2.5 sm:h-3 w-10 sm:w-16" viewBox="0 0 64 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6H54L48 1M54 6L48 11" stroke="url(#bonding-input-1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                      <linearGradient id="bonding-input-1" x1="0" y1="6" x2="64" y2="6" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#10b981"/>
                        <stop offset="0.6" stopColor="#10b981"/>
                        <stop offset="0.6" stopColor="transparent"/>
                        <stop offset="0.7" stopColor="transparent"/>
                        <stop offset="0.7" stopColor="#10b981"/>
                        <stop offset="1" stopColor="#10b981"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg className="h-2.5 sm:h-3 w-10 sm:w-16" viewBox="0 0 64 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6H54L48 1M54 6L48 11" stroke="url(#bonding-input-2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                      <linearGradient id="bonding-input-2" x1="0" y1="6" x2="64" y2="6" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#06b6d4"/>
                        <stop offset="0.3" stopColor="#06b6d4"/>
                        <stop offset="0.3" stopColor="transparent"/>
                        <stop offset="0.4" stopColor="transparent"/>
                        <stop offset="0.4" stopColor="#06b6d4"/>
                        <stop offset="1" stopColor="#06b6d4"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg className="h-2.5 sm:h-3 w-10 sm:w-16" viewBox="0 0 64 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6H54L48 1M54 6L48 11" stroke="url(#bonding-input-3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                      <linearGradient id="bonding-input-3" x1="0" y1="6" x2="64" y2="6" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#a855f7"/>
                        <stop offset="0.45" stopColor="#a855f7"/>
                        <stop offset="0.45" stopColor="transparent"/>
                        <stop offset="0.5" stopColor="transparent"/>
                        <stop offset="0.5" stopColor="#a855f7"/>
                        <stop offset="0.85" stopColor="#a855f7"/>
                        <stop offset="0.85" stopColor="transparent"/>
                        <stop offset="0.9" stopColor="transparent"/>
                        <stop offset="0.9" stopColor="#a855f7"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Router: Full Color */}
                {/* Mobile: w-16 h-12, Desktop: w-24 h-20 */}
                <div className="relative w-16 h-12 sm:w-24 sm:h-20 flex items-center justify-center">
                  <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full" />
                  <img
                    src="/image/MRNET-router-vector.png"
                    alt="Bonding Router"
                    className="relative z-10 object-contain w-full h-full drop-shadow-2xl"
                  />
                  <div className="absolute -top-2 sm:-top-3 right-0 z-20 flex items-center gap-1 bg-slate-900 border border-emerald-500/30 px-1 sm:px-1.5 py-0.5 rounded-full shadow-lg">
                    <Activity className="h-2 w-2 sm:h-2.5 sm:w-2.5 text-emerald-400" />
                    <span className="text-[6px] sm:text-[8px] font-bold text-emerald-400 uppercase tracking-wider">Bonding</span>
                  </div>
                </div>

                {/* Output: Vertical Gradient Arrow */}
                <svg className="h-6 w-10 sm:h-8 sm:w-16 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]" viewBox="0 0 64 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 12H54L48 4M54 12L48 20" stroke="url(#bonding-output-grad)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="bonding-output-grad" x1="0" y1="0" x2="0" y2="24" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#10b981"/>
                      <stop offset="0.5" stopColor="#06b6d4"/>
                      <stop offset="1" stopColor="#a855f7"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <p className="max-w-[160px] sm:max-w-[240px] text-center text-[10px] sm:text-xs leading-relaxed text-slate-300">
                All links active. Gaps filled instantly.
              </p>
            </div>

            {/* Data Rows */}
            <div className="flex-1 flex flex-col divide-y divide-white/5 relative z-10">
               <div className="py-4 sm:py-6 px-2 sm:px-4 text-center text-white font-bold text-[11px] sm:text-sm">
                 All (Aggregated)
               </div>
               <div className="py-4 sm:py-6 px-2 sm:px-4 text-center text-white text-emerald-400 font-bold text-[11px] sm:text-sm">
                 Preserved
               </div>
               <div className="py-4 sm:py-6 px-2 sm:px-4 text-center text-white font-bold text-[11px] sm:text-sm">
                 Stable
               </div>
               <div className="py-4 sm:py-6 px-2 sm:px-4 text-center text-white font-bold text-[11px] sm:text-sm">
                 Milliseconds <span className="text-[9px] sm:text-[10px] font-normal text-white text-emerald-400 block sm:inline">(Seamless)</span>
               </div>
               <div className="py-6 sm:py-8 text-center font-black tracking-widest text-emerald-400 text-xs sm:text-base shadow-[inset_0_0_20px_rgba(16,185,129,0.05)] mt-auto">
                 SAFE
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}