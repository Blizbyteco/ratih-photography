import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Product from "@/components/home/Product";
import Result from "@/components/home/Result";
import Banner from "@/components/home/Banner";
import Footer from "@/components/ui/Footer";
import { useEffect } from "react";

const Home = () => {

  useEffect(() => {
      document.title = "Nikratih Photography - Your best partner"
    }, [])

  return (
    <>
      <Hero />
      <About />
      <Product />
      <Result />
      <Banner />
      <Footer />
    </>
  );
};

export default Home;
