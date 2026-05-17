"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Zap, Star, Building2 } from "lucide-react";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: { monthly: 29, annual: 19 },
    description: "For indie developers and freelancers ready to ship at speed.",
    accentBg: "bg-white/03",
    accentBorder: "border-white/07",
    features: ["5 active projects", "50GB edge storage", "Basic analytics", "Community support", "Standard CDN", "SSL included"],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Pro",
    icon: Star,
    price: { monthly: 79, annual: 59 },
    description: "For growing teams who refuse to compromise on performance.",
    accentBg: "bg-[#b8ff00]/[0.04]",
    accentBorder: "border-[#b8ff00]/25",
    features: ["Unlimited projects", "500GB edge storage", "Advanced analytics", "Priority support 24/7", "Global CDN (300+ nodes)", "Custom domains", "Team collaboration", "Full API access"],
    cta: "Start Pro Trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    icon: Building2,
    price: { monthly: 299, annual: 229 },
    description: "Mission-critical infrastructure for companies that can't afford downtime.",
    accentBg: "bg-white/03",
    accentBorder: "border-white/07",
    features: ["Unlimited everything", "5TB+ storage", "White-glove onboarding", "Dedicated support SLA", "Custom contracts", "SOC 2 compliance", "SSO & SAML", "Audit logs", "Custom integrations"],
    cta: "Contact Sales",
    highlight: false,
  },
];

export default function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [annual, setAnnual] = useState(true);

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="relative overflow-hidden section-pad"
      style={{ background: "#050505" }}
    >
      {/* Grid */}
      <div className="absolute inset-0 grid-dark opacity-40 pointer-events-none" />

      {/* Lime glow bottom-center */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(184,255,0,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 container-xl px-6 md:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14 flex flex-col items-center gap-5"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="chip-dark">04 — Pricing</span>
          <h2 className="text-headline text-white leading-none">
            Simple.{" "}
            <span className="text-lime">Transparent.</span>
            <br />
            <span className="text-white/20 italic">No surprises.</span>
          </h2>

          {/* Toggle */}
          <div className="flex items-center gap-3 mt-2">
            <span className={`text-sm transition-colors ${!annual ? "text-white" : "text-white/35"}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${annual ? "bg-[#b8ff00]" : "bg-white/10"}`}
              aria-label="Toggle annual billing"
              data-cursor-hover
            >
              <motion.div
                className="absolute top-1 w-4 h-4 rounded-full bg-[#050505] shadow"
                animate={{ left: annual ? "calc(100% - 20px)" : "4px" }}
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              />
            </button>
            <span className={`text-sm transition-colors ${annual ? "text-white" : "text-white/35"}`}>
              Annual
              <span className="ml-1.5 px-2 py-0.5 rounded text-[10px] font-bold bg-[#b8ff00]/15 text-[#b8ff00] uppercase tracking-wide">
                −25%
              </span>
            </span>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className={`relative rounded-xl border ${plan.accentBg} ${plan.accentBorder} p-7 flex flex-col gap-6`}
              >
                {/* Popular badge */}
                {plan.highlight && (
                  <>
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded bg-[#b8ff00] text-[#050505] text-[10px] font-black tracking-widest uppercase whitespace-nowrap">
                      Most Popular
                    </div>
                    {/* Top glow line */}
                    <div className="absolute top-0 left-6 right-6 h-px bg-[#b8ff00]/60 rounded-full" />
                  </>
                )}

                {/* Plan name + icon */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white tracking-wide">{plan.name}</span>
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      background: plan.highlight ? "rgba(184,255,0,0.15)" : "rgba(255,255,255,0.05)",
                      border: `1px solid ${plan.highlight ? "rgba(184,255,0,0.25)" : "rgba(255,255,255,0.08)"}`,
                    }}
                  >
                    <Icon size={15} strokeWidth={1.5} className={plan.highlight ? "text-[#b8ff00]" : "text-white/40"} />
                  </div>
                </div>

                {/* Price */}
                <div>
                  <div className="flex items-end gap-1.5">
                    <span className="text-5xl font-bold text-white tracking-tight">
                      ${annual ? plan.price.annual : plan.price.monthly}
                    </span>
                    <span className="text-white/30 text-sm mb-2">/mo</span>
                  </div>
                  {annual && (
                    <p className="text-xs text-white/30 mt-1">
                      Billed ${annual ? plan.price.annual * 12 : plan.price.monthly * 12}/year
                    </p>
                  )}
                </div>

                <p className="text-sm text-white/40 leading-relaxed">{plan.description}</p>

                {/* CTA */}
                {plan.highlight ? (
                  <a href="#" className="btn-lime text-center" data-cursor-hover>{plan.cta}</a>
                ) : (
                  <a href="#" className="btn-ghost-dark text-center" data-cursor-hover>{plan.cta}</a>
                )}

                {/* Features */}
                <div className="flex flex-col gap-2.5 pt-4 border-t border-white/[0.05]">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <div
                        className="w-4 h-4 rounded flex items-center justify-center shrink-0"
                        style={{
                          background: plan.highlight ? "rgba(184,255,0,0.15)" : "rgba(255,255,255,0.06)",
                        }}
                      >
                        <Check
                          size={9}
                          strokeWidth={3}
                          className={plan.highlight ? "text-[#b8ff00]" : "text-white/40"}
                        />
                      </div>
                      <span className="text-sm text-white/50">{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          className="text-center text-xs text-white/20 mt-10 font-mono"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          All plans include a 14-day free trial — no credit card required.
        </motion.p>
      </div>
    </section>
  );
}
