"use client";

import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    number: "01",
    title: "Orbital Finance",
    category: "SaaS · Fintech",
    year: "2024",
    description: "Next-gen treasury management with real-time AI-driven forecasting and a cinematic dashboard experience.",
    tags: ["React", "Three.js", "TypeScript"],
    accent: "#b8ff00",
    bgLight: "#f5f5f0",
  },
  {
    id: 2,
    number: "02",
    title: "Phantom Studio",
    category: "Portfolio · Creative",
    year: "2024",
    description: "Immersive digital studio portfolio pushing the boundaries of web animation and visual storytelling at Awwwards level.",
    tags: ["GSAP", "WebGL", "Next.js"],
    accent: "#b8ff00",
    bgLight: "#f0f0ec",
  },
  {
    id: 3,
    number: "03",
    title: "Nova Commerce",
    category: "E-commerce · Retail",
    year: "2023",
    description: "Premium DTC brand experience with cinematic product reveals, zero-friction checkout, and conversion-optimized UX.",
    tags: ["Framer", "Shopify", "GSAP"],
    accent: "#b8ff00",
    bgLight: "#f2f2ee",
  },
  {
    id: 4,
    number: "04",
    title: "Luminary AI",
    category: "Developer Tools · AI",
    year: "2023",
    description: "A developer-first AI coding assistant with sleek dark IDE interface, real-time suggestions, and pair-programming intelligence.",
    tags: ["AI/ML", "Python", "React"],
    accent: "#b8ff00",
    bgLight: "#efefeb",
  },
];

function ProjectRow({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="relative group border-b border-black/08 last:border-b-0"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-cursor-hover
    >
      <div className="flex items-start md:items-center gap-4 md:gap-10 py-6 md:py-8 px-0">
        {/* Number */}
        <span className="font-mono text-xs text-black/25 pt-1 w-6 shrink-0">{project.number}</span>

        {/* Title + category */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-3">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] group-hover:text-black transition-colors leading-tight">
              {project.title}
            </h3>
            <span className="text-xs font-mono text-black/35 tracking-widest uppercase shrink-0">
              {project.category}
            </span>
          </div>
          <p className="text-sm text-black/45 leading-relaxed max-w-xl">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-[10px] font-semibold tracking-wider uppercase bg-black/05 text-black/50 border border-black/07"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Year + Arrow */}
        <div className="flex flex-col items-end gap-2 shrink-0">
          <span className="text-xs font-mono text-black/25">{project.year}</span>
          <motion.div
            className="w-9 h-9 rounded-lg border border-black/10 flex items-center justify-center text-black/30 group-hover:border-[#b8ff00] group-hover:bg-[#b8ff00] group-hover:text-[#050505] transition-all duration-300"
            animate={hovered ? { rotate: 0 } : { rotate: 0 }}
          >
            <ArrowUpRight size={16} className="group-hover:-rotate-0 transition-transform" />
          </motion.div>
        </div>
      </div>

      {/* Bottom highlight bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-[#b8ff00]"
        initial={{ width: 0 }}
        animate={hovered ? { width: "100%" } : { width: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  );
}

export default function ShowcaseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const headlineX = useTransform(scrollYProgress, [0.1, 0.5], [-60, 0]);
  const headlineOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="showcase"
      className="relative overflow-hidden"
      style={{ background: "var(--bg-light)" }}
    >
      {/* ── Dark→Light curve divider (top) ── */}
      <div className="absolute top-0 left-0 right-0" style={{ marginTop: "-2px" }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-16">
          <path d="M0,0 L1440,0 L1440,20 Q720,60 0,20 Z" fill="#050505" />
        </svg>
      </div>

      {/* ── Grid overlay ── */}
      <div className="absolute inset-0 grid-light opacity-60 pointer-events-none" />

      <div className="relative z-10 pt-28 pb-20">
        {/* Header */}
        <div className="container-xl px-6 md:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-8 mb-10 md:mb-14">
            <motion.div
              style={{ x: headlineX, opacity: headlineOpacity }}
              className="flex flex-col gap-4"
            >
              <span className="chip-light">02 — Showcase</span>
              <h2 className="text-headline text-[#0a0a0a] leading-none">
                Work that{" "}
                <span style={{ color: "rgba(0,0,0,0.25)", fontStyle: "italic" }}>speaks</span>
                <br />
                for itself.
              </h2>
            </motion.div>

            <motion.p
              className="text-body text-black/45 max-w-xs md:text-right"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              A curated selection of projects that pushed what's possible — crafted for clients who refuse to blend in.
            </motion.p>
          </div>

          {/* Project List */}
          <div className="border-t border-black/08">
            {projects.map((p, i) => (
              <ProjectRow key={p.id} project={p} index={i} />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="flex justify-center mt-14"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="#"
              className="btn-ghost-light inline-flex items-center gap-2 group"
              data-cursor-hover
            >
              View All Projects
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── Light→Dark curve divider (bottom) ── */}
      <div className="absolute bottom-0 left-0 right-0" style={{ marginBottom: "-1px" }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-16">
          <path d="M0,60 L1440,60 L1440,40 Q720,0 0,40 Z" fill="#050505" />
        </svg>
      </div>
    </section>
  );
}
