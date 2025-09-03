'use client';

import { motion } from 'framer-motion';
import { Shield, Award, MapPin, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Container from '@/components/Container';
import Section from '@/components/Section';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
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

const trustBadges = [
  {
    icon: Shield,
    title: "Sterile & Hygienic",
    description: "Medical-grade sanitization"
  },
  {
    icon: Award,
    title: "Certified Technicians",
    description: "Professionally trained experts"
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description: "Central Riga, easy access"
  },
  {
    icon: Users,
    title: "1000+ Happy Clients",
    description: "5-star satisfaction rate"
  }
];

export default function TrustBar() {
  return (
    <Section spacing="lg" className="bg-white">
      <Container>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
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
                className="flex flex-col items-center text-center p-6 rounded-2xl border border-mauve/20 hover:border-gold/30 hover:shadow-soft transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-4">
                  <Icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-brand-text mb-2">
                  {badge.title}
                </h3>
                <p className="text-sm text-brand-text/70 leading-relaxed">
                  {badge.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.24 }}
        >
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="bg-blush/50 text-brand-text">
              Award Winning
            </Badge>
            <Badge variant="secondary" className="bg-mauve/50 text-brand-text">
              Premium Quality
            </Badge>
            <Badge variant="secondary" className="bg-gold/20 text-brand-text">
              Trusted by 1000+
            </Badge>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
