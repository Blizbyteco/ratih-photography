import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Product from "@/components/home/Product";
import Result from "@/components/home/Result";
import Banner from "@/components/home/Banner";
import Footer from "@/components/ui/Footer";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const Home = () => {
  useEffect(() => {
    document.title = "Nikratih Photography - Your photography best partner";
  }, []);

  return (
    <>
      <Helmet>
        <title>Beranda - Nik Ratih Photography</title>
        <meta
          name="description"
          content="Fotografer profesional di Indonesia. Kami menyediakan layanan fotografi untuk produk anda."
        />
        <meta
          name="keywords"
          content="fotografi, jasa fotografi, fotografer profesional, fotografi produk, nikratih, fotografer madura, jasa foto murah, fotografer pamekasan"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Nik Ratih Photography - Fotografi Profesional"
        />
        <meta
          property="og:description"
          content="Layanan fotografi terbaik untuk setiap produk Anda."
        />
        <meta property="og:url" content="https://nikratihphotography.biz.id/" />
        <meta
          property="og:image"
          content="https://nikratihphotography.biz.id/og.png"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nik Ratih Photography" />
        <meta
          name="twitter:description"
          content="Layanan fotografi untuk produk anda."
        />
        <meta
          name="twitter:image"
          content="https://nikratihphotography.biz.id/og.png"
        />
      </Helmet>
      {/* google anlytics */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-5YPM7DFKJ1"
      ></script>
      <script>
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-5YPM7DFKJ1');
      </script>
      {/* google anlytics */}
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
