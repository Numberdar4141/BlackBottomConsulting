
import CTASectiont from "../components/homepage/CTASectiont";

import ContactSection from "../components/homepage/ContactSection";
import ContactUsSection from "../components/homepage/ContactUsSection";
import CounterSection from "../components/homepage/CounterSection";
import Features from "../components/homepage/Features";
import Hero from "../components/homepage/Hero";
import Integrations from "../components/homepage/Integrations";

import SolutionsSection from "../components/homepage/SolutionsSection";
import StepByStepGuide from "../components/homepage/StepByStepGuide";
import Features1 from "../components/homepage/Features1"
import WhyAccoupay from "../components/homepage/WhyAccoupay";
import NerverWorrySection from "../components/services/NerverWorrySection";
import WhatWeDo from "../components/services/WhatWeDo";

function HomePage() {
  return (
    <main>
      <Hero />
     <NerverWorrySection/>
 
     <Features />
     <Features1/>
     <CounterSection />
     <StepByStepGuide />
     <WhyAccoupay />
      <SolutionsSection />
      <Integrations />
      <WhatWeDo/>
      <ContactUsSection />
      
    
      <ContactSection />
      <CTASectiont />
    </main>
  );
}

export default HomePage;
