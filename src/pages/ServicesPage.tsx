import CTASectiont from "../components/homepage/CTASectiont";
import ContactUsSection from "../components/homepage/ContactUsSection";
import FaqSection from "../components/homepage/FaqSection";
import PricingSection from "../components/homepage/PricingSection";
import StepByStepGuide from "../components/homepage/StepByStepGuide";
import WhyAccoupay from "../components/homepage/WhyAccoupay";
import CoreServices from "../components/services/CoreServices";
import WhatWeDoTaxation from "../components/services/WhatWeDoTaxation";

import BreadcrumbSection from "../components/ui/BreadcrumbSection";
import breadcrumpIllus from "/images/SB1.png";
function ServicesPage() {
  return (
    <main>
      <BreadcrumbSection
        img={breadcrumpIllus}
        pageName="Our Services"
        pageDesc="Welcome to AccuPay, your trusted partner for comprehensive financial
            solutions. Explore our range of services tailored to meet your
            business needs."
        pageTitle="Our All Services"
      />
      <CoreServices />
     <WhatWeDoTaxation/>
      <WhyAccoupay />
      <StepByStepGuide />
      <ContactUsSection />
      <PricingSection />
      <FaqSection />
      <CTASectiont />
    </main>
  );
}

export default ServicesPage;
