import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import TeamImage1 from "@/public/img/thomas-shelby-1200x1437.jpg";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";

const TeamSection = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    Selection: false,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
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
          dots: false,
        },
      },
    ],
  };
  return (
    <main>
      <section className="team-section">
        <div className="team-heading-top">
          <p className="text-[var(--text-gray)]">OUR TEAM</p>
          <div className="team-heading">
            <h1>Our Best </h1>
            <h1 className="text-[var(--background-color)]">
              Experts
            </h1>
          </div>
        </div>
      </section>
      <section className="slider-section">
        <div className="w-[95%]">
        <Slider {...settings} className="mx-[30px]">
        <div>
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <Image
                  src={TeamImage1}
                  className="person-image"
                  alt="logo-pic"
                />
              </div>
              <div className="card-back">
                <div className="person-info">
                  <h1 className="font-bold">John Doe</h1>
                  <p>Senior Web Developer</p>
                  <p className="person-info-about">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <Image
                  src={TeamImage1}
                  className="person-image"
                  alt="logo-pic"
                />
              </div>
              <div className="card-back">
                <div className="person-info">
                  <h1 className="font-bold">John Doe</h1>
                  <p>Senior Web Developer</p>
                  <p className="person-info-about">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <Image
                  src={TeamImage1}
                  className="person-image"
                  alt="logo-pic"
                />
              </div>
              <div className="card-back">
                <div className="person-info">
                  <h1 className="font-bold">John Doe</h1>
                  <p>Senior Web Developer</p>
                  <p className="person-info-about">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <Image
                  src={TeamImage1}
                  className="person-image"
                  alt="logo-pic"
                />
              </div>
              <div className="card-back">
                <div className="person-info">
                  <h1 className="font-bold">John Doe</h1>
                  <p>Senior Web Developer</p>
                  <p className="person-info-about">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <Image
                  src={TeamImage1}
                  className="person-image"
                  alt="logo-pic"
                />
              </div>
              <div className="card-back">
                <div className="person-info">
                  <h1 className="font-bold">John Doe</h1>
                  <p>Senior Web Developer</p>
                  <p className="person-info-about">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <Image
                  src={TeamImage1}
                  className="person-image"
                  alt="logo-pic"
                />
              </div>
              <div className="card-back">
                <div className="person-info">
                  <h1 className="font-bold">John Doe</h1>
                  <p>Senior Web Developer</p>
                  <p className="person-info-about">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <Image
                  src={TeamImage1}
                  className="person-image"
                  alt="logo-pic"
                />
              </div>
              <div className="card-back">
                <div className="person-info">
                  <h1 className="font-bold">John Doe</h1>
                  <p>Senior Web Developer</p>
                  <p className="person-info-about">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <Image
                  src={TeamImage1}
                  className="person-image"
                  alt="logo-pic"
                />
              </div>
              <div className="card-back">
                <div className="person-info">
                  <h1 className="font-bold">John Doe</h1>
                  <p>Senior Web Developer</p>
                  <p className="person-info-about">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <Image
                  src={TeamImage1}
                  className="person-image"
                  alt="logo-pic"
                />
              </div>
              <div className="card-back">
                <div className="person-info">
                  <h1 className="font-bold">John Doe</h1>
                  <p>Senior Web Developer</p>
                  <p className="person-info-about">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <Image
                  src={TeamImage1}
                  className="person-image"
                  alt="logo-pic"
                />
              </div>
              <div className="card-back">
                <div className="person-info">
                  <h1 className="font-bold">John Doe</h1>
                  <p>Senior Web Developer</p>
                  <p className="person-info-about">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <Image
                  src={TeamImage1}
                  className="person-image"
                  alt="logo-pic"
                />
              </div>
              <div className="card-back">
                <div className="person-info">
                  <h1 className="font-bold">John Doe</h1>
                  <p>Senior Web Developer</p>
                  <p className="person-info-about">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <Image
                  src={TeamImage1}
                  className="person-image"
                  alt="logo-pic"
                />
              </div>
              <div className="card-back">
                <div className="person-info">
                  <h1 className="font-bold">John Doe</h1>
                  <p>Senior Web Developer</p>
                  <p className="person-info-about">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </Slider>
        </div>
      </section>
    </main>
  );
};

export default TeamSection;
