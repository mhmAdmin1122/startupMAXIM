import React from "react";
import { FaPhoneVolume, FaRegEnvelope } from "react-icons/fa6";
import Image from "next/image";
import Slider from "react-slick";
import Service1 from "@/public/img/service1.png";
import Service2 from "@/public/img/service2.png";
import Service3 from "@/public/img/service3.png";
import Link from "next/link";
import Marque from "../M/Marque";

const ServicesPage = () => {
  function SampleNextArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <main>
      <section className="flex flex-wrap my-[70px] justify-center px-[20px] gap-[40px]">
        <div className="w-[25%] max-[916px]:w-full">
          <h1 className="text-[40px] font-extrabold ">All</h1>
          <h1 className="text-[40px] font-extrabold text-[var(--background-color)]">
            Services
          </h1>
          <div className="services-loader">
            <Marque />
          </div>
          <p className="text-gray-500 pr-[30px] mt-[20px]">
            Start working with an company that provide everything you need to
            anything is going very well but you dont know.
          </p>
        </div>
        <div className="w-[70%] my-[20px] shadow-sm shadow-gray-300 drop-shadow-lg">
          <Slider {...settings}>
            <div className="w-[50%] px-[10px] text-center flex flex-col align-middle items-center">
              <div>
                <Image src={Service1} alt="service" className="mx-auto" />
              </div>
              <h1 className="text-[20px] font-semibold pt-[25px]">
                SEO & Analytics
              </h1>
              <p className="text-gray-800 px-[7px] leading-[32px] py-[10px]">
                Start working with an company that provide everything you
              </p>
            </div>
            <div className="w-[50%] px-[5px] text-center flex flex-col align-middle items-center">
              <div>
                <Image src={Service3} alt="service" className="mx-auto" />
              </div>
              <h1 className="text-[20px] font-semibold pt-[25px]">
                Web Development
              </h1>
              <p className="text-gray-800 px-[7px] leading-[32px] py-[10px]">
                Start working with an company that provide everything you
              </p>
            </div>
            <div className="w-[50%] px-[5px] text-center flex flex-col align-middle items-center">
              <div>
                <Image src={Service2} alt="service" className="mx-auto" />
              </div>
              <h1 className="text-[20px] font-semibold pt-[25px]">
                Content Writing
              </h1>
              <p className="text-gray-800 px-[7px] leading-[32px] py-[10px]">
                Start working with an company that provide everything you
              </p>
            </div>
            <div className="w-[50%] px-[5px] text-center flex flex-col align-middle items-center">
              <div>
                <Image src={Service1} alt="service" className="mx-auto" />
              </div>
              <h1 className="text-[20px] font-semibold pt-[25px]">
                Digital Marketing
              </h1>
              <p className="text-gray-800 px-[7px] leading-[32px] py-[10px]">
                Start working with an company that provide everything you
              </p>
            </div>
          </Slider>
        </div>
      </section>
      <section>
        <div className="text-center my-[50px]">
          <p className="text-gray-500">OUR FEATURES</p>
          <div className="flex justify-center flex-wrap items-center gap-[8px] font-black text-[30px]">
            <h1 className=" text-[50px]">Our Best </h1>
            <h1 className="text-[var(--background-color)] text-[50px]">
              Features
            </h1>
          </div>
          <div className="loader">
            <Marque />
          </div>
        </div>
        <div className="flex flex-wrap gap-[50px] justify-center">
          <div className="w-[250px] px-[10px] text-center flex flex-col align-middle items-center">
            <div>
              <Image src={Service1} alt="service" className="mx-auto" />
            </div>
            <h1 className="text-[20px] font-semibold py-[10px]">
              Social Marketing
            </h1>
            <p className="text-gray-800">
              Start working with an company that provide everything you need to
              any
            </p>
            <button className="my-[20px] font-bold text-[var(--background-color)]">
              Read More
            </button>
          </div>
          <div className="w-[250px] px-[10px] text-center flex flex-col align-middle items-center">
            <div>
              <Image src={Service1} alt="service" className="mx-auto" />
            </div>
            <h1 className="text-[20px] font-semibold py-[10px]">
              Mobile Optimization
            </h1>
            <p className="text-gray-800">
              Start working with an company that provide everything you need to
              any
            </p>
            <button className="my-[20px] font-bold text-[var(--background-color)]">
              Read More
            </button>
          </div>
          <div className="w-[250px] px-[10px] text-center flex flex-col align-middle items-center">
            <div>
              <Image src={Service1} alt="service" className="mx-auto" />
            </div>
            <h1 className="text-[20px] font-semibold py-[10px]">
              Reputation Management
            </h1>
            <p className="text-gray-800">
              Start working with an company that provide everything you need to
              any
            </p>
            <button className="my-[20px] font-bold text-[var(--background-color)]">
              Read More
            </button>
          </div>
        </div>
      </section>
      <section className="flex max-[650px]:flex-wrap max-[400px]:px-[0px] px-[60px] my-[20px]">
        <div className="px-[30px]">
          <h1 className="text-[35px] font-bold">Feel free to contact us</h1>
          <p className="my-[30px] text-gray-600 pr-[10px]">
            Start working with an company that can provide every thing you need
            to generate awareness, drive traffic connect with customers, and
            increase sales nascetur
          </p>
          <div className="flex flex-wrap gap-[15px] justify-between">
            <div className="flex gap-[10px]">
              <FaPhoneVolume className="mt-[5px] text-[16px] text-[var(--background-color)]" />
              <div>
                <h1 className="text-[18px]">0300-123456</h1>
                <p className="text-gray-600 text-[14px]">Give us a call</p>
              </div>
            </div>
            <div className="flex gap-[10px]">
              <FaRegEnvelope className="mt-[5px] text-[16px] text-[var(--background-color)]" />
              <div>
                <h1 className="text-[18px]">example@xyz</h1>
                <p className="text-gray-600 text-[14px]">24/7 online support</p>
              </div>
            </div>
          </div>
        </div>
        <form action="post" className="px-[30px] my-[10px] shadow-lg border-[1px] border-solid border-gray-100">
          <div className="gap grid-cols-2 xl:grid-cols-1 gap-[20px] w-full">
            <input type="text" placeholder="Name" className="px-[15px] py-[20px] outline-none" />
            <input type="email" placeholder="Email" className="px-[15px] py-[20px] outline-none" />
          </div>
          <input type="text" placeholder="Subject" className="px-[10px] py-[20px] outline-none w-full" />
          <div>
            <textarea name="" id="" rows={1} placeholder="Message" className="px-[10px] py-[20px] outline-none w-full"></textarea>
          </div>
          <div className="text-right">
          <button className="bg-[var(--background-color)] text-white px-[36px] py-[16px] rounded-full font-bold text-[14px] my-[30px]">CONTACT US</button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default ServicesPage;
