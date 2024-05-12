import { Link } from "react-router-dom";

import FadeLeft from "../animation/FadeLeft";
import FadeRight from "../animation/FadeRight";
import img from "/images/BBabout1.jpeg";

function NerverWorrySection() {
  return (
    <section className=" bg-softBg1 stp-30 lg:bg-black sbp-30 max-xxl:overflow-hidden">
      <div className="container grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6 xl:col-span-5 flex justify-center lg:w-[600px] items-center max-lg:order-2 max-lg:stp-15 overflow-hidden ">
          <FadeLeft>
            <img
              src={img}
              alt=""
              className=" duration-500 rounded-xl h-[500px] w-[500px] "
            />
          </FadeLeft>
        </div>

        <div className="xxl:col-start-7 col-span-12 lg:col-span-6">
          <FadeRight>
            <h1 className="display-4 items-center lg:mt-[80px] justify-center flex text-white ">
             Who are we?
            </h1>
            <p className="pt-6 text-white  lg:text-[18px] pb-6 xl:pb-8">
            <span className="text-[60px]">A</span> t Black Bottom Consulting LLC, we are more than just a consulting company – we are your strategic partner in business success. Our journey began with a commitment to empower businesses, both big and small, to achieve their full potential. With a passion for excellence and a dedication to innovation, we have been at the forefront of helping businesses navigate the complexities of today's ever-evolving market landscape.
 
            </p>
            <div className="flex flex-col gap-6 xl:gap-10 justify-start items-start pb-6 xl:pb-12">
            
            </div>
            <Link to={"/contact"} className="bg-green-800 items-center lg:text-[25px] justify-center flex text-white  rounded-xl py-3 px-4">
              {" "}
              About BlackBottom Consulting
            </Link>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}

export default NerverWorrySection;
