import { CityCoverage, StateCoverage, Testimonial } from '../types';

export const MAJOR_CITIES: CityCoverage[] = [
  { city: 'New York City', state: 'NY', latencyMs: 12, uptimePercent: '99.999%', speedMbps: 1680, status: 'ultra', coordinates: [85, 32] },
  { city: 'Los Angeles', state: 'CA', latencyMs: 14, uptimePercent: '99.999%', speedMbps: 1540, status: 'ultra', coordinates: [15, 58] },
  { city: 'Chicago', state: 'IL', latencyMs: 13, uptimePercent: '99.999%', speedMbps: 1620, status: 'ultra', coordinates: [65, 35] },
  { city: 'Miami', state: 'FL', latencyMs: 15, uptimePercent: '99.999%', speedMbps: 1490, status: 'ultra', coordinates: [82, 85] },
  { city: 'Dallas', state: 'TX', latencyMs: 14, uptimePercent: '99.999%', speedMbps: 1580, status: 'ultra', coordinates: [52, 70] },
  { city: 'Seattle', state: 'WA', latencyMs: 16, uptimePercent: '99.999%', speedMbps: 1450, status: 'ultra', coordinates: [18, 15] },
  { city: 'Denver', state: 'CO', latencyMs: 15, uptimePercent: '99.999%', speedMbps: 1420, status: 'optimal', coordinates: [38, 45] },
  { city: 'Atlanta', state: 'GA', latencyMs: 13, uptimePercent: '99.999%', speedMbps: 1590, status: 'ultra', coordinates: [75, 68] },
  { city: 'San Francisco', state: 'CA', latencyMs: 14, uptimePercent: '99.999%', speedMbps: 1510, status: 'ultra', coordinates: [12, 48] },
  { city: 'Boston', state: 'MA', latencyMs: 12, uptimePercent: '99.999%', speedMbps: 1650, status: 'ultra', coordinates: [88, 28] },
  { city: 'Phoenix', state: 'AZ', latencyMs: 15, uptimePercent: '99.999%', speedMbps: 1480, status: 'optimal', coordinates: [25, 65] },
  { city: 'Las Vegas', state: 'NV', latencyMs: 14, uptimePercent: '99.999%', speedMbps: 1520, status: 'ultra', coordinates: [20, 55] },
];

