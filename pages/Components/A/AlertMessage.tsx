import Link from "next/link";
import { FaCircleExclamation } from "react-icons/fa6";

const AlertMessage = ({children}:any) => {
  
  return (
    <div>
      <div className="alert-box flex flex-col relative bg-[#c4ff69] text-[#000] border-2 border-[#ff6e4e] p-5 rounded-[55px] w-[500px]">
        <div className="ico-heading-box-alert flex items-start justify-center gap-2 text-[#ff6e4e] py-8">
          <b className="text-[90px]">
            <FaCircleExclamation />
          </b>
          <div className="leading-7">
            <h3 className="font-medium text-[24px]">UNDER</h3>
            <h2 className="font-bold text-[28px]">DEVELOPMENT</h2>
            <p className="font-medium text-[#000]">Skip this notification!</p>
          </div>
        </div>

        <div className="px-[25px] flex flex-col gap-4 justify-center items-center">
          <p>
            HOLD ON, WE{"'"}RE STILL PUTTING THE PIECES TOGETHER FOR A PIXEL-PERFECT
            EXPERIENCE.
          </p>
          <p className="flex items-start w-full">
            YOU STILL CAN EXPLORE OUR WEBSITE!
          </p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AlertMessage;
