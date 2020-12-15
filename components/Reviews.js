import React from "react";

const Reviews = ({ review, name }) => {
  return (
    <div className="flex flex-col justify-center md:items-start items-center lg:text-sm md:text-sm sm:text-xs smm:text-xs">
      <div className="flex flex-row justify-center md:items-start items-center lg:mb-2 md:mb-2 sm:mb-1 smm:mb-1">
        <img src="/icons.png" alt="star" className="h-2 md:h-4" />
        <img src="/icons.png" alt="star" className="h-2 md:h-4 ml-1" />
        <img src="/icons.png" alt="star" className="h-2 md:h-4 ml-1" />
        <img src="/icons.png" alt="star" className="h-2 md:h-4 ml-1" />
        <img src="/icons.png" alt="star" className="h-2 md:h-4 ml-1" />
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
