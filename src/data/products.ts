// Sortiment. Technische Daten gerundet und ohne Gewähr, maßgeblich ist das Herstellerdatenblatt.

export type CategoryId =
  | 'module'
  | 'wechselrichter'
  | 'speicher'
  | 'montagesysteme'
  | 'wallboxen'
  | 'waermepumpen'
  | 'kabel';

export type Use = 'Wohngebäude' | 'Gewerbe' | 'Freifläche';

export interface Category {
  id: CategoryId;
  name: string;
  singular: string;
  lead: string;
  description: string;
}

export interface Product {
  slug: string;
  category: CategoryId;
  brand: string;
  name: string;
  series: string;
  description: string;
  specs: [string, string][];
  tags: string[];
  uses: Use[];
}

export const categories: Category[] = [
  {
    id: 'module',
    name: 'Solarmodule',
    singular: 'Solarmodul',
    lead: 'n-Typ TOPCon, HJT und Rückkontakt-Technologie der Tier-1-Hersteller.',
    description:
      'Vom Full-Black-Modul für das Einfamilienhaus bis zum bifazialen Glas-Glas-Modul für den Solarpark. Wir beschaffen in Containermengen und liefern palettenweise.',
  },
  {
    id: 'wechselrichter',
    name: 'Wechselrichter',
    singular: 'Wechselrichter',
    lead: 'String-, Hybrid- und Mikrowechselrichter von 3 kW bis 350 kW.',
    description:
      'Hybridwechselrichter für Speicherprojekte, Stringwechselrichter für Gewerbedächer und zentrale Lösungen für Freiflächenanlagen.',
  },
  {
    id: 'speicher',
    name: 'Batteriespeicher',
    singular: 'Batteriespeicher',
    lead: 'Hochvolt-Heimspeicher bis zu Gewerbespeichern im Schrankformat.',
    description:
      'Modulare LFP-Speicher, abgestimmt auf die passenden Wechselrichter. Kompatibilität prüfen wir für Sie vor dem Angebot.',
  },
  {
    id: 'montagesysteme',
    name: 'Montagesysteme',
    singular: 'Montagesystem',
    lead: 'Schrägdach, Flachdach, Trapezblech, Freifläche und Carport.',
    description:
      'Statisch geprüfte Unterkonstruktionen deutscher und europäischer Hersteller, auf Wunsch mit projektbezogener Statik und Belegungsplan.',
  },
  {
    id: 'wallboxen',
    name: 'Wallboxen',
    singular: 'Wallbox',
    lead: 'AC-Ladelösungen für Eigenheim, Flotte und Parkhaus.',
    description:
      'Eichrechtskonforme Ladestationen, PV-Überschussladen und Lastmanagement für Mehrplatzanlagen.',
  },
  {
    id: 'waermepumpen',
    name: 'Wärmepumpen',
    singular: 'Wärmepumpe',
    lead: 'Luft-Wasser-Wärmepumpen mit natürlichem Kältemittel R290.',
    description:
      'Die Kombination aus PV, Speicher und Wärmepumpe aus einer Hand, mit Markengeräten der führenden Heiztechnikhersteller.',
  },
  {
    id: 'kabel',
    name: 'Kabel & Steckverbinder',
    singular: 'Kabel',
    lead: 'Solarkabel H1Z2Z2-K, Erdkabel, Datenkabel und MC4-Steckverbinder.',
    description:
      'Auf Trommel oder Ring, in Projektmengen konfektioniert. Original-Steckverbinder statt Kompatibilitätsrisiko.',
  },
];

export const categoryById = Object.fromEntries(categories.map((c) => [c.id, c])) as Record<CategoryId, Category>;

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

type Raw = Omit<Product, 'slug' | 'category'>;

const make = (category: CategoryId, list: Raw[]): Product[] =>
  list.map((p) => ({ ...p, category, slug: slugify(`${p.brand}-${p.name}`) }));

const RES: Use[] = ['Wohngebäude'];
const RES_COM: Use[] = ['Wohngebäude', 'Gewerbe'];
const COM: Use[] = ['Gewerbe'];
const COM_UTIL: Use[] = ['Gewerbe', 'Freifläche'];
const UTIL: Use[] = ['Freifläche'];
const ALL: Use[] = ['Wohngebäude', 'Gewerbe', 'Freifläche'];

