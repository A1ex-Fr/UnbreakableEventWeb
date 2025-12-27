"use client";

import Image from "next/image";
import { cn } from "@/components/ui/cn";

const CLIENT_LOGOS = [
  { name: "Adobe", src: "/logos/adobe.png", w: 140, h: 40 },
  { name: "B&H", src: "/logos/bh.webp", w: 140, h: 110 },
  { name: "Fujifilm", src: "/logos/fujifilm.png", w: 150, h: 40 },
  { name: "Avid", src: "/logos/avid.png", w: 110, h: 40 },
  { name: "BoxCast", src: "/logos/boxcast.png", w: 150, h: 40 },
  { name: "Sensor Industries", src: "/logos/sensor-industries.png", w: 170, h: 40 },
  { name: "atVenu", src: "/logos/atvenu.png", w: 140, h: 40 },
  { name: "JB&A", src: "/logos/jba.png", w: 130, h: 40 },
  { name: "Blue Chip Sports", src: "/logos/blue-chip-sports.png", w: 170, h: 40 },
  { name: "FlixBus", src: "/logos/flixbus.png", w: 160, h: 40 },
];

type SectionProps = {
  sectionClassName?: string;
};

function LogoItem({ name, src, w, h }: { name: string; src: string; w: number; h: number }) {
  return (
    <div className="flex items-center justify-center min-w-[160px]">
      <div
        className={cn(
          "group relative flex items-center justify-center",
          "h-12 px-3",
          "transition-all duration-300",
          "hover:-translate-y-[1px]"
        )}
      >
        {/* Subtle hover sheen */}
        <div
          className={cn(
            "pointer-events-none absolute inset-0 rounded-2xl opacity-0",
            "bg-[radial-gradient(120%_120%_at_20%_0%,rgba(255,255,255,0.08),transparent_55%)]",
            "transition-opacity duration-300 group-hover:opacity-100"
          )}
        />

        <Image
          src={src}
          alt={name}
          width={w}
          height={h}
          className={cn(
            "h-8 w-auto object-contain",
            "opacity-60 grayscale",
            "transition-all duration-300",
            "group-hover:opacity-90 group-hover:grayscale-0"
          )}
        />
      </div>
    </div>
  );
}

export default function ClientLogos({ sectionClassName }: SectionProps) {
  return (
    <section className={cn("relative w-full overflow-hidden bg-transparent", sectionClassName)}>
      <div className="relative z-20 mx-auto max-w-7xl px-4 text-center mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500/80">
          Trusted by production teams at
        </p>
      </div>

      <div className="w-full">
        <div className="relative w-full overflow-hidden">
          <div className="absolute top-0 bottom-0 left-0 z-10 w-32 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 z-10 w-32 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none" />

          <div className="flex w-max animate-scroll gap-14 items-center">
            {CLIENT_LOGOS.map((c, i) => (
              <LogoItem key={`${c.name}-${i}`} {...c} />
            ))}

            <div className="flex gap-14 items-center" aria-hidden="true">
              {CLIENT_LOGOS.map((c, i) => (
                <LogoItem key={`dup-${c.name}-${i}`} {...c} />
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
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll {
            animation: none;
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;
            transform: none;
          }
          .animate-scroll > div[aria-hidden="true"] {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
