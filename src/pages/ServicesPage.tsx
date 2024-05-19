import CTASectiont from "../components/homepage/CTASectiont";
import ContactUsSection from "../components/homepage/ContactUsSection";
import ContactSection from "../components/homepage/ContactSection";

import WhyAccoupay from "../components/homepage/WhyAccoupay";
import CoreServices from "../components/services/CoreServices";
import UnlimitedPayrolls from "../components/services/UnlimitedPayrolls";


import BreadcrumbSection from "../components/ui/BreadcrumbSection";
import breadcrumpIllus from "/images/SB1.png";
import ManageHealthSection from "../components/services/ManageHealthSection";
import DedicatedSupport from "../components/services/DedicatedSupport";
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
    <DedicatedSupport/>
     <UnlimitedPayrolls/>
      <WhyAccoupay />
     <ManageHealthSection/>
      <ContactUsSection />
      <ContactSection isPaddingTop={true} />
      <CTASectiont />
    </main>
  );
}

export default ServicesPage;
