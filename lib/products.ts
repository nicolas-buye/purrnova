export interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  description: string;
  longDescription: string;
  tagline: string;
  emoji: string;
  rating: number;
  reviewCount: number;
  badge: "Best Seller" | "New" | "Limited" | null;
  features: string[];
  bestFor: string;
  colorTheme: {
    from: string;
    via: string;
    to: string;
    glow: string;
  };
  reviews: Review[];
  category: string;
  soldCount: number;
  shippingNote: string;
  videoBvid?: string;
}

export const products: Product[] = [
  {
    id: "auto-cat-ball",
    name: "Auto Cat Ball",
    price: 29.99,
    compareAtPrice: 39.99,
    description:
      "Self-rolling ball that mimics prey. Your cat chases. You get work done.",
    longDescription:
      "The Auto Cat Ball uses smart motion sensors to roll, stop, and dart just like real prey. Two speed modes keep things fresh — start with gentle rolls for cautious cats, then switch to chase mode once they're hooked. USB-C rechargeable with an 8-hour battery, so it lasts through your entire workday and beyond.",
    tagline: "The toy your cat actually plays with.",
    emoji: "⚽",
    rating: 4.9,
    reviewCount: 1847,
    badge: "Best Seller",
    features: [
      "USB-C rechargeable, 8hr battery life",
      "Two speed modes for lazy hunters & champs",
      "Auto obstacle avoidance — won't get stuck",
      "Quiet motor won't spook nervous cats",
    ],
    bestFor: "Cats who ignore every toy you bring home.",
    colorTheme: {
      from: "#2a1518",
      via: "#1f1420",
      to: "#15101a",
      glow: "#ff6b6b",
    },
    reviews: [
      {
        id: "r1",
        author: "Sarah M.",
        avatar: "S",
        rating: 5,
        text: "My tabby ignored every toy I bought for two years. This ball? She chases it for hours. I actually got through a full Zoom meeting without a cat on my keyboard. Miracle.",
        date: "2026-04-12",
        verified: true,
      },
      {
        id: "r2",
        author: "David L.",
        avatar: "D",
        rating: 5,
        text: "Was skeptical but the auto-obstacle avoidance is legit. Doesn't get stuck under the couch like every other rolling toy. Battery lasts my whole 8hr shift.",
        date: "2026-03-28",
        verified: true,
      },
      {
        id: "r3",
        author: "Mia C.",
        avatar: "M",
        rating: 5,
        text: "I have two cats — one is lazy, one is hyper. The two speed modes mean both of them actually play with it. That never happens.",
        date: "2026-04-05",
        verified: true,
      },
    ],
    category: "Interactive Toys",
    soldCount: 3200,
    shippingNote: "Free shipping",
    videoBvid: "BV19b421Y7r2",
  },
  {
    id: "feather-teaser-wand",
    name: "Feather Teaser Wand",
    price: 14.99,
    description:
      "The pre-bedtime ritual that tires out even the most hyperactive cat.",
    longDescription:
      "An extra-long 70cm wand with interchangeable natural feather heads. The extended reach means less effort for you and more dramatic chase arcs for your cat. Five minutes of play before bed burns off that midnight energy — so you both sleep through the night.",
    tagline: "5 minutes of play. A full night of peace.",
    emoji: "🪶",
    rating: 4.8,
    reviewCount: 612,
    badge: "New",
    features: [
      "Interchangeable feather heads — swap in seconds",
      "Extra-long 70cm wand for dramatic chase arcs",
      "Natural cruelty-free feathers",
      "Ergonomic cork handle — comfortable grip",
    ],
    bestFor: "Kittens and high-energy cats who destroy your sleep.",
    colorTheme: {
      from: "#1f1820",
      via: "#1a1622",
      to: "#151520",
      glow: "#a78bfa",
    },
    reviews: [
      {
        id: "r4",
        author: "James K.",
        avatar: "J",
        rating: 5,
        text: "My kitten used to sprint across my face at 3 AM every single night. Started doing 5 minutes with this wand before bed — she sleeps through the night now. I could cry.",
        date: "2026-04-18",
        verified: true,
      },
      {
        id: "r5",
        author: "Rachel W.",
        avatar: "R",
        rating: 5,
        text: "The interchangeable heads are genius. When my cat gets bored of one feather type, I swap it and it's like a brand new toy. The cork handle actually feels premium too.",
        date: "2026-03-15",
        verified: true,
      },
    ],
    category: "Wand Toys",
    soldCount: 1500,
    shippingNote: "Free shipping",
    videoBvid: "BV1Rp4y1578f",
  },
  {
    id: "cat-tunnel",
    name: "Cat Tunnel",
    price: 39.99,
    compareAtPrice: 49.99,
    description:
      "Collapsible play tunnel that actually looks good in your living room.",
    longDescription:
      "A premium crinkle tunnel designed for modern homes. Machine-washable fabric, two peep holes for ambush play, and it collapses flat in seconds when guests come over. The crinkle lining drives cats wild — they'll sprint through it, hide in it, and nap in it.",
    tagline: "Their new favorite hiding spot. Your new favorite decor.",
    emoji: "🕳️",
    rating: 4.7,
    reviewCount: 893,
    badge: "Limited",
    features: [
      "Collapses flat in 2 seconds — stores anywhere",
      "Crinkle lining cats can't resist",
      "Two peep holes for sneak-attack play",
      "Machine-washable premium fabric",
    ],
    bestFor: "Shy cats and multi-cat homes who need hideaway zones.",
    colorTheme: {
      from: "#1a1814",
      via: "#181a15",
      to: "#151a16",
      glow: "#f59e0b",
    },
    reviews: [
      {
        id: "r6",
        author: "Emily R.",
        avatar: "E",
        rating: 5,
        text: "My two cats used to fight over the one cardboard box in the living room. Now they each have an end of the tunnel. It looks a thousand times better than a ratty Amazon box.",
        date: "2026-04-22",
        verified: true,
      },
      {
        id: "r7",
        author: "Tom H.",
        avatar: "T",
        rating: 4,
        text: "Collapses fast which is great for my small apartment. Only wish it came in more colors — but the fabric quality is really good. My shy cat finally has a safe spot.",
        date: "2026-04-01",
        verified: true,
      },
    ],
    category: "Play Spaces",
    soldCount: 1100,
    shippingNote: "Free shipping over $50",
    videoBvid: "BV15ZSFB7E6S",
  },
];

