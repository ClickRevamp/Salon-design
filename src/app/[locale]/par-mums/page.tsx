'use client';

import { useTranslations } from 'next-intl';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  const t = useTranslations('pages.about');
  return (
    <div>
      {/* Hero Section */}
      <Section spacing="xl" className="bg-gradient-to-br from-blush/20 via-transparent to-mauve/20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-text mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-brand-text/70 leading-relaxed">
              {t('description')}
            </p>
          </div>
        </Container>
      </Section>

      {/* Story Section */}
      <Section spacing="xl" className="bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-brand-text mb-6">
                Mūsu stāsts
              </h2>
              <div className="space-y-4 text-brand-text/80 leading-relaxed">
                <p>
                  Lash Bloom Studio tika dibināts ar vīziju radīt vietu, kur katrs klients 
                  var izjust īpašu aprūpi un profesionalitāti augstākajā līmenī.
                </p>
                <p>
                  Mūsu komanda ir apmācīta pēc starptautiskajiem standartiem un regulāri 
                  pilnveido savas prasmes, lai jums piedāvātu vismodernākos un drošākos 
                  skaistumkopšanas risinājumus.
                </p>
                <p>
                  Mēs ticam, ka katram cilvēkam ir tiesības justies skaistam un pārliecinātam 
                  par sevi, un tieši to mēs palīdzam sasniegt ar saviem pakalpojumiem.
                </p>
              </div>
            </div>
            <div className="bg-grain bg-porcelain rounded-2xl h-96 flex items-center justify-center">
              <p className="text-brand-text/60">Studio foto (pievienot vēlāk)</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section spacing="xl" className="bg-porcelain">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-brand-text mb-4">
              Mūsu vērtības
            </h2>
            <p className="text-lg text-brand-text/70 max-w-2xl mx-auto">
              Principi, kas vada mūsu darbu un attiecības ar klientiem.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-mauve/20">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-brand-text">
                  Kvalitāte
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-text/70">
                  Izmantojam tikai augstākās kvalitātes materiālus un aprīkojumu, 
                  lai garantētu izcilus rezultātus.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-mauve/20">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-brand-text">
                  Higiēna
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-text/70">
                  Stingri ievērojam medicīniskos higiēnas standartus un 
                  sterilizācijas protokolus katra klienta drošībai.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-mauve/20">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-brand-text">
                  Individuāla pieeja
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-text/70">
                  Katram klientam pielāgojam pakalpojumus, ņemot vērā 
                  viņa vēlmes, dzīvesveidu un dabisko skaistumu.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Studio Images Section */}
      <Section spacing="xl" className="bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-brand-text mb-4">
              Mūsu studija
            </h2>
            <p className="text-lg text-brand-text/70 max-w-2xl mx-auto">
              Mūsdienīga un eleganta vide, kas radīta jūsu komfortam un relaksācijai.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div 
                key={item}
                className="bg-grain bg-porcelain rounded-xl h-64 flex items-center justify-center"
              >
                <p className="text-brand-text/60">Studio foto {item}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
