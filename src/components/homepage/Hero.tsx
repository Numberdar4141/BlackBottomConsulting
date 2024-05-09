import { Link } from "react-router-dom";
import StaggerEffectTwo from "../animation/StaggerEffectTwo";

import heroIllus from "/images/H1.png";

function Hero() {
  const text = "Success";
  const animateWord = text.split("");
  return (
    <section className=" bg-repeat bg-[url('/images/BG1.png')] stp-30  overflow-hidden">
      
     
      <div className="absolute   bg-white max-w-full lg:w-[1176px]  overflow-hidden"></div>
      <div className="xxl:ml-[calc((100%-1296px)/2)] lg:max-xxl:py-10 max-xxl:container relative z-20 max-lg:pt-15 text-black grid grid-cols-12 ">
        
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-center gap-2">
          <p className="uppercase text-base lg:text-xl font-semibold">
           Innovative Solutions for Market Challenges{" "}
          </p>
          <div className="display-2 ">
         <span className="lg:text-[80px]">Empowering Business </span> 
            <div className="text-green-800 inline-flex">
              {animateWord.map((word, idx) => (
                <StaggerEffectTwo key={idx} id={idx}>
                  <span>{word}</span>
                </StaggerEffectTwo>
              ))}
            </div>
             <span className="lg:text-[80px]"> Together</span>
          </div>
          <p className="max-w-[550px]">
          At Black Bottom Consulting, we're dedicated to empowering businesses with innovative solutions, serving as your strategic partner for success
          </p>
          <div className="flex justify-start items-center gap-4 pt-6 lg:pt-8 pb-15">
            <Link
              to={"/contact"}
              className="font-medium bg-green-800 py-2 lg:py-3 px-4 lg:px-6 rounded-full text-white"
            >
              Get Started
            </Link>
          
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 lg:col-start-6">
          <img src={heroIllus} className="w-[800px]   " alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
