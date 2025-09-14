'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, Euro } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

interface VisualServiceCardProps {
  title: string;
  description?: string;
  duration: string;
  price: string | number;
  image?: string;
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

export default function VisualServiceCard({
  title,
  description,
  duration,
  price,
  image,
  bookingId,
  category: _category,
  isPopular = false,
  className
}: VisualServiceCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const bookingUrl = bookingId ? `/rezervacija?service=${bookingId}` : '/rezervacija';

  // Format price to show Euro symbol
  const formattedPrice = typeof price === 'number' ? `€${price}` : price;

  return (
    <motion.div
      variants={cardVariant}
      className={className}
    >
      <Link href={bookingUrl} className="block group">
        <div className="relative overflow-hidden rounded-xl shadow-[0_8px_24px_rgba(26,26,26,0.06)] hover:shadow-[0_12px_32px_rgba(26,26,26,0.08)] transition-all duration-300 hover:scale-[1.01] bg-[var(--surface)]"
          style={{
            // Responsive heights: ~2.1x taller than original
            minHeight: 'clamp(280px, 60vw, 460px)' // Mobile (1-up): 280-460px
          }}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            {image && !imageError ? (
              <Image
                src={image}
                alt={`${title} - hibrīdā pieaudzēšana, dabisks + apjoma efekts`}
                fill
                className={`object-cover object-center transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            ) : (
              // Fallback gradient background
              <div 
                className="w-full h-full"
                style={{
                  background: 'linear-gradient(135deg, var(--blush) 0%, var(--accent) 100%)'
                }}
              />
            )}
          </div>

          {/* Blur Layer (::before equivalent) - Full height with mask fade */}
          <div 
            className="absolute inset-0"
            style={{
              backdropFilter: 'blur(5px)',
              WebkitBackdropFilter: 'blur(5px)',
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.90) 12%, rgba(0,0,0,0.65) 26%, rgba(0,0,0,0.35) 42%, rgba(0,0,0,0.15) 56%, rgba(0,0,0,0.06) 64%, rgba(0,0,0,0) 72%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.90) 12%, rgba(0,0,0,0.65) 26%, rgba(0,0,0,0.35) 42%, rgba(0,0,0,0.15) 56%, rgba(0,0,0,0.06) 64%, rgba(0,0,0,0) 72%)',
              pointerEvents: 'none',
              zIndex: 1
            }}
          />

          {/* Dark Gradient Layer (::after equivalent) - Stronger top fade */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.74) 8%, rgba(0,0,0,0.60) 18%, rgba(0,0,0,0.38) 34%, rgba(0,0,0,0.18) 50%, rgba(0,0,0,0.08) 60%, rgba(0,0,0,0.00) 72%)',
              pointerEvents: 'none',
              zIndex: 2
            }}
          />

          {/* Popular Badge */}
          {isPopular && (
            <div className="absolute top-4 right-4 z-10">
              <Badge className="bg-[var(--accent)] text-[var(--ink)] border-none shadow-sm">
                Populārs
              </Badge>
            </div>
          )}

          {/* Content Overlay */}
          <div className="absolute inset-0 p-6 flex flex-col justify-start" style={{ zIndex: 3 }}>
            {/* Service Info */}
            <div className="text-white">
              <h3 
                className="font-bold tracking-tight leading-tight mb-3 line-clamp-2"
                style={{ 
                  fontSize: 'clamp(18px, 2.2vw, 24px)',
                  textShadow: '0 1px 1px rgba(0,0,0,0.25)'
                }}
              >
                {title}
              </h3>
              
              {description && (
                <p 
                  className="text-white/90 leading-relaxed mb-4 line-clamp-2"
                  style={{ 
                    fontSize: 'clamp(14px, 1.6vw, 16px)',
                    textShadow: '0 1px 1px rgba(0,0,0,0.2)'
                  }}
                >
                  {description}
                </p>
              )}

              {/* Duration and Price */}
              <div className="flex items-center justify-between">
                <div className="flex items-center text-white/90">
                  <Clock className="w-4 h-4 mr-1.5 flex-shrink-0" style={{ filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.25))' }} />
                  <span style={{ 
                    fontSize: 'clamp(14px, 1.5vw, 16px)',
                    textShadow: '0 1px 1px rgba(0,0,0,0.2)'
                  }}>
                    {duration}
                  </span>
                </div>
                <div className="flex items-center text-white font-semibold">
                  <Euro className="w-4 h-4 mr-1 flex-shrink-0" style={{ filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.25))' }} />
                  <span style={{ 
                    fontSize: 'clamp(16px, 1.8vw, 20px)',
                    textShadow: '0 1px 1px rgba(0,0,0,0.25)'
                  }}>
                    {typeof price === 'number' ? price : formattedPrice.replace('€', '')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
        </div>
      </Link>
    </motion.div>
  );
}
