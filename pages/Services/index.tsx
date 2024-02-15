import React from "react";
import ServicesPage from "@/pages/Components/S/ServicesPage";
import Layout from "@/pages/Components/L/Layout";
import Head from "next/head";

const OurServices = () => {
  return (
    <div>
      <Head>
        <title>Services</title>
      </Head>
      <Layout>
        <ServicesPage />
      </Layout>
    </div>
  );
};

export default OurServices;