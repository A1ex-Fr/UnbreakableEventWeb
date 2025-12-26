"use client";

import { useState, useEffect } from "react";
import { 
  Settings2, 
  Wifi, 
  Video, 
  Clock, 
  Camera,
  Info
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Bitrate presets [30fps, 60fps]
const BITRATE_DEFAULTS: Record<string, [number, number]> = {
  ZOOM: [1.2, 1.2],
  "720P": [3.0, 4.5],
  "1080P": [6.0, 9.0],
  "4K": [20.0, 30.0],
};

export default function BandwidthCalculator() {
  const [quality, setQuality] = useState<"ZOOM" | "720P" | "1080P" | "4K">("1080P");
  const [fps, setFps] = useState<30 | 60>(30);
  const [bitrate, setBitrate] = useState(6.0);
  const [cameras, setCameras] = useState(1);
  const [duration, setDuration] = useState(1); // Hours
  const [redundancy, setRedundancy] = useState(false);

  // Auto-update bitrate on preset change
  useEffect(() => {
    const defaults = BITRATE_DEFAULTS[quality];
    const newDefault = fps === 60 ? defaults[1] : defaults[0];
    setBitrate(newDefault);
  }, [quality, fps]);

  // Calculations
  const redundancyFactor = redundancy ? 2 : 1;
  const headroomFactor = 1.5; // 50% safety margin
  const uploadSpeed = bitrate * cameras * headroomFactor * redundancyFactor;

  const dataOverhead = 1.2; // 20% overhead for bonding/headers
  const seconds = duration * 3600;
  const totalData = (bitrate * cameras * seconds * dataOverhead * redundancyFactor) / 8000;

  return (
    <section className="relative min-h-screen pt-24 pb-20">
      {/* Background Grid Effect from your main.css */}
      <div className="absolute inset-0 grid-fade pointer-events-none z-0 opacity-40" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        
        {/* Page Header */}
        <div className="mb-12 md:text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl drop-shadow-lg">
            Bandwidth <span className="text-red-500">Calculator</span>
          </h1>
          <p className="mt-4 max-w-2xl md:mx-auto text-lg text-slate-400 text-balance">
            Plan your network requirements accurately. Estimate uplink speed and data usage for bonded cellular broadcasts.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 lg:items-start">
          
          {/* LEFT COLUMN: Controls */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Glass Card Container */}
            <div className="glass rounded-3xl p-6 sm:p-8 shadow-soft">
              <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-6">
                <Settings2 className="h-5 w-5 text-red-500" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-white/90">Configuration</h3>
              </div>

              <div className="space-y-10">
                
                {/* 1. Quality & FPS */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                      <Video className="h-4 w-4 text-slate-500" /> Resolution
                    </label>
                    
                    {/* FPS Switch */}
                    <button
                      onClick={() => setFps(fps === 30 ? 60 : 30)}
                      className="flex items-center gap-3 rounded-full bg-slate-900/50 pl-1 pr-4 py-1 border border-white/5 transition-colors hover:border-white/10"
                    >
                      <div className={cn(
                        "flex h-6 w-10 items-center justify-center rounded-full text-[10px] font-bold transition-all shadow-lg",
                        fps === 60 ? "bg-red-600 text-white" : "bg-slate-700 text-slate-400"
                      )}>
                        {fps}
                      </div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">FPS</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {["ZOOM", "720P", "1080P", "4K"].map((q) => (
                      <button
                        key={q}
                        onClick={() => setQuality(q as any)}
                        className={cn(
                          "relative rounded-xl border py-3 text-xs sm:text-sm font-bold transition-all duration-200",
                          quality === q
                            ? "border-red-500 bg-red-600/10 text-white shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                            : "border-white/5 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                        )}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Target Bitrate Slider */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-sm font-medium text-slate-300">Target Bitrate</label>
                    <div className="rounded-md bg-red-500/10 px-2 py-1 text-xs font-mono font-bold text-red-400 border border-red-500/20">
                      {bitrate.toFixed(1)} Mbps
                    </div>
                  </div>
                  <input
                    type="range"
                    min={0.5}
                    max={50}
                    step={0.5}
                    value={bitrate}
                    onChange={(e) => setBitrate(parseFloat(e.target.value))}
                    className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-800 accent-red-500"
                  />
                  <div className="mt-2 flex justify-between text-[10px] text-slate-600 font-mono uppercase">
                    <span>Low</span>
                    <span>High</span>
                  </div>
                </div>

                {/* 3. Cameras & Duration */}
                <div className="grid gap-6 sm:grid-cols-2">
                  
                  {/* Cameras */}
                  <div>
                    <label className="mb-4 block text-sm font-medium text-slate-300 flex gap-2">
                       <Camera className="h-4 w-4 text-slate-500" /> Camera Feeds
                    </label>
                    <div className="flex rounded-xl bg-slate-900/80 p-1 border border-white/5">
                      {[1, 2, 3, 4].map((num) => (
                        <button
                          key={num}
                          onClick={() => setCameras(num)}
                          className={cn(
                            "flex-1 rounded-lg py-2 text-sm font-bold transition-all",
                            cameras === num
                              ? "bg-slate-700 text-white shadow-sm ring-1 ring-white/10"
                              : "text-slate-500 hover:text-slate-300"
                          )}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Duration */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                        <Clock className="h-4 w-4 text-slate-500" /> Duration
                      </label>
                      <span className="text-xs font-bold text-slate-400">{duration}h</span>
                    </div>
                    <input
                      type="range"
                      min={0.5}
                      max={12}
                      step={0.5}
                      value={duration}
                      onChange={(e) => setDuration(parseFloat(e.target.value))}
                      className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-800 accent-red-500"
                    />
                  </div>
                </div>

                {/* 4. Bonding Toggle */}
                <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors hover:bg-white/[0.04]">
                  <div className="flex items-start gap-3">
                    <div className={cn(
                      "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors",
                      redundancy ? "bg-red-500/20 text-red-400" : "bg-slate-800 text-slate-600"
                    )}>
                      <Wifi className="h-3 w-3" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Redundancy Mode</div>
                      <div className="text-xs text-slate-500">Simulate bonding overhead (2x upload)</div>
                    </div>
                  </div>
                  
                  {/* Custom Toggle Switch */}
                  <button
                    onClick={() => setRedundancy(!redundancy)}
                    className={cn(
                      "relative h-7 w-12 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-red-500/50 border border-transparent",
                      redundancy ? "bg-red-600" : "bg-slate-700"
                    )}
                  >
                    <span
                      className={cn(
                        "absolute top-1 left-1 h-5 w-5 transform rounded-full bg-white shadow-md transition-transform duration-200",
                        redundancy ? "translate-x-5" : "translate-x-0"
                      )}
                    />
                  </button>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Results Dashboard */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            
            {/* Result Card */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 shadow-2xl backdrop-blur-xl">
              
              {/* Dynamic Glow Background based on usage */}
              <div className={cn(
                "absolute -top-24 -right-24 h-64 w-64 rounded-full blur-[100px] transition-all duration-700 opacity-40",
                uploadSpeed > 20 ? "bg-red-600" : "bg-blue-600"
              )} />
              
              <div className="relative p-8">
                {/* Upload Speed Result */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center gap-2 mb-2">
                    <Wifi className="h-4 w-4 text-slate-400" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Required Uplink</span>
                  </div>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-6xl font-black text-white tracking-tighter tabular-nums drop-shadow-xl">
                      {uploadSpeed.toFixed(1)}
                    </span>
                    <span className="text-xl font-medium text-slate-500">Mbps</span>
                  </div>
                  <div className="mt-2 text-xs text-slate-500">
                    Includes 50% safety headroom
                  </div>
                </div>

                <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Data Usage Result */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center gap-2 mb-2">
                    <Settings2 className="h-4 w-4 text-slate-400" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Total Data</span>
                  </div>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-6xl font-black text-white tracking-tighter tabular-nums drop-shadow-xl">
                      {totalData.toFixed(1)}
                    </span>
                    <span className="text-xl font-medium text-slate-500">GB</span>
                  </div>
                  <div className="mt-2 text-xs text-slate-500">
                    Estimated for {duration}h stream
                  </div>
                </div>
              </div>

              {/* Data Visualization Bar */}
              <div className="bg-black/40 p-5 border-t border-white/5">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                  <span>Capacity Load</span>
                  <span>{Math.min((totalData / 50) * 100, 100).toFixed(0)}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                  <div 
                    className={cn(
                      "h-full rounded-full transition-all duration-500 ease-out",
                      totalData > 20 ? "bg-gradient-to-r from-red-500 to-orange-500" : "bg-gradient-to-r from-blue-500 to-emerald-400"
                    )}
                    style={{ width: `${Math.min((totalData / 50) * 100, 100)}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Smart Tips */}
            {cameras > 1 && !redundancy && (
              <div className="mt-4 flex items-start gap-3 rounded-xl border border-yellow-500/20 bg-yellow-500/10 p-4 animate-in fade-in slide-in-from-top-2">
                <Info className="h-5 w-5 shrink-0 text-yellow-500" />
                <p className="text-xs leading-relaxed text-yellow-200/80">
                  <strong>Pro Tip:</strong> Using multiple cameras without bonding can be risky. We recommend enabling Redundancy Mode or using a bonded router for 100% uptime.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}