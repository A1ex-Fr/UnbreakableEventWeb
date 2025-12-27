"use client";

import React, { useId, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import {
  Church,
  Music,
  Trophy,
  MonitorPlay,
  ShoppingCart,
  Building2,
  PartyPopper,
  Check,
} from "lucide-react";

type Story = {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  bullets: string[];
  icon: React.ElementType;
  kicker: string;
  image: string;
  imagePos?: string; // "50% 78%" etc
};

const STORIES: Story[] = [
  {
    id: "sports",
    label: "Sports",
    kicker: "Success story",
    title: "Sports broadcasts that never drop.",
    subtitle:
      "Stable uplink for stadiums, fields, races, and pop-up venues — even when networks are overloaded.",
    bullets: [
      "Keeps streams running through ISP drops",
      "Uplink-first tuning for live video",
      "Fast deployment for changing locations",
    ],
    icon: Trophy,
    image: "/image/LiveStreamingSport.jpg",
    imagePos: "50% 78%",
  },
  {
    id: "live-sales",
    label: "Live Sales",
    kicker: "Success story",
    title: "Live sales streams that keep converting.",
    subtitle:
      "Keep checkout, video, and team comms online — even when one provider degrades.",
    bullets: [
      "Bonded links for smoother streams",
      "Cleaner stability for OBS / RTMP",
      "Cellular + wired + satellite inputs",
    ],
    icon: ShoppingCart,
    image: "/image/LiveSales.png",
    imagePos: "50% 58%",
  },
  {
    id: "worship",
    label: "Worship",
    kicker: "Success story",
    title: "Worship services that reach everyone, every week.",
    subtitle:
      "Consistent streams for services, community events, and multi-site setups.",
    bullets: [
      "Redundancy for mission-critical Sundays",
      "Quick setup for volunteers",
      "Works seamlessly with existing gear",
    ],
    icon: Church,
    image: "/image/churchworship.png",
    imagePos: "50% 55%",
  },
  {
    id: "concerts",
    label: "Concerts",
    kicker: "Success story",
    title: "Concerts & backstage ops in packed venues.",
    subtitle:
      "Maintain broadcast and production connectivity when venue Wi-Fi is saturated.",
    bullets: [
      "Better stability under heavy audience load",
      "Stronger backstage operations",
      "Preconfigured gear, plug-and-play",
    ],
    icon: Music,
    image: "/image/LiveMusicConcert.png",
    imagePos: "50% 60%",
  },
  {
    id: "virtual",
    label: "Virtual Events",
    kicker: "Success story",
    title: "Virtual events that feel in-person.",
    subtitle:
      "Reliable uplink for webinars, hybrid productions, auctions, and remote presenters.",
    bullets: [
      "Stable uplink for hybrid teams",
      "Reduced stream interruptions",
      "Confidence for sponsors and viewers",
    ],
    icon: MonitorPlay,
    image: "/image/LiveGameStreaming.png",
    imagePos: "50% 55%",
  },
  {
    id: "festivals",
    label: "Festivals",
    kicker: "Success story",
    title: "Festivals: stability in the noisiest networks.",
    subtitle:
      "Crowds crush bandwidth — bonding and redundancy keep your stream and ops online.",
    bullets: [
      "Handles highly variable networks",
      "Reduces drops in congested RF environments",
      "Repeatable setup for tours",
    ],
    icon: PartyPopper,
    image: "/image/LiveFestivales.png",
    imagePos: "50% 58%",
  },
  {
    id: "corporate",
    label: "Corporate",
    kicker: "Success story",
    title: "Corporate events with zero excuses.",
    subtitle:
      "Reliable connectivity for stage production, live demos, and executive keynotes.",
    bullets: [
      "Redundant uplink options",
      "Fast setup, clean cable management",
      "Pro support for showtime",
    ],
    icon: Building2,
    image: "/image/LiveCorporateEvent.png",
    imagePos: "50% 55%",
  },
  {
    id: "tradeshow",
    label: "Trade Shows",
    kicker: "Success story",
    title: "Trade shows & demos that always stay online.",
    subtitle:
      "Rock-solid connectivity for NAB, IBC, and expo booths — live demos, sign-ups, and streams that don’t drop.",
    bullets: [
      "Bonded LTE + venue WAN for reliability",
      "Priority routing for demo and stream traffic",
      "Simple, repeatable setup for every show",
    ],
    icon: Building2,
    image: "/image/LiveTradeShows.png",
    imagePos: "50% 58%",
  },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type SectionProps = {
  sectionClassName?: string;
};

export default function UseCasesAndStories({ sectionClassName }: SectionProps) {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const tabId = useId();

  const s = STORIES[active];
  const Icon = s.icon;

  return (
    <section
      id="use-cases"
      className={cn("mx-auto max-w-6xl px-4 sm:px-6", sectionClassName)}
    >
      <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-slate-950 shadow-2xl">
        {/* Header */}
        <div className="border-b border-white/10 bg-slate-900/50 p-5 sm:p-8">
          <div className="max-w-md">
            <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
              Use cases
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Choose your event type
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              See how MR.NET delivers in real-world conditions.
            </p>
          </div>

          {/* ✅ iPhone: 2-row grid. Desktop: single row scroll */}
          <div className="mt-5">
            {/* Mobile grid (2 rows) */}
            <div className="grid grid-cols-2 gap-2 sm:hidden" role="tablist">
              {STORIES.map((st, idx) => {
                const isActive = idx === active;
                return (
                  <button
                    key={st.id}
                    type="button"
                    role="tab"
                    id={`${tabId}-${st.id}-tab`}
                    aria-selected={isActive}
                    aria-controls={`${tabId}-${st.id}-panel`}
                    onClick={() => setActive(idx)}
                    className={cn(
                      "w-full rounded-full px-3 py-2.5 text-[13px] font-semibold transition",
                      "leading-tight", // ✅ helps wrapping/height
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60",
                      isActive
                        ? "bg-red-600 text-white shadow-lg shadow-red-900/20"
                        : "bg-white/5 text-slate-300/70 active:bg-white/10"
                    )}
                  >
                    {/* ✅ text wrap inside pills */}
                    <span className="block max-w-full break-words">
                      {st.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Desktop / tablet scroll row */}
            <div
              className="hidden sm:flex overflow-x-auto pb-2 scrollbar-hide"
              role="tablist"
            >
              <div className="flex gap-2 min-w-max">
                {STORIES.map((st, idx) => {
                  const isActive = idx === active;
                  return (
                    <button
                      key={st.id}
                      type="button"
                      role="tab"
                      id={`${tabId}-${st.id}-tab-desktop`}
                      aria-selected={isActive}
                      aria-controls={`${tabId}-${st.id}-panel`}
                      onClick={() => setActive(idx)}
                      className={cn(
                        "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 whitespace-nowrap",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60",
                        isActive
                          ? "bg-red-600 text-white shadow-lg shadow-red-900/20"
                          : "bg-white/5 text-slate-300/70 hover:bg-white/10 hover:text-white"
                      )}
                    >
                      {st.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Panel */}
        <div className="bg-slate-950/40 p-5 sm:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={s.id}
              role="tabpanel"
              id={`${tabId}-${s.id}-panel`}
              aria-labelledby={`${tabId}-${s.id}-tab`}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:items-center"
            >
              {/* ✅ Image FIRST on mobile, and ~50% smaller */}
              <div className="order-1 lg:order-2">
                <div
                  className={cn(
                    "-mx-5 sm:mx-0",
                    "rounded-none sm:rounded-2xl",
                    "relative w-[calc(100%+2.5rem)] sm:w-full",
                    "overflow-hidden border border-white/10 bg-slate-900 shadow-xl",

                    // ✅ smaller than previous: shorter aspect + lower max height
                    "aspect-[16/9] sm:aspect-video lg:aspect-[4/3]",
                    "max-h-[26vh] sm:max-h-none"
                  )}
                >
                  <Image
                    src={s.image}
                    alt={`${s.label} use case`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 520px"
                    priority={active === 0}
                    className="object-cover"
                    style={{ objectPosition: s.imagePos ?? "50% 60%" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
                </div>
              </div>

              {/* ✅ Text wraps by default, but we also prevent weird overflow */}
              <div className="order-2 lg:order-1 min-w-0">
                <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/10 text-red-400">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-red-200">
                    {s.kicker}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight break-words">
                  {s.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed break-words">
                  {s.subtitle}
                </p>

                <div className="mt-6 rounded-2xl border border-white/5 bg-white/[0.02] p-4 sm:p-5">
                  <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                    Key Benefits
                  </div>
                  <ul className="space-y-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 min-w-0">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        <span className="text-sm text-slate-200 leading-snug break-words">
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href="#contact"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-slate-900 transition active:scale-[0.99] w-full sm:w-auto"
                  >
                    Get a Quote
                  </a>
                  <a
                    href="#how-it-works"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-semibold text-white transition active:scale-[0.99] w-full sm:w-auto"
                  >
                    How it Works
                  </a>
                </div> */}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
