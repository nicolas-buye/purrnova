"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="min-h-screen pt-28 md:pt-40 pb-20 px-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#86868b] hover:text-white transition-colors mb-10"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back
          </Link>

          <h1 className="text-3xl md:text-5xl font-light text-white tracking-tight">
            We make toys cats
            <br />
            <span className="bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] bg-clip-text text-transparent">
              actually play with.
            </span>
          </h1>

          <div className="mt-8 space-y-6 text-sm md:text-base text-[#a1a1a1] leading-relaxed font-light">
            <p>
              Most cat toys end up under the couch within 15 minutes. We got tired
              of buying things our cats ignored — so we started making toys that
              work with their natural instincts instead of against them.
            </p>
            <p>
              Every PurrNova toy is built around real cat behavior: the way they
              hunt, the way they hide, the way they get the zoomies at 3 AM. We
              design for the indoor cat who needs more than a jingly ball — and for
              the human who wants their apartment to still look good.
            </p>
            <p>
              Our product testers are Luna, Mochi, and Tofu — three very spoiled
              indoor cats with very strong opinions. If they don&apos;t approve it, we
              don&apos;t ship it. It&apos;s that simple.
            </p>
          </div>

          {/* Cat tester bios */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "Luna", role: "Head of Testing", trait: "Lazy but opinionated. If Luna plays with it, anyone's cat will.", color: "#ff6b6b" },
              { name: "Mochi", role: "Durability Tester", trait: "Hyperactive destroyer of weak toys. Nothing survives Mochi's stress test.", color: "#a78bfa" },
              { name: "Tofu", role: "Aesthetics Inspector", trait: "Will only approach toys that match the couch. Our design critic.", color: "#f59e0b" },
            ].map((cat) => (
              <div key={cat.name} className="rounded-2xl bg-[#141414] border border-[#27272a]/50 p-5 text-center">
                {/* CSS cat face */}
                <div
                  className="w-14 h-14 mx-auto rounded-full flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${cat.color}25, ${cat.color}0a)`,
                    border: `1px solid ${cat.color}30`,
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ color: cat.color, opacity: 0.6 }}>
                    <path d="M12 2c-2.5 0-4.5 2-4.5 4.5 0 .5.1 1 .3 1.5C6.5 9 5 11 5 13.5 5 17 8 20 12 20s7-3 7-6.5c0-2.5-1.5-4.5-2.8-5.5.2-.5.3-1 .3-1.5C16.5 4 14.5 2 12 2z" />
                  </svg>
                </div>
                <p className="mt-3 text-sm font-medium text-white">{cat.name}</p>
                <p className="text-[11px] text-[#86868b] mt-0.5">{cat.role}</p>
                <p className="mt-2 text-xs text-[#a1a1a1] leading-relaxed font-light">{cat.trait}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-base md:text-lg text-white font-light text-center">
            Smarter play. Happier cats. Better homes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
