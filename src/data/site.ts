// Zentrale Firmendaten. Alles mit PLATZHALTER vor Livegang durch echte Angaben ersetzen.

export const company = {
  name: 'VZ Projects Solar GmbH',
  short: 'VZ Projects',
  claim: 'PV-Großhandel für die Energiewende',
  ceo: 'Moritz von Ziegner',
  // PLATZHALTER: Adresse, Telefon, E-Mail, Register
  street: 'Musterstraße 1',
  city: '20095 Hamburg',
  phone: '+49 40 000 000 00',
  phoneHref: '+494000000000',
  email: 'anfrage@vz-projects.de',
  register: 'Amtsgericht Hamburg, HRB 000000',
  vatId: 'DE000000000',
  linkedin: 'https://www.linkedin.com/in/moritz-von-ziegner-a5015962/',
};

// PLATZHALTER-Kennzahlen für die Präsentation. Vor Livegang durch belegbare Werte ersetzen (UWG).
export const showPlaceholderNote = true;

export const stats = [
  { value: '1,5', unit: 'GWp', label: 'gehandeltes PV-Volumen' },
  { value: '1.100', unit: '+', label: 'Installationspartner bundesweit' },
  { value: '120', unit: '+', label: 'Stadtwerke & Energieversorger' },
  { value: '40', unit: '+', label: 'Herstellermarken im Sortiment' },
];

export const nav = [
  { href: '/produkte', label: 'Produkte' },
  { href: '/hersteller', label: 'Hersteller' },
  { href: '/loesungen', label: 'Für wen' },
  { href: '/ueber-uns', label: 'Über uns' },
];
