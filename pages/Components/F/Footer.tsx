import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaMapLocation,
  FaPhone,
  FaXTwitter,
} from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import Marque from "../M/Marque";
import logo from "@/public/img/logo.png";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="">
      <div className="footer-main-box flex gap-12 bg-[#151414] px-8 w-full h-fit">
        <div className="company-footer-detail-box relative bottom-20 w-[420px]">
          <div className="company-about-form-footer bg-[#202020] text-white p-[30px] w-[420px] rounded-lg">
            <div className="flex items-center gap-2 footer-logo-box">
              <Image src={logo} alt="logo" className="w-[120px]" />
              <h4 className="footer-sertion1-h1 text-4xl font-bold max-[350px]:text-2xl">
                Startup <br /> MAXIM
              </h4>
            </div>

            <p className="footer-about-us text-[var(--text-gray)] max-[350px]:text-[12px] text-justify py-[10px]">
              We{"'"}re passionate believers in the power of startups to change
              the world, and we{"'"}re dedicated to fueling their success. Over
              the years, we{"'"}ve helped countless startups launch, scale, and
              achieve their dreams, from increasing website traffic by 300% for
              a tech startup to securing funding for a groundbreaking social
              enterprise.
            </p>

            <h5 className="footer-sertion1-h2 text-2xl pb-2">Follow Us</h5>

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

          <h5 className="best-market-textline text-[25px] text-center text-white pt-4">
            The Best Digital Marketing Agency For Startups
          </h5>
        </div>

        <div className="footer-mainbox-part2 flex flex-col items-start gap-10 p-4">
          <div className="about-contact-footer-box flex items-center flex-wrap gap-4 justify-between">
            <div className="contact-detail-footer flex flex-col">
              <div className="flex items-center gap-4">
                <FaPhone className="text-[#d34938] text-[22px] mt-2" />
                <Link
                  href="tel:+923036424939"
                  className="text-[20px] font-semibold text-white"
                >
                  +92-303-642-4939
                </Link>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-[#d34938] text-[22px] mt-2" />
                <div className="">
                  <Link
                    href="mailto:contactus@startupmaxim.com"
                    className="text-[20px] font-semibold text-white"
                  >
                    contactus@startupmaxim.com
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-[20px] font-semibold flex gap-5 text-white">
              <FaMapLocation className="text-[#ff6e4e]" />
              <address className="footer-address-box">
                2470 Camellia Ln NE <br />
                Atlanta, GA 30324, USA
              </address>
            </div>
          </div>

          <div>
            <div>
              <h4 className="text-2xl text-white">Useful Links</h4>
              <div className="mt-5">
                <Marque />
              </div>
            </div>

            <div className="footer-link py-3">
              <Link href="/About">About Us</Link>
              <Link href="/Contact">Contact Us</Link>
              <Link href="/Services">Services</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Project</Link>
              <Link href="/">Testimonials</Link>
              <Link href="/">Our Team</Link>
              <Link href="/">FAQs</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap pt-4 pb-4 justify-around items-center w-full bg-[#202020]">
        <div className="text-[#696969] max-[340px]:text-center">
          &copy; 2024, All Rights Reserved by StartupMAXIM
        </div>
        <div className="onmob flex max-[320px]:flex-wrap max-[370px]:flex max-[320px]:h-fit max-[320px]:justify-center gap-8 h-12 items-center">
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
      </div>
    </footer>
  );
};

export default Footer;
