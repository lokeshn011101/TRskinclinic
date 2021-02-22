import React, { useEffect } from "react";
import TreatmentsCard from "../../components/TreatmentsCard";
import FAQ from "../../components/FAQ";
import Image from "next/image";
import AOS from "aos";

const Li = ({ data }) => {
  return data.map((item) => {
    return (
      <li className="beneli mx-auto mdd:m-1" key={item}>
        {item}
      </li>
    );
  });
};

const RenderItem = ({ heading, data, skintype }) => {
  return (
    <div className="titem w-1/5 h-full mdd:h-auto mdd:w-3/4 flex flex-col mdd:justify-center mdd:items-center mdd:mt-10 mt-14 bg-skin-aboveLight ml-1">
      <h2 className="trhd2 w-full lg:text-2xl md:text-xl sm:text-lg smm:text-lg mdd:text-center p-2 pl-4 bg-skin-medium">
        {heading}
      </h2>
      <ul className="mdd:mb-5 mb-7 mx-auto">
        <Li data={data} />
      </ul>
      <h2 className="trhd2 lg:text-2xl md:text-xl sm:text-lg smm:text-lg mdd:text-center pl-4">
        Skin Type
      </h2>
      <div className="trdesc mdd:text-center p-2 pb-4 pl-4">{skintype}</div>
    </div>
  );
};

