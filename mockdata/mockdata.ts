type Tag = {
  title: string;
  slug: string;
};

type Category = {
  [key: string]: Tag[];
};
export const categories = {
  acquisition: [
    { title: "Content", slug: "content" },
    { title: "SEO", slug: "seo" },
    { title: "Sales", slug: "sales" },
    { title: "Social", slug: "social" },
    { title: "Ads", slug: "ads" },
  ],
  conversion: [
    { title: "Copywriting", slug: "copywriting" },
    { title: "Landing Page", slug: "landing-page" },
  ],
  more: [
    { title: "Retention", slug: "retention" },
    { title: "Brand", slug: "brand" },
    { title: "Referral", slug: "referral" },
    { title: "Creative", slug: "creative" },
  ],
  newsletter: [],
};
export const examplesData = [
  { title: "The art of viral food posts", duration: "1 min", tag: "content" },
  {
    title: "Capturing the perfect lifestyle shot",
    duration: "3 mins",
    tag: "content",
  },
  {
    title: "How to make content that sticks",
    duration: "45 secs",
    tag: "content",
  },

  {
    title: "The rise of micro-influencers",
    duration: "2 mins",
    tag: "content",
  },
  {
    title: "Mastering Instagram content",
    duration: "30 secs",
    tag: "content",
  },

  { title: "How to boost organic traffic", duration: "3 mins", tag: "seo" },
  { title: "Optimizing for Google in 2024", duration: "2 mins", tag: "seo" },
  { title: "Mastering on-page SEO", duration: "1.5 mins", tag: "seo" },
  { title: "SEO for beginners", duration: "1 min", tag: "seo" },
  { title: "The ultimate SEO checklist", duration: "2.5 mins", tag: "seo" },
  { title: "Local SEO tips", duration: "1 min", tag: "seo" },
  { title: "Backlink strategies that work", duration: "3 mins", tag: "seo" },

  { title: "How to ace cold calls", duration: "1 min", tag: "sales" },
  {
    title: "Negotiation tactics that close deals",
    duration: "2 mins",
    tag: "sales",
  },
  {
    title: "Building rapport with clients",
    duration: "2.5 mins",
    tag: "sales",
  },
  { title: "The science of selling", duration: "1.5 mins", tag: "sales" },
  {
    title: "Overcoming objections in sales",
    duration: "3 mins",
    tag: "sales",
  },
  { title: "Sales funnels explained", duration: "1 min", tag: "sales" },

  {
    title: "Same interview. 700x reach.",
    duration: "30 secs",
    tag: "social",
  },
  { title: "How to go viral on TikTok", duration: "1 min", tag: "social" },
  {
    title: "Building a community on social media",
    duration: "2 mins",
    tag: "social",
  },
  {
    title: "Leveraging hashtags for engagement",
    duration: "1.5 mins",
    tag: "social",
  },
  {
    title: "Growing your audience on Instagram",
    duration: "2 mins",
    tag: "social",
  },
  {
    title: "Social media trends to watch",
    duration: "3 mins",
    tag: "social",
  },
  {
    title: "Content calendar strategies",
    duration: "45 secs",
    tag: "social",
  },

  { title: "Creating ads that convert", duration: "1 min", tag: "ads" },
  { title: "The psychology of advertising", duration: "2 mins", tag: "ads" },
  {
    title: "How to target the right audience",
    duration: "1.5 mins",
    tag: "ads",
  },
  { title: "Optimizing ad spend for ROI", duration: "2 mins", tag: "ads" },

  { title: "Google Ads secrets", duration: "2.5 mins", tag: "ads" },
  {
    title: "Creating visually compelling ads",
    duration: "1 min",
    tag: "ads",
  },

  {
    title: "Writing headlines that sell",
    duration: "1 min",
    tag: "copywriting",
  },
  {
    title: "Crafting persuasive copy",
    duration: "2 mins",
    tag: "copywriting",
  },
  {
    title: "Copywriting for conversions",
    duration: "1.5 mins",
    tag: "copywriting",
  },
  {
    title: "How to write irresistible offers",
    duration: "2 mins",
    tag: "copywriting",
  },
  {
    title: "Storytelling in marketing",
    duration: "3 mins",
    tag: "copywriting",
  },
  { title: "Writing for the web", duration: "1 min", tag: "copywriting" },
  {
    title: "Email copy that converts",
    duration: "2.5 mins",
    tag: "copywriting",
  },

  {
    title: "The anatomy of a perfect landing page",
    duration: "2 mins",
    tag: "landing-page",
  },
  {
    title: "Landing page best practices",
    duration: "1.5 mins",
    tag: "landing-page",
  },
  {
    title: "How to design a high-converting landing page",
    duration: "2 mins",
    tag: "landing-page",
  },
  {
    title: "Landing page copywriting tips",
    duration: "1 min",
    tag: "landing-page",
  },
  {
    title: "Using A/B testing on landing pages",
    duration: "2.5 mins",
    tag: "landing-page",
  },
  {
    title: "Examples of successful landing pages",
    duration: "3 mins",
    tag: "landing-page",
  },
  { title: "SEO for landing pages", duration: "1 min", tag: "landing-page" },

  {
    title: "Reducing churn with better support",
    duration: "2 mins",
    tag: "retention",
  },
  {
    title: "Retargeting for customer retention",
    duration: "2.5 mins",
    tag: "retention",
  },
  {
    title: "How to increase lifetime value",
    duration: "1 min",
    tag: "retention",
  },
  {
    title: "The art of customer delight",
    duration: "1.5 mins",
    tag: "retention",
  },

  {
    title: "Building a brand that resonates",
    duration: "2 mins",
    tag: "brand",
  },

  { title: "How to create brand loyalty", duration: "1 min", tag: "brand" },
  { title: "Building a personal brand", duration: "2.5 mins", tag: "brand" },
  {
    title: "Rebranding strategies for success",
    duration: "2 mins",
    tag: "brand",
  },

  { title: "How to get more referrals", duration: "1 min", tag: "referral" },
  {
    title: "The power of word-of-mouth marketing",
    duration: "2 mins",
    tag: "referral",
  },
  {
    title: "Creating an effective referral program",
    duration: "2.5 mins",
    tag: "referral",
  },
  {
    title: "Referral marketing strategies",
    duration: "3 mins",
    tag: "referral",
  },
  {
    title: "How to reward your best referrers",
    duration: "1.5 mins",
    tag: "referral",
  },
  {
    title: "Using referrals to grow your business",
    duration: "2 mins",
    tag: "referral",
  },
  {
    title: "The psychology behind referrals",
    duration: "1 min",
    tag: "referral",
  },

  {
    title: "Posting seltzer. Making money.",
    duration: "2 mins",
    tag: "creative",
  },
  { title: "How to spark creativity", duration: "1 min", tag: "creative" },
  {
    title: "Creative brainstorming techniques",
    duration: "2 mins",
    tag: "creative",
  },
];
