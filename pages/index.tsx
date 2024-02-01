import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from './Components/N/Navbar'
import Footer from './Components/F/Footer'
import HomeSection from './Components/H/HomeSection'
import Layout from './Components/L/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <HomeSection />
    </Layout>
  )
}
