import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useEffect } from "react";
import TextAboveSection from "../components/TextAboveSection";
import CarouselHome from "../components/CarouselHome";
import Image from "next/image";
import Reviews from "../components/Reviews";

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
    <div className="">
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
      <div className="flex justify-center items-center">
        <Image
          src="/doctors.png"
          alt="doctors"
          width={885}
          height={600}
          layout="intrinsic"
        />
      </div>
      <div className="flex justify-around items-center w-full lg:mt-24 sm:mt-16 smm:mt-8">
        <div className="w-9/12 flex flex-row justify-around items-center">
          <img
            src="/homeimg.png"
            alt="home"
            className="w-5/12  lg:ml-16 sm:ml-8 smm:ml-5"
          />
          <div className="w-7/12 lg:ml-16 sm:ml-8 smm:ml-5">
            <h2 className="description lg:text-4xl uppercase md:text-xl sm:text-xl smm:text-xl md:mb-14 sm:mb-9 smm:mb-7">
              consult our dermatologists online
            </h2>
            <div className="about-desc2 md:mb-10 sm:mb-7 smm:mb-4">
              Dr. Tanuja Reddy and her expert team of medical professionals
              treat patients of all ages and skin types for a variety of skin
              conditions including mole removal, acne and rosacea treatment,
              eczema, psoriasis and more.
            </div>
            <div className="about-desc2">
              Our state-of-the-art medical facility and skilled team provide
              patients with an unmatched level of expertise, experience and
              customer service.
            </div>
          </div>
        </div>
      </div>
      <div className="lg:mt-32 sm:mt-16 smm:mt-10">
        <h2 className="about-head2 mx-auto text-center lg:text-4xl md:text-2xl sm:text-xl smm:text-lg uppercase lg:mb-24 md:mb-20 sm:mb-16 smm:mb-10 lg:mt-8 md:mt-6 sm:mt-4 smm:mt-2">
          Patient reviews
        </h2>
      </div>
      <div className="flex justify-evenly items-center md:flex-row flex-col md:w-9/12 w-8/12 mx-auto lg:mb-36 md:mb-32 sm:mb-24 smm:mb-20">
        <div className="md:w-2/3 flex flex-row justify-between md:justify-center items-center lg:mb-24 md:mb-20 sm:mb-16 smm:mb-10 ">
          <img
            src="/patient2.png"
            alt="patient1"
            className="w-5/12 md:mx-10 md:transform md:-translate-y-5"
          />
          <img
            src="/patient1.png"
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
