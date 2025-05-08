import React from "react";

import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Product from "@/components/home/Product";
import Result from "@/components/home/Result";
import Banner from "@/components/home/Banner";
import Footer from "@/components/ui/Footer";

const Home = () => {
  return (
    <>
        <Navbar />
        <Hero/>
        <div className="h-screen" />
        <About/>
        <Product/>
        <Result/>
        <Banner/>
        <Footer/>
    </>
  );
};

export default Home;
