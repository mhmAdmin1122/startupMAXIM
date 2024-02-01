import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import TeamImage1 from "@/public/img/thomas-shelby-1200x1437.jpg";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";

const SliderTeam = () => {
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
        },
      },
    ],
  };
  return (
    <div>
      <section>
        <div className="text-center my-[50px]">
          <p className="text-[#b4b4b4]">OUR TEAM</p>
          <div className="flex justify-center flex-wrap items-center gap-[8px] font-black text-[30px]">
            <h1 className=" text-[50px]">Our Best </h1>
            <h1 className="text-[var(--background-color)] text-[50px]">
              Experts
            </h1>
          </div>
        </div>
      </section>
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
                  <div className="flex justify-center gap-2 text-2xl pt-4">
                    <Link href={"https://www.facebook.com/"} target="_blank">
                      <FaFacebook className="facebook" />
                    </Link>
                    <Link href={"https://www.twitter.com/"} target="_blank">
                      <FaTwitter className="twitter" />
                    </Link>
                    <Link href={"https://www.linkedin.com/"} target="_blank">
                      <FaLinkedin className="linkedin" />
                    </Link>
                  </div>
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
                  <div className="flex justify-center gap-2 text-2xl pt-4">
                    <Link href={"https://www.facebook.com/"} target="_blank">
                      <FaFacebook className="facebook" />
                    </Link>
                    <Link href={"https://www.twitter.com/"} target="_blank">
                      <FaTwitter className="twitter" />
                    </Link>
                    <Link href={"https://www.linkedin.com/"} target="_blank">
                      <FaLinkedin className="linkedin" />
                    </Link>
                  </div>
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
                  <div className="flex justify-center gap-2 text-2xl pt-4">
                    <Link href={"https://www.facebook.com/"} target="_blank">
                      <FaFacebook className="facebook" />
                    </Link>
                    <Link href={"https://www.twitter.com/"} target="_blank">
                      <FaTwitter className="twitter" />
                    </Link>
                    <Link href={"https://www.linkedin.com/"} target="_blank">
                      <FaLinkedin className="linkedin" />
                    </Link>
                  </div>
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
                  <div className="flex justify-center gap-2 text-2xl pt-4">
                    <Link href={"https://www.facebook.com/"} target="_blank">
                      <FaFacebook className="facebook" />
                    </Link>
                    <Link href={"https://www.twitter.com/"} target="_blank">
                      <FaTwitter className="twitter" />
                    </Link>
                    <Link href={"https://www.linkedin.com/"} target="_blank">
                      <FaLinkedin className="linkedin" />
                    </Link>
                  </div>
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
                  <div className="flex justify-center gap-2 text-2xl pt-4">
                    <Link href={"https://www.facebook.com/"} target="_blank">
                      <FaFacebook className="facebook" />
                    </Link>
                    <Link href={"https://www.twitter.com/"} target="_blank">
                      <FaTwitter className="twitter" />
                    </Link>
                    <Link href={"https://www.linkedin.com/"} target="_blank">
                      <FaLinkedin className="linkedin" />
                    </Link>
                  </div>
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
                  <div className="flex justify-center gap-2 text-2xl pt-4">
                    <Link href={"https://www.facebook.com/"} target="_blank">
                      <FaFacebook className="facebook" />
                    </Link>
                    <Link href={"https://www.twitter.com/"} target="_blank">
                      <FaTwitter className="twitter" />
                    </Link>
                    <Link href={"https://www.linkedin.com/"} target="_blank">
                      <FaLinkedin className="linkedin" />
                    </Link>
                  </div>
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
                  <div className="flex justify-center gap-2 text-2xl pt-4">
                    <Link href={"https://www.facebook.com/"} target="_blank">
                      <FaFacebook className="facebook" />
                    </Link>
                    <Link href={"https://www.twitter.com/"} target="_blank">
                      <FaTwitter className="twitter" />
                    </Link>
                    <Link href={"https://www.linkedin.com/"} target="_blank">
                      <FaLinkedin className="linkedin" />
                    </Link>
                  </div>
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
                  <div className="flex justify-center gap-2 text-2xl pt-4">
                    <Link href={"https://www.facebook.com/"} target="_blank">
                      <FaFacebook className="facebook" />
                    </Link>
                    <Link href={"https://www.twitter.com/"} target="_blank">
                      <FaTwitter className="twitter" />
                    </Link>
                    <Link href={"https://www.linkedin.com/"} target="_blank">
                      <FaLinkedin className="linkedin" />
                    </Link>
                  </div>
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
                  <div className="flex justify-center gap-2 text-2xl pt-4">
                    <Link href={"https://www.facebook.com/"} target="_blank">
                      <FaFacebook className="facebook" />
                    </Link>
                    <Link href={"https://www.twitter.com/"} target="_blank">
                      <FaTwitter className="twitter" />
                    </Link>
                    <Link href={"https://www.linkedin.com/"} target="_blank">
                      <FaLinkedin className="linkedin" />
                    </Link>
                  </div>
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
                  <div className="flex justify-center gap-2 text-2xl pt-4">
                    <Link href={"https://www.facebook.com/"} target="_blank">
                      <FaFacebook className="facebook" />
                    </Link>
                    <Link href={"https://www.twitter.com/"} target="_blank">
                      <FaTwitter className="twitter" />
                    </Link>
                    <Link href={"https://www.linkedin.com/"} target="_blank">
                      <FaLinkedin className="linkedin" />
                    </Link>
                  </div>
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
                  <div className="flex justify-center gap-2 text-2xl pt-4">
                    <Link href={"https://www.facebook.com/"} target="_blank">
                      <FaFacebook className="facebook" />
                    </Link>
                    <Link href={"https://www.twitter.com/"} target="_blank">
                      <FaTwitter className="twitter" />
                    </Link>
                    <Link href={"https://www.linkedin.com/"} target="_blank">
                      <FaLinkedin className="linkedin" />
                    </Link>
                  </div>
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
                  <div className="flex justify-center gap-2 text-2xl pt-4">
                    <Link href={"https://www.facebook.com/"} target="_blank">
                      <FaFacebook className="facebook" />
                    </Link>
                    <Link href={"https://www.twitter.com/"} target="_blank">
                      <FaTwitter className="twitter" />
                    </Link>
                    <Link href={"https://www.linkedin.com/"} target="_blank">
                      <FaLinkedin className="linkedin" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </Slider>
    </div>
  );
};

export default SliderTeam;
