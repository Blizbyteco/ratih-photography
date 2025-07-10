import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Detail from "../components/service/Detail";
import { Helmet } from "react-helmet";

const Service = () => {
  return (
    <>
      <Helmet>
        <title>Layanan | Nik Ratih Photography</title>
        <meta
          name="description"
          content="Temukan berbagai layanan untuk foto produk anda di kami"
        />

        <meta
          property="og:title"
          content="Layanan Fotografi - Nik Ratih Photography"
        />
        <meta
          property="og:description"
          content="Kami menyediakan layanan fotografi lengkap untuk berbagai kebutuhan produk Anda."
        />
        <meta
          property="og:url"
          content="https://nikratihphotography.biz.id/service"
        />
        <meta
          property="og:image"
          content="https://nikratihphotography.biz.id/og.png"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Layanan Fotografi" />
        <meta
          name="twitter:description"
          content="Jasa fotografi profesional untuk semua produk Anda."
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
      <Navbar />
      <Detail />
      <Footer />
    </>
  );
};

export default Service;
