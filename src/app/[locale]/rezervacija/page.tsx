import { Metadata } from 'next';
import { Suspense } from 'react';
import BookingFlow from './BookingFlow';

export const metadata: Metadata = {
  title: 'Rezervācija',
  description: 'Rezervējiet savu vizīti Lash Bloom Studio. Izvēlieties pakalpojumu un piemērotu laiku.',
};

export default function BookingPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <p>Ielādē...</p>
      </div>
    }>
      <BookingFlow />
    </Suspense>
  );
}
