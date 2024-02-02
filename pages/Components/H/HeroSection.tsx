import React from "react";
import Image from "next/image";
import logo from "@/public/img/about-team.png";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="first-section">
        <h1 className="heading">We Can Reach Your</h1>
        <h1 className="heading-1">Startup At Maximum</h1>
        <p className="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          illo nisi eius architecto nulla porro tempora dolorum minima,
          distinctio aspernatur soluta quo, odio at iste hic ab accusamus ut
          fuga explicabo eveniet! At odio itaque impedit praesentium, ipsum
          dolor similique, aliquam blanditiis, officiis eaque magnam.
        </p>
        <div>
          <button className="btn">Get Started</button>
        </div>
      </div>
      <div>
        <Image src={logo} alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
