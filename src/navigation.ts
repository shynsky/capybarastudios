import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Services',
      links: [
        {
          text: 'Automation Audit',
          href: getPermalink('/services/automation-audit'),
        },
        {
          text: 'AI SEO Starter Kit',
          href: getPermalink('/services/ai-seo-starter-kit'),
        },
        {
          text: 'Lead Capture + CRM Integrator',
          href: getPermalink('/services/lead-capture-crm-integrator'),
        },
        {
          text: 'Social Media Autopilot',
          href: getPermalink('/services/social-media-autopilot'),
        },
        {
          text: 'Conversational AI Voice Agent',
          href: getPermalink('/services/conversational-ai-voice-agent'),
        },
        {
          text: 'Custom Automation Solutions',
          href: getPermalink('/services/custom-automation-solutions'),
        },
      ],
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Schedule a Call', href: '#contact' }],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        {
          text: 'Automation Audit',
          href: getPermalink('/services/automation-audit'),
        },
        {
          text: 'AI SEO Starter Kit',
          href: getPermalink('/services/ai-seo-starter-kit'),
        },
        {
          text: 'Lead Capture + CRM Integrator',
          href: getPermalink('/services/lead-capture-crm-integrator'),
        },
        {
          text: 'Social Media Autopilot',
          href: getPermalink('/services/social-media-autopilot'),
        },
        {
          text: 'Conversational AI Voice Agent',
          href: getPermalink('/services/conversational-ai-voice-agent'),
        },
        {
          text: 'Custom Automation Solutions',
          href: getPermalink('/services/custom-automation-solutions'),
        },
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
