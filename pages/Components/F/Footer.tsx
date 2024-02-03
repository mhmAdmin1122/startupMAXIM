import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaLocationDot,
  FaMapLocation,
  FaPhone,
  FaTwitter,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import Link from "next/link";
import Marque from "../M/Marque";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <section className="footer">
        <div className="pr-[50px] max-[500px]:p-0 max-[500px]:w-full  pl-[20px]">
          <div className="px-10 max-[500px]:p-3 relative bottom-20 max-[980px]:w-full bg-[#202020] pb-10 flex flex-col gap-6  pt-8  text-white">
            <h1 className="text-4xl font-bold max-[350px]:text-2xl">
              StartUp Maxim
            </h1>
            <p className="text-[var(--text-gray)] max-[350px]:text-[12px]">
              Lorem ipsum dolor, sit amet consectetur elit. Officiis, quis neque
              officia possimus, sapiente ab, nihil non iste magnam obcae Iusto
              voluptates dignissimos perferendis!
            </p>

            <h1 className="text-2xl pb-4">Follow Us</h1>
            <div>
              <ul className="wrapper">
                <li className="icon facebook">
                  <span className="tooltip">Facebook</span>
                  <div>
                    <span>
                      <FaFacebook />
                    </span>
                  </div>
                </li>
                <li className="icon twitter">
                  <span className="tooltip">Twitter</span>
                  <span>
                    <FaXTwitter />
                  </span>
                </li>
                <li className="icon instagram">
                  <span className="tooltip">Instagram</span>
                  <span>
                    <FaInstagram />
                  </span>
                </li>
                <li className="icon github">
                  <span className="tooltip">Github</span>
                  <span>
                    <FaGithub />
                  </span>
                </li>
                <li className="icon linkedin">
                  <span className="tooltip">Linkedin</span>
                  <span>
                    <FaLinkedin />
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h1 className=" text-[25px] relative bottom-12 text-white">
              Best seo company 2024
            </h1>
          </div>
        </div>
        <div className="flex gap-8 max-[620px]:flex-wrap max-[980px]:justify-around">
          <div className="flex pt-0 w-fit flex-col gap-10  ">
            <div className="text-[20px] font-semibold flex gap-5 text-white">
              <div className="locationmap">
                <FaMapLocation />
              </div>
              Punjab,Pakistan, <br />
              Bahawalpur
            </div>
            <div>
              <h1 className="text-2xl text-white">Useful Links</h1>
              <div className="mt-5">
                <Marque />
              </div>
            </div>
            <div className="footer-link">
              <Link href="/About">About Us</Link>
              <Link href="/Contact">Contact Us</Link>
              <Link href="/Services">Services</Link>
              <Link href="">Blog</Link>
              <Link href="">Project</Link>
              <Link href="">Testimonticals</Link>
              <Link href="">Our Team</Link>
              <Link href="">Faq</Link>
            </div>
          </div>
          <div className="flex gap-10  flex-col">
            <div className="flex gap-4">
              <div className="phone-icons">
                <FaPhone />
              </div>
              <div className="">
                <h1 className="text-[20px] font-semibold text-white">
                  {" "}
                  +923-246-920-609
                </h1>
                <p className="text-[20px] text-white"> Give us a call</p>
              </div>
            </div>
            <div className="text-2xl max-[320px]:items-center max-[320px]:justify-center  text-white">
              <h1>Subscribe</h1>
              <div className="mt-5">
                <Marque />
              </div>
            </div>
            <p className="text-[20px] max-[320px]:text-start text-[#75877c]">
              Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit.
            </p>
            <div id="footer-email=buttton" className="flex w-[100%]">
              <input
                type="email"
                className="email-input"
                placeholder="Email Address"
              />
              <button className="button-email-submit">
                <FaLocationArrow />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-wrap relative mt-5 pt-4 pb-4 justify-around items-center w-full bg-[#202020]">
        <div className="text-[#696969] max-[340px]:text-center">
          Copyright © 2018, All Right Reserved Seobin
        </div>
        <div className="flex max-[320px]:flex-wrap max-[370px]:flex max-[320px]:h-fit max-[320px]:justify-center gap-8 h-12 items-center">
          <Link href={"/"} className="text-[#696969]">
            Home
          </Link>
          <Link href={""} className="text-[#696969]">
            Terms
          </Link>
          <Link href={""} className="text-[#696969]">
            Privacy Policy
          </Link>
          <Link href={"/Contact"} className="text-[#696969]">
            Contact US
          </Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
