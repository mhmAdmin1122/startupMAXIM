import React from 'react'
import ContactUs from '@/pages/Components/C/ContactUs'
import Layout from '../Components/L/Layout'
import Head from 'next/head'
import HeroContact from '../Components/H/HeroContact'

const Contact = () => {
  return (
    <Layout>
      <Head>
        <title>Contact -StartupMAXIM</title>
      </Head>      
      <HeroContact />
      <ContactUs />
    </Layout>
  )
}

export default Contact