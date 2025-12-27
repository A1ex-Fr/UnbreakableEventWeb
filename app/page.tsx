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

/* FIX APPLIED:
  1. gap-0: Removes external spacing between components.
  2. [&>section]:!py-8: FORCES mobile vertical padding to be small (2rem/32px).
  3. [&>section]:md:!py-16: FORCES desktop vertical padding to be moderate (4rem/64px).
     (Normal template default is usually py-24 or py-32, which is huge)
  
  Note: The '!' is crucial. It overrides the classes inside the components.
*/
const SECTION_GAP_CLASSES = "gap-0 [&>section]:!py-8 [&>section]:md:!py-16";
const SECTION_BOTTOM_SPACER = "pb-8 md:pb-12";

export default function Page() {
  return (
    <main className="flex flex-col w-full bg-slate-950">
      
      <div className={`flex flex-col ${SECTION_GAP_CLASSES}`}>

        {/* 1. HERO 
            Note: If the Hero looks too short at the top because of the override, 
            you can wrap it in a plain <div> to shield it from the [&>section] selector.
        */}
        <LiveEventsHero />

        {/* 2. TRUST */}
        <LiveEventsCarousel />

        {/* 3. THE PROBLEM */}
        <BondingVsFailover />

        {/* 4. THE SOLUTION */}
        <HowItWorks />

        {/* 5. INTERACTIVE DEMO */}
        <BondingSimulator />

        {/* 6. RELEVANCE */}
        <LiveEventUseCases />

        {/* 7. COMPARISON */}
        <WhyBondedUplink />

        {/* 8. SPECS */}
        <TechnicalSpecs />

        {/* 9. OFFER */}
        <Pricing />

        {/* 10. ACTION */}
        <Contact />
        
        {/* Bottom spacer */}
        <div className={SECTION_BOTTOM_SPACER} />
      </div>
    </main>
  );
}