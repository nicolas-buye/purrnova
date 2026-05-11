import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-7xl mb-6">🐱</p>
        <h1 className="text-3xl md:text-4xl font-light text-white tracking-tight">
          Page not found
        </h1>
        <p className="mt-3 text-sm text-[#a1a1a1] font-light max-w-sm mx-auto">
          Looks like this page wandered off — kind of like a cat when you need them most.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block px-7 py-2.5 rounded-full bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] text-white text-sm font-medium hover:from-[#ff7c7c] hover:to-[#ffb020] transition-all shadow-lg shadow-[#ff6b6b]/10"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
