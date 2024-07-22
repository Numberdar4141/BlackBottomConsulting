import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { featuresCard } from "../../data/data";
import StaggerEffect from "../animation/StaggerEffectOne";

function Features() {
  return (
    <section className="bg-white stp-30 sbp-30">
      <div className="container">
        <div className="flex justify-between items-end gap-6 max-lg:flex-col max-lg:items-start">
          <div className="  max-w-[600px] flex justify-center items-start flex-col">
            <p className="bg-green-800 py-3 px-5 rounded-xl text-white ">Investment</p>
            <h1 className="display-4 text-black pt-4 ">
            Our Investment Philosophy
            </h1>
          </div>
          <p className="text-black font-medium max-w-[500px]">
          The Black Bottom Consulting LLC is your trusted partner in business strategy and financial services. With a deep commitment to helping businesses succeed and grow, we offer a range of services designed to elevate your business to new heights.
          </p>
        </div>
        {/* <div className="grid grid-cols-9 gap-6 stp-15">
          {featuresCard.map(({ id, icon, name, desc,desc1,desc2 }, idx) => (
            <div className="col-span-12 sm:col-span-6 lg:col-span-3 " key={id}>
              <StaggerEffect id={idx}>
                <div className="bg-white shadow-xl rounded-2xl p-6 xl:p-8 flex flex-col lg:h-[400px] border border-white hover:shadow-2xl group hover:border-white duration-700 hover:bg-green-800">
                  <div className="text-4xl text-green-800 pb-6 group-hover:text-white duration-500">
                    {icon}
                  </div>
                  <h4 className="heading-4 group-hover:text-white pb-5">{name}</h4>
                  <p className="text-bodyText group-hover:text-white pb-1">{desc}</p>
                  <p className="text-bodyText group-hover:text-white pb-1">{desc1}</p>
                  <p className="text-bodyText group-hover:text-white pb-6">{desc2}</p>
                  <Link
                    to={"/services"}
                    className="flex justify-center rounded-lg p-3 text-white  group-hover:bg-white group-hover:text-green-800 bg-green-800 items-center gap-2 font-medium"
                  >
                    Learn more <GoArrowRight />
                  </Link>
                </div>
              </StaggerEffect>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}

export default Features;
