import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, type RefObject } from "react";

const cursorSize = 20;

export const Cursor = ({
  containerRef,
}: {
  containerRef: RefObject<HTMLDivElement> | null;
}) => {
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!containerRef?.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();

    mouse.x.set(event.clientX - containerRect.left - cursorSize / 2);
    mouse.y.set(event.clientY - containerRect.top - cursorSize / 2);

    console.log(mouse.x.get(), mouse.y.get());
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="absolute w-4 h-4 rounded-full bg-white z-50 pointer-events-none"
      style={{
        left: mouse.x,
        top: mouse.y,
      }}
    />
  );
};
