"use client";

import { motion } from "framer-motion";
import type { Product } from "@/lib/products";

interface ProductImageProps {
  product: Product;
  size?: "card" | "hero" | "detail";
}

export default function ProductImage({ product, size = "card" }: ProductImageProps) {
  const scale = size === "hero" ? 1.6 : size === "detail" ? 2 : 1;

  const baseSize = size === "hero" ? "w-full aspect-square max-w-[420px]" : "aspect-square";

  switch (product.id) {
    case "auto-cat-ball":
      return <AutoCatBallVisual scale={scale} size={size} wrapperClass={baseSize} theme={product.colorTheme} />;
    case "feather-teaser-wand":
      return <FeatherWandVisual scale={scale} size={size} wrapperClass={baseSize} theme={product.colorTheme} />;
    case "cat-tunnel":
      return <CatTunnelVisual scale={scale} size={size} wrapperClass={baseSize} theme={product.colorTheme} />;
    default:
      return (
        <div className={`${baseSize} rounded-2xl bg-gradient-to-br from-[#1a1a1f] to-[#0f0f10] border border-[#27272a]/50 flex items-center justify-center`}>
          <span className="text-6xl">{product.emoji}</span>
        </div>
      );
  }
}

/* ───────── Auto Cat Ball Visual ───────── */

function AutoCatBallVisual({
  scale,
  size,
  wrapperClass,
  theme,
}: {
  scale: number;
  size: string;
  wrapperClass: string;
  theme: Product["colorTheme"];
}) {
  const ballSize = size === "hero" ? "70%" : size === "detail" ? "75%" : "65%";
  const ringSize = size === "hero" ? "88%" : size === "detail" ? "92%" : "85%";

  return (
    <div className={`${wrapperClass} rounded-2xl bg-gradient-to-br from-[#1a1216] via-[#14101a] to-[#0f0f10] flex items-center justify-center overflow-hidden relative`}>
      {/* Ambient glow behind ball */}
      <div
        className="absolute rounded-full blur-2xl opacity-30"
        style={{
          width: ballSize,
          height: ballSize,
          background: `radial-gradient(circle, ${theme.glow}33 0%, transparent 70%)`,
        }}
      />

      {/* Orbiting ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute pointer-events-none"
        style={{ width: ringSize, height: ringSize }}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full blur-[0.5px]"
          style={{ background: theme.glow, opacity: 0.7 }}
        />
      </motion.div>

      {/* Second orbiting ring (slower, reverse) */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        className="absolute pointer-events-none"
        style={{
          width: `calc(${ringSize} + 8%)`,
          height: `calc(${ringSize} + 8%)`,
        }}
      >
        <div
          className="absolute bottom-[12%] left-1/2 -translate-x-1/2 w-0.5 h-0.5 rounded-full"
          style={{ background: theme.glow, opacity: 0.5 }}
        />
      </motion.div>

      {/* Main sphere */}
      <motion.div
        whileHover={size === "card" ? { scale: 1.05 } : undefined}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute rounded-full"
        style={{
          width: ballSize,
          height: ballSize,
          background: `radial-gradient(circle at 35% 30%, ${theme.from} 0%, ${theme.via} 45%, ${theme.to} 100%)`,
          boxShadow: `0 0 50px ${theme.glow}18, 0 0 100px ${theme.glow}0a, inset 0 0 40px ${theme.glow}08`,
          border: `1px solid ${theme.glow}1a`,
        }}
      >
        {/* Specular highlight */}
        <div
          className="absolute rounded-full"
          style={{
            top: "16%",
            left: "18%",
            width: "52%",
            height: "38%",
            background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 50%, transparent 100%)",
            transform: "rotate(-15deg)",
          }}
        />

        {/* Small reflection dot (cat eye effect) */}
        <div
          className="absolute rounded-full blur-[0.5px]"
          style={{
            top: "20%",
            left: "24%",
            width: size === "hero" ? "3%" : "2.5%",
            height: size === "hero" ? "3%" : "2.5%",
            background: "rgba(255,255,255,0.25)",
          }}
        />
        <div
          className="absolute rounded-full blur-[0.5px]"
          style={{
            top: "22%",
            left: "30%",
            width: size === "hero" ? "1.8%" : "1.5%",
            height: size === "hero" ? "1.8%" : "1.5%",
            background: "rgba(255,255,255,0.15)",
          }}
        />

        {/* Inner concentric ring for depth */}
        <div
          className="absolute rounded-full"
          style={{
            inset: "8%",
            border: "1px solid rgba(255,255,255,0.03)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            inset: "20%",
            border: "1px solid rgba(255,255,255,0.02)",
          }}
        />

        {/* Inner warm glow */}
        <div
          className="absolute rounded-full"
          style={{
            inset: "30%",
            background: `radial-gradient(circle, ${theme.glow}10 0%, transparent 60%)`,
          }}
        />
      </motion.div>

      {/* Trailing particle */}
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-1 h-1 rounded-full blur-[1px]"
        style={{
          bottom: size === "hero" ? "22%" : "20%",
          right: size === "hero" ? "18%" : "16%",
          background: theme.glow,
          opacity: 0.5,
        }}
      />
    </div>
  );
}

