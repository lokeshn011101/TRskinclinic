import React, { useState, useEffect } from "react";
import AOS from "aos";
import Image from "next/image";

const ConsultUs = () => {
  const [winWidth, setWinWidth] = useState(0);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    setWinWidth(window.innerWidth);
  }, []);
  return (
    <>
      <div className="flex justify-around items-center w-full lg:mt-36 sm:mt-24 smm:mt-16 smm:hidden">
        <div className="w-9/12 flex flex-row justify-around items-center">
          <Image
            src="/Home/homeimg.png"
            layout="fill"
            alt="home"
            className="w-5/12  lg:ml-16 sm:ml-8 smm:ml-5"
            data-aos={winWidth <= 1000 ? "fade-down" : "fade-right"}
            data-aos-offset="-200"
          />
          <div className="w-7/12 lg:ml-16 sm:ml-8 smm:ml-5">
            <h2
              className="description lg:text-4xl uppercase md:text-xl sm:text-xl smm:text-xl md:mb-14 sm:mb-9 smm:mb-7 md:pr-20"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-offset="-500">
              consult our dermatologists online
            </h2>
            <div
              className="about-desc2 md:mb-10 sm:mb-7 smm:mb-4 md:pr-20"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-offset="-500">
              Dr. Tanuja Reddy and her expert team of medical professionals
              treat patients of all ages and skin types for a variety of skin
              conditions including mole removal, acne and rosacea treatment,
              eczema, psoriasis and more.
            </div>
            <div
              className="about-desc2 md:pr-20"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-offset="-500">
              Our state-of-the-art medical facility and skilled team provide
              patients with an unmatched level of expertise, experience and
              customer service.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-around items-center w-full lg:mt-36 sm:mt-24 smm:mt-16 sm:hidden">
        <div className="w-10/12 flex flex-col justify-around items-center">
          <h2
            className="description lg:text-4xl uppercase md:text-xl sm:text-xl smm:text-xl md:mb-14 sm:mb-9 smm:mb-7 md:pr-20 text-center"
            data-aos="fade-down">
            consult our dermatologists online
          </h2>
          <Image
            src="/Home/homeimg.png"
            alt="home"
            layout="fill"
            className="w-7/12 "
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-offset="100"
          />
          <div className="w-11/12  lg:my-16 sm:my-8 smm:my-5 lg:text-base md:text-base sm:text-sm smm:text-xs smm:text-center">
            <div
              className="about-desc2 md:mb-10 sm:mb-7 smm:mb-4 md:pr-20 w-full"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-offset="80">
              Dr. Tanuja Reddy and her expert team of medical professionals
              treat patients of all ages and skin types for a variety of skin
              conditions including mole removal, acne and rosacea treatment,
              eczema, psoriasis and more.
            </div>
            <div
              className="about-desc2 md:pr-20 w-full"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-offset="50">
              Our state-of-the-art medical facility and skilled team provide
              patients with an unmatched level of expertise, experience and
              customer service.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultUs;
