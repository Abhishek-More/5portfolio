import Spline from "@splinetool/react-spline";
import { Blocker } from "./Blocker";
import { useAtom } from "jotai";
import { gymLoadedAtom } from "../atoms/gym";
import { useState, useEffect } from "react";

export const Gym = () => {
  const [gymLoaded, setGymLoaded] = useAtom(gymLoadedAtom);
  const [showGlitch, setShowGlitch] = useState(false);
  const [showStatic, setShowStatic] = useState(false);

  function onLoad(spline: any) {
    const obj = spline.findObjectByName("Board");
    if (obj) {
      setGymLoaded(true);
    }
  }

  return (
    <div className="absolute w-full h-full overflow-hidden">
      <div
        className={`${!gymLoaded ? "" : "hidden"} absolute w-full h-full overflow-hidden text-center pointer-events-none`}
      >
        Loading
      </div>

      <Spline
        scene="https://prod.spline.design/x9AvaSbmi1rQ3uaQ/scene.splinecode"
        onLoad={onLoad}
        onLoadedData={(e: any) => console.log(e)}
      />
      <div className="absolute inset-0 pointer-events-none film-grain opacity-50 mix-blend-multiply"></div>
      {showGlitch && <div className="vhs-glitch"></div>}
      {showStatic && <div className="vhs-static"></div>}
      <Blocker />
    </div>
  );
};
