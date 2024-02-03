import React from "react";
import Marquee from "react-fast-marquee";

const Marque = () => {
  return (
    <div className="w-[120px] ">
      <Marquee speed={60} direction="right">
        <div className="flex justify-center items-center gap-2">
          <div className="w-[120px] h-[3px] bg-red-400 rounded-[30px]"></div>
          <div className="w-[20px] h-[3px] bg-red-400 rounded-[30px]"></div>
          <div className="w-[2px] h-[3px]"></div>
        </div>
      </Marquee>
    </div>
  );
};

export default Marque;
