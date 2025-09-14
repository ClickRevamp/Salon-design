'use client';

import { motion } from 'framer-motion';
import { Shield, Award, MapPin, Star } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.24, ease: "easeOut" }
};

const hoverCard = {
  hover: {
    y: -1,
    transition: { duration: 0.2, ease: "easeOut" }
  }
};

const iconScale = {
  hover: {
    scale: 1.03,
    transition: { duration: 0.2, ease: "easeOut" }
  }
};

// Reduced motion variants
const reducedMotionHoverCard = {
  hover: {
    transition: { duration: 0 }
  }
};

const reducedMotionIconScale = {
  hover: {
    transition: { duration: 0 }
  }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.06
    }
  }
};


// Simplified trust badges with new Latvian titles
const trustBadges = [
  {
    icon: Shield,
    title: "Sterilitāte un higiēna"
  },
  {
    icon: Award,
    title: "Sertificēti meistari"
  },
  {
    icon: MapPin,
    title: "Ērta atrašanās vieta"
  },
  {
    icon: Star,
    title: "1000+ laimīgi klienti"
  }
];

export default function TrustBar() {
  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  return (
    <section className="bg-transparent pt-12 pb-16 md:pt-14 md:pb-18 lg:pt-16 lg:pb-20">
      {/* Same bleed container as MoodBoard/Services */}
      <div className="w-full max-w-[calc(100vw-64px)] xl:max-w-[calc(100vw-64px)] 2xl:max-w-[calc(100vw-80px)] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-12">
        
        {/* Inner narrower container for centered badges */}
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
          {trustBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover="hover"
                className="flex flex-col items-center justify-center text-center py-6 px-4 md:py-7 md:px-5 bg-[var(--surface)] border border-black/5 shadow-[0_6px_20px_rgba(26,26,26,0.05)] ring-1 ring-black/5 hover:shadow-[0_10px_28px_rgba(26,26,26,0.07)] transition-all duration-200 rounded-xl"
              >
                <motion.div 
                  variants={prefersReducedMotion ? reducedMotionHoverCard : hoverCard}
                  className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[var(--blush)]/12 mb-4"
                >
                  <motion.div variants={prefersReducedMotion ? reducedMotionIconScale : iconScale}>
                    <Icon 
                      className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[var(--accent)]" 
                      style={{ opacity: 0.85 }} 
                      aria-hidden="true"
                    />
                  </motion.div>
                </motion.div>
                <h3 className="font-bold tracking-tight text-[var(--ink)]" style={{ fontSize: 'clamp(16px, 1.8vw, 18px)' }}>
                  {badge.title}
                </h3>
              </motion.div>
            );
          })}
          </motion.div>
          
          <motion.div 
            className="mt-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.24 }}
          >
            <div className="flex flex-wrap justify-center gap-3">
              <span className="chip text-xs bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-[var(--ink)]">
                Balvu ieguvēji
              </span>
              <span className="chip text-xs bg-[var(--mocha)]/10 border border-[var(--mocha)]/20 text-[var(--ink)]">
                Premium kvalitāte
              </span>
              <span className="chip text-xs bg-[var(--blush)]/30 border border-[var(--blush)]/40 text-[var(--ink)]">
                1000+ uzticas
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
