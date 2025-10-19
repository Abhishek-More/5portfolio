import { useAtom } from "jotai";
import { gymLoadedAtom, preloaderDoneAtom } from "../atoms/gym";
import { useEffect, useState } from "react";
import { PhotoStream } from "./preloader/PhotoStream";

const msPerWord = 1200;
const words = ["loading", "loading"];

export const Loading = () => {
  const [finishedPreloader, setFinishedPreloader] = useState(false);
  const [gymLoaded] = useAtom(gymLoadedAtom);
  const [preloaderDone, setPreloaderDone] = useAtom(preloaderDoneAtom);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFinishedPreloader(true);
    }, msPerWord * words.length);

    return () => clearTimeout(timer);
  }, []);

  const hidePreloader = gymLoaded && finishedPreloader && false;

  if (hidePreloader) {
    setPreloaderDone(true);
    return;
  }

  return (
    <div className="absolute flex flex-col justify-center items-center w-screen h-screen bg-black z-50">
      <PhotoStream />
    </div>
  );
};
