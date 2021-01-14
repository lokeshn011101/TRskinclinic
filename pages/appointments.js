import React, { useEffect } from "react";
import Image from "next/image";
import AppointmentsCard from "../components/AppointmentsCard";
import AOS from "aos";

const Appointment = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div className="lg:py-16 md:py-12 sm:py-10 smm:py-8 w-11/12 flex flex-col justify-center items-center mx-auto text-center overflow-hidden">
        <h1
          className="about-head2 lg:text-4xl md:text-2xl sm:text-xl smm:text-lg uppercase lg:mb-4 md:mb-3 sm:mb-2 smm:mb-1 lg:mt-8 md:mt-6 sm:mt-4 smm:mt-2"
          data-aos="fade-up"
        >
          Get in touch with us to book an appointment
        </h1>
        <div
          className="about-desc2 w-4/5 lg:text-base md:text-base sm:text-sm smm:text-xs"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-offset="50"
        >
          <div className="lg:mb-8 md:mb-5 sm:mb-4 smm:mb-2">
            Say goodbye to your skin woes, by booking an appointment with us.
          </div>
        </div>
      </div>
      <div className="lg:mb-10 md:mb-7 sm:mb-5 smm:mb-3">
        <div className="overflow-hidden">
          <AppointmentsCard />
        </div>
      </div>
      <div className="appt lg:p-8 md:p-5 sm:p-4 smm:p-2 flex flex-col justify-center items-center mx-auto ">
        <div
          className="lg:p-8 md:p-5 sm:p-4 smm:p-2 about-desc2 text-center lg:text-base md:text-base sm:text-sm smm:text-xs"
          data-aos="fade-up"
          data-aos-offset="150"
        >
          Contact us for consultation and our doctors will be delighted to
          assist you and answer any questions you may have regarding our
          treatments.
        </div>
        <div className="lg:text-base md:text-base sm:text-sm smm:text-xs">
          <div
            className="stepss flex flex-row items-center lg:px-5 md:px-12 sm:px-10 smm:px-8 lg:my-7 md:my-5 sm:my-4 smm:my-3 font-light"
            data-aos="fade-up"
            data-aos-offset="150"
          >
            <div className="lg:mr-5 md:mr-12 sm:mr-10 smm:mr-5 w-2/12">
              <Image
                width={0}
                height={0}
                layout="responsive"
                src="/Contact/phone.png"
                alt="phone"
              />
            </div>
            <div className="w-full">
              Take the first step towards your ideal skin. Call us at +91 77080
              07026 during our working hours.
            </div>
          </div>
          <div
            className="stepss flex flex-row items-center lg:px-5 md:px-12 sm:px-10 smm:px-8 lg:my-7 md:my-5 sm:my-4 smm:my-3 font-light"
            data-aos="fade-up"
            data-aos-offset="150"
          >
            <div className="lg:mr-5 md:mr-12 sm:mr-10 smm:mr-5 w-2/12">
              <Image
                width={0}
                height={0}
                layout="responsive"
                src="/Contact/msg.png"
                alt="message"
              />
            </div>
            <div className="w-full">
              Briefly mention the purpose of your visit and schedule your
              appointment.
            </div>
          </div>
          <div
            className="stepss flex flex-row items-center lg:px-5 md:px-12 sm:px-10 smm:px-8 lg:my-7 md:my-5 sm:my-4 smm:my-3 font-light"
            data-aos="fade-up"
            data-aos-offset="100"
          >
            <div className="lg:mr-5 md:mr-12 sm:mr-10 smm:mr-5 w-2/12">
              <Image
                width={0}
                height={0}
                layout="responsive"
                src="/Contact/locc.png"
                alt="location"
              />
            </div>
            <div className="w-full">
              Kindly arrive on time for your appointment.
            </div>
          </div>
          <div
            className="stepss flex flex-row items-center lg:px-5 md:px-12 sm:px-10 smm:px-8 lg:my-5 md:my-4 sm:my-3 smm:my-2 font-light"
            data-aos="fade-up"
            data-aos-offset="50"
          >
            <div className="lg:mr-5 md:mr-12 sm:mr-10 smm:mr-5 w-2/12">
              <Image
                width={0}
                height={0}
                layout="responsive"
                src="/Contact/fem.png"
                alt="femaleicon"
              />
            </div>
            <div className="w-full">
              Discuss your skin woes with our doctors & they will offer you a
              solution at an affordable price.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
