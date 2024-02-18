import React from "react";
import Image from "next/image";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const TestmonialsSliderCard = ({
  CardPic,
  ClientName,
  ClientProject,
  ClientMessage,
}: any) => {
  return (
    <div className="tesmonials-card">
      <div className="imagebox-testmonials w-[100px] h-[100px] rounded-full overflow-hidden">
        <Image src={CardPic} alt={ClientName} className="h-full w-full" />
      </div>
      <div className="detailbox-testmonilas w-full relative py-4">
        <h2 className="text-center font-bold text-[#505050]">{ClientName}</h2>
        <h3 className="text-center text-xl font-bold">{ClientProject}</h3>
        <p className="text-center text-[16px] ">{ClientMessage}</p>
      </div>
    </div>
  );
};

export default TestmonialsSliderCard;
