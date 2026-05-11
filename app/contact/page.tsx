"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactPage() {
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
            Get in Touch
          </h1>
          <p className="mt-4 text-sm md:text-base text-[#a1a1a1] font-light">
            Questions, feedback, or just want to say hi? We&apos;d love to hear from
            you.
          </p>

          <div className="mt-10 space-y-6">
            <div>
              <p className="text-xs tracking-[0.2em] text-[#86868b] uppercase font-medium mb-2">
                Email
              </p>
              <a
                href="mailto:hello@purrnova.com"
                className="text-base text-white hover:text-[#a1a1a1] transition-colors font-light"
              >
                hello@purrnova.com
              </a>
            </div>

            <div>
              <p className="text-xs tracking-[0.2em] text-[#86868b] uppercase font-medium mb-2">
                Social
              </p>
              <div className="space-y-1">
                <p className="text-base text-[#a1a1a1] font-light">
                  TikTok @purrnova
                </p>
                <p className="text-base text-[#a1a1a1] font-light">
                  Instagram @purrnova
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs tracking-[0.2em] text-[#86868b] uppercase font-medium mb-2">
                Press &amp; Partnerships
              </p>
              <a
                href="mailto:partners@purrnova.com"
                className="text-base text-white hover:text-[#a1a1a1] transition-colors font-light"
              >
                partners@purrnova.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
