import LiveEventsHero from "@/components/sections/LiveEventsHero";
import LiveEventsCarousel from "@/components/sections/LiveEventsCarousel";
import BondingVsFailover from "@/components/sections/BondingVsFailover";
import HowItWorks from "@/components/sections/HowItWorks";
import BondingSimulator from "@/components/sections/BondingSimulator";
import LiveEventUseCases from "@/components/sections/LiveEventUseCases";
import WhyBondedUplink from "@/components/sections/WhyBondedUplink";
import TechnicalSpecs from "@/components/sections/TechnicalSpecs";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";

const SECTION_GAP_CLASSES = "gap-12 sm:gap-12";
const SECTION_BOTTOM_SPACER = "pb-12 sm:pb-12";

export default function Page() {
  return (
    /* GLOBAL LAYOUT WRAPPER 
      - bg-slate-950: Ensures the background color is consistent behind all gaps.
      - w-full: Prevents horizontal overflow issues.
    */
    <main className="flex flex-col w-full bg-slate-950">
      
      {/* GLOBAL SPACING CONTROL
        - gap-24 (96px): Standard gap between sections on MOBILE.
        - sm:gap-40 (160px): Standard gap between sections on DESKTOP.
        
        This gap applies evenly between *every* child component below.
      */}
      <div className={`flex flex-col ${SECTION_GAP_CLASSES}`}>

        {/* 1. HERO: The Promise. "Unbreakable Internet for Live Events." */}
        <LiveEventsHero />

        {/* 2. TRUST: Immediate credibility. "Trusted by production teams at..." */}
        <LiveEventsCarousel />

        {/* 3. THE PROBLEM: Why standard internet fails. Bonding vs Failover. */}
        {/* Note: Ensure -mt margins are removed from this component now. */}
        <BondingVsFailover />

        {/* 4. THE SOLUTION: High-level overview of the workflow. */}
        <HowItWorks />

        {/* 5. INTERACTIVE DEMO: Visual proof of the "Bonding" concept. */}
        <BondingSimulator />

        {/* 6. RELEVANCE: "Does this work for MY specific event?" */}
        <LiveEventUseCases />

        {/* 7. COMPARISON: The logical choice. "Why MR.NET vs Competitors?" */}
        <WhyBondedUplink />

        {/* 8. SPECS: For the engineers/technical decision makers. */}
        <TechnicalSpecs />

        {/* 9. OFFER: Clear pricing and purchase options. */}
        <Pricing />

        {/* 10. ACTION: Final conversion point. */}
        <Contact />
        
        {/* Bottom spacer to breathe before footer (optional) */}
        <div className={SECTION_BOTTOM_SPACER} />
      </div>
    </main>
  );
}