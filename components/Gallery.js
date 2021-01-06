import React from "react";
import Image from "next/image";

const Gallery = ({ title, category, pic }) => {
  return (
    <div className="mt-10">
      <div className="flex md:flex-row flex-col-reverse justify-around items-center md:w-10/12 mx-auto">
        <Image
          layout="fill"
          src={`/Gallery/${category}/1.png`}
          className="w-6/12"
          alt="sdf"
        />
        <h1 className="trhd2 lg:text-6xl md:text-4xl sm:text-2xl smm:text-xl uppercase">
          {title}
        </h1>
      </div>
      <div className="flex lg:flex-row flex-col justify-around items-center mx-auto lg:p-24">
        {pic === 3 ? (
          <>
            <div className="lg:w-1/4 lgg:w-7/12 lgg:mt-8">
              <Image
                layout="fill"
                className=""
                src={`/Gallery/${category}/2.png`}
                alt="two"
              />
            </div>
            <div className="lg:w-1/4 lgg:w-7/12 lgg:mt-8">
              <Image
                layout="fill"
                className=""
                src={`/Gallery/${category}/3.png`}
                alt="two"
              />
            </div>
            <div className="lg:w-1/4 lgg:w-7/12 lgg:mt-8">
              <Image
                layout="fill"
                className=""
                src={`/Gallery/${category}/4.png`}
                alt="three"
              />
            </div>
          </>
        ) : (
          <>
            <div className="lg:w-1/4 lgg:w-7/12 lgg:mt-8">
              <Image
                layout="fill"
                className=""
                src={`/Gallery/${category}/2.png`}
                alt="two"
              />
            </div>
            <div className="lg:w-1/4 lgg:w-7/12 lgg:mt-8">
              <Image
                layout="fill"
                className=""
                src={`/Gallery/${category}/3.png`}
                alt="three"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Gallery;
