import { BUSINESS_APPS, VERTICALS, ERP_SOLUTIONS } from './softwares';

export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  {
    label: 'Softwares',
    path: '/softwares',
    megaMenu: true,
    sections: [
      {
        title: 'Business Applications',
        items: BUSINESS_APPS.map((app) => ({
          label: app.name,
          slug: app.slug,
          description: app.tagline,
        })),
      },
      {
        title: 'Industry Verticals',
        items: VERTICALS.slice(0, 10).map((v) => ({
          label: v.name,
          slug: v.slug,
          description: v.tagline,
        })),
      },
      {
        title: 'More Verticals',
        items: VERTICALS.slice(10).map((v) => ({
          label: v.name,
          slug: v.slug,
          description: v.tagline,
        })),
      },
      {
        title: 'ERP Solutions',
        items: ERP_SOLUTIONS.map((erp) => ({
          label: erp.name,
          slug: erp.slug,
          description: erp.tagline,
        })),
      },
    ],
  },
  { label: 'Downloads', path: '/downloads' },
  {
    label: 'Company',
    path: '/about',
    dropdown: true,
    subItems: [
      { label: 'About Us', path: '/about' },
      { label: 'Contact', path: '/contact' },
      { label: 'Partners With Us', path: '/partners' },
      { label: 'Gallery / Events', path: '/gallery' },
      { label: 'Career', path: '/career' },
      { label: 'Help', path: '/help' },
    ],
  },
];

export const TOP_BAR_LINKS = [
  { label: 'Admin', path: '/admin' },
  { label: 'Login', href: 'https://reckoncare.reckonsales.com/Account/Login', external: true },
  { label: 'Video Tutorials', path: '/tutorials' },
  { label: '🚀 Reckon-SmartScan', href: 'http://smartscan.reckonsales.com/', external: true },
];

export const SOCIAL_LINKS = {
  facebook: '#',
  twitter: '#',
  linkedin: '#',
  youtube: '#',
  instagram: '#',
};

export const CONTACT_INFO = {
  address: 'SF-2 New Medicine Market, Meer Jaan Lane, Naya Gaon East, Gautam Budha Marg, Lucknow-226018, Uttar Pradesh, India',
  company: 'Reckon Sales Private Limited',
  phone: '0522-4972500',
  helpline: ['6389 590 600', '6389 590 700', '6389 590 800', '6389 590 900'],
  salesEmail: 'sales@reckonsales.com',
  supportEmail: 'care@reckonsales.com',
  email: 'sales@reckonsales.com',
  website: 'https://reckonsales.com',
  timings: {
    weekdays: 'Mon – Sat: 10:00 AM – 7:00 PM',
    sunday: 'Sun: 11:00 AM – 6:00 PM',
  },
};
