import React from "react";
import { useRouter } from "next/router";

const Gallery = () => {
  const router = useRouter();
  return (
    <div className="flex lg:flex-row flex-col justify-around items-center mx-auto lg:p-24">
      <div className="relative lg:w-1/4 lgg:w-7/12 lgg:mt-8">
        <img className="" src="/Gallery/one.png" alt="one" />
        <h2
          onClick={() => router.push("/gallery/patients")}
          className="gimg flex justify-center items-center cursor-pointer text-white w-full h-full trhd2 absolute text-center top-0 lg:text-4xl md:text-5xl sm:text-4xl smm:text-2xl "
        >
          <div>Patient Diaries</div>
        </h2>
      </div>
      <div className="relative lg:w-1/4 lgg:w-7/12 lgg:mt-8">
        <img className="" src="/Gallery/two.png" alt="two" />
        <h2
          onClick={() => router.push("/gallery/equipments")}
          className="gimg flex justify-center items-center cursor-pointer text-white w-full h-full trhd2 absolute text-center top-0 lg:text-4xl md:text-5xl sm:text-4xl smm:text-2xl "
        >
          <div>Equipments</div>
        </h2>
      </div>
      <div className="relative lg:w-1/4 lgg:w-7/12 lgg:mt-8">
        <img className="" src="/Gallery/three.png" alt="three" />
        <h2
          onClick={() => router.push("/gallery/treatments")}
          className="gimg flex justify-center items-center cursor-pointer text-white w-full h-full trhd2 absolute text-center top-0 lg:text-4xl md:text-5xl sm:text-4xl smm:text-2xl"
        >
          <div>Treatments</div>
        </h2>
      </div>
    </div>
  );
};

export default Gallery;
