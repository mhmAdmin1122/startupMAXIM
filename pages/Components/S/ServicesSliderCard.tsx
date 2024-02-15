import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const ServicesSliderCard = ({
  cardPic,
  cardTitle,
  cardDescription,
  btnUrl,
}: any) => {
  return (
    <div className="services-Slider-Card">
      <div className="card-Pic-Box">
        <Image src={cardPic} alt="card-pic" width={120} height={120} />
      </div>
      <div className="card-title-desc-box">
        <h3 className="services-slider-card-title">{cardTitle}</h3>
        <p className="services-slider-card-desc">{cardDescription}</p>
      </div>
      <Link href={`${btnUrl}`} className="read-More-Btn">
        <b>Read more</b>
        <div className="w-[40px] h-[40px] flex items-center justify-center">
          <b className="text-[30px]">
            <RiArrowDropDownLine />
          </b>
        </div>
      </Link>
    </div>
  );
};

export default ServicesSliderCard;
