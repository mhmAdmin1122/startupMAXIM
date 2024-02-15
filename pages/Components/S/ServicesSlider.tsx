import React from "react";
import Slider from "react-slick";
import ServicesSliderCard from "./ServicesSliderCard";
import card1 from "@/public/img/card1.svg";
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";

const ServicesSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="ServiceSlider">
      <div className="shadow-md shadow-gray-300 w-fit p-5 border-[1px] border-gary-100 rounded-md">
        <div className="text-[40px] text-[#00bf63] cursor-pointer pointer-events-none">
          <IoArrowBackCircle />
        </div>
        <div className="text-[40px] text-[#00bf63] cursor-pointer pointer-events-none">
          <IoArrowForwardCircle />
        </div>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          <ServicesSliderCard
            cardPic={card1}
            cardTitle="Social Media Marketing"
            cardDescription="We do Social Media Marketing to educate your audience and convert them."
            btnUrl="/"
          />
          <ServicesSliderCard
            cardPic={card1}
            cardTitle="Social Media Marketing"
            cardDescription="We do Social Media Marketing to educate your audience and convert them."
            btnUrl="/"
          />
          <ServicesSliderCard
            cardPic={card1}
            cardTitle="Social Media Marketing"
            cardDescription="We do Social Media Marketing to educate your audience and convert them."
            btnUrl="/"
          />
          <ServicesSliderCard
            cardPic={card1}
            cardTitle="Social Media Marketing"
            cardDescription="We do Social Media Marketing to educate your audience and convert them."
            btnUrl="/"
          />
          <ServicesSliderCard
            cardPic={card1}
            cardTitle="Social Media Marketing"
            cardDescription="We do Social Media Marketing to educate your audience and convert them."
            btnUrl="/"
          />
          <ServicesSliderCard
            cardPic={card1}
            cardTitle="Social Media Marketing"
            cardDescription="We do Social Media Marketing to educate your audience and convert them."
            btnUrl="/"
          />
          <ServicesSliderCard
            cardPic={card1}
            cardTitle="Social Media Marketing"
            cardDescription="We do Social Media Marketing to educate your audience and convert them."
            btnUrl="/"
          />
          <ServicesSliderCard
            cardPic={card1}
            cardTitle="Social Media Marketing"
            cardDescription="We do Social Media Marketing to educate your audience and convert them."
            btnUrl="/"
          />
        </Slider>
      </div>
    </div>
  );
};

export default ServicesSlider;
