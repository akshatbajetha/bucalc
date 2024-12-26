import Image from "next/image";
import Navbar from "./navbar/page";
import LandingPage from "./landingpage/page";
import Footer from "./footer/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Footer />
    </>
  );
}
