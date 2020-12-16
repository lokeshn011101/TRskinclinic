import React from "react";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 5];

const trans1 = (x, y) => `translate3d(${x / 25}px,${y / 25 - 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 18 + 20}px,${y / 18 - 15}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 13 + 23}px,${y / 13 - 18}px,0)`;

const Slider2 = () => {
  const router = useRouter();
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 300, friction: 140 },
  }));
  return (
    <div className="carou-container">
      <div className="home-img1 relative">
        <img
          src="/Home/Home2/home21.png"
          alt="Say goodbye to all your skin woes"
          className="w-full h-full"
        />
        <button
          onClick={() => router.push("about")}
          className="cursor-pointer doct-buth1 lg:text-base md:text-base sm:text-sm smm:text-xs absolute bottom-0 left-0 md:my-32 p-2 px-3 md:mx-24  mdd:mx-9 mdd:my-4 mdd:p-1 rounded-full bg-white text-skin-dark"
        >
          Book An Appointment
        </button>
        <img
          className="homeimg2 absolute right-0 w-11/12 h-auto"
          src="/Home/Home2/home22.png"
          alt="home2"
        />
        <div className="homecar-heading2 text-white absolute lg:text-7xl md:text-4xl sm:text-2xl smm:text-sm lg:w-5/12 lgg:w-4/12 uppercase flex flex-col justify-start items-center">
          <h1 className="w-full">because,</h1>
          <h1 className="w-full">your skin</h1>
          <h1 className="w-full">deserves</h1>
          <h1 className="w-full">the very best</h1>
        </div>
        <animated.div
          onMouseMove={({ clientX: x, clientY: y }) => {
            set({ xy: calc(x, y) });
          }}
          style={{
            transform: props.xy ? props.xy.interpolate(trans1) : null,
          }}
          className="carouel-container absolute w-full h-full"
        >
          <img
            className="h2dand absolute top-0 left-0"
            id="h2dand1"
            src="/Home/Home2/home23.png"
            alt="dandelion"
          />
        </animated.div>
        <animated.div
          onMouseMove={({ clientX: x, clientY: y }) => {
            set({ xy: calc(x, y) });
          }}
          style={{
            transform: props.xy ? props.xy.interpolate(trans2) : null,
          }}
          className="carouel-container absolute w-full h-full"
        >
          <img
            className="h2dand absolute top-0 left-0"
            id="h2dand2"
            src="/Home/Home2/home24.png"
            alt=""
          />
        </animated.div>
        <animated.div
          onMouseMove={({ clientX: x, clientY: y }) => {
            set({ xy: calc(x, y) });
          }}
          style={{
            transform: props.xy ? props.xy.interpolate(trans3) : null,
          }}
          className="carouel-container absolute w-full h-full"
        >
          <img
            className="h2dand absolute top-0 left-0"
            id="h2dand3"
            src="/Home/Home2/home25.png"
            alt=""
          />
        </animated.div>
      </div>
    </div>
  );
};

export default Slider2;
