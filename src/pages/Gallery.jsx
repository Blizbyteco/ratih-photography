import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

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
  );
}
