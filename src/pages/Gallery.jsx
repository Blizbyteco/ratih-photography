import { motion, useMotionTemplate, useMotionValue, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function Gallery() {

  const [percentage, setPercentage] = useState(0)
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });


  const x = useTransform(scrollYProgress, [0, 1], ["40%", `-150%`]);
  const progressPercentage = useTransform(scrollYProgress, [0.2, 0.8], [0, 100])

  useMotionValueEvent(progressPercentage, "change", (latest) => setPercentage(Math.round(latest.toFixed(1))))

  useEffect(() => {
    document.title = "Galeri";
  }, []);

  return (
    <div ref={ref} className="w-full bg-black h-[500vh] text-white">
      <section className="w-full min-h-screen sticky top-0 flex justify-center items-center overflow-hidden">

        <div className="absolute bottom-0 left-[120px] flex items-end gap-x-32 w-full">
          <h1 className="text-6xl font-semibold">HASIL POTRET</h1>

          <p className="text-sm text-white font-light">SCROLL KE BAWAH ({percentage}%)</p>

        </div>

        <motion.div className="flex gap-4 absolute top-1/4" style={{ x }}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
            <img
              key={i}
              className="w-[350px]"
              src="/images/example.jpg"
              alt="example"
            />
          ))}
        </motion.div>
      </section>
    </div>
  );
}
