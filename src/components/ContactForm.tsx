'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.24, ease: "easeOut" }
};

export default function ContactForm() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = t('validation.nameRequired');
    } else if (formData.name.trim().length < 2) {
      newErrors.name = t('validation.nameMin');
    } else if (formData.name.trim().length > 100) {
      newErrors.name = t('validation.nameMax');
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = t('validation.emailRequired');
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = t('validation.emailInvalid');
      }
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = t('validation.messageRequired');
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t('validation.messageMin');
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = t('validation.messageMax');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear field error on change
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
              toast.error(t('form.errorGeneric'));
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim()
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        toast.success(result.message || t('form.success'));
      } else {
        toast.error(result.error || t('form.errorSubmit'));
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error(t('form.errorSubmit'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitSuccess(false);
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  if (submitSuccess) {
    return (
      <motion.div {...fadeInUp}>
        <Card className="border-gold/30 bg-blush/20">
          <CardContent className="p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-6"
            >
              <CheckCircle className="w-16 h-16 text-gold mx-auto" />
            </motion.div>
            <h3 className="text-xl font-serif text-brand-text mb-4">
              {t('form.success')}
            </h3>
            <p className="text-brand-text/70 mb-6">
              {t('form.successMessage')}
            </p>
            <Button 
              onClick={resetForm}
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-white"
            >
              {t('form.sendAnother')}
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div {...fadeInUp}>
      <Card className="border-gold/20">
        <CardHeader>
          <CardTitle className="font-serif text-2xl text-brand-text">
            {t('title')}
          </CardTitle>
          <CardDescription className="text-brand-text/70">
            {t('description')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label 
                htmlFor="contact-name" 
                className="text-sm font-medium text-brand-text"
              >
                {t('form.name')} *
              </label>
              <Input
                id="contact-name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder={t('form.namePlaceholder')}
                aria-describedby={errors.name ? "name-error" : undefined}
                aria-invalid={!!errors.name}
                className={`transition-colors ${
                  errors.name 
                    ? 'border-red-500 focus:border-red-500' 
                    : 'border-mauve focus:border-gold'
                }`}
                disabled={isSubmitting}
              />
              {errors.name && (
                <div id="name-error" className="flex items-center gap-2 text-sm text-red-600">
                  <AlertCircle className="w-4 h-4" />
                  {errors.name}
                </div>
              )}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label 
                htmlFor="contact-email" 
                className="text-sm font-medium text-brand-text"
              >
                {t('form.email')} *
              </label>
              <Input
                id="contact-email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder={t('form.emailPlaceholder')}
                aria-describedby={errors.email ? "email-error" : undefined}
                aria-invalid={!!errors.email}
                className={`transition-colors ${
                  errors.email 
                    ? 'border-red-500 focus:border-red-500' 
                    : 'border-mauve focus:border-gold'
                }`}
                disabled={isSubmitting}
              />
              {errors.email && (
                <div id="email-error" className="flex items-center gap-2 text-sm text-red-600">
                  <AlertCircle className="w-4 h-4" />
                  {errors.email}
                </div>
              )}
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label 
                htmlFor="contact-message" 
                className="text-sm font-medium text-brand-text"
              >
                {t('form.message')} *
              </label>
              <Textarea
                id="contact-message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder={t('form.messagePlaceholder')}
                rows={5}
                aria-describedby={errors.message ? "message-error" : undefined}
                aria-invalid={!!errors.message}
                className={`transition-colors resize-none ${
                  errors.message 
                    ? 'border-red-500 focus:border-red-500' 
                    : 'border-mauve focus:border-gold'
                }`}
                disabled={isSubmitting}
              />
              <div className="flex justify-between items-center">
                {errors.message ? (
                  <div id="message-error" className="flex items-center gap-2 text-sm text-red-600">
                    <AlertCircle className="w-4 h-4" />
                    {errors.message}
                  </div>
                ) : (
                  <span></span>
                )}
                <span className="text-xs text-brand-text/50">
                  {formData.message.length}/1000
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gold hover:bg-gold/90 text-white font-medium py-6"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  {t('form.sending')}
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  {t('form.submit')}
                </>
              )}
            </Button>

            <p className="text-xs text-brand-text/60 text-center">
              {t('form.privacyNote')}
            </p>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
