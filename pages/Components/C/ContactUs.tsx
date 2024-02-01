import Image from "next/image";
import React from "react";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import place1 from "@/public/img/place1.png";
import place2 from "@/public/img/place2.png";

const ContactUs = () => {
  return (
    <main>
      <section className="second-section">
        <div>
          <p className="text-[var(--text-gray)]">CONTACT US</p>
          <div className="second-section-heading">
            <h1 className="">Our Contact</h1>
            <h1 className="text-[var(--background-color)]">Details</h1>
          </div>
        </div>
        <div className="contact-detail-div">
          <div className="contact-detail-one">
            <div className="contact-one-heading">
              <h1 className="text-[30px] font-bold text-[var(--background-color)]">Owner / CEO</h1>
            </div>
            <div className="flex gap-3 mt-[20px]">
              <FaPhone className="text-gray-600 mt-[17px]" />
              <p className="text-black font-semibold">009-215-5596</p>
            </div>
            <div className="flex gap-3">
              <FaEnvelope className="text-gray-600 mt-[17px]" />
              <p className="text-black font-semibold">mail@example.com</p>
            </div>
          </div>
          <div className="contact-div flex leading-[50px]">
            <div className="contact-two p-[40px]">
              <div className="flex gap-3">
                <h1 className="text-[30px] font-bold text-[var(--background-color)]">Managing Director</h1>
              </div>
              <div className="flex gap-3 mt-[20px]">
                <FaPhone className="text-gray-600 mt-[17px]" />
                <p className="text-black font-semibold">009-215-5596</p>
              </div>
              <div className="flex gap-3">
                <FaEnvelope className="text-gray-600 mt-[17px]" />
                <p className="text-black font-semibold">mail@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="contact-heading text-center">
          <p className="text-[#b4b4b4] font-[400] ">
            LEAVE A MESSAGE
          </p>
          <div className="flex gap-[6px] justify-center flex-wrap font-black text-[35px]">
            <h1>Give a</h1>
            <h1 className="text-[var(--secondary-color)]">Message</h1>
          </div>
        </div>
        <form className="grid my-[20px] place-items-center">
          <input className="shadow-md text-[var(--secondary-color)] font-bold shadow-gray-400 mt-[12px] px-[20px] py-[7px] outline-none" type="text" placeholder="Name" />
          <input className="shadow-md text-[var(--secondary-color)] font-bold shadow-gray-400 mt-[12px] px-[20px] py-[7px] outline-none" type="text" placeholder="Phone" />
          <input className="shadow-md text-[var(--secondary-color)] font-bold shadow-gray-400 mt-[12px] px-[20px] py-[7px] outline-none" type="email" placeholder="Email" />
          <input className="shadow-md text-[var(--secondary-color)] font-bold shadow-gray-400 mt-[12px] px-[20px] py-[7px] outline-none" type="text" placeholder="Subject" />
          <textarea name="" id="" cols={22} rows={7} className="shadow-md text-[var(--secondary-color)] font-bold shadow-gray-400 mt-[10px] px-[20px] py-[5px] outline-none" placeholder="Message"></textarea>
          <button className="contact-button">CONTACT US</button>
        </form>
      </section>
      <section className="text-center my-[50px]">
        <h1 className="text-[var(--background-color)] font-bold text-[20px]">Tayyab Arshad</h1>
        <h4 className="text-gray-400 text-[14px] my-[5px] font-semibold">CEO TW-Coder</h4>
        <p className="text-[#ffd34e] my-[30px] font-semibold">Start working with an company that can do provide every thing at you need <br /> to generate awareness, drive traffic, connect with</p>
      </section>
    </main>
  );
};

export default ContactUs;
