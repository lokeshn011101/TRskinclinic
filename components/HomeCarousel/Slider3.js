import React from "react";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";
import Link from "next/link";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 5];

const trans1 = (x, y) => `translate3d(${x / 25}px,${y / 25 - 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 7 + 20}px,${y / 18 - 15}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 13 + 23}px,${y / 13 - 18}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 12.5 + 16}px,${y / 21 - 19}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 28 + 19}px,${y / 28 - 13}px,0)`;

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
          src="/Home/Home3/home31.png"
          alt="Say goodbye to all your skin woes"
          className="w-full h-full"
        />
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
            className="homeimg3 absolute right-0 w-5/12 h-auto"
            src="/Home/Home3/home32.png"
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
            className="h3dand absolute top-0 left-0"
            id="h3dand1"
            src="/Home/Home3/hometop.png"
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
            className="h3dand absolute top-0 left-0"
            id="h3dand2"
            src="/Home/Home3/homeright.png"
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
            className="h3dand absolute top-0 left-0"
            id="h3dand3"
            src="/Home/Home3/homebottom.png"
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
            className=" absolute top-0 left-0"
            id="h3dand4"
            src="/Home/Home3/linenearface.png"
            alt=""
          />
        </animated.div>
        <div className="homecar-heading3 absolute lg:ml-20 md:ml-16 sm:ml-14 smm:ml-6  flex flex-col justify-center items-start">
          <div className=" lg:text-6xl md:text-4xl sm:text-2xl smm:text-xl uppercase flex flex-col justify-start items-start">
            <h1 className="w-full hh">Chennai's</h1>
            <h1 className="w-full hh">leading Skin Clinic</h1>
            <h1 className="w-full hh">is only an</h1>
            <h1 className="w-full">appointment away!</h1>
          </div>
          <button
            onClick={() => router.push("about")}
            className="cursor-pointer but1 lg:text-base md:text-base sm:text-sm smm:text-xs md:my-5 sm:my-3 my-1 p-2 px-3 mdd:p-1 rounded-full bg-white text-skin-dark"
          >
            <Link href="/appointment">Book An Appointment</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider1;
