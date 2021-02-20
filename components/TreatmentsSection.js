import React from "react";

const TreatmentsSection = ({
  title,
  text,
  subtext = "",
  aosTitle = "",
  delayTitle = "",
  offsetTitle = "",
  aosSubText = "",
  delaySubText = "",
  offsetSubText = "",
  aosText = "",
  delayText = "",
  offsetText = "",
}) => {
  return (
    <div className="mx-auto w-full">
      <h2
        className="trhd2 w-11/12 sm:w-3/4 mx-auto lg:text-4xl md:text-2xl sm:text-xl smm:text-lg mdd:text-center"
        data-aos={aosTitle}
        data-aos-offset={offsetTitle}
        data-aos-delay={delayTitle}
      >
        {title}
      </h2>
      <div
        className="w-11/12 sm:w-3/4 trdesc mx-auto"
        data-aos={aosSubText}
        data-aos-offset={offsetSubText}
        data-aos-delay={delaySubText}
      >
        {subtext}
      </div>
      <div
        className="w-11/12 sm:w-3/4 trdesc lg:mt-4 md:mt-3 sm:mt-2 smm:mt-1 mx-auto lg:mb-24 md:mb-20 sm:mb-16 smm:mb-11 mdd:text-center text-sm mdd:text-xs"
        data-aos={aosText}
        data-aos-offset={offsetText}
        data-aos-delay={delayText}
      >
        {text}
      </div>
    </div>
  );
};

export default TreatmentsSection;
