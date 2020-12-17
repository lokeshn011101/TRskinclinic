import React from "react";
import TreatmentsCard from "../../components/TreatmentsCard";
import TreatmentsSection from "../../components/TreatmentsSection";
import Image from "next/image";

const LaserHairRemoval = () => {
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
      <TreatmentsSection
        title="What's the pre and post care?"
        text="Only shave between sittings, as waxing and shaving pull the hair from the root and dispute the hair cycle which can lead to more sittings.
This can also stimulate hair growth in other areas that we have already treated."
      />
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
