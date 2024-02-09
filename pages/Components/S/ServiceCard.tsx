
import { useState } from "react";
import Image from "next/image";

const Card = ({imageUrl, title, altText, para, startinglist, startinglist2, startinglist3, endinglist, endinglist2, endinglist3, endinglist4}: any) => {
  const [expanded, setExpanded] = useState(false);
  const [cardHeight, setCardHeight] = useState("350px");

  const toggleExpanded = () => {
    setExpanded(!expanded);
    setCardHeight(expanded ? "250px" : "auto"); 
  };

  return (
    <div className="h-fit mb-8" style={{ height: cardHeight }}>
    <div
      id="card1"
      className="flex p-4 border-[#f4f4f4] border-[2px] rounded flex-col hover:shadow-md hover:shadow-gray-300 h-fit  w-[300px]"
    >
      <Image src={imageUrl} className="pb-6" alt={altText} width={80} height={80} />
      <h1 className="text-[18px] pb-3 font-bold">{title}</h1>  
      <p className="text-[12px] font-semibold pb-2 ">{para}</p>
       <div className="text-left">
       <p className="text-[14px] text-left">{startinglist}</p>
        <p className="text-[14px] text-left">{startinglist2}</p>
        <p className="text-[14px] text-left">{startinglist3}</p>
       </div>
        {!expanded && (
          <><button className="" onClick={toggleExpanded}>
            Read more
          </button></>
        )}
        {expanded && (
          <>
          <div className="text-left">
          <p className="text-[14px]">{endinglist}</p>
          <p className="text-[14px]">{endinglist2}</p>
          <p className="text-[14px]">{endinglist3}</p>
          <p className="text-[14px]">{endinglist4}</p>
          </div>
          <button className="" onClick={toggleExpanded}>
            Read less
          </button></>
        )}
      </div>
    </div>

  );
};
export default Card;

