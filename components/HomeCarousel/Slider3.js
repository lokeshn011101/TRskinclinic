import React from "react";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 5];

const trans1 = (x, y) => `translate3d(${x / 25}px,${y / 25 - 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 12 + 20}px,${y / 18 - 15}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 18 + 23}px,${y / 18 - 18}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 17.5 + 16}px,${y / 20 - 19}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 28 + 19}px,${y / 28 - 13}px,0)`;

const Slider1 = () => {
  const router = useRouter();
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 300, friction: 140 },
  }));
  return (
    <div className="carou-container mx-auto overflow-hidden">
      <div className="home-img1 relative">
        <Image
          src="/Home/Home3/home31.png"
          alt="Say goodbye to all your skin woes"
          className="w-full h-full"
          width={1528}
          height={670}
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
          <div className="homeimg3 absolute right-0 w-5/12 h-auto ">
            <Image
              src="/Home/Home3/home32.png"
              alt="home1"
              width={722}
              height={700}
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
          <div className="h3dand absolute top-0 left-0" id="h3dand1">
            <Image
              width={220}
              height={179}
              src="/Home/Home3/hometop.png"
              alt="dandelion"
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
          <div className="h3dand absolute top-0 left-0" id="h3dand2">
            <Image
              src="/Home/Home3/homeright.png"
              alt=""
              width={466}
              height={387}
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
          <div className="h3dand absolute top-0 left-0" id="h3dand3">
            <Image
              src="/Home/Home3/homebottom.png"
              width={400}
              height={290}
              alt=""
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
          className="carouel-container absolute w-full h-full"
        >
          <div>
            <img
              src="/Home/Home3/linenearface.png"
              alt="img"
              className=" absolute top-0 left-0"
              id="h3dand4"
            />
          </div>
        </animated.div>
        <div className="homecar-heading3 absolute lg:ml-20 md:ml-16 sm:ml-14 smm:ml-6  flex flex-col justify-center items-start">
          <div className=" lg:text-6xl md:text-4xl sm:text-2xl smm:text-lg uppercase flex flex-col justify-start items-start">
            <h1 className="w-full hh">Chennai's</h1>
            <h1 className="w-full hh">leading Skin Clinic</h1>
            <h1 className="w-full hh">is only an</h1>
            <h1 className="w-full">appointment away!</h1>
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

export default Slider1;
