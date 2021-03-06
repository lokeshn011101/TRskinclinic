import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";
import Image from "next/image";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 5];

const trans1 = (x, y) => `translate3d(${x / 15}px,${y / 6 - 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 37 + 20}px,${y / 28 - 15}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 12 + 23}px,${y / 6 - 18}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 32.5 + 16}px,${y / 31 - 19}px,0)`;

const TreatmentsCard = ({ treatment, Name, trImage }) => {
  const router = useRouter();
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 300, friction: 140 },
  }));
  return (
    <div className="tr-container mx-auto" data-aos="fade-right">
      <div className="tr-bg mx-auto relative">
        <Image
          width={1519}
          height={396}
          src="/Treatments/bg.jpg"
          alt="Say goodbye to all your skin woes"
          className="w-full h-full"
        />
        <div className="w-full h-full">
          <animated.div
            onMouseMove={({ clientX: x, clientY: y }) => {
              set({ xy: calc(x, y) });
            }}
            style={{
              transform: props.xy ? props.xy.interpolate(trans2) : null,
            }}
            className="treimg-container absolute w-4/12"
          >
            <div>
              <Image
                width={506}
                height={362}
                src={`/Treatments/${treatment}/pic.png`}
                alt="treatment image"
                className="treimg"
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
            className="tr-container absolute"
            id="tr1"
          >
            <div className="trimg" id="tr11">
              <Image
                width={157}
                height={118}
                src="/Treatments/top.png"
                alt="dandelion"
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
            className="tr-container absolute  "
            id="tr2"
          >
            <div className="trimg" id="tr22">
              <Image
                width={357}
                height={258}
                src="/Treatments/bottom.png"
                alt="dandelion"
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
            className="trh absolute bottom-0 right-8 overflow-hidden"
          >
            <div className="tr-heading overflow-hidden text-black lg:text-7xl md:text-4xl sm:text-2xl smm:text-base flex flex-col justify-start items-center">
              <h1 className="w-full">{Name}</h1>
            </div>
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentsCard;
