import React from "react";
import Image from "next/image";
import aboutimage from "@/public/img/about-team.svg";
import BreadCrumbs from "../B/BreadCrumbs";
import Button from "../B/Button";
import Marque from "../M/Marque";

const AboutUs = () => {
  return (
    <main>
      <section className="about-section">
        <Image src={aboutimage} alt="Team" height={400} width={400} className="mt-[40px] min-[1440px]:mt-[-20px] min-[1440px]:h-[550px] min-[1440px]:w-[550px]" />
        <div className="first-section">
          <h1 className="heading">
            About StartupMAXIM
            <Marque />
          </h1>
          <p className="para-1">
            Start working with an company that can provide everything you need
            to generate awareness, drive traffic, connect with customers, and
            increase sales nascetur ridiculus mus. massa quis enim. Donec pede
            justo, fringilla vel, aliquet nec, vulputate eget, arcu
          </p>
          <p className="para-2">
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;