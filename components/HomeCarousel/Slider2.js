import React from "react";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 5];

const trans0 = (x, y) => `translate3d(${x / 35}px,${y / 35 - 10}px,0)`;
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
    <div className="carou-container mx-auto ">
      <div className="home-img1 relative">
        <Image
          src="/Home/Home2/home21.png"
          alt="Say goodbye to all your skin woes"
          className="w-full h-full"
          width={1519}
          height={670}
        />
        <animated.div
          onMouseMove={({ clientX: x, clientY: y }) => {
            set({ xy: calc(x, y) });
          }}
          style={{
            transform: props.xy ? props.xy.interpolate(trans0) : null,
          }}
          className="carouel-container absolute w-full h-full"
        >
          <div className="homeimg2 absolute right-0 w-11/12 h-auto">
            <Image
              src="/Home/Home2/home22.png"
              alt="home2"
              width={911}
              height={600}
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
          className="carouel-container absolute w-full h-full"
        >
          <div className="h2dand absolute top-0 left-0" id="h2dand1">
            <Image
              src="/Home/Home2/home23.png"
              alt="dandelion"
              width={608}
              height={413}
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
          className="carouel-container absolute w-full h-full"
        >
          <div className="h2dand absolute top-0 left-0" id="h2dand2">
            <Image
              src="/Home/Home2/home24.png"
              alt=""
              width={293}
              height={222}
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
          className="carouel-container absolute w-full h-full"
        >
          <div className="h2dand absolute top-0 left-0" id="h2dand3">
            <Image
              src="/Home/Home2/home25.png"
              alt=""
              width={184}
              height={153}
            />
          </div>
        </animated.div>
        <div className="homecar-heading3 absolute lg:ml-20 md:ml-16 sm:ml-14 smm:ml-6  flex flex-col justify-center items-start">
          <div className="text-white lg:text-6xl md:text-4xl sm:text-2xl smm:text-lg uppercase flex flex-col justify-start items-start">
            <h1 className="w-full hh3">because,</h1>
            <h1 className="w-full hh3">your skin</h1>
            <h1 className="w-full hh3">deserves</h1>
            <h1 className="w-full">the very best</h1>
          </div>
          <button
            onClick={() => router.push("/appointments")}
            className="cursor-pointer but1 lg:text-base md:text-base sm:text-sm smm:text-xs md:my-5 sm:my-3 my-1 p-2 px-3 mdd:p-1 rounded-full bg-white text-skin-dark"
          >
            <Link href="/appointments">Book An Appointment</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider2;