const module = make('module', [
  {
    brand: 'trina', name: 'Vertex S+ NEG9R.28', series: 'Vertex S+',
    description: 'Kompaktes Glas-Glas-Modul im Dachformat mit n-Typ i-TOPCon-Zellen. Der Standard für das Einfamilienhaus.',
    specs: [['Leistung', '425–445 Wp'], ['Wirkungsgrad', 'bis 22,3 %'], ['Zelltechnologie', 'n-Typ i-TOPCon'], ['Aufbau', 'Glas-Glas'], ['Abmessungen', '1762 × 1134 × 30 mm'], ['Leistungsgarantie', '30 Jahre']],
    tags: ['Glas-Glas', 'TOPCon'], uses: RES_COM,
  },
  {
    brand: 'trina', name: 'Vertex S+ NEG9RC.27 Full Black', series: 'Vertex S+',
    description: 'Vollschwarze Variante der Vertex S+ Serie für architektonisch anspruchsvolle Dächer.',
    specs: [['Leistung', '420–440 Wp'], ['Wirkungsgrad', 'bis 22,0 %'], ['Zelltechnologie', 'n-Typ i-TOPCon'], ['Aufbau', 'Glas-Glas, Full Black'], ['Abmessungen', '1762 × 1134 × 30 mm'], ['Leistungsgarantie', '30 Jahre']],
    tags: ['Full Black', 'Glas-Glas'], uses: RES,
  },
  {
    brand: 'trina', name: 'Vertex N NEG19RC.20', series: 'Vertex N',
    description: 'Großformatiges bifaziales Modul auf 210R-Zellbasis für Gewerbe- und Freiflächenprojekte.',
    specs: [['Leistung', '600–625 Wp'], ['Wirkungsgrad', 'bis 23,1 %'], ['Zelltechnologie', 'n-Typ i-TOPCon, 210R'], ['Aufbau', 'Glas-Glas, bifazial'], ['Abmessungen', '2384 × 1134 × 33 mm'], ['Leistungsgarantie', '30 Jahre']],
    tags: ['Bifazial', 'Großformat'], uses: COM_UTIL,
  },
  {
    brand: 'ja', name: 'DeepBlue 4.0 Pro JAM54D40 LB', series: 'DeepBlue 4.0 Pro',
    description: 'Bifaziales Glas-Glas-Modul mit Bycium+ n-Typ-Zellen im handlichen 54-Zellen-Format.',
    specs: [['Leistung', '430–450 Wp'], ['Wirkungsgrad', 'bis 22,5 %'], ['Zelltechnologie', 'n-Typ Bycium+'], ['Aufbau', 'Glas-Glas, bifazial'], ['Abmessungen', '1762 × 1134 × 30 mm'], ['Leistungsgarantie', '30 Jahre']],
    tags: ['Bifazial', 'TOPCon'], uses: RES_COM,
  },
  {
    brand: 'ja', name: 'DeepBlue 4.0 Pro JAM54D40 MB Full Black', series: 'DeepBlue 4.0 Pro',
    description: 'Vollschwarzes Aufdachmodul mit hoher Leistungsdichte und geringer Degradation.',
    specs: [['Leistung', '420–440 Wp'], ['Wirkungsgrad', 'bis 22,0 %'], ['Zelltechnologie', 'n-Typ Bycium+'], ['Aufbau', 'Glas-Glas, Full Black'], ['Abmessungen', '1762 × 1134 × 30 mm'], ['Leistungsgarantie', '30 Jahre']],
    tags: ['Full Black'], uses: RES,
  },
  {
    brand: 'ja', name: 'DeepBlue 4.0 Pro JAM72D40 GB', series: 'DeepBlue 4.0 Pro',
    description: 'Bifaziales 144-Halbzellen-Modul für ballastierte Flachdach- und Freiflächenanlagen.',
    specs: [['Leistung', '565–590 Wp'], ['Wirkungsgrad', 'bis 22,8 %'], ['Zelltechnologie', 'n-Typ Bycium+'], ['Aufbau', 'Glas-Glas, bifazial'], ['Abmessungen', '2278 × 1134 × 30 mm'], ['Leistungsgarantie', '30 Jahre']],
    tags: ['Bifazial', 'Großformat'], uses: COM_UTIL,
  },
  {
    brand: 'longi', name: 'Hi-MO X10 LR7-54HVH', series: 'Hi-MO X10',
    description: 'Rückkontaktmodul mit HPBC-2.0-Zellen: keine Busbars auf der Vorderseite, hohe Effizienz und starke Teilverschattungstoleranz.',
    specs: [['Leistung', '455–485 Wp'], ['Wirkungsgrad', 'bis 23,8 %'], ['Zelltechnologie', 'HPBC 2.0 Rückkontakt'], ['Aufbau', 'Glas-Folie'], ['Abmessungen', '1800 × 1134 × 30 mm'], ['Leistungsgarantie', '30 Jahre']],
    tags: ['Rückkontakt', 'High-Efficiency'], uses: RES_COM,
  },
  {
    brand: 'longi', name: 'Hi-MO X10 Explorer Full Black', series: 'Hi-MO X10',
    description: 'Die vollschwarze Rückkontakt-Variante für Premiumdächer im Wohnbau.',
    specs: [['Leistung', '445–470 Wp'], ['Wirkungsgrad', 'bis 23,0 %'], ['Zelltechnologie', 'HPBC 2.0 Rückkontakt'], ['Aufbau', 'Glas-Folie, Full Black'], ['Abmessungen', '1800 × 1134 × 30 mm'], ['Leistungsgarantie', '30 Jahre']],
    tags: ['Full Black', 'Rückkontakt'], uses: RES,
  },
  {
    brand: 'longi', name: 'Hi-MO 9 LR7-72HVH', series: 'Hi-MO 9',
    description: 'Utility-Modul der 650-Watt-Klasse mit Rückkontakt-Technologie für maximale Flächenleistung im Solarpark.',
    specs: [['Leistung', '640–670 Wp'], ['Wirkungsgrad', 'bis 24,8 %'], ['Zelltechnologie', 'HPBC 2.0 Rückkontakt'], ['Aufbau', 'Glas-Glas, bifazial'], ['Abmessungen', '2382 × 1134 × 30 mm'], ['Leistungsgarantie', '30 Jahre']],
    tags: ['Bifazial', 'Utility'], uses: UTIL,
  },
  {
    brand: 'jinko', name: 'Tiger Neo 54HL4R-V', series: 'Tiger Neo',
    description: 'Bewährtes n-Typ-TOPCon-Modul mit niedriger Degradation und gutem Schwachlichtverhalten.',
    specs: [['Leistung', '425–445 Wp'], ['Wirkungsgrad', 'bis 22,3 %'], ['Zelltechnologie', 'n-Typ TOPCon'], ['Aufbau', 'Glas-Folie'], ['Abmessungen', '1762 × 1134 × 30 mm'], ['Leistungsgarantie', '30 Jahre']],
    tags: ['TOPCon'], uses: RES_COM,
  },
  {
    brand: 'jinko', name: 'Tiger Neo 54HL4R-B Full Black', series: 'Tiger Neo',
    description: 'Ganz in Schwarz: das Tiger-Neo-Modul für Wohngebäude mit hohem Designanspruch.',
    specs: [['Leistung', '420–440 Wp'], ['Wirkungsgrad', 'bis 22,0 %'], ['Zelltechnologie', 'n-Typ TOPCon'], ['Aufbau', 'Glas-Folie, Full Black'], ['Abmessungen', '1762 × 1134 × 30 mm'], ['Leistungsgarantie', '30 Jahre']],
    tags: ['Full Black'], uses: RES,
  },
  {
    brand: 'jinko', name: 'Tiger Neo 3.0 78HL4-BDV', series: 'Tiger Neo 3.0',
    description: 'Bifaziales Hochleistungsmodul der dritten Tiger-Neo-Generation für Freiflächen und Agri-PV.',
    specs: [['Leistung', '640–670 Wp'], ['Wirkungsgrad', 'bis 24,0 %'], ['Zelltechnologie', 'n-Typ TOPCon'], ['Aufbau', 'Glas-Glas, bifazial'], ['Abmessungen', '2382 × 1134 × 30 mm'], ['Leistungsgarantie', '30 Jahre']],
    tags: ['Bifazial', 'Utility'], uses: UTIL,
  },
  {
    brand: 'aiko', name: 'Neostar 2P ABC 54', series: 'Neostar',
    description: 'All-Back-Contact-Modul mit einem der höchsten Serienwirkungsgrade im Dachsegment.',
    specs: [['Leistung', '450–470 Wp'], ['Wirkungsgrad', 'bis 23,6 %'], ['Zelltechnologie', 'ABC Rückkontakt'], ['Aufbau', 'Glas-Folie'], ['Abmessungen', '1757 × 1134 × 30 mm'], ['Leistungsgarantie', '30 Jahre']],
    tags: ['Rückkontakt', 'High-Efficiency'], uses: RES_COM,
  },
  {
    brand: 'aiko', name: 'Neostar 2S ABC Full Black', series: 'Neostar',
    description: 'Vollschwarzes ABC-Modul ohne sichtbare Zellverbinder: maximal homogene Dachoptik.',
    specs: [['Leistung', '440–460 Wp'], ['Wirkungsgrad', 'bis 23,0 %'], ['Zelltechnologie', 'ABC Rückkontakt'], ['Aufbau', 'Glas-Folie, Full Black'], ['Abmessungen', '1757 × 1134 × 30 mm'], ['Leistungsgarantie', '30 Jahre']],
    tags: ['Full Black', 'Rückkontakt'], uses: RES,
  },
  {
    brand: 'canadian', name: 'TOPBiHiKu6 CS6.2-48TB', series: 'TOPBiHiKu',
    description: 'Bifaziales TOPCon-Modul im Dachformat mit Doppelglas für lange Lebensdauer.',
    specs: [['Leistung', '435–455 Wp'], ['Wirkungsgrad', 'bis 22,8 %'], ['Zelltechnologie', 'n-Typ TOPCon'], ['Aufbau', 'Glas-Glas, bifazial'], ['Abmessungen', '1762 × 1134 × 30 mm'], ['Leistungsgarantie', '30 Jahre']],
    tags: ['Bifazial', 'TOPCon'], uses: RES_COM,
  },
  {
    brand: 'canadian', name: 'TOPBiHiKu7 CS7N-TB', series: 'TOPBiHiKu',
    description: 'Großmodul mit 210-mm-Zellen für Projekte, bei denen jeder Euro BOS-Kosten zählt.',
    specs: [['Leistung', '680–705 Wp'], ['Wirkungsgrad', 'bis 22,7 %'], ['Zelltechnologie', 'n-Typ TOPCon, 210 mm'], ['Aufbau', 'Glas-Glas, bifazial'], ['Abmessungen', '2384 × 1303 × 33 mm'], ['Leistungsgarantie', '30 Jahre']],
    tags: ['Bifazial', 'Utility'], uses: UTIL,
  },
  {
    brand: 'dmegc', name: 'Infinity RT 108HBT', series: 'Infinity',
    description: 'Glas-Glas-Modul mit n-Typ-TOPCon-Zellen und starkem Preis-Leistungs-Verhältnis für Volumenprojekte.',
    specs: [['Leistung', '425–445 Wp'], ['Wirkungsgrad', 'bis 22,3 %'], ['Zelltechnologie', 'n-Typ TOPCon'], ['Aufbau', 'Glas-Glas, bifazial'], ['Abmessungen', '1762 × 1134 × 30 mm'], ['Leistungsgarantie', '30 Jahre']],
    tags: ['Glas-Glas', 'Bifazial'], uses: RES_COM,
  },
  {
    brand: 'dmegc', name: 'Infinity RT 108HBB Full Black', series: 'Infinity',
    description: 'Die schwarze Infinity-Variante für Wohngebäude mit einheitlichem Erscheinungsbild.',
    specs: [['Leistung', '420–435 Wp'], ['Wirkungsgrad', 'bis 21,8 %'], ['Zelltechnologie', 'n-Typ TOPCon'], ['Aufbau', 'Glas-Glas, Full Black'], ['Abmessungen', '1762 × 1134 × 30 mm'], ['Leistungsgarantie', '30 Jahre']],
    tags: ['Full Black', 'Glas-Glas'], uses: RES,
  },
]);

