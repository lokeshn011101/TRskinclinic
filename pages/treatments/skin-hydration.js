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
      <div className="trdesc mx-auto w-3/4 lg:mt-36 md:mt-36 sm:mt-20 smm:mt-16 lg:mb-20 md:mb-16 sm:mb-12 smm:mb-9 mdd:text-center text-sm mdd:text-xs">
        Volite is an FDA-cleared injectable that can reduce the appearance of
        lines and wrinkles and achieve healthy skin at the same time. This skin
        booster treatment delivers hyaluronic acid (HA) directly into the dermis
        layer.
      </div>
      <div className="mx-auto w-full">
        <h2 className="trhd2 w-3/4 mx-auto lg:text-4xl md:text-2xl sm:text-xl smm:text-lg mdd:text-center">
          Why should you get this treatment done?
        </h2>
        <div className="w-9/12 trdesc mx-auto lg:mb-20 md:mb-36 sm:mb-32 smm:mb-9 lg:text-2xl md:text-xl sm:text-lg smm:text-base mdd:text-center">
          <div className="nlist">
            <div className="my-4 mr-4 flex flex-row justify-start items-center">
              It hydrates the skin
            </div>
            <div className="my-4 mr-4">
              It reduces rough and dry texture of the skin
            </div>
            <div className="my-4 mr-4">It evens out skin depressions</div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full">
        <h2 className="trhd2 w-3/4 mx-auto lg:text-4xl md:text-2xl sm:text-xl smm:text-lg mdd:text-center">
          Where can you get this done?
        </h2>
        <div className="w-3/4 trdesc mx-auto">
          This skin booster treatment can be used on the
        </div>
        <div className="w-9/12 trdesc mx-auto lg:mb-20 md:mb-16 sm:mb-12 smm:mb-9 lg:text-2xl md:text-xl sm:text-lg smm:text-base mdd:text-center">
          <ul className="list-none lg:ml-5 md:ml-4 sm:ml-3 smm:ml-2">
            <li>Face</li>
            <li>Neck</li>
            <li>Hands</li>
            <li>Décolletage</li>
          </ul>
        </div>
      </div>
      <TreatmentsSection
        title="What does it do?"
        text="Hyaluronic acid and Volite is combined with the water in the skin to hydrate, enhance elasticity, and aid in the removal of fine lines. In addition to that,
it stimulates the body’s own natural collagen to improve skin quality."
      />
      <TreatmentsSection
        title="How is the procedure performed?"
        text="The treatment is delivered into the skin through injections. The treatment is performed under local anesthesia making it a relatively painless procedure."
      />
      <TreatmentsSection
        title="When will I see the results and How long do the they last?"
        text="You can see effects after the procedure, but significant results are visible after two weeks. Studies suggest that the results can last up to nine months and
offer noteworthy skin quality enhancement."
      />
      <TreatmentsSection
        title="Is there any downtime?"
        text="There is no downtime in this treatment. You can return to you normal routines after the treatment."
      />
    </>
  );
};

export default SkinHydration;
