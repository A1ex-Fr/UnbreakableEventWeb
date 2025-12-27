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

/* FIX EXPLANATION:
   1. gap-0: We remove the flex gap entirely.
   2. [&>section]:!py-8: This acts as a "Force" command. It finds every <section> 
      tag inside this div and forces its top/bottom padding to be small (32px).
   3. The '!' is important—it overrides the padding written inside the components.
*/
const SECTION_GAP_CLASSES = "gap-0 [&>section]:!py-8 [&>section]:md:!py-16";
const SECTION_BOTTOM_SPACER = "pb-8 md:pb-12";

export default function Page() {
  return (
    <main className="flex flex-col w-full bg-slate-950">
      
      <div className={`flex flex-col ${SECTION_GAP_CLASSES}`}>

        {/* 1. HERO 
            We wrap the Hero in a <div> to protect it from the padding override. 
            The Hero usually needs to be full height and shouldn't be squashed.
        */}
        <div>
          <LiveEventsHero />
        </div>

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