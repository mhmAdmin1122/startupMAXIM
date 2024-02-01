import React from "react";
import Footer from "../F/Footer";
import Chatbot from "../C/Chatbot";
import SocialSidebar from "../S/SocialSidebar";
import Navbar from "../N/Navbar";

const Layout = ({ children }: any) => {
  return (
    <div>
      <SocialSidebar />
      <Chatbot />
      <Navbar />
        {children}
      <Footer />
    </div>
  );
};

export default Layout;