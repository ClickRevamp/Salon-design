'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Container from '@/components/Container';
import Section from '@/components/Section';

export default function CTABand() {
  const t = useTranslations('cta');

  return (
    <Section spacing="md" className="bg-gradient-to-r from-gold/5 via-blush/5 to-mauve/5 border-y border-gold/20">
      <Container>
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.24, ease: "easeOut" }}
        >
          <div className="text-center lg:text-left">
            <h2 
              className="font-extrabold tracking-tight text-[var(--ink)] leading-tight mb-2"
              style={{ fontSize: 'clamp(28px, 3.6vw, 36px)' }}
            >
              {t('title')}
            </h2>
            <p 
              className="font-medium leading-relaxed text-[var(--subtle)]"
              style={{ fontSize: 'clamp(16px, 1.8vw, 18px)' }}
            >
              {t('subtitle')}
            </p>
          </div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06, duration: 0.24, ease: "easeOut" }}
          >
            <Button 
              size="lg"
              className="rounded-full bg-gold hover:bg-gold/90 text-white px-8 py-6 text-lg font-medium min-w-[180px] group"
            >
              <Calendar className="w-5 h-5 mr-2" />
              {t('book')}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="rounded-full border-2 border-brand-text/20 text-brand-text hover:bg-brand-text/5 px-8 py-6 text-lg font-medium min-w-[180px]"
            >
              Call Us
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Decorative elements */}
        <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-32 h-px bg-gradient-to-r from-transparent to-gold/30" />
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-32 h-px bg-gradient-to-l from-transparent to-gold/30" />
      </Container>
    </Section>
  );
}
