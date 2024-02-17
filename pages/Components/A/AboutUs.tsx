import React from "react";
import Image from "next/image";
import aboutimage from "@/public/img/about-team.svg";
import Marque from "../M/Marque";

const AboutUs = () => {
  return (
    <section className="about-section-aboutUs flex justify-center flex-wrap gap-8 items-center py-12">
      <Image
        src={aboutimage}
        alt="Team"
        height={350}
        width={350}
        className="mt-[40px] min-[1440px]:mt-[-20px] min-[1440px]:h-[550px] min-[1440px]:w-[550px]"
      />
      <div className="about-section-text-abouUs flex flex-col items-start justify-center w-[400px]">
        <div className="text-[#ff6e4e] text-4xl font-bold">
          <h3 className="pb-3">
            <b className="text-[#000]">About</b> StartupMAXIM
          </h3>
          <Marque />
        </div>
        <p className="py-4">
          Start working with an company that can provide everything you need to
          generate awareness, drive traffic, connect with customers, and
          increase sales nascetur ridiculus mus. massa quis enim. Donec pede
          justo, fringilla vel, aliquet nec, vulputate eget, arcu
        </p>
        <p className="py-4">
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
