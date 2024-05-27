import React from "react";

function AboutUs() {
  return (
    <div className="lg:h-[120vh] h-[200vh] py-[5%]  relative overflow-hidden px-[2rem]" id="about-us">
      <div className="h-[60%] blur-[250px] w-[25%] rounded-full absolute left-[-10%] top-[20%] z-[-10] bg-pri"></div>
      <div className="h-[60%] blur-[250px] w-[25%] rounded-full absolute right-[-10%] top-[20%] z-[-10] bg-pri"></div>
      <div className="flex justify-center items-center flex-col lg:gap-[2vh] gap-[5vh]">
        <h1 className="lg:text-[3vw] text-[5vw] h-[10vh] font-extrabold">
          <span className="text-pri">About</span> Us
        </h1>
        <h2 className="lg:text-[1.3vw] h-[15vh] font-bold lg:block hidden">
          Leading healthcare institution deticated to exceptional medical
          services and personlized care.
        </h2>
        <div className="h-[135vh] flex lg:flex-row flex-col lg:gap-[0%] gap-[5%] w-full items-center">
          <div className="w-[50%] lg:h-full h-[50vh] flex justify-center">
            <div className="lg:h-[40%] h-[100%]  lg:w-[40%] w-full shadow-2xl flex justify-start items-end relative left-[15%] bg-pri rounded-2xl">
              <div className="h-[90%] top-[-1%] w-full absolute bg-pri rounded-2xl z-[-1] left-[-17%] rotate-[-13deg]"></div>
              <img
                src="/portrait-doctor.jpg"
                alt=""
                className="h-[100%] w-full rounded-2xl"
              />
            </div>
          </div>
          <div className="w-1/2 flex flex-col lg:items-start items-center lg:gap-[2%] gap-[5vh]  lg:h-[100%]">
            <h1 className="font-bold lg:text-[1.5vw] text-[3.5vw]">Vision</h1>
            <div className="flex gap-[2%] w-full  items-start">
              <div className="h-[3px] w-[25px] bg-pri mt-[10px]"></div>
              <h1 className="lg:w-[80%] w-full font-semibold lg:text-[1vw] text-[3vw]">
                To be the premier healthcare provider, recognized for our
                excellence.in medical care, patient-centered approach, and
                commitment to advancing healthcare services, ultimately
                improving the health and well-being of our community.
              </h1>
            </div>
            <h1 className="font-bold lg:text-[1.5vw] text-[3.5vw]">Mission</h1>
            <div className="flex gap-[2%] w-full items-start">
              <div className="h-[3px] w-[25px] bg-pri mt-[10px]"></div>
              <h1 className="lg:w-[80%] lg:text-nowrap w-[110%] font-semibold lg:text-[1vw] text-[3vw]">
              Provide exceptional and comprehensive healthcare services
              </h1>
            </div>
            <div className="flex gap-[2%] items-start">
              <div className="h-[3px] w-[25px] bg-pri mt-[10px]"></div>
              <h1 className="lg:w-[80%] lg:text-nowrap w-[80%] font-semibold lg:text-[1vw] text-[3vw]">
              Prioritize patient-centered care and satisfaction
              </h1>
            </div>
            <div className="flex gap-[2%] items-start">
              <div className="h-[3px] w-[25px] bg-pri mt-[10px]"></div>
              <h1 className="lg:w-[80%] lg:text-nowrap w-[110%] font-semibold lg:text-[1vw] text-[3vw]">
              Foster a culture of continuous learning and innovation
              </h1>
            </div>
            <div className="flex gap-[2%] items-start">
              <div className="h-[3px] w-[25px] bg-pri mt-[10px]"></div>
              <h1 className="lg:w-[80%] lg:text-nowrap w-[110%] font-semibold lg:text-[1vw] text-[3vw]">
              Cultivate strong partnerships and collaborations
              </h1>
            </div>
           
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
