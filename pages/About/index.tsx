import React from "react";
import AboutUs from "../Components/A/AboutUs";
import TeamSection from "../Components/T/TeamSection";
import Testimonials from "../Components/T/Testimonials";
import SlickSlider from "../Components/S/SlickSlider";
import Layout from "../Components/L/Layout";
import Head from "next/head";

const index = () => {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <AboutUs />
      <TeamSection />
      <Testimonials />
      <SlickSlider />
    </Layout>
  );
};

export default index;
