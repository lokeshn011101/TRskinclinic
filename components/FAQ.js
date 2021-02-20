import React, { useState, useEffect } from "react";
import AOS from "aos";
import SmoothCollapse from "react-smooth-collapse";

const Helper = ({ item }) => {
  const [toggle, setToggle] = useState(false);
  const content = React.createRef();
  const toggleAccordion = () => {
    setToggle(toggle === false ? true : false);
  };

  return (
    <div key={item[0]} className="" data-aos="fade-up">
      <div
        className={
          toggle === true
            ? "accc acctitle bg-skin-light flex flex-row justify-between items-center cursor-pointer"
            : "acctitle bg-skin-light flex flex-row justify-between items-center cursor-pointer"
        }
        onClick={toggleAccordion}
      >
        <h2 className="w-10/12 p-4 uppercase select-none">{item[0]}</h2>
        <button className="w-1/12">
          <img
            src={toggle === true ? "/drpClose.png" : "/drpOpen.png"}
            alt={item[0]}
            className={
              toggle === true
                ? "float-right pr-4 select-none"
                : "float-right pr-2 select-none"
            }
          />
        </button>
      </div>
      <SmoothCollapse expanded={toggle}>
        <div className="p-4 py-5 accordion-text">{item[1]}</div>
      </SmoothCollapse>
    </div>
  );
};

const RenderItem = ({ data }) => {
  return data.map((item) => {
    return <Helper item={item} />;
  });
};

const FAQ = ({ data }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="mx-auto w-full md:mt-24 sm:mt-20 smm:mt-16">
      <h1
        className="trhd2 w-11/12 sm:w-3/4 mx-auto lg:text-4xl md:text-2xl sm:text-xl smm:text-lg mdd:text-center"
        data-aos="fade-up"
      >
        FAQ's
      </h1>
      <div className="acc w-11/12 sm:w-3/4 trdesc mx-auto mt-7">
        <RenderItem data={data} />
      </div>
    </div>
  );
};

export default FAQ;
