"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Check, Copy, Menu, X, Tag } from "lucide-react";

const COUPON_CODE = "SAVE100";
const COUPON_TEXT = "Best online price — Save $100 today";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

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
    <div className="font-sans relative flex flex-col">
      
      {/* 1. TOP ANNOUNCEMENT BAR (Kept darker for contrast) */}
      <div className="relative z-50 bg-[#0B0F14] border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-2">
          <div className="flex items-center justify-center gap-3">
            <span className="hidden sm:block text-[11px] font-medium text-slate-400 uppercase tracking-wide">
              Limited Time Offer
            </span>
            
            <button
              onClick={handleCopy}
              className="group flex items-center gap-2 rounded-full bg-yellow-500/10 px-3 py-1 text-[11px] font-medium text-yellow-500 hover:bg-yellow-500/20 transition-colors"
            >
              <Tag className="h-3 w-3" />
              <span className="text-slate-200">{COUPON_TEXT}</span>
              <div className="mx-1 h-3 w-px bg-white/10" />
              <span className="font-mono font-bold tracking-wider text-yellow-400 group-hover:underline">
                {COUPON_CODE}
              </span>
              {copied ? (
                <Check className="ml-1 h-3 w-3 text-green-400" />
              ) : (
                <Copy className="ml-1 h-3 w-3 opacity-50 group-hover:opacity-100" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER (Updated Background) */}
      {/* Changed bg-[#0B0F14]/90 to bg-[#161B22]/90 for better separation */}
      <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-[#161B22]/95 backdrop-blur-xl shadow-sm">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-20 items-center justify-between">
            
            {/* LOGO AREA */}
            <Link href="/" className="group flex items-center gap-3" aria-label="MR.NET Homepage">
              <div className="flex flex-col justify-center">
                <span className="text-base md:text-lg font-bold leading-tight tracking-tight text-white group-hover:text-red-500 transition-colors">
                  Live Event Connectivity 
                  <br />
                  & Uplink Solutions
                </span>
                <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 group-hover:text-slate-300 transition-colors">
                  eventuplink.com
                </span>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-8">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="text-sm font-medium text-slate-400 transition-colors hover:text-white hover:underline decoration-red-500 decoration-2 underline-offset-8"
                >
                  {n.label}
                </Link>
              ))}
            </nav>

            {/* RIGHT ACTIONS */}
            <div className="flex items-center gap-4">
              <Link
                href="/#pricing"
                className="hidden sm:inline-flex h-10 items-center justify-center rounded-full bg-red-600 px-6 text-sm font-bold text-white shadow-lg shadow-red-900/20 transition-all hover:bg-red-700 hover:scale-105 active:scale-95"
              >
                Rent / Buy
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
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <div className="absolute right-0 top-0 h-full w-[300px] border-l border-white/10 bg-[#161B22] p-6 shadow-2xl animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between mb-8">
              <span className="text-lg font-bold text-white leading-tight">
                Live Event <br/> Connectivity
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="rounded-full bg-white/5 p-2 text-white hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg font-medium text-slate-300 hover:text-white"
                >
                  {n.label}
                </Link>
              ))}
              
              <div className="my-2 h-px bg-white/10" />

              <Link
                href="/#pricing"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center rounded-xl bg-red-600 py-3 text-base font-bold text-white hover:bg-red-700"
              >
                Rent / Buy Now
              </Link>

              <button
                onClick={handleCopy}
                className="flex items-center justify-center gap-2 rounded-xl border border-dashed border-yellow-500/30 bg-yellow-500/5 py-3 text-sm text-yellow-200"
              >
                {copied ? <Check className="h-4 w-4" /> : <Tag className="h-4 w-4" />}
                {copied ? "Code Copied!" : `Code: ${COUPON_CODE}`}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}