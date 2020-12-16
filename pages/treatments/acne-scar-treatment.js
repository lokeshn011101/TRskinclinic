import React from "react";
import TreatmentsCard from "../../components/TreatmentsCard";
import TreatmentsSection from "../../components/TreatmentsSection";

const AcneScarTreatment = () => {
  return (
    <>
      <TreatmentsCard
        Name={"Acne Scar Treatment"}
        treatment="AcneScarTreatment"
      />
      <div className="trdesc mx-auto w-3/4 lg:mt-36 md:mt-36 sm:mt-20 smm:mt-36 lg:mb-20 md:mb-36 sm:mb-32 smm:mb-9 mdd:text-center text-sm mdd:text-xs">
        Acne is a skin condition that occurs when your hair follicles become
        clogged with oil and dead skin cells. It often causes blackheads,
        whiteheads or pimples, and usually appears on the face, forehead, chest,
        upper back and shoulders.
      </div>
      <div className="mx-auto w-full">
        <h2 className="trhd2 w-3/4 mx-auto lg:text-4xl md:text-2xl sm:text-xl smm:text-lg mdd:text-center">
          Causes
        </h2>
        <div className="w-3/4 trdesc mx-auto">
          Four main factors cause acne:
        </div>
        <div className="w-9/12 trdesc mx-auto lg:mb-20 md:mb-36 sm:mb-32 smm:mb-9 lg:text-2xl md:text-xl sm:text-lg smm:text-base mdd:text-center">
          <div className="nlist">
            <div className="my-4 mr-4 flex flex-row justify-start items-center">
              Excess oil production
            </div>
            <div className="my-4 mr-4">
              Hair follicles clogged by oil and dead skin cells
            </div>
            <div className="my-4 mr-4">Bacteria</div>
            <div className="my-4 mr-4">
              Excess activity of a type of hormone
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full">
        <h2 className="trhd2 w-3/4 mx-auto lg:text-4xl md:text-2xl sm:text-xl smm:text-lg mdd:text-center">
          What are Acne Scars?
        </h2>
        <div className="w-3/4 trdesc mx-auto">
          Acne scars are the dark and sometimes swollen pits left in the skin
          long after the pimple has healed and are divided into four categories
          according to appearance and cause:
        </div>
        <div className="w-9/12 trdesc mx-auto lg:mb-20 md:mb-36 sm:mb-32 smm:mb-9 lg:text-2xl md:text-xl sm:text-lg smm:text-base mdd:text-center">
          <ul className="list-none lg:ml-5 md:ml-4 sm:ml-3 smm:ml-2">
            <li>Ice pick (Small pits)</li>
            <li>Rolling (Caused by damage underneath the epidermis)</li>
            <li>Boxcar (Scars that have sharp edges)</li>
            <li>
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
      />
      <TreatmentsSection
        title="Treatment for Acne"
        text="Depending on the grade of your acne, we may prescribe different medications. Our prescribed medication will give you clear skin with a 95% improvement
in the appearance of your skin. You will not be plagued by pimples or scars even after you stop the treatment. Additionally we do have chemical peels
in case you have an important event and need to get rid of your acne immediately. "
      />
      <TreatmentsSection
        title="What other acne scar treatment options are available?"
        text="There are many treatments for acne scarring such as Growth Factor Treatment, Chemical Peels or M-22 laser. These treatments have minimal downtime
and side effects. The only post-care is to use sunscreen."
      />
    </>
  );
};

export default AcneScarTreatment;