const wechselrichter = make('wechselrichter', [
  {
    brand: 'sma', name: 'Sunny Boy 3.0–6.0', series: 'Sunny Boy',
    description: 'Einphasiger Stringwechselrichter für das Einfamilienhaus, mit integriertem Webserver und SMA ShadeFix.',
    specs: [['Nennleistung AC', '3,0–6,0 kW'], ['Netzanschluss', 'einphasig'], ['MPP-Tracker', '2–3'], ['Max. Wirkungsgrad', '97,0 %'], ['Kommunikation', 'WLAN, Ethernet, Modbus']],
    tags: ['String', 'Made in Germany'], uses: RES,
  },
  {
    brand: 'sma', name: 'Sunny Tripower X 12–25', series: 'Sunny Tripower X',
    description: 'Dreiphasiger Stringwechselrichter für kleine Gewerbeanlagen mit integriertem System Manager für bis zu 5 Geräte.',
    specs: [['Nennleistung AC', '12–25 kW'], ['Netzanschluss', 'dreiphasig'], ['MPP-Tracker', '3'], ['Max. Wirkungsgrad', '98,2 %'], ['Besonderheit', 'Integrierter Anlagenmanager']],
    tags: ['String', 'Made in Germany'], uses: COM,
  },
  {
    brand: 'sma', name: 'Sunny Tripower Smart Energy 5–10', series: 'Sunny Tripower Smart Energy',
    description: 'Dreiphasiger Hybridwechselrichter für SMA Home Storage, mit Ersatzstromfunktion.',
    specs: [['Nennleistung AC', '5–10 kW'], ['Typ', 'Hybrid, Hochvolt'], ['MPP-Tracker', '2'], ['Notstrom', 'Ersatzstrom (Backup)'], ['Speicher', 'SMA Home Storage']],
    tags: ['Hybrid', 'Notstrom'], uses: RES,
  },
  {
    brand: 'sma', name: 'Sunny Tripower CORE2 110', series: 'Sunny Tripower CORE2',
    description: 'Der flexible Gewerbewechselrichter mit 12 MPP-Trackern, für Dach und dezentrale Freiflächen.',
    specs: [['Nennleistung AC', '110 kW'], ['MPP-Tracker', '12'], ['Max. Wirkungsgrad', '98,6 %'], ['Netzanschluss', 'dreiphasig'], ['Installation', 'Wand- oder Bodenmontage']],
    tags: ['Gewerbe', 'Made in Germany'], uses: COM_UTIL,
  },
  {
    brand: 'sma', name: 'Sunny Highpower PEAK3 150', series: 'Sunny Highpower',
    description: 'Dezentrale Systemlösung für große Gewerbe- und Freiflächenanlagen bis in den Megawattbereich.',
    specs: [['Nennleistung AC', '150 kW'], ['DC-Spannung max.', '1.000 V'], ['Max. Wirkungsgrad', '98,8 %'], ['Topologie', 'dezentral, modular'], ['Netz', 'Mittelspannung via Trafo']],
    tags: ['Utility'], uses: COM_UTIL,
  },
  {
    brand: 'huawei', name: 'SUN2000-5–10KTL-M1', series: 'SUN2000 M1',
    description: 'Dreiphasiger Hybridwechselrichter, vorbereitet für LUNA2000-Speicher und Optimierer.',
    specs: [['Nennleistung AC', '5–10 kW'], ['Typ', 'Hybrid'], ['MPP-Tracker', '2'], ['Max. Wirkungsgrad', '98,6 %'], ['Speicher', 'LUNA2000']],
    tags: ['Hybrid'], uses: RES,
  },
  {
    brand: 'huawei', name: 'SUN2000-12–25K-MB0', series: 'SUN2000 MB0',
    description: 'Hybridwechselrichter für das große Einfamilienhaus und das kleine Gewerbe, mit vier MPP-Trackern.',
    specs: [['Nennleistung AC', '12–25 kW'], ['Typ', 'Hybrid'], ['MPP-Tracker', '2–4'], ['Max. Wirkungsgrad', '98,4 %'], ['Notstrom', 'mit Backup Box']],
    tags: ['Hybrid'], uses: RES_COM,
  },
  {
    brand: 'huawei', name: 'SUN2000-100/115KTL-M2', series: 'SUN2000 M2',
    description: 'Gewerbewechselrichter mit 10 MPP-Trackern und intelligenter String-Diagnose.',
    specs: [['Nennleistung AC', '100–115 kW'], ['MPP-Tracker', '10'], ['Max. Wirkungsgrad', '98,8 %'], ['Schutzart', 'IP66'], ['Diagnose', 'Smart I-V Curve']],
    tags: ['Gewerbe'], uses: COM_UTIL,
  },
  {
    brand: 'huawei', name: 'SUN2000-330KTL-H1', series: 'SUN2000 H1',
    description: '1.500-V-Stringwechselrichter für Solarparks mit hoher Leistungsdichte.',
    specs: [['Nennleistung AC', '300–330 kW'], ['DC-Spannung max.', '1.500 V'], ['MPP-Tracker', '6'], ['Max. Wirkungsgrad', '99,0 %'], ['Schutzart', 'IP66']],
    tags: ['Utility', '1.500 V'], uses: UTIL,
  },
  {
    brand: 'fronius', name: 'Symo GEN24 Plus 3.0–10.0', series: 'GEN24',
    description: 'Dreiphasiger Hybridwechselrichter mit vollwertiger Notstromfunktion und Made-in-Europe-Qualität.',
    specs: [['Nennleistung AC', '3–10 kW'], ['Typ', 'Hybrid'], ['MPP-Tracker', '2'], ['Notstrom', 'PV Point / Full Backup'], ['Speicher', 'Fronius Reserva, BYD HVS/HVM']],
    tags: ['Hybrid', 'Notstrom'], uses: RES,
  },
  {
    brand: 'fronius', name: 'Primo GEN24 Plus 3.0–6.0', series: 'GEN24',
    description: 'Die einphasige Hybridlösung für kleinere Dächer und Bestandsanlagen.',
    specs: [['Nennleistung AC', '3–6 kW'], ['Typ', 'Hybrid'], ['Netzanschluss', 'einphasig'], ['MPP-Tracker', '2'], ['Notstrom', 'PV Point']],
    tags: ['Hybrid'], uses: RES,
  },
  {
    brand: 'fronius', name: 'Tauro 50-3 / ECO 100-3', series: 'Tauro',
    description: 'Robuster Gewerbewechselrichter in Outdoor-Bauweise mit aktivem Kühlsystem, servicefreundlich.',
    specs: [['Nennleistung AC', '50–100 kW'], ['MPP-Tracker', '1–3'], ['Max. Wirkungsgrad', '98,5 %'], ['Schutzart', 'IP65'], ['Kühlung', 'Active Cooling']],
    tags: ['Gewerbe'], uses: COM_UTIL,
  },
  {
    brand: 'solaredge', name: 'Home Hub Wechselrichter 5–10 kW', series: 'SolarEdge Home',
    description: 'Dreiphasiger Hybridwechselrichter auf Basis der Optimierer-Technologie mit modulgenauem Monitoring.',
    specs: [['Nennleistung AC', '5–10 kW'], ['Typ', 'Hybrid, DC-optimiert'], ['Notstrom', 'mit Backup Interface'], ['Monitoring', 'Modulebene'], ['Garantie', '12 Jahre']],
    tags: ['Hybrid', 'Optimierer'], uses: RES,
  },
  {
    brand: 'solaredge', name: 'Leistungsoptimierer S440 / S500', series: 'S-Serie',
    description: 'Modulleistungsoptimierer für maximale Erträge bei Verschattung und Sicherheitsabschaltung auf Modulebene.',
    specs: [['Eingangsleistung', '440–500 W'], ['Wirkungsgrad', '99,5 %'], ['Sicherheit', 'SafeDC'], ['Garantie', '25 Jahre'], ['Kompatibel', 'SolarEdge-Wechselrichter']],
    tags: ['Optimierer'], uses: RES_COM,
  },
  {
    brand: 'solaredge', name: 'Gewerbewechselrichter SE30K–SE100K', series: 'SolarEdge Commercial',
    description: 'DC-optimierte Gewerbewechselrichter mit Synergy-Technologie für Dächer mit komplexer Geometrie.',
    specs: [['Nennleistung AC', '30–100 kW'], ['Typ', 'DC-optimiert'], ['Monitoring', 'Modulebene'], ['Sicherheit', 'SafeDC'], ['Garantie', '12 Jahre']],
    tags: ['Gewerbe', 'Optimierer'], uses: COM,
  },
  {
    brand: 'sungrow', name: 'SH5.0–10RT', series: 'RT-Serie',
    description: 'Dreiphasiger Hybridwechselrichter mit Notstromumschaltung in Millisekunden, abgestimmt auf SBR-Speicher.',
    specs: [['Nennleistung AC', '5–10 kW'], ['Typ', 'Hybrid'], ['MPP-Tracker', '2'], ['Notstrom', 'unterbrechungsfrei'], ['Speicher', 'Sungrow SBR']],
    tags: ['Hybrid', 'Notstrom'], uses: RES,
  },
  {
    brand: 'sungrow', name: 'SG110CX-P2', series: 'CX-Serie',
    description: 'Gewerbewechselrichter mit 12 MPP-Trackern für Dachanlagen mit vielen Ausrichtungen.',
    specs: [['Nennleistung AC', '110 kW'], ['MPP-Tracker', '12'], ['Max. Wirkungsgrad', '98,7 %'], ['Schutzart', 'IP66'], ['Diagnose', 'Smart I-V Curve']],
    tags: ['Gewerbe'], uses: COM_UTIL,
  },
  {
    brand: 'sungrow', name: 'SG350HX', series: 'HX-Serie',
    description: '1.500-V-Stringwechselrichter für Großprojekte mit hoher DC/AC-Ratio.',
    specs: [['Nennleistung AC', '320–352 kW'], ['DC-Spannung max.', '1.500 V'], ['MPP-Tracker', '12–16'], ['Max. Wirkungsgrad', '99,0 %'], ['Schutzart', 'IP66']],
    tags: ['Utility', '1.500 V'], uses: UTIL,
  },
  {
    brand: 'goodwe', name: 'ET Plus+ 5–10 kW', series: 'ET-Serie',
    description: 'Dreiphasiger Hybridwechselrichter mit 100 % unsymmetrischer Last und schneller Umschaltung auf Backup.',
    specs: [['Nennleistung AC', '5–10 kW'], ['Typ', 'Hybrid'], ['MPP-Tracker', '2'], ['Notstrom', 'USV-Funktion'], ['Speicher', 'GoodWe Lynx Home']],
    tags: ['Hybrid'], uses: RES,
  },
  {
    brand: 'goodwe', name: 'SDT G2 4–20 kW', series: 'SDT-Serie',
    description: 'Kompakter dreiphasiger Stringwechselrichter für Einfamilienhaus und kleines Gewerbe.',
    specs: [['Nennleistung AC', '4–20 kW'], ['MPP-Tracker', '2'], ['Max. Wirkungsgrad', '98,4 %'], ['Schutzart', 'IP66'], ['Kommunikation', 'WLAN, LAN']],
    tags: ['String'], uses: RES_COM,
  },
  {
    brand: 'enphase', name: 'IQ8MC / IQ8HC Mikrowechselrichter', series: 'IQ8',
    description: 'Netzbildende Mikrowechselrichter, ein Gerät pro Modul. Keine DC-Hochspannung auf dem Dach.',
    specs: [['Max. Ausgangsleistung', '330–384 VA'], ['Topologie', 'Modulwechselrichter'], ['DC-Spannung', 'Kleinspannung'], ['Garantie', '25 Jahre'], ['Monitoring', 'Modulebene']],
    tags: ['Mikro', 'Sicherheit'], uses: RES,
  },
  {
    brand: 'kostal', name: 'PLENTICORE G3 L 12–20', series: 'PLENTICORE',
    description: 'Hybridwechselrichter aus Deutschland mit drei MPP-Trackern und Speicheranschluss für Hochvolt-Batterien.',
    specs: [['Nennleistung AC', '12–20 kW'], ['Typ', 'Hybrid'], ['MPP-Tracker', '3'], ['Notstrom', 'Backup Switch'], ['Speicher', 'BYD HVS/HVM']],
    tags: ['Hybrid', 'Made in Germany'], uses: RES_COM,
  },
  {
    brand: 'kostal', name: 'PIKO CI 30–60', series: 'PIKO CI',
    description: 'Kompakter Gewerbewechselrichter mit hoher Eingangsflexibilität.',
    specs: [['Nennleistung AC', '30–60 kW'], ['MPP-Tracker', '3–6'], ['Max. Wirkungsgrad', '98,6 %'], ['Schutzart', 'IP66'], ['Kommunikation', 'LAN, Modbus TCP']],
    tags: ['Gewerbe'], uses: COM,
  },
]);

