import React from "react";
import { motion, useScroll, Variants } from "framer-motion";

export default function PortfolioCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        // if odd index card,slide from right instead of left
        y: 1 % 2 === 0 ? 50 : -50,
      }}
      whileInView={{
        opacity: 1,
        y: 0, // Slide in to its original position
        transition: {
          duration: 1, // Animation duration
        },
      }}
      className="flex items-end overflow-hidden bg-cover rounded-lg h-96"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80')",
      }}
    >
      <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
        <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
          Best website collections
        </h2>
        <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
          Website
        </p>
      </div>
    </motion.div>
  );
}
