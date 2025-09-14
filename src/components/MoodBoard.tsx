'use client';

import Image from 'next/image';
import homepageData from '@/ai/homepage.json';

export default function MoodBoard() {
  const { moodboard } = homepageData;

  return (
    <section
      aria-labelledby="mood-title"
      className="bg-transparent font-sans pt-14 pb-18 md:pt-16 md:pb-20 lg:pt-18 lg:pb-22"
    >
      {/* Single bleed container for both heading and cards - near-full width with fixed gutters */}
      <div className="w-full max-w-[calc(100vw-64px)] xl:max-w-[calc(100vw-64px)] 2xl:max-w-[calc(100vw-80px)] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-12">
        
        {/* Title & sub - left edge aligned with cards */}
        <div className="mb-8 md:mb-10 lg:mb-10">
          <h2
            id="mood-title"
            className="font-extrabold tracking-tight text-[var(--ink)] leading-[0.95]"
            style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}
          >
            <strong>Iedvesma</strong> sākas šeit
          </h2>

          <p 
            className="mt-4 md:mt-5 font-medium leading-relaxed max-w-prose text-[var(--subtle)]"
            style={{ fontSize: 'clamp(16px, 1.8vw, 18px)' }}
          >
            {moodboard.sub.lv}
          </p>
        </div>

        {/* Cards grid - no additional max-width, uses full bleed container */}
        <div className="grid grid-cols-12 gap-6 md:gap-6 lg:gap-8 items-start">
          
          {/* Left — landscape (with caption below) */}
          <div className="col-span-12 md:col-span-6 lg:col-span-5">
            <div 
              className="relative w-full overflow-hidden rounded-xl shadow-[0_8px_24px_rgba(26,26,26,0.06)] ring-1 ring-black/5 transition-shadow duration-200 hover:shadow-[0_12px_32px_rgba(26,26,26,0.08)]" 
              style={{ height: 'clamp(300px, 24vw, 340px)' }}
            >
              <Image
                src="/images/moodboard/salon_1.jpg"
                alt="Studijas noskaņa - tīra estētika un mierīga vide"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 42vw, (min-width: 768px) 50vw, 100vw"
              />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/35 to-transparent" />
            </div>
            <div className="mt-4">
              <p className="font-medium text-[var(--ink)]" style={{ fontSize: 'clamp(16px, 1.6vw, 18px)' }}>
                {moodboard.left.caption.lv}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-[var(--subtle)]">
                {moodboard.left.supporting.lv}
              </p>
            </div>
          </div>

          {/* Center — tall portrait (no caption) */}
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <div 
              className="relative w-full overflow-hidden rounded-xl shadow-[0_8px_24px_rgba(26,26,26,0.06)] ring-1 ring-black/5 transition-shadow duration-200 hover:shadow-[0_12px_32px_rgba(26,26,26,0.08)]" 
              style={{ height: 'clamp(380px, 32vw, 440px)' }}
            >
              <Image
                src="/images/moodboard/salon_2.jpg"
                alt="Profesionāls skropstu pagarināšanas process studijā"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
              />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/35 to-transparent" />
            </div>
          </div>

          {/* Right — landscape anchored to bottom (with text above) */}
          <div className="col-span-12 md:col-span-12 lg:col-span-4 lg:self-end">
            <div className="mb-4">
              <h3 
                className="font-bold tracking-tight text-[var(--ink)] leading-tight"
                style={{ fontSize: 'clamp(20px, 2.2vw, 28px)' }}
              >
                {moodboard.right.title.lv}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-[var(--subtle)]">
                {moodboard.right.kicker.lv}
              </p>
            </div>
            <div 
              className="relative w-full overflow-hidden rounded-xl shadow-[0_8px_24px_rgba(26,26,26,0.06)] ring-1 ring-black/5 transition-shadow duration-200 hover:shadow-[0_12px_32px_rgba(26,26,26,0.08)]" 
              style={{ height: 'clamp(260px, 22vw, 300px)' }}
            >
              <Image
                src="/images/moodboard/salon_3.jpg"
                alt="Elegants rezultāts - profesionāli pagarinātas skropstas"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/35 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
