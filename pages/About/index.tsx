import React from "react";
import AboutUs from "../Components/A/AboutUs";
import TeamSection from "../Components/T/TeamSection";
import Testimonials from "../Components/T/Testimonials";
import ClientSlider from "../Components/C/ClientSlider";
import Layout from "../Components/L/Layout";
import Head from "next/head";
import HeroAbout from "../Components/A/HeroAbout";

const index = () => {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <HeroAbout />
      <AboutUs />
      <TeamSection />
      <Testimonials />
      <ClientSlider />
    </Layout>
  );
};

export default index;