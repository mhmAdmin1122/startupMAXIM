import React from "react";
import Image from "next/image";
import image from "@/public/img/61syRs4bPBL._AC_UF1000_1000_QL80_-removebg-preview.png";

const HomeCard = () => {
  return (
    <div>
      <div className="card">
      <h2 className="card__heading">Basic</h2>
      <p className="card__price">$29.99</p>
      <ul  className="card__bullets">
        <li>Access to all premium workouts and nutrition plans</li>
        <li>24/7 Priority support</li>
        <li>1-on-1 virtual coaching session every month</li>
        <li>Exclusive content and early access to new features</li>
      </ul>
      <button  className="btn">Get Started</button>
    </div>
    </div>
  );
};

export default HomeCard;
