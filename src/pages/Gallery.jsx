import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

export default function Gallery() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-95%"]);

  useEffect(() => {
    document.title = "Galeri";
  }, []);

  return (
    <div ref={ref} className="w-full bg-black h-[500vh] text-white">
      <section className="w-full min-h-screen sticky top-0 flex justify-center items-center overflow-hidden">
        <motion.div className="flex gap-4 absolute bottom-0" style={{ x }}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
            <img
              key={i}
              className="w-[300px]"
              src="/images/example.jpg"
              alt="example"
            />
          ))}
        </motion.div>
      </section>
    </div>
  );
}
