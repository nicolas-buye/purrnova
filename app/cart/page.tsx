"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import ProductImage from "@/components/ProductImage";
import { siteStats } from "@/lib/products";

export default function CartPage() {
  const { items, removeItem, updateQuantity, itemCount, total } = useCart();

  const freeThreshold = siteStats.freeShippingThreshold;
  const remaining = Math.max(0, freeThreshold - total);
  const progressPct = Math.min(100, (total / freeThreshold) * 100);

  if (itemCount === 0) {
    return (
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-5xl mb-6">🛒</p>
            <h1 className="text-2xl md:text-3xl font-light text-white">
              Your cart is empty
            </h1>
            <p className="mt-3 text-sm text-[#86868b] font-light">
              Discover something your cat will love.
            </p>
            <Link
              href="/"
              className="mt-8 inline-block px-7 py-2.5 rounded-full bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] text-white text-sm font-medium hover:from-[#ff7c7c] hover:to-[#ffb020] transition-all shadow-lg shadow-[#ff6b6b]/10"
            >
              Shop Best Sellers
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-28 md:pt-36 pb-20 px-6">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-10">
            <h1 className="text-2xl md:text-3xl font-light text-white">
              Cart{" "}
              <span className="text-[#86868b] text-lg">
                ({itemCount} {itemCount === 1 ? "item" : "items"})
              </span>
            </h1>
            <Link
              href="/"
              className="text-sm text-[#86868b] hover:text-white transition-colors"
            >
              Continue Shopping
            </Link>
          </div>

          {/* Free shipping progress bar */}
          {remaining > 0 ? (
            <div className="mb-8 rounded-xl bg-[#1a1512]/60 border border-[#27272a]/40 p-4">
              <p className="text-xs text-[#a1a1a1] font-light mb-2">
                Add <span className="text-white font-medium">${remaining.toFixed(2)}</span> more for free shipping
              </p>
              <div className="h-1.5 rounded-full bg-[#27272a] overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPct}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-[#ff6b6b] to-[#ffa500]"
                />
              </div>
            </div>
          ) : (
            <div className="mb-8 rounded-xl bg-[#4ade80]/5 border border-[#4ade80]/20 p-4">
              <p className="text-xs text-[#4ade80] font-medium flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                You qualify for free shipping!
              </p>
            </div>
          )}

          {/* Cart items */}
          <ul className="space-y-4">
            <AnimatePresence>
              {items.map((item) => (
                <motion.li
                  key={item.product.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-4 bg-[#141414] border border-[#27272a]/50 rounded-2xl p-4"
                >
                  {/* Product image */}
                  <Link
                    href={`/product/${item.product.id}`}
                    className="shrink-0 w-16 h-16 rounded-xl overflow-hidden"
                  >
                    <ProductImage product={item.product} size="card" />
                  </Link>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/product/${item.product.id}`}
                      className="text-sm font-medium text-white hover:text-[#86868b] transition-colors"
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-sm text-[#a1a1a1] font-light mt-0.5">
                      ${item.product.price.toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity - 1)
                      }
                      className="w-7 h-7 rounded-full border border-[#27272a] flex items-center justify-center text-sm text-[#a1a1a1] hover:text-white hover:border-[#3a3a3d] transition-colors"
                    >
                      −
                    </button>
                    <span className="w-6 text-center text-sm text-white font-light">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity + 1)
                      }
                      className="w-7 h-7 rounded-full border border-[#27272a] flex items-center justify-center text-sm text-[#a1a1a1] hover:text-white hover:border-[#3a3a3d] transition-colors"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="shrink-0 w-7 h-7 rounded-full border border-transparent hover:border-[#27272a] flex items-center justify-center text-[#86868b] hover:text-[#ff6b6b] transition-colors"
                    aria-label={`Remove ${item.product.name}`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    >
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 rounded-2xl bg-[#141414] border border-[#27272a]/50 p-6"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#a1a1a1] font-light">Subtotal</span>
              <span className="text-xl font-light text-white">
                ${total.toFixed(2)}
              </span>
            </div>
            <p className="mt-1 text-xs text-[#86868b] font-light">
              Shipping calculated at checkout
            </p>
            <button className="mt-5 w-full py-3 rounded-full bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] text-white text-sm font-medium hover:from-[#ff7c7c] hover:to-[#ffb020] transition-all shadow-lg shadow-[#ff6b6b]/10">
              Checkout
            </button>

            {/* Trust badges */}
            <div className="mt-5 flex items-center justify-center gap-4 text-[10px] text-[#86868b] font-light">
              <span className="flex items-center gap-1">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                Secure checkout
              </span>
              <span className="flex items-center gap-1">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                30-day returns
              </span>
              <span>🔒 SSL encrypted</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
