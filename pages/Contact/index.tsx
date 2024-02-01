import React from 'react'
import ContactUs from '@/pages/Components/C/ContactUs'
import Chatbot from '@/pages/Components/C/Chatbot'
import HeroSection from '@/pages/Components/H/HeroSection'
import BreadCrumbs from '@/pages/Components/B/BreadCrumbs'
import Layout from '../Components/L/Layout'

const Contact = () => {
  return (
    <Layout>
      <BreadCrumbs  dynamicText={'Contact Us'} />
      <ContactUs />
      <Chatbot />
    </Layout>
  )
}

export default Contact