const speicher = make('speicher', [
  {
    brand: 'byd', name: 'Battery-Box Premium HVS 5.1–12.8', series: 'Battery-Box Premium',
    description: 'Der meistverbaute Hochvolt-Heimspeicher Europas: modular, kobaltfrei und mit vielen Wechselrichtern kompatibel.',
    specs: [['Kapazität', '5,1–12,8 kWh'], ['Zellchemie', 'LFP'], ['Architektur', 'Hochvolt, modular'], ['Parallelschaltung', 'bis 3 Türme'], ['Garantie', '10 Jahre']],
    tags: ['Hochvolt', 'LFP'], uses: RES,
  },
  {
    brand: 'byd', name: 'Battery-Box Premium HVM 8.3–22.1', series: 'Battery-Box Premium',
    description: 'Hochvolt-Speicher für größere Haushalte und Gewerbe, parallel erweiterbar bis über 60 kWh.',
    specs: [['Kapazität', '8,3–22,1 kWh'], ['Zellchemie', 'LFP'], ['Architektur', 'Hochvolt, modular'], ['Erweiterbar bis', '66,3 kWh'], ['Garantie', '10 Jahre']],
    tags: ['Hochvolt', 'LFP'], uses: RES_COM,
  },
  {
    brand: 'byd', name: 'Battery-Box Premium LVS 4.0–24.0', series: 'Battery-Box Premium',
    description: 'Niedervoltspeicher für Insel- und Hybridsysteme mit 48-V-Wechselrichtern.',
    specs: [['Kapazität', '4,0–24,0 kWh'], ['Zellchemie', 'LFP'], ['Architektur', 'Niedervolt 48 V'], ['Parallelschaltung', 'bis 64 Module'], ['Garantie', '10 Jahre']],
    tags: ['Niedervolt', 'LFP'], uses: RES,
  },
  {
    brand: 'huawei', name: 'LUNA2000-7/14/21-S1', series: 'LUNA2000',
    description: 'Modularer Speicher mit Energieoptimierer pro Modul, für Huawei-Hybridwechselrichter.',
    specs: [['Kapazität', '6,9–20,7 kWh'], ['Zellchemie', 'LFP'], ['Architektur', 'Hochvolt, modular'], ['Erweiterbar bis', '41,4 kWh'], ['Garantie', '10 Jahre']],
    tags: ['Hochvolt', 'LFP'], uses: RES,
  },
  {
    brand: 'huawei', name: 'LUNA2000-5/10/15-S0', series: 'LUNA2000',
    description: 'Bewährte Generation des LUNA2000 in 5-kWh-Schritten.',
    specs: [['Kapazität', '5–15 kWh'], ['Zellchemie', 'LFP'], ['Architektur', 'Hochvolt, modular'], ['Erweiterbar bis', '30 kWh'], ['Garantie', '10 Jahre']],
    tags: ['Hochvolt', 'LFP'], uses: RES,
  },
  {
    brand: 'huawei', name: 'LUNA2000-215-2S10', series: 'LUNA2000 C&I',
    description: 'Gewerbespeicher im Outdoor-Schrank für Lastspitzenkappung und Eigenverbrauchsoptimierung.',
    specs: [['Kapazität', '215 kWh'], ['Leistung', '108 kW'], ['Zellchemie', 'LFP'], ['Bauform', 'Outdoor-Schrank'], ['Anwendung', 'Peak Shaving, Eigenverbrauch']],
    tags: ['Gewerbespeicher', 'Peak Shaving'], uses: COM_UTIL,
  },
  {
    brand: 'sungrow', name: 'SBR096–256', series: 'SBR',
    description: 'Hochvolt-Speicher in 3,2-kWh-Schritten, Plug-and-Play mit Sungrow-Hybridwechselrichtern.',
    specs: [['Kapazität', '9,6–25,6 kWh'], ['Zellchemie', 'LFP'], ['Architektur', 'Hochvolt, modular'], ['Modulgröße', '3,2 kWh'], ['Garantie', '10 Jahre']],
    tags: ['Hochvolt', 'LFP'], uses: RES,
  },
  {
    brand: 'sma', name: 'Home Storage 3.3–16.4', series: 'Home Storage',
    description: 'Der Speicher für das SMA-Energiesystem, abgestimmt auf Sunny Tripower Smart Energy.',
    specs: [['Kapazität', '3,3–16,4 kWh'], ['Zellchemie', 'LFP'], ['Architektur', 'Hochvolt, modular'], ['Modulgröße', '3,28 kWh'], ['Garantie', '10 Jahre']],
    tags: ['Hochvolt', 'LFP'], uses: RES,
  },
  {
    brand: 'fronius', name: 'Reserva 6.3–15.8', series: 'Reserva',
    description: 'Hochvolt-Speicher für Fronius GEN24, mit schneller Montage dank Stecksystem.',
    specs: [['Kapazität', '6,3–15,8 kWh'], ['Zellchemie', 'LFP'], ['Architektur', 'Hochvolt, modular'], ['Erweiterbar', 'parallel'], ['Garantie', '10 Jahre']],
    tags: ['Hochvolt', 'LFP'], uses: RES,
  },
  {
    brand: 'pylontech', name: 'Force H2 7.1–24.9', series: 'Force',
    description: 'Flexibler Hochvolt-Speicher mit breiter Wechselrichterkompatibilität.',
    specs: [['Kapazität', '7,1–24,9 kWh'], ['Zellchemie', 'LFP'], ['Architektur', 'Hochvolt, modular'], ['Modulgröße', '3,55 kWh'], ['Garantie', '10 Jahre']],
    tags: ['Hochvolt', 'LFP'], uses: RES,
  },
  {
    brand: 'sonnen', name: 'sonnenBatterie 10', series: 'sonnenBatterie',
    description: 'All-in-One-Speicher aus dem Allgäu mit integriertem Batteriewechselrichter und Energiemanagement.',
    specs: [['Kapazität', '5,5–55 kWh'], ['Zellchemie', 'LFP'], ['Kopplung', 'AC-gekoppelt'], ['Notstrom', 'optional'], ['Garantie', '10 Jahre']],
    tags: ['AC-gekoppelt', 'Made in Germany'], uses: RES,
  },
  {
    brand: 'tesla', name: 'Powerwall 3', series: 'Powerwall',
    description: 'Speicher mit integriertem Hybridwechselrichter: PV-Strings werden direkt angeschlossen.',
    specs: [['Kapazität', '13,5 kWh'], ['Leistung', 'bis 11 kW'], ['Zellchemie', 'LFP'], ['Wechselrichter', 'integriert'], ['Garantie', '10 Jahre']],
    tags: ['All-in-One'], uses: RES,
  },
  {
    brand: 'goodwe', name: 'Lynx Home F G2', series: 'Lynx Home',
    description: 'Stapelbarer Hochvolt-Speicher für die GoodWe-Hybridwechselrichter.',
    specs: [['Kapazität', '6,6–16,4 kWh'], ['Zellchemie', 'LFP'], ['Architektur', 'Hochvolt, modular'], ['Schutzart', 'IP55'], ['Garantie', '10 Jahre']],
    tags: ['Hochvolt', 'LFP'], uses: RES,
  },
  {
    brand: 'enphase', name: 'IQ Battery 5P', series: 'IQ Battery',
    description: 'AC-gekoppelter Speicher mit integrierten Mikrowechselrichtern, ideal zum Nachrüsten.',
    specs: [['Kapazität', '5,0 kWh'], ['Leistung', '3,84 kW'], ['Zellchemie', 'LFP'], ['Kopplung', 'AC-gekoppelt'], ['Garantie', '15 Jahre']],
    tags: ['AC-gekoppelt', 'Nachrüstung'], uses: RES,
  },
]);

