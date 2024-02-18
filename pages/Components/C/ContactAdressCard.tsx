import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa6";

const ContactAdressCard = ({
  userPosition,
  userName,
  userPhone,
  userEmail,
  userPic,
  picaltText,
  address,
}: any) => {
  return (
    <div className="contact-adress-user-card-box text-left w-[400px] shadow-lg shadow-gray-300 hover:shadow-lg hover:shadow-gray-600 transition-all duration-700 delay-150 rounded-md overflow-hidden">
      {/* Detailbox */}
      <div className="flex items-center gap-2 px-3 py-2 border-t-2 border-gray-100 overflow-hidden rounded-tl-md rounded-tr-md border-b-4 border-b-[#692c1e]">
        <div className="contact-adress-user-card-imagebox w-[120px] h-[120px] bg-[#ff6e4e] overflow-hidden rounded-full border-2 flex items-center justify-center">
          <Image src={userPic} alt={picaltText} className="w-full h-full" />
        </div>

        <div className="leading-8 contact-adress-user-card-deatailbox">
          <h3 className="text-2xl font-bold">{userName}</h3>
          <h4 className="text-[#ff6e4e] font-medium">{userPosition}</h4>
          <p>{address}</p>
        </div>
      </div>

      {/* contact-box */}
      <div className="leading-6 contact-adress-user-card-contactdeatailbox px-4 py-2 grid items-center gap-4 bg-[#ff6e4e]">
        <div className="grid gap-2 text-[#212121] text-[20px]">
          <div className="flex items-center gap-2">
            <FaPhone />
            <p>{userPhone}</p>
          </div>

          <div className="flex items-center gap-2">
            <FaEnvelope />
            <p className="">{userEmail}</p>
          </div>
        </div>
        <div className="contact-adress-user-card-contactdeatailbtnbox flex justify-center items-center gap-2 text-[#fff] text-[16px]">
          <Link
            href={`tel:${userPhone}`}
            className="bg-[#00bf63] rounded-md text-center font-medium px-4 py-2 w-[150px]"
          >
            Call To Me
          </Link>

          <Link
            href={`mailto:${userEmail}`}
            className="bg-[#00bf63] text-center rounded-md w-[150px] font-medium px-4 py-2"
          >
            Message Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactAdressCard;
