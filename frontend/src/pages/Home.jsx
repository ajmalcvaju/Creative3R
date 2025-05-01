import React from "react";
import Footer from "../components/Footer";
import HeaderTwo from "../components/HeaderTwo";
import FeaturedProductTwo from "../components/FeaturedProductTwo";
import Banner from "../components/Banner";
import BestSeller from "../components/BestSeller";
import QualityBanner from "../components/QualityBanner";
import NewArrivals from "../components/NewArrivals";

const Home = () => {
  return (
    <>
        <HeaderTwo/>
        <Banner/>
        <QualityBanner/>
        <FeaturedProductTwo/>
        <NewArrivals/>
        <BestSeller/>
        <Footer/>
    </>
  );
};

export default Home;
