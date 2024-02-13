
import { useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaChevronRight, FaChevronUp } from "react-icons/fa6";

const Card = ({imageUrl, title, altText, para, startinglist, startinglist2, startinglist3, endinglist, endinglist2, endinglist3, endinglist4, endinglist5, endinglist6}: any) => {
  const [expanded, setExpanded] = useState(false);
  const [cardHeight, setCardHeight] = useState("350px");

  const toggleExpanded = () => {
    setExpanded(!expanded);
    setCardHeight(expanded ? "280px" : "auto"); 
  };

  return (
    <div className="h-fit " style={{ height: cardHeight }}>
    <div className="bg-[#00bf63] pr-4 pb-4 hover:bg-gradient-to-t from-[#00bf63] to-[#c4ff69]">
    <div
      id="card1"
      className="flex p-4  bg-white hover:bg-gradient-to-t from-[#febd59] to-[#c4ff69] flex-col hover:bg-[#00bf63] shadow-[#c4ff69] h-fit  w-[300px]"
    >
     <div className="flex justify-center"> <Image src={imageUrl} className="pb-6 items-center" alt={altText} width={80} height={80} /></div>
      <h1 className="text-[17px] text-[#c4ff69] font-bold text-center pb-3">{title}</h1>  
      <p className="text-[12px] font-bold pb-2 ">{para}</p>
       <div className="text-left">
       <p className="text-[14px] text-left">{startinglist}</p>
        <p className="text-[14px] text-left">{startinglist2}</p>
        <p className="text-[14px] text-left">{startinglist3}</p>
       </div>
        {!expanded && (
          <div className="flex gap-1 justify-center items-center">
            <><button >
             
          </button>
          <div className="readmorebtn" onClick={toggleExpanded}><FaChevronDown /></div></>
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
          <p className="text-[14px] text-left">{endinglist6}</p>
          </div>
          <div className="flex gap-1 justify-center items-center">
            <><button className="readmorebtn" onClick={toggleExpanded}>
             
          </button>
          <div className="readmorebtn" onClick={toggleExpanded}><FaChevronUp /></div></>
          </div>
          </>
        )}
      </div>
    </div>
    </div>

  );
};
export default Card;

