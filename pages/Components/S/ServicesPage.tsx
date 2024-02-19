import React from "react";
import { FaPhoneVolume, FaRegEnvelope } from "react-icons/fa6";
import Image from "next/image";
import Slider from "react-slick";
import Service1 from "@/public/img/service1.png";
import Service2 from "@/public/img/service2.png";
import Service3 from "@/public/img/service3.png";
import Marque from "../M/Marque";
import FeatureCard from "../F/FeatureCard";
import ServicesSliderCard from "./ServicesSliderCard";
import card1 from "@/public/img/card1.svg";

const ServicesPage = () => {
  return (
    <section>
      {/* slider-section-services page */}
      <div className="grid py-[30px] justify-center px-[20px] gap-[40px]">
        <div className="w-full">
          <div className="flex flex-col items-center gap-2 w-full justify-center">
            <div className="flex items-center gap-2 w-full justify-center">
              <h2 className="text-[40px] font-extrabold ">All</h2>
              <h3 className="text-[40px] font-extrabold text-[#ff6e4e]">
                Services
              </h3>
            </div>
            <Marque />
          </div>

          <p className="text-gray-500 text-wrap pt-[20px] text-center">
            Start working with an company that provide everything you need to
            anything is going very well but you dont know.
          </p>
        </div>

        <div className="w-full flex flex-wrap justify-center items-center gap-10">
          <ServicesSliderCard
            cardPic={card1}
            cardTitle="Social Media Markiting"
            cardDescription="Start working with an company that provide everything you need to any"
            btnUrl="/Services"
          />
          <ServicesSliderCard
            cardPic={card1}
            cardTitle="Social Media Markiting"
            cardDescription="Start working with an company that provide everything you need to any"
            btnUrl="/Services"
          />
          <ServicesSliderCard
            cardPic={card1}
            cardTitle="Social Media Markiting"
            cardDescription="Start working with an company that provide everything you need to any"
            btnUrl="/Services"
          />
          <ServicesSliderCard
            cardPic={card1}
            cardTitle="Social Media Markiting"
            cardDescription="Start working with an company that provide everything you need to any"
            btnUrl="/Services"
          />
          <ServicesSliderCard
            cardPic={card1}
            cardTitle="Social Media Markiting"
            cardDescription="Start working with an company that provide everything you need to any"
            btnUrl="/Services"
          />
          <ServicesSliderCard
            cardPic={card1}
            cardTitle="Social Media Markiting"
            cardDescription="Start working with an company that provide everything you need to any"
            btnUrl="/Services"
          />
          <ServicesSliderCard
            cardPic={card1}
            cardTitle="Social Media Markiting"
            cardDescription="Start working with an company that provide everything you need to any"
            btnUrl="/Services"
          />
          <ServicesSliderCard
            cardPic={card1}
            cardTitle="Social Media Markiting"
            cardDescription="Start working with an company that provide everything you need to any"
            btnUrl="/Services"
          />
          <ServicesSliderCard
            cardPic={card1}
            cardTitle="Social Media Markiting"
            cardDescription="Start working with an company that provide everything you need to any"
            btnUrl="/Services"
          />
          <ServicesSliderCard
            cardPic={card1}
            cardTitle="Social Media Markiting"
            cardDescription="Start working with an company that provide everything you need to any"
            btnUrl="/Services"
          />
        </div>
      </div>

      {/* Our_Best_Features */}
      <div className="pb-[90px] pt-[30px] bg-gradient-to-t from-[#00bf63] to-[#c4ff69]">
        <div className="text-center my-[50px]">
          <p className="text-[#ff6e4e]">OUR FEATURES</p>
          <div className="flex justify-center flex-wrap items-center gap-[8px] font-black text-[30px]">
            <h1 className=" text-[50px]">Our Best </h1>
            <h1 className="text-[#ff6e4e] text-[50px]">Features</h1>
          </div>
          <div className="loader">
            <Marque />
          </div>
        </div>

        <div className="flex flex-wrap gap-10 justify-center items-center">
          <FeatureCard
            FeatureName="Social Marketing"
            FeatureDiscription="Start working with an company that provide everything you need to any"
            FeaturePic={Service1}
            BtnUrl="/Services"
          />

          <FeatureCard
            FeatureName="Copy Writing"
            FeatureDiscription="Start working with an company that provide everything you need to any"
            FeaturePic={Service2}
            BtnUrl="/Services"
          />

          <FeatureCard
            FeatureName="Web Development"
            FeatureDiscription="Start working with an company that provide everything you need to any"
            FeaturePic={Service3}
            BtnUrl="/Services"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
