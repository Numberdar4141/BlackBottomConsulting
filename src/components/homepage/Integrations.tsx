import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { integrationsCard } from "../../data/data";

function Integrations() {
  return (
    <section className=" stp-30 bg-black  sbp-30">
      <div className="container grid grid-cols-12">
        <div className="flex justify-start items-start col-span-12 lg:col-span-5 max-lg:sbp-15">
          <div className="  max-w-[600px] flex justify-start items-start flex-col">
            <p className="bg-green-800 py-3 px-5 rounded-xl text-white ">
            Business Plan
            </p>
            <h1 className="display-4 text-white  pt-4 pb-6">
            Navigating the Path to Success

            </h1>
            <p className="text-white">
              Experience seamless coordination with our comprehensive services.
              From accounting to payroll, we bring everything together in one
              place,
            </p>
          </div>
        </div>

        {integrationsCard.map(({ id, icon, title ,desc}, idx) => (
          <div
            key={id}
            className={` col-span-12 min-[500px]:col-span-6 lg:col-span-3 ${
              idx === 0
                ? " lg:col-start-7"
                : idx === 2
                ? "lg:col-start-4 min-[500px]:max-lg:order-2"
                : ""
            } ${
              idx % 2 === 0 ? "bg-green-800 " : ""
            }  hover:bg-white  group rounded-xl  duration-500 min-h-[250px] lg:min-h-[300px] flex justify-start items-start flex-col p-8`}
          >
            <div
              className={`text-4xl rounded-full text-green-800 group-hover:text-white group-hover:bg-green-800 p-4 ${
                idx % 2 === 0 ? "bg-white" : "bg-white"
              }`}
            >
              {icon}
            </div>
            <h4 className="heading-4 text-white group-hover:text-green-800 pt-6 w-[200px]">{title}</h4>
            <p className="pt-2 text-white group-hover:text-black ">{desc}</p>
            <div className="flex justify-end items-end w-full pt-10 lg:pt-5 text-xl font-medium">
              <Link
                to={"/services"}
                className="bg-white p-2 group-hover:bg-green-800 group-hover:text-white rounded-full shadow2 "
              >
                <GoArrowUpRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Integrations;
