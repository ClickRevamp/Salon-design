'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Container from '@/components/Container';
import Section from '@/components/Section';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.24, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.06
    }
  }
};

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <Section spacing="2xl" className="relative overflow-hidden">
      {/* Background with grain texture */}
      <div className="absolute inset-0 bg-grain bg-porcelain" />
      <div className="absolute inset-0 bg-gradient-to-br from-blush/20 via-transparent to-mauve/20" />
      
      {/* Content */}
      <Container className="relative">
        <motion.div 
          className="mx-auto max-w-4xl text-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h1 
            variants={fadeInUp}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-brand-text leading-tight"
          >
            {t('title')}
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="mt-6 text-xl md:text-2xl text-brand-text/70 leading-relaxed max-w-2xl mx-auto"
          >
            {t('subtitle')}. {t('description')}.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg"
              className="rounded-full bg-gold hover:bg-gold/90 text-white px-8 py-6 text-lg font-medium min-w-[200px]"
            >
              {t('cta')}
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="rounded-full border-2 border-gold text-gold hover:bg-gold/10 px-8 py-6 text-lg font-medium min-w-[200px]"
            >
              {t('secondary')}
            </Button>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="mt-12 text-sm text-brand-text/60"
          >
            <p>✨ {t('features')}</p>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
