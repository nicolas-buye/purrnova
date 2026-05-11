"use client";

import { motion } from "framer-motion";

const problems = [
  {
    id: "work-call",
    title: "The Work Call Problem",
    hook: "Your cat chooses your biggest meeting to demand attention.",
    solution:
      "The Auto Cat Ball keeps them chasing while you close the deal. Self-rolling, quiet motor, 8-hour battery — it's the colleague who never steals credit.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    productLink: "/product/auto-cat-ball",
    productLabel: "The fix",
    accentClass: "from-[#ff6b6b]/10 to-[#ff6b6b]/3",
    iconColor: "#ff6b6b",
  },
  {
    id: "zoomies",
    title: "The 3 AM Zoomies Problem",
    hook: "You love them. You don't love wake-up sprints at 3 AM.",
    solution:
      "5 minutes with the Feather Wand before bed burns off that midnight energy. Extra-long reach, natural feathers, and a ritual that says 'time to sleep.'",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        <path d="M12 8v4M12 16h.01" />
      </svg>
    ),
    productLink: "/product/feather-teaser-wand",
    productLabel: "The fix",
    accentClass: "from-[#a78bfa]/10 to-[#a78bfa]/3",
    iconColor: "#a78bfa",
  },
  {
    id: "nice-box",
    title: "The 'Nice Box, But...' Problem",
    hook: "You buy a $40 toy. They sit in the Amazon box it came in instead.",
    solution:
      "Our toys are designed with actual cat behavior science — crinkle textures they can't resist, prey-like movement patterns, and materials that feel good under their paws.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    productLink: "/product/cat-tunnel",
    productLabel: "The fix",
    accentClass: "from-[#f59e0b]/10 to-[#f59e0b]/3",
    iconColor: "#f59e0b",
  },
];

export default function BrandStory() {
  return (
    <section className="py-24 md:py-40 px-6">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-xs tracking-[0.3em] text-[#ffa070] uppercase font-medium mb-3">
            Real Life with Indoor Cats
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">
            You Work. They Play.
            <br />
            Everyone&apos;s Happy.
          </h2>
          <p className="mt-5 text-sm md:text-base text-[#86868b] max-w-xl mx-auto leading-relaxed font-light">
            Toys designed for real apartment life — where your cat&apos;s happiness
            shouldn&apos;t mean destroying your furniture or your sleep schedule.
          </p>
        </motion.div>

        {/* Problem cards */}
        <div className="space-y-5 md:space-y-6">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.id}
              initial={{ y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              className={`rounded-2xl bg-gradient-to-br ${problem.accentClass} border border-[#27272a]/40 p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start`}
            >
              {/* Icon */}
              <div
                className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${problem.iconColor}18, ${problem.iconColor}08)`,
                  border: `1px solid ${problem.iconColor}22`,
                  color: problem.iconColor,
                }}
              >
                {problem.icon}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-medium text-white">
                  {problem.title}
                </h3>
                <p className="mt-2 text-sm text-[#a1a1a1] leading-relaxed font-light">
                  {problem.hook}
                </p>
                <p className="mt-3 text-sm text-[#86868b] leading-relaxed font-light">
                  {problem.solution}
                </p>
              </div>

              {/* Product link */}
              <a
                href={problem.productLink}
                className="shrink-0 inline-flex items-center gap-1.5 text-xs font-medium text-white/70 hover:text-white transition-colors mt-2 md:mt-0"
                style={{ color: problem.iconColor }}
              >
                {problem.productLabel}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
