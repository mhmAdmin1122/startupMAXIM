import React from "react";
import Footer from "../F/Footer";
import Chatbot from "../C/Chatbot";
import SocialSidebar from "../S/SocialSidebar";
import Navbar from "../N/Navbar";
import Header from "../H/Header";

const Layout = ({ children }: any) => {
  return (
    <div>
      <SocialSidebar />
      <Chatbot />
      <Navbar />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
