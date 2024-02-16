import React from "react";

const HeroAbout = () => {
  return (
    <section className="Hero-About">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="content text-right leading-10 py-[50px] pr-[30px]">
        <h3 className="text-gray-700 text-[27px] font-bold">WE LIVE, BREATH {'&'} CARE</h3>
        <h2 className="text-[var(--secondary-color)] text-[50px] font-black">FOR STARTUPS</h2>
        <h3 className="text-gray-700 text-[30px] font-bold">MARKETING.</h3>
        <p className="text-[var(--secondary-color)] font-semibold">We're not the best, but have the potential to be the best.</p>
      </div>
    </section>
  );
};

export default HeroAbout;

