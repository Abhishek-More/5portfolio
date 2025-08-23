import { useState, useEffect, useMemo } from "react";
import { motion } from "motion/react";
import { useAtom } from "jotai";
import { githubHoverAtom } from "../../atoms/hover";

export const Github = () => {
  const [githubHover] = useAtom(githubHoverAtom);
  const [contributions, setContributions] = useState<{
    contributions: Array<{ count: number; date: string; level: number }>;
  } | null>(null);

  useEffect(() => {
    const fetchContributions = async () => {
      const res = await fetch(
        "https://github-contributions-api.jogruber.de/v4/abhishek-more?y=last",
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();

      setContributions(data);
    };

    fetchContributions();
  }, []);
  const contributionElements = useMemo(() => {
    if (!contributions) return null;

    const day = new Date().getDay();

    //Get the last 13 weeks + current week's days of contributions
    const datedContributions = contributions.contributions.slice(-91 - day - 1);

    return datedContributions.map(
      (
        contribution: { count: number; date: string; level: number },
        index: number,
      ) => (
        <div
          key={index}
          className={`${
            contribution.count > 0 ? "bg-[#7BFD79] opacity-80" : "bg-gray-700"
          } w-3 h-3 rounded-sm`}
        ></div>
      ),
    );
  }, [contributions]);

  return (
    <motion.div
      className="w-[260px] bg-black rounded-[25px] flex flex-col justify-center mx-auto p-4 border-2 border-gray-900"
      animate={{
        y: githubHover ? 0 : 10,
        opacity: githubHover ? 1 : 0,
        scale: githubHover ? 1 : 0.95,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      <div className="grid grid-rows-7 grid-flow-col gap-1">
        {contributionElements}
      </div>
    </motion.div>
  );
};
