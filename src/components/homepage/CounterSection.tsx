import NumberCounter from "../ui/NumberCounter";

function CounterSection() {
  return (
    <section className=" bg-black bg-cover stp-30 sbp-30 relative ">
      <div className="container text-white flex justify-between items-center gap-8 sm:gap-4 md:gap-8 lg:gap-16 max-sm:flex-col">
        <div className="text-center max-w-[280px]">
          <p className="display-4 pb-3">
            <NumberCounter start={1} end={10} /> +
          </p>
          <h1 className="text-[30px]">Years of Experience</h1>
          <p className="lg:mt-[20px]">
          Proven track record in the investment industry
          </p>
        </div>
        <div className="h-[120px] w-[2px] bg-white/70 mt-8 max-sm:hidden"></div>
        <div className="text-center max-w-[280px]">
          <p className="display-4 pb-3">
            <NumberCounter start={1} end={10} /> +
          </p>
          <h1 className="text-[30px]">Years of Experience</h1>
          <p className="lg:mt-[20px]">
          Proven track record in the investment industry
          </p>
        </div>
        <div className="h-[120px] w-[2px] bg-white/70 mt-8 max-sm:hidden"></div>
        <div className="text-center max-w-[280px]">
          <p className="display-4 pb-3">
            <NumberCounter start={1} end={8} /> Weeks
          </p>
          <p>average time it takes to switch to Accupay - and often less</p>
        </div>
      </div>
    </section>
  );
}

export default CounterSection;
