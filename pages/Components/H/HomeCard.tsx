import React from "react";
import Image from "next/image";
import Link from "next/link";

const Homecard = ({ imageUrl }: any) => {
  return (
    <div className="w-[320px] shadow-xl rounded-tl-[44px] rounded-br-[44px] rounded-[12px] overflow-hidden shadow-gray-600">
      <div className="bg-[#ffb72f] ">
        <Image src={imageUrl} alt="img" />
      </div>
      <div className="flex flex-col gap-[4px] text-justify bg-[#151414]">
        <p className="text-1xl text-[#fff] bg-[#202020] p-[12px]">
          Posted by <span className="text-[#ff6e4e] font-medium">Admin</span>
        </p>
        <Link href="/" className="text-2xl text-[#ff6e4e] font-semibold hover:text-[#f18066d3] px-[12px]">
          SEO trend to look for the best in 2018
        </Link>
        <p className="text-[#fff] p-[12px]">
          One of the top 100 advertising of a marketing agencies know that how
          to grow your busines
        </p>
      </div>
    </div>
  );
};

export default Homecard;
