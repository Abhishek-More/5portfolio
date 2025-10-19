import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Polaroid, type PolaroidImage } from "./Polaroid";

//TODO: make a preloader for the preloader. I'm just assuming it finishes in 2.4 seconds
const images: PolaroidImage[] = [
  {
    src: "https://www.dpreview.com/files/p/articles/9462076757/1723747.jpeg",
  },
  {
    src: "https://images.pexels.com/photos/2404843/pexels-photo-2404843.jpeg",
  },
  {
    src: "https://images.pexels.com/photos/7591337/pexels-photo-7591337.jpeg",
  },
  {
    src: "https://www.dpreview.com/files/p/articles/9462076757/1723747.jpeg",
  },
  {
    src: "https://images.pexels.com/photos/2404843/pexels-photo-2404843.jpeg",
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

        //As a card gets further in the stack, decrease its opacity slightly for a cool effect
        const opacity = (1 / (visibleIndex - index + 1)) * 5;

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
            }}
            transition={{ duration: 0.05 }}
            style={{
              zIndex: index,
            }}
          >
            <Polaroid image={image} />
          </motion.div>
        );
      })}

      <button className="absolute -bottom-40 rounded-full border border-gray-500 text-white px-4 py-2 cursor-pointer hover:text-black hover:bg-white transition-colors text-xs">
        Explore
      </button>
    </div>
  );
};
