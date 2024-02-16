import Image from "next/image";
import React from "react";

const WorkingProcessCard = ({imageSrc, AltText, Title}:any) => {
  return (
    <div className="bg-[#ff6e4e] px-[20px] py-[25px] hover:shadow-xl hover:shadow-green-600 flex flex-col text-center gap-4 justify-items-center items-center justify-center rounded-md w-[300px]">
      <Image src={imageSrc} className="!w-[120px] !h-[120px]" alt={`${AltText}`} width={120} height={120} />
      <h4 className="text-[20px] font-bold cursor-context-menu">{Title}</h4>
    </div>
  );
};

export default WorkingProcessCard;
