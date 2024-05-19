


import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import BreadcrumbSection from "../ui/BreadcrumbSection";
import breadcrumpIllus from "/images/BBabout1.jpeg"
function AboutSection() {

  return (
    <section className="pt-24 lg:pt-30   bg-black relative">
     
     <BreadcrumbSection
        img={breadcrumpIllus}
        pageName="About Us"
        pageDesc="At Black Bottom Consulting LLC, we are more than just a consulting company – we are your strategic partner in business success. Our journey began with a commitment to empower businesses, both big and small, to achieve their full potential. With a passion for excellence and a dedication to innovation, we have been at the forefront of helping businesses navigate the complexities of today's ever-evolving market landscape."
        pageTitle="Who are we?"
      />
     
     
    </section>
  );
}

export default AboutSection;
