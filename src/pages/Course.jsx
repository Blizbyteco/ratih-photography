import Footer from "@/components/ui/Footer";
import Detail from "../components/course/Detail";
import { useEffect } from "react";
import Navbar from "../components/ui/Navbar";

const Course = () => {
  useEffect(() => {
    document.title = "Kursus";
  }, []);

  return (
    <>
      <Helmet>
        <title>Kursus - Nik Ratih Photography</title>
        <meta
          name="description"
          content="Ikuti kursus fotografi bersama fotografer profesional kami dan tingkatkan skill Anda."
        />
        <meta
          name="keywords"
          content="kursus fotografi, belajar foto, photgraphy course, photography, fotografi"
        />
        <meta
          property="og:title"
          content="Kursus Fotografi - Nik Ratih Photography"
        />
        <meta
          property="og:description"
          content="Belajar fotografi dari fotografer profesional."
        />
        <meta
          property="og:url"
          content="https://nikratihphotography.biz.id/course"
        />
        <meta
          property="og:image"
          content="https://nikratihphotography.biz.id/og.png"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kursus Fotografi" />
        <meta
          name="twitter:description"
          content="Gabung bersama kami untuk belajar teknik fotografi tingkat lanjut."
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

export default Course;
