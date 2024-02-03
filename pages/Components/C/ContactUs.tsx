import Image from "next/image";
import React from "react";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import place1 from "@/public/img/place1.png";
import place2 from "@/public/img/place2.png";
import Button from "../B/Button";
import Marque from "../M/Marque";

const ContactUs = () => {
  return (
    <main>
      <section className="Contact-Section">
        <div>
          <p className="text-[var(--text-gray)]">CONTACT US</p>
          <div className="Contact-Section-heading">
            <h1 className="">Our Contact</h1>
            <h1 className="text-[var(--background-color)]">Details</h1>
          </div>
          <div className="loader">
            <Marque />
          </div>
        </div>
        <div className="contact-detail-div">
          <div className="contact-detail-one">
            <div>
              <h1 className="text-[var(--background-color)]">Owner / CEO</h1>
            </div>
            <div className="first-info">
              <FaPhone />
              <p>009-215-5596</p>
            </div>
            <div className="second-info">
              <FaEnvelope />
              <p>mail@example.com</p>
            </div>
          </div>
          <div className="contact-detail-two">
            <div>
              <h1 className="text-[var(--background-color)]">Managing Director</h1>
            </div>
            <div className="first-info">
              <FaPhone />
              <p>009-215-5596</p>
            </div>
            <div className="second-info">
              <FaEnvelope />
              <p>mail@example.com</p>
            </div>
          </div>
          
        </div>
      </section>
      <section>
        <div className="Form-Heading">
          <p>
            LEAVE A MESSAGE
          </p>
          <div>
            <h1>Give a</h1>
            <h1 className="text-[var(--secondary-color)]">Message</h1>
          </div>
        </div>
        <form className="Contact-Form">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Phone" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea name="" id="" cols={22} rows={7} className="" placeholder="Message"></textarea>
          {/* <button className="contact-button">CONTACT US</button> */}
          <Button dynamicText={"Contact"} />
        </form>
      </section>
      <section className="Contact-Last-Section">
        <h1 className="text-[var(--background-color)]">Tayyab Arshad</h1>
        <h4>CEO TW-Coder</h4>
        <p>Start working with an company that can do provide every thing at you need to generate awareness, drive traffic, connect with</p>
      </section>
    </main>
  );
};

export default ContactUs;