const montagesysteme = make('montagesysteme', [
  {
    brand: 'k2', name: 'CrossRail 44-X / 48-X', series: 'CrossRail',
    description: 'Das Schienensystem für Ziegel-, Biberschwanz- und Schieferdächer mit werkzeugarmer Klemmtechnik.',
    specs: [['Dachtyp', 'Schrägdach'], ['Material', 'Aluminium'], ['Befestigung', 'Dachhaken, Stockschrauben'], ['Statik', 'K2 Base Planungstool'], ['Garantie', '20 Jahre']],
    tags: ['Schrägdach', 'Made in Germany'], uses: RES_COM,
  },
  {
    brand: 'k2', name: 'SingleHook 3S', series: 'Dachhaken',
    description: 'Verstellbarer Edelstahl-Dachhaken für Ziegeldächer, passend zu allen K2-Schienen.',
    specs: [['Dachtyp', 'Ziegeldach'], ['Material', 'Edelstahl'], ['Verstellbarkeit', 'dreifach'], ['Kompatibel', 'CrossRail, SpeedRail']],
    tags: ['Schrägdach'], uses: RES_COM,
  },
  {
    brand: 'k2', name: 'D-Dome 6.0', series: 'Dome',
    description: 'Ballastiertes Ost-West-System für Flachdächer: maximale Belegung, minimale Dachlast.',
    specs: [['Dachtyp', 'Flachdach'], ['Ausrichtung', 'Ost-West'], ['Neigung', '10°'], ['Befestigung', 'ballastiert, durchdringungsfrei'], ['Garantie', '20 Jahre']],
    tags: ['Flachdach', 'Ost-West'], uses: COM,
  },
  {
    brand: 'k2', name: 'S-Dome 6.0', series: 'Dome',
    description: 'Süd-aufgeständertes Flachdachsystem mit integriertem Windleitblech.',
    specs: [['Dachtyp', 'Flachdach'], ['Ausrichtung', 'Süd'], ['Neigung', '10° / 15°'], ['Befestigung', 'ballastiert'], ['Garantie', '20 Jahre']],
    tags: ['Flachdach', 'Süd'], uses: COM,
  },
  {
    brand: 'k2', name: 'SpeedRail', series: 'SpeedRail',
    description: 'Kurzschienensystem für Trapezblech- und Sandwichdächer: schnell montiert, wenig Material.',
    specs: [['Dachtyp', 'Trapezblech, Sandwich'], ['Material', 'Aluminium'], ['Montage', 'Direktbefestigung'], ['Garantie', '20 Jahre']],
    tags: ['Gewerbedach'], uses: COM,
  },
  {
    brand: 'schletter', name: 'FixGrid Pro', series: 'FixGrid',
    description: 'Ballastarmes Flachdachsystem mit hoher Variabilität bei Neigung und Ausrichtung.',
    specs: [['Dachtyp', 'Flachdach'], ['Ausrichtung', 'Süd oder Ost-West'], ['Befestigung', 'ballastiert'], ['Statik', 'projektspezifisch'], ['Material', 'Aluminium / Stahl']],
    tags: ['Flachdach'], uses: COM,
  },
  {
    brand: 'schletter', name: 'Rapid16 Schrägdachsystem', series: 'Rapid',
    description: 'Schnellmontagesystem mit vormontierten Klemmen für das Steildach.',
    specs: [['Dachtyp', 'Schrägdach'], ['Material', 'Aluminium'], ['Montage', 'Klickklemmen'], ['Statik', 'Schletter-Planungstool']],
    tags: ['Schrägdach', 'Made in Germany'], uses: RES_COM,
  },
  {
    brand: 'schletter', name: 'FS Uno / FS Duo', series: 'Freiflächensystem',
    description: 'Gerammtes Freiflächengestell, ein- oder zweibeinig, für hohe Montagegeschwindigkeit im Solarpark.',
    specs: [['Einsatz', 'Freifläche'], ['Gründung', 'Rammpfosten'], ['Belegung', '2–4 Module hochkant'], ['Material', 'Stahl verzinkt / Aluminium'], ['Statik', 'projektspezifisch']],
    tags: ['Freifläche'], uses: UTIL,
  },
  {
    brand: 'schletter', name: 'Park@Sol Carport', series: 'Carport',
    description: 'Solarcarport für Firmenparkplätze, kombinierbar mit Ladeinfrastruktur.',
    specs: [['Einsatz', 'Parkplatz, Carport'], ['Bauform', 'ein- und zweireihig'], ['Material', 'Stahl verzinkt'], ['Option', 'Wallbox-Integration']],
    tags: ['Carport', 'E-Mobilität'], uses: COM,
  },
  {
    brand: 'valk', name: 'ValkBox3', series: 'ValkBox',
    description: 'Ballastiertes Flachdachsystem in Süd- und Ost-West-Ausführung, besonders leicht zu verarbeiten.',
    specs: [['Dachtyp', 'Flachdach'], ['Ausrichtung', 'Süd oder Ost-West'], ['Befestigung', 'ballastiert'], ['Material', 'Aluminium']],
    tags: ['Flachdach'], uses: COM,
  },
  {
    brand: 'valk', name: 'ValkPro+', series: 'ValkPro',
    description: 'Schienensystem für Schrägdächer mit wenigen, durchdachten Komponenten.',
    specs: [['Dachtyp', 'Schrägdach'], ['Material', 'Aluminium'], ['Montage', 'Klickklemmen'], ['Kompatibel', 'alle gängigen Dacheindeckungen']],
    tags: ['Schrägdach'], uses: RES_COM,
  },
]);

