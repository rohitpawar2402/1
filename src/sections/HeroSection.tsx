"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useMousePosition } from "@/hooks/useMousePosition";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const mouse = useMousePosition();

  // Parallax: image moves slower than scroll
  const imgY = useTransform(scrollY, [0, 800], [0, 160]);
  const contentY = useTransform(scrollY, [0, 600], [0, -80]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  // Subtle mouse parallax for depth
  const smoothX = useSpring(0, { stiffness: 40, damping: 20 });
  const smoothY = useSpring(0, { stiffness: 40, damping: 20 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      smoothX.set((mouse.x - cx) / cx);
      smoothY.set((mouse.y - cy) / cy);
    }
  }, [mouse, smoothX, smoothY]);

  const words1 = ["AI-Native", "Platform"];
  const words2 = ["That", "Thinks", "Ahead."];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden"
      id="hero"
      style={{ background: "#050505" }}
    >
      {/* ── Cinematic Background Photo Layer ── */}
      <motion.div
        className="absolute inset-0"
        style={{ y: imgY }}
      >
        {/* Sunset gradient sky */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 120% 80% at 50% -10%, #c87941 0%, #9c5a2a 25%, #4a2810 50%, #0a0505 75%, #050505 100%)
            `,
          }}
        />

        {/* Ground / horizon split */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "45%",
            background: "linear-gradient(to bottom, transparent, #050505 60%)",
          }}
        />

        {/* Grid overlay on dark ground */}
        <div
          className="absolute bottom-0 left-0 right-0 grid-dark"
          style={{ height: "45%", opacity: 0.6 }}
        />

        {/* Cinematic vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, rgba(5,5,5,0.6) 100%)
            `,
          }}
        />

        {/* Mouse-reactive subtle lens flare */}
        <motion.div
          className="absolute w-64 h-64 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(184,255,0,0.04) 0%, transparent 70%)",
            x: useTransform(smoothX, (v) => v * 60 + "px"),
            y: useTransform(smoothY, (v) => v * 40 + "px"),
            left: "40%",
            top: "20%",
          }}
        />
      </motion.div>

      {/* ── Wireframe / particle decoration ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Horizontal lines at horizon */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-0 right-0 h-px"
            style={{
              top: `${52 + i * 4}%`,
              background: `rgba(255,255,255,${0.04 - i * 0.006})`,
            }}
            initial={{ scaleX: 0, originX: 0.5 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.8, delay: 0.8 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}

        {/* Vertical perspective lines */}
        {[-3, -1.5, 0, 1.5, 3].map((angle, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0"
            style={{
              left: "50%",
              width: "1px",
              height: "40%",
              background: "rgba(255,255,255,0.04)",
              transform: `rotate(${angle}deg)`,
              transformOrigin: "bottom center",
            }}
            initial={{ scaleY: 0, originY: 1 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, delay: 1 + i * 0.1 }}
          />
        ))}
      </div>

      {/* ── Bottom curve ── */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full" style={{ display: "block" }}>
          <path d="M0,40 Q720,0 1440,40 L1440,60 L0,60 Z" fill="#050505" />
        </svg>
      </div>

      {/* ── Headline Content ── */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-end min-h-screen pb-24 px-6 text-center"
        style={{ y: contentY, opacity }}
      >
        {/* Status chip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <span className="chip-dark">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b8ff00] animate-pulse" />
            Now in Public Beta
          </span>
        </motion.div>

        {/* Main headline */}
        <div className="overflow-hidden mb-4">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-0">
            {words1.map((word, i) => (
              <motion.span
                key={word}
                className="text-display font-bold text-white"
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: "block" }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="overflow-hidden mb-10">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-0">
            {words2.map((word, i) => (
              <motion.span
                key={word}
                className={`text-hero-sub font-bold ${
                  i === 1 ? "text-lime" : "text-white/80"
                }`}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 1, delay: 0.75 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: "block" }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Sub-copy */}
        <motion.p
          className="text-body text-white/45 max-w-xl mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          A cinematic-grade SaaS platform built for teams who ship faster,
          think bolder, and demand precision at every pixel.
        </motion.p>

        {/* CTA row */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <a href="#features" className="btn-lime" data-cursor-hover>
            Get Started
            <ArrowRight size={14} />
          </a>
          <a href="#showcase" className="btn-ghost-dark" data-cursor-hover>
            Watch Demo
          </a>
        </motion.div>

        {/* Scroll prompt */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} className="text-white/30" />
          </motion.div>
          <span className="text-[9px] tracking-[0.35em] uppercase font-mono text-white/25">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
