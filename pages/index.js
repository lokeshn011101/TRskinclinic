import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useEffect } from "react";

const Home = () => {
  const slider = React.createRef();
  useEffect(() => {
    slider.current.slickPlay();
    console.log(slider);
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 5000,
  };
  return (
    <>
      <div className="bg-skin-dark h-auto">
        <Slider {...settings} ref={slider}>
          <div className="home-img1">
            <img
              src="/home1.png"
              alt="Say goodbye to all your skin woes"
              className="w-full h-full"
            />
          </div>
          <div className="home-img1">
            <img
              src="/home2.png"
              alt="BECAUSE,YOUR SKIN DESERVES THE VERY BEST"
              className="w-full h-full"
            />
          </div>
          <div className="home-img1">
            <img
              src="/home3.png"
              alt="Chennai's leading Skin Clinic is only an appointment away!"
              className="w-full h-full"
            />
          </div>
        </Slider>
      </div>
      <div className="flex h-96 items-center justify-center flex-col lgg:h-80">
        <h2 className="description lg:text-4xl uppercase mb-5 md:text-xl sm:text-xl smm:text-xl">
          Why Choose Us?
        </h2>
        <div className="descd lgg:text-sm">
          TR Skin Clinic offers leading edge and innovative cosmetic medical
          grade treatments with outstanding levels of customer service combined
          with professionalism and expertise. Most of all, we place our
          patients’ needs above all else.
        </div>
      </div>
      <div className="flex justify-center w-10/12 h-auto max-w-5xl mx-auto">
        <div>
          <img src="/home4.png" alt="choices" />
        </div>
        <div className="flex items-start flex-col justify-center ml-5 mt-5">
          <div className="lg:mb-12 sm:mb-7 smm:mb-5">
            <h2 className="lg:mb-2 description lg:text-4xl smm:mb-0 sm:mb-1 uppercase md:text-xl sm:text-xl smm:text-lg">
              QUALIFIED DOCTORS
            </h2>
            <div className="choicesD smm:text-xs mdd:text-sm lg:text-base">
              Our experts have the knowledge, skills and tools to best serve
              your cosmetic skin care needs.
            </div>
          </div>
          <div className="lg:mb-12 sm:mb-7 smm:mb-5">
            <h2 className="lg:mb-2 description lg:text-4xl smm:mb-0 sm:mb-1 uppercase md:text-xl sm:text-xl smm:text-lg">
              MEDICAL CARE
            </h2>
            <div className="choicesD smm:text-xs mdd:text-sm lg:text-base">
              TR Skin Clinic offer the ideal programme to address your
              individual concerns.
            </div>
          </div>
          <div className="lg:mb-12 sm:mb-7 smm:mb-5">
            <h2 className="lg:mb-2 description lg:text-4xl smm:mb-0 sm:mb-1 uppercase md:text-xl sm:text-xl smm:text-lg">
              ADVANCED LASERS
            </h2>
            <div className="choicesD smm:text-xs mdd:text-sm lg:text-base">
              Our State of the art Lasers are used to treat fine lines,
              pigmentation, tone and texture & More.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