const wallboxen = make('wallboxen', [
  {
    brand: 'abb', name: 'Terra AC Wallbox 11/22 kW', series: 'Terra AC',
    description: 'Kompakte AC-Wallbox mit MID-Zähler und OCPP-Anbindung für Flotten- und Heimladen.',
    specs: [['Ladeleistung', '11 / 22 kW'], ['Anschluss', 'Typ 2 Kabel oder Buchse'], ['Zähler', 'MID'], ['Backend', 'OCPP 1.6J'], ['Zugang', 'RFID, App']],
    tags: ['OCPP', 'MID'], uses: RES_COM,
  },
  {
    brand: 'webasto', name: 'Unite 11/22 kW', series: 'Unite',
    description: 'Eichrechtskonforme Ladestation für halböffentliche Parkplätze und Flotten.',
    specs: [['Ladeleistung', '11 / 22 kW'], ['Anschluss', 'Typ 2'], ['Eichrecht', 'konform'], ['Backend', 'OCPP 1.6J'], ['Lastmanagement', 'ja']],
    tags: ['Eichrecht', 'OCPP'], uses: COM,
  },
  {
    brand: 'webasto', name: 'Next 11 kW', series: 'Next',
    description: 'Die smarte Heimwallbox mit App-Steuerung und PV-Überschussladen.',
    specs: [['Ladeleistung', '11 kW'], ['Anschluss', 'Typ 2, festes Kabel'], ['Steuerung', 'App, WLAN'], ['PV-Überschussladen', 'ja']],
    tags: ['PV-Überschuss'], uses: RES,
  },
  {
    brand: 'keba', name: 'KeContact P40 Pro', series: 'KeContact',
    description: 'Premium-Wallbox mit Eichrecht, Lastmanagement und Display, Made in Austria.',
    specs: [['Ladeleistung', '11 / 22 kW'], ['Eichrecht', 'konform'], ['Backend', 'OCPP 1.6 / 2.0.1'], ['Lastmanagement', 'bis 200 Ladepunkte'], ['Schnittstellen', 'LAN, WLAN, LTE']],
    tags: ['Eichrecht', 'Lastmanagement'], uses: COM,
  },
  {
    brand: 'keba', name: 'KeContact P30 x-series', series: 'KeContact',
    description: 'Der bewährte Klassiker für Heim und Gewerbe, kompatibel mit vielen Energiemanagern.',
    specs: [['Ladeleistung', '11 / 22 kW'], ['Zähler', 'MID'], ['Backend', 'OCPP 1.6'], ['Kompatibel', 'SMA, Fronius, Kostal EMS']],
    tags: ['MID', 'EMS-kompatibel'], uses: RES_COM,
  },
  {
    brand: 'mennekes', name: 'AMTRON Charge Control 11 C2', series: 'AMTRON',
    description: 'Wallbox aus dem Sauerland mit PV-Überschussladen und §14a-EnWG-Steuerbarkeit.',
    specs: [['Ladeleistung', '11 kW'], ['Anschluss', 'Typ 2, festes Kabel'], ['Steuerbar', '§14a EnWG'], ['Backend', 'OCPP 1.6J'], ['Zähler', 'MID']],
    tags: ['§14a', 'Made in Germany'], uses: RES,
  },
  {
    brand: 'mennekes', name: 'AMTRON Professional+ 22 C2', series: 'AMTRON',
    description: 'Eichrechtskonforme Ladestation für Gewerbe und Wohnungswirtschaft.',
    specs: [['Ladeleistung', '22 kW'], ['Eichrecht', 'konform'], ['Backend', 'OCPP 1.6J'], ['Zugang', 'RFID'], ['Lastmanagement', 'ja']],
    tags: ['Eichrecht', 'Made in Germany'], uses: COM,
  },
  {
    brand: 'easee', name: 'Charge Max', series: 'Charge',
    description: 'Kompakte, skalierbare Wallbox mit dynamischem Lastmanagement für Mehrplatzanlagen.',
    specs: [['Ladeleistung', 'bis 22 kW'], ['Lastmanagement', 'dynamisch'], ['Konnektivität', 'WLAN, 4G'], ['Backend', 'OCPP 1.6J']],
    tags: ['Lastmanagement'], uses: RES_COM,
  },
  {
    brand: 'zaptec', name: 'Go 2', series: 'Go',
    description: 'Kleine, robuste Wallbox mit eingebautem 4G und Phasenumschaltung.',
    specs: [['Ladeleistung', 'bis 22 kW'], ['Phasenumschaltung', '1/3-phasig'], ['Konnektivität', 'WLAN, 4G'], ['Schutzart', 'IP54']],
    tags: ['PV-Überschuss'], uses: RES,
  },
  {
    brand: 'zaptec', name: 'Pro', series: 'Pro',
    description: 'Skalierbare Ladelösung für Wohnanlagen und Unternehmen mit bis zu Hunderten Ladepunkten.',
    specs: [['Ladeleistung', 'bis 22 kW'], ['Lastmanagement', 'dynamisch'], ['Backend', 'OCPP 1.6J'], ['Eichrecht', 'Variante verfügbar']],
    tags: ['Lastmanagement', 'Flotte'], uses: COM,
  },
  {
    brand: 'alfen', name: 'Eve Double Pro-line', series: 'Eve',
    description: 'Doppelladesäule für Parkplätze und öffentliche Bereiche mit Smart-Charging-Netzwerk.',
    specs: [['Ladepunkte', '2'], ['Ladeleistung', '2 × 22 kW'], ['Eichrecht', 'konform'], ['Backend', 'OCPP 1.6J'], ['Montage', 'Wand oder Säule']],
    tags: ['Eichrecht', 'Doppelladepunkt'], uses: COM,
  },
  {
    brand: 'sma', name: 'EV Charger Business 22', series: 'EV Charger',
    description: 'Gewerbe-Wallbox mit nahtloser Einbindung in das SMA-Energiemanagement.',
    specs: [['Ladeleistung', '22 kW'], ['Backend', 'OCPP 1.6J'], ['Lastmanagement', 'mit SMA Data Manager'], ['Zähler', 'MID']],
    tags: ['EMS-kompatibel'], uses: COM,
  },
  {
    brand: 'huawei', name: 'SCharger-22KT-S0', series: 'SCharger',
    description: 'AC-Ladestation mit direkter Kopplung an Huawei-Wechselrichter und FusionSolar-App.',
    specs: [['Ladeleistung', '7 / 22 kW'], ['PV-Überschussladen', 'ja'], ['Konnektivität', 'WLAN, FE'], ['Backend', 'OCPP 1.6J']],
    tags: ['PV-Überschuss'], uses: RES,
  },
  {
    brand: 'fronius', name: 'Wattpilot Home 11 J / 22 J', series: 'Wattpilot',
    description: 'Intelligente Wallbox für PV-Überschussladen im Fronius-System.',
    specs: [['Ladeleistung', '11 / 22 kW'], ['Phasenumschaltung', 'automatisch'], ['PV-Überschussladen', 'ja'], ['Steuerung', 'Solar.wattpilot App']],
    tags: ['PV-Überschuss'], uses: RES,
  },
  {
    brand: 'goe', name: 'Charger Gemini flex 11/22', series: 'Gemini',
    description: 'Mobile und stationäre Wallbox in einem, mit offener API.',
    specs: [['Ladeleistung', '11 / 22 kW'], ['Bauform', 'mobil oder Wandhalterung'], ['Steuerbar', '§14a EnWG'], ['Schnittstellen', 'WLAN, API']],
    tags: ['Mobil', '§14a'], uses: RES,
  },
]);

