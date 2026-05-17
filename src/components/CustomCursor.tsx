"use client";

import { useEffect, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";

export default function CustomCursor() {
  const mouse = useMousePosition();
  const outerRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const isHovering = useRef(false);

  const outerX = useMotionValue(0);
  const outerY = useMotionValue(0);
  const springCfg = { damping: 26, stiffness: 180, mass: 0.6 };
  const springX = useSpring(outerX, springCfg);
  const springY = useSpring(outerY, springCfg);

  useEffect(() => {
    outerX.set(mouse.x);
    outerY.set(mouse.y);
    if (dotRef.current) {
      dotRef.current.style.left = `${mouse.x}px`;
      dotRef.current.style.top = `${mouse.y}px`;
    }
  }, [mouse, outerX, outerY]);

  useEffect(() => {
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const isInteractive =
        t.tagName === "A" ||
        t.tagName === "BUTTON" ||
        t.tagName === "INPUT" ||
        t.closest("a") ||
        t.closest("button") ||
        t.closest("[data-cursor-hover]") ||
        window.getComputedStyle(t).cursor === "pointer";

      if (isInteractive && !isHovering.current) {
        isHovering.current = true;
        outerRef.current?.classList.add("hovering");
      } else if (!isInteractive && isHovering.current) {
        isHovering.current = false;
        outerRef.current?.classList.remove("hovering");
      }
    };
    window.addEventListener("mouseover", onOver);
    return () => window.removeEventListener("mouseover", onOver);
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ position: "fixed", left: 0, top: 0, pointerEvents: "none", zIndex: 10000 }}
      />
      <motion.div
        ref={outerRef}
        className="cursor-outer"
        style={{ left: springX, top: springY, position: "fixed", pointerEvents: "none", zIndex: 9999 }}
      />
    </>
  );
}
