import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import TeamImage1 from "@/public/img/thomas-shelby-1200x1437.jpg";
import Marque from "../M/Marque";

const Testimonials = () => {
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
        breakpoint: 700,
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
    <section className="testimonial py-[40px]">
      <div className="heading-section">
        <p className="text-[var(--text-gray)] min-[1440px]:text-[20px]">
          Testimonials
        </p>
        <div className="heading">
          <h1>Love From </h1>
          <h1 className="text-[#ff6e4e]">Clients</h1>
        </div>
        <div className="loader">
          <Marque />
        </div>
      </div>
      <div className="slider-section px-[90px] ">
        <div className="w-[95%] ">
          <Slider
            {...settings}
            className="team-slider mx-[30px] min-[1440px]:mx-[60px]"
          >
            <div>
              <div className="team-card testmonials-Card">
                <div className="card-inner">
                  <div className="card-front !grid">
                    <Image
                      src={TeamImage1}
                      className="person-image !w-[80px] !h-[80px] !rounded-full"
                      alt="logo-pic"
                    />
                    <div className="px-[20px] py-[20px]">
                      <p className="text-[#fff]">hdkjfsdkjhfkjdshfkjdf</p>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="person-info">
                      <h1 className="font-bold">John Doe</h1>
                      <p>Senior Web Developer</p>
                      <p className="person-info-about">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="team-card">
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
                      <p className="person-info-about">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="team-card">
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
                      <p className="person-info-about">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="team-card">
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
                      <p className="person-info-about">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="team-card">
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
                      <p className="person-info-about">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="team-card">
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
                      <p className="person-info-about">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="team-card">
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
                      <p className="person-info-about">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="team-card">
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
                      <p className="person-info-about">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="team-card">
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
                      <p className="person-info-about">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="team-card">
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
                      <p className="person-info-about">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="team-card">
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
                      <p className="person-info-about">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="team-card">
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
                      <p className="person-info-about">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
