import React from "react";
import Head from "./Head";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Head />
      <div className="bg-[#00bf63] h-screen px-[60px] pt-[10px]">{children}</div>
    </div>
  );
};

export default Layout;
