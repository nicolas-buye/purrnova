"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import { products } from "@/lib/products";

const bestSeller = products.find((p) => p.id === "auto-cat-ball")!;

export default function HeroBanner() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0f0f10]" />

      {/* Warm window-light glow — left side (suggests cozy room with sunlight) */}
      <div className="absolute top-10 left-0 w-[60%] h-[80%] rounded-full bg-gradient-to-br from-[#ff8c4a]/08 via-[#ff6b6b]/04 to-transparent blur-[150px]" />

      {/* Subtle warm accent — bottom right */}
      <div className="absolute -bottom-10 right-0 w-[40%] h-[50%] rounded-full bg-gradient-to-tl from-[#ffa500]/06 via-[#ff6b6b]/02 to-transparent blur-[120px]" />

      {/* Fine grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(ellipse_at_center,_#ffffff10_0,_transparent_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-20 lg:pt-0">
          {/* Left: Text content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Mini social proof above headline */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 mb-6 lg:mb-8"
            >
              <div className="flex -space-x-2">
                {["#ff6b6b", "#ffa500", "#a78bfa", "#4ade80"].map((color, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-[#0f0f10] flex items-center justify-center text-[10px]"
                    style={{ background: `linear-gradient(135deg, ${color}, ${color}88)` }}
                  >
                    🐾
                  </div>
                ))}
              </div>
              <span className="text-xs text-[#a1a1a1] font-light">
                Loved by 5,000+ indoor cats
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-white leading-[1.08]"
            >
              Toys That
              <br />
              <span className="bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] bg-clip-text text-transparent">
                Actually Work
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="mt-5 lg:mt-6 text-sm md:text-base text-[#a1a1a1] max-w-lg lg:max-w-xl leading-relaxed font-light"
            >
              Designed for indoor cats who ignore everything. 5,000+ cats went
              from bored to obsessed. Free shipping over $50. 30-day happy cat
              guarantee.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
              className="mt-7 lg:mt-9 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start"
            >
              <Link
                href="/product/auto-cat-ball"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] text-white text-sm font-medium hover:from-[#ff7c7c] hover:to-[#ffb020] transition-all duration-300 shadow-lg shadow-[#ff6b6b]/15"
              >
                Shop Best Seller
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>

              <Link
                href="#videos"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#27272a] text-sm text-white hover:border-[#3a3a3d] hover:bg-[#ffffff08] transition-all duration-300 font-light"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-[#ff6b6b]"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Cats Play
              </Link>
            </motion.div>

            {/* Social proof line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 flex items-center gap-3 justify-center lg:justify-start text-sm text-[#86868b] font-light"
            >
              <span className="flex items-center gap-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                4.9
              </span>
              <span className="w-1 h-1 rounded-full bg-[#3a3a3d]" />
              <span>1,800+ reviews</span>
              <span className="w-1 h-1 rounded-full bg-[#3a3a3d]" />
              <span className="text-[#4ade80]">Free shipping $50+</span>
            </motion.div>
          </div>

          {/* Right: Product visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[380px] lg:max-w-none">
              <ProductImage product={bestSeller} size="hero" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0f0f10] via-[#0f0f10]/70 to-transparent pointer-events-none" />
    </section>
  );
}
