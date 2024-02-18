import React from "react";
import Slider from "react-slick";
import TeamImage1 from "@/public/img/thomas-shelby-1200x1437.jpg";
import Marque from "../M/Marque";
import TeamSliderCard from "./TeamSliderCard";

const TeamSection = () => {
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
    <section className="bg-gradient-to-t from-[#00bf63] to-[#c4ff69] py-[30px]">
      <div className="team-heading-top">
        <p className="text-[#ff4e6e] min-[1440px]:text-[20px]">OUR TEAM</p>
        <div className="team-heading">
          <h4>Our Best </h4>
          <h3 className="text-[#ff6e4e]">Experts</h3>
        </div>
        <div className="loader">
          <Marque />
        </div>
      </div>

      <div className="team-slider-abouPage w-full  pb-[50px] px-[60px]">
        <Slider {...settings} className="">
          <TeamSliderCard
            cardPic={TeamImage1}
            Membername="Jhon Doe"
            memberPosition="Senior Full Stack Developer"
            memberBio="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <TeamSliderCard
            cardPic={TeamImage1}
            Membername="Jhon Doe"
            memberPosition="Senior Full Stack Developer"
            memberBio="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <TeamSliderCard
            cardPic={TeamImage1}
            Membername="Jhon Doe"
            memberPosition="Senior Full Stack Developer"
            memberBio="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <TeamSliderCard
            cardPic={TeamImage1}
            Membername="Jhon Doe"
            memberPosition="Senior Full Stack Developer"
            memberBio="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <TeamSliderCard
            cardPic={TeamImage1}
            Membername="Jhon Doe"
            memberPosition="Senior Full Stack Developer"
            memberBio="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <TeamSliderCard
            cardPic={TeamImage1}
            Membername="Jhon Doe"
            memberPosition="Senior Full Stack Developer"
            memberBio="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <TeamSliderCard
            cardPic={TeamImage1}
            Membername="Jhon Doe"
            memberPosition="Senior Full Stack Developer"
            memberBio="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <TeamSliderCard
            cardPic={TeamImage1}
            Membername="Jhon Doe"
            memberPosition="Senior Full Stack Developer"
            memberBio="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <TeamSliderCard
            cardPic={TeamImage1}
            Membername="Jhon Doe"
            memberPosition="Senior Full Stack Developer"
            memberBio="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <TeamSliderCard
            cardPic={TeamImage1}
            Membername="Jhon Doe"
            memberPosition="Senior Full Stack Developer"
            memberBio="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
        </Slider>
      </div>
    </section>
  );
};

export default TeamSection;
