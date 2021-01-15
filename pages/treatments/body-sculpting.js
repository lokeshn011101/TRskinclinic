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
            className="my-5 p-0 flex flex-row items-center"
            data-aos="fade-up"
          >
            <div className="inline-block mr-3">
              <Image width={40} height={40} src={`/${i}.png`} alt={`${i++}`} />
            </div>
            <div className="inline-block">{item}</div>
          </li>
        );
      })}
    </ul>
  );
};

const BodySculpting = () => {
  const faq = [
    [
      "Can I return to normal activities after my treatment?",
      "Yes, you can. Body Sculpting procedure is completely non-surgical, so you can return to normal activities immediately.",
    ],
    [
      "Will the results look natural?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laborum, dolorem perspiciatis consequuntur nulla magni quae accusamus, earum consequatur libero officiis sit eum iusto cumque consectetur quidem neque laboriosam. Vero!",
    ],
    [
      "Is It Painful?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laborum, dolorem perspiciatis consequuntur nulla magni quae accusamus, earum consequatur libero officiis sit eum iusto cumque consectetur quidem neque laboriosam. Vero!",
    ],
    [
      "Are There Any Risks?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laborum, dolorem perspiciatis consequuntur nulla magni quae accusamus, earum consequatur libero officiis sit eum iusto cumque consectetur quidem neque laboriosam. Vero!",
    ],
  ];
  const benefits = [
    "Non-invasive",
    "No downtime",
    "Long lasting results",
    "Non-surgical procedure",
  ];
  return (
    <>
      <TreatmentsCard Name={"Body Sculpting"} treatment="BodySculpting" />
      <div
        className="trdesc mx-auto w-3/4 lg:mt-36 md:mt-36 sm:mt-20 smm:mt-36 lg:mb-20 md:mb-36 sm:mb-32 smm:mb-9 mdd:text-center text-sm mdd:text-xs"
        data-aos="fade-up"
      >
        Body sculpting, also called body contouring, is a wide range of
        aesthetic plastic surgery procedures designed to reshape and enhance the
        appearance of your body. It is a medical procedure that shrinks areas of
        stubborn body fat.
      </div>
      <div className="mx-auto w-full">
        <h2
          className="trhd2 w-3/4 mx-auto lg:text-4xl md:text-2xl sm:text-xl smm:text-lg mdd:text-center"
          data-aos="fade-up"
        >
          What sets our treatment apart from others?
        </h2>
        {/* <div className="w-3/4 trdesc mx-auto">
          Four main factors cause acne:
        </div> */}
        <div className="w-9/12 trdesc mx-auto lg:mb-20 md:mb-36 sm:mb-32 smm:mb-9 lg:text-2xl md:text-xl sm:text-lg smm:text-base mdd:text-center">
          <RenderList data={benefits} />
        </div>
      </div>
      <div className="md:w-3/4 w-full mx-auto mb-10 md:mb-24">
        <h2
          className="trhd2 mx-auto lg:text-4xl md:text-2xl sm:text-xl smm:text-lg mdd:text-center"
          data-aos="fade-up"
        >
          Common treatment locations include
        </h2>
        <div className="flex w-full md:flex-col flex-row justify-around items-center smm:flex-col ">
          <div className="mt-8 w-full flex md:flex-row flex-col justify-between items-center">
            <div className="" data-aos="fade-right" data-aos-delay="40">
              <Image
                src="/Treatments/BodySculpting/one.png"
                alt="cp1"
                width={200}
                height={200}
                layout="intrinsic"
              />
              <div className="text-sm mdd:text-xs text-center">Double Chin</div>
            </div>

            <div className="mdd:mt-6" data-aos="fade-right" data-aos-delay="80">
              <Image
                src="/Treatments/BodySculpting/two.png"
                alt="cp1"
                width={200}
                height={200}
                layout="intrinsic"
              />
              <div className="text-sm mdd:text-xs text-center">
                Love Handles
              </div>
            </div>
            <div
              className="mdd:mt-6"
              data-aos="fade-right"
              data-aos-delay="120"
            >
              <Image
                src="/Treatments/BodySculpting/three.png"
                alt="cp1"
                width={200}
                height={200}
                layout="intrinsic"
              />
              <div className="text-sm mdd:text-xs text-center">Tummy</div>
            </div>
          </div>
          <div className="mt-8 w-full flex md:flex-row flex-col justify-between items-center">
            <div className="mdd:mt-6" data-aos="fade-right" data-aos-delay="40">
              <Image
                src="/Treatments/BodySculpting/four.png"
                alt="cp1"
                width={200}
                height={200}
                layout="intrinsic"
              />
              <div className="text-sm mdd:text-xs text-center">Thighs</div>
            </div>
            <div className="mdd:mt-6" data-aos="fade-right" data-aos-delay="80">
              <Image
                src="/Treatments/BodySculpting/five.png"
                alt="cp1"
                width={200}
                height={200}
                layout="intrinsic"
              />
              <div className="text-sm mdd:text-xs text-center">Arms</div>
            </div>
            <div
              className="mdd:mt-6"
              data-aos="fade-right"
              data-aos-delay="120"
            >
              <Image
                src="/Treatments/BodySculpting/six.png"
                alt="cp1"
                width={200}
                height={200}
                layout="intrinsic"
              />
              <div className="text-sm mdd:text-xs text-center">Cheeks</div>
            </div>
          </div>
        </div>
      </div>
      <TreatmentsSection
        title="How long is each session? How many sessions will I need?"
        text="We create an individualized treatment plan tailored to your specific goals. The length of your body sculpting session will vary depending on the number of areas
being treated during your visit lasting from 15 min to 45 min. We may schedule additional sessions in order to meet your aesthetic goals."
        aosTitle="fade-up"
        aosText="fade-up"
      />
      <TreatmentsSection
        title="Are the results permanent?"
        text="Once the treated fat cells are gone, they’re gone for the time being but it has to be maintained with a healthy diet and exercise, so that new fat cells are not
developed by your body."
        aosTitle="fade-up"
        aosText="fade-up"
      />
      <TreatmentsSection
        title="What’s the difference between body sculpting and weight loss?"
        text="While both weight loss and body contouring reduce your body fat, they work in very different ways. Weight gain and weight loss happens when your existing
fat cells grow or shrink. When you lose weight, the fat cells generally shrink throughout your body. Body contouring, however, directly removes fat cells
from a specific area of your body. It's recommended for people who want to resolve one or two stubborn areas of fat."
        aosTitle="fade-up"
        aosText="fade-up"
      />
      <FAQ data={faq} />
    </>
  );
};

export default BodySculpting;
