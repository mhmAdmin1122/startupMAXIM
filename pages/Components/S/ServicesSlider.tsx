import React from "react";
import Slider from "react-slick";
import ServicesSliderCard from "./ServicesSliderCard";
import card1 from "@/public/img/card1.svg";
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";

const ServicesSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
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
        breakpoint: 849,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
    <div className="ServiceSlider relative">
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
