import { HiMiniArrowUpRight } from "react-icons/hi2";
import { useSetAtom } from "jotai";
import { Island } from "./Island";
import { devpostHoverAtom, githubHoverAtom } from "../atoms/hover";
import { useState, useEffect } from "react";

export const Overlay = () => {
  const setGithubHover = useSetAtom(githubHoverAtom);
  const setDevpostHover = useSetAtom(devpostHoverAtom);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute top-6 bottom-6 left-8 right-8 pointer-events-none">
      <div className="absolute top-6 left-6 flex items-center gap-2">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-red-500 opacity-50 animate-pulse"></div>
          <p className="font-mono font-bold text-red-500 text-[14px] ml-2 opacity-50">
            Rec
          </p>
        </div>
        <p className="font-mono text-red-500 opacity-50 text-[10px]">
          {currentTime.toLocaleTimeString("en-US", {
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })}
        </p>
      </div>
      <div className="absolute bottom-0 right-0 pointer-events-none bg-black">
        <div className="flex items-center gap-4">
          <OverlayButton
            text="resume"
            link="https://google.com"
            onHover={() => {}}
          />
          <OverlayButton
            text="github"
            link="#"
            onHover={(isHovering: boolean) => setGithubHover(isHovering)}
          />
          <OverlayButton
            text="linkedin"
            link="#"
            onHover={(isHovering: boolean) => setGithubHover(isHovering)}
          />
          <OverlayButton
            text="devpost"
            link="#"
            onHover={(isHovering: boolean) => setDevpostHover(isHovering)}
          />
        </div>
      </div>
      <Island />
    </div>
  );
};

export const OverlayButton = ({
  text,
  link,
  onHover,
}: {
  text: string;
  link: string;
  onHover: (isHovering: boolean) => void;
}) => {
  return (
    <div className="flex group cursor-pointer items-center">
      <a
        href={link}
        target="_blank"
        rel="noreferrer noopener"
        className="text-white text-[14px] opacity-60 hover:opacity-90 transition-opacity cursor-pointer pointer-events-auto"
        onMouseEnter={() => onHover(true)}
        onMouseLeave={() => onHover(false)}
      >
        {text}
      </a>
      <HiMiniArrowUpRight className="text-sm -translate-y-1 group-hover:translate-x-[2px] group-hover:-translate-y-[6px] transition-transform opacity-60" />
    </div>
  );
};
