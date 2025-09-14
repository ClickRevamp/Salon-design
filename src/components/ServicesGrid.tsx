'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';
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

// const containerVariant = {
//   animate: {
//     transition: {
//       staggerChildren: 0.06
//     }
//   }
// };

// ScrollableServiceRow component for horizontal scrolling
function ScrollableServiceRow({ services, category }: { services: Service[], category: string }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Handle scroll button clicks with infinite scrolling
  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const cardWidth = 320 + 24; // Card width + gap (w-80 = 320px + 24px gap)
    const { scrollLeft, scrollWidth, clientWidth } = container;
    
    if (direction === 'right') {
      // If at the end, scroll back to beginning
      if (scrollLeft >= scrollWidth - clientWidth - 1) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    } else {
      // If at the beginning, scroll to end
      if (scrollLeft <= 0) {
        container.scrollTo({ left: scrollWidth - clientWidth, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative px-12 flex justify-center"> {/* Add padding to make room for buttons and center content */}
      {/* Left scroll button - always visible */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-black/10 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
        onClick={() => scroll('left')}
        aria-label="Scroll left"
      >
        <ChevronLeft className="h-5 w-5 text-[var(--ink)]" />
      </Button>

      {/* Right scroll button - always visible */}
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-black/10 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
        onClick={() => scroll('right')}
        aria-label="Scroll right"
      >
        <ChevronRight className="h-5 w-5 text-[var(--ink)]" />
      </Button>

      {/* Scrollable container - sized to show exactly 3 cards */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          width: 'calc(3 * 320px + 2 * 24px)', // Exactly 3 cards + 2 gaps
          maxWidth: '100%'
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.24, delay: index * 0.06, ease: "easeOut" }}
            className="flex-shrink-0 w-80 min-w-80 snap-center"
          >
            <VisualServiceCard
              title={service.title}
              description={service.description}
              duration={service.duration}
              price={service.price}
              image={service.image}
              bookingId={service.bookingId}
              isPopular={service.isPopular}
              category={category}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function ServicesGrid({ 
  categories, 
  defaultCategory 
}: ServicesGridProps) {
  const t = useTranslations('pages.services');
  const defaultTab = defaultCategory || categories[0]?.id;

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
            {category.services.length > 0 ? (
              <ScrollableServiceRow 
                services={category.services} 
                category={category.name} 
              />
            ) : (
              <div className="text-center py-12">
                <p className="text-[var(--subtle)] text-lg">
                  {t('comingSoon')}
                </p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
