'use client';

import Link from 'next/link';
import { Mail, PenTool, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CTAItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  action: {
    label: string;
    href: string;
    variant?: 'default' | 'outline';
  };
}

const ctaItems: CTAItem[] = [
  {
    icon: Mail,
    title: 'Uzrakstiet mums',
    description: 'Uzdodiet jautājumus par pakalpojumiem vai rezervējiet laiku.',
    action: {
      label: 'Sūtīt e-pastu',
      href: 'mailto:info@lashbloomstudio.com',
      variant: 'outline'
    }
  },
  {
    icon: PenTool,
    title: 'Pierakstieties online',
    description: 'Ērti rezervējiet laiku mūsu online rezervācijas sistēmā.',
    action: {
      label: 'Pierakstīties tagad',
      href: '/rezervacija',
      variant: 'default'
    }
  },
  {
    icon: Phone,
    title: 'Zvaniet mums',
    description: 'Sazinieties ar mums tieši pa telefonu konsultācijām.',
    action: {
      label: 'Zvanīt',
      href: 'tel:+37120123456',
      variant: 'outline'
    }
  }
];

export default function FooterCTA() {
  return (
    <section className="py-10 sm:py-12">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="rounded-3xl bg-[var(--blush)] ring-1 ring-black/5 shadow-lg p-8 sm:p-10">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10">
            <h2
              className="font-extrabold tracking-tight text-[var(--ink)] leading-tight mb-3"
              style={{ fontSize: 'clamp(28px, 3.6vw, 36px)' }}
            >
              Sāciet savu skaistuma ceļojumu
            </h2>
            <p
              className="text-[var(--subtle)] leading-relaxed max-w-2xl mx-auto"
              style={{ fontSize: 'clamp(16px, 1.8vw, 18px)' }}
            >
              Izvēlieties sev ērtāko veidu, kā ar mums sazināties
            </p>
          </div>

          {/* CTA Items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {ctaItems.map((item, index) => {
              const Icon = item.icon;
              const isEmail = item.action.href.startsWith('mailto:');
              const isTel = item.action.href.startsWith('tel:');
              
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20"
                >
                  {/* Icon Badge */}
                  <div className="size-12 sm:size-14 rounded-full ring-1 ring-black/10 bg-white/70 backdrop-blur flex items-center justify-center shadow-sm">
                    <Icon 
                      className="w-6 h-6 sm:w-7 sm:h-7 text-[var(--accent)]" 
                      aria-hidden="true"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3
                      className="font-extrabold tracking-tight text-[var(--ink)]"
                      style={{ fontSize: 'clamp(18px, 2vw, 20px)' }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-[var(--subtle)] leading-relaxed"
                      style={{ fontSize: 'clamp(14px, 1.6vw, 16px)' }}
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Action Button */}
                  {isEmail || isTel ? (
                    <a href={item.action.href}>
                      <Button
                        variant={item.action.variant}
                        size="sm"
                        className={cn(
                          "font-medium transition-all duration-200",
                          item.action.variant === 'default' 
                            ? "bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white shadow-sm" 
                            : "border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
                        )}
                      >
                        {item.action.label}
                      </Button>
                    </a>
                  ) : (
                    <Link href={item.action.href}>
                      <Button
                        variant={item.action.variant}
                        size="sm"
                        className={cn(
                          "font-medium transition-all duration-200",
                          item.action.variant === 'default' 
                            ? "bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white shadow-sm" 
                            : "border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
                        )}
                      >
                        {item.action.label}
                      </Button>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
