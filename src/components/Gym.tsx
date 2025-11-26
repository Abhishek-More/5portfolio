import Spline from "@splinetool/react-spline";
import { Blocker } from "./Blocker";
import { gymLoadedAtom } from "../atoms/gym";
import { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { motion } from "motion/react";

export const Gym = () => {
  const [shouldLoadSpline, setShouldLoadSpline] = useState(false);
  const [gymLoaded, setGymLoaded] = useAtom(gymLoadedAtom);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldLoadSpline(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  function onLoad(spline: any) {
    const obj = spline.findObjectByName("Board");
    if (obj) {
      setGymLoaded(true);
    }
  }

  return (
    <div className="absolute w-full h-full overflow-hidden">
      <div
        className={`${gymLoaded ? "opacity-0" : "opacity-100"} absolute w-full h-full overflow-hidden text-center pointer-events-none`}
      >
        Loading
      </div>

      {shouldLoadSpline && (
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeInOut" }}
          className="h-full"
        >
          <Spline
            scene="https://prod.spline.design/x9AvaSbmi1rQ3uaQ/scene.splinecode"
            onLoad={onLoad}
            onLoadedData={(e: any) => console.log(e)}
          />
        </motion.div>
      )}
      <div className="absolute inset-0 pointer-events-none film-grain opacity-30 mix-blend-multiply"></div>
      <Blocker />
    </div>
  );
};
