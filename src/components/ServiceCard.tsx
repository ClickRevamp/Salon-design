'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, Euro } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ServiceCardProps {
  title: string;
  description?: string;
  duration: string;
  price: string;
  bookingId?: string;
  category?: string;
  isPopular?: boolean;
  className?: string;
}

const cardVariant = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.24, ease: "easeOut" }
};

export default function ServiceCard({
  title,
  description,
  duration,
  price,
  bookingId,
  category: _category,
  isPopular = false,
  className
}: ServiceCardProps) {
  const bookingUrl = bookingId ? `/rezervacija?service=${bookingId}` : '/rezervacija';

  return (
    <motion.div
      variants={cardVariant}
      className={className}
    >
      <Card className="h-full relative overflow-hidden bg-[var(--surface)] border border-black/5 shadow-[0_8px_24px_rgba(26,26,26,0.06)] ring-1 ring-black/5 hover:shadow-[0_12px_32px_rgba(26,26,26,0.08)] transition-all duration-200 group rounded-xl">
        {isPopular && (
          <div className="absolute top-4 right-4 z-10">
            <Badge className="bg-[var(--accent)] text-[var(--ink)] border-none">
              Populārs
            </Badge>
          </div>
        )}
        
        <CardHeader className="pb-4">
          <CardTitle className="font-bold tracking-tight text-[var(--ink)] group-hover:text-[var(--mocha)] transition-colors" style={{ fontSize: 'clamp(18px, 2vw, 22px)' }}>
            {title}
          </CardTitle>
          {description && (
            <CardDescription className="text-[var(--subtle)] leading-relaxed mt-1">
              {description}
            </CardDescription>
          )}
        </CardHeader>
        
        <CardContent className="pt-0 flex flex-col h-full">
          <div className="flex-grow">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center text-sm text-[var(--subtle)]">
                <Clock className="w-4 h-4 mr-1.5" />
                <span>{duration}</span>
              </div>
              <div className="flex items-center text-lg font-semibold text-[var(--ink)]">
                <Euro className="w-4 h-4 mr-1" />
                <span>{price}</span>
              </div>
            </div>
          </div>
          
          <Button 
            asChild
            className="w-full rounded-full bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-[var(--ink)] font-medium border border-black/5 hover:shadow-sm transition-all duration-200"
          >
            <Link href={bookingUrl}>
              Rezervēt
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
