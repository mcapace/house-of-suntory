"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Bottle {
  src: string;
  name: string;
  description: string;
}

const bottles: Bottle[] = [
  {
    src: "/images/bottle1.png",
    name: "Yamazaki 12",
    description: "Single malt with notes of peach, pineapple, and grapefruit"
  },
  {
    src: "/images/bottle2.png", 
    name: "Hakushu 12",
    description: "Forest distillery single malt with fresh, green, and subtly smoky character"
  },
  {
    src: "/images/bottle3.png",
    name: "Hibiki Harmony",
    description: "Harmonious blend with honey-like smoothness and candied orange peel"
  },
  {
    src: "/images/bottle4.png",
    name: "Toki",
    description: "Versatile blended whisky with sweet and spicy finish"
  }
];

export default function BottleShowcase() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-black via-suntory-black to-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-12 md:mb-16 gold-gradient bg-clip-text text-transparent"
        >
          THE COLLECTION
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {bottles.map((bottle, index) => (
            <motion.div
              key={bottle.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                hover: { duration: 0.3 }
              }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 text-center group"
            >
              <div className="relative h-64 mb-6 transform transition-transform duration-500 group-hover:rotate-3">
                <Image
                  src={bottle.src}
                  alt={bottle.name}
                  fill
                  className="object-contain animate-float"
                  style={{ animationDelay: `${index * 0.5}s` }}
                />
                <div className="absolute inset-0 bg-gradient-radial from-suntory-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-suntory-gold">
                {bottle.name}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {bottle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}