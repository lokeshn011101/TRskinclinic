import React from "react";
import TreatmentsCard from "../../components/TreatmentsCard";
import TreatmentsSection from "../../components/TreatmentsSection";
import FAQ from "../../components/FAQ";

const RenderList = ({ data, data2 }) => {
  let i = 1;
  return (
    <ul className="nlist ">
      {data.map((item) => {
        return (
          <li key={item} className="md:my-7 p-0 text-sm mdd:text-xs">
            <div className=" flex flex-row justify-start items-start">
              <img
                className="inline-block mr-3 mdd:hidden"
                src={`/${i}.png`}
                alt={`${i++}`}
              />
              <h2 className="lg:text-4xl w-full md:text-2xl sm:text-xl smm:text-lg trhd2 mdd:text-center">
                {item[0]}
              </h2>
            </div>
            <div className="md:ml-14 md:mt-3 mdd:text-center">{item[1]}</div>
          </li>
        );
      })}
      <div className="text-sm mdd:text-x">{data2}</div>
    </ul>
  );
};

const SkinTags = () => {
  const faq = [
    [
      "When to contact us?",
      "If a corn or callus becomes very painful or inflamed, contact us. If you have diabetes or poor blood flow, visit us before self-treating a corn or  callus because even a minor injury to your foot can lead to an infected  open sore (ulcer).",
    ],
    [
      "Can I do other activities after corn treatmenT?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laborum, dolorem perspiciatis consequuntur nulla magni quae accusamus, earum consequatur libero officiis sit eum iusto cumque consectetur quidem neque laboriosam. Vero!",
    ],
    [
      "Are the surgical treatments painful?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laborum, dolorem perspiciatis consequuntur nulla magni quae accusamus, earum consequatur libero officiis sit eum iusto cumque consectetur quidem neque laboriosam. Vero!",
    ],
  ];
  const benefits1 = [
    ["Hyfrecation", "We will use heat to remove the skin tag."],
    [
      "Surgery",
      "This simply involves cutting off the skin tag at its base with surgical scissors. The size and location of the skin tag will  determine the need for stitches which we rarely do. We use anesthetic injections so there is no pain.",
    ],
  ];
  const benefits2 = [
    [
      "Curettage",
      "This involves scraping away the bumps with a small scooping instrument.",
    ],
    [
      "Electrocautery",
      "This involves using a small probe with an electric  current to burn away the bumps.",
    ],
  ];
  return (
    <>
      <TreatmentsCard Name={"Skin Tags"} treatment="SkinTags" />
      <div className="w-full md:mt-44 mt-20">
        <TreatmentsSection
          title="What are corns?"
          text="Corns and calluses are thick, hardened layers of skin that develop when your skin tries to defend itself against friction and pressure. They most often appear
on the feet and toes or hands and fingers."
        />
      </div>

      <div className="mx-auto w-full">
        <h2 className="trhd2 w-3/4 mx-auto lg:text-4xl md:text-2xl sm:text-xl smm:text-lg mdd:text-center">
          What are the symptoms?
        </h2>
        <div className="w-3/4 trdesc mx-auto">
          You may have a corn or a callus if you notice:
        </div>
        <div className="w-9/12 trdesc mx-auto lg:mb-20 md:mb-36 sm:mb-32 smm:mb-9 lg:text-2xl md:text-xl sm:text-lg smm:text-base mdd:text-center">
          <ul className="list-none lg:ml-5 md:ml-4 sm:ml-3 smm:ml-2">
            <li>A thick, rough area of skin</li>
            <li>A hardened, raised bump</li>
            <li>Tenderness or pain under your skin</li>
            <li>Flaky, dry or waxy skin</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto w-full">
        <h2 className="trhd2 w-3/4 mx-auto lg:text-4xl md:text-2xl sm:text-xl smm:text-lg mdd:text-center">
          What Causes Corns?
        </h2>
        <div className="w-3/4 trdesc mx-auto">
          Pressure and friction from repetitive actions cause corns and calluses
          to develop and grow. Some sources of this pressure and friction
          include:
        </div>
        <div className="w-9/12 trdesc mx-auto lg:mb-20 md:mb-36 sm:mb-32 smm:mb-9 lg:text-2xl md:text-xl sm:text-lg smm:text-base mdd:text-center">
          <ul className="list-none lg:ml-5 md:ml-4 sm:ml-3 smm:ml-2">
            <li>Wearing shoes that don’t fit</li>
            <li>Skipping socks</li>
            <li>Playing instruments or using hand tools</li>
          </ul>
        </div>
      </div>
      <TreatmentsSection
        title="What treatments we offer for Corns"
        text="We offer a non surgical approach to corns as they can reoccur and we inform our patients about the common signs to look out for and how to
remove them at home."
      />
      <TreatmentsSection
        title="What are Skin Tags?"
        text="Skin tags are soft, noncancerous growths that usually form within the skin folds of the neck, armpits, breasts, groin area, and eyelids. These growths
are loose collagen fibers that become lodged inside the thicker parts of the skin."
      />
      <div className="mx-auto w-full">
        <h2 className="trhd2 w-3/4 mx-auto lg:text-4xl md:text-2xl sm:text-xl smm:text-lg mdd:text-center">
          Procedures for Skin Tags
        </h2>
        <div className="w-9/12 trdesc mx-auto md:mb-32 sm:mb-24 smm:mb-9 lg:text-2xl md:text-xl sm:text-lg smm:text-base mdd:text-center">
          <RenderList
            data={benefits1}
            data2="
        These are outpatient procedures and can be done in the clinic. There are
        no side effects and they don’t leave any scarring."
          />
        </div>
      </div>
      <TreatmentsSection
        title="What is DPN?"
        text="Dermatosis papulosa nigra (DPN) is a harmless skin condition that affects people. It consists of small, dark  bumps that usually appear on your face
and neck which are usually hereditary in nature."
      />
      <div className="mx-auto w-full">
        <h2 className="trhd2 w-3/4 mx-auto lg:text-4xl md:text-2xl sm:text-xl smm:text-lg mdd:text-center">
          Treatment For DPN
        </h2>
        <div className="w-9/12 trdesc mx-auto md:mb-32 sm:mb-24 smm:mb-9 lg:text-2xl md:text-xl sm:text-lg smm:text-base mdd:text-center">
          <RenderList
            data={benefits2}
            data2="
        These are done in the clinic and a topical anesthetic cream is applied before the procedure so that you don’t feel any pain. We use a magnifying glass
to see and remove the smaller ones as well. You also have a 4 to 5 years gap before they reoccur. They reoccur as they are usually hereditary in nature."
          />
        </div>
      </div>
      <FAQ data={faq} />
    </>
  );
};

export default SkinTags;
