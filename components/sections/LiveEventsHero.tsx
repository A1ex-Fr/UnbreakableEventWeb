"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Radio, ShieldCheck, Zap, Plug } from "lucide-react";
import { Youtube } from "lucide-react";

export default function HeroTop() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-10 pb-6 sm:pt-8">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60 p-5 shadow-[0_10px_32px_-18px_rgba(0,0,0,0.70)] sm:p-10">
        
        {/* Light Glow Effect */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.45]">
          <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_20%_10%,rgba(239,68,68,0.20),transparent_62%),radial-gradient(60%_50%_at_90%_20%,rgba(255,255,255,0.08),transparent_62%)]" />
        </div>

        {/* ✅ NEW POSITION: Absolute Top Left Badge */}
        <div className="absolute top-5 left-5 z-20 inline-flex items-center gap-2 rounded-full border border-red-500/25 bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-200 sm:top-10 sm:left-10">
          <span className="inline-flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
          ON AIR
          <Radio className="h-4 w-4" />
        </div>

        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* LEFT CONTENT */}
          {/* Added mt-8 to push text down slightly so it doesn't crowd the badge on small screens */}
          <div className="mt-8 sm:mt-0">
            
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Unbreakable Internet for 
              <br />Live Events.
              <span className="text-red-400"> Anywhere</span>.
           
              
            </h1>

            <p className="mt-4 max-w-xl text-pretty text-base text-white/70 sm:text-lg">
              MR.NET bonds multiple networks into one session-safe connection — no drops, no resets, no dead air.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {/* Button 1: Internal Link to Contact */}
              <a
                href="#Contact"
                className="group inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700 active:scale-[0.99]"
              >
                Buy / Rent MR.NET
                <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>

              {/* Button 2: External Link to YouTube */}
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

          {/* RIGHT: Hero image + organic proof chips */}
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

              {/* subtle contrast overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/45 via-black/10 to-transparent" />

              {/* overlay chips (organic, premium) */}
              <div className="pointer-events-none absolute bottom-3 left-3 right-3">
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs font-semibold text-white/85 backdrop-blur">
                    <ShieldCheck className="h-3.5 w-3.5 text-red-300" />
                    Live-event ready
                  </span>

                  <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs font-semibold text-white/85 backdrop-blur">
                    <Zap className="h-3.5 w-3.5 text-red-300" />
                    Bonding + redundancy
                  </span>

                  <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs font-semibold text-white/85 backdrop-blur">
                    <Plug className="h-3.5 w-3.5 text-red-300" />
                    Plug&Play
                  </span>
                </div>
              </div>
            </div>

            {/* single clean “trust line” instead of 2 plain lines */}
            <div className="mt-3 flex items-center gap-2 text-xs text-white/55">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-red-400/70" />
              <span className="text-white/55">Used for live events, broadcasts, emergency connectivity, 
                <br />
                and business-critical operations.   
              </span>           
              {/* <span>stable uplink, even when networks get crowded.</span> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}