import { useMotionValue, motion, useTransform, useMotionTemplate, useSpring } from "motion/react";
import { useEffect } from "react";

export default function ImageCursorScale({ url, cursorText }) {
  const cursorXPosition = useMotionValue(0);
  const cursorYPosition = useMotionValue(0);

    const cursorX = useSpring(cursorXPosition, {damping: 40, stiffness: 400});
    const cursorY = useSpring(cursorYPosition, {damping: 40, stiffness: 400});

  useEffect(() => {
    const moveCursor = (e) => {
      cursorXPosition.set(e.clientX - 50);
      cursorYPosition.set(e.clientY - 50);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);
  

  return (
    <div className="overflow-hidden relative group hover:cursor-none w-[90%]">
      <img
        src={url}
        alt="cursor-image"
        className="size-full object-cover group-hover:scale-110 transition-transform duration-200 ease-out hover:duration-200 hover:ease-in"
      />

      <motion.div
        style={{
          x: useMotionTemplate`${cursorX}px`,
          y: useMotionTemplate`${cursorY}px`,
        }}
        className="absolute top-1/2 left-1/2 size-[100px] bg-white rounded-full pointer-events-none z-50 scale-0 group-hover:scale-100 text-black flex justify-center items-center"
      >
        {cursorText}
      </motion.div>
    </div>
  );
}
