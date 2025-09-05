'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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

const containerVariant = {
  animate: {
    transition: {
      staggerChildren: 0.06
    }
  }
};

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
            {/* Centered Grid Layout */}
            <motion.div
              variants={containerVariant}
              initial="initial"
              animate="animate"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center mx-auto"
            >
              {category.services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.24, delay: index * 0.06, ease: "easeOut" }}
                  className="w-full max-w-sm"
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
            </motion.div>

            {category.services.length === 0 && (
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
