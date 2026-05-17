"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const brands = [
  "Stripe", "Vercel", "Figma", "Linear", "Notion",
  "Supabase", "Planetscale", "Prisma", "Cloudflare", "Resend",
];

export default function MarqueeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      className="relative overflow-hidden border-y border-white/[0.05] py-8"
      style={{ background: "#050505" }}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <p className="text-center text-[9px] tracking-[0.4em] uppercase text-white/15 font-mono mb-6">
        Trusted by world-class teams
      </p>

      <div className="relative overflow-hidden">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        <div className="marquee-track">
          {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
            <div key={i} className="flex items-center gap-3 mx-8 group">
              <div className="w-6 h-6 rounded bg-white/[0.04] border border-white/[0.06] group-hover:border-[#b8ff00]/25 transition-colors" />
              <span className="text-sm font-medium text-white/18 group-hover:text-white/45 transition-colors tracking-wide whitespace-nowrap">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
