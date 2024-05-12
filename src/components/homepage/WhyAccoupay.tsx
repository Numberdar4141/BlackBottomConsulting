import { whyAccupayCard } from "../../data/data";
import StaggerEffect from "../animation/StaggerEffectOne";

function WhyAccoupay() {
  return (
    <section className=" bg-black stp-30 sbp-30">
      <div className="container">
        <div className="flex justify-between items-end gap-6 max-lg:flex-col max-lg:items-start">
          <div className="  max-w-[600px] flex justify-center items-start flex-col">
            <p className="bg-green-800 py-3 px-5 rounded-xl text-white ">
            WHY CHOOSE US ?

            </p>
            <h1 className="display-4 text-white pt-4 ">
            Expertise in diverse investment sectors

            </h1>
          </div>
          <p className="text-white max-w-[500px]">
          Our expertise in wealth building empowers you to achieve financial success. By devising strategies tailored to your goals and leveraging our insights, we pave the way for sustainable
          </p>
        </div>
        <div className="grid grid-cols-12 gap-6 stp-15">
          {whyAccupayCard.map(({ id, img, title ,desc}, idx) => (
            <div key={id} className="col-span-12 sm:col-span-6 lg:col-span-4  ">
              <StaggerEffect id={idx}>
                <div className="bg-white  rounded-xl shadow-lg shadow-gray-900 p-6 xl:py-10 xl:px-14 flex flex-col items-center  group hover:border-mainTextColor duration-700 hover:bg-green-800">
                  <div className="">
                    <img src={img} alt="" />
                  </div>
                  <h4 className="pt-8 group-hover:text-white heading-4">{title}</h4>
                  <p className="pt-3 group-hover:text-white ">{desc}</p>
                </div>
              </StaggerEffect>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyAccoupay;
