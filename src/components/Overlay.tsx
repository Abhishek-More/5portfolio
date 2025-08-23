import { HiMiniArrowUpRight } from "react-icons/hi2";
import { useSetAtom } from "jotai";
import { Island } from "./Island";
import { devpostHoverAtom, githubHoverAtom } from "../atoms/hover";

export const Overlay = () => {
  const setGithubHover = useSetAtom(githubHoverAtom);
  const setDevpostHover = useSetAtom(devpostHoverAtom);

  return (
    <div className="absolute top-6 bottom-6 left-8 right-8 pointer-events-none">
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
