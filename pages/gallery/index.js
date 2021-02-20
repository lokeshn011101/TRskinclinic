import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import AOS from "aos";

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const router = useRouter();
  return (
    <div className="flex lg:flex-row flex-col justify-around items-center mx-auto lg:p-24">
      <div
        className="relative imgpar lg:w-1/4 lgg:w-7/12 lgg:mt-8"
        data-aos="fade-right"
        data-aos-delay="30"
      >
        <div>
          <Image width={332} height={332} src="/Gallery/one.png" alt="one" />
        </div>
        <h2
          onClick={() => router.push("/gallery/patients-images")}
          className="gimg flex justify-center items-center cursor-pointer text-white w-full h-full trhd2 absolute text-center top-0 lg:text-4xl md:text-5xl sm:text-4xl smm:text-2xl "
        >
          <div>Patient Diaries</div>
        </h2>
      </div>
      <div
        className="relative imgpar lg:w-1/4 lgg:w-7/12 lgg:mt-8"
        data-aos="fade-right"
        data-aos-delay="80"
      >
        <div>
          <Image width={332} height={332} src="/Gallery/two.png" alt="two" />
        </div>
        <h2
          onClick={() => router.push("/gallery/equipments")}
          className="gimg flex justify-center items-center cursor-pointer text-white w-full h-full trhd2 absolute text-center top-0 lg:text-4xl md:text-5xl sm:text-4xl smm:text-2xl "
        >
          <div>Equipments</div>
        </h2>
      </div>
      <div
        className="relative imgpar lg:w-1/4 lgg:w-7/12 lgg:mt-8"
        data-aos="fade-right"
        data-aos-delay="130"
      >
        <div>
          <Image
            width={332}
            height={332}
            src="/Gallery/three.png"
            alt="three"
          />
        </div>
        <h2
          onClick={() => router.push("/gallery/treatments-images")}
          className="gimg flex justify-center items-center cursor-pointer text-white w-full h-full trhd2 absolute text-center top-0 lg:text-4xl md:text-5xl sm:text-4xl smm:text-2xl"
        >
          <div>Treatments</div>
        </h2>
      </div>
    </div>
  );
};

export default Gallery;
