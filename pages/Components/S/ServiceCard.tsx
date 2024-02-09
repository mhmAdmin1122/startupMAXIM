
import { useState } from "react";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa6";

const Card = ({imageUrl, title, altText, para, startinglist, startinglist2, startinglist3, endinglist, endinglist2, endinglist3, endinglist4, endinglist5}: any) => {
  const [expanded, setExpanded] = useState(false);
  const [cardHeight, setCardHeight] = useState("350px");

  const toggleExpanded = () => {
    setExpanded(!expanded);
    setCardHeight(expanded ? "250px" : "auto"); 
  };

  return (
    <div className="h-fit" style={{ height: cardHeight }}>
    <div
      id="card1"
      className="flex p-4 border-[#f4f4f4] border-[2px] rounded flex-col hover:shadow-md hover:shadow-gray-300 h-fit  w-[300px]"
    >
        <div className="flex justify-center"> <Image src={imageUrl} className="pb-6 items-center" alt={altText} width={80} height={80} /></div>
      <h1 className="text-[17px] pb-3 font-bold text-center">{title}</h1>  
      <p className="text-[12px] font-semibold pb-2 ">{para}</p>
       <div className="text-left">
       <p className="text-[14px] text-left">{startinglist}</p>
        <p className="text-[14px] text-left">{startinglist2}</p>
        <p className="text-[14px] text-left">{startinglist3}</p>
       </div>
        {!expanded && (
          <div className="flex gap-1 items-center">
            <><button className="readmorebtn" onClick={toggleExpanded}>
            Read more 
          </button>
          <div className="readmorebtn"><FaChevronRight /></div></>
          </div>
        )}
        {expanded && (
          <>
          <div className="text-left">
          <p className="text-[14px] text-left">{endinglist}</p>
          <p className="text-[14px] text-left">{endinglist2}</p>
          <p className="text-[14px] text-left">{endinglist3}</p>
          <p className="text-[14px] text-left">{endinglist4}</p>
          <p className="text-[14px] text-left">{endinglist5}</p>
          </div>
          <div className="flex gap-1">
            <><button className="readmorebtn" onClick={toggleExpanded}>
            Read more 
          </button>
          <div className="readmorebtn"><FaChevronRight /></div></>
          </div>
          </>
        )}
      </div>
    </div>

  );
};
export default Card;

