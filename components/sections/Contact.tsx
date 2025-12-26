"use client";

import React, { useState } from "react";
import Section from "@/components/ui/Section";
import { Copy, Check, Send, Mail, MapPin, Calendar, Radio } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [copied, setCopied] = useState(false);

  const template = `Event type:
(Sports / Worship / Concert / Election / Corporate / Other)

Location:
(City, venue type, indoor/outdoor)

Date & duration:
(One-time / multi-day / recurring)

Streaming workflow:
(OBS / RTMP / SRT / Platform)

Connectivity challenges:
(Cellular congestion, no wired ISP, mobility, redundancy needs)

Mobility:
(Static / vehicle / roaming / multi-location)

Additional notes:
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(template);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="contact" className="py-10 sm:py-10">
      <div className="mx-auto max-w-6xl px-4">
        
        {/* Contact Form Section */}
        <div className="rounded-3xl border border-white/10 bg-slate-950 p-6 shadow-2xl sm:p-10">
          
          <div className="mb-8">
            {/* DESIGN FIX: text-slate-100 instead of text-white */}
            <h2 className="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">
              Plan your live event uplink
            </h2>
            <p className="mt-2 max-w-2xl text-slate-400">
              Tell us what you’re producing and we’ll recommend the right setup.
            </p>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-12">
            
            {/* LEFT COLUMN: Context & Template */}
            <div className="flex flex-col gap-6">
              
              {/* Checklist */}
              <div className="rounded-3xl border border-white/5 bg-slate-900/50 p-6">
                <div className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
                  Quick Checklist
                </div>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <Radio className="h-5 w-5 shrink-0 text-red-500" />
                    <span>Event type (Sports, Worship, Concert, Elections)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 shrink-0 text-red-500" />
                    <span>Location + expected audience/network conditions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="h-5 w-5 shrink-0 text-red-500" />
                    <span>Streaming workflow (OBS / RTMP / bonded uplink)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 shrink-0 text-red-500" />
                    <span>Time window + mobility requirements</span>
                  </li>
                </ul>
              </div>

              {/* Copy Template Box */}
              <div className="relative flex-1 rounded-3xl border border-white/5 bg-slate-900/50 p-6">
                <div className="flex items-center justify-between mb-2">
                  {/* DESIGN FIX: text-slate-200 */}
                  <label htmlFor="template-area" className="text-sm font-semibold text-slate-200 cursor-pointer">
                    Copy / paste template
                  </label>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200 transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-red-500/50"
                    aria-label="Copy template to clipboard"
                  >
                    {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>

                <textarea
                  id="template-area"
                  className="mt-2 h-48 w-full resize-none rounded-xl border border-white/10 bg-slate-950 p-4 text-sm text-slate-400 font-mono outline-none focus:ring-1 focus:ring-red-500/50 scrollbar-thin scrollbar-thumb-white/10"
                  defaultValue={template}
                  readOnly
                />
              </div>
            </div>

            {/* RIGHT COLUMN – FORM */}
            <form
              className="rounded-3xl border border-white/5 bg-slate-900/20 p-6 sm:p-8"
              onSubmit={(e) => {
                e.preventDefault();
                setStatus("sent");
              }}
            >
              <div className="grid gap-5">
                <div className="grid gap-2">
                  {/* DESIGN FIX: text-slate-300 is softer */}
                  <label htmlFor="contact-name" className="text-sm font-medium text-slate-300">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <label htmlFor="contact-email" className="text-sm font-medium text-slate-300">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all"
                    placeholder="you@company.com"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <label htmlFor="contact-details" className="text-sm font-medium text-slate-300">
                    Event details
                  </label>
                  <textarea
                    id="contact-details"
                    name="details"
                    className="h-40 w-full resize-none rounded-xl border border-white/10 bg-slate-950 p-4 text-sm text-slate-200 placeholder-slate-600 outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all font-mono"
                    placeholder="Paste the template here and fill it out…"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sent"}
                  className={cn(
                    "mt-2 flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold text-white shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900",
                    status === "sent"
                      ? "bg-green-600 hover:bg-green-700 focus:ring-green-500"
                      : "bg-red-600 hover:bg-red-500 shadow-red-900/20 focus:ring-red-500"
                  )}
                >
                  {status === "sent" ? (
                    <>
                      <Check className="h-4 w-4" /> Request Sent
                    </>
                  ) : (
                    <>
                      Send Request <Send className="h-4 w-4" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-500 mt-2">
                  Typical response time: Under 15 minutes.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}