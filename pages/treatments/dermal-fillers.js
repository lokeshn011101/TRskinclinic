import React from "react";
import TreatmentsCard from "../../components/TreatmentsCard";
import TreatmentsSection from "../../components/TreatmentsSection";
import FAQ from "../../components/FAQ";

const DermalFillers = () => {
  const faq = [
    [
      "Do dermal fillers hurt?",
      "There may be a slight discomfort when the filler is being injected, but we can minimise this by applying a topical anaesthetic cream before treatment. Our fillers also contain a pre-mixed local anaesthetic which also helps make the procedure relatively painless.",
    ],
    [
      "Is there any downtime?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laborum, dolorem perspiciatis consequuntur nulla magni quae accusamus, earum consequatur libero officiis sit eum iusto cumque consectetur quidem neque laboriosam. Vero!",
    ],
  ];
  return (
    <>
      <TreatmentsCard Name={"Dermal Fillers"} treatment="DermalFillers" />
      <div className="trdesc mx-auto w-3/4 lg:mt-36 md:mt-36 sm:mt-20 smm:mt-16 lg:mb-20 md:mb-16 sm:mb-12 smm:mb-9 mdd:text-center text-sm mdd:text-xs">
        Dermal fillers are made up of proteins which are found naturally in our
        body. They add volume to certain areas on the face to hydrate,
        rejuvenate and enhance your facial features.
      </div>
      <TreatmentsSection
        title="Why do you need Dermal fillers?"
        text="As you age, your face naturally loses subcutaneous fat leading to
          hollowness or sagging. This makes your face look tired and worn out.
          The facial skin also stretches a bit, adding to the loss of facial
          volume. Dermal fillers can add the lost volume back to your face and
          enhance your skin."
      />

      <div className="mx-auto w-full">
        <h2 className="trhd2 w-3/4 mx-auto lg:text-4xl md:text-2xl sm:text-xl smm:text-lg mdd:text-center">
          What can dermal fillers do to enhance your skin?
        </h2>
        <div className="w-9/12 trdesc mx-auto lg:mb-20 md:mb-16 sm:mb-12 smm:mb-9 lg:text-2xl md:text-xl sm:text-lg smm:text-base mdd:text-center">
          <ul className="list-none lg:ml-5 md:ml-4 sm:ml-3 smm:ml-2">
            <li>Improve under eye hollows</li>
            <li>Provide a mid face lift</li>
            <li>Enhance the cheek area</li>
            <li>Enhance lips & reduce lip lines</li>
            <li>Define the chin & Jawline</li>
            <li>Reduce lines around the mouth</li>
            <li>Define the Nose</li>
          </ul>
        </div>
      </div>
      <TreatmentsSection
        title="How long do dermal fillers last?"
        text="This varies from person to person, but most dermal fillers will last between six and 18 month depending on which fillers are being used. After this period
of time, your skin will look better than before as the dermal filler attracts water to the area, hydrating your skin and rejuvenating it. In addition
to that it stops the skin from sagging."
      />
      <TreatmentsSection
        title="Will it look natural?"
        text="When fillers are used in the appropriate amount and placed in the right location, the results are beautiful, natural and youthful. Fillers are not meant
to create totally different features rather they enhance your already existing features."
      />
      <TreatmentsSection
        title="Is there a difference between Anti-Wrinkle Treatment and Dermal filler?"
        text="Anti-Wrinkle treatment works on relaxing the muscles and softening lines whereas fillers add small amounts of volume in the right places to enhance
the features of the face."
      />
      <FAQ data={faq} />
    </>
  );
};

export default DermalFillers;
