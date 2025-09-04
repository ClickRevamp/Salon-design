'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import homepageData from '@/ai/homepage.json';
import themeData from '@/ai/theme.json';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Helper function to render headline with emphasis markup
const renderHeadline = (text: string) => {
  const parts = text.split(/(\{[^}]+\})/);
  
  return parts.map((part, index) => {
    if (part.startsWith('{') && part.endsWith('}')) {
      // Remove braces and render as strong
      const content = part.slice(1, -1);
      return <strong key={index}>{content}</strong>;
    }
    return part;
  });
};

export default function Hero() {
  const { hero } = homepageData;

  return (
    <section 
      className="relative isolate overflow-hidden mx-3 sm:mx-4 md:mx-6 lg:mx-8 mb-10 md:mb-16 rounded-b-[28px] md:rounded-b-[40px] border border-black/5 shadow-[0_10px_35px_rgba(26,26,26,0.06)] min-h-[70vh] md:min-h-[72vh] pt-[calc(var(--header-h,72px)+24px)] md:pt-[calc(var(--header-h,72px)+40px)]"
      style={{ background: themeData.gradients.hero }}
    >
      {/* Noise Overlay */}
      {hero.overlays?.noise && (
        <div className="noise absolute inset-0" />
      )}

      <div className="relative px-4 sm:px-5 md:pl-8 lg:pl-12 pr-4 md:pr-10">
        <div className="grid md:grid-cols-12 gap-6 md:gap-8">
          {/* Content Column */}
          <motion.div 
            className="md:col-start-1 md:col-span-6 lg:col-span-5 py-14 md:py-20 space-y-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeInUp}>
              <span className="chip text-sm font-medium">
                {hero.eyebrow.lv}
              </span>
            </motion.div>

            {/* Headline with emphasis */}
            <motion.h1 
              variants={fadeInUp}
              className="display-hero text-[var(--ink)] max-w-[16ch]"
            >
              {renderHeadline(hero.headline.lv)}
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              variants={fadeInUp}
              className="text-[var(--subtle)] leading-relaxed max-w-prose mt-4 md:mt-6"
              style={{ fontSize: 'clamp(16px, 2vw, 20px)' }}
            >
              {hero.subheadline.lv}
            </motion.p>

            {/* CTAs */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3 mt-6"
            >
              <Link 
                href={hero.primaryCta.href}
                className="btn-primary text-center"
                aria-label={`${hero.primaryCta.lv} - Pierakstīties uz vizīti`}
              >
                {hero.primaryCta.lv}
              </Link>
              <Link 
                href={hero.secondaryCta.href}
                className="btn-ghost text-center"
                aria-label={`${hero.secondaryCta.lv} - Uzzināt vairāk par mūsu pakalpojumiem`}
              >
                {hero.secondaryCta.lv}
              </Link>
            </motion.div>

            {/* Trust Chips */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap gap-3 mt-6"
            >
              {hero.trustChips.map((chip, index) => (
                <span key={index} className="chip text-xs">
                  {chip.lv}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Decorative Empty Column - Preserves rhythm on desktop */}
          <div className="hidden md:block md:col-span-6 lg:col-span-7" />
        </div>
      </div>
    </section>
  );
}