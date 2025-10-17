import { motion } from "motion/react";
import { useEffect, useState } from "react";

const msPerWord = 1200;
const words = ["loading", "loading"];

export const FlickerText = () => {
  const [activeWordIndex, setActiveWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, msPerWord); // Match the animation duration

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      key={activeWordIndex}
      className="flex flex-col justify-center text-center h-full text-lg font-normal text-white"
      animate={{
        opacity: [1, 1, 1, 0, 1, 1, 0],
      }}
      transition={{
        duration: msPerWord / 1000,
        repeat: Infinity,
        times: [0, 0.93, 0.95, 0.97, 0.98, 0.99, 1.0],
      }}
    >
      {words[activeWordIndex]}
    </motion.div>
  );
};