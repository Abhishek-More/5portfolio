import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Polaroid, type PolaroidImage } from "./Polaroid";
import Magnetic from "../overlay/Magnetic";

//TODO: make a preloader for the preloader. I'm just assuming it finishes in 2.4 seconds
const images: PolaroidImage[] = [
  {
    src: "",
  },
  {
    src: "/wafflehouse.png",
    signature: "i feel alive",
  },
  {
    src: "https://images.pexels.com/photos/7591337/pexels-photo-7591337.jpeg",
  },
  {
    src: "https://www.dpreview.com/files/p/articles/9462076757/1723747.jpeg",
  },
  {
    src: "/keyboard.webp",
  },
  {
    src: "https://images.pexels.com/photos/7591337/pexels-photo-7591337.jpeg",
  },
  {
    src: "https://www.dpreview.com/files/p/articles/9462076757/1723747.jpeg",
  },
  {
    src: "/climber-mini.png",
  },
];

//Had to add this because the first photo would freeze a little bit. This should be the time that the previous animation took.
const PHOTO_STREAM_DELAY = 750;
const PHOTO_STREAM_DURATION = 100;
const PHOTO_STREAM_ANGLE = 4;

export const PhotoStream = () => {
  const [visibleIndex, setVisibleIndex] = useState(-1);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const rotations = images.map(
    (_, index) =>
      index * PHOTO_STREAM_ANGLE - (images.length - 1) * PHOTO_STREAM_ANGLE,
  );

  useEffect(() => {
    const timers: number[] = [];

    images.forEach((_, index) => {
      const timer = setTimeout(
        () => {
          setVisibleIndex(index);
          if (index === images.length - 1) {
            // Animation complete after last image appears
            setTimeout(() => setAnimationComplete(true), 500);
          }
        },
        PHOTO_STREAM_DURATION * index + PHOTO_STREAM_DELAY,
      );
      timers.push(timer);
    });

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-[200px]">
      {images.map((image, index) => {
        const isVisible = index <= visibleIndex;
        const isHovered = hoveredIndex === index;

        //As a card gets further in the stack, decrease its opacity slightly
        const opacity = isHovered ? 1 : (1 / (visibleIndex - index + 1)) * 5;

        // Calculate movement along the rotation angle
        const angleInRadians = (rotations[index] * Math.PI) / 180;
        const moveDistance = 200;
        const xOffset = isHovered ? Math.sin(angleInRadians) * moveDistance : 0;
        const yOffset = isHovered
          ? -Math.cos(angleInRadians) * moveDistance
          : 0;

        return (
          <motion.div
            key={index}
            className="absolute"
            initial={{
              opacity: 0,
              scale: 1,
              rotate: `${rotations[index]}deg`,
            }}
            animate={{
              opacity: isVisible ? opacity : 0,
              scale: isVisible ? 1 : 1,
              x: xOffset,
              y: yOffset,
              rotate: rotations[index],
            }}
            transition={{
              duration: 0.05,
              ease: "linear",
              x: { duration: 0.3, ease: "easeOut", repeat: 0 },
              y: { duration: 0.3, ease: "easeOut", repeat: 0 },
            }}
          >
            <Polaroid image={image} showSignature={animationComplete} />
          </motion.div>
        );
      })}

      {/* Dots Navigation */}
      <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-200 ${
              hoveredIndex === index
                ? "bg-white scale-125"
                : index <= visibleIndex
                  ? "bg-gray-400 hover:bg-gray-300"
                  : "bg-gray-600"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
        ))}
      </div>
    </div>
  );
};
