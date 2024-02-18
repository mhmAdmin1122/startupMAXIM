import Image from "next/image";
import React from "react";
import heroabout from "@/public/img/aboutheropic.png";

const HeroAbout = () => {
  return (
    <section className="Hero-About">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="heroAbout-box flex justify-center gap-12 items-center">
        <div className="heroabout-picbox w-[400px] p-[40px]">
          <Image src={heroabout} alt="hero-about-illustrator" className="w-full h-full" />
        </div>
        <div className="content text-right leading-10 py-[50px] pr-[30px]">
          <h3 className="text-gray-700 text-[27px] font-bold heroAbout-line1">
            WE LIVE, BREATH {"&"} CARE
          </h3>
          <h2 className="text-[var(--secondary-color)] text-[50px] font-black heroAbout-line2">
            FOR STARTUPS
          </h2>
          <h3 className="text-gray-700 text-[30px] font-bold heroAbout-line3">MARKETING.</h3>
          <p className="text-[var(--secondary-color)] font-semibold heroAbout-line4">
            We{"'"}re not the best, but have the potential to be the best.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
