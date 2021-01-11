import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import Image from "next/image";

const calc = (x, y) => [x - window.innerWidth / 5, y - window.innerHeight / 5];
const trans2 = (x, y) => `translate3d(${x / 40}px,${y / 30 - 5}px,0)`;

const Card = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 300, friction: 140 },
  }));
  const [ww, setWw] = useState(0);
  useEffect(() => {
    setWw(window.innerWidth);
  }, []);

  return (
    <div
      className="aboutcontainer overflow-hidden"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      data-aos="fade-right"
    >
      <Image
        src="/About/aboutbg.jpg"
        alt="carousel-img"
        layout="intrinsic"
        width={1519}
        height={494}
      />
      <h1 className="w-2/6 lg:mr-4 md:mr-3 sm:mr-2 smm:mr-1 right-0 absolute lg:text-6xl md:text-4xl sm:text-2xl smm:text-sm text-white card-head">
        <div className="lg:mb-3 md:mb-2 sm:mb-1 smm:mb-0">READY TO</div>
        <div className="lg:mb-3 md:mb-2 sm:mb-1 smm:mb-0">TRANSFORM </div>
        <div className="lg:mb-3 md:mb-2 sm:mb-1 smm:mb-0">YOUR SKIN?</div>
      </h1>
      <animated.div
        className="absolute w-4/12"
        style={{ transform: props.xy ? props.xy.interpolate(trans2) : null }}
      >
        <Image
          src="/About/aboutgirl.png"
          alt="carousel-img"
          width={410}
          height={426}
        />
      </animated.div>
    </div>
  );
};

export default Card;
