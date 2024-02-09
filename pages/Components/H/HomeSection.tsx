import React from "react";

// cards Images
import card1 from "@/public/img/01 Social Media Marketing Service for startups.svg";
import card2 from "@/public/img/02 Search Engine Optimization Service for startups.svg";
import card3 from "@/public/img/03 SEM & Advertising for Startups.svg";
import card4 from "@/public/img/04 Website & App Development service for startups.svg";
import card5 from "@/public/img/05 Digital Marketing Strategy service for startups.svg";
import card6 from "@/public/img/06 Branding for startups as a service.svg";
import card7 from "@/public/img/07 Content Creation service including graphic design, copywriting, articles, etc..svg";
import card8 from "@/public/img/08 Email Marketing Service for Startups.svg";
import card9 from "@/public/img/09 Public Relations service for startups.svg";

// card Images
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
import post1 from "@/public/img/post1.jpg";
import post2 from "@/public/img/post2.jpg";
import post3 from "@/public/img/post3.jpg";
import Marque from "../M/Marque";
import Homecard from "../S/homecard";
const HomeSection = () => {
  return (
    <div>
      <section className="flex gap-8 flex-wrap mt-16 justify-center">
        <div>
          <h1
            id="section1-h1"
            className="text-3xl text-md-right text-sm-center column-title"
          >
            Affordable Digital <br /> Marketing Services <br />
            <b>For Startups</b>.
          </h1>
        </div>
        <div className="border-l-[5px] pl-8 max-[500px]:pl-3 max-[500px]:w-[90%] text-[#9f9f9f] border-orange-600 w-[50%]">
          <br />
          StatupMAXIM helps you generate results at every stage of your startup,
          from ideation to MVP, facilitating seamless scaling towards a
          successful exit, to elevating your brand to new heights, StartupMAXIM
          offers tailored solutions for every stage of your entrepreneurial
          journey.
          <br />
          <strong>Worlds first dedicated marketing agency for startups.</strong>
          <button className="p-4 pl-6 max-[385px]:mb-4 pr-6  bg-[#fa6742] hover:bg-[#2e2c2d] text-white font-bold rounded-full mr-5 mt-5">
            LEARN MORE
          </button>
        </div>
      </section>

        
      <section className="w-full flex justify-between gap-12 mt-14 flex-wrap">
        <ServiceCard
          imageUrl={card1}
          altText="Social Media Management service for startups"
          title="Social Media Marketing"
          para="We do Social Media Marketing to educate your audience and convert them."
          startinglist="01: Audience and Competitors Research."
          startinglist2="02: Social Media Strategy."
          startinglist3="03: Performance Analytics & Optimization"
          endinglist="04: Audience Engagement & Community Building.  "
          endinglist2="05: Post Design, Copywriting, and Management"
          
        />
        <ServiceCard
          imageUrl={card2}
          altText="StartupMAXIM offers guaranteed results to startups for SEM efforts"
          title="Search Engine Marketing (SEM)"
          para="We offer updated SEO strategies for startups in all three domains of SEO; on-page, off-page, and technical SEO."
          startinglist="01: Pay-Per-Click (PPC) Advertising"
          startinglist2="02: Display Advertising"
          endinginglist3="03: Social Media Advertising"
          endinglist="04: Ad Campaign Management."
          endinglist2="05: Bid Optimization"
          endinglist3="06: A/B Testing for Ad Creatives"
          endinglist4="07: Conversion Tracking and Analysis"
        />
        <ServiceCard
          imageUrl={card3}
          altText="StartupMAXIM offers guaranteed results to startups for SEM efforts."
          title="Search Engine Marketing (SEM)"
          para="Startups need to bid for paid traffic but ROI matters here. We guarantee atleast 3X return on SEM investment with maximum results."
          startinglist="01: Pay-Per-Click (PPC) Advertising"
          startinglist2="02: Display Advertising"
          endinglist="03: Social Media Advertising"
          endinglig2="04: Ad Campaign Management"
          endinglist3="05: Bid Optimization"
          endinglist4="06: A/B Testing for Ad Creatives"
          endinglist5="07: Conversion Tracking and Analysis"
        />
        <ServiceCard
          imageUrl={card4}
          altText="StartupMAXIM offers full-stack development."
          title="Website & App Development"
          para="StartupMAXIM offers speed, qaulity, and creativity in website and web/mobile application development."
          startinglist="01: Website Development"
          startinglist2="02: App Development (iOS, Android)"
          startinglist3="03: UI/UX Design"
          endinglist="04: Responsive Design"
          endinglist2="05: E-commerce Development"
          endinglist3="06: Custom Software Solutions"
          endinglist4="07: Maintenance and Support"
        />
        <ServiceCard
          imageUrl={card5}
          altText="A to Z Digital Marketing with Strategy Planning for startups"
          title="Digital Marketing Strategy"
          para="We offer comprehensive digital marketing services, featuring to achieve your business goals and optimize your online performance."
          startinglist="01: Market Research and Analysis"
          startinglist2="02: Competitor Analysis"
          startinglist3="03: Target Audience Profiling"
          endinglist="04: Goal Setting and KPI Tracking"
          endinglist2="05: Multi-Channel Marketing Strategies"
          endinglist3="06: Data-driven Decision-making"
          endinglist4="07: Continuous Optimization"
        />
        <ServiceCard
          imageUrl={card6}
          altText="Our branding services include logo design, brand messaging, visually captivating elements, and more."
          title="Branding"
          para="We target to craft a distinctive brand identity that resonates with your audience."
          startinglist="01: Brand Identity Creation"
          startinglist2="02: Logo Design"
          startinglist3="03: Brand Messaging"
          endinglist="04: Visual Brand Elements"
          endinglist2="05: Brand Positioning"
          endinglist3="06: Brand Guidelines"
          endinglist4="07: Brand Storytelling"
        />
        <ServiceCard
          imageUrl={card7}
          altText="Content Creation Services for startups."
          title="Content Creation"
          para=" StartupMAXIM offers diverse content creation services, spanning blog writing, video production, and social media content creation, strategically planned and distributed for maximum impact."
          startinglist="01: Blog Writing"
          startinglist2="02: Video Production"
          startinglist3="03: Infographic Creation"
          endinglist="04: Social Media Content Creation"
          endinglist2="05: Copywriting"
          endinglist3="06: Content Calendar Planning"
          endinglist4="07: Content Distribution Strategy"
        />
        <ServiceCard
          imageUrl={card8}
          altText="Personalized-email marketing services"
          title="Email Marketing"
          para="Our email marketing department offers personalized communication and targeted outreach, ensuring effective subscriber engagement and conversions."
          startinglist="01: Email Campaign Strategy"
          startinglist2="02: Design and Copywriting"
          startinglist3="03: A/B Testing"
          endinglist="04: Segmentation and Targeting"
          endinglist2="05: Automation Workflows"
          endinglist3="06: Subscriber List Management"
          endinglist4="07: Analytics and Reporting"
        />

      </section>
      
     
      
      <section
        className="flex justify-center mt-20 mb-24  gap-4 "
        id="homesection3"
      >
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
          <div className="mt-5">
            <Marque />
          </div>
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
        <div
          id="homesection4"
          className="flex flex-wrap max-[1370px]:gap-[140px] max-[1310px]:gap-[105px] gap-[140px]"
        >
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
          <div className="mt-6">
            <Marque />
          </div>
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
          <div className="mt-6">
            <Marque />
          </div>
        </div>
        <div className="flex max-[650px]:flex-col gap-11 p-8 pt-20 justify-center">
          <div className="homesection6-card">
            <div className="flex justify-center">
              {" "}
              <Image className="bg-[#fa6742] p-2" src={casestudy1} alt="img" />
            </div>
            <div className="homesection6-heading">
              <h1 className="heading1">Web Traffic Management</h1>
              <h1 className="flex justify-center pr-12 pt-1 text-[#9f9f9f]">
                SEO, Marketing
              </h1>
            </div>
          </div>
          <div className="homesection6-card">
            <div className="flex justify-center">
              <Image className="bg-[#2bc2a7] p-2" src={casestudy2} alt="img" />
            </div>
            <div className="homesection6-heading">
              <h1 className="heading1">Cloaking & Doorway Pages</h1>
              <h1 className="flex justify-center text-[#9f9f9f] pt-1">
                Social, SEO
              </h1>
            </div>
          </div>
          <div className="homesection6-card">
            <div className="flex justify-center">
              <Image className="bg-[#ffb72f] p-2" src={casestudy3} alt="img" />
            </div>
            <div className="homesection6-heading">
              <h1 className="heading1">Hosting company rank</h1>
              <h1 className="flex justify-center pt-1 text-[#9f9f9f]">
                Hosting, Marketing
              </h1>
            </div>
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
          <h1 className="text-5xl pt-3 font-bold" id="homesection7-h1">
            Our Working<span className="text-[#fa6742]">Process</span>
          </h1>
          <div className="mt-8">
            <Marque />
          </div>
        </div>
        <div className="mt-20">
          <Image
            src={work_process}
            className="max-[1000px]:hidden "
            width={1900}
            height={800}
            alt="img"
          />
        </div>
        <div
          id="homesection7"
          className="flex relative bottom-[120px] max-[1000px]:pt-20 justify-around items-center"
        >
          <div
            id="process1"
            className="max-[550px]:bottom-0 max-[860px]:p-[40px]  bg-[#32cc73] relative bottom-[65px] p-[60px] w-fit  rounded-full"
          >
            <Image
              src={process1}
              className=" max-[860px]:w-[50px] "
              width={80}
              height={80}
              alt=""
            />
          </div>
          <div
            id="process2"
            className=" max-[860px]:p-[30px]  bg-[#fa6742] px-[80px] p-[60px] w-fit  rounded-full"
          >
            <Image
              src={process2}
              className=" max-[860px]:w-[70px]  max-[860px]:p-[5px]  max-[860px]:px-[16px] "
              width={60}
              height={60}
              alt=""
            />
          </div>
          <div
            id="process3"
            className="max-[550px]:bottom-0 max-[860px]:p-[40px]  bg-[#478fff] relative bottom-[65px] p-[60px] w-fit  rounded-full"
          >
            <Image
              src={process3}
              className="max-[860px]:p-[0px]  max-[860px]:w-[55px] "
              width={80}
              height={60}
              alt=""
            />
          </div>
          <div
            id="process4"
            className=" max-[860px]:p-[40px]  max-[860px]:w-[132px]  bg-[#f5b02d] p-[60px] w-fit  rounded-full"
          >
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
          <h1 className="text-5xl pt-3 font-bold" id="homesection8-h1">
            Our<span className="text-[#fa6742]">Pricing</span>
          </h1>
          <div className="mt-8">
            <Marque />
          </div>
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
       
      </section>

      <section>
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
    </div>
  );
};

export default HomeSection;
