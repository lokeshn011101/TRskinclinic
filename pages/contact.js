import React from "react";

const Contact = () => {
  return (
    <>
      <div className="lg:py-16 md:py-12 sm:py-10 smm:py-8 w-11/12 flex flex-col justify-center items-center mx-auto text-center">
        <h1 className="about-head2 lg:text-4xl md:text-2xl sm:text-xl smm:text-lg uppercase lg:mb-4 md:mb-3 sm:mb-2 smm:mb-1 lg:mt-8 md:mt-6 sm:mt-4 smm:mt-2">
          GET IN TOUCH
        </h1>
        <div className="about-desc2 w-4/5 lg:text-base md:text-base sm:text-sm smm:text-xs">
          <div className="lg:mb-8 md:mb-5 sm:mb-4 smm:mb-2">
            Please call or email and we will be happy to assist you.
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row lg:justify-center lg:items-center w-full h-full">
        <div className="w-1/2 h-full">
          <iframe
            width="100%"
            height="700px"
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJNzAz0ZFnUjoRisAc5Vm4SB4&key=AIzaSyCCjkT1IB-TO2cfqltUVmSNEm7F3p4So5w"
          ></iframe>
        </div>
        <div className="w-1/2 bg-skin-medium">
          <div>
            <img src="/phone.png" alt="phone" />
            <div>Call for appointments: +91 77080 07026</div>
            <div>WhatsApp only: +91 95661 88117</div>
          </div>
          <div>
            <img src="/email.png" alt="email" />
            <div>tanujareddyskinclinic@gmail.com</div>
          </div>
          <div>
            <img src="/locc.png" alt="location" />
            <div>
              No 175 Vijaya Health Centre, NSK Salai, Vadapalani, Chennai –
              600026, (Opposite Bus Depot, India)
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
