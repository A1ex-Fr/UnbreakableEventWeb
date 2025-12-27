"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wifi,
  Globe,
  Satellite,
  Cloud,
  Server,
  ChevronDown,
  Radio,
  Video,
  Activity,
  Zap,
  Router,
  Calculator,
  ArrowRight,
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type SectionProps = {
  sectionClassName?: string;
};

const CONNECTIONS = [
  { id: "4g", label: "4G LTE", speed: 80, color: "text-emerald-400", bg: "bg-emerald-500", hex: "#10b981", icon: Radio },
  { id: "wifi", label: "Local Wi-Fi", speed: 60, color: "text-cyan-400", bg: "bg-cyan-500", hex: "#06b6d4", icon: Wifi },
  { id: "sat", label: "Starlink / Sat", speed: 30, color: "text-purple-400", bg: "bg-purple-500", hex: "#a855f7", icon: Satellite },
  { id: "wan", label: "Wired WAN", speed: 100, color: "text-orange-400", bg: "bg-orange-500", hex: "#f97316", icon: Globe },
];

const FlowingLine = ({ className, isActive }: { className: string; isActive: boolean }) => (
  <div className={className} aria-hidden="true">
    <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="w-full h-full overflow-visible">
      <line x1="0" y1="5" x2="100" y2="5" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
      <AnimatePresence>
        {isActive && (
          <>
            <motion.line
              x1="0"
              y1="5"
              x2="100"
              y2="5"
              stroke="#94a3b8"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              exit={{ pathLength: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
            <motion.line
              x1="0"
              y1="5"
              x2="100"
              y2="5"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="4 12"
              strokeOpacity="0.55"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -40 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
          </>
        )}
      </AnimatePresence>
    </svg>
  </div>
);

export default function BondingSimulator({ sectionClassName }: SectionProps) {
  const [activeConns, setActiveConns] = useState<string[]>(["4g", "wifi", "sat", "wan"]);

  const totalSpeed = CONNECTIONS
    .filter((c) => activeConns.includes(c.id))
    .reduce((acc, curr) => acc + curr.speed, 0);

  const toggleConnection = (id: string) => {
    setActiveConns((prev) => (prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]));
  };

  const isAnyActive = activeConns.length > 0;

  return (
    <section id="bonding" className={cn("w-full bg-slate-950 overflow-hidden", sectionClassName)}>
      <div className="mb-6 text-center px-4">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-white md:text-4xl">
          Visual <span className="text-red-400"> Bonding</span> Simulator
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
          Interact with the diagram below to see how MR.NET combines multiple networks into one pipe.
        </p>
      </div>

      {/* DIAGRAM CONTAINER */}
      <div
        // FIX 1: Reduced height on mobile (h-[240px]) to remove vertical gaps
        className="w-full h-[200px] sm:h-[320px] flex items-center justify-center overflow-hidden relative"
        aria-label="Interactive network bonding diagram"
      >
        {/* FIX 2: Adjusted Scale (scale-[0.48]) to ensure full width fits on small screens */}
        <div className="relative w-[1200px] h-full shrink-0 origin-center transition-transform duration-500 -mt-6 scale-[0.42] xs:scale-[0.52] sm:scale-[0.7] lg:scale-100">
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "20px 20px" }}
          />

          {/* FIX 3: Massive translation shift (translate-x-[170px]) on mobile to recenter the left-heavy diagram */}
          <div className="absolute inset-0 translate-x-[124px] sm:translate-x-[80px] lg:translate-x-[122px]">
            
            {/* 1. Equipment */}
            <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-[495px] mt-3 z-20">
              <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center gap-3">
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-slate-900 border-4 border-slate-800 shadow-inner">
                  <Video className="h-10 w-10 text-slate-200" />
                  <div className="absolute -right-2 -top-1 flex items-center gap-1.5 rounded-full bg-red-600 px-2 py-2 text-[9px] font-bold text-white ring-4 ring-slate-950 shadow-md">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-200 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
                    </span>
                    REC
                  </div>
                </div>
                <h3 className="font-bold text-white text-[14px] lg:text-xs mt-2 uppercase tracking-tight">
                  Equipment
                </h3>
              </motion.div>
            </div>

            <FlowingLine
              isActive={isAnyActive}
              className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-[400px] w-[52px] h-1"
            />

            {/* 2. Router + Sources GROUP */}
            <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-[355px] z-20">
              <div className="relative rounded-3xl border border-slate-800/80 bg-slate-900/55 backdrop-blur-md shadow-2xl px-5 py-4 w-[330px]">
                <div className="absolute inset-0 rounded-3xl ring-1 ring-[#EE3344]/15 pointer-events-none" />

                <div className="flex items-center justify-between gap-4">
                  {/* Router */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="relative flex h-24 w-24 items-center justify-center rounded-xl border-b-4 overflow-hidden bg-slate-900 shadow-lg border-slate-800">
                      <img
                        src="/image/MRNET-router-vector.png"
                        alt="MR.NET Router"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="font-bold text-white text-[12px] uppercase tracking-tight">MR.NET</div>
                  </div>

                  {/* Sources label */}
                  <div className="flex flex-col items-center flex-1">
                    <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                      Sources (Inputs)
                    </div>
                    <div className="mt-1 flex items-center gap-1 text-slate-500 text-[12px]">
                      <span className="hidden sm:inline">Click a source</span>
                      <ChevronDown className="h-4 w-4 animate-bounce opacity-70" />
                    </div>
                  </div>
                </div>

                {/* Sources list (Interactive Buttons) */}
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {CONNECTIONS.map((conn) => {
                    const isActive = activeConns.includes(conn.id);

                    return (
                      <button
                        key={conn.id}
                        onClick={() => toggleConnection(conn.id)}
                        aria-pressed={isActive}
                        aria-label={`Toggle ${conn.label} connection`}
                        className={cn(
                          // Base
                          "group relative flex items-center gap-2 px-3 py-2 rounded-full border bg-slate-900 shadow-sm transition-all duration-300",
                          "focus:outline-none focus:ring-2 focus:ring-red-500/50",
                          // States
                          isActive
                            ? "border-slate-700 ring-1 ring-slate-800"
                            : "opacity-60 grayscale border-slate-900",
                          // ✅ Professional hover
                          "hover:border-white/15 hover:bg-white/[0.03] hover:shadow-[0_10px_22px_-18px_rgba(0,0,0,0.75)] hover:-translate-y-[1px]",
                          "active:translate-y-0 active:shadow-none"
                        )}
                      >
                        {/* soft hover sheen */}
                        <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(120%_120%_at_20%_0%,rgba(255,255,255,0.08),transparent_55%)]" />

                        <div
                          className={cn(
                            "relative p-1.5 rounded-full text-white transition-transform duration-300",
                            isActive ? conn.bg : "bg-slate-700",
                            "group-hover:scale-[1.05]"
                          )}
                        >
                          <conn.icon size={14} />
                        </div>

                        <div className="relative text-[12px] font-bold text-slate-200 leading-tight transition-colors duration-300 group-hover:text-white">
                          {conn.label}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <FlowingLine
              isActive={isAnyActive}
              className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-[300px] w-[52px] h-1"
            />

            {/* 3. Central system SVG */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] flex items-center justify-between relative"
              aria-hidden="true"
            >
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                {CONNECTIONS.map((conn, index) => {
                  const isActive = activeConns.includes(conn.id);
                  const spacing = 65;
                  const totalH = (CONNECTIONS.length - 1) * spacing;
                  const startY = 200 - totalH / 2 + index * spacing;
                  const endY = 200;
                  const pathD = `M 150 ${startY} C 190 ${startY}, 290 ${endY}, 320 ${endY}`;

                  return (
                    <g key={conn.id}>
                      <path d={pathD} fill="none" stroke="#334155" strokeWidth="6" strokeLinecap="round" />
                      <AnimatePresence>
                        {isActive && (
                          <>
                            <motion.path
                              d={pathD}
                              fill="none"
                              stroke={conn.hex}
                              strokeWidth="4"
                              strokeLinecap="round"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{ pathLength: 1, opacity: 1 }}
                              exit={{ pathLength: 0, opacity: 0 }}
                              transition={{ duration: 0.4 }}
                            />
                            <motion.path
                              d={pathD}
                              fill="none"
                              stroke="white"
                              strokeWidth="2"
                              strokeDasharray="4 12"
                              strokeOpacity="0.55"
                              initial={{ strokeDashoffset: 0 }}
                              animate={{ strokeDashoffset: -200 }}
                              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            />
                          </>
                        )}
                      </AnimatePresence>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* 4. Aggregation */}
            <div className="absolute left-1/2 top-1/2 -translate-y-1/2 translate-x-[20px] mt-3 z-20">
              <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center gap-3">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-xl bg-red-600 text-white shadow-xl border-b-4 border-red-900">
                  <Server className="h-8 w-8 text-white/90" />
                  <div className="absolute -top-3 right-[-10px]">
                    <Cloud className="h-8 w-8 text-red-200 fill-red-100/20" />
                  </div>
                </div>
                <h3 className="font-bold text-white text-[14px] lg:text-xs uppercase tracking-tight">
                  Aggregation
                </h3>
              </motion.div>
            </div>

            <FlowingLine
              isActive={isAnyActive}
              className="absolute left-1/2 top-1/2 -translate-y-1/2 translate-x-[105px] w-[60px] h-1"
            />

            {/* 5. Internet */}
            <div className="absolute left-1/2 top-1/2 -translate-y-1/2 translate-x-[150px] mt-3 z-20">
              <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center gap-3">
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-slate-900 border-4 border-slate-800 shadow-inner">
                  <Globe className="h-10 w-10 text-blue-400" />
                  <div className="absolute -bottom-6 bg-slate-900 text-white px-4 py-1.5 rounded-full text-[14px] lg:text-[11px] font-bold shadow-xl flex items-center gap-2 whitespace-nowrap border border-slate-700">
                    <span
                      className={cn(
                        "block h-2 w-2 rounded-full",
                        totalSpeed > 0 ? "bg-emerald-400 animate-pulse" : "bg-red-500"
                      )}
                    />
                    {totalSpeed} Mbps
                  </div>
                </div>
                <h3 className="font-bold text-white text-[14px] lg:text-xs mt-2 uppercase tracking-tight">
                  Internet
                </h3>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}