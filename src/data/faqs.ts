interface FAQItem {
  title: string;
  description: string;
}

export const faqs: FAQItem[] = [
  {
    title: 'What tools do you use?',
    description: `We use a <strong>curated stack of trusted tools</strong> that we've tested in real-world environments over the years. Our recommendations are based on <strong>stability, community support, long-term maintenance, and transparency</strong>. We avoid trendy or unproven platforms, and only use technologies that we would confidently rely on in our own business.<br /><br />You don't need to know the tools—we guide and explain everything. For clients who already use systems like <strong>Notion</strong>, <strong>Google Sheets</strong>, or platforms like <strong>Facebook</strong>, <strong>Instagram</strong>, <strong>WhatsApp</strong>, or <strong>Discord</strong>, we can build automations around your existing stack.<br /><br />If needed, we can also set up your own private automation environment. That might mean:<ul><li>Running your own secure automation server (e.g. n8n) on a local machine or cloud VPS</li><li>Hosting it for you on our infrastructure, fully managed by us</li></ul>Either way, we give you full transparency and control over your system.`,
  },
  {
    title: 'What do I need to get started?',
    description: `<strong>Nothing.</strong> You don't need to know what an API key is, how AI works, or what tools to use—we'll guide you through the entire process.<br /><br />But while technical knowledge isn't necessary, we do love working with businesses who <strong>know their own business well</strong>: what they do, what success means for them, and—ideally—how they measure it.<br /><br />You don't need fancy dashboards or complex metrics. But having a basic understanding of what "good" looks like in your operations or marketing helps us:<ul><li>Define what success looks like</li><li>Design smarter automations</li><li>Make data-driven improvements over time</li></ul>That said, we also support simpler setups where the goal is just: "Is it working?"<br /><br />We adapt to your level of clarity—but the more you know about your own work, the more we can help amplify it.`,
  },
  {
    title: "Is this for me if I don't know how AI works?",
    description: `Yes—<strong>this is exactly for you.</strong><br /><br />Our mission is to cut through the jargon and noise that surrounds AI and automation. We translate the technical world into <strong>human language</strong>, so you can understand what's happening even if you've never written a line of code.<br /><br />We'll explain what each tool does, how decisions are made, and where your data flows—so you're never in the dark. If you're curious, we're happy to explain the "how" behind what we build. If you're not, you'll still get reliable results you can trust.<br /><br />Whether it's automating outreach, generating content, or connecting your tools—we make it understandable, practical, and custom-fit for your business.`,
  },
  {
    title: 'Can I cancel the subscription any time?',
    description: `Yes. You can cancel your subscription at any time—no lock-ins, no penalties.<br /><br />We understand that business needs change. While we're focused on building long-term partnerships and delivering compounding value, we also respect your autonomy. If you feel the systems are running smoothly or want to pause, you're free to opt out.<br /><br />(We haven't defined trial periods or minimum terms yet, but we're open to flexible models that fit different client stages.)`,
  },
  {
    title: 'Can I request custom builds?',
    description: `Absolutely. Custom builds are our <strong>bread and butter</strong>.<br /><br />While we have some repeatable automation templates, every business is at least a little different—and often, a lot different. We <strong>always customize our solutions</strong> to fit the way your business works, your internal tools, your team's habits, and your growth goals.<br /><br />If you need something unique, experimental, or integrated in a very specific way, we're happy to design and build it from the ground up. That's what we do best.`,
  },
  {
    title: 'How long does it take to set up my first automation?',
    description: `Most clients see their first automation live within 1–2 weeks, depending on complexity and your team's availability for feedback. We move quickly, but always at a pace that ensures you're comfortable and in control.`,
  },
  {
    title: 'Will I need to change my existing tools or software?',
    description: `Not at all! We specialize in integrating with the tools you already use—like Google Sheets, Notion, or your CRM. If a new tool would add value, we'll explain why and help you adopt it smoothly, but we never force unnecessary changes.`,
  },
  {
    title: 'What kind of support do you offer after launch?',
    description: `We provide ongoing support, maintenance, and optimization as part of our subscription. You'll have direct access to our team for troubleshooting, updates, and new automation ideas—so your systems keep delivering value as your business evolves.`,
  },
]; 