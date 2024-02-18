import React from "react";
import Slider from "react-slick";
import brand1 from "@/public/img/brand1.jpg";
import brand2 from "@/public/img/brand2.jpg";
import brand3 from "@/public/img/brand3.jpg";
import brand4 from "@/public/img/brand4.jpg";
import brand5 from "@/public/img/brand5.jpg";
import Marque from "../M/Marque";
import ClientSliderCard from "./ClientSliderCard";

const ClientSlider = () => {
  var settings = {
    dots: false,
    infinite: true,autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 848,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="pb-[90px] bg-gradient-to-t from-[#00bf63] to-[#c4ff69] py-[30px]">

      <div className="text-center my-[50px]">
        <p className="text-[var(--text-gray)]  min-[1440px]:text-[20px]">
          OUR CLIENTS
        </p>
        <div className="flex justify-center flex-wrap items-center gap-[8px] font-black text-[50px] min-[1440px]:text-[60px]">
          <h1>Valuable</h1>
          <h1 className="text-[#ff6e4e]">Clients</h1>
        </div>
        <div className="loader">
          <Marque />
        </div>
      </div>

      <div className="client-slider-Box w-full pb-[50px] px-[60px]">
        <Slider {...settings}>
          <ClientSliderCard logoSrc={brand1} />
          <ClientSliderCard logoSrc={brand2} />
          <ClientSliderCard logoSrc={brand3} />
          <ClientSliderCard logoSrc={brand4} />
          <ClientSliderCard logoSrc={brand5} />
          <ClientSliderCard logoSrc={brand1} />
          <ClientSliderCard logoSrc={brand2} />
          <ClientSliderCard logoSrc={brand3} />
          <ClientSliderCard logoSrc={brand4} />
          <ClientSliderCard logoSrc={brand5} />
        </Slider>
      </div>
    </div>
  );
};

export default ClientSlider;
