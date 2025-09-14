// Demo data structure - will be replaced with CMS data
export const serviceCategories = [
  {
    id: 'skropstas',
    name: 'Skropstas',
    services: [
      {
        id: 'classic-lashes',
        title: 'Klasiskā skropstu pieaudzēšana',
        description: 'Dabiski skaistas skropstas ar vienu mākslīgo skropstu uz katras dabiskās.',
        duration: '2-2.5h',
        price: '45',
        bookingId: 'classic-lashes',
        isPopular: true,
        image: '/images/services/klasiska-3x2.jpg'
      },
      {
        id: 'wet-effect-lashes',
        title: 'Slapjā efekta skropstu pieaudzēšana',
        description: 'Moderns slapjais efekts, kas rada izskatu, it kā skropstas būtu nedaudz mitras.',
        duration: '2.5-3h',
        price: '50',
        bookingId: 'wet-effect-lashes',
        image: '/images/services/slapja-efekta-3x2.jpg'
      },
      {
        id: 'hybrid-lashes',
        title: 'Hibrīdā skropstu pieaudzēšana',
        description: 'Perfekts balanss starp klasiku un apjomu dabiskam, bet izteiktam rezultātam.',
        duration: '2.5-3h',
        price: '50',
        bookingId: 'hybrid-lashes',
        isPopular: true,
        image: '/images/services/hibirida-3x2.jpg'
      },
      {
        id: 'volume-lashes',
        title: 'Apjoma skropstu pieaudzēšana',
        description: 'Dramatisks izskats ar vairākām plānām skropstām uz katras dabiskās.',
        duration: '2.5-3h',
        price: '50',
        bookingId: 'volume-lashes',
        image: '/images/services/apjoma-3x2.jpg'
      },
      {
        id: 'mega-volume',
        title: 'Mega apjoma skropstu pieaudzēšana',
        description: 'Maksimāls apjoms un blīvums īpaši svētku reizēm.',
        duration: '3-3.5h',
        price: '55',
        bookingId: 'mega-volume',
        image: '/images/services/mega-apjoma-3x2.jpg'
      },
      {
        id: 'classic-refill',
        title: 'Klasisko skropstu uzpilde',
        description: 'Klasisko skropstu papildināšana 2-3 nedēļu laikā.',
        duration: '1.5-2h',
        price: '35',
        bookingId: 'classic-refill',
        image: '/images/services/klasiska-3x2.jpg'
      },
      {
        id: 'wet-effect-refill',
        title: 'Slapjā efekta skropstu uzpilde',
        description: 'Slapjā efekta skropstu papildināšana un atjaunošana.',
        duration: '1.5-2h',
        price: '40',
        bookingId: 'wet-effect-refill',
        image: '/images/services/slapja-efekta-3x2.jpg'
      },
      {
        id: 'hybrid-refill',
        title: 'Hibrīdā efekta skropstu uzpilde',
        description: 'Hibrīdo skropstu papildināšana un korekcija.',
        duration: '1.5-2h',
        price: '40',
        bookingId: 'hybrid-refill',
        image: '/images/services/hibirida-3x2.jpg'
      },
      {
        id: 'volume-refill',
        title: 'Apjoma skropstu uzpilde',
        description: 'Apjoma skropstu papildināšana un atjaunošana.',
        duration: '1.5-2h',
        price: '40',
        bookingId: 'volume-refill',
        image: '/images/services/apjoma-3x2.jpg'
      },
      {
        id: 'mega-volume-refill',
        title: 'Mega apjoma skropstu uzpilde',
        description: 'Mega apjoma skropstu papildināšana un korekcija.',
        duration: '1.5-2h',
        price: '45',
        bookingId: 'mega-volume-refill',
        image: '/images/services/mega-apjoma-3x2.jpg'
      },
      {
        id: 'lash-lamination',
        title: 'Skropstu laminēšana/krāsošana',
        description: 'Dabisku skropstu pacēlums, laminēšana un krāsošana bez mākslīgajām.',
        duration: '1.5h',
        price: '45',
        bookingId: 'lash-lamination',
        image: '/images/services/nonemsana-3x2.jpg'
      },
      {
        id: 'lash-removal-only',
        title: 'Tikai skropstu noņemšana (bez pieaudzēšanas)',
        description: 'Profesionāla skropstu noņemšana bez jaunas pieaudzēšanas.',
        duration: '30min',
        price: '5',
        bookingId: 'lash-removal-only',
        image: '/images/services/nonemsana-cits-3x2.jpg'
      },
      {
        id: 'lash-removal-other',
        title: 'Skropstu noņemšana, ja tās pieaudzētas pie cita meistara',
        description: 'Sarežģītāka skropstu noņemšana, ja tās pieaudzētas citur.',
        duration: '30-45min',
        price: '5-10',
        bookingId: 'lash-removal-other',
        image: '/images/services/nonemsana-cits-3x2.jpg'
      }
    ]
  },
  {
    id: 'uzacis',
    name: 'Uzacis',
    services: [
      {
        id: 'brow-lamination-tinting-correction',
        title: 'Uzacu laminēšana/krāsošana/korekcija',
        description: 'Pilns uzacu komplekss ar laminēšanu, krāsošanu un formas korekciju.',
        duration: '1-1.5h',
        price: '40',
        bookingId: 'brow-lamination-tinting-correction',
        isPopular: true,
        image: '/images/services/klasiska-3x2.jpg'
      },
      {
        id: 'brow-lamination-correction',
        title: 'Uzacu laminēšana/korekcija',
        description: 'Uzacu laminēšana ar formas korekciju bez krāsošanas.',
        duration: '1h',
        price: '35',
        bookingId: 'brow-lamination-correction',
        image: '/images/services/hibirida-3x2.jpg'
      },
      {
        id: 'brow-lash-complex',
        title: 'Uzacu/skropstu laminēšanas komplekss',
        description: 'Ekonomisks komplekss - gan uzacu, gan skropstu laminēšana vienā vizītē.',
        duration: '2-2.5h',
        price: '75',
        bookingId: 'brow-lash-complex',
        isPopular: true,
        image: '/images/services/apjoma-3x2.jpg'
      },
      {
        id: 'brow-tinting',
        title: 'Uzacu krāsošana',
        description: 'Uzacu krāsošana ar ilgnoturīgu krāsu.',
        duration: '30min',
        price: '20',
        bookingId: 'brow-tinting',
        image: '/images/services/hibirida-3x2.jpg'
      },
      {
        id: 'brow-correction',
        title: 'Uzacu korekcija',
        description: 'Uzacu formas korekcija un veidošana.',
        duration: '30min',
        price: '15',
        bookingId: 'brow-correction',
        image: '/images/services/klasiska-3x2.jpg'
      },
      {
        id: 'brow-correction-tinting',
        title: 'Uzacu korekcija/krāsošana',
        description: 'Uzacu formas korekcija ar krāsošanu.',
        duration: '45min',
        price: '30',
        bookingId: 'brow-correction-tinting',
        image: '/images/services/mega-apjoma-3x2.jpg'
      }
    ]
  }
];
