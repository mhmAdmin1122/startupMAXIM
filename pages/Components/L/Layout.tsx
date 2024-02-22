import React, { useEffect, useState } from "react";
import Footer from "../F/Footer";
import Chatbot from "../C/Chatbot";
import SocialSidebar from "../S/SocialSidebar";
import Navbar from "../N/Navbar";
import Header from "../H/Header";
import BackToTop from "../B/BackToTop";
import AlertMessage from "../A/AlertMessage";
import Link from "next/link";

const Layout = ({ children }: any) => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event: any) => {
    setIsShown((current) => !current);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <SocialSidebar />
      <Chatbot />
      <Navbar />
      <Header />
      {children}
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;
