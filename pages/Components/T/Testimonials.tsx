import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import TeamImage1 from "@/public/img/thomas-shelby-1200x1437.jpg";
import Marque from "../M/Marque";
import TestmonialsSliderCard from "./TestmonialsSliderCard";

const Testimonials = () => {
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
        breakpoint: 848,
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
    <section className="testimonial py-[40px]">
      <div className="heading-section">
        <p className="text-[var(--text-gray)] min-[1440px]:text-[20px]">
          Testimonials
        </p>
        <div className="heading">
          <h5>Love From </h5>
          <h3 className="text-[#ff6e4e]">Clients</h3>
        </div>
        <div className="loader">
          <Marque />
        </div>
      </div>
      
      <div className="testmonials-Slider-Box w-full pb-[50px] px-[60px]">
        <Slider {...settings}>
          <TestmonialsSliderCard
            CardPic={TeamImage1}
            ClientName="Jhon Doe"
            ClientProject="SEO, and Wordpress Development"
            ClientMessage="Such a good response from project controler."
          />
          <TestmonialsSliderCard
            CardPic={TeamImage1}
            ClientName="Jhon Doe"
            ClientProject="SEO, and Wordpress Development"
            ClientMessage="Such a good response from project controler."
          />
          <TestmonialsSliderCard
            CardPic={TeamImage1}
            ClientName="Jhon Doe"
            ClientProject="SEO, and Wordpress Development"
            ClientMessage="Such a good response from project controler."
          />
          <TestmonialsSliderCard
            CardPic={TeamImage1}
            ClientName="Jhon Doe"
            ClientProject="SEO, and Wordpress Development"
            ClientMessage="Such a good response from project controler."
          />
          <TestmonialsSliderCard
            CardPic={TeamImage1}
            ClientName="Jhon Doe"
            ClientProject="SEO, and Wordpress Development"
            ClientMessage="Such a good response from project controler."
          />
          <TestmonialsSliderCard
            CardPic={TeamImage1}
            ClientName="Jhon Doe"
            ClientProject="SEO, and Wordpress Development"
            ClientMessage="Such a good response from project controler."
          />
          <TestmonialsSliderCard
            CardPic={TeamImage1}
            ClientName="Jhon Doe"
            ClientProject="SEO, and Wordpress Development"
            ClientMessage="Such a good response from project controler."
          />
          <TestmonialsSliderCard
            CardPic={TeamImage1}
            ClientName="Jhon Doe"
            ClientProject="SEO, and Wordpress Development"
            ClientMessage="Such a good response from project controler."
          />
          <TestmonialsSliderCard
            CardPic={TeamImage1}
            ClientName="Jhon Doe"
            ClientProject="SEO, and Wordpress Development"
            ClientMessage="Such a good response from project controler."
          />
          <TestmonialsSliderCard
            CardPic={TeamImage1}
            ClientName="Jhon Doe"
            ClientProject="SEO, and Wordpress Development"
            ClientMessage="Such a good response from project controler."
          />
          <TestmonialsSliderCard
            CardPic={TeamImage1}
            ClientName="Jhon Doe"
            ClientProject="SEO, and Wordpress Development"
            ClientMessage="Such a good response from project controler."
          />
          <TestmonialsSliderCard
            CardPic={TeamImage1}
            ClientName="Jhon Doe"
            ClientProject="SEO, and Wordpress Development"
            ClientMessage="Such a good response from project controler."
          />
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
