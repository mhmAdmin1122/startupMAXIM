import React from "react";
import {
  FaBars,
  FaChevronDown,
  FaChevronRight,
  FaCircleUser,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
  FaShareFromSquare,
  FaTwitter,
  FaVideo,
  FaWindows,
} from "react-icons/fa6";
import Image from "next/image";
import logo from "@/public/img/logo.png";
import Link from "next/link";
import { useState } from "react";
import {
  FaSearch,
} from "react-icons/fa";
import dropdownlogo from "@/public/img/football-removebg-preview.png";
import bannar from "@/public/Startup Growth Academy - Coming Soon Poster.webp";
const Navbar = () => {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const toggleSearchInput = () => {
    setShowSearchInput(!showSearchInput);
  };
  const [showLinks, setShowLinks] = useState(false);
  const toggleSearchInputs = () => {
    setShowSearchInput(!showSearchInput);
  };

  const [isActive, setIsActive] = useState(false);

  const handleClick = (event: any) =>{
    setIsActive((current) => !current);
  };

  return (
    <div className="pb-6">
      <header className="flex flex-nowrap max-[620px]:flex-col justify-between pt-3 pb-3 pl-16 pr-16 bg-[var(--text-black)] h-auto text-white w-full items-center">
        <div className="header">
          <p>
            <FaLocationDot /> Bahawalpur,Punjab,Pakistan
          </p>
          <p>
            <FaEnvelope /> info@example.com
          </p>
          <p>
            <FaPhone /> 000-123-4567
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <h1 className="Header-icon">Follow:</h1>
          <div className="facebook-icon">
            <FaFacebook />
          </div>
          <div className="linkedin-icon">
            {" "}
            <FaLinkedin />
          </div>
          <div className="instagram-icon">
            <FaInstagram />
          </div>
          <div className="twitter-icon">
            <FaTwitter />
          </div>
        </div>
      </header>

      <div>
        <nav className="flex justify-around px-8 items-center">
          <div className="max-[890px]:relative max-[890px]:left-[35%]">
            <Image
              className="mt-3 "
              src={logo}
              width={150}
              height={130}
              alt="logo"
            />
          </div>
          <div
            id="hee"
            className={
              "flex justify-between text-[20px] max-[890px]:hidden items-center space-x-12 "
            }
          >
            <Link href="/">Home</Link>

            <div className="d">
              <Link className="d-btn" id="services" href={"/Services"}>
                Services <FaChevronDown />
              </Link>
              <div className="d-content">
                <div className="row">
                  <div className="column">
                    <h1 className="text-2xl text-blue-500 font-bold ml-5">
                      Services
                    </h1>
                    <div className=" flex gap-6">
                      <div className="flex flex-col gap-5 ml-12 mt-4">
                        <div className="flex gap-2">
                          <div className="mt-2 ">
                            <FaVideo />
                          </div>
                          <div>
                            <h1 className="text-[20px] font-bold">Video</h1>
                            <p className="text-[16px] ">
                              Lorem ipsum dolor sit amet.
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <div className="mt-2">
                            <FaCircleUser />
                          </div>
                          <div>
                            <h1 className="text-[20px] font-bold">Branding</h1>
                            <p className="text-[16px] ">
                              Lorem ipsum dolor sit amet.
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <div className="mt-2">
                            <FaShareFromSquare />
                          </div>
                          <div>
                            <h1 className="text-[20px] font-bold">
                              Social Media
                            </h1>
                            <p className="text-[16px] ">
                              Lorem ipsum dolor sit amet.
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <div className="mt-2">
                            <FaWindows />
                          </div>
                          <div>
                            <h1 className="text-[20px] font-bold">SEO</h1>
                            <p className="text-[16px]">
                              Lorem ipsum dolor sit amet.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="flex flex-col gap-5 ml-12 mt-[48px]">
                      <div className="flex gap-2">
                        <div className="mt-2">
                          <FaVideo />
                        </div>
                        <div>
                          <h1 className="text-[20px] font-bold">Video</h1>
                          <p className="text-[16px] ">
                            Lorem ipsum dolor sit amet.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="mt-2">
                          <FaCircleUser />
                        </div>
                        <div>
                          <h1 className="text-[20px] font-bold">Branding</h1>
                          <p className="text-[16px] ">
                            Lorem ipsum dolor sit amet.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="mt-2">
                          <FaShareFromSquare />
                        </div>
                        <div>
                          <h1 className="text-[20px] font-bold">
                            Social Media
                          </h1>
                          <p className="text-[16px]">
                            Lorem ipsum dolor sit amet.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="mt-2">
                          <FaWindows />
                        </div>
                        <div>
                          <h1 className="text-[20px] font-bold">SEO</h1>
                          <p className="text-[16px]">
                            Lorem ipsum dolor sit amet.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="px-[30px] flex flex-col gap-[4px] border-l-[2px] border-blue-500">
                      <h1 className="text-blue-500 font-bold">MODS</h1>
                      <p className="text-[14px]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Officia sunt error magni!
                      </p>
                      <Image src={bannar} width={330} height={300} alt="img" />
                      <div className="mt-[4px]">
                        <button className="text-black rounded-[10px] py-2 flex items-center justify-between px-2 border-[2px] w-full border-blue-500 ">
                          Discover <FaChevronRight />
                        </button>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Tool">
              <Link href="" className="flex gap-1 items-center pt-0">
                Tool <FaChevronDown />
              </Link>
              <div className="dropdown-Tool">
                <div className="flex pb-3 gap-3 pt-3">
                  <div>
                    <Image
                      className="pt-3"
                      src={dropdownlogo}
                      height={160}
                      width={160}
                      alt=""
                    ></Image>
                  </div>
                  <div>
                    <h1>Heading 1</h1>
                    <p className="text-[18px] leading-4 pt-2">
                      Lorem ipsum dolor sit, consectetur Lorem ipsum dolor amet
                      consectetur adipisicing elit
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="dropdown-logo2">
                    <Image
                      className="pt-3"
                      src={dropdownlogo}
                      height={140}
                      width={120}
                      alt=""
                    ></Image>
                  </div>
                  <div>
                    <h1>Heading 1:-</h1>
                    <p className="text-[18px] leading-4 pt-2">
                      Lorem ipsum dolor sit, Lorem ipsum dolor sit, amet consect
                      adipisicing elit
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/About">About</Link>
            <Link href="/Contact">Contact</Link>
          </div>
          <div className="flex max-[890px]:none relative bottom-3 flex-nowrap">
            <button
              id="searchButton"
              className="search-btn"
              onClick={toggleSearchInput}
            >
              <FaSearch />
            </button>
            {showSearchInput && (
              <input
                type="text"
                id="searchInput"
                placeholder="Enter your search"
              />
            )}
              <div className="search-btnn" onClick={toggleSearchInputs}>
                <div id="rotateButton">
                <div className="h-[2px] w-[23px] bg-white"></div>
                <div className="h-[2px] w-[33px]  bg-white"></div>
                <div className="h-[2px] w-[23px] bg-white"></div>
                </div>
              </div>
          </div>

          {/* toggle button */}
          <div className="relative right-[80%] tab-mob-menu-ico-list">
            <button id="togglebutton" onClick={handleClick}>
              <FaBars />
            </button>

            {isActive && (
             <div className=" text-white"> 
              <ul className="absolute mt-4 bg-black w-[440px] max-[800px]:w-[400px] max-[730px]:w-[360px] max-[630px]:w-[320px] max-[540px]:w-[280px] max-[440px]:w-[240px] max-[380px]:w-[190px] h-[230px]">
             <Link href={"/"}>
               <li className="text-center">
                 <b className="px-2 text-[30px]">Home</b>
               </li>
             </Link>
             <Link href={"/Services"}>
               <li className="text-center">
                 <b className="px-2 text-[30px]">Services</b>
               </li>
             </Link>

             <Link href={"/certificate"}>
               <li className="text-center">
                 <b className="px-2 text-[30px]">Tools</b>
               </li>
             </Link>

             <Link href={"/About"}>
               <li className="text-center">
                 <b className="px-2 text-[30px]">About</b>
               </li>
             </Link>

             <Link href={"/Contact"}>
               <li className="text-center">
                 <b className="px-2 text-[30px]">Contact</b>
               </li>
             </Link>
           </ul>
           </div>
            )}
          </div>
          {/* toggle button */}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
