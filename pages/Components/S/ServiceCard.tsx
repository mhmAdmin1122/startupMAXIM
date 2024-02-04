import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";

const ServiceCard = ({ imageUrl, title, desc, linkurl, altText }: any) => {
  return (
    <div
      id="card1"
      className="flex flex-col hover:shadow-md hover:shadow-gray-300 h-auto pt-10 items-center w-[300px]"
    >
      <Image src={imageUrl} className="pb-6" alt={altText} width={150} height={150} />
      <h1 className="text-2xl pb-3 font-bold">{title}</h1>
      <p className="text-center pb-3 text-[#82847e]">{desc}</p>
      <Link
        href={`${linkurl}`}
        className="flex gap-1 text-red-500 items-center font-bold"
      >
        Read More <FaChevronRight />
      </Link>
    </div>
  );
};

export default ServiceCard;
