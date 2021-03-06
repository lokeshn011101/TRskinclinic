import React, { useState } from "react";
import TreatmentsCard from "../../components/TreatmentsCard";
import TreatmentsSection from "../../components/TreatmentsSection";
import FAQ from "../../components/FAQ";

const Li = ({ data }) => {
  return data.map((item) => {
    return (
      <li key={item} className="beneli mdd:m-1">
        {item}
      </li>
    );
  });
};

const RenderItem = ({ heading, data, dir }) => {
  return (
    <div
      className="titem h-full mdd:h-auto mdd:w-11/12 flex flex-col mdd:justify-center mdd:items-center mdd:mt-10 mt-5 bg-skin-aboveLight ml-1 mb-10"
      data-aos={dir}
    >
      <h2 className="trhd2 w-full lg:text-2xl md:text-xl sm:text-lg smm:text-lg text-center p-4 bg-skin-medium">
        {heading}
      </h2>
      <ul className="mdd:mb-5 mb-3">
        <Li data={data} />
      </ul>
    </div>
  );
};

const Microdermabasion = () => {
  const [navToggle, setNaveToggle] = useState(false);
  const faq = [
    [
      "Does THE treatment hurt?",
      "The treatment does not hurt as it is pain-free.",
    ],
    [
      "Is there any downtime?",
      "No, there is no downtime in this treatment. You can get back to your daily routine.",
    ],
  ];
  const benefits = [
    [
      "Microdermabrasion is an exfoliation of the skin and is more pocket friendly",
      "It only takes 20 minutes while  removing dead cells and reducing the oil",
    ],
    [
      "Medi Facials take 45 minutes and include microdermabrasion along with hydra exfoliation.",
      "It also has an ultrasonic scrubber to cleanse pores, cleanse impurities and remove whitehead & blackheads. It also infuses ingredients for anti-ageing glow.",
    ],
  ];
  return (
    <>
      <TreatmentsCard Name={"Microdermabrasion"} treatment="Microdermabasion" />
      <div
        className="trdesc mx-auto w-3/4 smm:w-11/12 lg:mt-44 md:mt-36 sm:mt-20 smm:mt-16 lg:mb-20 md:mb-16 sm:mb-12 smm:mb-9 mdd:text-center text-sm mdd:text-xs"
        data-aos="fade-up"
      >
        It is a procedure that uses a diamond tip which helps exfoliate the dead
        cells, helps reduce tan, stimulates collagen formation and leaves your
        face looking youthful. It is more effective than a regular facial and
        furthermore it does not contain any chemicals. It can be done every 4 to
        6 weeks or before any important event. Additionally it does not have any
        side effects and helps in control of acne.
      </div>
      <TreatmentsSection
        title="What are Medi-facials?"
        text="It is a facial skin treatment that is completely customized for each client, whether it is regular skin maintenance or skin enhancement or reduction of fine lines. The active ingredients will renew your skin and give it a glowing finish. Our Doctors tailor the procedure to your unique skin needs, delivering the best possible end results."
        aosTitle="fade-up"
        aosText="fade-up"
      />
      <TreatmentsSection
        title="What does it do and how long does it take?"
        text="They are designed to repair, restore, and rejuvenate the skin. Your skin will have visible improvements in tone, texture and above all improved skin health
and function. Medi-Facials sittings may take 45 minutes and similarly microdermabrasion takes 20 minutes."
        aosTitle="fade-up"
        aosText="fade-up"
      />

      <div className="mx-auto w-full">
        <h2
          className="trhd2 w-3/4 smm:w-11/12 mx-auto lg:text-4xl md:text-2xl sm:text-xl smm:text-lg mdd:text-center"
          data-aos="fade-up"
        >
          Treatment Benefits
        </h2>
        <div className="w-9/12 smm:w-11/12 trdesc mx-auto lg:mb-20 md:mb-16 sm:mb-12 smm:mb-9 lg:text-2xl md:text-xl sm:text-lg smm:text-base mdd:text-center">
          <ul className="list-none lg:ml-5 md:ml-4 sm:ml-3 smm:ml-2">
            <li data-aos="fade-up">
              Replenishes the skin with vitamins for a fresh glow
            </li>
            <li data-aos="fade-up">
              Diminishes wrinkles and hyperpigmentation
            </li>
            <li data-aos="fade-up">Rejuvenates skin</li>
            <li data-aos="fade-up">No side effects</li>
            <li data-aos="fade-up">No downtime</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto w-full">
        <h2
          className="trhd2 w-3/4 smm:w-11/12 mx-auto lg:text-4xl md:text-2xl sm:text-xl smm:text-lg mdd:text-center"
          data-aos="fade-up"
        >
          How does it differ from regular facials?
        </h2>
        <div
          className="w-3/4 smm:w-11/12 trdesc lg:mt-4 md:mt-3 sm:mt-2 smm:mt-1 mx-auto lg:mb-4 md:mb-3 sm:mb-2 smm:mb-1 mdd:text-center text-sm mdd:text-xs"
          data-aos="fade-up"
        >
          Aesthetic medi-facials help to improve the skin tone, texture, and
          collagen production and, thus, slow down the ageing process. The
          generic facials offered in salons are filled with unhealthy chemicals,
          generally using steam and bleach. Those products and procedures are
          not effective. The creams used in regular facials can cause harsh
          exfoliation of the skin, which can cause blockage of pores and result
          in active breakouts in acne prone skin and cause skin damage.
        </div>
      </div>
      <div className="w-10/12 mx-auto flex justify-center items-start mdd:justify-center mdd:items-center mdd:flex-col mb-10 sm:hidden">
        <div className="w-full h-full flex flex-col justify-center items-start mdd:justify-center mdd:items-center">
          <RenderItem
            data={benefits[0]}
            heading="Microdermabrasion"
            dir="fade-right"
          />
          <RenderItem
            data={benefits[1]}
            heading="Medi Facials"
            dir="fade-left"
          />
        </div>
      </div>
      <div className="w-10/12 mx-auto mb-14 mt-5 smm:hidden" data-aos="fade-up">
        <table className=" h-full w-full mdd:mt-10 mt-5 bg-skin-aboveLight mb-10">
          <tr>
            <th className="w-1/2 border-r-2 border-white">
              <h2 className="trhd2 lg:text-2xl md:text-xl sm:text-lg smm:text-lg text-center p-4 bg-skin-medium">
                Microdermabrasion
              </h2>
            </th>
            <th className="w-1/2 border-l-2 border-white">
              <h2 className="trhd2 lg:text-2xl md:text-xl sm:text-lg smm:text-lg text-center p-4 bg-skin-medium">
                Medi Facials
              </h2>
            </th>
          </tr>
          <tr>
            <td className="px-4 py-3 border-r-2 border-white">
              {benefits[0][0]}
            </td>
            <td className="px-4 py-3 border-r-2 border-white">
              {benefits[0][1]}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-l-2 border-white">
              {benefits[1][0]}
            </td>
            <td className="px-4 py-3 border-l-2 border-white">
              {benefits[1][1]}
            </td>
          </tr>
        </table>
      </div>
      <TreatmentsSection
        title="Who should opt for these treatments?"
        text="If you???re looking to target specific skin concern, have a big event coming up, like your wedding then go for medical facials. These have minimal downtime
and also do not have any side effects. They tend to improve the skin tone and texture immediately. They also provide you with healthy and glowing skin.
Microdermabrasion is usually suggested first 14 days before your event (as it removes the dead cells) and medi-facial one week before."
        aosTitle="fade-up"
        aosText="fade-up"
      />
      <FAQ data={faq} />
    </>
  );
};

export default Microdermabasion;
