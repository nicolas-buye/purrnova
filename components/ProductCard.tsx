"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "@/components/CartProvider";
import ProductImage from "@/components/ProductImage";
import type { Product } from "@/lib/products";

function StarRating({ rating, reviewCount, showCount = true }: { rating: number; reviewCount: number; showCount?: boolean }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-px">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill={i < Math.round(rating) ? "#f59e0b" : "#3a3a3d"}
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      {showCount && (
        <span className="text-xs text-[#a1a1a1] font-light">
          {rating} ({reviewCount >= 1000 ? `${(reviewCount / 1000).toFixed(1)}k` : reviewCount})
        </span>
      )}
    </div>
  );
}

function Badge({ badge }: { badge: Product["badge"] }) {
  if (!badge) return null;
  const cls =
    badge === "Best Seller"
      ? "badge badge-bestseller"
      : badge === "New"
        ? "badge badge-new"
        : "badge badge-limited";
  return <span className={cls}>{badge}</span>;
}

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  const showCompareAt = product.compareAtPrice && product.compareAtPrice > product.price;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group relative bg-[#141414] rounded-2xl border border-[#27272a]/50 hover:border-[#3a3a3d] transition-colors duration-500 overflow-hidden flex flex-col"
    >
      {/* Badge — positioned over image */}
      <div className="absolute top-3 left-3 z-10">
        <Badge badge={product.badge} />
      </div>

      {/* Product image */}
      <div className="relative">
        <ProductImage product={product} size="card" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Rating */}
        <div className="mb-2">
          <StarRating rating={product.rating} reviewCount={product.reviewCount} />
        </div>

        {/* Name */}
        <h3 className="text-base font-medium text-white leading-tight">
          {product.name}
        </h3>

        {/* Tagline */}
        <p className="mt-1 text-sm text-[#a1a1a1] leading-relaxed font-light">
          {product.tagline}
        </p>

        {/* Spacer pushes price + CTA to bottom */}
        <div className="flex-1" />

        {/* Price row */}
        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-xl font-light text-white">
            ${product.price.toFixed(2)}
          </span>
          {showCompareAt && (
            <span className="text-sm text-[#86868b] line-through font-light">
              ${product.compareAtPrice!.toFixed(2)}
            </span>
          )}
          <span className="text-xs text-[#4ade80] font-light ml-auto">
            {product.shippingNote}
          </span>
        </div>

        {/* Sold count */}
        <p className="text-xs text-[#86868b] mt-1 font-light">
          {product.soldCount.toLocaleString()}+ sold
        </p>

        {/* CTA Button */}
        <button
          onClick={handleAdd}
          className={`mt-4 w-full py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
            added
              ? "bg-[#4ade80] text-[#0f0f10]"
              : "bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] text-white hover:from-[#ff7c7c] hover:to-[#ffb020] shadow-lg shadow-[#ff6b6b]/10"
          }`}
        >
          {added ? "Added ✓" : "Add to Cart"}
        </button>
      </div>
    </motion.div>
  );
}
