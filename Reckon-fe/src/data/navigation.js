import { BILLING_NAV_ITEMS } from './billingData';

export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  {
    label: 'Software',
    path: '/software',
    dropdown: true,
    subItems: BILLING_NAV_ITEMS,
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
      { label: 'Help', path: '/help' },
    ],
  },
];


export const TOP_BAR_LINKS = [
  { label: 'Video Tutorials', path: '/tutorials' },
  { label: '🚀 Reckon-SmartScan', href: 'http://smartscan.reckonsales.com/', external: true },
];

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/reckonerp?rdid=qtIUwaKA2anCDL9L&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DgobwmF36%2F#',
  google: 'https://www.google.com/search?sca_esv=285be1eebaca6397&hl=en-GB&gl=in&output=search&kgmid=/g/11crtml_vk&q=Reckon-Best+Pharma+Software&shndl=30&source=sh/x/loc/act/m1/4&kgs=335cd39277c53ea5&shem=shrtsdl&utm_source=shrtsdl,sh/x/loc/act/m1/4',
  linkedin: 'https://www.linkedin.com/company/reckon-software-pvt-ltd/',
  youtube: '#',
  instagram: 'https://www.instagram.com/reckonerpindia?igsh=MXJodmJ3YjdkZnR1eA%3D%3D',
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
