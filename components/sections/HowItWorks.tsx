"use client";

import { PlugZap, Layers3, ShieldCheck, Headset, ChevronRight } from "lucide-react";
import { cn } from "@/components/ui/cn";

const STEPS = [
  {
    step: "01",
    title: "Connect your inputs",
    icon: PlugZap,
    desc: "Plug in Cellular (4G/5G), wired WAN, and optional satellite inputs simultaneously.",
  },
  {
    step: "02",
    title: "Bond + balance traffic",
    icon: Layers3,
    desc: "We combine all links into one massive pipe for stability and high throughput.",
  },
  {
    step: "03",
    title: "Failover protection",
    icon: ShieldCheck,
    desc: "If one link drops, your stream continues instantly on the remaining paths.",
  },
  {
    step: "04",
    title: "Proactive support",
    icon: Headset,
    desc: "Our engineers monitor your uplink during mission-critical events.",
  },
];

type SectionProps = {
  sectionClassName?: string;
};

export default function HowItWorks({ sectionClassName }: SectionProps) {
  return (
    // FIX 1: Use standard layout classes (max-w-6xl px-4) to match other sections exactly
    <section id="how-it-works" className={cn("mx-auto w-full max-w-6xl", sectionClassName)}>
      
      {/* Main Container: Dark "Hardware" Look */}
      <div className="rounded-3xl border border-white/10 bg-slate-950 p-6 shadow-2xl shadow-black/50 sm:p-10">
        
        {/* Header */}
        <div className="mb-12 md:text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            How it works
          </h2>
          <p className="mt-2 text-slate-400">
            A simple workflow designed for speed on event day.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative">
          {STEPS.map((s, index) => {
            const Icon = s.icon;
            const isLast = index === STEPS.length - 1;

            return (
              <div key={s.title} className="relative">
                <div
                  className="group relative flex h-full flex-col justify-between rounded-3xl border border-white/5 bg-slate-900/40 p-6 shadow-lg transition-all hover:bg-slate-900/60 hover:border-white/10 z-10"
                >
                  <div>
                    {/* Icon & Step Number */}
                    <div className="mb-5 flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-950 text-red-500 shadow-inner group-hover:text-red-400 group-hover:shadow-red-900/20 group-hover:border-red-500/30 transition-all">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-700 group-hover:text-slate-500 transition-colors">
                        {s.step}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-base font-bold text-white group-hover:text-red-100 transition-colors">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300">
                      {s.desc}
                    </p>
                  </div>

                  {/* Decorative bottom line */}
                  <div className="mt-6 h-0.5 w-8 bg-slate-800 group-hover:w-full group-hover:bg-red-500/50 transition-all duration-500" />
                </div>

                {/* FIX 2: Flow Arrows */}
                {!isLast && (
                  <>
                    {/* Mobile Arrow (Points Down) */}
                    <div className="absolute left-1/2 -bottom-6 -translate-x-1/2 z-0 flex items-center justify-center lg:hidden">
                       <ChevronRight className="h-6 w-6 rotate-90 text-slate-700" />
                    </div>

                    {/* Desktop Arrow (Points Right) */}
                    <div className="absolute top-1/2 -right-6 -translate-y-1/2 z-20 hidden items-center justify-center lg:flex">
                       <ChevronRight className="h-8 w-8 text-slate-700" />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}