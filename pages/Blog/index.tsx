import React from "react";
import Layout from "../Components/L/Layout";
import Head from "next/head";
import Homecard from "../Components/H/HomeCard";
import post1 from "@/public/img/post1.jpg";
import post2 from "@/public/img/post2.jpg";
import post3 from "@/public/img/post3.jpg";
import Marque from "../Components/M/Marque";

const BlogPage = () => {
  return (
    <Layout>
      <Head>
        <title>Blog - StartupMAXIM</title>
      </Head>
      <div className="py-10 text-[45px] font-bold text-center flex flex-col justify-center items-center gap-2">
        <h1>
          Read Our <b className="text-[#ff6e4e]">Blog</b>
        </h1>
        <Marque />
      </div>
      <div className="flex flex-wrap items-center gap-10 justify-center px-[25px] pb-[100px] text-wrap w-full">
        <Homecard imageUrl={post1} />
        <Homecard imageUrl={post2} />
        <Homecard imageUrl={post3} />
      </div>
    </Layout>
  );
};

export default BlogPage;
