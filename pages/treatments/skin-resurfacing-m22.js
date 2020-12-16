import React from "react";
import TreatmentsCard from "../../components/TreatmentsCard";
import TreatmentsSection from "../../components/TreatmentsSection";

const SkinResurfacing = () => {
  return (
    <>
      <TreatmentsCard Name={"Skin Resurfacing"} treatment="SkinResurfacing" />
      <div className="trdesc mx-auto w-3/4 lg:mt-36 md:mt-36 sm:mt-20 smm:mt-16 lg:mb-20 md:mb-16 sm:mb-12 smm:mb-9 mdd:text-center text-sm mdd:text-xs">
        Skin Resurfacing with M22™ by Lumenis is a powerful and effective form
        of anti-ageing laser treatment to remove unwanted brown spots, acne and
        surgical scars. This service uses laser technology along with a
        skin-cooling device, to prevent any damage to your skin. It stimulates
        rapid healing for the outer layers of your skin and penetrates deep into
        the dermis, to stimulate your skin to create collagen and elastin
        naturally for a more youthful appearance.
      </div>
      <TreatmentsSection
        title="Why do we choose the M22™ Laser?"
        text="At TR Skin Clinic, we are committed to providing our patients with the most effective skin resurfacing laser for a range of skin conditions. M22™ Lumeni is one
the best in the world currently and we are happy to offer it to you."
      />

      <div className="mx-auto w-full">
        <h2 className="trhd2 w-3/4 mx-auto lg:text-4xl md:text-2xl sm:text-xl smm:text-lg mdd:text-center">
          What can Skin Resurfacing fix?
        </h2>
        <div className="w-3/4 trdesc mx-auto">
          Laser resurfacing can be used to treat:
        </div>
        <div className="w-9/12 trdesc mx-auto lg:mb-20 md:mb-16 sm:mb-12 smm:mb-9 lg:text-2xl md:text-xl sm:text-lg smm:text-base mdd:text-center">
          <ul className="list-none lg:ml-5 md:ml-4 sm:ml-3 smm:ml-2">
            <li>Fine lines & wrinkles</li>
            <li>Age spots</li>
            <li>Uneven texture</li>
            <li>Sun-damaged skin</li>
            <li>Mild to moderate acne scars</li>
            <li>Surgical scars, accident scars, chicken pox scars</li>
            <li>Stretch marks</li>
          </ul>
        </div>
      </div>
      <TreatmentsSection
        title="Is the procedure painful?"
        text="The procedure is a non invasive treatment. You will only feel a pinch as the laser hits your skin. Anesthetic cream is applied before hand
so it reduces any discomfort."
      />
      <TreatmentsSection
        title="What to expect after the treatment?"
        text="You may experience warmth, redness, mild swelling in the  treated area, which will most likely fade within a few hours of treatment. The skin may have
a pinkish tone for 5- 6 days."
      />
    </>
  );
};

export default SkinResurfacing;
