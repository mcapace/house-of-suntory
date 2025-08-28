"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gradient-to-b from-black to-suntory-black py-16 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass-dark p-8 md:p-12 rounded-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gold-gradient bg-clip-text text-transparent">
              THE SPIRIT OF JAPANESE WHISKY
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Discover the art of Japanese whisky through The House of Suntory. 
              Where tradition meets innovation, and every bottle tells a story of craftsmanship.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-suntory-gold font-bold mb-2">YAMAZAKI</h3>
              <p className="text-sm text-gray-400">Pioneer Single Malt</p>
            </div>
            <div className="text-center">
              <h3 className="text-suntory-gold font-bold mb-2">HAKUSHU</h3>
              <p className="text-sm text-gray-400">Forest Distillery</p>
            </div>
            <div className="text-center">
              <h3 className="text-suntory-gold font-bold mb-2">HIBIKI</h3>
              <p className="text-sm text-gray-400">Harmonious Blend</p>
            </div>
            <div className="text-center">
              <h3 className="text-suntory-gold font-bold mb-2">TOKI</h3>
              <p className="text-sm text-gray-400">Modern Expression</p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-center text-sm text-gray-500">
              © 2025 House of Suntory. Crafted with precision and passion.
            </p>
            <p className="text-center text-xs text-gray-600 mt-2">
              Please Drink Responsibly
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}