import CTASectiont from "../components/homepage/CTASectiont";
import ContactUsSection from "../components/homepage/ContactUsSection";
import ContactSection from "../components/homepage/ContactSection";

import CoreServices from "../components/services/CoreServices";
import UnlimitedPayrolls from "../components/services/UnlimitedPayrolls";


import BreadcrumbSection from "../components/ui/BreadcrumbSection";
import breadcrumpIllus from "/images/SB1.png";
import ManageHealthSection from "../components/services/ManageHealthSection";
import DedicatedSupport from "../components/services/DedicatedSupport";
import WhatWeDoTaxation from "../components/services/WhatWeDoTaxation";
function ServicesPage() {
  return (
    <main>
      <BreadcrumbSection
        img={breadcrumpIllus}
        pageName="Our Services"
        pageDesc="Welcome to Blackbottom Consulting, your reliable ally for tailored business solutions. Explore our diverse range of services designed to meet your unique needs"
        pageTitle="Our All Services"
      />
      <CoreServices />
     
    <DedicatedSupport/>
     <UnlimitedPayrolls/>
     <WhatWeDoTaxation/>
     <ManageHealthSection/>
      <ContactUsSection />
      <ContactSection isPaddingTop={true} />
      <CTASectiont />
    </main>
  );
}

export default ServicesPage;
