"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.94, 1]);

  return (
    <section
      ref={ref}
      className="section-pad relative overflow-hidden"
      style={{ background: "#050505" }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-dark opacity-40 pointer-events-none" />

      {/* Cinematic warm gradient accent — like the hero sky */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(184,100,30,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 container-xl px-6 md:px-8">
        <motion.div
          style={{ scale }}
          className="relative rounded-2xl overflow-hidden border border-[#b8ff00]/15 bg-[#b8ff00]/[0.02] p-12 md:p-20 text-center"
        >
          {/* Top lime line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b8ff00]/60 to-transparent" />
          {/* Corner accents */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#b8ff00]/30" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[#b8ff00]/30" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-[#b8ff00]/30" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[#b8ff00]/30" />

          <div className="flex flex-col items-center gap-8 max-w-3xl mx-auto">
            <motion.span
              className="chip-dark"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              ◆ Limited Beta Access
            </motion.span>

            <motion.h2
              className="text-headline text-white"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Ready to build something{" "}
              <span className="text-lime">remarkable?</span>
            </motion.h2>

            <motion.p
              className="text-body text-white/40 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Join 10,000+ teams already shipping faster. Start your free 14-day trial — no credit card, no commitment.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <a href="#" className="btn-lime" data-cursor-hover>
                Start for Free
                <ArrowRight size={14} />
              </a>
              <a href="#" className="btn-ghost-dark" data-cursor-hover>
                Schedule a Demo
              </a>
            </motion.div>

            <motion.p
              className="text-xs text-white/20 font-mono"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              ✓ 14-day free trial &nbsp;&nbsp; ✓ Cancel anytime &nbsp;&nbsp; ✓ No setup fees
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
