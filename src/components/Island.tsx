import { devpostHoverAtom, spotifyHoverAtom } from "../atoms/hover";
import { motion } from "motion/react";
import { useAtom, useSetAtom } from "jotai";
import { useRef } from "react";
import { Github } from "./popups/Github";
import { useSpotify } from "../hooks/useSpotify";
import { SpotifyPopup } from "./popups/Spotify";

export const Island = () => {
  const [devpostHover] = useAtom(devpostHoverAtom);
  const setSpotifyHover = useSetAtom(spotifyHoverAtom);
  const containerRef = useRef<HTMLDivElement>(null);
  const { isPlaying } = useSpotify();

  const handleSpotifyHover = (isHovering: boolean) => {
    setSpotifyHover(isHovering);
  };

  return (
    <div className="absolute bottom-0 left-0 z-[1000]">
      <div className="absolute bottom-[72px]">
        <Github />
        <SpotifyPopup />
      </div>

      <img
        src="/crown.gif"
        width={50}
        height={50}
        alt=""
        className={`${devpostHover ? "opacity-80" : "opacity-0"} absolute -translate-x-5 -translate-y-5 -rotate-45 transition-opacity duration-300 z-10`}
      />

      <motion.div
        initial={{ opacity: 0, y: 20, x: -20, scale: 1.1 }}
        animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.5, ease: "easeInOut" }}
        className="origin-bottom-left"
      >
        <div
          ref={containerRef}
          className="relative flex justify-between items-center mx-auto h-[60px] w-[260px] bg-black rounded-full p-2 overflow-hidden border-2 border-gray-900 z-[100]"
        >
          <div className="flex">
            <div
              className={`flex-shrink-0 h-[44px] w-[44px] rounded-full bg-gray-300 my-auto overflow-hidden transition-all duration-1000 ${isPlaying ? "ring-2 ring-[#1DB954]" : ""}`}
              onMouseEnter={() => handleSpotifyHover(true)}
              onMouseLeave={() => handleSpotifyHover(false)}
            >
              <img
                className="-translate-x-1 opacity-100"
                src="/korosensei.webp"
                width={256}
                height={256}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-end gap-1 ml-2 mb-[2px]">
              <p className="text-white opacity-60 text-[13px] leading-none mt-1">
                swe @ dripos
              </p>
              <p className="text-white font-medium text-[16px] leading-none mb-1 text-nowrap">
                abhishek more
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
