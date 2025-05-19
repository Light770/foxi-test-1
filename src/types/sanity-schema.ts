// TypeScript type definitions

interface SiteSettings {
  _id: string;
  _type: 'siteSettings';
  title: string;
  description?: string;
  keywords?: string[];
  logo?: Image;
  navigation?: Page[];
  socialLinks?: SocialLink[];
  footerText?: string;
  googleAnalyticsId?: string;
  googleSearchConsoleId?: string;
  googleTagManagerIdHead?: string;
  googleTagManagerIdBody?: string;
}

interface Page {
  _id: string;
  _type: 'page';
  title: string;
  slug: Slug;
  seo?: SEO;
  content?: (TextImage | BasicForm | ContactCards | BasicDarkCTA | BasicLightCTA | BasicFAQ | FaqSticky | FeatureCards | FeatureList | FeatureSticky | BasicFeed | HomeCTA | HighlightRows | SignUp | PricingColumns | BasicSocialProof | BasicDarkTestimonials | PricingTable)[];
}

interface BlogPost {
  _id: string;
  _type: 'blogPost';
  title: string;
  slug: Slug;
  publishedAt: string;
  author: Author;
  mainImage?: Image;
  categories?: Category[];
  tags?: string[];
  body?: (Block | Image)[];
  seo?: SEO;
}

interface Author {
  _id: string;
  _type: 'author';
  name: string;
  slug: Slug;
  image?: Image;
  bio?: string;
}

interface Category {
  _id: string;
  _type: 'category';
  title: string;
  slug: Slug;
  description?: string;
}

interface SEO {
  title?: string;
  description?: string;
  image?: Image;
}

interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  hotspot?: {
    _type: 'sanity.imageHotspot';
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

interface Slug {
  _type: 'slug';
  current: string;
}

interface TextImage {
  _type: 'textImage';
  text?: Block[];
  image?: Image;
  imagePosition?: 'left' | 'right';
}

interface BasicForm {
  _type: 'basicForm';
  title?: string;
  description?: string;
  successMessage?: string;
}

interface ContactCards {
  _type: 'contactCards';
  cards?: {
    title?: string;
    description?: string;
    icon?: Image;
    link?: string;
  }[];
}

interface BasicDarkCTA {
  _type: 'basicDarkCTA';
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

interface BasicLightCTA {
  _type: 'basicLightCTA';
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

interface BasicFAQ {
  _type: 'basicFAQ';
  title?: string;
  questions?: {
    question?: string;
    answer?: string;
  }[];
}

interface FaqSticky {
  _type: 'faqSticky';
  title?: string;
  questions?: {
    question?: string;
    answer?: string;
  }[];
}

interface FeatureCards {
  _type: 'featureCards';
  title?: string;
  cards?: {
    title?: string;
    description?: string;
    image?: Image;
  }[];
}

interface FeatureList {
  _type: 'featureList';
  title?: string;
  features?: {
    title?: string;
    description?: string;
  }[];
}

interface FeatureSticky {
  _type: 'featureSticky';
  title?: string;
  features?: {
    title?: string;
    description?: string;
    image?: Image;
  }[];
}

interface BasicFeed {
  _type: 'basicFeed';
  title?: string;
  items?: {
    title?: string;
    description?: string;
    image?: Image;
    link?: string;
  }[];
}

interface HomeCTA {
  _type: 'homeCTA';
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  image?: Image;
}

interface HighlightRows {
  _type: 'highlightRows';
  rows?: {
    title?: string;
    description?: string;
    image?: Image;
    link?: string;
  }[];
}

interface SignUp {
  _type: 'signUp';
  title?: string;
  description?: string;
  formId?: string;
}

interface PricingColumns {
  _type: 'pricingColumns';
  title?: string;
  columns?: {
    title?: string;
    price?: number;
    features?: string[];
    buttonText?: string;
    buttonLink?: string;
  }[];
}

interface BasicSocialProof {
  _type: 'basicSocialProof';
  title?: string;
  items?: {
    name?: string;
    company?: string;
    image?: Image;
    quote?: string;
  }[];
}

interface BasicDarkTestimonials {
  _type: 'basicDarkTestimonials';
  title?: string;
  testimonials?: {
    name?: string;
    company?: string;
    image?: Image;
    quote?: string;
  }[];
}

interface PricingTable {
  _type: 'pricingTable';
  header?: PricingTableHeader;
  body?: PricingTableBody;
  footer?: PricingTableFooter;
}

interface PricingTableHeader {
  _type: 'pricingTableHeader';
  title?: string;
  description?: string;
}

interface PricingTableBody {
  _type: 'pricingTableBody';
  rows?: {
    label?: string;
    plan1?: boolean;
    plan2?: boolean;
    plan3?: boolean;
  }[];
}

interface PricingTableFooter {
  _type: 'pricingTableFooter';
  plan1ButtonText?: string;
  plan1ButtonLink?: string;
  plan2ButtonText?: string;
  plan2ButtonLink?: string;
  plan3ButtonText?: string;
  plan3ButtonLink?: string;
}

interface SocialLink {
  platform?: string;
  url?: string;
}

interface Block {
  _type: 'block';
  [key: string]: any; // Allow other properties for rich text blocks
}
