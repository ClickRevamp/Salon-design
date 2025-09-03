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
      <Card className="h-full relative overflow-hidden border border-mauve/20 hover:border-gold/30 hover:shadow-card transition-all duration-300 group">
        {isPopular && (
          <div className="absolute top-4 right-4 z-10">
            <Badge className="bg-gold text-white">
              Populārs
            </Badge>
          </div>
        )}
        
        <CardHeader className="pb-4">
          <CardTitle className="font-serif text-xl font-semibold text-brand-text group-hover:text-gold transition-colors">
            {title}
          </CardTitle>
          {description && (
            <CardDescription className="text-brand-text/70 leading-relaxed">
              {description}
            </CardDescription>
          )}
        </CardHeader>
        
        <CardContent className="pt-0 flex flex-col h-full">
          <div className="flex-grow">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center text-sm text-brand-text/60">
                <Clock className="w-4 h-4 mr-1.5" />
                <span>{duration}</span>
              </div>
              <div className="flex items-center text-lg font-semibold text-brand-text">
                <Euro className="w-4 h-4 mr-1" />
                <span>{price}</span>
              </div>
            </div>
          </div>
          
          <Button 
            asChild
            className="w-full rounded-full bg-gold hover:bg-gold/90 text-white font-medium"
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
