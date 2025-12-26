"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link"; // Import Link
import { Check, Copy, Menu, X, Tag } from "lucide-react";

const COUPON_CODE = "SAVE100";
const COUPON_TEXT = "Best online price — Save $100 today";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // FIX 1: Added "/" prefix so links work from Bandwidth Calculator page
  // FIX 2: Changed "#Contact" to "/#contact" (lowercase) to match your Section ID
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
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
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
    <div className="font-sans relative">
      
      {/* 1. COUPON BAR (Scrolls away) */}
      <div className="relative z-40 border-b border-white/5 bg-[#0B0F14] pt-[env(safe-area-inset-top)]">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-center py-2">
            <button
              type="button"
              onClick={handleCopy}
              className="group relative flex max-w-full items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-1.5 transition-all hover:bg-yellow-500/20 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
              aria-label={`Copy coupon code ${COUPON_CODE}`}
            >
              <Tag className="h-3.5 w-3.5 text-yellow-500 shrink-0" />
              <div className="flex min-w-0 items-center gap-2 text-[12px] font-medium text-yellow-100/90">
                <span className="truncate">
                  <span className="hidden sm:inline">{COUPON_TEXT}</span>
                  <span className="sm:hidden">Save $100</span>
                </span>
                <span className="h-3 w-px bg-yellow-500/30" />
                <span className="font-mono font-bold tracking-wide text-yellow-400">
                  {COUPON_CODE}
                </span>
              </div>
              <div className="ml-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow-500/20 text-yellow-400">
                {copied ? (
                  <Check className="h-3 w-3 animate-in zoom-in duration-200" />
                ) : (
                  <Copy className="h-3 w-3" />
                )}
              </div>
              <span 
                className={`absolute -right-16 top-1/2 -translate-y-1/2 text-[10px] font-medium text-green-400 transition-all duration-300 hidden md:block ${
                  copied ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                }`}
              >
                Copied!
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER (Sticky) */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0F14]/90 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-4 pb-3 pt-3">
          <div className="flex h-10 items-center justify-between">
            <Link href="/" className="flex items-center gap-2" aria-label="MR.NET Homepage">
              <div className="flex flex-col leading-none">
                <span className="text-lg font-semibold tracking-tight text-white">
                  Live Event Connectivity 
                  <br />
                  & Uplink Solutions
                </span>
                <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-red-400">
                  eventuplink.com
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-300">
              {nav.map((n) => (
                // FIX 3: Using Link component instead of <a>
                <Link
                  key={n.href}
                  href={n.href}
                  className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white"
                >
                  {n.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <a
                href="/#pricing" // FIX: Added "/" here too
                className="hidden sm:inline-flex items-center justify-center rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500/50"
              >
                Rent / Buy
              </a>

              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-red-500/50"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU SHEET */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          />

          <div className="absolute left-0 right-0 top-0 pt-[env(safe-area-inset-top)]">
            <div className="mx-auto max-w-6xl px-4">
              <div className="mt-3 rounded-3xl border border-white/10 bg-[#0B0F14]/95 backdrop-blur-xl shadow-2xl animate-in slide-in-from-top-4 duration-200">
                <div className="flex items-center justify-between px-4 py-4">
                  <div className="text-sm font-semibold text-white">Menu</div>
                  <button
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="px-4 pb-4">
                  <div className="flex flex-col gap-2">
                    {nav.map((n) => (
                      // FIX 3: Using Link component
                      <Link
                        key={n.href}
                        href={n.href}
                        onClick={() => setMenuOpen(false)}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-base font-semibold text-slate-200 hover:bg-white/10"
                      >
                        {n.label}
                      </Link>
                    ))}

                    <Link
                      href="/#pricing" // FIX: Added "/"
                      onClick={() => setMenuOpen(false)}
                      className="mt-2 inline-flex items-center justify-center rounded-2xl bg-red-600 px-4 py-4 text-base font-semibold text-white hover:bg-red-700"
                    >
                      Rent / Buy Now
                    </Link>

                    <button
                      type="button"
                      onClick={handleCopy}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 px-4 py-4 text-base font-semibold text-yellow-100 hover:bg-yellow-500/20"
                    >
                      {copied ? <Check className="h-5 w-5 text-green-400" /> : <Copy className="h-5 w-5 text-yellow-400" />}
                      {copied ? "Code Copied!" : `Copy code ${COUPON_CODE}`}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}