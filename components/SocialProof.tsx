"use client";

import { motion } from "framer-motion";

const proofs = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    label: "Rated 4.9/5",
    sub: "3,400+ reviews",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    ),
    label: "30-Day Guarantee",
    sub: "Love it or return it",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    label: "Free Shipping",
    sub: "On orders over $50",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fb7185" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    label: "5,000+ Happy Cats",
    sub: "And their humans",
  },
];

export default function SocialProof() {
  return (
    <section className="relative py-8 md:py-10 border-b border-[#27272a]/30">
      {/* Warm background strip */}
      <div className="absolute inset-0 bg-[#1a1512]/60" />

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {proofs.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 justify-center md:justify-start"
            >
              <div className="shrink-0 w-9 h-9 rounded-xl bg-[#ffffff06] border border-[#27272a]/30 flex items-center justify-center">
                {item.icon}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium text-white leading-tight">
                  {item.label}
                </p>
                <p className="text-[11px] text-[#86868b] font-light leading-tight mt-0.5">
                  {item.sub}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
