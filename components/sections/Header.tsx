"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Check, Copy, Menu, X, Tag, ArrowRight } from "lucide-react";

const COUPON_CODE = "SAVE100";
const COUPON_TEXT = "Save $100 on your first order";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const nav = useMemo(
    () => [
      { label: "Use cases", href: "/#use-cases" },
      { label: "How it works", href: "/#how-it-works" },
      { label: "Bonding", href: "/#bonding" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Contact", href: "/#contact" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(COUPON_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div className="font-sans relative flex flex-col w-full z-50">
      
      {/* 1. TOP ANNOUNCEMENT BAR - GOLD THEME */}
      {/* Dark warm background with Yellow accents to be complementary to the blue header */}
      <div className="relative z-50 bg-[#120F05] border-b border-yellow-500/15">
        <div className="mx-auto max-w-7xl px-4 py-2.5">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
            
            {/* Left Label */}
            <span className="font-medium tracking-wide uppercase text-[10px] sm:text-[11px] text-yellow-600/80">
               Limited Time Offer
            </span>

            <div className="hidden sm:block h-3 w-px bg-yellow-500/20" />
            
            {/* Action Area */}
            <button
              onClick={handleCopy}
              className="group flex items-center gap-2 transition-all hover:opacity-100 opacity-90"
            >
              {/* Main text */}
              <span className="text-yellow-100/80 font-normal">{COUPON_TEXT}</span>
              
              {/* Premium Gold Coupon Badge */}
              <div className="flex items-center gap-1.5 rounded bg-yellow-500/10 border border-yellow-500/20 px-2 py-0.5 transition-all group-hover:bg-yellow-500/20 group-hover:border-yellow-500/40">
                <Tag className="h-3 w-3 text-yellow-500" />
                <span className="font-mono font-bold tracking-wider text-yellow-400 group-hover:text-yellow-300">
                  {COUPON_CODE}
                </span>
                {copied ? (
                  <Check className="ml-1 h-3 w-3 text-green-400" />
                ) : (
                  <Copy className="ml-1 h-3 w-3 text-yellow-600 group-hover:text-yellow-400" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER */}
      <header 
        className={`sticky top-0 z-40 w-full border-b transition-all duration-300 ${
          scrolled 
            ? "bg-[#020408]/95 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/50" 
            : "bg-[#020408]/80 backdrop-blur-lg border-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-20 items-center justify-between">
            
            {/* LOGO AREA */}
            <Link href="/" className="group flex flex-col justify-center leading-none" aria-label="MR.NET Homepage">
              <div className="flex items-center gap-2">
                <span className="text-lg font-extrabold tracking-tight text-white group-hover:text-red-500 transition-colors">
                  EVENT UPLINK
                </span>
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500 group-hover:text-slate-300 transition-colors mt-1">
                Live Connectivity Solutions
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-1">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="px-4 py-2 text-sm font-medium text-slate-400 transition-all hover:text-white hover:bg-white/5 rounded-full"
                >
                  {n.label}
                </Link>
              ))}
            </nav>

            {/* RIGHT ACTIONS */}
            <div className="flex items-center gap-4">
              <Link
                href="/#pricing"
                className="hidden sm:inline-flex h-10 items-center justify-center gap-2 rounded-full bg-gradient-to-b from-red-600 to-red-700 px-6 text-sm font-bold text-white shadow-lg shadow-red-900/30 ring-1 ring-white/10 transition-all hover:from-red-500 hover:to-red-600 hover:scale-[1.02] active:scale-95"
              >
                <span>Rent / Buy</span>
                <ArrowRight className="h-4 w-4 opacity-70" />
              </Link>

              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-colors"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 3. MOBILE MENU OVERLAY */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          
          <div className="absolute right-0 top-0 h-full w-[300px] border-l border-white/10 bg-[#0B0F14] p-6 shadow-2xl animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between mb-10">
              <span className="text-lg font-bold text-white">
                EVENT UPLINK
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="rounded-full bg-white/5 p-2 text-white hover:bg-white/10 border border-white/5"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {n.label}
                </Link>
              ))}
              
              <div className="my-6 h-px bg-white/10" />

              <Link
                href="/#pricing"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg bg-red-600 py-3 text-base font-bold text-white hover:bg-red-700 shadow-lg shadow-red-900/20"
              >
                Rent / Buy Now
              </Link>

              <div className="mt-4 rounded-lg border border-yellow-500/10 bg-yellow-500/[0.03] p-4 text-center">
                 <p className="text-xs text-yellow-600 uppercase tracking-wider mb-2">Exclusive Offer</p>
                 <button
                  onClick={handleCopy}
                  className="w-full flex items-center justify-center gap-2 py-2 text-sm font-mono text-yellow-400 bg-yellow-500/10 rounded border border-yellow-500/20 hover:bg-yellow-500/20 transition-colors"
                >
                  {copied ? "COPIED" : COUPON_CODE}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}