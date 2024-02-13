import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Company1 from "@/public/img/about-team.svg";
import Company2 from "@/public/img/about-team.svg";
import Company3 from "@/public/img/about-team.svg";
import Marque from "../M/Marque";

const ClientSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    Selection: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div>
        <section>
        <div className="text-center my-[50px]">
          <p className="text-[var(--text-gray)]  min-[1440px]:text-[20px]">OUR CLIENTS</p>
          <div className="flex justify-center flex-wrap items-center gap-[8px] font-black text-[50px] min-[1440px]:text-[60px]">
            <h1>Valuable</h1>
            <h1 className="text-[var(--background-color)]">
              Clients
            </h1>
          </div>
          <div className="loader">
            <Marque />
          </div>
        </div>
      </section>
      <Slider {...settings} className="client-slider">
        <div>
          <Image src={Company1} alt="Company Logo" />
        </div>
        <div>
          <Image src={Company2} alt="Company Logo" />
        </div>
        <div>
          <Image src={Company3} alt="Company Logo" />
        </div>
        <div>
          <Image src={Company1} alt="Company Logo" />
        </div>
        <div>
          <Image src={Company2} alt="Company Logo" />
        </div>
        <div>
          <Image src={Company3} alt="Company Logo" />
        </div>
      </Slider>
    </div>
  );
};

export default ClientSlider;