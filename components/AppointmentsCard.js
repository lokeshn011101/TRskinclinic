import React from "react";
import { useSpring, animated } from "react-spring";
import Image from "next/image";
import AOS from "aos";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 5];

const trans0 = (x, y) => `translate3d(${x / 35}px,${y / 80 - 5}px,0)`;
const trans1 = (x, y) => `translate3d(${x / 25}px,${y / 25 - 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 18 + 20}px,${y / 18 - 15}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 13 + 23}px,${y / 13 - 18}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 21 + 16}px,${y / 21 - 19}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 28 + 19}px,${y / 28 - 13}px,0)`;
const trans6 = (x, y) => `translate3d(${x / 23 + 15}px,${y / 23 - 15}px,0)`;
const trans7 = (x, y) => `translate3d(${x / 20 + 13}px,${y / 20 - 16}px,0)`;
const trans8 = (x, y) => `translate3d(${x / 17 + 27}px,${y / 17 - 26}px,0)`;
const trans10 = (x, y) => `translate3d(${x / 30}px,${y / 30}px,0)`;

const Slider1 = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 300, friction: 140 },
  }));
  return (
    <div
      className="carou-containerapp overflow-hidden mx-auto"
      data-aos="fade-right"
    >
      <div className="home-img1 relative overflow-hidden">
        <Image
          src="/Appointments/appbg.png"
          width={1528}
          height={400}
          alt="Say goodbye to all your skin woes"
          className="w-full h-full"
        />

        <animated.div
          onMouseMove={({ clientX: x, clientY: y }) => {
            set({ xy: calc(x, y) });
          }}
          style={{
            transform: props.xy ? props.xy.interpolate(trans0) : null,
          }}
          className="carouel-container absolute top-0 right-0 w-full h-full"
        >
          <div className="appimg1 absolute lg:-right-24 md:-right-16 sm:-right-10 smm:-right-5 w-9/12 h-auto overflow-hidden">
            <Image
              className="oveflow-hidden"
              src="/Appointments/appgirl.png"
              alt="home1"
              width={1300}
              height={470}
            />
          </div>
        </animated.div>
        <animated.div
          onMouseMove={({ clientX: x, clientY: y }) => {
            set({ xy: calc(x, y) });
          }}
          style={{
            transform: props.xy ? props.xy.interpolate(trans1) : null,
          }}
          className="carouel-container top-0 right-0 absolute w-full h-full"
        >
          <div id="h1dand1" className="h1dand absolute top-0 left-0">
            <Image
              src="/Appointments/1.png"
              alt="dandelion"
              width={41}
              height={46}
            />
          </div>
        </animated.div>
        <animated.div
          onMouseMove={({ clientX: x, clientY: y }) => {
            set({ xy: calc(x, y) });
          }}
          style={{
            transform: props.xy ? props.xy.interpolate(trans2) : null,
          }}
          className="carouel-container top-0 right-0 absolute w-full h-full"
        >
          <div className="h1dand absolute top-0 left-0" id="h1dand2">
            <Image
              src="/Appointments/2.png"
              alt="dand"
              width={60}
              height={81}
            />
          </div>
        </animated.div>
        <animated.div
          onMouseMove={({ clientX: x, clientY: y }) => {
            set({ xy: calc(x, y) });
          }}
          style={{
            transform: props.xy ? props.xy.interpolate(trans3) : null,
          }}
          className="carouel-container top-0 right-0 absolute w-full h-full"
        >
          <div className="h1dand absolute top-0 left-0" id="h1dand3">
            <Image
              src="/Appointments/3.png"
              alt="dand"
              width={40}
              height={87}
            />
          </div>
        </animated.div>
        <animated.div
          onMouseMove={({ clientX: x, clientY: y }) => {
            set({ xy: calc(x, y) });
          }}
          style={{
            transform: props.xy ? props.xy.interpolate(trans4) : null,
          }}
          className="carouel-container top-0 right-0 absolute w-full h-full"
        >
          <div className="h1dand absolute top-0 left-0" id="h1dand4">
            <Image src="/Appointments/4.png" alt="" width={35} height={45} />
          </div>
        </animated.div>
        <animated.div
          onMouseMove={({ clientX: x, clientY: y }) => {
            set({ xy: calc(x, y) });
          }}
          style={{
            transform: props.xy ? props.xy.interpolate(trans5) : null,
          }}
          className="carouel-container top-0 right-0 absolute w-full h-full"
        >
          <div className="h1dand absolute top-0 left-0" id="h1dand5">
            <Image src="/Appointments/5.png" alt="" width={38} height={27} />
          </div>
        </animated.div>
        <animated.div
          onMouseMove={({ clientX: x, clientY: y }) => {
            set({ xy: calc(x, y) });
          }}
          style={{
            transform: props.xy ? props.xy.interpolate(trans6) : null,
          }}
          className="carouel-container top-0 right-0 absolute w-full h-full"
        >
          <div className="h1dand absolute top-0 left-0" id="h1dand6">
            <Image src="/Appointments/6.png" alt="" width={105} height={45} />
          </div>
        </animated.div>
        <animated.div
          onMouseMove={({ clientX: x, clientY: y }) => {
            set({ xy: calc(x, y) });
          }}
          style={{
            transform: props.xy ? props.xy.interpolate(trans7) : null,
          }}
          className="carouel-container top-0 right-0 absolute w-full h-full"
        >
          <div className="h1dand absolute top-0 left-0" id="h1dand7">
            <Image src="/Appointments/7.png" alt="" width={25} height={37} />
          </div>
        </animated.div>
        <animated.div
          onMouseMove={({ clientX: x, clientY: y }) => {
            set({ xy: calc(x, y) });
          }}
          style={{
            transform: props.xy ? props.xy.interpolate(trans8) : null,
          }}
          className="carouel-container top-0 right-0 absolute w-full h-full"
        >
          <div className="h1dand absolute top-0 left-0" id="h1dand8">
            <Image src="/Appointments/8.png" width={73} height={30} alt="" />
          </div>
        </animated.div>
        <animated.div
          onMouseMove={({ clientX: x, clientY: y }) => {
            set({ xy: calc(x, y) });
          }}
          style={{
            transform: props.xy ? props.xy.interpolate(trans10) : null,
          }}
          className="absolute app-headingpar flex flex-col justify-center items-start overflow-visible"
        >
          <div className="app-heading text-white lg:text-4xl md:text-2xl sm:text-xl smm:text-lg flex flex-col justify-start items-start">
            <h1>Experience The Difference</h1>
          </div>
        </animated.div>
      </div>
    </div>
  );
};

export default Slider1;
