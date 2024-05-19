import LinkButton from "../ui/LinkButton";
import img from "/images/graph.png";

function DedicatedSupport() {
  return (
    <section className="stp-30 sbp-30 text-white bg-black">
      <div className="container grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-6 lg:col-span-5 max-md:order-2 overflow-hidden">
          <img
            src={img}
            alt=""
            className="hover:scale-110 duration-500 w-full h-full"
          />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-start-7 flex justify-center items-start flex-col">
         
          <h2 className="display-4 lg:text-[50px] pt-4 pb-6">We are the powerhouse of the world’s fastest economies</h2>
          <p className=" text-white pb-8">
          Our built-in commission tool gets your agents paid quickly and accurately every time they close. Pay your salaried employees on AutoPilot, and easily approve hours for any support staff and contractors.
          </p>
          <LinkButton link="/contact" text="Contact Us" />
        </div>
      </div>
    </section>
  );
}

export default DedicatedSupport;
