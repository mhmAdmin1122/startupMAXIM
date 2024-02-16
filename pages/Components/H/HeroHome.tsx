import React, { useState, useEffect } from "react";

const HeroHome = () => {
  useEffect(() => {
    const swapIcons = () => {
      const icons = document.querySelectorAll<HTMLElement>(".icones");
      let positions: { top: string; left: string }[] = [];
      let classNames: string[] = [];
      let zIndexes: number[] = [];

      icons.forEach((icones) => {
        positions.push({
          top: `${Math.random() * 90}%`,
          left: `${Math.random() * 90}%`,
        });
        classNames.push(icones.className);
        zIndexes.push(Math.floor(Math.random() * 10));

        let size;
        if (
          icones.classList.contains("solid-circle") ||
          icones.classList.contains("outlined-circle")
        ) {
          size = `${40 + 40 * Math.random()}px`;
          icones.style.width = size;
          icones.style.height = size;
        } else if (icones.classList.contains("dot")) {
          size = `${5 + 15 * Math.random()}px`;
          icones.style.width = size;
          icones.style.height = size;
        } else if (
          icones.classList.contains("square") ||
          icones.classList.contains("outlined-square")
        ) {
          size = `${30 + 40 * Math.random()}px`;
          icones.style.width = size;
          icones.style.height = size;
        }

        icones.style.opacity = (0.4 + Math.random() * 0.6).toFixed(2);
      });

      positions.sort(() => Math.random() - 0.5);
      classNames.sort(() => Math.random() - 0.5);
      zIndexes.sort(() => Math.random() - 0.5);

      icons.forEach((icones, index) => {
        icones.style.top = positions[index].top;
        icones.style.left = positions[index].left;
        icones.style.zIndex = zIndexes[index].toString();
        icones.className = classNames[index];
      });
    };

    swapIcons();
    const intervalId = setInterval(swapIcons, 1500);

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run effect only once

  const dynamicTexts = ["Affordability", "Eligibility", "Success"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % dynamicTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="Hero-Home overflow-hidden">
      <div className="text-container">
        <p className="line1">WHERE QUALITY MEETS</p>
        <div className="line2">
          {dynamicTexts.map((text, index) => (
            <span
              key={index}
              className={index === currentTextIndex ? "slide-in" : ""}
            >
              {text}
            </span>
          ))}
        </div>
        <p className="line3">
          ELEVATE YOUR STARTUP WITH PROVEN DIGITAL MARKETING STRATEGIES.
        </p>
      </div>

      {/* animation-box */}
      <div className="overlay-container">
        <div className="object icones solid-circle" id="icon1"></div>
        <div className="object icones outlined-circle" id="icon2"></div>
        <div className="object icones dot" id="icon3"></div>
        <div className="object icones solid-circle" id="icon4"></div>
        <div className="object icones solid-circle" id="icon5"></div>
        <div className="object icones outlined-circle" id="icon6"></div>
        <div className="object icones dot" id="icon7"></div>
        <div className="object icones solid-circle" id="icon8"></div>
        <div className="object icones outlined-circle" id="icon9"></div>
        <div className="object icones dot" id="icon10"></div>
        <div className="object icones outlined-circle" id="icon11"></div>
        <div className="object icones dot" id="icon12"></div>
        <div className="object icones square" id="icon13"></div>
        <div className="object icones outlined-square" id="icon14"></div>
        <div className="object icones square" id="icon15"></div>
      </div>
    </section>
  );
};
export default HeroHome;