export const siteStats = {
  totalReviews: 3400,
  averageRating: 4.9,
  happyCats: "5,000+",
  guarantee: "30-Day Happy Cat Guarantee",
  freeShippingThreshold: 50,
};

export const testimonials = [
  {
    name: "Sarah M.",
    handle: "@sarahlovescats",
    avatar: "S",
    rating: 5,
    text: "My indoor tabby went from couch potato to full-on athlete. The Auto Cat Ball is genuinely the best purchase I've made this year. Can't recommend it enough.",
    productName: "Auto Cat Ball",
    color: "from-[#ff6b6b]/10 to-[#ff6b6b]/5",
    verified: true,
  },
  {
    name: "James K.",
    handle: "@jamesandmochi",
    avatar: "J",
    rating: 5,
    text: "Mochi used to ignore every toy I brought home. The feather wand? Different story. She goes absolutely wild for it every single evening now. 5 minutes and she's out for the night.",
    productName: "Feather Teaser Wand",
    color: "from-[#a78bfa]/10 to-[#a78bfa]/5",
    verified: true,
  },
  {
    name: "Emily R.",
    handle: "@emilycats",
    avatar: "E",
    rating: 5,
    text: "Finally — a brand that actually understands indoor cats. The tunnel has become my two cats' favorite spot. They play in it, nap in it, everything. And it doesn't ruin my apartment aesthetic.",
    productName: "Cat Tunnel",
    color: "from-[#f59e0b]/10 to-[#f59e0b]/5",
    verified: true,
  },
  {
    name: "Michael T.",
    handle: "@mikeandluna",
    avatar: "M",
    rating: 5,
    text: "The design quality is what got me. It doesn't look like a cheap pet toy — it actually looks good in my apartment. And Luna loves it. Win-win.",
    productName: "Auto Cat Ball",
    color: "from-[#fb7185]/10 to-[#fb7185]/5",
    verified: true,
  },
  {
    name: "Lisa N.",
    handle: "@lisaandoliver",
    avatar: "L",
    rating: 5,
    text: "Oliver has separation anxiety and the Auto Cat Ball has been a game changer. He plays with it while I'm at work and the camera shows him napping peacefully after. Best $30 I've ever spent.",
    productName: "Auto Cat Ball",
    color: "from-[#ff6b6b]/10 to-[#ff6b6b]/5",
    verified: true,
  },
  {
    name: "Chris P.",
    handle: "@chrisandcleo",
    avatar: "C",
    rating: 5,
    text: "We have three cats and the tunnel has become their neutral ground. No more territory disputes. The crinkle sound sends them sprinting from every corner of the apartment.",
    productName: "Cat Tunnel",
    color: "from-[#4ade80]/10 to-[#4ade80]/5",
    verified: true,
  },
];
