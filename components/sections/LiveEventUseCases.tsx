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
  },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function UseCasesAndStories() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const tabId = useId();

  const s = STORIES[active];
  const Icon = s.icon;

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setActive((v) => (v + 1) % STORIES.length);
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setActive((v) => (v - 1 + STORIES.length) % STORIES.length);
    }
  };

  return (
    // FIX: Changed max-w-5xl to max-w-6xl to match other sections
    <section id="use-cases" className="mx-auto max-w-6xl px-4 pb-12 sm:pb-16 pt-8">
      {/* Main Unified Box */}
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl">
        {/* TOP SECTION: Header & Tabs */}
        <div className="border-b border-white/10 bg-slate-900/50 p-6 sm:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            {/* Header Text */}
            <div className="max-w-md">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
                Use cases
              </div>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Choose your event type
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                See how MR.NET delivers in real-world conditions.
              </p>
            </div>
          </div>

          {/* Scrollable Tabs */}
          <div
            className="mt-6 flex overflow-x-auto pb-2 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 md:pb-0"
            role="tablist"
            onKeyDown={onKeyDown}
          >
            <div className="flex gap-2 min-w-max">
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
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActive(idx)}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60",
                      isActive
                        ? "bg-red-600 text-white shadow-lg shadow-red-900/20"
                        : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    {st.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Content Panel */}
        <div className="bg-slate-950/40 p-6 sm:p-8">
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
              className="grid gap-8 lg:grid-cols-2 lg:items-center"
            >
              {/* Left Column: Text & Bullets */}
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/10 text-red-400">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-red-200">
                    {s.kicker}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-3 text-base text-slate-400 leading-relaxed">
                  {s.subtitle}
                </p>

                <div className="mt-6 rounded-2xl border border-white/5 bg-white/[0.02] p-5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                    Key Benefits
                  </div>
                  <ul className="space-y-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        <span className="text-sm text-slate-300">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-200 active:scale-[0.99]"
                  >
                    Get a Quote
                  </a>
                  <a
                    href="#how-it-works"
                    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 active:scale-[0.99]"
                  >
                    How it Works
                  </a>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="order-1 lg:order-2">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-xl">
                  <Image
                    src={s.image}
                    alt={`${s.label} use case`}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    priority
                  />
                  {/* Inner Shadow Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}