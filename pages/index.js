import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useEffect } from "react";
import TextAboveSection from "../components/TextAboveSection";
import CarouselHome from "../components/CarouselHome";
import Image from "next/image";
import { useRouter } from "next/router";
import Reviews from "../components/Reviews";
import ConsultUs from "../components/ConsultUs";
import Slider1 from "../components/HomeCarousel/Slider1";
import Slider2 from "../components/HomeCarousel/Slider2";
import Slider3 from "../components/HomeCarousel/Slider3";

const Home = () => {
  const slider = React.createRef();
  const router = useRouter();
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
    <div className="">
      <div className="bg-transparent h-auto">
        <Slider {...settings} ref={slider}>
          <Slider1 />
          <Slider2 />
          <Slider3 />
        </Slider>
      </div>
      <TextAboveSection
        title="Why Choose Us?"
        text="TR Skin Clinic offers leading edge and innovative cosmetic medical
          grade treatments with outstanding levels of customer service combined
          with professionalism and expertise. Most of all, we place our
          patients’ needs above all else."
      />

      <div className="flex sm:flex-row flex-col justify-center w-10/12 h-auto max-w-5xl mx-auto">
        <div>
          <img
            src="/Home/home4.png"
            alt="choices"
            className="smm:w-8/12 mx-auto"
          />
        </div>
        <div className="flex items-start flex-col justify-center ml-5 mt-5 ">
          <div className="lg:mb-12 sm:mb-7 smm:mb-3">
            <h2 className="lg:mb-2 description lg:text-4xl smm:mb-0 sm:mb-1 uppercase md:text-xl sm:text-xl smm:text-lg smm:text-center smm:w-full">
              QUALIFIED DOCTORS
            </h2>
            <div className="choicesD smm:text-xs md:text-sm lg:text-base smm:text-center smm:w-full">
              Our experts have the knowledge, skills and tools to best serve
              your cosmetic skin care needs.
            </div>
          </div>
          <div className="lg:mb-12 sm:mb-7 smm:mb-3">
            <h2 className="lg:mb-2 description lg:text-4xl smm:mb-0 sm:mb-1 uppercase md:text-xl sm:text-xl smm:text-lg smm:text-center smm:w-full">
              MEDICAL CARE
            </h2>
            <div className="choicesD smm:text-xs md:text-sm lg:text-base smm:text-center smm:w-full">
              TR Skin Clinic offer the ideal programme to address your
              individual concerns.
            </div>
          </div>
          <div className="lg:mb-12 sm:mb-7 smm:mb-3">
            <h2 className="lg:mb-2 description lg:text-4xl smm:mb-0 sm:mb-1 uppercase md:text-xl sm:text-xl smm:text-lg smm:text-center smm:w-full">
              ADVANCED LASERS
            </h2>
            <div className="choicesD smm:text-xs md:text-sm lg:text-base smm:text-center smm:w-full">
              Our State of the art Lasers are used to treat fine lines,
              pigmentation, tone and texture & More.
            </div>
          </div>
        </div>
      </div>
      <TextAboveSection
        title="OUR TREATMENTS"
        text="We provide avant-garde cosmetic medical grade treatments to achieve quick and effective results that satisfy your aesthetic needs.
We offer our patients in-depth assessment, skin & hair related advice and assistance to reach their beauty goals."
      />
      <CarouselHome />
      <TextAboveSection
        title="Meet our DOCTORS"
        text="Our Medical Team is led by our very own Medical Director and team of highly experienced Registered Doctors, Nurses & Professionals.
Who are committed to provide our patients with skin care of the highest quality at affordable pricing."
      />
      <div className="flex justify-center w-8/12 mx-auto items-center md:mt-14 sm:mt-9 smm:mt-7 relative">
        <Image
          src="/Home/doctors.png"
          alt="doctors"
          width={885}
          height={600}
          layout="intrinsic"
        />
        <button
          onClick={() => router.push("about")}
          className="doct-but lg:text-base md:text-base sm:text-sm smm:text-xs absolute right-0 bottom-0 md:my-10 p-2 md:mx-16  mdd:mx-9 mdd:my-4 mdd:p-1 rounded-full bg-white text-skin-dark"
        >
          Discover More
        </button>
      </div>
      <ConsultUs />
      <div className="lg:mt-32 sm:mt-16 smm:mt-10">
        <h2 className="about-head2 mx-auto text-center lg:text-4xl md:text-2xl sm:text-xl smm:text-lg uppercase lg:mb-24 md:mb-20 sm:mb-16 smm:mb-10 lg:mt-8 md:mt-6 sm:mt-4 smm:mt-2">
          Patient reviews
        </h2>
      </div>
      <div className="flex justify-evenly items-center md:flex-row flex-col md:w-9/12 w-8/12 mx-auto lg:mb-36 md:mb-32 sm:mb-24 smm:mb-20">
        <div className="md:w-2/3 flex flex-row justify-between md:justify-center items-center lg:mb-24 md:mb-20 sm:mb-16 smm:mb-10 ">
          <img
            src="/Home/patient2.png"
            alt="patient1"
            className="w-5/12 md:mx-10 md:transform md:-translate-y-5"
          />
          <img
            src="/Home/patient1.png"
            alt="patient2"
            className="w-5/12 md:transform md:translate-y-24 md:-ml-8"
          />
        </div>
        <div className="md:w-1/3 lg:ml-5 md:ml-4 sm:ml-3 smm:ml-2">
          <Reviews
            review="“I must say TR Skin Clinic has done wonders to
my skin. I have never felt more better”"
            name="— Ananya Kannan"
          />
          <Reviews
            review="“Possibly the best clinic in Chennai! The friendliest
doctors one has seen. TR Skin Clinic is the
one stop for all skin problems”"
            name="— Vaishnavi Rao"
          />
          <Reviews
            review="“TR skin Clinic gave me the confidence that my
acne was going to end very soon and it did.
It’s been two years since then and I hardly get
any acne now. All thanks to TR Skin Clinic,
you’re the best!”"
            name="— Shanthoshri Janakiraman"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
