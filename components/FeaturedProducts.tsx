"use client";

import { motion } from "framer-motion";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function FeaturedProducts() {
  return (
    <section id="shop" className="section-warm py-24 md:py-32 px-6 scroll-mt-20">
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="text-xs tracking-[0.3em] text-[#ffa070] uppercase font-medium mb-3">
            Trusted by 5,000+ Indoor Cats
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">
            Find Their New Obsession
          </h2>
          <p className="mt-4 text-sm md:text-base text-[#86868b] max-w-lg mx-auto font-light leading-relaxed">
            Every toy backed by 3,400+ five-star reviews.
            Free shipping on orders over $50.
          </p>
        </motion.div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
