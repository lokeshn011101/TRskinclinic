import React from "react";
import TreatmentsCard from "../../components/TreatmentsCard";
import TreatmentsSection from "../../components/TreatmentsSection";

const SkinHydration = () => {
  return (
    <>
      <TreatmentsCard
        Name={"Skin Hydration With Volite"}
        treatment="SkinHydration"
      />
      <div
        className="trdesc mx-auto sm:w-3/4 w-11/12 lg:mt-36 md:mt-36 sm:mt-20 smm:mt-16 lg:mb-20 md:mb-16 sm:mb-12 smm:mb-9 mdd:text-center text-sm mdd:text-xs"
        data-aos="fade-up"
      >
        Volite is an FDA-cleared injectable that can reduce the appearance of
        lines and wrinkles and achieve healthy skin at the same time. This skin
        booster treatment delivers hyaluronic acid (HA) directly into the dermis
        layer.
      </div>
      <div className="mx-auto w-full">
        <h2
          className="trhd2 sm:w-3/4 w-11/12 mx-auto lg:text-4xl md:text-2xl sm:text-xl smm:text-lg mdd:text-center"
          data-aos="fade-up"
        >
          Why should you get this treatment done?
        </h2>
        <div className="sm:w-3/4 w-11/12  trdesc mx-auto lg:mb-20 md:mb-36 sm:mb-32 smm:mb-9 lg:text-2xl md:text-xl sm:text-lg smm:text-base mdd:text-center">
          <div className="nlist">
            <div className="my-4 mr-4" data-aos="fade-up">
              It hydrates the skin
            </div>
            <div className="my-4 mr-4" data-aos="fade-up">
              It reduces rough and dry texture of the skin
            </div>
            <div className="my-4 mr-4" data-aos="fade-up">
              It evens out skin depressions
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full">
        <h2
          className="trhd2 sm:w-3/4 w-11/12 mx-auto lg:text-4xl md:text-2xl sm:text-xl smm:text-lg mdd:text-center"
          data-aos="fade-up"
        >
          Where can you get this done?
        </h2>
        <div
          className="sm:w-3/4 w-11/12 trdesc mx-auto mdd:text-center"
          data-aos="fade-up"
        >
          This skin booster treatment can be used on the
        </div>
        <div className="w-9/12 trdesc mx-auto lg:mb-20 md:mb-16 sm:mb-12 smm:mb-9 lg:text-2xl md:text-xl sm:text-lg smm:text-base mdd:text-center">
          <ul className="list-none lg:ml-5 md:ml-4 sm:ml-3 smm:ml-2">
            <li data-aos="fade-up">Face</li>
            <li data-aos="fade-up">Neck</li>
            <li data-aos="fade-up">Hands</li>
            <li data-aos="fade-up">D??colletage</li>
          </ul>
        </div>
      </div>
      <TreatmentsSection
        title="What does it do?"
        text="Hyaluronic acid and Volite is combined with the water in the skin to hydrate, enhance elasticity, and aid in the removal of fine lines. In addition to that,
it stimulates the body???s own natural collagen to improve skin quality."
        aosTitle="fade-up"
        aosText="fade-up"
      />
      <TreatmentsSection
        title="How is the procedure performed?"
        text="The treatment is delivered into the skin through injections. The treatment is performed under local anesthesia making it a relatively painless procedure."
        aosTitle="fade-up"
        aosText="fade-up"
      />
      <TreatmentsSection
        title="When will I see the results and How long do they last?"
        text="You can see the effects after the procedure, but significant results are visible after two weeks. Studies suggest that the results can last up to nine months and
offer noteworthy skin quality enhancement."
        aosTitle="fade-up"
        aosText="fade-up"
      />
      <TreatmentsSection
        title="Is there any downtime?"
        text="There is no downtime in this treatment. You can return to your normal routines after the treatment."
        aosTitle="fade-up"
        aosText="fade-up"
      />
    </>
  );
};

export default SkinHydration;
