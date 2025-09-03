'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Container from '@/components/Container';
import Section from '@/components/Section';
import Stepper from '@/components/Stepper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { Euro, Clock, Shield, Phone } from 'lucide-react';
import { serviceCategories } from '@/data/services';

// Sample masters data
const masters = [
  { id: 'anna', name: 'Anna Bērziņa', specialties: ['classic-lashes', 'volume-lashes', 'brow-shaping'] },
  { id: 'linda', name: 'Linda Ozola', specialties: ['volume-lashes', 'mega-volume', 'brow-lamination'] },
  { id: 'eva', name: 'Eva Liepiņa', specialties: ['classic-lashes', 'lash-lift', 'brow-tinting'] },
];

export default function BookingFlow() {
  const t = useTranslations('booking');
  const searchParams = useSearchParams();
  
  const bookingSteps = [
    { id: 'service', title: t('steps.service'), description: t('steps.serviceDesc') },
    { id: 'master', title: t('steps.master'), description: t('steps.masterDesc') },
    { id: 'time', title: t('steps.time'), description: t('steps.timeDesc') },
  ];
  const pathname = usePathname();
  const router = useRouter();
  
  const [selectedService, setSelectedService] = useState(searchParams.get('service') || '');
  const [selectedMaster, setSelectedMaster] = useState(searchParams.get('master') || '');
  const [iframeLoading, setIframeLoading] = useState(false);

  // Get all services for the select
  const allServices = serviceCategories.flatMap(cat => 
    cat.services.map(service => ({ ...service, category: cat.name }))
  );

  // Filter masters based on selected service
  const availableMasters = selectedService 
    ? masters.filter(master => master.specialties.includes(selectedService))
    : masters;

  // Update URL params when selections change
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    
    if (selectedService) {
      params.set('service', selectedService);
    } else {
      params.delete('service');
    }
    
    if (selectedMaster) {
      params.set('master', selectedMaster);
    } else {
      params.delete('master');
    }

    const newUrl = `${pathname}?${params.toString()}`;
    router.replace(newUrl);
  }, [selectedService, selectedMaster, pathname, router, searchParams]);

  // Determine current step and completed steps
  const getCurrentStep = () => {
    if (!selectedService) return 'service';
    if (!selectedMaster) return 'master';
    return 'time';
  };

  const getCompletedSteps = () => {
    const completed = [];
    if (selectedService) completed.push('service');
    if (selectedMaster) completed.push('master');
    return completed;
  };

  const selectedServiceData = allServices.find(s => s.id === selectedService);

  const handleServiceChange = (serviceId: string) => {
    setSelectedService(serviceId);
    // Reset master if they don't provide the new service
    if (selectedMaster && !masters.find(m => m.id === selectedMaster)?.specialties.includes(serviceId)) {
      setSelectedMaster('');
    }
  };

  const _handleIframeLoad = () => {
    setIframeLoading(false);
  };

  const showBookingEmbed = selectedService && selectedMaster;

  return (
    <div>
      {/* Hero Section */}
      <Section spacing="xl" className="bg-gradient-to-br from-blush/20 via-transparent to-mauve/20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-text mb-6">
              {t('steps.title')}
            </h1>
            <p className="text-xl text-brand-text/70 leading-relaxed">
              {t('steps.description')}
            </p>
          </div>
        </Container>
      </Section>

      {/* Booking Flow */}
      <Section spacing="xl" className="bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Stepper */}
            <Stepper 
              steps={bookingSteps}
              currentStep={getCurrentStep()}
              completedSteps={getCompletedSteps()}
              className="mb-12"
            />

            {/* Selection Forms */}
            <div className="space-y-8">
              {/* Service Selection */}
              <Card className="border-mauve/20">
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-brand-text">
                    {t('form.selectService')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Select value={selectedService} onValueChange={handleServiceChange}>
                    <SelectTrigger className="w-full" aria-label={t('form.selectServicePlaceholder')}>
                      <SelectValue placeholder={t('form.selectServicePlaceholder')} />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceCategories.map(category => (
                        <div key={category.id}>
                          <div className="px-2 py-1.5 text-sm font-semibold text-brand-text bg-porcelain">
                            {category.name}
                          </div>
                          {category.services.map(service => (
                            <SelectItem key={service.id} value={service.id}>
                              <div className="flex items-center justify-between w-full">
                                <span>{service.title}</span>
                                <div className="flex items-center gap-2 ml-4">
                                  <span className="text-sm text-brand-text/60">{service.duration}</span>
                                  <span className="font-semibold text-gold">€{service.price}</span>
                                </div>
                              </div>
                            </SelectItem>
                          ))}
                        </div>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  {selectedServiceData && (
                    <div className="mt-4 p-4 bg-blush/20 rounded-lg">
                      <h4 className="font-semibold text-brand-text mb-2">{selectedServiceData.title}</h4>
                      <p className="text-sm text-brand-text/70 mb-3">{selectedServiceData.description}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-gold" />
                          <span>{selectedServiceData.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Euro className="w-4 h-4 text-gold" />
                          <span className="font-semibold">{selectedServiceData.price}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Master Selection */}
              <Card className={`border-mauve/20 ${!selectedService ? 'opacity-50' : ''}`}>
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-brand-text">
                    {t('form.selectMaster')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Select 
                    value={selectedMaster} 
                    onValueChange={setSelectedMaster}
                    disabled={!selectedService}
                  >
                    <SelectTrigger className="w-full" aria-label={t('form.selectMasterPlaceholder')}>
                      <SelectValue placeholder={
                        selectedService ? t('form.selectMasterPlaceholder') : t('form.selectServiceFirst')
                      } />
                    </SelectTrigger>
                    <SelectContent>
                      {availableMasters.map(master => (
                        <SelectItem key={master.id} value={master.id}>
                          {master.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  {selectedService && (
                    <div className="mt-4">
                      <p className="text-sm text-brand-text/60 mb-2">
                        {t('form.availableMasters')}: {availableMasters.length}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {availableMasters.map(master => (
                          <Badge key={master.id} variant="outline" className="text-xs">
                            {master.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Booking Embed */}
              {showBookingEmbed && (
                <Card className="border-gold/30">
                  <CardHeader>
                                      <CardTitle className="font-serif text-xl text-brand-text">
                    {t('form.selectTime')}
                  </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {iframeLoading && (
                      <div className="space-y-3">
                        <Skeleton className="h-8 w-full" />
                        <Skeleton className="h-40 w-full" />
                        <Skeleton className="h-12 w-1/2" />
                      </div>
                    )}
                    
                    <div className="bg-porcelain rounded-xl p-8 text-center">
                      <p className="text-brand-text/60 mb-4">
                        {t('form.trafftPlaceholder')}
                      </p>
                      <p className="text-sm text-brand-text/50">
                        API: /api/booking-proxy?service={selectedService}&employee={selectedMaster}
                      </p>
                    </div>
                    
                    {/* Hidden iframe for future integration */}
                    {/* <iframe
                      src={`/api/booking-proxy?service=${selectedService}&employee=${selectedMaster}`}
                      className="w-full h-96 border border-mauve/20 rounded-lg"
                      onLoad={handleIframeLoad}
                      title="Booking calendar"
                    /> */}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* Policy Summary */}
      {showBookingEmbed && (
        <Section spacing="lg" className="bg-porcelain">
          <Container>
            <div className="max-w-4xl mx-auto">
              <Card className="border-mauve/20">
                <CardHeader>
                  <CardTitle className="font-serif text-lg text-brand-text">
                    {t('form.policies')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex items-start gap-3">
                      <Euro className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-brand-text text-sm">{t('form.deposit')}</h4>
                        <p className="text-sm text-brand-text/70">{t('form.depositDesc')}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-brand-text text-sm">{t('form.cancellation')}</h4>
                        <p className="text-sm text-brand-text/70">{t('form.cancellationDesc')}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-brand-text text-sm">{t('form.hygiene')}</h4>
                        <p className="text-sm text-brand-text/70">{t('form.hygieneDesc')}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Alternative Contact */}
              <div className="mt-6 text-center">
                <p className="text-brand-text/60 text-sm mb-2">
                  {t('form.callOption')}
                </p>
                <a 
                  href="tel:+37120123456"
                  className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-semibold">+371 20 123 456</span>
                </a>
              </div>
            </div>
          </Container>
        </Section>
      )}
    </div>
  );
}
