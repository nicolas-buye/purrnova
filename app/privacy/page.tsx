"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm md:text-base text-[#a1a1a1] font-light">
            Simple, human-readable, no legalese. Here&apos;s how we handle your data.
          </p>

          <div className="mt-12 space-y-10">
            {[
              {
                title: "1. What We Collect",
                body: "We collect your name, email, shipping address, and payment details — only what&apos;s needed to get your cat&apos;s new toy to your door. Payment processing is handled by Stripe; we never see your full card number.",
              },
              {
                title: "2. How We Use It",
                body: "We use your information to process orders, ship products, send tracking updates, and (only if you opt in) share new product drops and cat care tips. That&apos;s it. We never sell or rent your data to third parties.",
              },
              {
                title: "3. Cookies",
                body: "We use essential cookies to keep your cart working and your session secure. If we ever add analytics cookies, we&apos;ll ask for consent first. No sneaky tracking.",
              },
              {
                title: "4. Data Retention",
                body: "We keep your order history so you can reorder your cat&apos;s favorites. You can request data deletion at any time by emailing us — we&apos;ll handle it within 30 days.",
              },
              {
                title: "5. Your Rights",
                body: "You have the right to access, correct, or delete your personal data. You can opt out of marketing emails with one click. For any privacy questions, reach out to hello@purrnova.com.",
              },
              {
                title: "6. Updates to This Policy",
                body: "If we change anything meaningful, we&apos;ll email you before the change takes effect. Minor updates (typos, clarifications) will just be reflected here.",
              },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="text-lg font-medium text-white">{section.title}</h2>
                <p className="mt-2 text-sm md:text-base text-[#a1a1a1] leading-relaxed font-light">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-xs text-[#86868b] font-light">
            Last updated: May 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
}
