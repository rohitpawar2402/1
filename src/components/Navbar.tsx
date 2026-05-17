"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Showcase", href: "#showcase" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 30);
      // Switch to light navbar when entering light sections (approx after hero)
      const heroH = window.innerHeight;
      setIsLight(y > heroH * 1.1);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="navbar-wrap">
        <motion.div
          className={`navbar-inner transition-all duration-500 ${
            scrolled
              ? isLight
                ? "navbar-glass-light"
                : "navbar-glass"
              : "bg-transparent border-transparent"
          }`}
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ border: scrolled ? undefined : "1px solid transparent" }}
        >
          {/* Logo */}
          <Link
            href="/"
            className={`flex items-center gap-2.5 group ${isLight && scrolled ? "text-[#0a0a0a]" : "text-white"}`}
            data-cursor-hover
          >
            <div className="w-7 h-7 rounded-md bg-[#b8ff00] flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="1" y="1" width="5" height="5" rx="1" fill="#050505" />
                <rect x="8" y="1" width="5" height="5" rx="1" fill="#050505" />
                <rect x="1" y="8" width="5" height="5" rx="1" fill="#050505" />
                <rect x="8" y="8" width="5" height="5" rx="1" fill="#050505" opacity="0.4" />
              </svg>
            </div>
            <span className="font-bold text-base tracking-tight">COSMIC</span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 group ${
                  isLight && scrolled ? "text-[#3a3a3a] hover:text-[#0a0a0a]" : "text-white/60 hover:text-white"
                }`}
                data-cursor-hover
              >
                {link.label}
                <span
                  className={`absolute bottom-1 left-4 right-4 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                    isLight && scrolled ? "bg-[#0a0a0a]" : "bg-[#b8ff00]"
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <button
              className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                isLight && scrolled
                  ? "bg-black/05 hover:bg-black/10 text-[#0a0a0a]"
                  : "bg-white/08 hover:bg-white/12 text-white/70 hover:text-white border border-white/10"
              }`}
              aria-label="Call us"
              data-cursor-hover
              style={{ background: isLight && scrolled ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.06)" }}
            >
              <Phone size={14} />
            </button>
            <a href="#" className={`btn-ghost-dark text-xs py-2.5 px-4 ${isLight && scrolled ? "btn-ghost-light" : ""}`} data-cursor-hover>
              DEMO
            </a>
            <a href="#" className="btn-lime text-xs py-2.5 px-5" data-cursor-hover>
              CONTACT
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isLight && scrolled ? "text-[#0a0a0a]" : "text-white/80"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed top-20 left-4 right-4 z-40 rounded-2xl navbar-glass p-6 flex flex-col gap-4"
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/70 hover:text-white font-medium py-1 border-b border-white/05 last:border-0"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <a href="#" className="btn-ghost-dark flex-1 text-center text-xs py-2.5">DEMO</a>
              <a href="#" className="btn-lime flex-1 text-center text-xs py-2.5">CONTACT</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
