import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import SmoothCollapse from "react-smooth-collapse";

const MobileAccordion = ({
  toggleMobile,
  setToggleMobile,
  navToggle,
  setNaveToggle,
}) => {
  const data = [
    ["chemical-peels", "Chemical Peels"],
    ["dermal-fillers", "Dermal Fillers"],
    ["anti-wrinkle-treatment", "Anti Wrinkle Treatment"],
    ["acne-scar-treatment", "Acne Scar Treatment"],
    ["laser-hair-removal", "Laser Hair Removal"],
    ["skin-tags", "Skin Tags"],
    ["microdermabrasion", "Microdermabrasion"],
    ["growth-factor-treatment", "Growth Factor Treatment"],
    ["photo-facial", "Photofacial"],
    ["body-sculpting", "Body Sculpting"],
    ["skin-resurfacing-m22", "Skin Resurfacing With M22™"],
    ["skin-hydration", "Skin Hydration with Volite"],
  ];
  return (
    <div>
      <div
        className="w-full flex flex-row justify-end items-center cursor-pointer"
        onClick={() => {
          setToggleMobile(!toggleMobile);
        }}
      >
        <h2 className="pr-3 text-right uppercase select-none">TREATMENTS</h2>
        <button className="w-1/12">
          <img
            src="/MobDrp.png"
            alt="tog"
            className={
              toggleMobile === true
                ? "float-right select-none transform rotate-180"
                : "float-right select-none transform rotate-0"
            }
          />
        </button>
      </div>
      <SmoothCollapse expanded={toggleMobile}>
        {data.map((item) => {
          return (
            <div
              className="w-full text-right pt-2 accordion-text "
              onClick={() => setNaveToggle(!navToggle)}
            >
              <Link href={`/treatments/${item[0]}`} className="uppercase">
                {item[1]}
              </Link>
            </div>
          );
        })}
      </SmoothCollapse>
    </div>
  );
};

const Helper = ({ route, text }) => {
  return (
    <li className="menu-item">
      <Link href={`/treatments/${route}`}>{text}</Link>
    </li>
  );
};

const RenderItem = ({ data }) => {
  return data.map((item) => {
    return <Helper route={item[0]} text={item[1]} />;
  });
};