export const US_STATES: StateCoverage[] = [
  { code: 'AL', name: 'Alabama', coveragePercent: 99.8, avgSpeedMbps: 1320, nodesCount: '1,420 Nodes' },
  { code: 'AK', name: 'Alaska', coveragePercent: 98.2, avgSpeedMbps: 980, nodesCount: '480 Nodes' },
  { code: 'AZ', name: 'Arizona', coveragePercent: 99.9, avgSpeedMbps: 1480, nodesCount: '2,890 Nodes' },
  { code: 'AR', name: 'Arkansas', coveragePercent: 99.6, avgSpeedMbps: 1290, nodesCount: '1,150 Nodes' },
  { code: 'CA', name: 'California', coveragePercent: 99.99, avgSpeedMbps: 1640, nodesCount: '12,400 Nodes' },
  { code: 'CO', name: 'Colorado', coveragePercent: 99.9, avgSpeedMbps: 1450, nodesCount: '3,200 Nodes' },
  { code: 'CT', name: 'Connecticut', coveragePercent: 99.95, avgSpeedMbps: 1580, nodesCount: '1,800 Nodes' },
  { code: 'DE', name: 'Delaware', coveragePercent: 99.98, avgSpeedMbps: 1610, nodesCount: '920 Nodes' },
  { code: 'FL', name: 'Florida', coveragePercent: 99.99, avgSpeedMbps: 1590, nodesCount: '9,800 Nodes' },
  { code: 'GA', name: 'Georgia', coveragePercent: 99.96, avgSpeedMbps: 1550, nodesCount: '6,400 Nodes' },
  { code: 'HI', name: 'Hawaii', coveragePercent: 99.4, avgSpeedMbps: 1250, nodesCount: '850 Nodes' },
  { code: 'ID', name: 'Idaho', coveragePercent: 99.1, avgSpeedMbps: 1180, nodesCount: '980 Nodes' },
  { code: 'IL', name: 'Illinois', coveragePercent: 99.98, avgSpeedMbps: 1620, nodesCount: '8,100 Nodes' },
  { code: 'IN', name: 'Indiana', coveragePercent: 99.9, avgSpeedMbps: 1490, nodesCount: '4,100 Nodes' },
  { code: 'IA', name: 'Iowa', coveragePercent: 99.5, avgSpeedMbps: 1350, nodesCount: '2,100 Nodes' },
  { code: 'KS', name: 'Kansas', coveragePercent: 99.6, avgSpeedMbps: 1380, nodesCount: '2,300 Nodes' },
  { code: 'KY', name: 'Kentucky', coveragePercent: 99.7, avgSpeedMbps: 1410, nodesCount: '2,600 Nodes' },
  { code: 'LA', name: 'Louisiana', coveragePercent: 99.8, avgSpeedMbps: 1440, nodesCount: '3,100 Nodes' },
  { code: 'ME', name: 'Maine', coveragePercent: 98.9, avgSpeedMbps: 1220, nodesCount: '1,100 Nodes' },
  { code: 'MD', name: 'Maryland', coveragePercent: 99.97, avgSpeedMbps: 1610, nodesCount: '4,500 Nodes' },
  { code: 'MA', name: 'Massachusetts', coveragePercent: 99.99, avgSpeedMbps: 1650, nodesCount: '5,800 Nodes' },
  { code: 'MI', name: 'Michigan', coveragePercent: 99.92, avgSpeedMbps: 1520, nodesCount: '6,900 Nodes' },
  { code: 'MN', name: 'Minnesota', coveragePercent: 99.85, avgSpeedMbps: 1480, nodesCount: '4,600 Nodes' },
  { code: 'MS', name: 'Mississippi', coveragePercent: 99.5, avgSpeedMbps: 1310, nodesCount: '1,850 Nodes' },
  { code: 'MO', name: 'Missouri', coveragePercent: 99.8, avgSpeedMbps: 1460, nodesCount: '4,400 Nodes' },
  { code: 'MT', name: 'Montana', coveragePercent: 98.4, avgSpeedMbps: 1120, nodesCount: '890 Nodes' },
  { code: 'NE', name: 'Nebraska', coveragePercent: 99.3, avgSpeedMbps: 1340, nodesCount: '1,750 Nodes' },
  { code: 'NV', name: 'Nevada', coveragePercent: 99.85, avgSpeedMbps: 1520, nodesCount: '3,400 Nodes' },
  { code: 'NH', name: 'New Hampshire', coveragePercent: 99.4, avgSpeedMbps: 1390, nodesCount: '1,250 Nodes' },
  { code: 'NJ', name: 'New Jersey', coveragePercent: 99.99, avgSpeedMbps: 1670, nodesCount: '7,200 Nodes' },
  { code: 'NM', name: 'New Mexico', coveragePercent: 99.2, avgSpeedMbps: 1330, nodesCount: '1,650 Nodes' },
  { code: 'NY', name: 'New York', coveragePercent: 99.99, avgSpeedMbps: 1680, nodesCount: '14,800 Nodes' },
  { code: 'NC', name: 'North Carolina', coveragePercent: 99.95, avgSpeedMbps: 1570, nodesCount: '7,400 Nodes' },
  { code: 'ND', name: 'North Dakota', coveragePercent: 98.7, avgSpeedMbps: 1150, nodesCount: '820 Nodes' },
  { code: 'OH', name: 'Ohio', coveragePercent: 99.95, avgSpeedMbps: 1560, nodesCount: '8,600 Nodes' },
  { code: 'OK', name: 'Oklahoma', coveragePercent: 99.6, avgSpeedMbps: 1390, nodesCount: '2,800 Nodes' },
  { code: 'OR', name: 'Oregon', coveragePercent: 99.7, avgSpeedMbps: 1440, nodesCount: '3,300 Nodes' },
  { code: 'PA', name: 'Pennsylvania', coveragePercent: 99.96, avgSpeedMbps: 1600, nodesCount: '9,400 Nodes' },
  { code: 'RI', name: 'Rhode Island', coveragePercent: 99.99, avgSpeedMbps: 1620, nodesCount: '1,100 Nodes' },
  { code: 'SC', name: 'South Carolina', coveragePercent: 99.85, avgSpeedMbps: 1510, nodesCount: '3,900 Nodes' },
  { code: 'SD', name: 'South Dakota', coveragePercent: 98.8, avgSpeedMbps: 1190, nodesCount: '910 Nodes' },
  { code: 'TN', name: 'Tennessee', coveragePercent: 99.9, avgSpeedMbps: 1540, nodesCount: '5,100 Nodes' },
  { code: 'TX', name: 'Texas', coveragePercent: 99.99, avgSpeedMbps: 1630, nodesCount: '16,200 Nodes' },
  { code: 'UT', name: 'Utah', coveragePercent: 99.8, avgSpeedMbps: 1470, nodesCount: '2,950 Nodes' },
  { code: 'VT', name: 'Vermont', coveragePercent: 99.1, avgSpeedMbps: 1280, nodesCount: '860 Nodes' },
  { code: 'VA', name: 'Virginia', coveragePercent: 99.97, avgSpeedMbps: 1610, nodesCount: '6,800 Nodes' },
  { code: 'WA', name: 'Washington', coveragePercent: 99.94, avgSpeedMbps: 1580, nodesCount: '6,100 Nodes' },
  { code: 'WV', name: 'West Virginia', coveragePercent: 99.2, avgSpeedMbps: 1260, nodesCount: '1,450 Nodes' },
  { code: 'WI', name: 'Wisconsin', coveragePercent: 99.8, avgSpeedMbps: 1480, nodesCount: '4,800 Nodes' },
  { code: 'WY', name: 'Wyoming', coveragePercent: 98.5, avgSpeedMbps: 1110, nodesCount: '780 Nodes' },
];

