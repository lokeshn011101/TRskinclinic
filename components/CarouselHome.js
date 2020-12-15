import React, { useEffect } from "react";
import Slider from "react-slick";

const Item = ({ desc, source }) => {
  const divRef = React.createRef();
  useEffect(() => {
    const x = divRef.current.parentNode.parentNode.className;
    const a = x.split(" ");
    let flag = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] == "slick-current") {
        flag = 1;
        break;
      }
    }
    if (flag == 1) {
      console.log(divRef.current);
    }
  }, [divRef]);

  return (
    <div
      className="lg:mx-3 md:mx-2 sm:mx-1 smm:mx-1 flex flex-col justify-center items-center"
      ref={divRef}
    >
      <img src={source} alt="Image" className="scale-150" />
      <h3 className="descd lg:text-sm md:text-sm sm:text-xs smm:text-xs leading-0">
        {desc}
      </h3>
    </div>
  );
};

const CarouselHome = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "1px",
    slidesToShow: 3,
    // autoplay: true,
    // autoplaySpeed: 2500,
  };
  return (
    <div className="overflow-hidden ml-2">
      <Slider {...settings}>
        <Item
          source="/HomeCarousel/four.png"
          desc="Microdermabrasion is a procedure that helps exfoliate dead cells & combat acne."
        />
        <Item
          source="/HomeCarousel/five.png"
          desc="Laser Hair removal is a medical procedure that uses a concentrated beam of light to remove unwanted hair."
        />
        <Item
          source="/HomeCarousel/six.png"
          desc="Dermal fillers add volume to certain areas on the face to hydrate, rejuvenate and enhance your facial features."
        />
        <Item
          source="/HomeCarousel/seven.png"
          desc="Anti wrinkle treatment is for reduction of skin wrinkles and certain muscle conditions."
        />
        <Item
          source="/HomeCarousel/one.png"
          desc="Growth factor is a treatment for hair loss, facial rejuvenation and acne scars that uses the patient’s own PRP."
        />
        <Item
          source="/HomeCarousel/two.png"
          desc="Skin Resurfacing with M22TM is a Non-invasive & Non-surgical treatments for Skin conditions."
        />
        <Item
          source="/HomeCarousel/three.png"
          desc="Body sculpting is a procedure to shrink areas of stubborn body fat."
        />
      </Slider>
    </div>
  );
};
export default CarouselHome;
