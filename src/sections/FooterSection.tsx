"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail, X, GitBranch, Link2, Video } from "lucide-react";

const footerLinks = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Changelog", "Roadmap", "API Status"],
  },
  {
    title: "Company",
    links: ["About Us", "Blog", "Careers", "Press Kit", "Partners"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"],
  },
];

const socials = [
  { icon: X, label: "X" },
  { icon: GitBranch, label: "GitHub" },
  { icon: Link2, label: "LinkedIn" },
  { icon: Video, label: "YouTube" },
];

export default function FooterSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgScale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden border-t border-white/[0.05]"
      style={{ background: "#050505" }}
    >
      {/* Grid bg */}
      <div className="absolute inset-0 grid-dark opacity-30 pointer-events-none" />

      {/* Lime glow */}
      <div
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(184,255,0,0.04) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 container-xl px-6 md:px-8">
        {/* ── Big CTA block ── */}
        <motion.div
          className="relative rounded-2xl overflow-hidden border border-[#b8ff00]/15 bg-[#b8ff00]/[0.02] p-6 md:p-16 my-10 md:my-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-10"
          style={{ scale: bgScale }}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Top lime line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b8ff00]/50 to-transparent" />

          <div className="max-w-md">
            <p className="chip-dark mb-5">Stay in the loop</p>
            <h3 className="text-title font-bold text-white leading-tight mb-3">
              Get product updates,<br />
              <span className="text-lime">straight to your inbox.</span>
            </h3>
            <p className="text-sm text-white/35 leading-relaxed">
              Early access to new features, design insights, and monthly product updates.
              No spam, ever.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative flex-1 sm:w-68">
              <Mail size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25" />
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full pl-9 pr-4 py-3 rounded-lg bg-white/[0.04] border border-white/08 text-white placeholder:text-white/20 text-sm outline-none focus:border-[#b8ff00]/40 transition-all"
                aria-label="Email for newsletter"
              />
            </div>
            <button className="btn-lime shrink-0" data-cursor-hover>
              Subscribe
              <ArrowRight size={13} />
            </button>
          </div>
        </motion.div>

        {/* ── Footer nav ── */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-12 pb-12 md:pb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 md:col-span-2 flex flex-col gap-5 md:gap-6">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-[#b8ff00] flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1" y="1" width="5" height="5" rx="1" fill="#050505" />
                  <rect x="8" y="1" width="5" height="5" rx="1" fill="#050505" />
                  <rect x="1" y="8" width="5" height="5" rx="1" fill="#050505" />
                  <rect x="8" y="8" width="5" height="5" rx="1" fill="#050505" opacity="0.4" />
                </svg>
              </div>
              <span className="font-bold text-base text-white tracking-tight">COSMIC</span>
            </div>
            <p className="text-sm text-white/35 leading-relaxed max-w-xs">
              The next-generation platform for teams who refuse to compromise on performance, design, or developer experience.
            </p>
            {/* Socials */}
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-8 h-8 rounded-lg border border-white/08 flex items-center justify-center text-white/30 hover:text-white hover:border-[#b8ff00]/35 hover:bg-[#b8ff00]/05 transition-all"
                  aria-label={label}
                  data-cursor-hover
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
              className="flex flex-col gap-4"
            >
              <h4 className="text-[10px] font-black tracking-[0.2em] uppercase text-white/25 font-mono">{col.title}</h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/40 hover:text-white transition-colors relative group"
                      data-cursor-hover
                    >
                      {link}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#b8ff00] group-hover:w-full transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          className="border-t border-white/[0.05] py-6 md:py-7 flex flex-col items-center sm:flex-row sm:justify-between gap-3 text-center sm:text-left"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p className="text-xs text-white/20 font-mono">© 2024 COSMIC Technologies. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-white/20 hover:text-white/60 transition-colors font-mono"
                data-cursor-hover
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
