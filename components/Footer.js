import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer lg:mt-24 md:mt-20 sm:mt-16 smm:mt-16 bg-footer-bluei flex items-center justify-center text-center font-light lg:text-lg md:text-base sm:text-sm smm:text-xs">
      <div className="h-auto w-11/12 lg:my-20 md:my-16 sm:my-10 smm:my-10 mx-auto flex justify-center items-center flex-row">
        <div className="w-6/12 h-auto md:w-5/12">
          <div className="footer-brand mx-auto lg:my-9 md:my-8 sm:my-5 smm:my-5 lg:w-6/12 lg:h-3/12 smm:w-6/12">
            <Image
              src="/footer.png"
              width={290}
              height={130}
              alt="tanuja reddy clinic"
            />
          </div>
          <div className="">
            Tanuja Reddy Skin Clinic Located in Chennai is committed to provide
            excellence in a very affectionate and gracious ambience. We are
            well-known for our outstanding patient care quality services.
          </div>
        </div>
        <div className="w-6/12 h-auto md:w-7/12">
          <h2 className="footer-head text-center lg:text-4xl md:text-2xl sm:text-base smm:text-sm lg:mb-5 md:mb-4 sm:mb-3 smm:mb-3">
            HEAD OFFICE
          </h2>
          <div className="flex flex-col md:flex-row md:justify-center md:items-center justify-center items-center">
            <div className=" md:mb-0 sm:mb-2 smm:mb-2 md:mr-3">
              <div>No 175 Vijaya Health Centre,</div>
              <div>NSK Salai, Vadapalani,</div>
              <div>Opposite Bus Depot</div>
              <div>Chennai, Tamil Nadu 600026, India</div>
            </div>
            <div className="vl smm:hidden sm:hidden md:block"></div>
            <div className="md:ml-3">
              <div>Mon - Fri : 10:30 AM - 6:00 PM</div>
              <div>Sat: 10:30 PM - 4:00 PM</div>
              <div>Sunday Closed</div>
              <div>Contact Us: +91 77080 07026</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
