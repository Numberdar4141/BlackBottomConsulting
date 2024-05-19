import { ourValues } from "../../data/data";
import SectionHeadingCenter from "../global/SectionHeadingCenter";

function OurValues() {
  return (
    <section className=" stp-30 sbp-30 text-white bg-black">
      <div className="container">
        <SectionHeadingCenter
          sectionName="Our Company"
          sectionTitle="Our Company Portfolio"
          sectionDesc="The Black Bottom Consulting LLC is your trusted partner in business strategy and financial services. With a deep commitment to helping businesses succeed and grow, we offer a range of services designed to elevate your business to new heights."
        />
        <div className="grid grid-cols-9 gap-6 stp-15">
          {ourValues.map(({ id, icon, title, desc }) => (
            <div
              key={id}
              className="col-span-12 min-[450px]:col-span-6 md:col-span-3 flex justify-center items-center flex-col"
            >
              <div className="text-6xl text-green-800">{icon}</div>
              <h4 className="heading-4 pb-4 pt-3">{title}</h4>
              <p className="pb-5 text-center">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurValues;
