import React from "react";
import Image from "next/image";
import Link from "next/link";

const FeatureCard = ({
  FeatureName,
  FeatureDiscription,
  FeaturePic,
  BtnUrl,
}: any) => {
  return (
    <div className="w-[320px] rounded-tl-[65px] rounded-br-[65px] rounded-[12px] px-[25px] flex flex-col align-middle items-center bg-[#fff] py-[20px]">
      <div>
        <Image src={FeaturePic} alt="service" className="mx-auto" />
      </div>
      <h3 className="text-[20px] font-semibold py-[10px] cursor-context-menu">{FeatureName}</h3>
      <p className="text-gray-800">{FeatureDiscription}</p>
      <Link href={`${BtnUrl}`} className="my-[20px] font-bold text-[#ff6e4e]">
        Read More
      </Link>
    </div>
  );
};

export default FeatureCard;
