import { useEffect, useState } from "react";
import HomeSection from "./Components/H/HomeSection";
import Layout from "./Components/L/Layout";
import Head from "next/head";
import AlertMessage from "./Components/A/AlertMessage";
import Link from "next/link";

export default function Home() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event: any) => {
    setIsShown((current) => !current);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <Head>
        <title>StartupMAXIM • Home</title>
      </Head>
      <div className="relative">
        {isShown && (
          <div className="construction-alert fixed z-[999999999999999999999] flex flex-wrap justify-center w-full items-center py-[20px]">
            <AlertMessage>
              <Link
                onClick={handleClick}
                href="/"
                className="button w-fit bg-gradient-to-r from-[#00bf63] to-[#000] text-[#fff] px-10 py-5 rounded-full"
              >
                CLICK HERE
              </Link>
              <button
                className="close-button absolute top-2 right-10 font-bold text-[20px]"
                onClick={handleClick}
              >
                x
              </button>
            </AlertMessage>
          </div>
        )}
      </div>
      <HomeSection />
    </Layout>
  );
}
