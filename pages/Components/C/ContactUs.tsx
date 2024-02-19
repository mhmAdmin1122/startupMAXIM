import React from "react";
import Marque from "../M/Marque";
import ContactAdressCard from "./ContactAdressCard";
import logo from "@/public/img/logo.png";
import user1Pic from "@/public/img/user1.svg";
import user2Pic from "@/public/img/user2.svg";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <section>
      <div className="Contact-Section">
        <div>
          <p className="text-[var(--text-gray)] min-[1440px]:text-[20px]">
            CONTACT US
          </p>
          <div className="Contact-Section-heading">
            <h1>Our Contact</h1>
            <h1 className="text-[var(--background-color)]">Details</h1>
          </div>
          <div className="loader">
            <Marque />
          </div>
        </div>

        <div className="contact-adress-user-box flex items-center justify-center gap-10 flex-wrap py-10">
          <ContactAdressCard
            userPosition="Founder / CEO"
            userName="Imran Ahmad Lashari"
            userPhone="+923036424939"
            userEmail="contactus@startupmaxim.com"
            userPic={user1Pic}
            picaltText="Imran_Ahmad_Lashari"
            address="Bahawalpur, Punjab, Pakistan"
          />

          <ContactAdressCard
            userPosition="Co-Founder / CMO"
            userName="Muhammad Hasaan"
            userPhone="+923257390045"
            userEmail="contactus@startupmaxim.com"
            userPic={user2Pic}
            picaltText="Muhammad_Hasaan"
            address="Bahawalpur, Punjab, Pakistan"
          />

          <ContactAdressCard
            userPosition="Head office Detail / Help Line"
            userName="StartupMaxim"
            userPhone="009-215-5596"
            userEmail="contactus@startupmaxim.com"
            userPic={logo}
            picaltText="comp-logo"
            address="Bahawalpur, Punjab, Pakistan"
          />
        </div>
      </div>

      <div className="py-10 bg-gradient-to-t from-[#00bf63] to-[#c4ff69]">
        <div className="Form-Heading">
          <p>LEAVE A MESSAGE</p>
          <div>
            <h1>Give a</h1>
            <h1 className="text-[var(--secondary-color)]">Message</h1>
          </div>
        </div>
        <ContactForm /> 
      </div>

      <div className="Contact-Last-Section pb-[30px]">
        <h1 className="text-[var(--background-color)]">Tayyab Arshad</h1>
        <h4>CEO TW-Coder</h4>
        <p>
          Start working with an company that can do provide every thing at you
          need to generate awareness, drive traffic, connect with
        </p>
      </div>
    </section>
  );
};

export default ContactUs;
