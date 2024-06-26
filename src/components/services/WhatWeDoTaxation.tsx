import { whtaWeDoTaxationData } from "../../data/data";
import StaggerEffect from "../animation/StaggerEffectOne";

function WhatWeDoTaxation() {
  return (
    <section className="bg-black text-white stp-30 sbp-30">
      <div className="container">
        <div className="flex justify-between items-end gap-6 max-lg:flex-col max-lg:items-start">
          <div className="  max-w-[600px] flex justify-center items-start flex-col">
            <p className="bg-green-800 py-3 px-5 rounded-xl  text-white ">
              What We Do
            </p>
            <h1 className="display-4  pt-4 ">
              Why Choose BlackBottom for Consulting?
            </h1>
          </div>
          <p className="text-white max-w-[500px]">
          Choose Blackbottom Consulting for expert guidance, personalized solutions, and reliable support. Our dedicated team ensures tailored strategies to fuel your business growth
          </p>
        </div>
        <div className="grid grid-cols-12 gap-6 stp-15">
          {whtaWeDoTaxationData.map(({ id, icon, title, desc }, idx) => (
            <div className="col-span-12 sm:col-span-6 md:col-span-4" key={id}>
              <StaggerEffect id={idx} key={id}>
                <div
                  className=" bg-white text-black rounded-xl hover:scale-105 shadow-xl p-6 xl:p-8 flex flex-col border border-white group hover:border-mainTextColor duration-700 hover:bg-s2 group items-start justify-start"
                  key={id}
                >
                  <div className="text-4xl text-green-800  p-3 group-hover:text-mainTextColor duration-500 bg-softBg1 group-hover:bg-white rounded-full">
                    {icon}
                  </div>
                  <h4 className="heading-4 pb-5 pt-8">{title}</h4>
                  <p className="text-bodyText">{desc}</p>
                </div>
              </StaggerEffect>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDoTaxation;
