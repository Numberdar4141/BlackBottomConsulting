
import CTASectiont from "../components/homepage/CTASectiont";

import ContactSection from "../components/homepage/ContactSection";
import ContactUsSection from "../components/homepage/ContactUsSection";
import CounterSection from "../components/homepage/CounterSection";
import Features from "../components/homepage/Features";
import Hero from "../components/homepage/Hero";
import Integrations from "../components/homepage/Integrations";

import SolutionsSection from "../components/homepage/SolutionsSection";
import StepByStepGuide from "../components/homepage/StepByStepGuide";

import WhyAccoupay from "../components/homepage/WhyAccoupay";
import NerverWorrySection from "../components/services/NerverWorrySection";

function HomePage() {
  return (
    <main>
      <Hero />
     <NerverWorrySection/>
     <Features />
     <CounterSection />
     <StepByStepGuide />
     <WhyAccoupay />
      <SolutionsSection />
      <Integrations />
      <ContactUsSection />
      
    
      <ContactSection />
      <CTASectiont />
    </main>
  );
}

export default HomePage;
