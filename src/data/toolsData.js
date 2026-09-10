export const CATEGORIES = [
  { id: 'all', name: 'All Tools' },
  { id: 'writing', name: 'Writing' },
  { id: 'image', name: 'Image' },
  { id: 'video', name: 'Video' },
  { id: 'career', name: 'Career' },
  { id: 'study', name: 'Study' },
  { id: 'business', name: 'Business' },
];

export const TOOLS = [
  {
    id: 'ai-writer',
    name: 'AI Writer',
    category: 'writing',
    description: 'Generate high-quality blog posts, articles, and descriptions.',
    badge: 'Popular',
    placeholder: 'e.g. Write a product description for wireless earbuds...',
  },
  {
    id: 'grammar-fixer',
    name: 'Grammar Fixer',
    category: 'writing',
    description: 'Instantly correct grammar, spelling, and tone.',
    badge: 'Free',
    placeholder: 'Paste your text here to refine...',
  },
  {
    id: 'image-generator',
    name: 'Image Generator',
    category: 'image',
    description: 'Convert prompts into stunning visual images.',
    badge: 'Pro',
    placeholder: 'A futuristic city bathed in neon lights...',
  },
  {
    id: 'script-generator',
    name: 'Script Generator',
    category: 'video',
    description: 'Craft engaging YouTube and TikTok scripts.',
    badge: 'New',
    placeholder: 'Explain 5 tips for productivity...',
  },
  {
    id: 'cv-builder',
    name: 'CV Builder',
    category: 'career',
    description: 'Build polished, ATS-optimized professional resumes.',
    badge: 'Popular',
    placeholder: 'List your skills and background...',
  },
  {
    id: 'business-plan',
    name: 'Business Plan Generator',
    category: 'business',
    description: 'Outline executive summaries and market strategies.',
    badge: 'Pro',
    placeholder: 'Describe your business idea...',
  }
];
