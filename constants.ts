import { Product, BlogPost } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Mastering AI Productivity',
    description: 'A comprehensive 50-page eBook on leveraging AI tools for 10x output.',
    price: 29.99,
    category: 'eBook',
    imageUrl: 'https://picsum.photos/400/300?random=1',
    features: ['50+ Pages', 'PDF Format', 'Cheatsheets included'],
    aiGenerated: true,
    rating: 4.8,
    reviews: 124
  },
  {
    id: '2',
    title: 'MidJourney V6 Ultimate Prompts',
    description: 'Over 1000 high-fidelity prompts for photorealistic AI art generation.',
    price: 19.99,
    category: 'Prompt Pack',
    imageUrl: 'https://picsum.photos/400/300?random=2',
    features: ['1000+ Prompts', 'Style Guide', 'Copy-paste ready'],
    aiGenerated: true,
    rating: 4.9,
    reviews: 89
  },
  {
    id: '3',
    title: 'SaaS Marketing Starter Kit',
    description: 'Complete social media templates, email sequences, and ad copy for startups.',
    price: 49.99,
    category: 'Marketing Kit',
    imageUrl: 'https://picsum.photos/400/300?random=3',
    features: ['Canva Templates', 'Email Scripts', 'Ad Copy'],
    aiGenerated: true,
    rating: 4.7,
    reviews: 56
  },
  {
    id: '4',
    title: 'Notion Second Brain Template',
    description: 'Advanced Notion system for organizing your life and business.',
    price: 35.00,
    category: 'Template',
    imageUrl: 'https://picsum.photos/400/300?random=4',
    features: ['Dashboard', 'CRM', 'Task Tracker'],
    aiGenerated: true,
    rating: 5.0,
    reviews: 210
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'top-10-ai-products-2026',
    title: 'Top 10 AI Digital Products You Can Sell in 2026',
    excerpt: 'Discover the most profitable AI-generated digital products to sell online in 2026 — from prompt packs to marketing kits.',
    date: 'Oct 15, 2025',
    author: 'AI Hub Editor',
    imageUrl: 'https://picsum.photos/800/400?random=10',
    content: `
      <h2 class="text-2xl font-bold text-emerald-400 mb-4">Introduction</h2>
      <p class="mb-4">The digital product economy is booming and AI‑generated products are leading the way. Whether you’re a creator, freelancer, or entrepreneur, AI allows you to produce high‑value digital products faster than ever. In this post, we explore the top 10 digital products that are selling well in 2026, how to create them, and why they’re profitable.</p>
      
      <h3 class="text-xl font-bold text-emerald-300 mt-6 mb-2">1. AI‑Generated eBooks</h3>
      <p class="mb-4">AI can help you write long‑form content in hours, not months. From business guides to self‑help and niche tutorials, these products sell well because they deliver deep value. Create eBooks about trending topics like AI productivity, remote work, and niche hobbies.</p>

      <h3 class="text-xl font-bold text-emerald-300 mt-6 mb-2">2. Prompt Packs</h3>
      <p class="mb-4">Prompt packs are pre‑written prompts designed for AI tools like ChatGPT, MidJourney, Bard, and others. Digital creators buy them to save time and get predictable results. Packs like “1000 High‑Performance Prompts for AI Art” are especially popular.</p>

      <h3 class="text-xl font-bold text-emerald-300 mt-6 mb-2">3. Marketing Template Kits</h3>
      <p class="mb-4">Small businesses and startups need ready‑to‑use marketing assets: email templates, social media posts, ad copy, and branding kits. You can use AI to generate these and package them as a PDF kit.</p>

      <h3 class="text-xl font-bold text-emerald-300 mt-6 mb-2">4. AI Business Automation Blueprints</h3>
      <p class="mb-4">Blueprints that explain how to automate processes using AI tools — email funnels, customer support bots, calendar workflows — are in high demand.</p>

      <h3 class="text-xl font-bold text-emerald-300 mt-6 mb-2">5. Notion Productivity Templates</h3>
      <p class="mb-4">Notion has become the go‑to workspace tool. AI can generate complex dashboards, project planners, CRM templates, and finance trackers.</p>
      
      <p class="mt-8 italic text-gray-400">Read the full guide to learn about Video Script Packs, Music Packs, Stock Art, SEO Bundles, and Chatbot Templates.</p>
    `
  },
  {
    id: 'how-to-write-ebooks-ai',
    title: 'How to Use AI to Write and Sell eBooks',
    excerpt: 'Learn how to use AI tools to write, format, and sell eBooks with proven steps that grow your digital sales.',
    date: 'Oct 18, 2025',
    author: 'Product Lab Team',
    imageUrl: 'https://picsum.photos/800/400?random=11',
    content: `
      <h2 class="text-2xl font-bold text-emerald-400 mb-4">Step 1: Topic Selection</h2>
      <p class="mb-4">Choose topics with proven demand. Tools like Google Trends, Amazon Kindle bestsellers, and niche forums help uncover topics people want to read about.</p>

      <h2 class="text-2xl font-bold text-emerald-400 mb-4">Step 2: Writing the Content with AI Agents</h2>
      <p class="mb-4">Use multi-agent workflows. Prompt one agent to write the outline, then prompt another to write section by section. "Write chapter 1 about automation tools freelancers can use to manage tasks effortlessly. Break chapters into 500 words for clarity."</p>

      <h2 class="text-2xl font-bold text-emerald-400 mb-4">Step 3: Editing & Polishing</h2>
      <p class="mb-4">Though AI is powerful, always edit with your voice. Use tools such as Grammarly or Hemingway to refine tone and clarity.</p>

      <h2 class="text-2xl font-bold text-emerald-400 mb-4">Step 4: Formatting & Cover</h2>
      <p class="mb-4">Turn any written draft into a professional PDF using tools like Canva. Use AI image generators to quickly design a cover.</p>

      <h2 class="text-2xl font-bold text-emerald-400 mb-4">Conclusion</h2>
      <p class="mb-4">AI dramatically lowers the barrier to publishing. By following this workflow, you can produce eBooks that look professional and sell well — even without traditional writing experience.</p>
    `
  },
  {
    id: 'scaling-with-prompt-packs',
    title: 'Scaling Your Income with Prompt Packs',
    excerpt: 'Prompt engineering is the new coding. Learn how to package your best prompts into a profitable digital product.',
    date: 'Oct 20, 2025',
    author: 'AI Art Expert',
    imageUrl: 'https://picsum.photos/800/400?random=12',
    content: `
      <p class="mb-4">Prompt packs are among the highest margin digital products. You create them once, and they sell forever. Here is how to structure a high-converting prompt pack.</p>
      <h3 class="text-xl font-bold text-emerald-300 mt-6 mb-2">Organize by Usecase</h3>
      <p class="mb-4">Don't just dump 1000 prompts. Categorize them: "Portraits," "Landscapes," "Logos," "Web Design." Structure adds value.</p>
      <h3 class="text-xl font-bold text-emerald-300 mt-6 mb-2">Includes Examples</h3>
      <p class="mb-4">Always show the result of the prompt. Buyers want to know what they are getting.</p>
    `
  },
  {
    id: 'marketing-kits-for-agencies',
    title: 'Why Agencies Buy Marketing Kits',
    excerpt: 'Agencies are busy. Speed is their currency. Discover how to build marketing kits that save agencies dozens of hours.',
    date: 'Oct 22, 2025',
    author: 'Growth Specialist',
    imageUrl: 'https://picsum.photos/800/400?random=13',
    content: `
      <p class="mb-4">Marketing kits are comprehensive bundles of assets. Think "Real Estate Social Media Kit" or "Dentist Email Sequence."</p>
      <p class="mb-4">Agencies buy these to resell or use for their clients. If you can use AI to generate high-quality copy and templates, you have a B2B product ready to go.</p>
    `
  },
  {
    id: 'notion-templates-business',
    title: 'Building a Business on Notion Templates',
    excerpt: 'Notion is more than a note-taking app; it is an OS for companies. Here is how to design templates that sell for $50+.',
    date: 'Oct 25, 2025',
    author: 'Template Architect',
    imageUrl: 'https://picsum.photos/800/400?random=14',
    content: `
      <p class="mb-4">The key to a successful Notion template is logic. It's not just pages; it's databases, relations, and rollups.</p>
      <h3 class="text-xl font-bold text-emerald-300 mt-6 mb-2">Popular Niches</h3>
      <ul class="list-disc ml-5 text-gray-300">
        <li>Student Planners</li>
        <li>Freelance CRMs</li>
        <li>Content Calendars</li>
        <li>Finance Trackers</li>
      </ul>
    `
  },
  {
    id: 'seo-content-bundles',
    title: 'SEO Content Bundles: The Hidden Gem',
    excerpt: 'Website owners hate writing boilerplate content. Sell them "Content Bundles" to jumpstart their blogs.',
    date: 'Oct 27, 2025',
    author: 'SEO Wizard',
    imageUrl: 'https://picsum.photos/800/400?random=15',
    content: `
      <p class="mb-4">An SEO Content Bundle includes 10-20 articles on a specific niche, optimized for keywords. For example, "20 Articles about Dog Training."</p>
      <p class="mb-4">Use AI to generate the base content, human-review it, and sell the pack. It's a massive time-saver for affiliate marketers.</p>
    `
  },
  {
    id: 'ai-video-scripts',
    title: 'Monetizing AI Video Scripts',
    excerpt: 'YouTubers are constantly looking for video ideas. Sell script packs for specialized niches.',
    date: 'Oct 29, 2025',
    author: 'Video Strategist',
    imageUrl: 'https://picsum.photos/800/400?random=16',
    content: `
      <p class="mb-4">Short-form content is king. Scripts for TikToks and Reels that are designed to go viral are in high demand.</p>
      <p class="mb-4">Create a pack of "50 Viral Hooks for Finance Creators" and watch it fly off the digital shelf.</p>
    `
  },
  {
    id: 'stock-ai-art',
    title: 'Selling Stock AI Art Collections',
    excerpt: 'Stock photography is being disrupted. Curated AI art collections for websites and presentations are the new stock photo.',
    date: 'Nov 01, 2025',
    author: 'Visual Director',
    imageUrl: 'https://picsum.photos/800/400?random=17',
    content: `
      <p class="mb-4">Don't sell single images. Sell packs. "100 Cyberpunk Backgrounds" or "50 Minimalist Office Illustrations."</p>
      <p class="mb-4">Designers need consistency. Ensure your AI generation style is consistent across the entire pack.</p>
    `
  },
  {
    id: 'audio-loops-ai',
    title: 'AI Generated Audio Loops for Game Devs',
    excerpt: 'Indie game developers need affordable assets. AI music generators can create royalty-free loops instantly.',
    date: 'Nov 03, 2025',
    author: 'Audio Engineer',
    imageUrl: 'https://picsum.photos/800/400?random=18',
    content: `
      <p class="mb-4">Background ambience, menu music, and sound effects. These are essential for game jams and indie projects.</p>
      <p class="mb-4">Package them by genre: "Retro 8-bit," "Horror Ambience," or "Upbeat Platformer."</p>
    `
  },
  {
    id: 'future-of-digital-products',
    title: 'The Future of Digital Products 2030',
    excerpt: 'What comes after PDFs and Templates? A look into interactive, AI-powered mini-apps as products.',
    date: 'Nov 05, 2025',
    author: 'Futurist',
    imageUrl: 'https://picsum.photos/800/400?random=19',
    content: `
      <p class="mb-4">Static files are just the beginning. The future is "active" products. Buying a prompt pack that adjusts itself to your writing style.</p>
      <p class="mb-4">We are moving from "Consumption" to "Co-creation" with the products we buy.</p>
    `
  }
];