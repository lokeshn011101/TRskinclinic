import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import React, { useEffect, useState } from "react";

import TextAboveSection from "../components/TextAboveSection";
import CarouselHome from "../components/CarouselHome";

import Reviews from "../components/Reviews";
import ConsultUs from "../components/ConsultUs";
import Slider1 from "../components/HomeCarousel/Slider1";
import Slider2 from "../components/HomeCarousel/Slider2";
import Slider3 from "../components/HomeCarousel/Slider3";

import Slider from "react-slick";
import AOS from "aos";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const slider = React.createRef();
  const router = useRouter();
  const [winWidth, setWinWidth] = useState(0);
  useEffect(() => {
    AOS.init({
      duration: 640,
    });
    slider.current.slickPlay();
    setWinWidth(window.innerWidth);
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 3500,
    autoplay: true,
  };
  return (
    <div className=" overflow-hidden">
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
        aosTitle="fade-down"
        offsetTitle="0"
        aosText="fade-up"
        offsetText="0"
      />

      <div className="flex sm:flex-row flex-col justify-center w-10/12 h-auto max-w-5xl mx-auto">
        <div
          className="flex justify-center items-center smm:w-8/12 mx-auto"
          data-aos={winWidth <= 640 ? "fade-down" : "fade-right"}
        >
          <Image
            src="/Home/home4.png"
            alt="choices"
            width={488}
            height={714}
            style={{ margin: "5px" }}
          />
        </div>
        <div className="flex items-start flex-col justify-center ml-5 mt-5 ">
          <div
            className="lg:mb-12 sm:mb-7 smm:mb-3"
            data-aos={winWidth <= 640 ? "fade-up" : "fade-left"}
            data-aos-delay="200"
            data-aos-offset="10"
          >
            <h2 className="lg:mb-2 description lg:text-4xl smm:mb-0 sm:mb-1 uppercase md:text-xl sm:text-xl smm:text-lg smm:text-center smm:w-full">
              QUALIFIED DOCTORS
            </h2>
            <div className="choicesD smm:text-xs md:text-sm lg:text-base smm:text-center smm:w-full">
              Our experts have the knowledge, skills and tools to best serve
              your cosmetic skin care needs.
            </div>
          </div>
          <div
            className="lg:mb-12 sm:mb-7 smm:mb-3"
            data-aos={winWidth <= 640 ? "fade-up" : "fade-left"}
            data-aos-delay="300"
            data-aos-offset="10"
          >
            <h2 className="lg:mb-2 description lg:text-4xl smm:mb-0 sm:mb-1 uppercase md:text-xl sm:text-xl smm:text-lg smm:text-center smm:w-full">
              MEDICAL CARE
            </h2>
            <div className="choicesD smm:text-xs md:text-sm lg:text-base smm:text-center smm:w-full">
              TR Skin Clinic offer the ideal programme to address your
              individual concerns.
            </div>
          </div>
          <div
            className="lg:mb-12 sm:mb-7 smm:mb-3"
            data-aos={winWidth <= 640 ? "fade-up" : "fade-left"}
            data-aos-delay="400"
            data-aos-offset="10"
          >
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
        aosTitle="fade-down"
        offsetTitle="0"
        aosText="fade-up"
        offsetText="0"
      />
      <CarouselHome />
      <TextAboveSection
        title="Meet our DOCTORS"
        text="Our Medical Team is led by our very own Medical Director and team of highly experienced Registered Doctors, Nurses & Professionals.
Who are committed to provide our patients with skin care of the highest quality at affordable pricing."
        aosTitle="fade-down"
        offsetTitle="-300"
        aosText="fade-up"
        offsetText="-200"
      />
      <div
        className="flex justify-center w-8/12 mx-auto items-center md:mt-14 sm:mt-9 smm:mt-7 relative"
        data-aos="zoom-in"
        data-aos-offset="-300"
      >
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
          <Link href="/about">Discover More</Link>
        </button>
      </div>
      <ConsultUs />
      <div className="lg:mt-32 sm:mt-16 smm:mt-10">
        <h2
          className="about-head2 mx-auto text-center lg:text-4xl md:text-2xl sm:text-xl smm:text-lg uppercase lg:mb-24 md:mb-20 sm:mb-16 smm:mb-10 lg:mt-8 md:mt-6 sm:mt-4 smm:mt-2"
          data-aos="fade-down"
          data-aos-offset="-200"
        >
          Patient reviews
        </h2>
      </div>
      <div className="flex justify-evenly items-center md:flex-row flex-col md:w-9/12 w-8/12 mx-auto lg:mb-36 md:mb-32 sm:mb-24 smm:mb-20">
        <div className="md:w-2/3 flex flex-row justify-between md:justify-center items-center lg:mb-24 md:mb-20 sm:mb-16 smm:mb-10">
          <div className="h-full w-5/12">
            <Image
              src="/Home/patient2.png"
              width={311}
              height={484}
              alt="patient1"
              className="w-5/12 md:mx-10 md:transform md:-translate-y-5"
              data-aos={winWidth <= 640 ? "fade-right" : "fade-down"}
              data-aos-delay="400"
              data-aos-offset="-300"
            />
          </div>
          <div className="h-full w-5/12 md:transform md:translate-y-24 ml-2">
            <Image
              src="/Home/patient1.png"
              width={311}
              height={484}
              alt="patient2"
              className=""
              data-aos={winWidth <= 640 ? "fade-left" : "fade-up"}
              data-aos-delay="400"
              data-aos-offset="-300"
            />
          </div>
        </div>
        <div className="md:w-1/3 lg:ml-5 md:ml-4 sm:ml-3 smm:ml-2">
          <Reviews
            review="“I must say TR Skin Clinic has done wonders to
my skin. I have never felt more better”"
            name="— Ananya Kannan"
            delay="200"
            offset="-300"
          />
          <Reviews
            review="“Possibly the best clinic in Chennai! The friendliest
doctors one has seen. TR Skin Clinic is the
one stop for all skin problems”"
            name="— Vaishnavi Rao"
            delay="300"
            offset="-350"
          />
          <Reviews
            review="“TR skin Clinic gave me the confidence that my
acne was going to end very soon and it did.
It’s been two years since then and I hardly get
any acne now. All thanks to TR Skin Clinic,
you’re the best!”"
            name="— Shanthoshri Janakiraman"
            delay="350"
            offset="-450"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
