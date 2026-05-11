"use client";

import { motion } from "framer-motion";
import { testimonials, siteStats } from "@/lib/products";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="#f59e0b"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

// Small cat face avatar to replace letter avatars
function CatAvatar({ color }: { color: string }) {
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center text-xs"
      style={{
        background: `linear-gradient(135deg, ${color}30, ${color}10)`,
        border: `1px solid ${color}30`,
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" opacity={0.5} style={{ color }}>
        <path d="M12 2c-2.5 0-4.5 2-4.5 4.5 0 .5.1 1 .3 1.5C6.5 9 5 11 5 13.5 5 17 8 20 12 20s7-3 7-6.5c0-2.5-1.5-4.5-2.8-5.5.2-.5.3-1 .3-1.5C16.5 4 14.5 2 12 2z" />
        <circle cx="9.5" cy="10" r="1.2" fill="#0f0f10" />
        <circle cx="14.5" cy="10" r="1.2" fill="#0f0f10" />
        <path d="M12 15c-1.5 0-2.8.8-3.5 2h7c-.7-1.2-2-2-3.5-2z" fill="#0f0f10" opacity={0.6} />
        <path d="M8 5l1.5 2.5M16 5l-1.5 2.5" stroke="#0f0f10" strokeWidth="1" fill="none" />
      </svg>
    </div>
  );
}

const avatarColors = ["#ff6b6b", "#ffa500", "#a78bfa", "#f59e0b", "#4ade80", "#fb7185"];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-40 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="text-xs tracking-[0.3em] text-[#ffa500] uppercase font-medium mb-3">
            Loved by Cats & Humans
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">
            What Our Families Say
          </h2>

          {/* Stats badge */}
          <div className="mt-5 inline-flex items-center gap-2 bg-[#ffffff04] border border-[#27272a]/40 rounded-full px-5 py-2">
            <div className="flex gap-px">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="#f59e0b"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-white font-light">
              {siteStats.averageRating} out of 5 stars
            </span>
            <span className="text-sm text-[#86868b] font-light">
              from {siteStats.totalReviews.toLocaleString()}+ reviews
            </span>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className={`relative rounded-2xl p-6 md:p-7 bg-gradient-to-br ${t.color} border border-[#27272a]/50`}
            >
              {/* Stars */}
              <StarRating rating={t.rating} />

              {/* Review text */}
              <p className="mt-4 text-sm md:text-base text-white/85 leading-relaxed font-light">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-5">
                <CatAvatar color={avatarColors[i % avatarColors.length]} />
                <div>
                  <cite className="text-sm font-medium text-white not-italic">
                    {t.name}
                  </cite>
                  <p className="text-xs text-[#86868b]">{t.handle}</p>
                </div>
                {/* Verified badge */}
                <div className="ml-auto flex items-center gap-1 text-[10px] text-[#4ade80] font-light">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Verified
                  {t.productName && (
                    <span className="text-[#86868b] ml-1">
                      · {t.productName}
                    </span>
                  )}
                </div>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
