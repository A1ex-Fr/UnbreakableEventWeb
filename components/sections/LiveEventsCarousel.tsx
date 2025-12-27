"use client";

import { cn } from "@/components/ui/cn";

const CLIENTS = [
  "Adobe",
  "B&H",
  "Fujifilm",
  "Avid",
  "BoxCast",
  "Sensor Industries",
  "atVenu",
  "JB&A",
  "Blue Chip Sports",
  "FlixBus",
];

type SectionProps = {
  sectionClassName?: string;
};

export default function ClientLogos({ sectionClassName }: SectionProps) {
  return (
    // FIX 1: Removed 'w-screen left-1/2 -translate-x-1/2'.
    // 'w-full' is safer and works perfectly since your Main layout is full-width.
    <section className={cn("relative w-full overflow-hidden bg-transparent", sectionClassName)}>
      
      {/* Label */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 text-center mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500/80">
          Trusted by production teams at
        </p>
      </div>

      <div className="w-full">
        <div className="relative w-full overflow-hidden">
          
          {/* Fade Gradient (Left) */}
          <div className="absolute top-0 bottom-0 left-0 z-10 w-32 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none" />
          
          {/* Fade Gradient (Right) */}
          <div className="absolute top-0 bottom-0 right-0 z-10 w-32 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none" />

          {/* Scrolling Container */}
          {/* FIX 2: Added logic for reduced motion in CSS below */}
          <div className="flex w-max animate-scroll gap-24 items-center">
            
            {/* Original List */}
            {CLIENTS.map((client, i) => (
              <div
                key={`${client}-${i}`}
                className="flex items-center justify-center min-w-[140px]"
              >
                <span className="text-2xl font-bold uppercase tracking-tighter text-slate-600/80 hover:text-slate-400 transition-colors cursor-default whitespace-nowrap">
                  {client}
                </span>
              </div>
            ))}

            {/* Duplicate List for Infinite Effect */}
            {/* FIX 3: aria-hidden="true" hides duplicates from screen readers */}
            <div className="flex gap-24 items-center" aria-hidden="true">
              {CLIENTS.map((client, i) => (
                <div
                  key={`duplicate-${client}-${i}`}
                  className="flex items-center justify-center min-w-[140px]"
                >
                  <span className="text-2xl font-bold uppercase tracking-tighter text-slate-600/80 hover:text-slate-400 transition-colors cursor-default whitespace-nowrap">
                    {client}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* FIX 2: Respect user's motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll {
            animation: none;
            /* Wrap items so they are all visible without scrolling */
            flex-wrap: wrap; 
            justify-content: center;
            width: 100%;
            transform: none;
          }
          /* Hide the duplicate list if we aren't scrolling */
          .animate-scroll > div[aria-hidden="true"] {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}