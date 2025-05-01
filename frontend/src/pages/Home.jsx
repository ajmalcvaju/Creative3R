import React from "react";
import { gsap } from "gsap";    
import BackgroundSlider from "../components/BackgroundSlider";
import Header from "../components/Header";
import FeaturedProduct from "../components/FeaturedProduct";
import Footer from "../components/Footer";
import HeaderTwo from "../components/HeaderTwo";
import BannerSlide from "../components/BannerSlide";
import FeaturedProductTwo from "../components/FeaturedProductTwo";
import Banner from "../components/Banner";
import BestSeller from "../components/BestSeller";
import QualityBanner from "../components/QualityBanner";
import NewArrivals from "../components/NewArrivals";

const Home = () => {
  return (
    <>
        <HeaderTwo/>
        {/* <BannerSlide/> */}
        <Banner/>
        <QualityBanner/>
        <FeaturedProductTwo/>
        <NewArrivals/>
        <BestSeller/>
        <Footer/>
        {/* <BackgroundSlider/>
        <FeaturedProduct/>
        <FeaturedProduct/>
        <FeaturedProduct/> */}
        {/* <Footer/> */}
    </>
  );
};

export default Home;
