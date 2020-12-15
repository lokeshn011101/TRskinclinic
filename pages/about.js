import React from "react";
import Card from "../components/Card";

const About = () => {
  return (
    <div>
      {/* <img src="/about1.png" alt="ready to transform your skin?" /> */}
      <Card />
      <div className="flex flex-row w-11/12 mx-auto lg:my-20 md:my-16 sm:my-12 smm:my-10">
        <img
          className="w-4/12 ml-9"
          src="/about2.png"
          alt="client of our clinic"
        />
        <div className="w-8/12 flex flex-col justify-center items-start lg:ml-5 md:ml-4 sm:ml-3 smm:ml-2">
          <h2 className="about-heading w-full lg:text-4xl md:text-2xl sm:text-xl smm:text-lg leading-10 lg:mb-4 md:mb-3 sm:mb-2 smm:mb-1">
            WELCOME TO TANUJA REDDY SKIN CLINIC
          </h2>
          <div className="w-10/12 about-desc lg:text-base md:text-base sm:text-sm smm:text-xs">
            <div className="lg:mb-8 md:mb-6 sm:mb-4 smm:mb-2">
              Located in Chennai committed to provide excellence in a
              professional and gracious ambience. We are well known for our
              outstanding patient care quality services. Our mission is to
              constantly strive for the satisfaction of our clientele.
            </div>
            <div>
              With over 20 years of experience in aesthetics, We provide a full
              service skin care clinic which focuses on a non-invasive approach
              with the latest technology to ensure faster & better results.
            </div>
          </div>
        </div>
      </div>
      <div className="lg:py-24 md:py-20 sm:py-16 smm:py-10 w-11/12 flex flex-col justify-center items-center mx-auto text-center">
        <h1 className="about-head2 lg:text-4xl md:text-2xl sm:text-xl smm:text-lg uppercase lg:mb-4 md:mb-3 sm:mb-2 smm:mb-1 lg:mt-8 md:mt-6 sm:mt-4 smm:mt-2">
          Top Dermatology clinics in Chennai
        </h1>
        <div className="about-desc2 w-4/5 lg:text-base md:text-base sm:text-sm smm:text-xs">
          <div className="lg:mb-8 md:mb-5 sm:mb-4 smm:mb-2">
            Our skin clinic is a leader among Top Dermatology clinics in Chennai
            providing cost effective, efficient, caring, personalised attention
            with the state of art techniques in a soothing and pleasant
            environment.
          </div>
          <div>
            We inform our patients about various skin problems and provide them
            with the required treatment at an affordable cost. This helps our
            patients to make the right decision for their skin and its well
            being.
          </div>
        </div>
      </div>
      <div className="lg:py-12 md:py-9 sm:py-6 smm:py-3 w-11/12 flex flex-col justify-center items-center mx-auto text-center">
        <h2 className="about-head2  lg:text-4xl md:text-2xl sm:text-xl smm:text-lg uppercase lg:mb-4 md:mb-3 sm:mb-2 smm:mb-1 lg:mt-8 md:mt-6 sm:mt-4 smm:mt-2">
          Meet Our DOCTORS
        </h2>
        <div className="about-desc2 w-4/5 lg:text-base md:text-base sm:text-sm smm:text-xs">
          Our doctors always believe in going the extra mile for their patients
          and hence they have been able to deliver the best dermatology and
          aesthetic care for more than 20 years.
        </div>
      </div>
      <div className="about-desc2 flex flex-col justify-center items-center lg:flex-row lg:justify-center lg:items-center mx-auto lg:py-12 md:py-9 sm:py-6 smm:py-3 w-10/12 mb-32">
        <div className="flex flex-col lg:justify-center lg:items-center w-9/12 lg:w-1/2 mdd:my-10  transition-all duration-500 ease-in-out lg:hover:w-10/12">
          <div className="md:w-7/12 mx-auto">
            <img src="/tanujareddy.png" alt="tanujareddy" />
            <div className="text-white bg-skin-medium md:p-8 mdd:p-5 lg:text-base md:text-base sm:text-sm smm:text-xs italic transition-all duration-500 ease-in-out hover:bg-skin-dark cursor-default font-light">
              She is an experienced dermatologist who wears her heart on her
              sleeve. She worked in the U.K for a decade as a consultant. Later,
              she moved back to India because she believes in affordable
              skincare for all and has stayed here for more than twenty years.
            </div>
          </div>
          <div className="flex  flex-col  justify-center items-center">
            <h2 className="name lg:text-4xl md:text-2xl sm:text-xl smm:text-lg uppercase lg:my-4 md:my-3 sm:my-2 smm:my-2">
              DR TANUJA REDDY
            </h2>
            <h3 className="role text-footer-bluei lg:text-lg md:text-base sm:text-sm smm:text-xs">
              Senior Consultant Dermatologist
            </h3>
          </div>
        </div>
        <div className="flex flex-col lg:justify-center lg:items-center w-9/12 lg:w-1/2 mdd:my-8">
          <div className="md:w-7/12 mx-auto">
            <img src="/abhinayareddy.png" alt="abhinayareddy" />
            <div className="abhinayareddy text-white bg-skin-medium mdd:p-5 lg:text-base md:text-base sm:text-sm smm:text-xs italic transition-all duration-500 ease-in-out hover:bg-skin-dark cursor-default font-light">
              She was inspired by her mom to pursue dermatology as her career.
              She is the head of the Department Of Cosmetology at TR. She earned
              her diploma from the American Academy Of Aesthetics.
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="name lg:text-4xl md:text-2xl sm:text-xl smm:text-lg uppercase lg:my-4 md:my-3 sm:my-2 smm:my-2">
              DR ABHINAYA REDDY
            </h2>
            <h3 className="role text-footer-bluei lg:text-lg md:text-base sm:text-sm smm:text-xs">
              Dermatologist And Cosmetologist
            </h3>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
