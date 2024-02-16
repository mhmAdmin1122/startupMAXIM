import React from "react";
// card Images
import Image from "next/image";
import homeImage1 from "@/public/img/Marketing-Audit-For-Free-StartupMAXIM .svg";
import arrowleft from "@/public/img/about_image.png";
import fact1 from "@/public/img/fact1.png";
import fact2 from "@/public/img/fact2.png";
import fact3 from "@/public/img/fact3.png";
import fact4 from "@/public/img/fact4.png";
import arrowright from "@/public/img/arrow_right.png";
import casestudy1 from "@/public/img/case-study1.png";
import casestudy2 from "@/public/img/case-study2.png";
import casestudy3 from "@/public/img/case-study3.png";
import post1 from "@/public/img/post1.jpg";
import post2 from "@/public/img/post2.jpg";
import post3 from "@/public/img/post3.jpg";
import Marque from "../M/Marque";
import Homecard from "../H/HomeCard";
import CountingAnimation from "../C/CountingAnimation";
import { Fredoka } from "next/font/google";
import ServicesSlider from "../S/ServicesSlider";
import Link from "next/link";
import HeroHome from "./HeroHome";

const fredoka = Fredoka({
  weight: "500",
  subsets: ["latin"],
});

const HomeSection = () => {
  return (
    <div>

      {/* HeroBanner */}
      <section>
        <HeroHome />
      </section>
      {/* HeroBanner */}
      {/* about bussiness model */}
      <section className="flex gap-8 flex-wrap items-center py-16 justify-center text-[#000]">
        <div>
          <h1
            id="section1-h1"
            className={`text-3xl text-md-right text-sm-center column-title ${fredoka.className}`}
          >
            Affordable Digital <br /> Marketing Services <br />
            <b>For Startups</b>.
          </h1>
        </div>
        <div className="border-l-[5px] pl-8 max-[500px]:pl-3 max-[500px]:w-[90%] text-justify text-[#000] border-orange-600 w-[50%]">
          StatupMAXIM helps you generate results at every stage of your startup,
          from ideation to MVP, facilitating seamless scaling towards a
          successful exit, to elevating your brand to new heights, StartupMAXIM
          offers tailored solutions for every stage of your entrepreneurial
          journey.
          <strong>
            {" "}
            World{"'"}s first dedicated marketing agency for startups.
          </strong>
        </div>
      </section>

      <section
        className="w-full flex justify-center gap-10 py-[30px] bg-gradient-to-t from-[#00bf63] to-[#c4ff69]"
        id="homesection3"
      >
        <div className="">
          <Image
            className=""
            src={homeImage1}
            height={430}
            width={430}
            alt="img"
          />
        </div>
        <div className="grid justify-items-start w-[50%]">
          <h2 className="text-4xl font-bold text-black">
            Get Marketing Audit For Free (Limited Spots Available!)
          </h2>

          <div className="mt-5">
            <Marque />
          </div>

          <div className="text-gray-700">
            <div className="pt-6 text-justify">
              <h2 className="text-[22px] font-bold">Launch with confidence</h2>
              <p>
                Get a FREE comprehensive digital marketing audit from
                StartupMAXIM. Our expert team will analyze your current
                marketing efforts, identify key opportunities, and provide
                actionable recommendations to boost your brand awareness,
                attract leads, and achieve your goals.
              </p>
              <strong>Don{"'"}t miss out!</strong>
            </div>

            <p className="py-6">
              Only the first 10 sign-ups per month will receive this exclusive
              offer. <br /> Don{"'"}t Miss Out!
            </p>
          </div>

          <Link
            href="/"
            className="text-center px-4 py-2 flex items-center justify-center bg-[#ff6e4e] hover:bg-[#2c2c2c] border-b-[6px]  border-[#2c2c2c] rounded-[4px] hover:border-[#ff6e4e] transition-all duration-300 delay-100 ease-in-out text-[#2c2c2c] hover:text-[#ff6e4e] font-bold rounded-tl-[34px] rounded-br-[24px]"
          >
            Claim Free Audit
          </Link>
        </div>
      </section>

      {/* service slider */}
      <section className="px-[60px] py-[60px] w-full">
        <div className="flex flex-col items-center">
          <h1 className="text-[#9f9f9f] ">OUR SERVICES</h1>
          <h1 className="text-5xl font-bold" id="homesection4-h1">
            Our Best <span className="text-[#fa6742]">Services</span>
          </h1>
          <div className="mt-6">
            <Marque />
          </div>
        </div>
        <ServicesSlider />
      </section>

      <section className="pt-12 justify-between flex gap-3 bg-gradient-to-t from-[#00bf63] to-[#c4ff69]">
        <div>
          <Image
            src={arrowleft}
            className="pt-12  max-[1270px]:hidden"
            width={180}
            height={100}
            alt="img"
          />
        </div>
        <div
          id="homesection4"
          className="flex flex-wrap max-[1370px]:gap-[140px] max-[1310px]:gap-[105px] gap-[140px]"
        >
          <div className="flex flex-col gap-4 items-center">
            <Image src={fact1} width={60} height={60} alt="img" />
            <h1 className="text-[22px] font-bold">Active clients</h1>
            <div className="text-5xl font-bold text-[#fa6742] flex">
              <CountingAnimation targetNumber={200} />
              <span>+</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <Image src={fact2} width={53} height={53} alt="img" />
            <h1 className="text-[22px] font-bold">Projects Done</h1>
            <div className="text-5xl font-bold text-[#fa6742] flex">
              <CountingAnimation targetNumber={570} />
              <span>+</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <Image src={fact3} width={64} height={64} alt="img" />
            <h1 className="text-[22px] font-bold">Success Rate</h1>
            <div className="text-5xl font-bold text-[#fa6742] flex">
              <CountingAnimation targetNumber={98} />
              <span>%</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <Image src={fact4} width={48} height={48} alt="img" />
            <h1 className="text-[22px] font-bold">Awards</h1>
            <div className="text-5xl font-bold text-[#fa6742] flex">
              <CountingAnimation targetNumber={50} />
              <span>+</span>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={arrowright}
            className="pt-12 max-[1270px]:hidden"
            width={220}
            height={100}
            alt="img"
          />
        </div>
      </section>

      {/* Case Study */}
      <section className="py-10">
        <div className="flex flex-col items-center">
          <h1 className="text-[#9f9f9f] ">SUCCESS STORIES</h1>
          <h1 className="text-5xl pt-3 font-bold" id="homesection6-h1">
            Our <span className="text-[#fa6742]">Case Study</span>
          </h1>
          <div className="mt-6">
            <Marque />
          </div>
        </div>

        <div className="flex justify-center flex-wrap gap-4 py-6">
          <div className="w-[320px] shadow-lg shadow-gray-300 rounded-tl-[44px] rounded-br-[44px] rounded-[12px] overflow-hidden">
            <div className="flex justify-center">
              {" "}
              <Image className="bg-[#fa6742] p-2" src={casestudy1} alt="img" />
            </div>
            <div className="homesection6-heading">
              <Link href="/" className="heading1">Web Traffic Management</Link>
              <p className="text-center py-2 text-[#9f9f9f]">
                SEO, Marketing
              </p>
            </div>
          </div>

          <div className="w-[320px] shadow-lg shadow-gray-300 rounded-tl-[44px] rounded-br-[44px] rounded-[12px] overflow-hidden">
            <div className="flex justify-center">
              <Image className="bg-[#2bc2a7] p-2" src={casestudy2} alt="img" />
            </div>
            <div className="homesection6-heading">
              <Link href="/"  className="heading1">Cloaking & Doorway Pages</Link>
              <p className="text-center py-2 text-[#9f9f9f] pt-1">
                Social, SEO
              </p>
            </div>
          </div>

          <div className="w-[320px] shadow-lg shadow-gray-300 rounded-tl-[44px] rounded-br-[44px] rounded-[12px] overflow-hidden">
            <div className="flex justify-center">
              <Image className="bg-[#ffb72f] p-2" src={casestudy3} alt="img" />
            </div>
            <div className="homesection6-heading">
              <Link href="/"  className="heading1">Hosting company rank</Link>
              <p className="text-center py-2 text-[#9f9f9f]">
                Hosting, Marketing
              </p>
            </div>
          </div>
        </div>

        <div className="flex pt-4 justify-center">
          <button className="py-4 px-10 bg-[#fa6742] hover:bg-[#2e2c2d] text-white font-bold rounded-full mr-5 mt-5">
            VIEW ALL
          </button>
        </div>
      </section>

      {/* Blog */}
      <section className="py-10 bg-gradient-to-t from-[#00bf63] to-[#c4ff69]">
        <div className="flex flex-col mb-20 items-center">
          <h1 className="text-[#9f9f9f] ">OUR BLOG</h1>
          <h1 className="text-5xl pt-3 font-bold" id="section9-h1">
            Latest<span className="text-[#fa6742]">Blog</span>
          </h1>
          <div className="mt-6">
            <Marque />
          </div>
        </div>

        <div
          id="section9-card"
          className="flex flex-wrap justify-center gap-12"
        >
          <Homecard imageUrl={post1} />
          <Homecard imageUrl={post2} />
          <Homecard imageUrl={post3} />
        </div>
        <div className="flex justify-center mt-14">
          <button className="p-4 mb-21 pl-10 pr-10 bg-[#fa6742] hover:bg-[#2E2C2D] hover:text-white text-white font-bold rounded-full mr-5 mt-5">
            VIEW ALL
          </button>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-10">
        <div className="flex flex-col mb-10 items-center">
          <h1 className="text-[#9f9f9f] ">PRICING TABLE</h1>
          <h1 className="text-5xl pt-3 font-bold" id="homesection8-h1">
            Our <span className="text-[#fa6742]">Pricing</span>
          </h1>
          <div className="mt-8">
            <Marque />
          </div>
        </div>

        <section>
          <div className="cards">
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-gradient-to-l from-[#00bf63] to-[#c4ff69] px-[20px] py-[20px] h-fit flex flex-col gap-4 rounded-[14px] w-[280px] shadow-md shadow-gray-300">
                <h2 className="card__heading text-[#ff6e4e]">Basic</h2>
                <p className="card__price text-[#ff6e4e]">$9.99</p>
                <ul role="list" className="card__bullets flow text-[#2c2c2c]">
                  <li>Access to advanced workouts and nutrition plans</li>
                  <li>Priority Email support</li>
                  <li>Exclusive access to live Q&A sessions</li>
                </ul>
                <Link
                  href="/"
                  className="text-center px-4 py-2 flex items-center justify-center bg-[#ff6e4e] hover:bg-[#2c2c2c] border-b-[6px]  border-[#2c2c2c] rounded-[4px] hover:border-[#ff6e4e] transition-all duration-300 delay-100 ease-in-out text-[#2c2c2c] hover:text-[#ff6e4e] font-bold rounded-tl-[34px] rounded-br-[24px]"
                >
                  Customize Your Plan
                </Link>
                <Link
                  href="/"
                  className="text-center px-4 py-2 flex items-center justify-center bg-[#ff6e4e] hover:bg-[#2c2c2c] border-b-[6px]  border-[#2c2c2c] rounded-[4px] hover:border-[#ff6e4e] transition-all duration-300 delay-100 ease-in-out text-[#2c2c2c] hover:text-[#ff6e4e] font-bold rounded-tl-[34px] rounded-br-[24px]"
                >
                  Buy Plan
                </Link>
                {/* <button className="card__cta cta relative top-8">
                  Customize Your Plan
                </button>
                <button className="card__cta cta ">Buy Plan</button> */}
              </div>

              <div className="bg-gradient-to-b from-[#00bf63] to-[#c4ff69] px-[20px] py-[20px] h-fit flex flex-col gap-4 rounded-[14px] w-[280px] shadow-md shadow-gray-300">
                <h2 className="card__heading text-[#ff6e4e]">Pro</h2>
                <p className="card__price text-[#ff6e4e]">$19.99</p>
                <ul role="list" className="card__bullets flow text-[#2c2c2c]">
                  <li>Access to advanced workouts and nutrition plans</li>
                  <li>Priority Email support</li>
                  <li>Exclusive access to live Q&A sessions</li>
                </ul>
                <Link
                  href="/"
                  className="text-center px-4 py-2 flex items-center justify-center bg-[#ff6e4e] hover:bg-[#2c2c2c] border-b-[6px]  border-[#2c2c2c] rounded-[4px] hover:border-[#ff6e4e] transition-all duration-300 delay-100 ease-in-out text-[#2c2c2c] hover:text-[#ff6e4e] font-bold rounded-tl-[34px] rounded-br-[24px]"
                >
                  Customize Your Plan
                </Link>
                <Link
                  href="/"
                  className="text-center px-4 py-2 flex items-center justify-center bg-[#ff6e4e] hover:bg-[#2c2c2c] border-b-[6px]  border-[#2c2c2c] rounded-[4px] hover:border-[#ff6e4e] transition-all duration-300 delay-100 ease-in-out text-[#2c2c2c] hover:text-[#ff6e4e] font-bold rounded-tl-[34px] rounded-br-[24px]"
                >
                  Buy Plan
                </Link>
                {/* <button className="card__cta cta relative top-8">
                  Customize Your Plan
                </button>
                <button className="card__cta cta ">Buy Plan</button> */}
              </div>

              <div className="bg-gradient-to-l from-[#00bf63] to-[#c4ff69] px-[20px] py-[20px] h-fit flex flex-col gap-4 rounded-[14px] w-[280px] shadow-md shadow-gray-300">
                <h2 className="card__heading text-[#ff6e4e]">Ultimate</h2>
                <p className="card__price text-[#ff6e4e]">$29.99</p>
                <ul role="list" className="card__bullets flow text-[#2c2c2c]">
                  <li>Access to advanced workouts and nutrition plans</li>
                  <li>Priority Email support</li>
                  <li>Exclusive access to live Q&A sessions</li>
                </ul>
                <Link
                  href="/"
                  className="text-center px-4 py-2 flex items-center justify-center bg-[#ff6e4e] hover:bg-[#2c2c2c] border-b-[6px]  border-[#2c2c2c] rounded-[4px] hover:border-[#ff6e4e] transition-all duration-300 delay-100 ease-in-out text-[#2c2c2c] hover:text-[#ff6e4e] font-bold rounded-tl-[34px] rounded-br-[24px]"
                >
                  Customize Your Plan
                </Link>
                <Link
                  href="/"
                  className="text-center px-4 py-2 flex items-center justify-center bg-[#ff6e4e] hover:bg-[#2c2c2c] border-b-[6px]  border-[#2c2c2c] rounded-[4px] hover:border-[#ff6e4e] transition-all duration-300 delay-100 ease-in-out text-[#2c2c2c] hover:text-[#ff6e4e] font-bold rounded-tl-[34px] rounded-br-[24px]"
                >
                  Buy Plan
                </Link>
                {/* <button className="card__cta cta relative top-8">
                  Customize Your Plan
                </button>
                <button className="card__cta cta ">Buy Plan</button> */}
              </div>

              {/* <div className="card">
                <h2 className="card__heading">Pro</h2>
                <p className="card__price">$19.99</p>
                <ul role="list" className="card__bullets flow">
                  <li>Access to advanced workouts and nutrition plans</li>
                  <li>Priority Email support</li>
                  <li>Exclusive access to live Q&A sessions</li>
                </ul>
                <button className="card__cta cta relative top-8">
                  Customize Your Plan
                </button>
                <button className="card__cta cta ">Buy Plan</button>
              </div>

              <div className="card">
                <h2 className="card__heading">Ultimate</h2>
                <p className="card__price">$29.99</p>
                <ul role="list" className="card__bullets flow">
                  <li>Access to advanced workouts and nutrition plans</li>
                  <li>Priority Email support</li>
                  <li>Exclusive access to live Q&A sessions</li>
                </ul>
                <button className="card__cta cta relative top-8">
                  Customize Your Plan
                </button>
                <button className="card__cta cta ">Buy Plan</button>
              </div> */}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default HomeSection;
