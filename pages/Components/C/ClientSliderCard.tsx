import React from "react";
import Image from 'next/image'
const ClientSliderCard = ({logoSrc}:any) => {
  return (
    <div className="client-slider-Card bg-[#fff] py-[10px] rounded-md">
      <Image src={logoSrc} alt="Company Logo" className="h-full w-full" />
    </div>
  );
};

export default ClientSliderCard;
