"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Radio, Cable, Router, Cloud } from "lucide-react";
import { Youtube } from "lucide-react";
import { cn } from "@/components/ui/cn";

type SectionProps = {
  sectionClassName?: string;
};

export default function HeroTop({ sectionClassName }: SectionProps) {
  return (
    <section className={cn("mx-auto w-full max-w-6xl", sectionClassName)}>
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60 p-5 shadow-[0_10px_32px_-18px_rgba(0,0,0,0.70)] sm:p-10">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.45]">
          <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_20%_10%,rgba(239,68,68,0.20),transparent_62%),radial-gradient(60%_50%_at_90%_20%,rgba(255,255,255,0.08),transparent_62%)]" />
        </div>

        {/* Calmer badge */}
        <div className="absolute top-5 left-5 z-20 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold text-white/70 sm:top-10 sm:left-10">
          <span className="inline-flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
          ON AIR
          <Radio className="h-4 w-4 text-white/60" />
        </div>

        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* LEFT CONTENT */}
          <div className="mt-8 sm:mt-0">
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Unbreakable Internet for
              <br />
              Live Events.<span className="text-red-400"> Anywhere</span>.
            </h1>

            <p className="mt-4 max-w-xl text-pretty text-base text-white/70 sm:text-lg">
              MR.NET bonds multiple networks into one session-safe connection — no drops, no resets,
              no dead air.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {/* Primary CTA */}
              <a
                href="#pricing"
                className="group inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700 active:scale-[0.99]"
              >
                Buy / Rent MR.NET
                <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>

              {/* Secondary CTA */}
              <a
                href="https://www.youtube.com/watch?v=WAkoTOVoFno&t=1s"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 hover:text-red-100 active:scale-[0.99]"
              >
                <Youtube className="h-4 w-4 text-red-500" />
                Watch 1-min overview
              </a>
            </div>
          </div>

          {/* RIGHT: Hero image */}
          <div className="rounded-3xl p-3 sm:p-4">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src="/image/hero-image.jpg"
                alt="MR.NET live event bonding router in action"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover"
              />

              {/* Reduced overlay intensity */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/35 via-black/10 to-transparent" />
            </div>

            {/* Trust line */}
            <div className="mt-3 flex items-start gap-2 text-xs text-white/55">
              <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-red-400/70" />
              <span className="text-white/55">
                Used for live events, broadcasts, emergency connectivity, and business-critical
                operations.
              </span>
            </div>
          </div>
        </div>

        {/* PROOF STRIP: 3 grouped capabilities */}
        <div className="relative mt-7">
          
          {/* Mobile: single compact pill */}
          <div className="sm:hidden">
            <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
              <div className="leading-tight">
                <div className="text-[10px] font-semibold tracking-[0.14em] text-white/40 uppercase">
                  Multi-network bonding
                </div>
                <div className="mt-0.5 text-sm font-semibold text-white">
                  6 Bonded Inputs{" "}
                  <span className="text-white/55 font-medium">
                    (3×Cellular + Satellite + Wi-Fi + Cable)
                  </span>
                </div>
              </div>
            </div>
             {/* ... rest of mobile content ... */}
          </div>

          {/* Desktop/tablet: 3 Hoverable Cards */}
          <div className="hidden sm:grid gap-4 sm:grid-cols-3">
            
            {/* Card 1: Inputs */}
            <div className="group relative flex cursor-help items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3 transition-all duration-300 hover:z-10 hover:border-white/20 hover:bg-white/[0.06] hover:scale-105 hover:shadow-xl">
              {/* Tooltip */}
              <div className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 translate-y-2">
                <div className="relative whitespace-nowrap rounded-lg border border-white/10 bg-black/90 px-3 py-2 text-xs font-medium text-white shadow-xl backdrop-blur-md">
                   3×Cellular + Sat + Wi-Fi + Cable
                   {/* Tiny arrow pointing down */}
                   <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-white/10 bg-black/90"></div>
                </div>
              </div>

              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/40 bg-black/30 transition-colors group-hover:border-white/60">
                <Cable className="h-4 w-4 text-cyan-300/80 transition-transform duration-300 group-hover:rotate-12" />
              </span>

              <div className="leading-tight">
                <div className="text-[10px] font-semibold tracking-[0.14em] text-white/40 uppercase transition-colors group-hover:text-white/60">
                  Multi-network bonding
                </div>
                <div className="mt-0.5 text-sm font-semibold text-white">
                  6 Bonded Inputs
                </div>
              </div>
            </div>

            {/* Card 2: Outputs */}
            <div className="group relative flex cursor-help items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3 transition-all duration-300 hover:z-10 hover:border-white/20 hover:bg-white/[0.06] hover:scale-105 hover:shadow-xl">
               {/* Tooltip */}
              <div className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 translate-y-2">
                <div className="relative whitespace-nowrap rounded-lg border border-white/10 bg-black/90 px-3 py-2 text-xs font-medium text-white shadow-xl backdrop-blur-md">
                   1 Gbps Throughput
                   <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-white/10 bg-black/90"></div>
                </div>
              </div>

              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/40 bg-black/30 transition-colors group-hover:border-white/60">
                <Router className="h-4 w-4 text-white/70 transition-transform duration-300 group-hover:scale-110" />
              </span>

              <div className="leading-tight">
                <div className="text-[10px] font-semibold tracking-[0.14em] text-white/40 uppercase transition-colors group-hover:text-white/60">
                  Professional outputs
                </div>
                <div className="mt-0.5 text-sm font-semibold text-white">
                  4×Gigabit Ethernet
                </div>
              </div>
            </div>

            {/* Card 3: Cloud */}
            <div className="group relative flex cursor-help items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3 transition-all duration-300 hover:z-10 hover:border-white/20 hover:bg-white/[0.06] hover:scale-105 hover:shadow-xl">
              {/* Tooltip */}
              <div className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 translate-y-2">
                <div className="relative whitespace-nowrap rounded-lg border border-white/10 bg-black/90 px-3 py-2 text-xs font-medium text-white shadow-xl backdrop-blur-md">
                   Web Portal & Remote Access
                   <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-white/10 bg-black/90"></div>
                </div>
              </div>

              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/40 bg-black/30 transition-colors group-hover:border-white/60">
                <Cloud className="h-4 w-4 text-emerald-300/90 transition-transform duration-300 group-hover:scale-110" />
              </span>

              <div className="leading-tight">
                <div className="text-[10px] font-semibold tracking-[0.14em] text-white/40 uppercase transition-colors group-hover:text-white/60">
                  Cloud control
                </div>
                <div className="mt-0.5 text-sm font-semibold text-white">
                  Traffic Optimization
                </div>
              </div>
            </div>
          </div>

          {/* subtle divider line */}
          <div className="pointer-events-none absolute -top-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>
    </section>
  );
}