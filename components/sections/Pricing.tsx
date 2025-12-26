"use client";

import { useState, useEffect } from "react";
import Section from "@/components/ui/Section";
import { Check, Zap, Globe, Ticket } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion, useSpring, useTransform } from "framer-motion";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Define valid coupons and their discount values
const COUPONS: Record<string, number> = {
  "SAVE100": 100,
  "MRNET200": 200, 
};

// Sub-component to handle number animation
function AnimatedPrice({ value }: { value: number }) {
  // Spring physics for a satisfying "ticking" effect
  const spring = useSpring(value, { mass: 0.8, stiffness: 75, damping: 15 });
  
  // Transform the raw float value into a localized string (e.g. "2,400")
  const display = useTransform(spring, (current) => Math.round(current).toLocaleString());

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return <motion.span>{display}</motion.span>;
}

export default function Pricing() {
  const [couponInput, setCouponInput] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [couponError, setCouponError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const basePrice = 2400;
  const finalPrice = basePrice - appliedDiscount;

  const handleApply = () => {
    if (!couponInput) return;
    const code = couponInput.toUpperCase().trim();

    if (COUPONS[code]) {
      setAppliedDiscount(COUPONS[code]);
      setSuccessMessage(`Coupon applied! You saved $${COUPONS[code]}.`);
      setCouponError("");
    } else {
      setAppliedDiscount(0);
      setSuccessMessage("");
      setCouponError("Invalid coupon code.");
    }
  };

  return (
    <Section id="pricing" className="py-3 sm:py-1">
      <div className="mx-auto max-w-5xl px-4">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-400 mb-4">
            <Zap className="h-3 w-3" />
            Best Price in the Industry
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
            Simple, transparent pricing.
          </h2>
          <p className="mt-4 text-slate-400">
            Choose the model that fits your production budget. No hidden hardware fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          
          {/* RENTAL Option */}
          <div className="relative flex flex-col rounded-3xl border border-white/10 bg-slate-900/50 p-8 shadow-2xl transition-transform hover:scale-[1.01]">
            <div className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-500">
              Event Rental
            </div>
            <div className="mb-6 flex items-baseline gap-2">
              <span className="text-5xl font-bold text-slate-100">$600</span>
              <span className="text-sm font-medium text-slate-400">/ event</span>
            </div>
            
            <p className="mb-6 text-sm text-slate-400">
              Perfect for one-off productions, pop-up events, or testing the waters before buying.
            </p>

            <ul className="mb-8 space-y-4 flex-1">
              {[
                "Includes MR.NET Bonding Router",
                "3x Cellular Modems Included",
                "24/7 Priority Support during event",
                "Free return shipping",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-800 text-white">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="text-sm text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-auto block w-full rounded-full border border-white/10 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-slate-100 transition hover:bg-white/10"
            >
              Rent Now
            </a>
          </div>

          {/* PURCHASE Option */}
          <div className="relative flex flex-col rounded-3xl border border-red-500/30 bg-gradient-to-b from-red-900/10 to-slate-900/50 p-8 shadow-2xl transition-transform hover:scale-[1.01]">
            
            <div className="mb-4 text-sm font-bold uppercase tracking-widest text-red-400">
              Purchase Hardware
            </div>
            
            {/* Dynamic Price Display */}
            <div className="mb-6 flex items-baseline gap-3">
              <span className="text-5xl font-bold text-slate-100 flex items-center">
                $
                {/* Visual Feedback: Animated Number Ticker */}
                <AnimatedPrice value={finalPrice} />
              </span>
              
              {appliedDiscount > 0 ? (
                <span className="text-xl font-medium text-slate-500 line-through decoration-red-500/50 decoration-2">
                  ${basePrice.toLocaleString()}
                </span>
              ) : (
                <span className="text-sm font-medium text-slate-400">one-time</span>
              )}
            </div>

            <p className="mb-6 text-sm text-slate-400">
              Own the gear for recurring events. The most cost-effective solution for frequent streamers.
            </p>

            <ul className="mb-8 space-y-4 flex-1">
              {[
                "Own the MR.NET Router Hardware",
                "Lifetime License & Firmware Updates",
                "1-Year Hardware Warranty",
                "Premium Onboarding Session",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-200">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="text-sm text-slate-200">{feature}</span>
                </li>
              ))}
            </ul>

            {/* COUPON INPUT SECTION */}
            <div className="mb-6 rounded-xl border border-white/10 bg-black/20 p-3">
              <label htmlFor="coupon-code" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                Have a coupon?
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Ticket className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                  <input 
                    id="coupon-code"
                    type="text" 
                    placeholder="Enter code (e.g. SAVE100)" 
                    className="w-full rounded-lg border border-white/10 bg-slate-900 py-2 pl-9 pr-3 text-sm text-slate-200 placeholder-slate-600 focus:border-red-500/50 focus:outline-none focus:ring-1 focus:ring-red-500/50 uppercase"
                    value={couponInput}
                    onChange={(e) => {
                      setCouponInput(e.target.value);
                      if (couponError || appliedDiscount > 0) {
                        setCouponError("");
                        setAppliedDiscount(0);
                        setSuccessMessage("");
                      }
                    }}
                    onKeyDown={(e) => e.key === "Enter" && handleApply()}
                  />
                </div>
                <button 
                  onClick={handleApply}
                  disabled={appliedDiscount > 0}
                  className={cn(
                    "rounded-lg px-4 py-2 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-red-500/50",
                    appliedDiscount > 0
                      ? "bg-green-500/20 text-green-400 border border-green-500/30 cursor-default"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
                  )}
                >
                  {appliedDiscount > 0 ? "Applied" : "Apply"}
                </button>
              </div>
              
              {successMessage && (
                <p className="mt-2 text-xs text-green-400 font-medium animate-in fade-in slide-in-from-top-1">
                  {successMessage}
                </p>
              )}
              {couponError && (
                <p className="mt-2 text-xs text-red-400 font-medium animate-in fade-in slide-in-from-top-1">
                  {couponError}
                </p>
              )}
            </div>

            <a
              href="#contact"
              className="mt-auto block w-full rounded-full bg-red-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-red-900/20 transition hover:bg-red-500"
            >
              Buy Hardware
            </a>
          </div>
        </div>

        {/* IMPORTANT TRAFFIC NOTICE */}
        <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6 text-center">
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
              <Globe className="h-5 w-5" />
            </div>
            <div className="text-left">
              <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wide">
                Data Traffic is Pay-As-You-Go
              </h3>
              <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                To keep hardware costs low, we charge for bonded data separately at just{" "}
                <span className="text-slate-100 font-bold underline decoration-blue-500/50 underline-offset-4">
                  $8 per GB
                </span>
                —but only when utilizing our premium embedded SIMs. You are free to <span className="text-slate-100 font-semibold">bring your own SIM cards</span> and avoid our data fees entirely.
              </p>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
}