/* ───────── Feather Teaser Wand Visual ───────── */

function FeatherWandVisual({
  scale,
  size,
  wrapperClass,
  theme,
}: {
  scale: number;
  size: string;
  wrapperClass: string;
  theme: Product["colorTheme"];
}) {
  return (
    <div className={`${wrapperClass} rounded-2xl bg-gradient-to-br from-[#16131a] via-[#13101f] to-[#0f0f10] flex items-center justify-center overflow-hidden relative`}>
      {/* Ambient aura behind feather */}
      <div
        className="absolute rounded-full blur-3xl opacity-20"
        style={{
          width: "60%",
          height: "60%",
          top: "5%",
          left: "30%",
          background: `radial-gradient(circle, ${theme.glow} 0%, transparent 70%)`,
        }}
      />

      {/* Wand shaft */}
      <motion.div
        whileHover={size === "card" ? { rotate: -35 } : undefined}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute"
        style={{
          width: "62%",
          height: "2px",
          background: "linear-gradient(90deg, #3a3a3f 0%, #4a4a50 50%, #5a5a60 100%)",
          transform: "rotate(-32deg)",
          transformOrigin: "center center",
          borderRadius: "1px",
        }}
      >
        {/* Cork handle at bottom end */}
        <div
          className="absolute rounded-full"
          style={{
            left: "-6px",
            top: "-4px",
            width: "10px",
            height: "10px",
            background: "linear-gradient(135deg, #8b7355, #6b5640)",
            border: "1px solid rgba(139,115,85,0.4)",
          }}
        />
      </motion.div>

      {/* Feather head — 3 organic blobs */}
      <motion.div
        whileHover={size === "card" ? { rotate: -2, scale: 1.05 } : undefined}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="absolute"
        style={{
          top: size === "hero" ? "8%" : "10%",
          right: size === "hero" ? "12%" : "14%",
          transform: "rotate(-30deg)",
        }}
      >
        {/* Main feather body — large teardrop */}
        <div
          className="absolute rounded-full blur-[0.5px]"
          style={{
            width: size === "hero" ? "48px" : "32px",
            height: size === "hero" ? "80px" : "54px",
            background: `linear-gradient(180deg, ${theme.glow}60 0%, rgba(251,113,133,0.35) 40%, rgba(251,146,96,0.25) 100%)`,
            borderRadius: "50% 50% 50% 50% / 30% 30% 70% 70%",
            transform: "translate(-50%, -60%)",
          }}
        />

        {/* Left feather plume */}
        <div
          className="absolute rounded-full blur-[1px]"
          style={{
            width: size === "hero" ? "28px" : "20px",
            height: size === "hero" ? "55px" : "38px",
            background: `linear-gradient(180deg, rgba(251,113,133,0.5) 0%, rgba(251,146,96,0.2) 100%)`,
            borderRadius: "40% 50% 50% 50% / 25% 30% 70% 70%",
            transform: "translate(-120%, -45%) rotate(-15deg)",
          }}
        />

        {/* Right feather plume */}
        <div
          className="absolute rounded-full blur-[1px]"
          style={{
            width: size === "hero" ? "24px" : "17px",
            height: size === "hero" ? "50px" : "34px",
            background: `linear-gradient(180deg, rgba(251,113,133,0.45) 0%, rgba(251,146,96,0.18) 100%)`,
            borderRadius: "50% 40% 50% 50% / 30% 25% 70% 70%",
            transform: "translate(20%, -50%) rotate(12deg)",
          }}
        />

        {/* Sparkle dot */}
        <div
          className="absolute rounded-full"
          style={{
            width: "4px",
            height: "4px",
            background: "rgba(255,255,255,0.5)",
            transform: "translate(100%, -180%)",
            filter: "blur(0.5px)",
          }}
        />
      </motion.div>

      {/* Subtle motion lines */}
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2], x: [-2, 2, -2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute h-px blur-[0.5px]"
        style={{
          width: "18%",
          top: "25%",
          right: "22%",
          background: `linear-gradient(90deg, transparent, ${theme.glow}60, transparent)`,
        }}
      />
    </div>
  );
}

/* ───────── Cat Tunnel Visual ───────── */

