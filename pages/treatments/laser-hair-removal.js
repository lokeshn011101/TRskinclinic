import React from "react";
import TreatmentsCard from "../../components/TreatmentsCard";
import TreatmentsSection from "../../components/TreatmentsSection";
import Image from "next/image";

const RenderList = ({ data }) => {
  let i = 1;
  return (
    <ul className="nlist">
      {data.map((item) => {
        return (
          <li
            key={item}
            className="md:my-5 p-0 flex flex-row items-center text-sm mdd:text-xs"
          >
            <img
              className="w-7 h-7 mx-5 mdd:hidden"
              src={`/${i}.png`}
              alt={`${i++}`}
            />
            <div className="flex flex-col mdd:items-center justify-center items-start md:my-6 mdd:mx-auto">
              <h3 className=" trhd2 lg:text-3xl md:text-xl sm:text-lg smm:text-base mb-3">
                {item[0]}
              </h3>
              <div>{item[1]}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const LaserHairRemoval = () => {
  const benefits = [
    [
      "Painless & Quick",
      "Compared to traditional methods such as waxing, laser hair removal does not cause you any discomfort or pain, it is quick and convenient. With each sitting lasting up to one hour.",
    ],
    [
      "Cost Efficiency",
      "Although laser hair removal might cost you more than a single waxing appointment, the long term costs are unparalleled. The average person might go through hundreds of waxing appointments but with laser hair removal usually only 5-7 sittings are required to be hair free. Maintenance sittings may be required every couple of years.",
    ],
    [
      "Incredible Results",
      "Once you’ve completed the number of appointments your hair follicles are removed and they will not return and you can enjoy soft & beautiful skin for the years to come.",
    ],
  ];
  return (
    <>
      <TreatmentsCard
        Name={"Laser Hair Removal"}
        treatment="LaserHairRemoval"
      />
      <div className="trdesc mx-auto w-3/4 lg:mt-36 md:mt-36 sm:mt-20 smm:mt-16 lg:mb-20 md:mb-16 sm:mb-12 smm:mb-9 mdd:text-center text-sm mdd:text-xs">
        Laser hair removal is a medical procedure that uses a concentrated beam
        of light to remove unwanted hair. During laser hair removal, a laser
        emits light that is absorbed by the melanin in the hair. The light
        energy is converted to heat, which removes the hair follicles that
        produces hairs. This inhibits and delays future hair growth.
      </div>
      <div className="md:w-3/4 w-full mx-auto mb-10 md:mb-24">
        <h2 className="trhd2 mx-auto lg:text-4xl md:text-2xl sm:text-xl smm:text-lg mdd:text-center">
          Common treatment locations include
        </h2>
        <div className="flex w-full md:flex-col flex-row justify-around items-center smm:flex-col ">
          <div className="mt-8 w-full flex md:flex-row flex-col justify-between items-center">
            <div className="">
              <Image
                src="/Treatments/LaserHairRemoval/one.png"
                alt="cp1"
                width={200}
                height={200}
                layout="intrinsic"
              />
              <div className="text-sm mdd:text-xs text-center">Upper Lip</div>
            </div>

            <div className="mdd:mt-6">
              <Image
                src="/Treatments/LaserHairRemoval/two.png"
                alt="cp1"
                width={200}
                height={200}
                layout="intrinsic"
              />
              <div className="text-sm mdd:text-xs text-center">Legs</div>
            </div>
            <div className="mdd:mt-6">
              <Image
                src="/Treatments/LaserHairRemoval/three.png"
                alt="cp1"
                width={200}
                height={200}
                layout="intrinsic"
              />
              <div className="text-sm mdd:text-xs text-center"> Chin</div>
            </div>
            <div className="mdd:mt-6">
              <Image
                src="/Treatments/LaserHairRemoval/four.png"
                alt="cp1"
                width={200}
                height={200}
                layout="intrinsic"
              />
              <div className="text-sm mdd:text-xs text-center">Armpits</div>
            </div>
          </div>
          <div className="mt-8 w-full flex md:flex-row flex-col justify-between items-center">
            <div className="mdd:mt-6">
              <Image
                src="/Treatments/LaserHairRemoval/five.png"
                alt="cp1"
                width={200}
                height={200}
                layout="intrinsic"
              />
              <div className="text-sm mdd:text-xs text-center">Hands</div>
            </div>
            <div className="mdd:mt-6">
              <Image
                src="/Treatments/LaserHairRemoval/six.png"
                alt="cp1"
                width={200}
                height={200}
                layout="intrinsic"
              />
              <div className="text-sm mdd:text-xs text-center">
                Beard Shaping
              </div>
            </div>
            <div className="mdd:mt-6">
              <Image
                src="/Treatments/LaserHairRemoval/seven.png"
                alt="cp1"
                width={200}
                height={200}
                layout="intrinsic"
              />
              <div className="text-sm mdd:text-xs text-center">Back</div>
            </div>
            <div className="mdd:mt-6">
              <Image
                src="/Treatments/LaserHairRemoval/eight.png"
                alt="cp1"
                width={200}
                height={200}
                layout="intrinsic"
              />
              <div className="text-sm mdd:text-xs text-center">Bikini Line</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full">
        <h2 className="trhd2 w-3/4 mx-auto lg:text-4xl md:text-2xl sm:text-xl smm:text-lg mdd:text-center">
          Benefits of Laser Hair Removal Over Traditional Hair Removal Methods
        </h2>
        <div className="w-9/12 trdesc mx-auto lg:mb-20 md:mb-36 sm:mb-32 smm:mb-9 lg:text-2xl md:text-xl sm:text-lg smm:text-base mdd:text-center">
          <RenderList data={benefits} />
        </div>
      </div>

      <TreatmentsSection
        title="What's the pre and post care?"
        text="Only shave between sittings, as waxing and shaving pull the hair from the root and dispute the hair cycle which can lead to more sittings.
This can also stimulate hair growth in other areas that we have already treated."
      />
      <TreatmentsSection
        title="What's the pre and post care?"
        text="Only shave between sittings, as waxing and shaving pull the hair from the root and dispute the hair cycle which can lead to more sittings.
This can also stimulate hair growth in other areas that we have already treated."
      />
      <TreatmentsSection
        title="What type of laser is used for laser hair removal at TR Skin Clinic?"
        text="At TR Skin Clinic, we use the FDA approved Light Sheer Desire by Lumenius to provide you with the finest painless laser hair removal procedure."
      />
    </>
  );
};

export default LaserHairRemoval;
