import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Services',
      links: [
        {
          text: 'Marketing Automation',
          href: getPermalink('#'),
        },
        {
          text: 'Sales Enhancement',
          href: getPermalink('#'),
        },
        {
          text: 'Operations Streamlining',
          href: getPermalink('#'),
        },
        {
          text: 'AI-Powered Growth',
          href: getPermalink('#'),
        },
      ],
    },
    {
      text: 'Company',
      links: [
        {
          text: 'About',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Success Stories',
          href: getPermalink('#'),
        },
      ],
    },
    {
      text: 'Resources',
      links: [
        {
          text: 'Blog',
          href: getBlogPermalink(),
        },
        {
          text: 'Automation Guides',
          href: getPermalink('#'),
        },
        {
          text: 'Case Studies',
          href: getPermalink('#'),
        },
        {
          text: 'YouTube Channel',
          href: 'https://www.youtube.com/@automatyzacjaai',
          target: '_blank',
        },
      ],
    },
  ],
  actions: [{ text: 'Schedule a Call', href: '#contact' }],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Marketing Automation', href: '#' },
        { text: 'Sales Enhancement', href: '#' },
        { text: 'Operations Streamlining', href: '#' },
        { text: 'AI-Powered Growth', href: '#' },
        { text: 'Content Creation', href: '#' },
        { text: 'Custom Solutions', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Automation Guides', href: '#' },
        { text: 'Case Studies', href: '#' },
        { text: 'FAQ', href: '#' },
        { text: 'YouTube Channel', href: 'https://www.youtube.com/@automatyzacjaai' },
        { text: 'Blog', href: getBlogPermalink() },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Success Stories', href: '#' },
        { text: 'Schedule a Call', href: '#contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@automatyzacjaai' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'Twitter', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/capybarastudio' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right">🦫</span>
    © ${new Date().getFullYear()} Capybara Studios
  `,
};
