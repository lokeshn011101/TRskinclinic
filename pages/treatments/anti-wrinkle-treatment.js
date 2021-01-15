import React from "react";
import TreatmentsCard from "../../components/TreatmentsCard";
import TreatmentsSection from "../../components/TreatmentsSection";
import FAQ from "../../components/FAQ";

const AntiWrinkleTreatment = () => {
  const faq = [
    [
      "Does the procedure hurt?",
      "Some patients report that being injected with Anti-Wrinkle Treatment  feels like a pinch. We may use ice to numb the treatment area. Or, if you are concerned about discomfort, we may apply a topical numbing cream before administering your treatment.",
    ],
    [
      "How much downtime is required?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laborum, dolorem perspiciatis consequuntur nulla magni quae accusamus, earum consequatur libero officiis sit eum iusto cumque consectetur quidem neque laboriosam. Vero!",
    ],
    [
      "Is BOTOX and Anti-Wrinkle Treatment the same?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laborum, dolorem perspiciatis consequuntur nulla magni quae accusamus, earum consequatur libero officiis sit eum iusto cumque consectetur quidem neque laboriosam. Vero!",
    ],
  ];
  return (
    <>
      <TreatmentsCard
        Name={"Anti-Wrinkle Treatment"}
        treatment="AntiWrinkleTreatments"
      />
      <div
        className="trdesc mx-auto w-3/4 lg:mt-36 md:mt-36 sm:mt-20 smm:mt-16 lg:mb-20 md:mb-16 sm:mb-12 smm:mb-9 mdd:text-center text-sm mdd:text-xs"
        data-aos="fade-up"
      >
        Anti-Wrinkle Treatment is used to reduce skin wrinkles and treat certain
        muscle conditions. It relaxes the muscles and gives you smoother skin in
        the applied area.
      </div>
      <TreatmentsSection
        title="Why choose Anti-Wrinkle Treatment?"
        text="The appearance of wrinkles can make one’s face appear older than it is. Also with wrinkles once they become static (present without movement)
It becomes hard to treat. So starting treatments early will prevent this. Anti-Wrinkle Treatment  works beneath the surface and relaxes the muscle
to help make the skin look visibly smoother."
        aosTitle="fade-up"
        aosText="fade-up"
      />

      <div className="mx-auto w-full">
        <h2
          className="trhd2 w-3/4 mx-auto lg:text-4xl md:text-2xl sm:text-xl smm:text-lg mdd:text-center"
          data-aos="fade-up"
        >
          Some common treatment areas include:
        </h2>
        <div className="w-9/12 trdesc mx-auto lg:mb-20 md:mb-16 sm:mb-12 smm:mb-9 lg:text-2xl md:text-xl sm:text-lg smm:text-base mdd:text-center">
          <ul className="list-none lg:ml-5 md:ml-4 sm:ml-3 smm:ml-2">
            <li data-aos="fade-up">Frown lines</li>
            <li data-aos="fade-up">Crow’s feet</li>
            <li data-aos="fade-up">Bunny lines</li>
            <li data-aos="fade-up">Facial slimming</li>
            <li data-aos="fade-up">Nasal flares</li>
            <li data-aos="fade-up">Horizontal forehead lines</li>
            <li data-aos="fade-up">Smoker’s lines</li>
            <li data-aos="fade-up">Gummy smile</li>
            <li data-aos="fade-up">Chin dimpling</li>
          </ul>
        </div>
      </div>
      <TreatmentsSection
        title="Are the results of this treatment permanent?"
        text="With results lasting for 4 to 5 months for moderate to severe frown lines. Remember that results vary from patient to patient, so we will plan your
next appointment based on your results and aesthetic goals."
        aosTitle="fade-up"
        aosText="fade-up"
      />
      <TreatmentsSection
        title="How much time does the treatment take?"
        text="The actual injection process takes a quick 10 minutes. We will discuss your treatment goals and perform a facial analysis to determine the appropriate
treatment areas for you."
        aosTitle="fade-up"
        aosText="fade-up"
      />
      <TreatmentsSection
        title="When will I notice the results?"
        text="You may begin to notice results within 24 to 48 hours but it takes upto 2 or 3 weeks for the full results."
        aosTitle="fade-up"
        aosText="fade-up"
      />
      <FAQ data={faq} />
    </>
  );
};

export default AntiWrinkleTreatment;
