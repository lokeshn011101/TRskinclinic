import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Link from "next/link";
import AOS from "aos";
import Image from "next/image";

const Item = ({ desc, source, to }) => {
  const imgRef = React.createRef();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  useEffect(() => {
    imgRef.current.firstChild.style.overflow = "visible";
    console.log(imgRef.current.firstChild.style.overflow);
  }, []);

  return (
    <div className="carousel-cell lg:mx-3 md:mx-2 sm:mx-1 smm:mx-1 flex flex-col justify-center items-center relative">
      <div ref={imgRef} className="cc-child relative w-full">
        <Image src={source} alt="Image" width={560} height={350} />
        <button className="doct-but lg:text-base md:text-base sm:text-sm smm:text-xs absolute mdd:right-4 right-8 mdd:bottom-1 bottom-3 md:my-3 p-2 mdd:my-1 mdd:p-1 rounded-full bg-white text-skin-dark">
          <Link href={`/treatments/${to}`}>Discover More</Link>
        </button>
      </div>
      <h3 className="descd lg:text-sm md:text-sm sm:text-xs smm:text-xs leading-0">
        {desc}
      </h3>
    </div>
  );
};

const ArrowNext = (props) => {
  return (
    <button onClick={props.onClick} className={props.className + " arr"}>
      <div>
        <Image src="/next.png" alt="next" width={45} height={45} />
      </div>
    </button>
  );
};
const ArrowPrev = (props) => {
  return (
    <button onClick={props.onClick} className={props.className + " arr"}>
      <div>
        <Image src="/Previous.png" alt="next" width={45} height={45} />
      </div>
    </button>
  );
};

const CarouselHome = () => {
  const [winWidth, setWinWidth] = useState(0);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    setWinWidth(window.innerWidth);
  }, []);
  const settings = {
    dots: true,
    arrows: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: winWidth <= 700 ? 2 : 3,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <ArrowNext />,
    prevArrow: <ArrowPrev />,
  };

  return (
    <div
      className="downcarou h-auto md:my-16 sm:my-10 smm:my-6 "
      data-aos="flip-up"
      data-aos-delay="200"
      data-aos-offset="0"
    >
      <Slider {...settings}>
        <Item
          source="/HomeCarousel/four.png"
          desc="Microdermabrasion is a procedure that helps exfoliate dead cells & combat acne."
          to="microdermabrasion"
        />
        <Item
          source="/HomeCarousel/five.png"
          desc="Laser Hair removal is a medical procedure that uses a concentrated beam of light to remove unwanted hair."
          to="laser-hair-removal"
        />
        <Item
          source="/HomeCarousel/six.png"
          desc="Dermal fillers add volume to certain areas on the face to hydrate, rejuvenate and enhance your facial features."
          to="dermal-fillers"
        />
        <Item
          source="/HomeCarousel/seven.png"
          desc="Anti wrinkle treatment is for reduction of skin wrinkles and certain muscle conditions."
          to="anti-wrinkle-treatment"
        />
        <Item
          source="/HomeCarousel/one.png"
          desc="Growth factor is a treatment for hair loss, facial rejuvenation and acne scars that uses the patient’s own PRP."
          to="growth-factor-treatment"
        />
        <Item
          source="/HomeCarousel/two.png"
          desc="Skin Resurfacing with M22TM is a Non-invasive & Non-surgical treatments for Skin conditions."
          to="skin-resurfacing-m22"
        />
        <Item
          source="/HomeCarousel/three.png"
          desc="Body sculpting is a procedure to shrink areas of stubborn body fat."
          to="body-sculpting"
        />
      </Slider>
    </div>
  );
};
export default CarouselHome;
