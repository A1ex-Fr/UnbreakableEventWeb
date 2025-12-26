"use client";

import { useState, useEffect } from "react";
import Link from "next/link"; // Import Next.js Link
import Section from "@/components/ui/Section";
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Activity,
  Globe,
  Wifi
} from "lucide-react";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { timeZone: "UTC", hour12: false }) + " UTC");
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // LINK CONFIGURATION
  const PLATFORM_LINKS = [
    { label: "How it Works", href: "/#how-it-works" },
    { label: "Technical Specs", href: "/#technical" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Use Cases", href: "/#live-events" },
  ];

  const RESOURCE_LINKS = [
    { label: "Contact Support", href: "/#contact" },
    { label: "Documentation", href: "#" }, // Placeholder for future page
    { label: "Status Page", href: "#" },   // Placeholder for future page
  ];

  const LEGAL_LINKS = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-950 pt-20 pb-10">
      
      {/* 1. Creative: Glowing Gradient Top Border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-slate-900 via-red-500 to-slate-900 opacity-50 shadow-[0_0_20px_rgba(239,68,68,0.5)]" />

      {/* 2. Creative: Background Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "24px 24px" }}>
      </div>

      {/* 3. Creative: Giant Watermark Logo */}
      <div className="absolute -bottom-10 -right-10 z-0 select-none text-[15rem] font-black leading-none text-white/[0.02] md:text-[20rem]">
        MR.NET
      </div>

      <Section className="relative z-10 px-4">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Brand Column (Span 4) */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-white text-2xl tracking-tighter w-fit">
              <span className="text-red-500">MR</span>.NET
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-slate-400">
              Engineered for the events that can't fail. We bond cellular, satellite, and landline connections into a single, unbreakable uplink.
            </p>
            
            {/* Live Status Pod */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-3 py-2 text-xs font-medium text-emerald-400">
                <Activity className="h-3.5 w-3.5" />
                <span>Systems Nominal</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                <Globe className="h-3.5 w-3.5" />
                <span>Global Uplink</span>
              </div>
            </div>
          </div>

          {/* Links Grid (Span 8) */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:pl-12">
            
            {/* Group 1: Platform */}
            <div>
              <h3 className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white">
                <Wifi className="h-3 w-3 text-red-500" />
                Platform
              </h3>
              <ul className="space-y-4 text-sm font-medium text-slate-400">
                {PLATFORM_LINKS.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="group flex items-center gap-2 transition-colors hover:text-white">
                      <span className="h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-2" />
                      {item.label}
                    </Link>
                  </li>
                ))}
                {/* Bandwidth Calculator Link */}
                <li>
                  <Link 
                    href="/bandwidth-calculator" 
                    className="flex items-center gap-2 rounded-md bg-red-500/10 px-3 py-2 text-red-400 transition-all hover:bg-red-500/20 hover:text-red-300 hover:shadow-md hover:shadow-red-500/10"
                  >
                    Bandwidth Calculator
                  </Link>
                </li>
              </ul>
            </div>

            {/* Group 2: Resources */}
            <div>
              <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-white">
                Resources
              </h3>
              <ul className="space-y-4 text-sm font-medium text-slate-400">
                {RESOURCE_LINKS.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="group flex items-center gap-2 transition-colors hover:text-white">
                      <span className="h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-2" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Group 3: Legal */}
            <div>
              <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-white">
                Legal
              </h3>
              <ul className="space-y-4 text-sm font-medium text-slate-400">
                {LEGAL_LINKS.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="transition-colors hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-20 border-t border-white/5 pt-8 flex flex-col items-center justify-between gap-6 md:flex-row">
          
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} MR.NET Connectivity Solutions.
            </p>
            <p className="font-mono text-[10px] text-slate-600">
              SERVER TIME: <span className="text-slate-400">{time || "Loading..."}</span>
            </p>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            {[Twitter, Github, Linkedin].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all hover:-translate-y-1 hover:border-red-500/30 hover:bg-red-500/10 hover:text-white"
                aria-label="Social Link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </Section>
    </footer>
  );
}