import React from "react";
import TreatmentsCard from "../../components/TreatmentsCard";
import TreatmentsSection from "../../components/TreatmentsSection";
import FAQ from "../../components/FAQ";
import Image from "next/image";

const RenderList = ({ data }) => {
  let i = 1;
  return (
    <ul className="nlist">
      {data.map((item) => {
        return (
          <li
            key={item}
            className="my-5 p-0 flex flex-row items-center"
            data-aos="fade-up"
          >
            <div className="inline-block mr-3">
              <Image width={40} height={40} src={`/${i}.png`} alt={`${i++}`} />
            </div>
            <div>{item}</div>
          </li>
        );
      })}
    </ul>
  );
};

const AcneScarTreatment = () => {
  const faq = [
    [
      "Are Acne Scars Permanent?",
      "No, acne scars are not permanent. They can be resolved through non - surgical treatments and prescription medicine at TR Skin Clinic.",
    ],
    [
      "What are the results of laser acne treatment?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laborum, dolorem perspiciatis consequuntur nulla magni quae accusamus, earum consequatur libero officiis sit eum iusto cumque consectetur quidem neque laboriosam. Vero!",
    ],
  ];
  const benefits = [
    "Excess oil production",
    "Hair follicles clogged by oil and dead skin cells",
    "Bacteria",
    "Excess activity of a type of hormone",
  ];
  return (
    <>
      <TreatmentsCard
        Name={"Acne Scar Treatment"}
        treatment="AcneScarTreatment"
      />
      <div
        className="trdesc mx-auto w-3/4 lg:mt-36 md:mt-36 sm:mt-20 smm:mt-36 lg:mb-20 md:mb-36 sm:mb-32 smm:mb-9 mdd:text-center text-sm mdd:text-xs"
        data-aos="fade-up"
      >
        Acne is a skin condition that occurs when your hair follicles become
        clogged with oil and dead skin cells. It often causes blackheads,
        whiteheads or pimples, and usually appears on the face, forehead, chest,
        upper back and shoulders.
      </div>
      <div className="mx-auto w-full">
        <h2
          className="trhd2 w-3/4 mx-auto lg:text-4xl md:text-2xl sm:text-xl smm:text-lg mdd:text-center"
          data-aos="fade-up"
        >
          Causes
        </h2>
        <div className="w-3/4 trdesc mx-auto" data-aos="fade-up">
          Four main factors cause acne:
        </div>
        <div className="w-9/12 trdesc mx-auto lg:mb-20 md:mb-36 sm:mb-32 smm:mb-9 lg:text-2xl md:text-xl sm:text-lg smm:text-base mdd:text-center">
          <RenderList data={benefits} />
        </div>
      </div>
      <div className="mx-auto w-full">
        <h2
          className="trhd2 w-3/4 mx-auto lg:text-4xl md:text-2xl sm:text-xl smm:text-lg mdd:text-center"
          data-aos="fade-up"
        >
          What are Acne Scars?
        </h2>
        <div className="w-3/4 trdesc mx-auto" data-aos="fade-up">
          Acne scars are the dark and sometimes swollen pits left in the skin
          long after the pimple has healed and are divided into four categories
          according to appearance and cause:
        </div>
        <div className="w-9/12 trdesc mx-auto lg:mb-20 md:mb-36 sm:mb-32 smm:mb-9 lg:text-2xl md:text-xl sm:text-lg smm:text-base mdd:text-center">
          <ul className="list-none lg:ml-5 md:ml-4 sm:ml-3 smm:ml-2">
            <li data-aos="fade-up">Ice pick (Small pits)</li>
            <li data-aos="fade-up">
              Rolling (Caused by damage underneath the epidermis)
            </li>
            <li data-aos="fade-up">Boxcar (Scars that have sharp edges)</li>
            <li data-aos="fade-up">
              Hypertrophic (Raised and bumpy because of excess scar tissue under
              the skin)
            </li>
          </ul>
        </div>
      </div>
      <TreatmentsSection
        title="How Do People Get Acne Scars?"
        text="Surprisingly, not all acne scars arise due to picking the outbreak area. The skin on your face is  extremely sensitive and if you suffer from extreme bouts
of intense inflammation, acne scars are a possibility."
        aosTitle="fade-up"
        aosText="fade-up"
      />
      <TreatmentsSection
        title="Treatment for Acne"
        text="Depending on the grade of your acne, we may prescribe different medications. Our prescribed medication will give you clear skin with a 95% improvement
in the appearance of your skin. You will not be plagued by pimples or scars even after you stop the treatment. Additionally we do have chemical peels
in case you have an important event and need to get rid of your acne immediately. "
        aosTitle="fade-up"
        aosText="fade-up"
      />
      <TreatmentsSection
        title="What other acne scar treatment options are available?"
        text="There are many treatments for acne scarring such as Growth Factor Treatment, Chemical Peels or M-22 laser. These treatments have minimal downtime
and side effects. The only post-care is to use sunscreen."
        aosTitle="fade-up"
        aosText="fade-up"
      />
      <FAQ data={faq} />
    </>
  );
};

export default AcneScarTreatment;
