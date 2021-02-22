import React from "react";
import TreatmentsCard from "../../components/TreatmentsCard";
import TreatmentsSection from "../../components/TreatmentsSection";
import FAQ from "../../components/FAQ";

const SkinResurfacing = () => {
  const faq = [
    [
      "How long does the effect of the treatment last?",
      "The favorable effects of this service are long lasting. Since the skin keeps ageing, regular maintenance is required.",
    ],
    [
      "Is there any downtime?",
      "No, there is no downtime. You can get back to your daily routine after the treatment and use makeup the next day. ",
    ],
    [
      "How long are the sessions?",
      "One session lasts for about 30-45 minutes. You may need to take 3-4 sessions in  intervals of 3-4 weeks in combination with creams as suggested by our doctor. ",
    ],
  ];
  return (
    <>
      <TreatmentsCard Name={"Skin Resurfacing"} treatment="SkinResurfacing" />
      <div
        className="trdesc mx-auto w-11/12 sm:w-3/4 lg:mt-36 md:mt-36 sm:mt-20 smm:mt-16 lg:mb-20 md:mb-16 sm:mb-12 smm:mb-9 mdd:text-center text-sm mdd:text-xs"
        data-aos="fade-up"
      >
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
        text="At TR Skin Clinic, we are committed to providing our patients with the most effective skin resurfacing laser for a range of skin conditions. M22™ Lumenis is one
the best in the world currently and we are happy to offer it to you."
        aosTitle="fade-up"
        aosText="fade-up"
      />

      <div className="mx-auto w-full">
        <h2
          className="trhd2 w-11/12 sm:w-3/4 mx-auto lg:text-4xl md:text-2xl sm:text-xl smm:text-lg mdd:text-center"
          data-aos="fade-up"
        >
          What can Skin Resurfacing fix?
        </h2>
        <div
          className="w-11/12 sm:w-3/4 trdesc mx-auto mdd:text-center"
          data-aos="fade-up"
        >
          Laser resurfacing can be used to treat:
        </div>
        <div className="w-9/12 trdesc mx-auto lg:mb-20 md:mb-16 sm:mb-12 smm:mb-9 lg:text-2xl md:text-xl sm:text-lg smm:text-base mdd:text-center">
          <ul className="list-none lg:ml-5 md:ml-4 sm:ml-3 smm:ml-2">
            <li data-aos="fade-up">Fine lines & wrinkles</li>
            <li data-aos="fade-up">Age spots</li>
            <li data-aos="fade-up">Uneven texture</li>
            <li data-aos="fade-up">Sun-damaged skin</li>
            <li data-aos="fade-up">Mild to moderate acne scars</li>
            <li data-aos="fade-up">
              Surgical scars, accident scars, chicken pox scars
            </li>
            <li data-aos="fade-up">Stretch marks</li>
          </ul>
        </div>
      </div>
      <TreatmentsSection
        title="Is the procedure painful?"
        text="The procedure is a non invasive treatment. You will only feel a pinch as the laser hits your skin. Anesthetic cream is applied before hand
so it reduces any discomfort."
        aosTitle="fade-up"
        aosText="fade-up"
      />
      <TreatmentsSection
        title="What to expect after the treatment?"
        text="You may experience warmth, redness, mild swelling in the  treated area, which will most likely fade within a few hours of treatment. The skin may have
a pinkish tone for 5- 6 days."
        aosTitle="fade-up"
        aosText="fade-up"
      />
      <FAQ data={faq} />
    </>
  );
};

export default SkinResurfacing;
