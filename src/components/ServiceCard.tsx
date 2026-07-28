"use client";

import { motion } from "framer-motion";

import { LucideIcon } from "lucide-react";

import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  price: string;
  icon: LucideIcon;
};

export default function ServiceCard({
  title,
  description,
  price,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:border-blue-500/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/10"
    >
      <div className="mb-6">
  <Icon
    size={42}
    strokeWidth={1.8}
    className="text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-300"
  />
</div>

      <h3 className="mt-6 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-gray-300">
        {description}
      </p>

      <div className="mt-8 flex items-center justify-between">
        <span className="text-lg font-semibold text-blue-400">
          {price}
        </span>

        <Link
    href="/services"
    className="flex items-center gap-2 text-white transition-transform duration-300 group-hover:translate-x-2"
  >
    Learn More <span aria-hidden>→</span>
  </Link>
</div>
    </motion.div>
  );
}