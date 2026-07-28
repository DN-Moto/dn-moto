"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
  id="home"
  className="relative min-h-screen overflow-hidden"
>

      {/* Background Image */}
      <motion.img
  src="/images/hero.jpg"
  alt="DN Moto Yamaha TTR125LE"
  initial={{ scale: 1.08 }}
  animate={{ scale: 1.13 }}
  transition={{
    duration: 20,
    ease: "linear",
  }}
  className="absolute inset-0 h-full w-full object-cover object-right"
/>

      {/* Dark Gradient Overlay */}
      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 2 }}
  className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"
/>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mx-auto w-full max-w-7xl px-12 lg:px-16"
        >
          <div className="max-w-xl">

            <motion.h1
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-6xl font-black leading-none tracking-wide text-white md:text-8xl"
>
  DN MOTO
</motion.h1>

            <motion.p
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.8 }}
  className="mt-8 text-3xl font-semibold text-blue-400 md:text-4xl"
>
  Built for the Next Ride.
</motion.p>

            <motion.p
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.8 }}
  className="mt-6 text-lg leading-8 text-gray-200 md:text-xl"
>
  Professional maintenance and repairs for dirt bikes under 250cc.
  <br />
  Rider-owned. Honest pricing. Attention to detail.
</motion.p>

            <motion.div
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6, duration: 0.8 }}
  className="mt-10 flex flex-wrap gap-5"
>

              <a
  href="#contact"
  className="rounded-xl bg-blue-600 px-9 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-2xl hover:shadow-blue-500/30"
>
  Request Service
</a>

              <Link
  href="/services"
  className="rounded-xl border border-white/30 px-9 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black"
>
  View Services
</Link>

            </motion.div>

          </div>
        </motion.div>
      </div>

    </section>
  );
}