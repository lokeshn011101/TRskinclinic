import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";

const Gallery = ({ title, category, pic }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="mt-10">
      <div className="flex md:flex-row flex-col-reverse justify-around items-center md:w-10/12 mx-auto">
        <div data-aos="fade-right">
          <Image
            width={633}
            height={664}
            src={`/Gallery/${category}/1.png`}
            className="w-6/12"
            alt="sdf"
          />
        </div>
        <h1
          className="trhd2 lg:text-6xl md:text-4xl sm:text-2xl smm:text-xl uppercase"
          data-aos="fade-left"
        >
          {title}
        </h1>
      </div>
      <div className="flex lg:flex-row flex-col justify-around items-center mx-auto lg:p-24">
        {pic === 3 ? (
          <>
            <div className="lg:w-1/4 lgg:w-7/12 lgg:mt-8">
              <div data-aos="fade-up">
                <Image
                  width={332}
                  height={332}
                  className=""
                  src={`/Gallery/${category}/2.png`}
                  alt="two"
                />
              </div>
            </div>
            <div className="lg:w-1/4 lgg:w-7/12 lgg:mt-8">
              <div data-aos="fade-up">
                <Image
                  width={332}
                  height={332}
                  className=""
                  src={`/Gallery/${category}/3.png`}
                  alt="two"
                />
              </div>
            </div>
            <div className="lg:w-1/4 lgg:w-7/12 lgg:mt-8">
              <div data-aos="fade-up">
                <Image
                  width={332}
                  height={332}
                  className=""
                  src={`/Gallery/${category}/4.png`}
                  alt="three"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="lg:w-1/4 lgg:w-7/12 lgg:mt-8">
              <div data-aos="fade-up">
                <Image
                  width={332}
                  height={332}
                  className=""
                  src={`/Gallery/${category}/2.png`}
                  alt="two"
                />
              </div>
            </div>
            <div className="lg:w-1/4 lgg:w-7/12 lgg:mt-8">
              <div data-aos="fade-up">
                <Image
                  width={332}
                  height={332}
                  className=""
                  src={`/Gallery/${category}/3.png`}
                  alt="three"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Gallery;
