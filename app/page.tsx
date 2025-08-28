"use client";

import Header from "@/components/Header";
import Section from "@/components/Section";
import QuoteSection from "@/components/QuoteSection";
import BottleShowcase from "@/components/BottleShowcase";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      <Section
        title="CRAFTED IN JAPAN"
        subtitle="REVERED AROUND THE WORLD"
        image="/images/image1.png"
        imageAlt="Man pouring whisky from barrel"
        content={
          <>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              From Suntory's iconic distilleries to the hands of America's top
              bartenders, the spirit of Japanese whisky is reaching further—and
              resonating deeper—than ever before. Its rise isn't about volume or
              spectacle, but about precision, beauty, and the philosophy behind the
              pour. This is the story of a category seeking to reclaim its authenticity. Of
              a craft shaped by discipline. And of a bar culture transformed by quiet
              influence.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              We explore how The House of Suntory—Japan's founding whisky
              house—has led this movement. From the standards that protect the
              liquid, to the craftsmanship that defines it, to the cultural exchange it
              inspires behind the bar.
            </p>
          </>
        }
      />

      <QuoteSection
        quote="Here, every detail matters. The ice shape, shake method, temperature. Every choice serves purpose, creating one drink that's unique and refined."
        author="Shingo Gokan"
        role="One of Japan's most acclaimed bartenders"
        desktopImage="/images/image2-quote-desktop.png"
        mobileImage="/images/image2-quote-mobile.png"
        parallaxImage="/images/image2-quote-desktop-parallaxv2.png"
      />

      <Section
        title="WHAT MAKES A WHISKY TRULY JAPANESE"
        subtitle="THE QUIET ASCENT OF JAPANESE WHISKY"
        image="/images/image3.png"
        imageAlt="Japanese whisky making process"
        reversed
        content={
          <>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              With global demand came global confusion—blurring the lines between
              what's truly made in Japan and what merely bears the name. As acclaim
              grew, so did imitation as misleading labels entered the market—some
              made with imported distillate or based on koji fermentation. With no
              clear regulations, trust eroded. The soul of Japanese whisky was no
              longer guaranteed—and its future called for protection.
            </p>
            <h4 className="text-2xl font-bold mb-4 text-suntory-gold">
              Suntory's Leadership and the New Standards
            </h4>
            <p className="text-lg md:text-xl leading-relaxed">
              To protect the future, Suntory helped establish the Japanese Spirits &
              Liqueurs Makers Association (JSLMA) standards in 2021. These define
              authentic Japanese whisky: made entirely in Japan from malted grains,
              aged for at least three years, and bottled at a minimum 40% ABV. It's not
              just a standard—it's a recommitment to craft.
            </p>
          </>
        }
      />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <picture>
            <source srcSet="/images/image4-mobile.png" media="(max-width: 767px)" />
            <source srcSet="/images/image4-parallax.png" media="(min-width: 768px)" />
            <img 
              src="/images/image4-parallax.png" 
              alt="House of Suntory distillery" 
              className="w-full h-full object-cover"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-5xl mx-auto px-6"
        >
          <div className="glass-dark p-8 md:p-12 rounded-3xl">
            <p className="text-xl md:text-2xl leading-relaxed text-gray-100">
              Authenticity is not origin alone—it is process, philosophy, and purpose. 
              The House of Suntory is built on three pillars of Japanese culture: 
              <span className="text-suntory-gold font-bold"> Wa</span>, harmony with Japanese people, nature and culture; 
              <span className="text-suntory-gold font-bold"> Monozukuri</span>, the tradition of Japanese craftsmanship; and 
              <span className="text-suntory-gold font-bold"> Omotenashi</span>, the sharing of authentic Japanese experiences. 
              Every detail is shaped with intention, precision, and respect for nature, 
              evolving into an artistry designed to endure.
            </p>
          </div>
        </motion.div>
      </section>

      <BottleShowcase />

      <Section
        title="FROM DISTILLERY TO BAR"
        subtitle="WHERE CRAFT BECOMES CULTURE"
        image="/images/image5.png"
        imageAlt="Suntory Yamazaki distillery"
        content={
          <p className="text-lg md:text-xl leading-relaxed">
            The same values that define The House of Suntory's whisky-making—
            discipline, balance, restraint—have helped usher in a new era of cocktail 
            culture. American bartenders are deepening their craft through Japanese 
            techniques—finding new inspiration in a philosophy that shares their same 
            commitment to care and precision. What began in the distillery has traveled 
            behind the bar, evolving into a cultural exchange where the craft of Japanese 
            whisky and the artistry of Japanese bartending meet, influence, and elevate 
            one another.
          </p>
        }
      />

      <QuoteSection
        quote="A great cocktail should transport the guest—creating extraordinary moments that linger between dreams and reality. That's my craft."
        author="Tatsuya Yoshida"
        role="Bar Rondo, Tokyo"
        desktopImage="/images/image6-quote-desktop.png"
        mobileImage="/images/image6-quote-mobile.png"
        parallaxImage="/images/image6-quote-desktop-parallax.png"
      />

      <Section
        title="THE RISE OF JAPANESE BARTENDING"
        image="/images/image7.png"
        imageAlt="Shaving ice"
        reversed
        content={
          <>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              The cocktail may have been born in America, but its evolution has found 
              new depth behind Japanese bars—and now, across the world. Since the early 
              days of the cocktail revival, Japanese bartending has captured the 
              imagination of American bartenders and patrons alike. Japanese bartending, 
              long admired for its precision and detail, has become a point of connection 
              and creative exchange among bartenders around the world. This cultural 
              allure mirrors a broader American obsession with Japanese aesthetics—from 
              the tea ceremony to the skills of the itamae or master sushi chef—where 
              discipline becomes art, and every gesture matters.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              Today, these shared values are showing up across cocktail culture—from 
              Tokyo to New York—where hospitality is treated as an art form. At the 
              heart of this movement is a deep respect for beauty, precision, and the 
              kind of craftsmanship long championed by The House of Suntory.
            </p>
          </>
        }
      />

      <QuoteSection
        quote="Japanese bartending is like a tea ceremony: quiet, precise, and deeply personal. From carving ice to stirring a highball, every gesture is intentional—crafted to honor one guest in one perfect moment."
        author="Shintaro Eleazar Tozzo"
        role="Bar Moga, New York"
        desktopImage="/images/image8-quote-desktop.png"
        mobileImage="/images/image8-quote-mobile.png"
        parallaxImage="/images/image8-quote-desktop-parallax.png"
      />

      <Footer />
    </main>
  );
}