"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Zap, Shield, Globe, Cpu, BarChart3, Layers } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Performance",
    description: "Sub-millisecond response times with edge computing and intelligent caching built at the infrastructure level.",
    accentColor: "#b8ff00",
  },
  {
    icon: Shield,
    title: "Zero-Trust Security",
    description: "Bank-grade end-to-end encryption with zero-knowledge architecture and real-time threat detection.",
    accentColor: "#b8ff00",
  },
  {
    icon: Globe,
    title: "Global Edge Network",
    description: "Distributed across 300+ nodes worldwide. Your users get sub-50ms latency wherever they are.",
    accentColor: "#b8ff00",
  },
  {
    icon: Cpu,
    title: "AI-Native Intelligence",
    description: "Adaptive machine learning built into the core — automate repetitive tasks and surface insights instantly.",
    accentColor: "#b8ff00",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Live dashboards with streaming data pipelines. See exactly what's happening the moment it happens.",
    accentColor: "#b8ff00",
  },
  {
    icon: Layers,
    title: "Composable Architecture",
    description: "Plug-and-play modular system. Build exactly what you need without touching what you don't.",
    accentColor: "#b8ff00",
  },
];

const stats = [
  { value: "10K+", label: "Teams Onboarded" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "<50ms", label: "Global Latency" },
  { value: "4.9★", label: "User Rating" },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const statementY = useTransform(scrollYProgress, [0.1, 0.5], [80, 0]);
  const statementOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative overflow-hidden"
      style={{ background: "#050505" }}
    >
      {/* ── Statement text section ── */}
      <div className="relative grid-dark py-28 px-6 md:px-16 border-t border-white/[0.05] overflow-hidden">
        {/* Big decorative text */}
        <motion.p
          className="absolute top-8 right-8 text-[10px] tracking-[0.3em] uppercase font-mono text-white/15"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          01 — Capabilities
        </motion.p>

        <div className="container-xl">
          <motion.div
            style={{ y: statementY, opacity: statementOpacity }}
            className="max-w-5xl"
          >
            <p className="text-statement text-white leading-tight mb-6">
              Imagine your product as an{" "}
              <span className="text-lime-ghost italic">intelligent</span>{" "}
              <span className="text-lime-ghost italic">engine</span>{" "}
              seamlessly connecting vision to execution.
            </p>
            <div className="flex items-center gap-4 mt-8">
              <span className="chip-dark">Capabilities</span>
              <div className="h-px flex-1 bg-white/[0.06]" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <div className="border-y border-white/[0.05] py-8 px-6">
        <div className="container-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
                className="flex flex-col gap-1"
              >
                <span className="text-4xl font-bold text-lime tracking-tight">{s.value}</span>
                <span className="text-xs tracking-[0.12em] uppercase text-white/35 font-mono">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Feature Grid ── */}
      <div className="section-pad">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05] rounded-xl overflow-hidden border border-white/[0.05]">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.08 }}
                  className="relative bg-[#050505] p-8 group overflow-hidden"
                  data-cursor-hover
                >
                  {/* Hover lime accent strip */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b8ff00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Icon */}
                  <div className="relative w-10 h-10 rounded-lg bg-white/04 border border-white/08 flex items-center justify-center mb-6 group-hover:border-[#b8ff00]/30 group-hover:bg-[#b8ff00]/05 transition-all duration-400">
                    <Icon size={18} strokeWidth={1.5} className="text-white/60 group-hover:text-[#b8ff00] transition-colors duration-300" />
                  </div>

                  <h3 className="text-base font-bold text-white mb-3 group-hover:text-white transition-colors">{f.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/55 transition-colors">{f.description}</p>

                  {/* Corner indicator */}
                  <div className="absolute bottom-6 right-6 w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0">
                    <svg viewBox="0 0 20 20" fill="none">
                      <path d="M4 10 H16 M10 4 L16 10 L10 16" stroke="#b8ff00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
