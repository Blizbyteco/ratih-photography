import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Product from "@/components/home/Product";
import Result from "@/components/home/Result";
import Banner from "@/components/home/Banner";
import Footer from "@/components/ui/Footer";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
    <Helmet>
      <title>Nikratih Photography</title>
    </Helmet>
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
