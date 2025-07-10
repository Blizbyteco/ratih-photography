import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";

const imageToShow = [
  "/images/example.jpg",
  "/images/example1.jpg",
  "/images/example2.png",
  "/images/example3.jpg",
  "/images/example4.jpg",
  "/images/example5.jpg",
  "/images/example6.jpg",
  "/images/example7.jpg",
];

export default function Gallery() {
  const [percentage, setPercentage] = useState(0);
  const [previewing, setPreviewing] = useState(null);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const previewVariants = {
    initial: {
      opacity: 0,
    },

    animate: {
      opacity: 1,
    },
  };

  const x = useTransform(scrollYProgress, [0, 1], ["40%", `-130%`]);
  const progressPercentage = useTransform(
    scrollYProgress,
    [0.2, 0.8],
    [0, 100]
  );

  useMotionValueEvent(progressPercentage, "change", (latest) =>
    setPercentage(Math.round(latest.toFixed(1)))
  );

  useEffect(() => {
    document.title = "Galeri";
  }, []);

  return (
    <>
      <Helmet>
        <title>Galeri - Nik Ratih Photography</title>
        <meta
          name="description"
          content="Lihat koleksi foto hasil karya Nik Ratih Photography dari berbagai hasil jepretan foto produk."
        />
         <meta
        name="keywords"
        content="galeri foto, photo gallery, fotography, fotografi, gallery, galeri, hasil foto, foto result"
      />

        <meta
          property="og:title"
          content="Galeri Foto - Nik Ratih Photography"
        />
        <meta
          property="og:description"
          content="Kumpulan hasil jepretan terbaik kami dari berbagai produk klien kami."
        />
        <meta
          property="og:url"
          content="https://nikratihphotography.biz.id/gallery"
        />
        <meta
          property="og:image"
          content="https://nikratihphotography.biz.id/og.png"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Galeri Nik Ratih Photography" />
        <meta
          name="twitter:description"
          content="Jelajahi hasil karya kami dari berbagai hasil foto produk klien kami."
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

      {/* content */}
      <div ref={ref} className="w-full bg-black h-[500vh] text-white">
        {previewing && (
          <motion.div
            variants={previewVariants}
            initial="initial"
            animate="animate"
            className="fixed left-0 top-0 z-60  w-full min-h-full flex justify-center items-center"
          >
            <div
              onClick={() => setPreviewing(null)}
              className="absolute left-0 top-0 bg-black/70 w-full min-h-full"
            />

            <motion.img
              className="w-[350px] z-20 object-cover"
              src={previewing}
              alt="example"
            />
          </motion.div>
        )}

        <section className="w-full min-h-screen sticky top-0 flex justify-center items-center overflow-hidden">
          <div className="absolute bottom-0">
            <p className="text-lg text-white font-normal">
              SCROLL KE BAWAH ({percentage}%)
            </p>
          </div>

          <AnimatePresence>
            <motion.div
              className="flex gap-4 absolute top-1/5 sm:top-1/4"
              style={{ x }}
            >
              {imageToShow.map((url, i) => (
                <motion.img
                  onClick={() => setPreviewing(url)}
                  key={`image-${i}`}
                  className="w-[350px]"
                  src={url}
                  alt="example"
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </section>
      </div>
    </>
  );
}
