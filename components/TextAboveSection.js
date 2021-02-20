import React from "react";

const TextAboveSection = ({
  title,
  text,
  aosTitle = "",
  delayTitle = "",
  offsetTitle = "",
  aosText = "",
  delayText = "",
  offsetText = "",
}) => {
  return (
    <div className="lg:py-12 md:py-9 sm:py-6 smm:py-3 w-11/12 flex flex-col justify-center items-center mx-auto text-center lg:mt-16 sm:mt-8 smm:mt-5">
      <h2
        className="about-head2 lg:text-4xl md:text-2xl sm:text-xl smm:text-lg uppercase lg:mb-4 md:mb-3 sm:mb-2 smm:mb-1 lg:mt-8 md:mt-6 sm:mt-4 smm:mt-2"
        data-aos={aosTitle}
        data-aos-offset={offsetTitle}
        data-aos-delay={delayTitle}
      >
        {title}
      </h2>
      <div
        className="about-desc2 w-4/5 lg:text-base md:text-base sm:text-sm smm:text-xs smm:w-full"
        data-aos={aosText}
        data-aos-offset={offsetText}
        data-aos-delay={delayText}
      >
        {text}
      </div>
    </div>
  );
};

export default TextAboveSection;
