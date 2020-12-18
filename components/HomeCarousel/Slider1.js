import React from "react";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 5];

const trans0 = (x, y) => `translate3d(${x / 35}px,${y / 35 - 10}px,0)`;
const trans1 = (x, y) => `translate3d(${x / 25}px,${y / 25 - 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 18 + 20}px,${y / 18 - 15}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 13 + 23}px,${y / 13 - 18}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 21 + 16}px,${y / 21 - 19}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 28 + 19}px,${y / 28 - 13}px,0)`;
const trans6 = (x, y) => `translate3d(${x / 23 + 15}px,${y / 23 - 15}px,0)`;
const trans7 = (x, y) => `translate3d(${x / 20 + 13}px,${y / 20 - 16}px,0)`;
const trans8 = (x, y) => `translate3d(${x / 17 + 27}px,${y / 17 - 26}px,0)`;

const Slider1 = () => {
  const router = useRouter();
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 300, friction: 140 },
  }));
  return (
    <div className="carou-container">
      <div className="home-img1 relative">
        <img
          src="/Home/Home1/homebg1.png"
          alt="Say goodbye to all your skin woes"
          className="w-full h-full"
        />
        <div className="homecar-heading absolute lg:text-7xl md:text-4xl sm:text-2xl smm:text-sm lg:w-4/12 lgg:w-3/12 uppercase flex flex-col justify-start items-center">
          <h1 className="w-full">Say Goodbye</h1>
          <h1 className="w-full">to all your</h1>
          <h1 className="w-full">skin woes</h1>
        </div>
        <button
          onClick={() => router.push("about")}
          className="cursor-pointer doct-buth1 lg:text-base md:text-base sm:text-sm smm:text-xs absolute bottom-0 left-0 md:my-20 p-2 px-3 md:mx-32  mdd:mx-9 mdd:my-4 mdd:p-1 rounded-full bg-white text-skin-dark"
        >
          Book An Appointment
        </button>
        <animated.div
          onMouseMove={({ clientX: x, clientY: y }) => {
            set({ xy: calc(x, y) });
          }}
          style={{
            transform: props.xy ? props.xy.interpolate(trans0) : null,
          }}
          className="carouel-container absolute w-full h-full"
        >
          <img
            className="homeimg1 absolute right-0 w-6/12 h-auto"
            src="/Home/Home1/homeimg1.png"
            alt="home1"
          />
        </animated.div>
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
            className="h1dand absolute top-0 left-0"
            id="h1dand1"
            src="/Home/Home1/home11.png"
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
            className="h1dand absolute top-0 left-0"
            id="h1dand2"
            src="/Home/Home1/home12.png"
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
            className="h1dand absolute top-0 left-0"
            id="h1dand3"
            src="/Home/Home1/home13.png"
            alt=""
          />
        </animated.div>
        <animated.div
          onMouseMove={({ clientX: x, clientY: y }) => {
            set({ xy: calc(x, y) });
          }}
          style={{
            transform: props.xy ? props.xy.interpolate(trans4) : null,
          }}
          className="carouel-container absolute w-full h-full"
        >
          <img
            className="h1dand absolute top-0 left-0"
            id="h1dand4"
            src="/Home/Home1/home14.png"
            alt=""
          />
        </animated.div>
        <animated.div
          onMouseMove={({ clientX: x, clientY: y }) => {
            set({ xy: calc(x, y) });
          }}
          style={{
            transform: props.xy ? props.xy.interpolate(trans5) : null,
          }}
          className="carouel-container absolute w-full h-full"
        >
          <img
            className="h1dand absolute top-0 left-0"
            id="h1dand5"
            src="/Home/Home1/home15.png"
            alt=""
          />
        </animated.div>
        <animated.div
          onMouseMove={({ clientX: x, clientY: y }) => {
            set({ xy: calc(x, y) });
          }}
          style={{
            transform: props.xy ? props.xy.interpolate(trans6) : null,
          }}
          className="carouel-container absolute w-full h-full"
        >
          <img
            className="h1dand absolute top-0 left-0"
            id="h1dand6"
            src="/Home/Home1/home16.png"
            alt=""
          />
        </animated.div>
        <animated.div
          onMouseMove={({ clientX: x, clientY: y }) => {
            set({ xy: calc(x, y) });
          }}
          style={{
            transform: props.xy ? props.xy.interpolate(trans7) : null,
          }}
          className="carouel-container absolute w-full h-full"
        >
          <img
            className="h1dand absolute top-0 left-0"
            id="h1dand7"
            src="/Home/Home1/home17.png"
            alt=""
          />
        </animated.div>
        <animated.div
          onMouseMove={({ clientX: x, clientY: y }) => {
            set({ xy: calc(x, y) });
          }}
          style={{
            transform: props.xy ? props.xy.interpolate(trans8) : null,
          }}
          className="carouel-container absolute w-full h-full"
        >
          <img
            className="h1dand absolute top-0 left-0"
            id="h1dand8"
            src="/Home/Home1/home18.png"
            alt=""
          />
        </animated.div>
      </div>
    </div>
  );
};

export default Slider1;
