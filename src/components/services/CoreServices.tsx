
import { coreServices } from "../../data/data";
import StaggerEffect from "../animation/StaggerEffectOne";

function CoreServices() {
  return (
    <section className="stp-30 sbp-30">
      <div className="container">
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center max-w-[600px]  flex-col">
            <h1 className="display-4">Our Core Services</h1>
            <p className="text-bodyText text-center pt-6">
              hile we go so much further and do so much more for clients, these
              core services help provide a framework to provide you with
              relevant, reliable & real-time reporting.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 stp-15 gap-6">
          {coreServices.map(({ id, icon, title, desc}, idx) => (
            <div className="col-span-12 sm:col-span-6 md:col-span-4 " key={id}>
              <StaggerEffect id={idx}>
                <div className="flex justify-start items-start flex-col p-6 shadow-xl rounded-xl  lg:p-10 group border hover:shadow-2xl border-strokeColor  duration-500">
                  <div className="bg-softBg1 p-4 rounded-full text-green-800 group-hover:bg-mainTextColor group-hover:text-white duration-500 text-5xl">
                    {icon}
                  </div>
                 
                    <h4 className="heading-4 pb-5 pt-8  duration-300">
                      {title}
                    </h4>
                 
                  <p className=" text-bodyText lg:pr-4">{desc}</p>
                </div>
              </StaggerEffect>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreServices;
