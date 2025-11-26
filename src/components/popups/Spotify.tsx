import { motion } from "motion/react";
import { useSpotify } from "../../hooks/useSpotify";
import { useAtom } from "jotai";
import { spotifyHoverAtom } from "../../atoms/hover";
import { useEffect, useRef, useState } from "react";

export const SpotifyPopup = () => {
  const { isPlaying } = useSpotify();
  const [spotifyHover] = useAtom(spotifyHoverAtom);

  if (!isPlaying) return null;

  return (
    <motion.div
      className="w-[260px] bg-black rounded-[25px] flex flex-col justify-center mx-auto p-4 border-2 border-gray-900 opacity-0 overflow-hidden"
      animate={{
        y: spotifyHover ? 0 : 10,
        opacity: spotifyHover ? 1 : 0,
        scale: spotifyHover ? 1 : 0.95,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      <SpotifyCard />
    </motion.div>
  );
};

export const SpotifyCard = () => {
  const { currentTrack } = useSpotify();
  const [spotifyHover] = useAtom(spotifyHoverAtom);

  if (!currentTrack) return null;

  const widthPercentage =
    (currentTrack?.timestamp / currentTrack?.duration) * 100;

  return (
    <div className="">
      <div className="flex items-center gap-3 pr-2 overflow-hidden">
        <img
          src={currentTrack.albumImageUrl}
          alt="album-image"
          width={64}
          className="rounded-sm"
        />

        <div className="flex flex-col justify-center">
          <ScrollingTitle title={currentTrack.title} isVisible={spotifyHover} />
          <p className="text-gray-500 text-sm text-ellipsis tracking-wide">
            {currentTrack?.artist.split(",")[0].toLowerCase()}
          </p>
        </div>
      </div>

      <div className="relative h-[5px] w-full rounded-full bg-gray-700  mt-4 overflow-hidden">
        <div
          className={`absolute h-full bg-white transition-all ease-linear`}
          style={{ width: `${widthPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const ScrollingTitle = ({
  title,
  isVisible,
}: {
  title: string;
  isVisible: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [shouldScroll, setShouldScroll] = useState(false);
  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
    if (containerRef.current && textRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const textWidth = textRef.current.scrollWidth;
      const needsScroll = textWidth > containerWidth;
      setShouldScroll(needsScroll);

      if (needsScroll) {
        setScrollDistance(textWidth - containerWidth + 20);
      }
    }
  }, [title]);

  return (
    <div ref={containerRef} className="max-w-[142px] overflow-hidden">
      <motion.p
        ref={textRef}
        className="text-gray-200 font-medium text-sm tracking-wide whitespace-nowrap"
        initial={{ x: 0 }}
        animate={
          shouldScroll && isVisible
            ? {
                x: [0, 0, -scrollDistance, -scrollDistance, 0],
              }
            : {}
        }
        transition={
          shouldScroll && isVisible
            ? {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.2, 0.7, 0.9, 1],
                repeatDelay: 1.5,
              }
            : {}
        }
        key={isVisible ? title : "hidden"}
      >
        {title.toLowerCase()}
      </motion.p>
    </div>
  );
};
