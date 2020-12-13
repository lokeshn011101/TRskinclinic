import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <div className="bg-skin-dark h-auto">
        <Slider {...settings}>
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
      <div className="flex h-96 items-center justify-center flex-col">
        <h2 className="description text-4xl uppercase mb-5">Why Choose Us?</h2>
        <div className="descd">
          TR Skin Clinic offers leading edge and innovative cosmetic medical
          grade treatments with outstanding levels of customer service combined
          with professionalism and expertise. Most of all, we place our
          patients’ needs above all else.
        </div>
      </div>
      <div className="flex justify-center">
        <div>
          <img src="/home4.png" alt="choices" />
        </div>
        <div className="flex items-start flex-col justify-center">
          <div>
            <h2 className="description text-4xl uppercase">
              QUALIFIED DOCTORS
            </h2>
            <div className="choicesD">
              Our experts have the knowledge, skills and tools to best serve
              your cosmetic skin care needs.
            </div>
          </div>
          <div>
            <h2 className="description text-4xl uppercase">MEDICAL CARE</h2>
            <div className="choicesD">
              TR Skin Clinic offer the ideal programme to address your
              individual concerns.
            </div>
          </div>
          <div>
            <h2 className="description text-4xl uppercase">ADVANCED LASERS</h2>
            <div className="choicesD">
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
