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
            <div className="mx-5 mdd:hidden md:w-1/12">
              <Image width={40} height={40} src={`/${i}.png`} alt={`${i}`} />
            </div>
            <div className="md:w-11/12 flex md:flex-row flex-col md:justify-center justify-start items-center my-6">
              <div className="md:w-3/12 mx-5 mr-8 smm:w-8/12 smm:mx-auto mdd:mb-5">
                <Image
                  width={208}
                  height={208}
                  src={`/Treatments/PhotoFacial/${nums[i]}.png`}
                  alt={nums[i++]}
                />
              </div>
              <div className="md:w-9/12 flex flex-col mdd:items-center items-start justify-center text-left">
                <div className="mdd:text-center">{item}</div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const PhotoFacial = () => {
  const faq = [
    [
      "What parts of my body can I have treated?",
      "Most people get photofacials to treat their face, neck, shoulders, back, and hands. However, photofacial treatments can be performed on any part of the body except the eyelids and the area above them.",
    ],
    [
      "Do photofacials hurt?",
      "IPL photofacials are mostly pain free. Some patients have compared the brief stinging pain of the pulsating light to a tight pinch.",
    ],
    [
      "How long does it take to recover from a photofacial?",
      "There’s no real recovery time to speak of. With IPL photofacials, there may be a few mild side effects immediately after the procedure which is rare but will settle in a few hours or days. Nevertheless, you can resume normal activities immediately after treatment, including applying your usual facial creams and makeup. ",
    ],
    [
      "How long do the results last?",
      "The results of an IPL photofacial will be apparent for six months to a year. Dermatologists recommend maintenance treatments every six to 12 months to help prolong results. The  anti-aging effects of IPL photofacials, two to three treatments a year are  enough to develop and maintain younger looking skin with renewed collagen  growth. ",
    ],
    [
      "What can I do to prolong results?",
      "Avoid things that damage your skin. That means limiting direct exposure to the sun, wearing sunscreen, and taking optimal  care of your skin with moisturizers and face washings. Of course, keeping up with your scheduled maintenance treatments with us.",
    ],
  ];
  const benefits = [
    "The provider will apply a cool gel to your face and supply you with dark glasses to protect your eyes from the light.",
    "Once you’ve been prepped, the doctor administering your treatment will take a hand-piece with a cold smooth surface and run it along your skin as it pulses light.",
  ];
  return (
    <>
      <TreatmentsCard Name={"Photo Facial"} treatment="PhotoFacial" />
      <div
        className="trdesc mx-auto w-11/12 sm:w-3/4 lg:mt-36 md:mt-36 sm:mt-20 smm:mt-16 lg:mb-20 md:mb-36 sm:mb-32 smm:mb-9 mdd:text-center text-sm mdd:text-xs"
        data-aos="fade-up"
      >
        Photofacials use different types of light emitting devices to treat skin
        discoloration and reduce the appearance of blemishes. This procedure is
        ideal for those looking to treat a variety of common skin issues
        including wrinkles, large pores, freckles and acne scars.
      </div>
      <div className="mx-auto w-full">
        <h2
          className="trhd2 w-11/12 sm:w-3/4 mx-auto lg:text-4xl md:text-2xl sm:text-xl smm:text-lg mdd:text-center"
          data-aos="fade-up"
        >
          What are photofacials used for?
        </h2>
        <div
          className="w-3/4 trdesc mx-auto text-sm mdd:text-xs mdd:text-center"
          data-aos="fade-up"
        >
          Generally speaking, photofacials are used to treat skin blemishes and
          pigmentation issues. IPL photofacial treatments can also be used to
          treat the following:
        </div>
        <div className="w-9/12 trdesc mx-auto lg:mb-20 md:mb-36 sm:mb-32 smm:mb-9 lg:text-2xl md:text-xl sm:text-lg smm:text-base mdd:text-center">
          <ul className="list-none lg:ml-5 md:ml-4 sm:ml-3 smm:ml-2">
            <li data-aos="fade-up">Broken capillaries</li>
            <li data-aos="fade-up">Rosacea</li>
            <li data-aos="fade-up">Hyperpigmentation</li>
            <li data-aos="fade-up">Spider veins</li>
            <li data-aos="fade-up">Freckles</li>
            <li data-aos="fade-up">Fine lines</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto w-full">
        <h2
          className="trhd2 w-11/12 sm:w-3/4 mx-auto lg:text-4xl md:text-2xl sm:text-xl smm:text-lg mdd:text-center"
          data-aos="fade-up"
        >
          What is the procedure like?
        </h2>
        <div className="w-9/12 trdesc mx-auto lg:mb-20 md:mb-36 sm:mb-32 smm:mb-9 lg:text-2xl md:text-xl sm:text-lg smm:text-base mdd:text-center">
          <RenderList data={benefits} />
        </div>
      </div>
      <TreatmentsSection
        title="How do I prepare for the treatment?"
        text="For starters, with IPL photofacials you need to be tan-free. Tans can prevent the  machine from accurately detecting the specific blemishes that
you want addressed, and put you at greater risk of being burned. You also need to avoid aspirin, ibuprofen, anticoagulants, alcohol, and anything
else that thins the blood. Additionally, be sure to notify your doctor if you’re taking antibiotics or any supplements."
        aosTitle="fade-up"
        aosText="fade-up"
      />
      <TreatmentsSection
        title="How long do photofacials take?"
        text="IPL photofacials are performed in a series, with each treatment lasting from approximately 20 minutes to an hour, depending on the amount of skin
being treated. Typically, patients receive between three and six treatments spaced roughly one month apart."
        aosTitle="fade-up"
        aosText="fade-up"
      />
      <FAQ data={faq} />
    </>
  );
};

export default PhotoFacial;
