// src/components/AsyncCards.tsx
import Container from '@/components/Container';
import Section from '@/components/Section';

export default function AsyncCards() {
  return (
    <Section spacing="xl" className="bg-transparent">
      <Container>
        {/* Eyebrow + Headline */}
        <div className="mb-8 md:mb-10 text-left">
          <span className="inline-block rounded-full bg-[var(--surface)]/70 px-3 py-1 text-sm text-[color:var(--ink)]/70 ring-1 ring-black/5">
            Jūsu skaistums un panākumi
          </span>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl font-bold tracking-tight text-[var(--ink)]">
            Sākas šeit!
          </h2>
          <p className="mt-2 max-w-2xl text-[var(--subtle)]">
            Revitalizējiet ādu, atklājiet savu potenciālu un izbaudiet estētisku vidi.
          </p>
        </div>

        {/* Mosaic grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 items-start">
          {/* LEFT — horizontal (top) */}
          <div className="col-span-12 md:col-span-6 lg:col-span-5">
            <div className="aspect-[4/3] rounded-3xl bg-[var(--blush)] shadow-[0_10px_30px_rgba(26,26,26,0.06)]" />
            <p className="mt-3 text-[var(--subtle)]">
              Revitalizējiet savu ādu mūsu studijā
            </p>
          </div>

          {/* CENTER — vertical (middle) */}
          <div className="col-span-6 md:col-span-3 lg:col-span-3">
            <div className="aspect-[3/4] rounded-3xl bg-[var(--accent)] shadow-[0_10px_30px_rgba(26,26,26,0.06)]" />
          </div>

          {/* RIGHT — horizontal (bottom) */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 lg:col-start-9">
            <p className="mb-3 font-medium text-[var(--ink)]">
              Atklājiet savu skaistuma potenciālu
            </p>
            <div className="aspect-[16/10] rounded-3xl bg-[var(--mocha)] shadow-[0_10px_30px_rgba(26,26,26,0.06)]" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
