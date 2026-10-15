export interface Brand {
  id: string;
  name: string;
  logo?: string;
  /** Logo ist weiß/hell und muss auf hellem Grund eingefärbt werden */
  light?: boolean;
  origin: string;
}

export const brands: Brand[] = [
  // Module
  { id: 'trina', name: 'Trina Solar', logo: 'trina.svg', origin: 'China' },
  { id: 'ja', name: 'JA Solar', logo: 'ja.svg', origin: 'China' },
  { id: 'longi', name: 'LONGi', logo: 'longi.png', origin: 'China' },
  { id: 'jinko', name: 'Jinko Solar', logo: 'jinko.png', origin: 'China' },
  { id: 'aiko', name: 'Aiko', logo: 'aiko.svg', light: true, origin: 'China' },
  { id: 'canadian', name: 'Canadian Solar', logo: 'canadian.png', origin: 'Kanada' },
  { id: 'dmegc', name: 'DMEGC Solar', logo: 'dmegc.png', origin: 'China' },
  // Wechselrichter
  { id: 'sma', name: 'SMA', logo: 'sma.svg', origin: 'Deutschland' },
  { id: 'huawei', name: 'Huawei', logo: 'huawei.svg', origin: 'China' },
  { id: 'fronius', name: 'Fronius', logo: 'fronius.jpg', origin: 'Österreich' },
  { id: 'solaredge', name: 'SolarEdge', logo: 'solaredge.svg', origin: 'Israel' },
  { id: 'sungrow', name: 'Sungrow', logo: 'sungrow.svg', origin: 'China' },
  { id: 'goodwe', name: 'GoodWe', logo: 'goodwe.svg', origin: 'China' },
  { id: 'enphase', name: 'Enphase', logo: 'enphase.svg', origin: 'USA' },
  { id: 'kostal', name: 'KOSTAL', origin: 'Deutschland' },
  // Speicher
  { id: 'byd', name: 'BYD', logo: 'byd.svg', origin: 'China' },
  { id: 'sonnen', name: 'sonnen', logo: 'sonnen.png', origin: 'Deutschland' },
  { id: 'tesla', name: 'Tesla', logo: 'tesla.svg', origin: 'USA' },
  { id: 'pylontech', name: 'Pylontech', logo: 'pylontech.svg', origin: 'China' },
  // Montage
  { id: 'k2', name: 'K2 Systems', logo: 'k2.svg', origin: 'Deutschland' },
  { id: 'schletter', name: 'Schletter', logo: 'schletter.svg', origin: 'Deutschland' },
  { id: 'valk', name: 'Van der Valk Solar Systems', origin: 'Niederlande' },
  // Wallboxen
  { id: 'abb', name: 'ABB E-mobility', logo: 'abb.svg', origin: 'Schweiz' },
  { id: 'webasto', name: 'Webasto', logo: 'webasto.svg', origin: 'Deutschland' },
  { id: 'keba', name: 'KEBA', origin: 'Österreich' },
  { id: 'mennekes', name: 'Mennekes', logo: 'mennekes.svg', origin: 'Deutschland' },
  { id: 'easee', name: 'Easee', logo: 'easee.svg', origin: 'Norwegen' },
  { id: 'zaptec', name: 'Zaptec', logo: 'zaptec.png', origin: 'Norwegen' },
  { id: 'alfen', name: 'Alfen', logo: 'alfen.svg', origin: 'Niederlande' },
  { id: 'goe', name: 'go-e', origin: 'Österreich' },
  // Wärmepumpen
  { id: 'vaillant', name: 'Vaillant', logo: 'vaillant.svg', origin: 'Deutschland' },
  { id: 'viessmann', name: 'Viessmann', logo: 'viessmann.svg', origin: 'Deutschland' },
  { id: 'bosch', name: 'Bosch', logo: 'bosch.svg', origin: 'Deutschland' },
  { id: 'buderus', name: 'Buderus', logo: 'buderus.svg', origin: 'Deutschland' },
  { id: 'stiebel', name: 'Stiebel Eltron', logo: 'stiebel.svg', origin: 'Deutschland' },
  { id: 'daikin', name: 'Daikin', logo: 'daikin.svg', origin: 'Japan' },
  { id: 'panasonic', name: 'Panasonic', logo: 'panasonic.svg', origin: 'Japan' },
  { id: 'wolf', name: 'Wolf', origin: 'Deutschland' },
  // Kabel
  { id: 'lapp', name: 'LAPP', logo: 'lapp.svg', origin: 'Deutschland' },
  { id: 'helukabel', name: 'HELUKABEL', logo: 'helukabel.svg', origin: 'Deutschland' },
  { id: 'staubli', name: 'Stäubli', logo: 'staubli.svg', origin: 'Schweiz' },
  { id: 'prysmian', name: 'Prysmian', logo: 'prysmian.svg', origin: 'Italien' },
];

export const brandById = Object.fromEntries(brands.map((b) => [b.id, b])) as Record<string, Brand>;