export const TESTIMONIALS_LIST: Testimonial[] = [
  {
    id: 't1',
    name: 'Alexander Volkov',
    location: 'Chicago, IL',
    phoneModel: 'iPhone 17 Pro Max',
    rating: 5,
    date: '2 hours ago',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    comment: {
      en: "Switched from Verizon. The 5G Ultra speed on MyVivaMobile is insane! 1,500 Mbps in downtown Chicago and 13ms ping. eSIM set up in literally 45 seconds.",
      ru: "Перешел с Verizon. Скорость 5G Ultra на VIVA просто невероятная! 1500 Мбит/с в центре Чикаго и пинг 13 мс. eSIM активировал буквально за 45 секунд.",
      es: "Me cambié de Verizon. ¡La velocidad 5G Ultra en MyVivaMobile es increíble! 1,500 Mbps en Chicago con 13ms de ping. Activé la eSIM en 45 segundos.",
      lt: "Perėjau iš Verizon tinklo. VIVA 5G greitis Čikagoje įspūdingas – siekia 1500 Mbps, o delsa vos 13ms. eSIM aktyvavau vos per 45 sekundes!"
    }
  },
  {
    id: 't2',
    name: 'Elena Rostova',
    location: 'Miami, FL',
    phoneModel: 'Samsung Galaxy S26 Ultra',
    rating: 5,
    date: 'Yesterday',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    comment: {
      en: "Ordered the Galaxy S26 Ultra AI kit on www.MyVivaMobile.Com. Overnight delivery and zero dropped calls across Florida. Customer service AI chat is so fast!",
      ru: "Заказала Galaxy S26 Ultra на сайте www.MyVivaMobile.Com. Доставили на следующее утро! Ни единого обрыва связи во всей Флориде. ИИ-чат поддержки отвечает мгновенно!",
      es: "Pedí el Galaxy S26 Ultra en www.MyVivaMobile.Com. Llegó a la mañana siguiente y la señal es perfecta en Florida. El chat IA de soporte es súper rápido.",
      lt: "Užsisakiau Galaxy S26 Ultra svetainėje www.MyVivaMobile.Com. Pristatė kitos dienos rytą! Puikus ryšys visoje Floridoje, o DI pagalbos pokalbis veikia akimirksniu."
    }
  },
  {
    id: 't3',
    name: 'Carlos Mendoza',
    location: 'Dallas, TX',
    phoneModel: 'VIVA eSIM Pro Kit',
    rating: 5,
    date: '3 days ago',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    comment: {
      en: "Traveling between US, Mexico, and Spain has never been easier. The unlimited roaming eSIM works automatically on 5G wherever I land. 5 stars all the way!",
      ru: "Путешествовать между США, Мексикой и Европой стало элементарно. Безлимитная в роуминге eSIM цепляет 5G автоматически в любом аэропорту. Твердая 5!",
      es: "Viajar entre EE. UU., México y España nunca fue tan fácil. La eSIM con roaming ilimitado se conecta a 5G automáticamente en cualquier aeropuerto. ¡5 estrellas!",
      lt: "Kelionių tarp JAV, Meksikos ir Ispanijos metu ryšys veikia nepriekaištingai. Neribotas eSIM tarptautinis ryšys automatiškai randa 5G tinklą bet kuriame oro uoste!"
    }
  },
  {
    id: 't4',
    name: 'Mantas Petrauskas',
    location: 'New York, NY',
    phoneModel: 'iPhone 16 Pro',
    rating: 5,
    date: '4 days ago',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    comment: {
      en: "Best telecom decision I ever made. T-Mobile Ultra capacity towers give me 1.6 Gbps in Manhattan. Plus having Lithuanian language support is a huge bonus!",
      ru: "Лучшее решение на рынке связи. Вышки T-Mobile Ultra выдают 1.6 Гбит/с на Манхэттене. Поддержка на родном языке — огромный плюс!",
      es: "La mejor decisión de telefonía. Las torres T-Mobile Ultra me dan 1.6 Gbps en Manhattan. ¡Tener soporte multilingüe es un gran detalle!",
      lt: "Geriausias sprendimas mobiliojo ryšio rinkoje! T-Mobile Ultra bokštai Manhatane užtikrina 1.6 Gbps greitį. O galimybė gauti pagalbą lietuviškai yra nuostabu!"
    }
  }
];