const waermepumpen = make('waermepumpen', [
  {
    brand: 'vaillant', name: 'aroTHERM plus', series: 'aroTHERM',
    description: 'Monoblock-Wärmepumpe mit R290 und Vorlauftemperaturen bis 75 °C, auch für den Bestand geeignet.',
    specs: [['Heizleistung', '3,5–12 kW'], ['Kältemittel', 'R290'], ['Bauart', 'Luft-Wasser, Monoblock'], ['Vorlauf max.', '75 °C'], ['Aufstellung', 'außen']],
    tags: ['R290', 'Bestand'], uses: RES,
  },
  {
    brand: 'viessmann', name: 'Vitocal 250-A', series: 'Vitocal',
    description: 'Leise Luft-Wasser-Wärmepumpe mit R290 für Neubau und Modernisierung.',
    specs: [['Heizleistung', '2,6–13,4 kW'], ['Kältemittel', 'R290'], ['Bauart', 'Monoblock, Split-Innen'], ['Vorlauf max.', '70 °C'], ['Aufstellung', 'außen']],
    tags: ['R290'], uses: RES,
  },
  {
    brand: 'viessmann', name: 'Vitocal 150-A', series: 'Vitocal',
    description: 'Der kompakte Einstieg in die Viessmann-Wärmepumpenwelt mit natürlichem Kältemittel.',
    specs: [['Heizleistung', '4–13 kW'], ['Kältemittel', 'R290'], ['Bauart', 'Monoblock'], ['Vorlauf max.', '70 °C']],
    tags: ['R290'], uses: RES,
  },
  {
    brand: 'bosch', name: 'Compress 5800i AW', series: 'Compress',
    description: 'Flüsterleise Luft-Wasser-Wärmepumpe für Neubau und Bestand mit PV-Anbindung.',
    specs: [['Heizleistung', '4–12 kW'], ['Kältemittel', 'R290'], ['Bauart', 'Monoblock'], ['Vorlauf max.', '75 °C'], ['Smart Grid', 'SG Ready']],
    tags: ['R290', 'SG Ready'], uses: RES,
  },
  {
    brand: 'bosch', name: 'Compress 6800i AW', series: 'Compress',
    description: 'Premium-Wärmepumpe mit hoher Effizienz und intelligenter PV-Eigenverbrauchsoptimierung.',
    specs: [['Heizleistung', '4–12 kW'], ['Kältemittel', 'R290'], ['Bauart', 'Monoblock'], ['Vorlauf max.', '75 °C'], ['Smart Grid', 'SG Ready']],
    tags: ['R290', 'Premium'], uses: RES,
  },
  {
    brand: 'buderus', name: 'Logatherm WLW186i AR', series: 'Logatherm',
    description: 'Monoblock-Wärmepumpe mit R290, kompatibel mit dem Buderus-Systemzubehör.',
    specs: [['Heizleistung', '4–12 kW'], ['Kältemittel', 'R290'], ['Bauart', 'Monoblock'], ['Vorlauf max.', '75 °C'], ['Aufstellung', 'außen']],
    tags: ['R290'], uses: RES,
  },
  {
    brand: 'stiebel', name: 'WPL-A 07 HK 230 Premium', series: 'WPL-A',
    description: 'Luft-Wasser-Wärmepumpe aus Holzminden mit R290 und hoher Effizienz.',
    specs: [['Heizleistung', 'bis 7 kW'], ['Kältemittel', 'R290'], ['Bauart', 'Monoblock'], ['Vorlauf max.', '75 °C'], ['Fertigung', 'Deutschland']],
    tags: ['R290', 'Made in Germany'], uses: RES,
  },
  {
    brand: 'stiebel', name: 'WPL-A 10 HK 400 Premium', series: 'WPL-A',
    description: 'Die größere WPL-A-Variante für Mehrfamilienhäuser und Kaskaden.',
    specs: [['Heizleistung', 'bis 10 kW'], ['Kältemittel', 'R290'], ['Bauart', 'Monoblock'], ['Kaskade', 'möglich'], ['Fertigung', 'Deutschland']],
    tags: ['R290', 'Kaskade'], uses: RES_COM,
  },
  {
    brand: 'daikin', name: 'Altherma 4 H', series: 'Altherma',
    description: 'Hochtemperatur-Wärmepumpe mit R290 als direkter Ersatz für Öl- und Gaskessel.',
    specs: [['Heizleistung', '4–18 kW'], ['Kältemittel', 'R290'], ['Bauart', 'Monoblock'], ['Vorlauf max.', '75 °C']],
    tags: ['R290', 'Hochtemperatur'], uses: RES,
  },
  {
    brand: 'daikin', name: 'Altherma 3 H HT', series: 'Altherma',
    description: 'Bewährte Hochtemperatur-Wärmepumpe für die Sanierung mit Radiatoren.',
    specs: [['Heizleistung', '14–18 kW'], ['Kältemittel', 'R32'], ['Bauart', 'Monoblock / Split'], ['Vorlauf max.', '70 °C']],
    tags: ['Hochtemperatur'], uses: RES,
  },
  {
    brand: 'panasonic', name: 'Aquarea L Serie', series: 'Aquarea',
    description: 'R290-Monoblock mit besonders niedriger Kältemittelmenge und hohem COP.',
    specs: [['Heizleistung', '5–9 kW'], ['Kältemittel', 'R290'], ['Bauart', 'Monoblock'], ['Vorlauf max.', '75 °C']],
    tags: ['R290'], uses: RES,
  },
  {
    brand: 'wolf', name: 'CHA-Monoblock', series: 'CHA',
    description: 'Die leise Monoblock-Wärmepumpe aus Mainburg mit natürlichem Kältemittel.',
    specs: [['Heizleistung', '7–16 kW'], ['Kältemittel', 'R290'], ['Bauart', 'Monoblock'], ['Vorlauf max.', '70 °C'], ['Fertigung', 'Deutschland']],
    tags: ['R290', 'Made in Germany'], uses: RES,
  },
]);

