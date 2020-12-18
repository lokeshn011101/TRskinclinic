import React from "react";

const TreatmentsSection = ({ title, text, subtext = "" }) => {
  return (
    <div className="mx-auto w-full">
      <h2 className="trhd2 w-3/4 mx-auto lg:text-4xl md:text-2xl sm:text-xl smm:text-lg mdd:text-center">
        {title}
      </h2>
      <div className="w-3/4 trdesc mx-auto">{subtext}</div>
      <div className="w-3/4 trdesc lg:mt-4 md:mt-3 sm:mt-2 smm:mt-1 mx-auto lg:mb-24 md:mb-20 sm:mb-16 smm:mb-11 mdd:text-center text-sm mdd:text-xs">
        {text}
      </div>
    </div>
  );
};

export default TreatmentsSection;