const ChemicalPeels = () => {
  const faq = [
    [
      "When will I see the results?",
      "Once your skin heals, you will see the results. Healing time ranges from 1 day for a refreshing or lunchtime peel to 14 days or longer for a deep peel. To get the results you seek from a  refreshing peel or lunchtime peel, you may need to have 3 to 5 peels.",
    ],
    [
      "Do chemical peels hurt?",
      "In general, users only feel a mild stinging sensation during light or medium chemical peels. After the procedure, a mild pain reliever may be given to get rid of any discomfort, if necessary",
    ],
    [
      "How do I know what chemical peel is right for me?",
      "Our doctors will check your skin after a consultation & take you through the chemical peels suitable for your skin concerns.",
    ],
  ];
  const benefits = [
    [
      "Makes skin pores small",
      "Great for cleaning acne",
      "Reduces the effect of sun damage",
      "Increases collagen production",
    ],
    [
      "Brighter, Smoother Skin",
      "Treats Acne And Blackheads",
      "Reduce Fine Lines, And Wrinkles",
      "Fades Dark Spots And Uneven Skin Tone",
    ],
    [
      "Immediate Results",
      "Exfoliates Dead Skin",
      "Improvement Of Uneven Skin Pigmentation And Melasma",
      "Younger, And More Refreshed Skin Post-Treatment",
    ],
    [
      "Decreases The Appearance Of Scars",
      "Treat Melasma",
      "Anti-Aging Effect",
      "Reduces Hyperpigmentation",
    ],
    [
      "Immediate Results & Minimal Downtime",
      "Brighter, Smoother Skin",
      "Great For Clearing Acne",
      "Reduces The Effect Of Sun Damage",
    ],
  ];
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <TreatmentsCard Name={"Chemical Peel"} treatment="ChemicalPeels" />
      <div
        className="trdesc mx-auto w-3/4 mdd:w-11/12 lg:mt-40 md:mt-36 sm:mt-20 smm:mt-16 lg:mb-20 md:mb-16 sm:mb-12 smm:mb-9 mdd:text-center text-sm mdd:text-xs"
        data-aos="fade-up"
      >
        A chemical peel is a skin-resurfacing procedure that can be applied to
        the face, hands, and neck. They’re used for the improvement of the
        appearance of the skin. During this procedure, chemical solutions will
        be applied to the area being treated, which can cause the skin to
        exfoliate and eventually peel off. These help in evening out the skin
        tone, reduce marks and fine lines.
      </div>

      <div className="mx-auto w-full">
        <h2
          className="trhd2 w-3/4 mdd:w-11/12 mx-auto lg:text-4xl md:text-2xl sm:text-xl smm:text-lg mdd:text-center"
          data-aos="fade-up"
        >
          Why should you get it done?
        </h2>
        <div
          className="w-3/4 mdd:w-11/12 trdesc mx-auto text-sm mdd:text-xs mdd:text-center"
          data-aos="fade-up"
        >
          Chemical peels can be used to treat a variation of skin problems
        </div>
        <div className="w-9/12 mdd:w-11/12 trdesc mx-auto lg:mb-20 md:mb-16 sm:mb-12 smm:mb-9 lg:text-2xl md:text-xl sm:text-lg smm:text-base mdd:text-center">
          <ul className="list-none lg:ml-5 md:ml-4 sm:ml-3 smm:ml-2">
            <li data-aos="fade-up">Wrinkles and fine lines</li>
            <li data-aos="fade-up">Sun Damage</li>
            <li data-aos="fade-up">Acne Scars</li>
            <li data-aos="fade-up">Uneven skin tone or redness</li>
            <li data-aos="fade-up">Scars</li>
            <li data-aos="fade-up">Melasma</li>
            <li data-aos="fade-up">Hyperpigmentation</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto w-full">
        <h2
          className="trhd2 w-3/4 mdd:w-11/12 mx-auto lg:text-4xl md:text-2xl sm:text-xl smm:text-lg mdd:text-center"
          data-aos="fade-up"
        >
          What happens during a chemical peel?
        </h2>
        <div
          className="w-3/4 mdd:w-11/12 trdesc lg:mt-4 md:mt-3 sm:mt-2 smm:mt-1 mx-auto lg:mb-12 md:mb-10 sm:mb-8 smm:mb-5 mdd:text-center text-sm mdd:text-xs"
          data-aos="fade-up"
        >
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
      <div className="flex md:flex-row flex-col justify-around items-center mx-auto lg:w-5/12 w-7/12">
        <div className="mdd:w-9/12 mx-auto" data-aos="fade-right">
          <div className="mx-auto divimgg">
            <Image
              src="/Treatments/ChemicalPeels/two.png"
              alt="cp1"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="md:mt-0 mt-8 mdd:w-9/12 mx-auto" data-aos="fade-left">
          <div className="mx-auto divimgg">
            <Image
              src="/Treatments/ChemicalPeels/one.png"
              alt="cp1"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
      <div className="md:mt-20 mt-16">
        <h2
          className="trhd2 w-3/4 mdd:w-11/12 mx-auto lg:text-4xl md:text-2xl sm:text-xl smm:text-lg mdd:text-center"
          data-aos="fade-up"
        >
          What type of Chemical Peels can I get and What are their benefits?
        </h2>
        <div
          className="w-11/12 mx-auto flex flex-row justify-start items-start mdd:justify-center mdd:items-center mdd:flex-col md:hidden"
          data-aos="fade-up"
        >
          <RenderItem
            data={benefits[0]}
            heading="Glycolic Peel"
            skintype="All Skin Types"
          />
          <RenderItem
            data={benefits[1]}
            heading="Salicylic Acid"
            skintype="Combination, Oily Or Acne Prone Skin"
          />
          <RenderItem
            data={benefits[2]}
            heading="Lactic Acid"
            skintype="All Skin Types, Particularly Those With Acne Scarring"
          />
          <RenderItem
            data={benefits[3]}
            heading="Kojic Acid"
            skintype="All Skin Types"
          />
          <RenderItem
            data={benefits[4]}
            heading="TCA"
            skintype="All Skin Types"
          />
        </div>
        <div
          className="w-11/12 mx-auto mb-14 mt-6 mdd:hidden"
          data-aos="fade-up"
        >
          <table className=" h-full w-full mdd:mt-10 mt-5 bg-skin-aboveLight mb-10">
            <tr>
              <th className="w-1/5 border-r-2 border-white">
                <h2 className="trhd2 lg:text-2xl md:text-xl sm:text-lg smm:text-lg text-center p-4 bg-skin-medium">
                  Glycolic Peel
                </h2>
              </th>
              <th className="w-1/5 border-r-2 border-white">
                <h2 className="trhd2 lg:text-2xl md:text-xl sm:text-lg smm:text-lg text-center p-4 bg-skin-medium">
                  Salicylic Acid
                </h2>
              </th>
              <th className="w-1/5 border-r-2 border-white">
                <h2 className="trhd2 lg:text-2xl md:text-xl sm:text-lg smm:text-lg text-center p-4 bg-skin-medium">
                  Lactic Acid
                </h2>
              </th>
              <th className="w-1/5 border-r-2 border-white">
                <h2 className="trhd2 lg:text-2xl md:text-xl sm:text-lg smm:text-lg text-center p-4 bg-skin-medium">
                  Kojic Acid
                </h2>
              </th>
              <th className="w-1/5 border-l-2 border-white">
                <h2 className="trhd2 lg:text-2xl md:text-xl sm:text-lg smm:text-lg text-center p-4 bg-skin-medium">
                  TCA
                </h2>
              </th>
            </tr>
            <tr>
              <td className="px-4 py-2 border-r-2 border-white">
                {benefits[0][0]}
              </td>
              <td className="px-4 py-2 border-r-2 border-white">
                {benefits[1][0]}
              </td>
              <td className="px-4 py-2 border-r-2 border-white">
                {benefits[2][0]}
              </td>
              <td className="px-4 py-2 border-r-2 border-white">
                {benefits[3][0]}
              </td>
              <td className="px-4 py-2 border-l-2 border-white">
                {benefits[4][0]}
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-r-2 border-white">
                {benefits[0][1]}
              </td>
              <td className="px-4 py-2 border-r-2 border-white">
                {benefits[1][1]}
              </td>
              <td className="px-4 py-2 border-r-2 border-white">
                {benefits[2][1]}
              </td>
              <td className="px-4 py-2 border-r-2 border-white">
                {benefits[3][1]}
              </td>
              <td className="px-4 py-2 border-l-2 border-white">
                {benefits[4][1]}
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-r-2 border-white">
                {benefits[0][2]}
              </td>
              <td className="px-4 py-2 border-r-2 border-white">
                {benefits[1][2]}
              </td>
              <td className="px-4 py-2 border-r-2 border-white">
                {benefits[2][2]}
              </td>
              <td className="px-4 py-2 border-r-2 border-white">
                {benefits[3][2]}
              </td>
              <td className="px-4 py-2 border-l-2 border-white">
                {benefits[4][2]}
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-r-2 border-white">
                {benefits[0][3]}
              </td>
              <td className="px-4 py-2 border-r-2 border-white">
                {benefits[1][3]}
              </td>
              <td className="px-4 py-2 border-r-2 border-white">
                {benefits[2][3]}
              </td>
              <td className="px-4 py-2 border-r-2 border-white">
                {benefits[3][3]}
              </td>
              <td className="px-4 py-2 border-l-2 border-white">
                {benefits[4][3]}
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-r-2 border-white">
                {benefits[0][4]}
              </td>
              <td className="px-4 py-2 border-r-2 border-white">
                {benefits[1][4]}
              </td>
              <td className="px-4 py-2 border-r-2 border-white">
                {benefits[2][4]}
              </td>
              <td className="px-4 py-2 border-r-2 border-white">
                {benefits[3][4]}
              </td>
              <td className="px-4 py-2 border-l-2 border-white">
                {benefits[4][4]}
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-r-2 border-white trhd2 lg:text-2xl md:text-xl sm:text-lg">
                Skin Type
              </td>
              <td className="px-4 py-2 border-r-2 border-white trhd2 lg:text-2xl md:text-xl sm:text-lg">
                Skin Type
              </td>
              <td className="px-4 py-2 border-r-2 border-white trhd2 lg:text-2xl md:text-xl sm:text-lg">
                Skin Type
              </td>
              <td className="px-4 py-2 border-r-2 border-white trhd2 lg:text-2xl md:text-xl sm:text-lg">
                Skin Type
              </td>
              <td className="px-4 py-2 border-l-2 border-white trhd2 lg:text-2xl md:text-xl sm:text-lg">
                Skin Type
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-r-2 border-white trdesc">
                "All Skin Types"
              </td>
              <td className="px-4 py-2 border-r-2 border-white trdesc">
                "Combination, Oily Or Acne Prone Skin"
              </td>
              <td className="px-4 py-2 border-r-2 border-white trdesc">
                "All Skin Types, Particularly Those With Acne Scarring"
              </td>
              <td className="px-4 py-2 border-r-2 border-white trdesc">
                "All Skin Types"
              </td>
              <td className="px-4 py-2 border-l-2 border-white trdesc">
                "All Skin Types"
              </td>
            </tr>
          </table>
        </div>
      </div>
      <FAQ data={faq} />
    </>
  );
};

export default ChemicalPeels;
