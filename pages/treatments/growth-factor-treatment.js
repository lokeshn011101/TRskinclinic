import React from "react";
import TreatmentsCard from "../../components/TreatmentsCard";
import TreatmentsSection from "../../components/TreatmentsSection";
import FAQ from "../../components/FAQ";
import Image from "next/image";

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
            data-aos="fade-up"
          >
            <div className="md:w-1/12 mx-5 mdd:hidden">
              <Image width={40} height={40} src={`/${i}.png`} alt={`${i}`} />
            </div>
            <div className="md:w-11/12 flex md:flex-row flex-col md:justify-center justify-start items-center my-6 mdd:mx-auto">
              <div className="mx-5 mdd:w-9/12 md:w-3/12 mdd:mx-auto mr-8 mdd:mb-5">
                <Image
                  width={208}
                  height={208}
                  src={`/Treatments/GrowthFactorTreatment/${nums[i]}.png`}
                  alt={nums[i++]}
                />
              </div>
              <div className="md:w-9/12 flex flex-col mdd:items-center items-start justify-center text-left">
                <h3 className=" trhd2 lg:text-3xl md:text-xl sm:text-lg smm:text-base mb-3">
                  {item[0]}
                </h3>
                <div className="mdd:text-center">{item[1]}</div>
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
      "The results of the treatment are entirely natural, there are no side effects, since the patient’s own blood is used and provided that it is performed by a specialist doctor, it is sterile and specific.",
    ],
    [
      "Is there any downtime?",
      "The results of the treatment are entirely natural, there are no side effects, since the patient’s own blood is used and provided that it is performed by a specialist doctor, it is sterile and specific.",
    ],
    [
      "Does the treatment work on male pattern baldness?",
      "The treatment will not work for male pattern balding, in such cases a hair transplantation is advised and oral medications.",
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
      <div
        className="trdesc mx-auto w-11/12 sm:w-3/4 lg:mt-44 md:mt-36 sm:mt-20 smm:mt-16 lg:mb-20 md:mb-36 sm:mb-32 smm:mb-9 mdd:text-center text-sm mdd:text-xs"
        data-aos="fade-up"
      >
        It is a treatment for hair loss, facial rejuvenation and acne scars that
        uses the patient’s own blood.This treatment involves the injection of
        growth factors in the spots where thinning is observed or scars are
        visible.
      </div>
      <TreatmentsSection
        title="What is Scarring?"
        text="Scarring is a natural process that occurs as wounds heal. If a lesion is more than 5 mm deep or takes longer than 3-4 weeks to repair, the healing
process will leave a scar."
        aosTitle="fade-up"
        aosText="fade-up"
      />
      <TreatmentsSection
        title="How does Growth Factor act against hair loss?"
        text="Growth factors are proteins that exist in our bodies. They have the ability to stimulate the production of various types of cells involved in healing processes.
They can enhance the repair of damaged tissues by reactivating cells. With hair loss treatment, growth factors are multiplied, activating more cells.
It restores the function of hair follicles in the area where the injection is done, resulting in the growth of new hair from re-stimulated, formerly inactive follicles."
        aosTitle="fade-up"
        aosText="fade-up"
      />
      <div className="mx-auto w-full">
        <h2
          className="trhd2 w-11/12 sm:w-3/4 mx-auto lg:text-4xl md:text-2xl sm:text-xl smm:text-lg mdd:text-center"
          data-aos="fade-up"
        >
          Growth Factors Hair Loss Treatment - The Procedure
        </h2>
        <div className="w-9/12 trdesc mx-auto lg:mb-20 md:mb-36 sm:mb-32 smm:mb-9 lg:text-2xl md:text-xl sm:text-lg smm:text-base mdd:text-center">
          <RenderList data={benefits} />
        </div>
      </div>
      <div className="mx-auto w-full">
        <h2
          className="trhd2 w-11/12 sm:w-3/4 mx-auto lg:text-4xl md:text-2xl sm:text-xl smm:text-lg mdd:text-center"
          data-aos="fade-up"
        >
          Benefits of Growth Factor Treatment
        </h2>
        <div className="w-9/12 trdesc mx-auto lg:mb-20 md:mb-36 sm:mb-32 smm:mb-9 lg:text-2xl md:text-xl sm:text-lg smm:text-base mdd:text-center">
          <ul className="list-none lg:ml-5 md:ml-4 sm:ml-3 smm:ml-2">
            <li data-aos="fade-up">Prevents further hair loss</li>
            <li data-aos="fade-up">Strengthens already existing hair</li>
            <li data-aos="fade-up">Enhances hair growth</li>
            <li data-aos="fade-up">Absence of side effects</li>
            <li data-aos="fade-up">Painless removal of acne scars</li>
            <li data-aos="fade-up">Provides you with scar-free skin</li>
          </ul>
        </div>
      </div>

      <TreatmentsSection
        title="How many sittings does the treatment require?"
        text="GFC requires one sitting a month, over the span of three months and subsequently once every six months in order to maintain the result."
        aosTitle="fade-up"
        aosText="fade-up"
      />
      <TreatmentsSection
        title="What is the difference between PRP and Growth Factor?"
        text="PRP contains growth factors, chemokine factors, cytokine and adhesive proteins that have both mitogenic and chemotactic properties. GFC contains more
or less consistent levels of natural growth factors and hence provides consistent results without any side effect."
        aosTitle="fade-up"
        aosText="fade-up"
      />
      <FAQ data={faq} />
    </>
  );
};

export default GrowthFactorTreatment;
