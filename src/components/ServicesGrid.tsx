'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ServiceCard from '@/components/ServiceCard';

interface Service {
  id: string;
  title: string;
  description?: string;
  duration: string;
  price: string;
  bookingId?: string;
  isPopular?: boolean;
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
        <TabsList className="grid w-full max-w-md mx-auto mb-8" style={{
          gridTemplateColumns: `repeat(${categories.length}, minmax(0, 1fr))`
        }}>
          {categories.map((category) => (
            <TabsTrigger 
              key={category.id} 
              value={category.id}
              className="font-medium"
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-0">
            <motion.div
              variants={containerVariant}
              initial="initial"
              animate="animate"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {category.services.map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  duration={service.duration}
                  price={service.price}
                  bookingId={service.bookingId}
                  isPopular={service.isPopular}
                  category={category.name}
                />
              ))}
            </motion.div>

            {category.services.length === 0 && (
              <div className="text-center py-12">
                <p className="text-brand-text/60 text-lg">
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
