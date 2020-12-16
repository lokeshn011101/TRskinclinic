import React from "react";
import TreatmentsCard from "../../components/TreatmentsCard";
import TreatmentsSection from "../../components/TreatmentsSection";

const AntiWrinkleTreatment = () => {
  return (
    <>
      <TreatmentsCard
        Name={"Anti-Wrinkle Treatment"}
        treatment="AntiWrinkleTreatments"
      />
      <div className="trdesc mx-auto w-3/4 lg:mt-36 md:mt-36 sm:mt-20 smm:mt-16 lg:mb-20 md:mb-16 sm:mb-12 smm:mb-9 mdd:text-center text-sm mdd:text-xs">
        Anti-Wrinkle Treatment is used to reduce skin wrinkles and treat certain
        muscle conditions. It relaxes the muscles and gives you smoother skin in
        the applied area.
      </div>
      <TreatmentsSection
        title="Why choose Anti-Wrinkle Treatment?"
        text="The appearance of wrinkles can make one’s face appear older than it is. Also with wrinkles once they become static (present without movement)
It becomes hard to treat. So starting treatments early will prevent this. Anti-Wrinkle Treatment  works beneath the surface and relaxes the muscle
to help make the skin look visibly smoother."
      />

      <div className="mx-auto w-full">
        <h2 className="trhd2 w-3/4 mx-auto lg:text-4xl md:text-2xl sm:text-xl smm:text-lg mdd:text-center">
          Some common treatment areas include:
        </h2>
        <div className="w-9/12 trdesc mx-auto lg:mb-20 md:mb-16 sm:mb-12 smm:mb-9 lg:text-2xl md:text-xl sm:text-lg smm:text-base mdd:text-center">
          <ul className="list-none lg:ml-5 md:ml-4 sm:ml-3 smm:ml-2">
            <li>Frown lines</li>
            <li>Crow’s feet</li>
            <li>Bunny lines</li>
            <li>Facial slimming</li>
            <li>Nasal flares</li>
            <li>Horizontal forehead lines</li>
            <li>Smoker’s lines</li>
            <li>Gummy smile</li>
            <li>Chin dimpling</li>
          </ul>
        </div>
      </div>
      <TreatmentsSection
        title="Are the results of this treatment permanent?"
        text="With results lasting for 4 to 5 months for moderate to severe frown lines. Remember that results vary from patient to patient, so we will plan your
next appointment based on your results and aesthetic goals."
      />
      <TreatmentsSection
        title="How much time does the treatment take?"
        text="The actual injection process takes a quick 10 minutes. We will discuss your treatment goals and perform a facial analysis to determine the appropriate
treatment areas for you."
      />
      <TreatmentsSection
        title="When will I notice the results?"
        text="You may begin to notice results within 24 to 48 hours but it takes upto 2 or 3 weeks for the full results."
      />
    </>
  );
};

export default AntiWrinkleTreatment;
