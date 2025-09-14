'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import VisualServiceCard from '@/components/VisualServiceCard';

interface Service {
  id: string;
  title: string;
  description?: string;
  duration: string;
  price: string | number;
  bookingId?: string;
  isPopular?: boolean;
  image?: string;
}

interface ServiceCategory {
  id: string;
  name: string;
  services: Service[];
}

interface ServicesGridProps {
  categories: ServiceCategory[];
  defaultCategory?: string;
}


export default function ServicesGrid({ 
  categories, 
  defaultCategory 
}: ServicesGridProps) {
  const t = useTranslations('pages.services');
  const defaultTab = defaultCategory || categories[0]?.id;
  const [currentIndices, setCurrentIndices] = useState<{ [key: string]: number }>({});
  const scrollRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Get visible count based on screen size
  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; // Desktop: 3 cards
      if (window.innerWidth >= 768) return 2;  // Tablet: 2 cards
      return 1; // Mobile: 1 card
    }
    return 3; // Default for SSR
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToIndex = (categoryId: string, direction: 'prev' | 'next') => {
    const currentIndex = currentIndices[categoryId] || 0;
    const category = categories.find(cat => cat.id === categoryId);
    if (!category) return;

    const maxIndex = Math.max(0, category.services.length - visibleCount);
    let newIndex = currentIndex;

    if (direction === 'next') {
      newIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
    }

    setCurrentIndices(prev => ({ ...prev, [categoryId]: newIndex }));

    // Smooth scroll to the new position
    const container = scrollRefs.current[categoryId];
    if (container) {
      const cardWidth = container.querySelector('[data-service-card]')?.clientWidth || 0;
      const gap = 24; // 1.5rem gap
      const scrollAmount = newIndex * (cardWidth + gap);
      
      container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, categoryId: string) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      scrollToIndex(categoryId, 'prev');
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      scrollToIndex(categoryId, 'next');
    }
  };

  return (
    <div className="w-full">
      <Tabs defaultValue={defaultTab} className="w-full">
        {/* Centered tabs */}
        <div className="flex justify-center mb-8 md:mb-10">
          <TabsList className="grid max-w-sm bg-[var(--surface)] border border-black/5 shadow-[0_8px_24px_rgba(26,26,26,0.06)] rounded-2xl p-1" style={{
            gridTemplateColumns: `repeat(${categories.length}, minmax(0, 1fr))`
          }}>
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="font-medium text-[var(--subtle)] data-[state=active]:bg-[var(--accent)]/80 data-[state=active]:text-[var(--ink)] data-[state=active]:shadow-sm rounded-xl transition-all duration-200"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-0">
            <div className="relative">
              {/* Navigation Arrows - Only show if more services than visible count */}
              {category.services.length > visibleCount && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[var(--surface)]/95 border border-black/10 shadow-lg hover:bg-[var(--surface)] backdrop-blur-sm rounded-full w-10 h-10"
                    onClick={() => scrollToIndex(category.id, 'prev')}
                    onKeyDown={(e) => handleKeyDown(e, category.id)}
                    aria-label={t('carousel.prev')}
                    tabIndex={0}
                  >
                    <ChevronLeft className="h-4 w-4 text-[var(--ink)]" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[var(--surface)]/95 border border-black/10 shadow-lg hover:bg-[var(--surface)] backdrop-blur-sm rounded-full w-10 h-10"
                    onClick={() => scrollToIndex(category.id, 'next')}
                    onKeyDown={(e) => handleKeyDown(e, category.id)}
                    aria-label={t('carousel.next')}
                    tabIndex={0}
                  >
                    <ChevronRight className="h-4 w-4 text-[var(--ink)]" />
                  </Button>
                </>
              )}

              {/* Services Carousel Container */}
              <div className="overflow-hidden mx-8">
                <div 
                  ref={(el) => { scrollRefs.current[category.id] = el; }}
                  className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
                  style={{
                    scrollSnapType: 'x mandatory',
                    WebkitOverflowScrolling: 'touch',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                  }}
                >
                  {category.services.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.24, delay: index * 0.06, ease: "easeOut" }}
                      className="flex-shrink-0"
                      style={{
                        scrollSnapAlign: 'start',
                        // Responsive card widths based on visible count
                        width: `calc((100% - ${(visibleCount - 1) * 24}px) / ${visibleCount})`,
                        minHeight: 'clamp(280px, 60vw, 460px)'
                      }}
                      data-service-card
                    >
                      <VisualServiceCard
                        title={service.title}
                        description={service.description}
                        duration={service.duration}
                        price={service.price}
                        image={service.image}
                        bookingId={service.bookingId}
                        isPopular={service.isPopular}
                        category={category.name}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {category.services.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-[var(--subtle)] text-lg">
                    {t('comingSoon')}
                  </p>
                </div>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
