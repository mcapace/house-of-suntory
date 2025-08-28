"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 glass-dark p-4"
      >
        <Image 
          src="/images/WAlogoBL.png" 
          alt="Whisky Advocate Logo" 
          width={150} 
          height={50} 
          className="h-12 w-auto"
        />
      </motion.header>
      
      <div className="relative h-screen overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <picture>
            <source srcSet="/images/Header-mobile.png" media="(max-width: 767px)" />
            <source srcSet="/images/Header.png" media="(min-width: 768px)" />
            <Image 
              src="/images/Header.png" 
              alt="Header Image" 
              fill
              className="object-cover"
              priority
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
        </motion.div>
        
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative h-full flex items-center justify-center text-center px-4 md:px-6"
        >
          <div className="glass p-6 md:p-12 rounded-2xl md:rounded-3xl backdrop-blur-xl max-w-4xl w-full">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 text-glow gold-gradient bg-clip-text text-transparent">
              THE HOUSE OF SUNTORY
            </h1>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl tracking-widest text-gray-200">
              CRAFTED IN JAPAN, DEFINED BY AUTHENTICITY
            </h3>
          </div>
        </motion.div>
      </div>
    </>
  );
}