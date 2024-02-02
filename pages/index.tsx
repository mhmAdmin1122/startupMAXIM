import HomeSection from './Components/H/HomeSection'
import Layout from './Components/L/Layout'
import Head from 'next/head'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <HomeSection />
    </Layout>
  )
}
