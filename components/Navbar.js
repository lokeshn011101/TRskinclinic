import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const [navToggle, setNaveToggle] = useState(false);
  console.log(navToggle);
  const router = useRouter();
  return (
    <nav className="navbar-container w-screen h-auto fixed flex justify-end">
      <div className="bg-skin-lightWithOpacity flex justify-center w-full lg:my-1 lg:items-end lg:flex-row absolute shadow-sm">
        <div className="lgg:w-2/6 lgg:h-2/6 lgg:ml-8 lg:ml-10 mt-2 flex justify-center items-center lg:pb-2 ">
          <img
            onClick={() => router.push("/")}
            src="/brand.png"
            className="lg:w-10/12 lg:h-20 lgg:pb-2 lgg:w-9/12 lgg:h-11/12 cursor-pointer"
            alt="Picture of the brand"
          />
        </div>
        <div className="flex lg:flex-row items-center lg:justify-around lg:w-5/6 lg:-mr-10 lgg:hidden lgg:flex-col lgg:justify-around lgg:items-end">
          <div
            className={`${
              router.pathname === "/"
                ? "border-2 border-t-0 border-l-0 border-r-0 border-green-500 leading-8"
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
                ? "border-2 border-t-0 border-l-0 border-r-0 border-green-500 leading-8"
                : ""
            }`}
          >
            <Link href="/about" className="text-black text-md">
              About Us
            </Link>
          </div>
          <div
            className={`${
              router.pathname === "/treatments"
                ? "border-2 border-t-0 border-l-0 border-r-0 border-green-500 leading-8"
                : ""
            }`}
          >
            <Link href="/treatments" className="text-black text-md">
              Treatments
            </Link>
          </div>
          <div
            className={`${
              router.pathname === "/contact"
                ? "border-2 border-t-0 border-l-0 border-r-0 border-green-500 leading-8"
                : ""
            }`}
          >
            <Link href="/contact" className="text-black text-md">
              Contact
            </Link>
          </div>
          <div
            className={`${
              router.pathname === "/gallery"
                ? "border-2 border-t-0 border-l-0 border-r-0 border-green-500 leading-8"
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
                ? "border-2 border-t-0 border-l-0 border-r-0 border-green-500 leading-8"
                : ""
            }`}
          >
            <Link href="/appointments" className="text-black text-md">
              Book An Appointment
            </Link>
          </div>
          <div className="text-black text-md">
            Search
            <img
              className="inline w-4 h-4 ml-2"
              src="https://www.flaticon.com/svg/static/icons/svg/622/622669.svg"
            />
          </div>
        </div>
        <button
          onClick={() => setNaveToggle(!navToggle)}
          className="w-24 ml-auto focus:outline-none"
        >
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/1828/1828859.svg"
            className="w-5 h-5 rounded inline-flex lg:invisible lg:hidden lg:w-0 lg:h-0  fill-current text-black"
          ></img>
        </button>
      </div>
      {navToggle ? (
        <>
          <div className="toggler animate-slide h-screen bg-skin-light z-10 w-60">
            <div className="absolute w-4 h-4 right-5 top-3">
              <button
                className="focus:outline-none"
                onClick={() => setNaveToggle(!navToggle)}
              >
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/1828/1828778.svg"
                  alt="cross"
                />
              </button>
            </div>
            <div className="absolute w-60 flex flex-col items-end justify-between lg:hidden my-12">
              <div href="/" className="text-black text-md mr-10 mb-4">
                Search
                <img
                  className="inline w-4 h-4 ml-2"
                  src="https://www.flaticon.com/svg/static/icons/svg/622/622669.svg"
                />
              </div>
              <div className="mr-10 my-3">
                <Link href="/" className="text-black text-md">
                  Home
                </Link>
              </div>
              <div className="mr-10 my-3">
                <Link href="/about" className="text-black text-md">
                  About Us
                </Link>
              </div>
              <div className="mr-10 my-3">
                <Link href="/treatments" className="text-black text-md">
                  Treatments
                </Link>
              </div>
              <div className="mr-10 my-3">
                <Link href="/contact" className="text-black text-md">
                  Contact
                </Link>
              </div>
              <div className="mr-10 my-3">
                <Link href="/gallery" className="text-black text-md">
                  Gallery
                </Link>
              </div>
              <div className="mr-10 my-3">
                <Link href="/appointments" className="text-black text-md">
                  Book An Appointment
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
