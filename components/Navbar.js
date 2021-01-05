import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  const Ol = React.createRef();
  const [navToggle, setNaveToggle] = useState(false);
  const [drpDwn, setDrpDwn] = useState(true);
  const router = useRouter();
  // const wrapperRef = useRef(null);
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
  //       setDrpDwn(true);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [wrapperRef]);
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
            className={`${
              router.pathname.includes("/treatments")
                ? "border-2 border-t-0 border-l-0 border-r-0 border-green-500 px-4 py-3 relative"
                : "relative"
            }`}
          >
            <button
              name="drpdwn"
              className="menu-item-t cursor-pointer select-none"
              onClick={() => {
                drpDwn
                  ? (Ol.current.style.display = "block")
                  : (Ol.current.style.display = "none");
                router.pathname.includes("/treatments")
                  ? (Ol.current.style.margin = "0 auto")
                  : (Ol.current.style.margin = "0.8rem auto 0 auto");
                setDrpDwn(!drpDwn);
              }}
            >
              Treatments
            </button>
            <ol className="sub-menu" ref={Ol}>
              <li
                className="menu-item"
                onClick={() => {
                  drpDwn
                    ? (Ol.current.style.display = "block")
                    : (Ol.current.style.display = "none");
                  router.pathname.includes("/treatments")
                    ? (Ol.current.style.margin = "0 auto")
                    : (Ol.current.style.margin = "0.8rem auto 0 auto");
                  setDrpDwn(!drpDwn);
                }}
              >
                <Link href="/treatments/chemical-peels">Chemical Peels</Link>
              </li>
              <li
                className="menu-item"
                onClick={() => {
                  drpDwn
                    ? (Ol.current.style.display = "block")
                    : (Ol.current.style.display = "none");
                  router.pathname.includes("/treatments")
                    ? (Ol.current.style.margin = "0 auto")
                    : (Ol.current.style.margin = "0.8rem auto 0 auto");
                  setDrpDwn(!drpDwn);
                }}
              >
                <Link href="/treatments/dermal-fillers">Dermal Fillers</Link>
              </li>
              <li
                className="menu-item"
                onClick={() => {
                  drpDwn
                    ? (Ol.current.style.display = "block")
                    : (Ol.current.style.display = "none");
                  router.pathname.includes("/treatments")
                    ? (Ol.current.style.margin = "0 auto")
                    : (Ol.current.style.margin = "0.8rem auto 0 auto");
                  setDrpDwn(!drpDwn);
                }}
              >
                <Link href="/treatments/anti-wrinkle-treatment">
                  Anti Wrinkle Treatment
                </Link>
              </li>
              <li
                className="menu-item"
                onClick={() => {
                  drpDwn
                    ? (Ol.current.style.display = "block")
                    : (Ol.current.style.display = "none");
                  router.pathname.includes("/treatments")
                    ? (Ol.current.style.margin = "0 auto")
                    : (Ol.current.style.margin = "0.8rem auto 0 auto");
                  setDrpDwn(!drpDwn);
                }}
              >
                <Link href="/treatments/acne-scar-treatment">
                  Acne Scar Treatment
                </Link>
              </li>
              <li
                className="menu-item"
                onClick={() => {
                  drpDwn
                    ? (Ol.current.style.display = "block")
                    : (Ol.current.style.display = "none");
                  router.pathname.includes("/treatments")
                    ? (Ol.current.style.margin = "0 auto")
                    : (Ol.current.style.margin = "0.8rem auto 0 auto");
                  setDrpDwn(!drpDwn);
                }}
              >
                <Link href="/treatments/laser-hair-removal">
                  Laser Hair Removal
                </Link>
              </li>
              <li
                className="menu-item"
                onClick={() => {
                  drpDwn
                    ? (Ol.current.style.display = "block")
                    : (Ol.current.style.display = "none");
                  router.pathname.includes("/treatments")
                    ? (Ol.current.style.margin = "0 auto")
                    : (Ol.current.style.margin = "0.8rem auto 0 auto");
                  setDrpDwn(!drpDwn);
                }}
              >
                <Link href="/treatments/skin-tags">Skin Tags</Link>
              </li>
              <li
                className="menu-item"
                onClick={() => {
                  drpDwn
                    ? (Ol.current.style.display = "block")
                    : (Ol.current.style.display = "none");
                  router.pathname.includes("/treatments")
                    ? (Ol.current.style.margin = "0 auto")
                    : (Ol.current.style.margin = "0.8rem auto 0 auto");
                  setDrpDwn(!drpDwn);
                }}
              >
                <Link href="/treatments/microdermabrasion">
                  Microdermabrasion
                </Link>
              </li>
              <li
                className="menu-item"
                onClick={() => {
                  drpDwn
                    ? (Ol.current.style.display = "block")
                    : (Ol.current.style.display = "none");
                  router.pathname.includes("/treatments")
                    ? (Ol.current.style.margin = "0 auto")
                    : (Ol.current.style.margin = "0.8rem auto 0 auto");
                  setDrpDwn(!drpDwn);
                }}
              >
                <Link href="/treatments/growth-factor-treatment">
                  Growth Factor Treatment
                </Link>
              </li>
              <li
                className="menu-item"
                onClick={() => {
                  drpDwn
                    ? (Ol.current.style.display = "block")
                    : (Ol.current.style.display = "none");
                  router.pathname.includes("/treatments")
                    ? (Ol.current.style.margin = "0 auto")
                    : (Ol.current.style.margin = "0.8rem auto 0 auto");
                  setDrpDwn(!drpDwn);
                }}
              >
                <Link href="/treatments/photo-facial">Photofacial</Link>
              </li>
              <li
                className="menu-item"
                onClick={() => {
                  drpDwn
                    ? (Ol.current.style.display = "block")
                    : (Ol.current.style.display = "none");
                  router.pathname.includes("/treatments")
                    ? (Ol.current.style.margin = "0 auto")
                    : (Ol.current.style.margin = "0.8rem auto 0 auto");
                  setDrpDwn(!drpDwn);
                }}
              >
                <Link href="/treatments/body-sculpting">Body Sculpting</Link>
              </li>
              <li
                className="menu-item"
                onClick={() => {
                  drpDwn
                    ? (Ol.current.style.display = "block")
                    : (Ol.current.style.display = "none");
                  router.pathname.includes("/treatments")
                    ? (Ol.current.style.margin = "0 auto")
                    : (Ol.current.style.margin = "0.8rem auto 0 auto");
                  setDrpDwn(!drpDwn);
                }}
              >
                <Link href="/treatments/skin-resurfacing-m22">
                  Skin Resurfacing With M22™
                </Link>
              </li>
              <li
                className="menu-item"
                onClick={() => {
                  drpDwn
                    ? (Ol.current.style.display = "block")
                    : (Ol.current.style.display = "none");
                  router.pathname.includes("/treatments")
                    ? (Ol.current.style.margin = "0 auto")
                    : (Ol.current.style.margin = "0.8rem auto 0 auto");
                  setDrpDwn(!drpDwn);
                }}
              >
                <Link href="/treatments/skin-hydration">
                  Skin Hydration with Volite
                </Link>
              </li>
            </ol>
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
              router.pathname.includes("/gallery")
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
          <div className="text-black text-md">
            Search
            <Image
              alt="icon"
              className="inline w-4 h-4 ml-2"
              src="https://www.flaticon.com/svg/static/icons/svg/622/622669.svg"
              height={16}
              width={16}
            />
          </div>
        </div>
        <button
          name="toggler"
          onClick={() => setNaveToggle(!navToggle)}
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
          <div className="toggler fixed top-0 lg:hidden animate-slide h-screen bg-skin-light z-10 w-64">
            <div className="absolute w-4 h-4 right-5 top-3">
              <button
                name="toggler"
                className="focus:outline-none"
                onClick={() => setNaveToggle(!navToggle)}
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
            <div className="absolute flex w-60 flex-col items-end justify-between lg:hidden my-12">
              <div href="/" className="text-black text-md mr-6 mb-4">
                Search
                <Image
                  alt="icon"
                  className="inline w-4 h-4 ml-2"
                  alt="search"
                  src="https://www.flaticon.com/svg/static/icons/svg/622/622669.svg"
                  height={16}
                  width={16}
                />
              </div>
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
              <div
                className="mr-6 my-3"
                onClick={() => setNaveToggle(!navToggle)}
              >
                <Link href="/treatments" className="text-black text-md">
                  TREATMENTS
                </Link>
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
