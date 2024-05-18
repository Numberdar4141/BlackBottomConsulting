import { useState } from "react";

import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import BreadCrumb from "../ui/BreadCrumb";

function AboutSection() {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="pt-24 lg:pt-30   bg-black relative">
     
      <div className="container pb-10">
        <BreadCrumb pageName="About Us" />
      </div>
      <div className="flex justify-center items-center flex-col">
        <div className="flex justify-center items-center pb-10 lg:pb-16 xl:pb-24">
          <div className="  max-w-[600px] text-center flex justify-center items-center flex-col">
          
            <h1 className="display-4  text-white pt-4 pb-6">Who are we ?</h1>
            <p className="text-white">
            At Black Bottom Consulting LLC, we are more than just a consulting company – we are your strategic partner in business success. Our journey began with a commitment to empower businesses, both big and small, to achieve their full potential. With a passion for excellence and a dedication to innovation, we have been at the forefront of helping businesses navigate the complexities of today's ever-evolving market landscape.
            </p>
          </div>
        </div>
       
      </div>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="ERyzAnU62hU"
        onClose={() => setOpen(false)}
      />
    </section>
  );
}

export default AboutSection;
