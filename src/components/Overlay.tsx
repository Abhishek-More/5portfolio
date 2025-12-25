import { useSetAtom } from "jotai";
import { Island } from "./Island";
import { devpostHoverAtom, githubHoverAtom } from "../atoms/hover";
import { motion } from "motion/react";
import { OverlayButton } from "./overlay/OverlayButton";

export const Overlay = () => {
  const setGithubHover = useSetAtom(githubHoverAtom);
  const setDevpostHover = useSetAtom(devpostHoverAtom);

  return (
    <div className="absolute bottom-6 left-8 right-8 z-[100] select-none">
      <motion.div
        initial={{ opacity: 0, y: 20, x: 20, scale: 1.1 }}
        animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.6, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 bg-black"
      >
        <div className="flex items-center gap-4">
          <OverlayButton
            text="resume"
            link="https://google.com"
            onHover={() => {}}
          />
          <OverlayButton
            text="github"
            link="https://github.com/abhishek-more"
            onHover={(isHovering: boolean) => setGithubHover(isHovering)}
          />
          <OverlayButton
            text="linkedin"
            link="https://www.linkedin.com/in/abhishek-more-linked/"
            onHover={(isHovering: boolean) => setGithubHover(isHovering)}
          />
          <OverlayButton
            text="devpost"
            link="https://devpost.com/AbhishekMore"
            onHover={(isHovering: boolean) => setDevpostHover(isHovering)}
          />
        </div>
      </motion.div>
      <Island />
    </div>
  );
};
