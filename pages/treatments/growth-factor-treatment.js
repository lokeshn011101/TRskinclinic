import React from "react";
import TreatmentsCard from "../../components/TreatmentsCard";
import TreatmentsSection from "../../components/TreatmentsSection";
import FAQ from "../../components/FAQ";

const RenderList = ({ data }) => {
  let i = 1;
  const nums = ["one", "two", "three", "four", "five", "six"];
  return (
    <ul className="nlist">
      {data.map((item) => {
        return (
          <li
            key={item}
            className="my-5 p-0 flex flex-row items-center text-sm mdd:text-xs"
          >
            <img
              className="w-7 h-7 mx-5 mdd:hidden"
              src={`/${i}.png`}
              alt={`${i}`}
            />
            <div className="flex md:flex-row flex-col md:justify-center justify-start items-center my-6 mdd:mx-auto">
              <img
                src={`/Treatments/GrowthFactorTreatment/${nums[i]}.png`}
                alt={nums[i++]}
                className="mx-5 mr-8 md:w-52 md:h-52 w-44 h-44 mdd:mb-5"
              />
              <div className="flex flex-col mdd:items-center items-start justify-center text-left">
                <h3 className=" trhd2 lg:text-3xl md:text-xl sm:text-lg smm:text-base mb-3">
                  {item[0]}
                </h3>
                <div>{item[1]}</div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const GrowthFactorTreatment = () => {
  const faq = [
    [
      "Is it painful?",
      "The treatment is performed under local anesthesia so it is a relatively painless procedure.",
    ],
    [
      "Is it safe?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laborum, dolorem perspiciatis consequuntur nulla magni quae accusamus, earum consequatur libero officiis sit eum iusto cumque consectetur quidem neque laboriosam. Vero!",
    ],
    [
      "Is there any downtime?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laborum, dolorem perspiciatis consequuntur nulla magni quae accusamus, earum consequatur libero officiis sit eum iusto cumque consectetur quidem neque laboriosam. Vero!",
    ],
    [
      "Does the treatment work on male pattern baldness?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laborum, dolorem perspiciatis consequuntur nulla magni quae accusamus, earum consequatur libero officiis sit eum iusto cumque consectetur quidem neque laboriosam. Vero!",
    ],
  ];
  const benefits = [
    ["Blood Collection", "A small amount of blood is taken from the patient"],
    [
      "Centrifugation",
      "The blood is centrifuged at a certain speed and for a determined time, in order to isolate the growth factors.",
    ],
    [
      "DNA Activator",
      "The growth factors are then activated by the addition of nucleotide solution and calcium ions.",
    ],
    [
      "Injected into the follicles",
      "Injected in the areas of the scalp where hair is thinning.",
    ],
  ];
  return (
    <>
      <TreatmentsCard
        Name={"Growth Factor Treatment"}
        treatment="GrowthFactorTreatment"
      />
      <div className="trdesc mx-auto w-3/4 lg:mt-44 md:mt-36 sm:mt-20 smm:mt-36 lg:mb-20 md:mb-36 sm:mb-32 smm:mb-9 mdd:text-center text-sm mdd:text-xs">
        It is a treatment for hair loss, facial rejuvenation and acne scars that
        uses the patient’s own blood.This treatment involves the injection of
        growth factors in the spots where thinning is observed or scars are
        visible.
      </div>
      <TreatmentsSection
        title="What is Scarring?"
        text="Scarring is a natural process that occurs as wounds heal. If a lesion is more than 5 mm deep or takes longer than 3-4 weeks to repair, the healing
process will leave a scar."
      />
      <TreatmentsSection
        title="How does Growth Factor act against hair loss?"
        text="Growth factors are proteins that exist in our bodies. They have the ability to stimulate the production of various types of cells involved in healing processes.
They can enhance the repair of damaged tissues by reactivating cells. With hair loss treatment, growth factors are multiplied, activating more cells.
It restores the function of hair follicles in the area where the injection is done, resulting in the growth of new hair from re-stimulated, formerly inactive follicles."
      />
      <div className="mx-auto w-full">
        <h2 className="trhd2 w-3/4 mx-auto lg:text-4xl md:text-2xl sm:text-xl smm:text-lg mdd:text-center">
          Growth Factors Hair Loss Treatment - The Procedure
        </h2>
        <div className="w-9/12 trdesc mx-auto lg:mb-20 md:mb-36 sm:mb-32 smm:mb-9 lg:text-2xl md:text-xl sm:text-lg smm:text-base mdd:text-center">
          <RenderList data={benefits} />
        </div>
      </div>
      <div className="mx-auto w-full">
        <h2 className="trhd2 w-3/4 mx-auto lg:text-4xl md:text-2xl sm:text-xl smm:text-lg mdd:text-center">
          Benefits of Growth Factor Treatment
        </h2>
        <div className="w-9/12 trdesc mx-auto lg:mb-20 md:mb-36 sm:mb-32 smm:mb-9 lg:text-2xl md:text-xl sm:text-lg smm:text-base mdd:text-center">
          <ul className="list-none lg:ml-5 md:ml-4 sm:ml-3 smm:ml-2">
            <li>Prevents further hair loss</li>
            <li>Strengthens already existing hair</li>
            <li>Enhances hair growth</li>
            <li>Absence of side effects</li>
            <li>Painless removal of acne scars</li>
            <li>Provides you with scar-free skin</li>
          </ul>
        </div>
      </div>

      <TreatmentsSection
        title="How many sittings does the treatment require?"
        text="GFC is one sitting a month for 3 sittings and subsequently once every six months in order to maintain the result."
      />
      <TreatmentsSection
        title="What is the difference between PRP and Growth Factor?"
        text="PRP contains growth factors, chemokine factors, cytokine and adhesive proteins that have both mitogenic and chemotactic properties. GFC contains more
or less consistent levels of natural growth factors and hence provides consistent results without any side effect."
      />
      <FAQ data={faq} />
    </>
  );
};

export default GrowthFactorTreatment;
