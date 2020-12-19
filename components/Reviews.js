import React, { useEffect, useState } from "react";
import AOS from "aos";

const Reviews = ({ review, name, delay = "" }) => {
  const [winWidth, setWinWidth] = useState(0);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    setWinWidth(window.innerWidth);
  }, []);
  return (
    <div
      className="flex flex-col justify-center md:items-start items-center lg:text-sm md:text-sm sm:text-xs smm:text-xs"
      data-aos={winWidth <= 1000 ? "fade-up" : "fade-left"}
      data-aos-delay={delay}
      data-aos-offset="10"
    >
      <div className="flex flex-row justify-center md:items-start items-center lg:mb-2 md:mb-2 sm:mb-1 smm:mb-1">
        <img src="/Home/icons.png" alt="star" className="h-2 md:h-4" />
        <img src="/Home/icons.png" alt="star" className="h-2 md:h-4 ml-1" />
        <img src="/Home/icons.png" alt="star" className="h-2 md:h-4 ml-1" />
        <img src="/Home/icons.png" alt="star" className="h-2 md:h-4 ml-1" />
        <img src="/Home/icons.png" alt="star" className="h-2 md:h-4 ml-1" />
      </div>
      <div className="review lg:mb-5 md:mb-4 sm:mb-3 smm:mb-2 mdd:text-center">
        {review}
      </div>
      <div className="w-full review lg:mb-8 md:mb-7 sm:mb-5 smm:mb-3 flex md:justify-start items-center justify-end">
        <div>{name}</div>
      </div>
    </div>
  );
};

export default Reviews;
