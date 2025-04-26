import React from "react";
import { gsap } from "gsap";    
import BackgroundSlider from "../components/BackgroundSlider";
import Header from "../components/Header";
import FeaturedProduct from "../components/FeaturedProduct";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
        <Header/>
        <BackgroundSlider/>
        <FeaturedProduct/>
        <FeaturedProduct/>
        <FeaturedProduct/>
        <Footer/>
    </>
  );
};

export default Home;
