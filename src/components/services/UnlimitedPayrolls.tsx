import FadeLeft from "../animation/FadeLeft";
import FadeRight from "../animation/FadeRight";
import img from "/images/SWOT.png";

function UnlimitedPayrolls() {
  return (
    <section className="stp-30 sbp-30">
      <div className="container grid grid-cols-12 gap-6 max-xxl:overflow-hidden">
        <div className="col-span-12 md:col-span-6">
          <FadeLeft>
            <div className="  flex justify-start items-start flex-col">
              
              <h2 className="display-4 lg:text-[50px] pt-4 pb-6">
              SWOT ANALYSIS : Harnessing Strategic Insights


              </h2>
              <p className=" text-bodyText">
              SWOT analysis, a powerful tool for strategic planning, allows us to uncover your business's strengths, weaknesses, opportunities, and threats. By examining these critical factors, we gain valuable insights that help chart a course for your business's success.              </p>
            </div>
          </FadeLeft>
        </div>
        <div className="col-span-12 md:col-span-6 xxl:col-start-8">
          <FadeRight>
            <div className=" flex justify-center items-center">
              <img src={img} alt="" />
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}

export default UnlimitedPayrolls;
