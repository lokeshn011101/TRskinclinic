import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="overflow-hidden">
      <div className="lg:py-16 md:py-12 sm:py-10 smm:py-8 w-11/12 flex flex-col justify-center items-center mx-auto text-center overflow-hidden">
        <h1
          className="about-head2 lg:text-4xl md:text-2xl sm:text-xl smm:text-lg uppercase lg:mb-4 md:mb-3 sm:mb-2 smm:mb-1 lg:mt-8 md:mt-6 sm:mt-4 smm:mt-2"
          data-aos="fade-up"
        >
          GET IN TOUCH
        </h1>
        <div
          className="about-desc2 w-4/5 lg:text-base md:text-base sm:text-sm smm:text-xs"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-offset="50"
        >
          <div className="lg:mb-8 md:mb-5 sm:mb-4 smm:mb-2">
            Please call or email and we will be happy to assist you.
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row lg:justify-center lg:items-center w-full h-full ">
        <div className="sm:w-1/2 bg-skin-medium">
          <div
            className="w-full sm:h-full h-10/12 bg-skin-medium"
            data-aos="fade-right"
            data-aos-offset="250"
          >
            <iframe
              width="100%"
              height="700px"
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJNzAz0ZFnUjoRisAc5Vm4SB4&key=AIzaSyCCjkT1IB-TO2cfqltUVmSNEm7F3p4So5w"
            ></iframe>
          </div>
        </div>
        <div className="cont sm:w-1/2 w-full smm:mt-16 bg-skin-medium p-5 sm:p-10">
          <div
            className="flex flex-row sm:flex-col sm:items-start smm:pl-2 lg:pl-10 sm:py-10 justify-center sm:h-1/3 items-center md:text-xl sm:text-base"
            data-aos="fade-left"
            data-aos-offset="250"
          >
            <div className="w-2/12">
              <Image
                width={0}
                height={0}
                layout="responsive"
                src="/Contact/phone.png"
                alt="phone"
              />
            </div>
            <div className="w-10/12 smm:pl-4">
              <div>Call for appointments: +91 77080 07026</div>
              <div>WhatsApp only: +91 95661 88117</div>
            </div>
          </div>
          <div
            className="flex flex-row sm:flex-col sm:items-start smm:pl-2 lg:pl-10 sm:py-10 justify-center sm:h-1/3 items-center md:text-xl sm:text-base"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="150"
          >
            <div className="w-2/12">
              <Image
                width={0}
                height={0}
                layout="responsive"
                src="/Contact/email.png"
                alt="email"
              />
            </div>
            <div className="w-10/12 smm:pl-4">
              tanujareddyskinclinic@gmail.com
            </div>
          </div>
          <div
            className="flex flex-row sm:flex-col sm:items-start smm:pl-2 lg:pl-10 sm:py-10 justify-center sm:h-1/3 items-center md:text-xl sm:text-base"
            data-aos="fade-left"
            data-aos-offset="150"
            data-aos-delay="100"
          >
            <div className="w-2/12">
              <Image
                width={0}
                height={0}
                layout="responsive"
                src="/Contact/locc.png"
                alt="location"
              />
            </div>
            <div className="w-10/12 smm:pl-4">
              No 175 Vijaya Health Centre, NSK Salai, Vadapalani, Chennai –
              600026, (Opposite Bus Depot, India)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
