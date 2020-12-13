import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="homepage-container">
      <Slider {...settings}>
        <div className="w-screen h-96">
          <h3>1</h3>
        </div>
        <div className="w-screen h-auto">
          <h3>2</h3>
        </div>
        <div className="w-screen h-auto">
          <h3>3</h3>
        </div>
      </Slider>
    </div>
  );
};
export default Home;