const Navbar = () => {
  const ref = useRef();
  const butRef = useRef();
  const [toggleMobile, setToggleMobile] = useState(false);
  const [navToggle, setNaveToggle] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (
        (ref.current && ref.current.contains(event.target)) ||
        (butRef.current && event.target.name == butRef.current.name) ||
        (butRef.current &&
          event.target.parentNode.parentNode.name == butRef.current.name)
      ) {
        return;
      }
      setNaveToggle(false);
    };
    document.body.addEventListener("click", onBodyClick);
    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const data = [
    ["chemical-peels", "Chemical Peels"],
    ["dermal-fillers", "Dermal Fillers"],
    ["anti-wrinkle-treatment", "Anti Wrinkle Treatment"],
    ["acne-scar-treatment", "Acne Scar Treatment"],
    ["laser-hair-removal", "Laser Hair Removal"],
    ["skin-tags", "Skin Tags"],
    ["microdermabrasion", "Microdermabrasion"],
    ["growth-factor-treatment", "Growth Factor Treatment"],
    ["photo-facial", "Photofacial"],
    ["body-sculpting", "Body Sculpting"],
    ["skin-resurfacing-m22", "Skin Resurfacing With M22™"],
    ["skin-hydration", "Skin Hydration with Volite"],
  ];
  return (
    <nav className="sticky top-0 navbar-container w-full h-auto flex justify-end z-10">
      <div className="bg-skin-lightWithOpacity flex justify-center w-full  lg:items-end lg:flex-row shadow-sm">
        <div className="lgg:w-4/12 lgg:h-auto mdd:ml-5 lgg:mb-2 lgg:items-end lg:ml-10 mt-2 flex justify-center items-center lg:pb-3 ">
          <Image
            onClick={() => router.push("/")}
            src="/brand.png"
            height={80}
            width={196}
            style=""
            className="lg:w-10/12 lg:h-20 lgg:pb-2 lgg:w-9/12 lgg:h-11/12 cursor-pointer"
            alt="Picture of the brand"
          />
        </div>
        <div className="navigate flex lg:flex-row items-center lg:justify-around lg:w-5/6 lg:-mr-10 lgg:hidden lgg:flex-col lgg:justify-around lgg:items-end">
          <div
            className={`${
              router.pathname === "/"
                ? "border-2 border-t-0 border-l-0 border-r-0 border-green-500 px-4 py-3"
                : ""
            }`}
          >
            <Link href="/" className="text-black text-md pb-5">
              Home
            </Link>
          </div>
          <div
            className={`${
              router.pathname === "/about"
                ? "border-2 border-t-0 border-l-0 border-r-0 border-green-500 px-4 py-3"
                : ""
            }`}
          >
            <Link href="/about" className="text-black text-md">
              About Us
            </Link>
          </div>
          <div
            className=""
            className={`${
              router.pathname.includes("/treatments/")
                ? "border-2 border-t-0 border-l-0 border-r-0 border-green-500 px-4 py-3 relative dropdown headerdrp"
                : "relative dropdown headerdrp py-3 px-4"
            }`}
          >
            <nav className="navvv">
              <ul class="cf">
                <li>
                  <div className="hhhh cursor-pointer">Treatments</div>
                  <ul className="navrenup">
                    <RenderItem data={data} />
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div
            className={`${
              router.pathname === "/contact"
                ? "border-2 border-t-0 border-l-0 border-r-0 border-green-500 px-4 py-3"
                : ""
            }`}
          >
            <Link href="/contact" className="text-black text-md">
              Contact
            </Link>
          </div>
          <div
            className={`${
              router.pathname.includes("/gallery/") ||
              router.pathname === "/gallery"
                ? "border-2 border-t-0 border-l-0 border-r-0 border-green-500 px-4 py-3"
                : ""
            }`}
          >
            <Link href="/gallery" className="text-black text-md">
              Gallery
            </Link>
          </div>
          <div
            className={`${
              router.pathname === "/appointments"
                ? "border-2 border-t-0 border-l-0 border-r-0 border-green-500 px-4 py-3"
                : ""
            }`}
          >
            <Link href="/appointments" className="text-black text-md">
              Book An Appointment
            </Link>
          </div>
          {/* <div className="text-black text-md">
            Search
            <div className="h-4 w-4 inline ml-3">
              <Image
                alt="icon"
                src="https://www.flaticon.com/svg/static/icons/svg/622/622669.svg"
                height={16}
                width={16}
              />
            </div>
          </div> */}
        </div>
        <button
          name="toggler"
          onClick={() => setNaveToggle(true)}
          className="toggler w-24 ml-auto focus:outline-none"
        >
          <Image
            alt="icon"
            src="https://www.flaticon.com/svg/static/icons/svg/1828/1828859.svg"
            className="w-5 h-5 rounded inline-flex lg:invisible lg:hidden lg:w-0 lg:h-0 fill-current text-black"
            height={20}
            width={20}
          />
        </button>
      </div>
      {navToggle ? (
        <>
          <div
            ref={ref}
            className="toggler overflow-scroll overflow-x-hidden fixed top-0 lg:hidden animate-slide h-screen shadow-2xl bg-skin-light z-10 w-64"
          >
            <div className="absolute w-4 h-4 right-5 top-3">
              <button
                name="toggler"
                className="focus:outline-none"
                onClick={() => setNaveToggle(false)}
                ref={butRef}
              >
                <Image
                  alt="icon"
                  src="https://www.flaticon.com/svg/static/icons/svg/1828/1828778.svg"
                  alt="cross"
                  height={16}
                  width={16}
                />
              </button>
            </div>
            <div className="oritog right-0 absolute flex w-60 flex-col items-end justify-between lg:hidden my-12">
              {/* <div className="text-black text-md mr-6 mb-4">
                Search
                <div className="h-4 w-4 inline ml-2">
                  <Image
                    alt="icon"
                    className="inline w-4 h-4 ml-2"
                    alt="search"
                    src="https://www.flaticon.com/svg/static/icons/svg/622/622669.svg"
                    height={16}
                    width={16}
                  />
                </div>
              </div> */}
              <div
                className="mr-6 my-3"
                onClick={() => setNaveToggle(!navToggle)}
              >
                <Link href="/" className="text-black text-md">
                  HOME
                </Link>
              </div>
              <div
                className="mr-6 my-3"
                onClick={() => setNaveToggle(!navToggle)}
              >
                <Link href="/about" className="text-black text-md">
                  ABOUT US
                </Link>
              </div>
              <div className="w-full mr-6 my-3">
                <MobileAccordion
                  navToggle={navToggle}
                  setNaveToggle={setNaveToggle}
                  toggleMobile={toggleMobile}
                  setToggleMobile={setToggleMobile}
                />
              </div>
              <div
                className="mr-6 my-3"
                onClick={() => setNaveToggle(!navToggle)}
              >
                <Link href="/contact" className="text-black text-md">
                  CONTACT
                </Link>
              </div>
              <div
                className="mr-6 my-3"
                onClick={() => setNaveToggle(!navToggle)}
              >
                <Link href="/gallery" className="text-black text-md">
                  GALLERY
                </Link>
              </div>
              <div
                className="mr-6 my-3 flex justify-end items-end"
                onClick={() => setNaveToggle(!navToggle)}
              >
                <Link href="/appointments" className="text-black text-md">
                  BOOK AN APPOINTMENT
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </nav>
  );
};
export default Navbar;
