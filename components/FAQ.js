import React, { useState } from "react";
import Image from "next/image";

const Helper = ({ item }) => {
  const [toggle, setToggle] = useState("");
  const content = React.createRef();
  const toggleAccordion = () => {
    setToggle(toggle === "" ? "active" : "");
  };

  return (
    <div key={item[0]} className="">
      <div
        className={
          toggle === "active"
            ? "accc acctitle bg-skin-light flex flex-row justify-between items-center cursor-pointer"
            : "acctitle bg-skin-light flex flex-row justify-between items-center cursor-pointer"
        }
        onClick={toggleAccordion}>
        <h2 className="w-10/12 p-4 uppercase select-none">{item[0]}</h2>
        <button className="w-1/12">
          <Image
            src={toggle === "active" ? "/drpClose.png" : "/drpOpen.png"}
            alt={item[0]}
            className={
              toggle === "active"
                ? "float-right pr-4 select-none"
                : "float-right pr-2 select-none"
            }
          />
        </button>
      </div>
      <div
        ref={content}
        className={
          toggle === "active"
            ? "bg-skin-belowMedium p-4 py-5 accordion-text acc"
            : "bg-skin-belowMedium p-4 py-5 accordion-text hidden"
        }>
        {item[1]}
      </div>
    </div>
  );
};

const RenderItem = ({ data }) => {
  return data.map((item) => {
    return <Helper item={item} />;
  });
};

const FAQ = ({ data }) => {
  return (
    <div className="mx-auto w-full md:mt-24 sm:mt-20 smm:mt-16">
      <h1 className="trhd2 w-3/4 mx-auto lg:text-4xl md:text-2xl sm:text-xl smm:text-lg mdd:text-center">
        FAQ's
      </h1>
      <div className="acc w-3/4 trdesc mx-auto mt-7">
        <RenderItem data={data} />
      </div>
    </div>
  );
};

export default FAQ;
