"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const videos = [
  {
    id: "BV1wow9eHEHx",
    title: "Smart Rolling Ball in Action",
    subtitle: "智能感应球，猫咪追到停不下来",
    likes: "3.2万",
    productId: "smart-rolling-ball",
    productLabel: "Shop this toy →",
  },
  {
    id: "douyin-caterpillar",
    type: "douyin" as const,
    title: "Caterpillar Chaser Wiggle",
    subtitle: "毛毛虫追追乐，猫咪疯狂追逐",
    likes: "2.8万",
    productId: "caterpillar-chaser",
    productLabel: "Shop this toy →",
    douyinUrl: "https://www.douyin.com/jingxuan/search/%E6%AF%9B%E6%AF%9B%E8%99%AB%E8%BF%BD%E8%BF%BD%E4%B9%90?modal_id=7514515424067751206",
  },
  {
    id: "BV15ZSFB7E6S",
    title: "Tunnel Zoomies",
    subtitle: "布偶猫隧道挑战，太可爱了",
    likes: "5.6万",
    productId: "cat-tunnel",
    productLabel: "Shop this toy →",
  },
  {
    id: "BV1CD4y1g7Aj",
    title: "PurrNova Unboxing Style",
    subtitle: "猫隧道玩具开箱试玩，猫咪自嗨一整天",
    likes: "3.1万",
    productId: null,
    productLabel: null,
  },
  {
    id: "BV1T14y1w7rt",
    title: "Happy Cat Compilation",
    subtitle: "快乐猫咪玩耍合集，治愈每一天",
    likes: "4.2万",
    productId: null,
    productLabel: null,
  },
];

export default function VideoShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  const getEmbedUrl = (bvid: string) =>
    `https://player.bilibili.com/player.html?bvid=${bvid}&page=1&high_quality=1&autoplay=0&danmaku=0&as_wide=1`;

  return (
    <section id="videos" className="section-warm py-24 md:py-32 overflow-hidden">
      {/* Heading */}
      <div className="px-6">
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs tracking-[0.3em] text-[#ff6b6b] uppercase font-medium mb-3">
            Real Cats. Real Obsession.
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">
            Watch Them Go Wild
          </h2>
          <p className="mt-4 text-[#86868b] text-sm md:text-base font-light max-w-md mx-auto">
            Thousands of cats can&apos;t be wrong. Tap a video and see for yourself.
          </p>
        </motion.div>
      </div>

      {/* Horizontal scroll */}
      <motion.div
        initial={{ y: 16 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div
          ref={scrollRef}
          className="flex gap-5 md:gap-6 px-6 overflow-x-auto snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: "none" }}
        >
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ x: 40 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="flex-none w-[85vw] max-w-[440px] snap-center"
            >
              {/* Card */}
              <div className="rounded-2xl overflow-hidden border border-[#27272a]/50 bg-[#141414] group">
                {/* Video player area */}
                <div className="relative aspect-video bg-black">
                  {"douyinUrl" in video && video.douyinUrl ? (
                    <a
                      href={video.douyinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center cursor-pointer group/play"
                    >
                      {/* Thumbnail gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1f] via-[#14141a] to-[#0f0f10]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* TikTok-style play button */}
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative z-10 w-16 h-16 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover/play:bg-white/25 transition-colors shadow-2xl"
                      >
                        <svg
                          width="24"
                          height="26"
                          viewBox="0 0 24 28"
                          fill="white"
                          className="ml-1"
                        >
                          <path d="M0 0v28l22-14L0 0Z" />
                        </svg>
                      </motion.div>

                      {/* TikTok badge */}
                      <span className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-[10px] text-white/70">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                        </svg>
                        Watch on Douyin
                      </span>

                      {/* Click hint */}
                      <span className="absolute bottom-4 left-4 text-xs text-white/60 font-light z-10">
                        点击观看
                      </span>
                    </a>
                  ) : (
                    activeId === video.id ? (
                      <iframe
                        src={getEmbedUrl(video.id)}
                        className="absolute inset-0 w-full h-full"
                        allowFullScreen
                        scrolling="no"
                        frameBorder="no"
                        allow="autoplay; encrypted-media; picture-in-picture"
                      />
                    ) : (
                      <button
                        onClick={() => setActiveId(video.id)}
                        className="absolute inset-0 flex items-center justify-center cursor-pointer group/play"
                      >
                        {/* Thumbnail gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1f] via-[#14141a] to-[#0f0f10]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        {/* Play button */}
                        <motion.div
                          whileHover={{ scale: 1.08 }}
                          whileTap={{ scale: 0.95 }}
                          className="relative z-10 w-16 h-16 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover/play:bg-white/25 transition-colors shadow-2xl"
                        >
                          <svg
                            width="24"
                            height="26"
                            viewBox="0 0 24 28"
                            fill="white"
                            className="ml-1"
                          >
                            <path d="M0 0v28l22-14L0 0Z" />
                          </svg>
                        </motion.div>

                        {/* Click to play text */}
                        <span className="absolute bottom-4 left-4 text-xs text-white/60 font-light z-10">
                          点击播放
                        </span>
                      </button>
                    )
                  )}
                </div>

                {/* Info bar */}
                <div className="p-4 flex items-center justify-between">
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-white truncate">
                      {video.title}
                    </p>
                    <p className="text-xs text-[#a1a1a1] mt-0.5 truncate">
                      {video.subtitle}
                    </p>
                    {video.productId && video.productLabel && (
                      <Link
                        href={`/product/${video.productId}`}
                        className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-[#ffa070] hover:text-[#ff6b6b] transition-colors"
                      >
                        {video.productLabel}
                      </Link>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0 ml-3">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="#ff6b6b"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35Z" />
                    </svg>
                    <span className="text-xs text-[#a1a1a1] font-light">
                      {video.likes}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll hint — mobile only */}
      <div className="flex justify-center mt-6 md:hidden">
        <div className="flex gap-1.5">
          {videos.map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                i === 0 ? "bg-white" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
