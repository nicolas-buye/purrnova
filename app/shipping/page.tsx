"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ShippingPage() {
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
            Shipping &amp; Returns
          </h1>
          <p className="mt-4 text-sm md:text-base text-[#a1a1a1] font-light">
            Everything you need to know about getting your cat&apos;s new favorite toy.
          </p>

          <div className="mt-12 space-y-12">
            {/* Shipping */}
            <div>
              <h2 className="text-xl font-medium text-white">Shipping</h2>
              <div className="mt-4 space-y-4 text-sm md:text-base text-[#a1a1a1] leading-relaxed font-light">
                <p>
                  We ship to all 50 U.S. states. Orders are processed within
                  1–2 business days. You&apos;ll receive a tracking number as soon
                  as your package leaves our warehouse.
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    { label: "Standard (5–7 business days)", price: "$4.99", highlight: false },
                    { label: "Express (2–3 business days)", price: "$12.99", highlight: false },
                    { label: "Orders over $50", price: "Free", highlight: true },
                  ].map((tier) => (
                    <div
                      key={tier.label}
                      className={`flex items-center justify-between rounded-xl p-4 border ${
                        tier.highlight
                          ? "bg-[#4ade80]/5 border-[#4ade80]/20"
                          : "bg-[#141414] border-[#27272a]/50"
                      }`}
                    >
                      <span className="text-white font-light">{tier.label}</span>
                      <span
                        className={`font-medium ${
                          tier.highlight ? "text-[#4ade80]" : "text-[#a1a1a1]"
                        }`}
                      >
                        {tier.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Returns */}
            <div>
              <h2 className="text-xl font-medium text-white">Returns</h2>
              <div className="mt-4 space-y-4 text-sm md:text-base text-[#a1a1a1] leading-relaxed font-light">
                <p>
                  We offer a <span className="text-white font-medium">30-day happy cat guarantee</span>. If
                  your cat doesn&apos;t love it, return it — no questions asked.
                </p>
                <ul className="space-y-2">
                  {[
                    "Returns are free within 30 days of delivery.",
                    "Items must be in reasonable condition — we understand cats play hard.",
                    "Refunds are processed within 5 business days of receiving the return.",
                    "Contact hello@purrnova.com to start a return.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#4ade80"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0.5 shrink-0"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* FAQ quick links */}
            <div className="rounded-2xl bg-[#141414] border border-[#27272a]/50 p-6">
              <h3 className="text-sm font-medium text-white">Still have questions?</h3>
              <p className="mt-1 text-sm text-[#a1a1a1] font-light">
                Reach out at{" "}
                <a href="mailto:hello@purrnova.com" className="text-[#ffa070] hover:text-[#ff6b6b] transition-colors">
                  hello@purrnova.com
                </a>
                {" "}— we respond within a few hours.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
