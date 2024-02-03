import React from "react";
import card1 from "@/public/img/feature1.png";
import card2 from "@/public/img/feature2.png";
import card3 from "@/public/img/feature3.png";
import Image from "next/image";
import ServiceCard from "../S/ServiceCard";
import homeImage1 from "@/public/img/about_image (1).png";
import arrowleft from "@/public/img/about_image.png";
import fact1 from "@/public/img/fact1.png";
import fact2 from "@/public/img/fact2.png";
import fact3 from "@/public/img/fact3.png";
import fact4 from "@/public/img/fact4.png";
import services1 from "@/public/img/service1.png";
import services2 from "@/public/img/service2.png";
import services3 from "@/public/img/service3.png";
import services4 from "@/public/img/service4.png";
import services5 from "@/public/img/service5.png";
import services6 from "@/public/img/service6.png";
import arrowright from "@/public/img/arrow_right.png";
import casestudy1 from "@/public/img/case-study1.png";
import casestudy2 from "@/public/img/case-study2.png";
import casestudy3 from "@/public/img/case-study3.png";
import process1 from "@/public/img/process1-removebg-preview.png";
import process2 from "@/public/img/process2.png";
import process3 from "@/public/img/process3.png";
import process4 from "@/public/img/process4.png";
import work_process from "@/public/img/work_process.png";
import pricing_icon1 from "@/public/img/pricing_icon1.png";
import pricing_icon2 from "@/public/img/pricing_icon2.png";
import pricing_icon3 from "@/public/img/pricing_icon3.png";
import post1 from "@/public/img/post1.jpg"
import post2 from "@/public/img/post2.jpg"
import post3 from "@/public/img/post3.jpg"
import Marque from "../M/Marque";
import Homecard from "../S/homecard";
const HomeSection = () => {
  return (
    <div>
      <section className="flex gap-8 flex-wrap mt-16 justify-center">
        <div>
          <h1 id="section1-h1" className="text-3xl text-md-right text-sm-center column-title">
            Affordable Digital <br /> Marketing Services <br /><b>For Startups</b>.
          </h1>
        </div>
        <div className="border-l-[5px] pl-8 max-[500px]:pl-3 max-[500px]:w-[90%] text-[#9f9f9f] border-orange-600 w-[50%]">
          <p>
            StatupMAXIM helps you generate results at every stage of your startup either it is
            awareness, consideration, decision, or maturity focused on creative marketing efforts with affordability.
          </p>
        </div>
      </section>

      <section className="flex w-full justify-center gap-12 mt-14 flex-wrap">
        <ServiceCard
          imageUrl={card1}
          title="Socail Marketing"
          desc="Start working with an company that provide  everything working with an company that you need any
            awareness drive"
          linkurl="/"
        />
        <ServiceCard
          imageUrl={card2}
          title="SEO Optimization"
          desc="Start working with an company that provide everything working with an company that you need any
            awareness drive"
          linkurl="/"
        />
        <ServiceCard
          imageUrl={card3}
          title="SEO Management"
          desc="Start working with an company that provide everything working with an company that you need any
            awareness drive"
          linkurl="/"
        />
      </section>

      <section id="homesection3" className="flex justify-center mt-20 mb-24  gap-4 ">
        <div className="w-fit">
          <Image
            className=""
            src={homeImage1}
            height={430}
            width={430}
            alt="img"
          />
        </div>
        <div className="w-fit ">
          <h1 className="text-4xl font-bold text-black">
            A better website means <br /> better user experience
          </h1>
          <div className="mt-5"><Marque /></div>
          <p className="mt-16 text-[#9f9f9f]">
            Start working with an company that can provide everything <br />
            you need to generate awareness, drive traffic, connect with <br />{" "}
            customers, and increase sales nascetur ridiculus mus. Donec <br />{" "}
            quam felis, ultricies nec, pellentesque eu.
          </p>
          <p className="mt-6 text-[#9f9f9f]">
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis,{" "}
            <br />
            sem. Nulla consequat massa quis enim
          </p>
          <div className="">
            <button className="p-4 pl-6 max-[385px]:mb-4 pr-6  bg-[#fa6742] hover:bg-[#2e2c2d] text-white font-bold rounded-full mr-5 mt-5">
              LEARN MORE
            </button>
            <button className="p-4 pl-6 pr-6 bg-[#ffb72f] hover:bg-[#2e2c2d] text-white font-bold rounded-full">
              CONTACT US
            </button>
          </div>
        </div>
      </section>

      <section className="pt-12 mb-20 flex gap-3">
        <div>
          <Image
            src={arrowleft}
            className="pt-12  max-[1270px]:hidden"
            width={180}
            height={100}
            alt="img"
          />
        </div>
        <div id="homesection4" className="flex flex-wrap max-[1370px]:gap-[140px] max-[1310px]:gap-[105px] gap-[140px]">
          <div className="flex flex-col gap-4 items-center">
            <Image src={fact1} width={60} height={60} alt="img" />
            <h1 className="text-[22px] font-bold">Active clients</h1>
            <h1 className="text-5xl font-bold text-[#fa6742]">200+</h1>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <Image src={fact2} width={53} height={53} alt="img" />
            <h1 className="text-[22px] font-bold">Projects Done</h1>
            <h1 className="text-5xl font-bold text-[#fa6742]">570+</h1>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <Image src={fact3} width={64} height={64} alt="img" />
            <h1 className="text-[22px] font-bold">Success Rate</h1>
            <h1 className="text-5xl font-bold text-[#fa6742]">98%</h1>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <Image src={fact4} width={48} height={48} alt="img" />
            <h1 className="text-[22px] font-bold">Awards</h1>
            <h1 className="text-5xl font-bold text-[#fa6742]">50+</h1>
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

      <section className="pt-12 mb-20">
        <div className="flex flex-col items-center">
          <h1 className="text-[#9f9f9f] ">OUR SERVICES</h1>
          <h1 className="text-5xl font-bold" id="homesection4-h1">
            Our Best <span className="text-[#fa6742]">Services</span>
          </h1>
          <div className="mt-6"><Marque /></div>
        </div>
        <div className="flex w-full justify-center gap-12 mt-14 flex-wrap ">
          <ServiceCard
            imageUrl={services1}
            title="SEO Optimization"
            desc="One of the top 100 advertising and marketing agencies knows what it means to marketing agencies be"
            linkurl="/"
          />
          <ServiceCard
            imageUrl={services2}
            title="Content Marketing"
            desc="One of the top 100 advertising and marketing agencies knows what it means to marketing agencies be"
            linkurl="/"
          />
          <ServiceCard
            imageUrl={services3}
            title="Data Analysis"
            desc="One of the top 100 advertising and marketing agencies knows what it means to marketing agencies be"
            linkurl="/"
          />{" "}
          <br />
          <ServiceCard
            imageUrl={services4}
            title="Digital Marketing"
            desc="One of the top 100 advertising and marketing agencies knows what it means to marketing agencies be"
            linkurl="/"
          />
          <ServiceCard
            imageUrl={services5}
            title="Web Analytics"
            desc="One of the top 100 advertising and marketing agencies knows what it means to marketing agencies be"
            linkurl="/"
          />
          <ServiceCard
            imageUrl={services6}
            title="Social Marketing"
            desc="One of the top 100 advertising and marketing agencies knows what it means to marketing agencies be"
            linkurl="/"
          />
        </div>
      </section>

      <section>
        <div className="flex flex-col items-center">
          <h1 className="text-[#9f9f9f] ">SUCCESS STORIES</h1>
          <h1 className="text-5xl pt-3 font-bold" id="homesection6-h1">
            Our <span className="text-[#fa6742]">Case Study</span>
          </h1>
          <div className="mt-6"><Marque /></div>
        </div>
        <div className="flex max-[650px]:flex-col gap-11 p-8 pt-20 justify-center">
          <div className="homesection6-card">
           <div className="flex justify-center"> <Image className="bg-[#fa6742] p-2" src={casestudy1} alt="img" /></div>
            <div className="homesection6-heading">
            <h1 className="heading1">Web Traffic Management</h1>
            <h1 className="flex justify-center pr-12 pt-1 text-[#9f9f9f]">
              SEO, Marketing
            </h1>
            </div>
          </div>
          <div className="homesection6-card">
            <div className="flex justify-center"><Image className="bg-[#2bc2a7] p-2" src={casestudy2} alt="img" /></div>
            <div className="homesection6-heading"><h1 className="heading1">Cloaking & Doorway Pages</h1>
            <h1 className="flex justify-center text-[#9f9f9f] pt-1">
              Social, SEO
            </h1></div>
          </div>
          <div className="homesection6-card">
            <div className="flex justify-center"><Image className="bg-[#ffb72f] p-2" src={casestudy3} alt="img" /></div>
            <div className="homesection6-heading"><h1 className="heading1">Hosting company rank</h1>
            <h1 className="flex justify-center pt-1 text-[#9f9f9f]">
              Hosting, Marketing
            </h1></div>
          </div>
        </div>
        <div className="flex pt-12 justify-center">
          <button className="p-4 mb-20 pl-10 pr-10 bg-[#fa6742] hover:bg-[#2e2c2d] text-white font-bold rounded-full mr-5 mt-5">
            VIEW ALL
          </button>
        </div>
      </section>

      <section>
        <div className="flex flex-col mt-14 pb-20 mb-20 items-center">
          <h1 className="text-[#9f9f9f]">EASE STEPS</h1>
          <h1 className="text-5xl pt-3 font-bold"  id="homesection7-h1">
            Our Working<span className="text-[#fa6742]">Process</span>
          </h1>
          <div className="mt-8"><Marque /></div>
        </div>
        <div className="mt-20">
          <Image src={work_process} className="max-[1000px]:hidden " width={1900} height={800} alt="img" />
        </div>
        <div id="homesection7" className="flex relative bottom-[120px] max-[1000px]:pt-20 justify-around items-center">
          <div id="process1" className="max-[550px]:bottom-0 max-[860px]:p-[40px]  bg-[#32cc73] relative bottom-[65px] p-[60px] w-fit  rounded-full">
            <Image src={process1}  className=" max-[860px]:w-[50px] " width={80} height={80} alt="" />
          </div>
          <div id="process2" className=" max-[860px]:p-[30px]  bg-[#fa6742] px-[80px] p-[60px] w-fit  rounded-full">
            <Image src={process2} className=" max-[860px]:w-[70px]  max-[860px]:p-[5px]  max-[860px]:px-[16px] " width={60} height={60} alt="" />
          </div>
          <div id="process3" className="max-[550px]:bottom-0 max-[860px]:p-[40px]  bg-[#478fff] relative bottom-[65px] p-[60px] w-fit  rounded-full">
            <Image src={process3} className="max-[860px]:p-[0px]  max-[860px]:w-[55px] " width={80} height={60} alt="" />
          </div>
          <div id="process4" className=" max-[860px]:p-[40px]  max-[860px]:w-[132px]  bg-[#f5b02d] p-[60px] w-fit  rounded-full">
            <Image src={process4} width={80} height={80} alt="" />
          </div>
        </div>
        <div className="flex justify-center">
          <button className="p-4 mb-20 pl-10 pr-10 bg-[#fa6742] hover:bg-[#2e2c2d] text-white font-bold rounded-full mr-5 mt-5">
            GET STARTED
          </button>
        </div>
      </section>

      <section>
        <div className="flex flex-col mb-10 items-center">
          <h1 className="text-[#9f9f9f] ">PRICING TABLE</h1>
          <h1 className="text-5xl pt-3 font-bold"  id="homesection8-h1">
            Our<span className="text-[#fa6742]">Pricing</span>
          </h1>
          <div className="mt-8"><Marque /></div>
        </div>
        <div className="flex items-center pb-20 max-[420px]:flex-col justify-center">
          <div className="">
            <button className="bg-[#fa6742] px-5 py-4  max-[420px]:mb-3  rounded-full text-white font-bold ">
              GET STARTED
            </button>
          </div>
          <div className="">
            <button className="p-4  pl-10 pr-10 bg-[#fff] text-[#9f9f9f] border font-bold rounded-full ">
              GET STARTED
            </button>
          </div>
        </div>
        <div id="section8" className="flex  max-[760px]:gap-4 max-[760px]:flex-col max-[760px]:justify-center justify-around mt-20">
          <div className="w-[30%] flex flex-col gap-8 items-center hover:shadow-md hover:shadow-gray-300">
            <div><Image src={pricing_icon1} alt="img" /></div>
            <div><h1 className="text-3xl font-bold">Entrepreneur</h1></div>
           <div  className=" text-[#9f9f9f] flex flex-col items-center gap-1 text-[18px]">
           <p>25 Analytics Compaign</p>
            <p>1,300 Keywords</p>
            <p>25 social media reviews</p>
            <p>1 Free Optimization</p>
           </div>
            <div className="pricing-price">
              <sup>$</sup>
              <strong>9</strong>
              <small>Month</small>
            </div>
            <div className="flex justify-center">
            <button className="p-4 mb-20 pl-10 pr-10 bg-[#2E2C2D] hover:bg-[#fa6742] hover:text-white text-white font-bold rounded-full mr-5 mt-5">
              SHOW NOW
            </button>
          </div>
          </div>

          <div className="w-[30%] flex flex-col gap-8 items-center relative bottom-[50px] hover:shadow-md hover:shadow-gray-300">
            <div><Image src={pricing_icon2} alt="img" /></div>
            <div><h1 className="text-3xl font-bold">Entrepreneur</h1></div>
           <div  className=" text-[#9f9f9f] flex flex-col items-center gap-1 text-[18px]">
           <p>25 Analytics Compaign</p>
            <p>1,300 Keywords</p>
            <p>25 social media reviews</p>
            <p>1 Free Optimization</p>
           </div>
            <div className="pricing-price">
              <sup>$</sup>
              <strong>29</strong>
              <small>Month</small>
            </div>
            <div className="flex justify-center">
            <button className="p-4 mb-20 pl-10 pr-10 bg-[#2E2C2D] hover:bg-[#fa6742] hover:text-white text-white font-bold rounded-full mr-5 mt-5">
              SHOW NOW
            </button>
          </div>
          </div>

          <div className="w-[30%] flex flex-col gap-8 items-center relative bottom-[50px]  hover:shadow-md hover:shadow-gray-300">
            <div><Image src={pricing_icon3} alt="img" /></div>
            <div><h1 className="text-3xl font-bold">Entrepreneur</h1></div>
           <div  className=" text-[#9f9f9f] flex flex-col items-center gap-1 text-[18px]">
           <p>25 Analytics Compaign</p>
            <p>1,300 Keywords</p>
            <p>25 social media reviews</p>
            <p>1 Free Optimization</p>
           </div>
            <div className="pricing-price">
              <sup>$</sup>
              <strong>49</strong>
              <small>Month</small>
            </div>
            <div className="flex justify-center">
            <button className="p-4 mb-20 pl-10 pr-10 bg-[#2E2C2D] hover:bg-[#fa6742] hover:text-white text-white font-bold rounded-full mr-5 mt-5">
              SHOW NOW
            </button>
          </div>
          </div>
      </div>
      </section>

    <section>
    <div className="flex flex-col mb-20 items-center">
          <h1 className="text-[#9f9f9f] ">OUR BLOG</h1>
          <h1 className="text-5xl pt-3 font-bold" id="section9-h1">
          Latest<span className="text-[#fa6742]">Blog</span>
          </h1>
          <div className="mt-6"><Marque /></div>
        </div>
     <div id="section9-card" className="flex flex-wrap justify-center gap-12">
      <Homecard imageUrl={post1}/>
     <Homecard imageUrl={post2}/>
     <Homecard imageUrl={post3}/>
     </div>
     <div className="flex justify-center mt-14">
            <button className="p-4 mb-20 pl-10 pr-10 bg-[#fa6742] hover:bg-[#2E2C2D] hover:text-white text-white font-bold rounded-full mr-5 mt-5">
              VIEW ALL
            </button>
          </div>
    </section>

    </div>
  );
};

export default HomeSection;
