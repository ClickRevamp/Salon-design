import { Metadata } from 'next';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { AlertTriangle, Clock, Shield, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Politika un noteikumi',
  description: 'Lash Bloom Studio politika un noteikumi - atcelšanas noteikumi, privātuma politika un pakalpojumu noteikumi.',
};

export default function PolicyPage() {
  return (
    <div>
      {/* Hero Section */}
      <Section spacing="xl" className="bg-gradient-to-br from-blush/20 via-transparent to-mauve/20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-text mb-6">
              Politika un noteikumi
            </h1>
            <p className="text-xl text-brand-text/70 leading-relaxed">
              Iepazīstieties ar mūsu pakalpojumu noteikumiem, atcelšanas politiku 
              un privātuma aizsardzības principiem.
            </p>
          </div>
        </Container>
      </Section>

      {/* Policies Content */}
      <Section spacing="xl" className="bg-white">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Cancellation Policy */}
            <Card className="border-mauve/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-gold" />
                  <CardTitle className="font-serif text-2xl text-brand-text">
                    Atcelšanas un pārcelšanas noteikumi
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gold/10 rounded-lg p-4">
                  <h3 className="font-semibold text-brand-text mb-2">Svarīgi!</h3>
                  <p className="text-brand-text/80 text-sm">
                    Lūdzu, rūpīgi iepazīstieties ar mūsu atcelšanas noteikumiem, 
                    lai izvairītos no papildu maksājumiem.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-brand-text mb-2">Bezmaksas atcelšana</h4>
                    <p className="text-brand-text/70">
                      Rezervāciju var atcelt bez maksas līdz 24 stundām pirms plānotās vizītes laika. 
                      Atcelšanu var veikt pa tālruni vai rakstot uz e-pastu.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brand-text mb-2">Vēlīna atcelšana</h4>
                    <p className="text-brand-text/70">
                      Par rezervācijas atcelšanu mazāk nekā 24 stundas pirms vizītes 
                      tiek piemērota maksa 50% apmērā no pakalpojuma cenas.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brand-text mb-2">Neierašanās</h4>
                    <p className="text-brand-text/70">
                      Par neierašanos uz rezervēto vizīti bez iepriekšēja brīdinājuma 
                      tiek piemērota maksa 100% apmērā no pakalpojuma cenas.
                    </p>
                  </div>
                </div>
                
                <div className="bg-blush/20 rounded-lg p-4">
                  <p className="text-sm text-brand-text/80">
                    <strong>Kontakti atcelšanai:</strong><br />
                    Tālrunis: +371 20 123 456<br />
                    E-pasts: info@lashbloomstudio.com
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* No-Show Policy */}
            <Card className="border-mauve/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-gold" />
                  <CardTitle className="font-serif text-2xl text-brand-text">
                    Neierašanās politika
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-brand-text/70">
                  Mēs novērtējam jūsu laiku un ceram, ka jūs novērtējat mūsējo. 
                  Neierašanās ietekmē mūsu darba grafiku un citu klientu iespējas.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-brand-text/70">
                      Pirmreizējai neierašanās bez brīdinājuma - brīdinājums un maksa 50%
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-brand-text/70">
                      Atkārtotai neierašanās - maksa 100% un nepieciešams priekšapmaksas
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-brand-text/70">
                      Trešreizēja neierašanās - klienta tiesības uz pakalpojumiem tiek pārtrauktas
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Privacy Policy */}
            <Card className="border-mauve/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-gold" />
                  <CardTitle className="font-serif text-2xl text-brand-text">
                    Privātuma politika
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-brand-text/70">
                  Mēs aizsargājam jūsu personīgo informāciju un izmantojam to tikai 
                  pakalpojumu sniegšanai un komunikācijai ar jums.
                </p>
                
                <div className="bg-porcelain rounded-lg p-6">
                  <h4 className="font-semibold text-brand-text mb-4">Detalizēta privātuma politika</h4>
                  <p className="text-brand-text/70 text-sm mb-4">
                    Pilna privātuma politika ar GDPR atbilstību, datu apstrādes principiem 
                    un klientu tiesībām tiks pievienota šeit.
                  </p>
                  <p className="text-brand-text/60 text-xs">
                    [Juridiskais teksts tiks sagatavots sadarbībā ar juristi]
                  </p>
                </div>
                
                <div className="space-y-2 text-sm text-brand-text/70">
                  <p><strong>Apkopojam:</strong> Vārdu, tālruni, e-pastu rezervāciju vajadzībām</p>
                  <p><strong>Glabājam:</strong> Datus drošos serveros ar šifrēšanu</p>
                  <p><strong>Dalāmies:</strong> Nedalāmies ar trešajām pusēm bez jūsu atļaujas</p>
                  <p><strong>Jūsu tiesības:</strong> Pieprasīt datu dzēšanu vai labošanu</p>
                </div>
              </CardContent>
            </Card>

            {/* Service Terms */}
            <Card className="border-mauve/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-gold" />
                  <CardTitle className="font-serif text-2xl text-brand-text">
                    Pakalpojumu noteikumi
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-brand-text mb-2">Veselības ierobežojumi</h4>
                    <p className="text-brand-text/70 text-sm">
                      Lūdzu, informējiet mūs par acu infekcijām, alerģijām vai citām 
                      veselības problēmām, kas var ietekmēt procedūru.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brand-text mb-2">Procedūru ilgums</h4>
                    <p className="text-brand-text/70 text-sm">
                      Norādītais procedūras ilgums ir orientējošs un var atšķirties 
                      atkarībā no individuālajām īpatnībām.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brand-text mb-2">Rezultātu ilgums</h4>
                    <p className="text-brand-text/70 text-sm">
                      Rezultātu ilgums ir atkarīgs no individuālajām īpatnībām, 
                      aprūpes kvalitātes un dzīvesveida.
                    </p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="text-center">
                  <p className="text-brand-text/60 text-sm">
                    Pilni pakalpojumu noteikumi un lietošanas nosacījumi tiks papildināti.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact for Questions */}
            <div className="text-center bg-gold/10 rounded-xl p-6">
              <h3 className="font-serif text-xl font-semibold text-brand-text mb-2">
                Jautājumi par politiku?
              </h3>
              <p className="text-brand-text/70 mb-4">
                Ja jums ir jautājumi par mūsu noteikumiem, sazinieties ar mums.
              </p>
              <p className="text-brand-text/80">
                <strong>E-pasts:</strong> info@lashbloomstudio.com<br />
                <strong>Tālrunis:</strong> +371 20 123 456
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
