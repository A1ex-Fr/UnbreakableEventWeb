"use client";

import { PlugZap, Layers3, ShieldCheck, Headset, ChevronRight } from "lucide-react";
import { cn } from "@/components/ui/cn";

const STEPS = [
  {
    step: "01",
    title: "Connect your inputs",
    icon: PlugZap,
    desc: "Plug in Cellular (LTE), wired WAN, and optional satellite inputs simultaneously.",
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
    <section id="how-it-works" className={cn("mx-auto w-full max-w-6xl", sectionClassName)}>
      
      {/* Main Container */}
      <div className="rounded-3xl border border-white/10 bg-slate-950 p-6 shadow-2xl shadow-black/50 sm:p-10">
        
        {/* Header */}
        <div className="mb-8 md:mb-12 md:text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            How it works
          </h2>
          <p className="mt-2 text-slate-400">
            A simple workflow designed for speed on event day.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-4 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4 relative">
          {STEPS.map((s, index) => {
            const Icon = s.icon;
            const isLast = index === STEPS.length - 1;

            return (
              <div key={s.title} className="relative">
                <div
                  className="group relative flex h-full flex-col justify-between rounded-3xl border border-white/5 bg-slate-900/40 p-5 lg:p-6 shadow-lg transition-all hover:bg-slate-900/60 hover:border-white/10 z-10"
                >
                  <div>
                    {/* Header Row: Flex container handles layout changes */}
                    <div className="mb-3 lg:mb-5 flex items-center justify-between">
                      <div className="flex items-center gap-3 lg:block">
                        
                        {/* Icon Box */}
                        <div className="flex h-10 w-10 lg:h-12 lg:w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-950 text-red-500 shadow-inner group-hover:text-red-400 group-hover:shadow-red-900/20 group-hover:border-red-500/30 transition-all">
                          <Icon className="h-5 w-5 lg:h-6 lg:w-6" />
                        </div>

                        {/* Title (Mobile Only - sits next to icon) */}
                        <h3 className="text-sm font-bold text-white leading-tight lg:hidden group-hover:text-red-100 transition-colors">
                          {s.title}
                        </h3>
                      </div>

                      {/* Step Number */}
                      <span className="font-mono text-xs font-bold text-slate-700 group-hover:text-slate-500 transition-colors">
                        {s.step}
                      </span>
                    </div>
                    
                    {/* Title (Desktop Only - sits below icon) */}
                    <h3 className="hidden lg:block text-base font-bold text-white group-hover:text-red-100 transition-colors">
                      {s.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-1 lg:mt-2 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300">
                      {s.desc}
                    </p>
                  </div>

                  {/* Decorative bottom line */}
                  <div className="mt-5 lg:mt-6 h-0.5 w-8 bg-slate-800 group-hover:w-full group-hover:bg-red-500/50 transition-all duration-500" />
                </div>

                {/* Flow Arrows */}
                {!isLast && (
                  <>
                    {/* Mobile Arrow (Points Down) */}
                    <div className="absolute left-1/2 -bottom-5 -translate-x-1/2 z-20 flex items-center justify-center lg:hidden">
                       <ChevronRight className="h-5 w-5 rotate-90 text-slate-600" />
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