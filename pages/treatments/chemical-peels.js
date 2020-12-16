import React from "react";
import TreatmentsCard from "../../components/TreatmentsCard";
import TreatmentsSection from "../../components/TreatmentsSection";

const ChemicalPeels = () => {
  return (
    <>
      <TreatmentsCard Name={"Chemical Peel"} treatment="ChemicalPeels" />
      <div className="trdesc mx-auto w-3/4 lg:mt-36 md:mt-36 sm:mt-20 smm:mt-16 lg:mb-20 md:mb-16 sm:mb-12 smm:mb-9 mdd:text-center text-sm mdd:text-xs">
        A chemical peel is a skin-resurfacing procedure that can be applied to
        the face, hands, and neck. They’re used for the improvement of the
        appearance of the skin. During this procedure, chemical solutions will
        be applied to the area being treated, which can cause the skin to
        exfoliate and eventually peel off. These help in evening out the skin
        tone, reduce marks and fine lines.
      </div>

      <div className="mx-auto w-full">
        <h2 className="trhd2 w-3/4 mx-auto lg:text-4xl md:text-2xl sm:text-xl smm:text-lg mdd:text-center">
          Why should you get it done?
        </h2>
        <div className="w-3/4 trdesc mx-auto">
          Chemical peels can be used to treat a variation of skin problems
        </div>
        <div className="w-9/12 trdesc mx-auto lg:mb-20 md:mb-16 sm:mb-12 smm:mb-9 lg:text-2xl md:text-xl sm:text-lg smm:text-base mdd:text-center">
          <ul className="list-none lg:ml-5 md:ml-4 sm:ml-3 smm:ml-2">
            <li>Wrinkles and fine lines</li>
            <li>Sun Damage</li>
            <li>Acne Scars</li>
            <li>Uneven skin tone or redness</li>
            <li>Scars</li>
            <li>Melasma</li>
            <li>Hyperpigmentation</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto w-full">
        <h2 className="trhd2 w-3/4 mx-auto lg:text-4xl md:text-2xl sm:text-xl smm:text-lg mdd:text-center">
          What happens during a chemical peel?
        </h2>
        <div className="w-3/4 trdesc lg:mt-4 md:mt-3 sm:mt-2 smm:mt-1 mx-auto lg:mb-12 md:mb-10 sm:mb-8 smm:mb-5 mdd:text-center text-sm mdd:text-xs">
          Before getting a chemical peel, some patients need to follow a
          pre-peel skin care plan for 2 to 4 weeks. This plan can improve
          results and reduce potential side effects. On the day of your peel,
          you will first be prepped for the treatment. This includes cleansing
          your skin thoroughly. After you are prepped, The peel is applied
          quickly and evenly. Some peels are removed right away in 2 to 5
          minutes depending on your skin. Some peels are removed at home after 6
          to 7 hours.
        </div>
      </div>
    </>
  );
};

export default ChemicalPeels;