function CatTunnelVisual({
  scale,
  size,
  wrapperClass,
  theme,
}: {
  scale: number;
  size: string;
  wrapperClass: string;
  theme: Product["colorTheme"];
}) {
  return (
    <div className={`${wrapperClass} rounded-2xl bg-gradient-to-br from-[#1a1712] via-[#151a14] to-[#0f0f10] flex items-center justify-center overflow-hidden relative`}>
      {/* Warm ambient glow */}
      <div
        className="absolute rounded-full blur-3xl opacity-25"
        style={{
          width: "70%",
          height: "50%",
          background: `radial-gradient(ellipse, ${theme.glow}30 0%, transparent 70%)`,
        }}
      />

      {/* Tunnel body */}
      <div className="relative flex items-center justify-center" style={{ width: "78%", height: "45%" }}>
        {/* Tunnel curved cylinder */}
        <div
          className="absolute inset-0 rounded-[40px] border"
          style={{
            background: `linear-gradient(180deg, ${theme.from} 0%, ${theme.via} 50%, ${theme.to} 100%)`,
            borderColor: `${theme.glow}22`,
            boxShadow: `0 4px 30px rgba(0,0,0,0.4), inset 0 2px 0 ${theme.glow}10`,
          }}
        >
          {/* Highlight strip (top) */}
          <div
            className="absolute rounded-full opacity-20"
            style={{
              top: "10%",
              left: "15%",
              right: "15%",
              height: "12%",
              background: `linear-gradient(180deg, ${theme.glow}40, transparent)`,
            }}
          />

          {/* Crinkle texture lines */}
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-px opacity-[0.04]"
              style={{
                left: "10%",
                right: "10%",
                top: `${25 + i * 10}%`,
                background: `linear-gradient(90deg, transparent 0%, ${theme.glow} 50%, transparent 100%)`,
              }}
            />
          ))}
        </div>

        {/* Tunnel opening (left end — dark ellipse) */}
        <div
          className="absolute rounded-full"
          style={{
            left: "2%",
            width: "28%",
            height: "72%",
            background: "radial-gradient(ellipse, #0a0a0c 40%, #141210 100%)",
            border: `1px solid ${theme.glow}15`,
            boxShadow: `inset 0 0 20px rgba(0,0,0,0.6)`,
          }}
        />

        {/* Cat ears peeking from tunnel opening */}
        <motion.div
          whileHover={size === "card" ? { y: -3 } : undefined}
          transition={{ duration: 0.3 }}
          className="absolute z-10"
          style={{ left: "8%", top: "18%" }}
        >
          {/* Left ear */}
          <div
            className="absolute"
            style={{
              width: 0,
              height: 0,
              borderLeft: `${size === "hero" ? 8 : 6}px solid transparent`,
              borderRight: `${size === "hero" ? 8 : 6}px solid transparent`,
              borderBottom: `${size === "hero" ? 14 : 10}px solid #1a1512`,
              transform: "rotate(-15deg) translate(-2px, -4px)",
              filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.3))",
            }}
          />
          {/* Right ear */}
          <div
            className="absolute"
            style={{
              width: 0,
              height: 0,
              borderLeft: `${size === "hero" ? 8 : 6}px solid transparent`,
              borderRight: `${size === "hero" ? 8 : 6}px solid transparent`,
              borderBottom: `${size === "hero" ? 14 : 10}px solid #1a1512`,
              transform: "rotate(15deg) translate(10px, -4px)",
              filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.3))",
            }}
          />
          {/* Small cat face silhouette */}
          <div
            className="absolute rounded-full"
            style={{
              width: `${size === "hero" ? 18 : 14}px`,
              height: `${size === "hero" ? 12 : 10}px`,
              background: "#1a1512",
              transform: "translate(4px, 2px)",
              borderRadius: "50% 50% 45% 45%",
            }}
          />
          {/* Tiny eyes (reflections) */}
          <div
            className="absolute rounded-full"
            style={{
              width: "2px",
              height: "2px",
              background: theme.glow,
              transform: "translate(8px, 4px)",
              opacity: 0.7,
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: "2px",
              height: "2px",
              background: theme.glow,
              transform: "translate(14px, 4px)",
              opacity: 0.7,
            }}
          />
        </motion.div>

        {/* Tunnel opening (right end — dark ellipse, smaller) */}
        <div
          className="absolute rounded-full"
          style={{
            right: "2%",
            width: "26%",
            height: "66%",
            background: "radial-gradient(ellipse, #0b0b0d 40%, #141210 100%)",
            border: `1px solid ${theme.glow}12`,
            boxShadow: `inset 0 0 18px rgba(0,0,0,0.6)`,
          }}
        />
      </div>

      {/* Floating crinkle particle */}
      <motion.div
        animate={{ y: [-3, 3, -3], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-1 h-1 rounded-full blur-[0.5px]"
        style={{ top: "15%", right: "22%", background: theme.glow, opacity: 0.4 }}
      />
    </div>
  );
}
