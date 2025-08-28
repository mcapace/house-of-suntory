"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface QuoteSectionProps {
  quote: string;
  author?: string;
  role?: string;
  desktopImage: string;
  mobileImage: string;
  parallaxImage?: string;
}

export default function QuoteSection({ 
  quote, 
  author, 
  role,
  desktopImage,
  mobileImage,
  parallaxImage
}: QuoteSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={ref} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <picture>
          <source srcSet={mobileImage} media="(max-width: 767px)" />
          <source srcSet={desktopImage} media="(min-width: 768px)" />
          <Image 
            src={desktopImage}
            alt="Quote background"
            fill
            className="object-cover"
          />
        </picture>
      </div>

      {parallaxImage && (
        <motion.div 
          style={{ y }}
          className="absolute inset-0 hidden md:block"
        >
          <Image
            src={parallaxImage}
            alt="Parallax layer"
            fill
            className="object-cover opacity-60"
          />
        </motion.div>
      )}

      <div className="absolute inset-0 bg-black/50" />

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto px-6"
      >
        <div className="glass-dark p-8 md:p-16 rounded-3xl text-center">
          <motion.blockquote
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl md:text-4xl font-light leading-relaxed mb-6 text-gray-100">
              "{quote}"
            </p>
            {author && (
              <footer className="text-suntory-gold">
                <cite className="not-italic">
                  <span className="text-xl font-bold">{author}</span>
                  {role && <span className="text-lg block mt-1 text-gray-300">{role}</span>}
                </cite>
              </footer>
            )}
          </motion.blockquote>
        </div>
      </motion.div>
    </section>
  );
}