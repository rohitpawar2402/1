"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO at Luminary Labs",
    avatar: "SC",
    gradient: "from-[#b8ff00] to-[#7acc00]",
    content:
      "This platform completely transformed how our team operates. Sub-100ms response times, and our users noticed immediately. The performance is genuinely mind-blowing.",
    rating: 5,
    company: "Luminary Labs",
  },
  {
    id: 2,
    name: "Marcus Webb",
    role: "Founder at Apex Studios",
    avatar: "MW",
    gradient: "from-[#c0c0c0] to-[#888]",
    content:
      "I've used dozens of tools over 12 years in design. Nothing comes close to this level of polish. It feels like it was built specifically for people who care about craft.",
    rating: 5,
    company: "Apex Studios",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Head of Product at NovaTech",
    avatar: "PS",
    gradient: "from-[#b8ff00] to-[#85cc00]",
    content:
      "The AI features are genuinely impressive — not just marketing. We saved 15+ hours a week from day one. Onboarding new team members now takes minutes.",
    rating: 5,
    company: "NovaTech",
  },
  {
    id: 4,
    name: "Jordan Kim",
    role: "Lead Engineer at Orbit Systems",
    avatar: "JK",
    gradient: "from-[#e0e0e0] to-[#aaa]",
    content:
      "The architecture is extraordinarily clean. As an engineer I deeply appreciate software that doesn't fight you. This platform feels made by people who truly understand developer experience.",
    rating: 5,
    company: "Orbit Systems",
  },
  {
    id: 5,
    name: "Elena Vasquez",
    role: "Creative Director at Pulse Co.",
    avatar: "EV",
    gradient: "from-[#b8ff00] to-[#9ce000]",
    content:
      "Absolutely stunning. Consistent, premium design language throughout — rare to find a product that looks as good as it performs. This is what modern software should feel like.",
    rating: 5,
    company: "Pulse Co.",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  const VISIBLE = 3;
  const visible = Array.from({ length: VISIBLE }, (_, i) => testimonials[(active + i) % testimonials.length]);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative overflow-hidden section-pad"
      style={{ background: "#050505" }}
    >
      {/* Grid bg */}
      <div className="absolute inset-0 grid-dark opacity-50 pointer-events-none" />

      {/* Lime glow */}
      <div
        className="absolute top-0 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(184,255,0,0.04) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 container-xl px-6 md:px-8">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col gap-4">
            <span className="chip-dark">03 — Testimonials</span>
            <h2 className="text-headline text-white leading-none">
              Loved by{" "}
              <span className="text-lime">industry</span>
              <br />
              <span className="text-white/25 italic">leaders.</span>
            </h2>
          </div>
          <p className="text-body text-white/35 max-w-xs md:text-right">
            Don't take our word for it — hear from the teams who've transformed their workflows with NEXUS.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <AnimatePresence mode="popLayout">
            {visible.map((t, i) => (
              <motion.div
                key={`${t.id}-${active}`}
                className={`relative p-7 rounded-xl border flex flex-col gap-5 ${
                  i === 1
                    ? "border-[#b8ff00]/20 bg-[#b8ff00]/[0.03]"
                    : "border-white/[0.07] bg-white/[0.02]"
                }`}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: i === 1 ? 1.02 : 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={12} className="text-[#b8ff00] fill-[#b8ff00]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-white/65 leading-relaxed flex-1">"{t.content}"</p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.05]">
                  <div
                    className={`w-9 h-9 rounded-lg bg-gradient-to-br ${t.gradient} flex items-center justify-center text-[#050505] text-xs font-black shrink-0`}
                  >
                    {t.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white truncate">{t.name}</p>
                    <p className="text-[11px] text-white/35 truncate">{t.role}</p>
                  </div>
                  <span className="text-[9px] tracking-[0.15em] uppercase font-mono text-white/20 shrink-0">{t.company}</span>
                </div>

                {/* Active indicator */}
                {i === 1 && (
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b8ff00] to-transparent rounded-t-xl" />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={() => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)}
            className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-[#b8ff00]/40 transition-all"
            data-cursor-hover
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="flex gap-1.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-6 h-1.5 bg-[#b8ff00]"
                    : "w-1.5 h-1.5 bg-white/15 hover:bg-white/35"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setActive((a) => (a + 1) % testimonials.length)}
            className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-[#b8ff00]/40 transition-all"
            data-cursor-hover
            aria-label="Next testimonial"
          >
            <ChevronRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
