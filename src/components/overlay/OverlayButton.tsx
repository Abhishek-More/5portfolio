import { useState } from "react";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import Magnetic from "./Magnetic";
import { motion, useMotionValue } from "motion/react";

export const OverlayButton = ({
  text,
  link,
  onHover,
}: {
  text: string;
  link: string;
  onHover: (isHovering: boolean) => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const angle = useMotionValue(0);

  const handleHover = (isHovering: boolean) => {
    setIsHovered(isHovering);
    onHover(isHovering);
  };

  return (
    <Magnetic>
      <div
        className="relative flex group items-center"
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      >
        <div
          className={`absolute -left-2 -top-0 -bottom-0 -right-2 rounded-md bg-gray-900 transition-all duration-150 ${
            isHovered ? "scale-100" : "scale-0"
          }`}
        ></div>
        <a
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          className="text-white text-[14px] opacity-60 hover:opacity-90 transition-opacity cursor-pointer pointer-events-auto px-1 py-2"
        >
          {text}
        </a>
        <motion.div
          style={{
            transform: `rotate(${angle.get()}deg)`,
          }}
        >
          <HiMiniArrowUpRight className="text-sm -translate-y-1 group-hover:translate-x-[2px] group-hover:-translate-y-[6px] transition-transform opacity-60" />
        </motion.div>
      </div>
    </Magnetic>
  );
};
