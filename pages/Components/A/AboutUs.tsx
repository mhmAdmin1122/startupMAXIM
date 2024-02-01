import React from "react";
import Image from "next/image";
import aboutimage from "@/public/img/about-team.png";
import BreadCrumbs from "../B/BreadCrumbs";

const AboutUs = () => {
  return (
    <main>
      <section className="about-section">
        <Image src={aboutimage} alt="Team" height={400} className="h-fit" />
        <div className="first-section">
          <h1 className="heading">
            About Startup-Maxim
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
