"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface SectionProps {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  image?: string;
  imageAlt?: string;
  reversed?: boolean;
  className?: string;
}

export default function Section({ 
  title, 
  subtitle, 
  content, 
  image, 
  imageAlt,
  reversed = false,
  className = ""
}: SectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.section 
      ref={ref}
      style={{ opacity }}
      className={`py-24 px-6 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 md:mb-4 gold-gradient bg-clip-text text-transparent">
            {title}
          </h2>
          {subtitle && (
            <h3 className="text-lg sm:text-xl md:text-2xl tracking-widest text-gray-300">
              {subtitle}
            </h3>
          )}
        </motion.div>

        <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${reversed ? 'md:grid-flow-col-dense' : ''}`}>
          {image && (
            <motion.div 
              style={{ y }}
              className={`relative h-[400px] md:h-[600px] glass rounded-3xl overflow-hidden ${reversed ? 'md:col-start-2' : ''}`}
            >
              <Image
                src={image}
                alt={imageAlt || ""}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
          )}
          
          <motion.div
            initial={{ opacity: 0, x: reversed ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-3xl backdrop-blur-xl"
          >
            <div className="prose prose-lg prose-invert max-w-none">
              {content}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}