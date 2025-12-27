"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/ui/Section";
import {
  Cpu,
  Network, 
  Layers, 
  Radio, 
  BatteryCharging, 
  FileText, 
  Download,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X
} from "lucide-react";

type SectionProps = {
  sectionClassName?: string;
};

const SPECS = [
  {
    label: "Local Connectivity",
    value: "1 Gbps LAN",
    desc: "Gigabit Ethernet ports for ultra-low latency local network integration.",
    icon: Network,
  },
  {
    label: "Processing Engine",
    value: "High-Perf CPU",
    desc: "Dedicated heavy-duty processor for real-time traffic bonding.",
    icon: Cpu,
  },
  {
    label: "Cellular Redundancy",
    value: "3x SIM Cards",
    desc: "Triple-carrier support built-in for maximum coverage resilience.",
    icon: Radio,
  },
  {
    label: "Bonding Capacity",
    value: "6 Channels",
    desc: "Simultaneous bonding of 3x SIMs + WiFi + WAN + USB Modem.",
    icon: Layers,
  },
  {
    label: "Power Versatility",
    value: "Mains / Battery",
    desc: "Runs on standard AC network or portable USB-C Power Bank.",
    icon: BatteryCharging,
  },
];

const SLIDES = [
  "/image/mrnet_box.webp",
  "/image/mrnet_box_1.webp",
  "/image/mrnet_box_2.webp",
  "/image/mrnet_box_3.webp",
  "/image/mrnet_box_4.webp",
  "/image/mrnet_box_5.webp",
];

export default function Technical({ sectionClassName = "" }: SectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  // Handle Escape key to close zoom
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsZoomed(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <Section id="technical" className={sectionClassName}>
      <div className="rounded-3xl border border-white/10 bg-slate-950 p-6 shadow-2xl shadow-black/50 sm:p-10">
        
        {/* Header */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 border-b border-white/10 pb-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Technical Specifications
            </h2>
            <p className="mt-2 text-slate-400">
              Built for professional broadcast environments.
            </p>
          </div>
          
          <div className="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1.5 text-xs font-mono font-semibold text-red-400">
            HARDWARE REV 2.0
          </div>
        </div>

        {/* FEATURED CAROUSEL SECTION */}
        <div className="mb-10 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 shadow-inner group/carousel">
          {/* Constrained width container to keep images sharp and centered */}
          <div className="relative aspect-video w-full mx-auto max-w-5xl">
            
            {/* Image Display (Clickable) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="relative h-full w-full flex items-center justify-center cursor-zoom-in"
                onClick={() => setIsZoomed(true)}
              >
                {/* OPTIMIZATION: Removed 'priority' so it lazy loads */}
                {/* Added 'sizes' to ensure correct resolution is downloaded */}
                <Image
                  src={SLIDES[currentSlide]}
                  alt={`MR.NET Hardware View ${currentSlide + 1}`}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                />
                
                {/* Zoom Hint (Visible on Hover) */}
                <div className="absolute top-4 right-4 opacity-0 transition-opacity duration-300 group-hover/carousel:opacity-100">
                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                    <Maximize2 className="h-3.5 w-3.5" />
                    <span>Expand</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Manual Controls: Arrows */}
            <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
              <button
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                className="pointer-events-auto group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-md transition-all hover:bg-red-600 hover:border-red-500 hover:text-white text-white/70"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                className="pointer-events-auto group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-md transition-all hover:bg-red-600 hover:border-red-500 hover:text-white text-white/70"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Manual Controls: Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 pointer-events-none">
              <div className="flex gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-2 backdrop-blur-md pointer-events-auto">
                {SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { e.stopPropagation(); goToSlide(idx); }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentSlide 
                        ? "w-8 bg-red-500" 
                        : "w-2 bg-white/40 hover:bg-white/80"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FULLSCREEN ZOOM MODAL */}
        <AnimatePresence>
          {isZoomed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-10"
              onClick={() => setIsZoomed(false)}
            >
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 z-50 rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition-colors hover:bg-red-600"
                onClick={() => setIsZoomed(false)}
              >
                <X className="h-6 w-6" />
              </button>

              {/* Zoomed Image */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative h-full w-full max-w-7xl"
                onClick={(e) => e.stopPropagation()} // Prevent close on image click
              >
                {/* OPTIMIZATION: Removed 'priority' */}
                <Image
                  src={SLIDES[currentSlide]}
                  alt={`Zoomed View ${currentSlide + 1}`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Specs Grid + Downloads */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SPECS.map((spec, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40 p-5 transition-all hover:bg-slate-900/80 hover:border-white/10 hover:shadow-lg"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red-600/5 blur-3xl transition-opacity group-hover:bg-red-600/10" />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-slate-950 text-slate-400 group-hover:border-red-500/30 group-hover:text-red-400 transition-colors">
                      <spec.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-red-100 transition-colors">
                    {spec.value}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">
                    {spec.label}
                  </p>
                </div>
                <div className="mt-4 border-t border-white/5 pt-4">
                  <p className="text-sm leading-relaxed text-slate-400 group-hover:text-slate-300">
                    {spec.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Downloads Card */}
          <div className="flex flex-col justify-center rounded-2xl border border-dashed border-white/10 bg-transparent p-5 transition-colors hover:bg-white/5">
            <div className="mb-4 flex items-center gap-2 text-sm font-medium text-slate-400">
              <Download className="h-4 w-4 text-red-500" />
              <span>Downloads</span>
            </div>
            
            <div className="flex flex-col gap-3">
              <a 
                href="/pdf/TechSpecs-MRNET-006-Plus-v1.1.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-lg border border-white/5 bg-slate-900 p-3 transition-all hover:border-red-500/30 hover:bg-slate-800"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded bg-slate-800 text-slate-400 group-hover:text-red-400 transition-colors">
                  <FileText className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-red-100">Tech Specs</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wide">PDF v1.1</div>
                </div>
              </a>

              <a 
                href="/pdf/Manual-MRNET-006-Plus-v1.1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-lg border border-white/5 bg-slate-900 p-3 transition-all hover:border-red-500/30 hover:bg-slate-800"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded bg-slate-800 text-slate-400 group-hover:text-red-400 transition-colors">
                  <FileText className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-red-100">User Manual</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wide">PDF v1.1</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}