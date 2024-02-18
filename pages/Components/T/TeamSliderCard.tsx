import React from "react";
import Image from "next/image";

const TeamSliderCard = ({
  cardPic,
  Membername,
  memberPosition,
  memberBio,
}: any) => {
  return (
    <div>
      <div className="team-card">
        <div className="card-inner">
          <div className="card-front">
            <Image src={cardPic} className="person-image" alt="logo-pic" width={200} height={200} />
          </div>
          <div className="card-back">
            <div className="person-info">
              <h1 className="font-bold">{Membername}</h1>
              <p>{memberPosition}</p>
              <p className="person-info-about">{memberBio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSliderCard;
