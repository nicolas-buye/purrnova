"use client";

import { use, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { products } from "@/lib/products";
import { useCart } from "@/components/CartProvider";
import ProductImage from "@/components/ProductImage";

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#86868b] text-lg font-light">Product not found</p>
          <Link
            href="/"
            className="mt-6 inline-block text-sm text-white hover:text-[#86868b] transition-colors"
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const showCompareAt = product.compareAtPrice && product.compareAtPrice > product.price;

  return (
    <section className="min-h-screen pt-28 md:pt-36 pb-20 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#86868b] hover:text-white transition-colors mb-10"
        >
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
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back
        </Link>

        {/* Product hero */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Product image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ProductImage product={product} size="detail" />
          </motion.div>

          {/* Product info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            {/* Badge + rating */}
            <div className="flex items-center gap-3 mb-3">
              {product.badge && (
                <span className={`badge ${product.badge === "Best Seller" ? "badge-bestseller" : product.badge === "New" ? "badge-new" : "badge-limited"}`}>
                  {product.badge}
                </span>
              )}
              <div className="flex items-center gap-1">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="#f59e0b">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="text-sm text-[#a1a1a1] font-light">
                  {product.rating} ({product.reviewCount.toLocaleString()} reviews)
                </span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-light text-white tracking-tight">
              {product.name}
            </h1>

            <p className="mt-2 text-sm text-[#ffa070] font-light">
              {product.tagline}
            </p>

            <p className="mt-4 text-[#a1a1a1] text-sm md:text-base leading-relaxed font-light">
              {product.longDescription}
            </p>

            {/* Price row */}
            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-3xl font-light text-white">
                ${product.price.toFixed(2)}
              </span>
              {showCompareAt && (
                <span className="text-base text-[#86868b] line-through font-light">
                  ${product.compareAtPrice!.toFixed(2)}
                </span>
              )}
            </div>
            <p className="text-xs text-[#4ade80] mt-1 font-light">
              {product.shippingNote}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={handleAdd}
                className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  added
                    ? "bg-[#4ade80] text-[#0f0f10]"
                    : "bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] text-white hover:from-[#ff7c7c] hover:to-[#ffb020] shadow-lg shadow-[#ff6b6b]/10"
                }`}
              >
                {added ? "Added to Cart ✓" : "Add to Cart"}
              </button>

              <Link
                href="/cart"
                className="px-6 py-3 rounded-full border border-[#27272a] text-sm text-white hover:border-[#3a3a3d] transition-colors font-light"
              >
                View Cart
              </Link>
            </div>

            {/* Product features */}
            <div className="mt-10 space-y-3">
              <p className="text-xs tracking-[0.2em] text-[#86868b] uppercase font-medium mb-4">
                Features
              </p>
              {product.features.map((f) => (
                <div key={f} className="flex items-center gap-3 text-sm text-[#a1a1a1] font-light">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4ade80"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {f}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Reviews section */}
        <div className="mt-20 md:mt-28">
          <h2 className="text-2xl font-light text-white text-center mb-10">
            What Cat Parents Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {product.reviews.map((review) => (
              <div
                key={review.id}
                className="bg-[#141414] border border-[#27272a]/50 rounded-2xl p-5"
              >
                <div className="flex gap-px mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#f59e0b">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-white/80 leading-relaxed font-light">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <div className="w-7 h-7 rounded-full bg-[#1a1a1f] border border-[#27272a] flex items-center justify-center text-xs font-medium text-white">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-white">{review.author}</p>
                    <p className="text-[10px] text-[#86868b] flex items-center gap-1">
                      {review.verified && (
                        <>
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                          Verified Purchase
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
