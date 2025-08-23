import { useState, useEffect } from "react";
import { Github } from "./popups/Github";
import { devpostHoverAtom } from "../atoms/hover";
import { motion } from "motion/react";
import { useAtom } from "jotai";

export const Island = () => {
  const [contributions, setContributions] = useState(null);
  const [devpostHover] = useAtom(devpostHoverAtom);
  console.log(devpostHover);

  useEffect(() => {
    const fetchContributions = async () => {
      const res = await fetch(
        "https://github-contributions-api.jogruber.de/v4/abhishek-more?y=last",
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();

      console.log(data);
      setContributions(data);
    };

    fetchContributions();
  }, []);

  return (
    <div className="absolute bottom-0 left-0">
      <div className="absolute bottom-[72px]">
        <Github contributions={contributions} />
      </div>

      <img
        src="/crown.gif"
        width={50}
        height={50}
        alt=""
        className={`${devpostHover ? "opacity-100" : "opacity-0"} absolute -translate-x-5 -translate-y-5 -rotate-45 transition-opacity duration-300 z-10`}
      />
      <motion.div
        initial={{
          scale: 0,
          width: 60,
        }}
        animate={{
          scale: [0, 1, 1, 1],
          width: [60, 150, 200, 260],
        }}
        transition={{
          delay: 0.75,
          times: [0, 0.25, 0.5, 0.75],
          duration: 0.75,
          type: "spring",
          bounce: 0.1,
        }}
      >
        <div className="relative flex justify-between items-center mx-auto h-[60px] w-[260px] bg-black rounded-full p-2 overflow-hidden border-2 border-gray-900 z-20">
          <div className="flex">
            <div
              className={`flex-shrink-0 h-[44px] w-[44px] rounded-full bg-gray-300 my-auto overflow-hidden transition-all duration-1000`}
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
