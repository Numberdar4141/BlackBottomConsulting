import FadeDown from "../animation/FadeDown";
import FadeRight from "../animation/FadeRight";
import FadeTop from "../animation/FadeTop";

import contactIllus from "/images/contact_illus.png";

function ContactUsSection() {
  return (
    <div className=" bg-black pt-15">
      <div className="max-xxl:container xxl:ml-[calc((100%-1296px)/2)] flex justify-between text-white sm:max-xxl:gap-6 max-lg:flex-col ">
        <div className="flex flex-col justify-center items-start w-full lg:max-xxl:w-1/2 xxl:max-w-[550px] max-xxl:pb-8 max-xxl:overflow-hidden">
          <FadeDown>
            <p className="text-lg font-medium underline">The Future: Shaping Tomorrow, Today
</p>
          </FadeDown>
          <FadeRight>
            <h1 className="display-4 lg:text-[45px] pb-6 pt-4">
            Our Vision and Commitment to Excellence

            </h1>
          </FadeRight>
          <FadeTop>
            <p className="pb-8">
            The future holds endless possibilities, and we're here to help you shape it according to your vision. With our strategic guidance and innovative solutions, we pave the way for a future where your business thrives and your financial goals are realized. Embrace the future with confidence, with Black Bottom Consulting LLC as your partner.
            </p>
          </FadeTop>
         
        </div>
        <div className="w-full lg:max-xxl:w-1/2 self-stretch flex justify-center max-xxl:items-center lg:pt-10">
          <img src={contactIllus} alt="" className=" object-cover" />
        </div>
      </div>
    </div>
  );
}

export default ContactUsSection;
