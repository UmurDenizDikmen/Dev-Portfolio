"use client";
import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import AboutSection from "./component/AboutSection";
import ProjectsSections from "./component/ProjectsSections";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSections />
      <Footer />
    </>
  );
}
