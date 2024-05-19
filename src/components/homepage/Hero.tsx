import { Link } from "react-router-dom";
import StaggerEffectTwo from "../animation/StaggerEffectTwo";

import heroIllus from "/images/Hb4.png";

function Hero() {
  const text = "Business";
  const animateWord = text.split("");
  return (
    <section className=" bg-repeat  stp-25 overflow-hidden">
      
     
      <div className="absolute   bg-white max-w-full lg:w-[1176px]  overflow-hidden"></div>
      <div className="xxl:ml-[calc((100%-1296px)/2)] lg:max-xxl:py-10 max-xxl:container relative z-20 max-lg:pt-15 text-black grid grid-cols-12 ">
        
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-center gap-2">
          <p className="uppercase text-base lg:text-xl font-bold">
           Innovative Solutions for Market Challenges{" "}
          </p>
          <div className="display-2 ">
         <span className="lg:text-[70px] font-extrabold">Empowering </span> 
            <div className="text-green-800 font-extrabold inline-flex">
              {animateWord.map((word, idx) => (
                <StaggerEffectTwo key={idx} id={idx}>
                  <span>{word}</span>
                </StaggerEffectTwo>
              ))}
            </div>
            <span className="lg:text-[70px] font-extrabold">Success </span> 
             <span className="lg:text-[70px] font-extrabold">Together</span>
          </div>
          <p className="max-w-[550px]">
          At Black Bottom Consulting, we're dedicated to empowering businesses with innovative solutions, serving as your strategic partner for success
          </p>
          <div className="flex justify-start items-center gap-4 pt-6 lg:pt-8 pb-15">
            <Link
              to={"/services"}
              className="font-medium uppercase bg-green-800 py-2 lg:py-3 px-4 lg:px-6 rounded-xl text-white"
            >
             BlackBottom Consulting Services
            </Link>
          
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 lg:col-start-6">
          <img src={heroIllus} className="lg:w-[800px]  lg:h-[820px]  " alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