const kabel = make('kabel', [
  {
    brand: 'lapp', name: 'ÖLFLEX SOLAR XLR-R H1Z2Z2-K', series: 'ÖLFLEX SOLAR',
    description: 'Doppelt isoliertes Solarkabel nach EN 50618, UV- und ozonbeständig.',
    specs: [['Norm', 'EN 50618 / H1Z2Z2-K'], ['Querschnitt', '4 / 6 / 10 mm²'], ['Nennspannung', '1,5 kV DC'], ['Aufmachung', 'Ring 100 m, Trommel 500 m']],
    tags: ['H1Z2Z2-K', 'Trommelware'], uses: ALL,
  },
  {
    brand: 'helukabel', name: 'SOLARFLEX-X H1Z2Z2-K', series: 'SOLARFLEX',
    description: 'Verzinnter Kupferleiter, halogenfrei und für hohe Temperaturen ausgelegt.',
    specs: [['Norm', 'EN 50618 / H1Z2Z2-K'], ['Querschnitt', '4 / 6 / 10 mm²'], ['Nennspannung', '1,5 kV DC'], ['Temperatur', '-40 bis +90 °C']],
    tags: ['H1Z2Z2-K'], uses: ALL,
  },
  {
    brand: 'prysmian', name: 'Tecsun (PV) H1Z2Z2-K', series: 'Tecsun',
    description: 'Solarkabel des Weltmarktführers für Großprojekte in Projektmengen.',
    specs: [['Norm', 'EN 50618 / H1Z2Z2-K'], ['Querschnitt', '4–16 mm²'], ['Nennspannung', '1,5 kV DC'], ['Aufmachung', 'Projekttrommeln']],
    tags: ['H1Z2Z2-K', 'Projektmenge'], uses: COM_UTIL,
  },
  {
    brand: 'staubli', name: 'MC4-Evo 2 Steckverbinder', series: 'MC4',
    description: 'Original-Steckverbinder für 1.500-V-Anlagen. Kein Mix mit Kompatibelsteckern.',
    specs: [['Bemessungsspannung', '1.500 V DC'], ['Bemessungsstrom', 'bis 50 A'], ['Querschnitt', '2,5–10 mm²'], ['Schutzart', 'IP68']],
    tags: ['Original MC4', '1.500 V'], uses: ALL,
  },
  {
    brand: 'staubli', name: 'MC4 PV-KST4 / PV-KBT4', series: 'MC4',
    description: 'Der weltweit meistverwendete Solarsteckverbinder, Stecker und Buchse.',
    specs: [['Bemessungsspannung', '1.000 / 1.500 V DC'], ['Bemessungsstrom', 'bis 39 A'], ['Querschnitt', '4 / 6 mm²'], ['Schutzart', 'IP68']],
    tags: ['Original MC4'], uses: ALL,
  },
  {
    brand: 'lapp', name: 'NYY-J Erdkabel 5 × 10 / 5 × 16 mm²', series: 'NYY',
    description: 'Erdverlegbares Energiekabel für die AC-Seite von Gewerbe- und Wohnanlagen.',
    specs: [['Typ', 'NYY-J'], ['Querschnitt', '5 × 10 / 5 × 16 mm²'], ['Nennspannung', '0,6/1 kV'], ['Verlegung', 'Erde, Wasser, Freiluft']],
    tags: ['AC', 'Erdkabel'], uses: RES_COM,
  },
  {
    brand: 'helukabel', name: 'NYM-J 5 × 6 mm²', series: 'NYM',
    description: 'Mantelleitung für die Hausinstallation, z. B. Wechselrichter- und Wallbox-Zuleitung.',
    specs: [['Typ', 'NYM-J'], ['Querschnitt', '5 × 6 mm²'], ['Nennspannung', '300/500 V'], ['Aufmachung', 'Ring 50 m']],
    tags: ['AC'], uses: RES,
  },
  {
    brand: 'lapp', name: 'ETHERLINE Cat.7 Datenkabel', series: 'ETHERLINE',
    description: 'Geschirmtes Datenkabel für Wechselrichter-, Speicher- und Zählerkommunikation.',
    specs: [['Kategorie', 'Cat.7'], ['Schirmung', 'S/FTP'], ['Einsatz', 'Monitoring, Modbus TCP'], ['Aufmachung', 'Ring, Trommel']],
    tags: ['Daten'], uses: ALL,
  },
  {
    brand: 'prysmian', name: 'NA2XY Aluminium-Erdkabel', series: 'NA2XY',
    description: 'Aluminium-Energiekabel für die Netzanbindung von Freiflächen- und Gewerbeanlagen.',
    specs: [['Typ', 'NA2XY'], ['Querschnitt', '4 × 95 bis 4 × 240 mm²'], ['Nennspannung', '0,6/1 kV'], ['Aufmachung', 'Projekttrommeln']],
    tags: ['AC', 'Projektmenge'], uses: COM_UTIL,
  },
]);

export const products: Product[] = [
  ...module,
  ...wechselrichter,
  ...speicher,
  ...montagesysteme,
  ...wallboxen,
  ...waermepumpen,
  ...kabel,
];

export const productsByCategory = (id: CategoryId) => products.filter((p) => p.category === id);
