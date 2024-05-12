import { SyntheticEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = () => toast("Thanks for subscribing!");

function CTASectiont() {
  const [email, setEmail] = useState("");
  const [isEmpty, setIsEmpty] = useState<boolean | null>(null);

  function handleSubmit(e: SyntheticEvent<HTMLFormElement, SubmitEvent>) {
    e.preventDefault();
    if (email) {
      notify();
      setEmail("");
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }
  return (
    <section className="relative after:absolute after:bg-black after:bottom-0 after:right-0 after:left-0 after:h-1/2">
      <div className="container bg-green-800 rounded-xl py-12 sm:py-20 px-4 sm:px-10 md:px-20 lg:px-40 relative z-10">
       
        <p className="display-3 text-center text-white !leading-[130%]">
          Make BlackBottom Part Of Your Work And Get Daily Update
        </p>
        <form onSubmit={handleSubmit} className=" pt-6 sm:pt-10  relative">
          <div className="flex justify-center items-center gap-3 max-[500px]:flex-col">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="border border-mainTextColor outline-none bg-white py-3 sm:py-4 px-4 md:px-8 max-[500px]:w-full  lg:w-2/4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className=" bg-white py-3 text-green-800 rounded-xl font-semibold sm:py-4 px-4 md:px-8 ">
              Subscribe Now
            </button>
          </div>
          <p
            className={` text-white text-center pt-2 ${
              isEmpty ? "visible opacity-100 z-0 " : " invisible opacity-0"
            } duration-500`}
          >
            Please enter your email
          </p>
        </form>
      </div>
      <ToastContainer position="bottom-left" />
    </section>
  );
}

export default CTASectiont;
