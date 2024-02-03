import React from "react";
import AboutUs from "../Components/A/AboutUs";
import TeamSection from "../Components/T/TeamSection";
import Testimonials from "../Components/T/Testimonials";
import ClientSlider from "../Components/C/ClientSlider";
import Layout from "../Components/L/Layout";
import Head from "next/head";
import BreadCrumbs from "../Components/B/BreadCrumbs";
import BackToTop from "../Components/B/BackToTop";

const index = () => {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      {/* <BreadCrumbs dynamicText={"About Us"} /> */}
      <AboutUs />
      <TeamSection />
      <BackToTop />
      <Testimonials />
      <ClientSlider />
    </Layout>
  );
};

export default index;