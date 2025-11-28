export interface NewsItem {
  id: number;
  title: string;
  image: string;
  date: string;
  time: string;
  category: string;
  excerpt?: string;
  content?: string;
}

export interface HeaderProps {
  toggleMenu: () => void;
}

export interface NavigationProps {
  isOpen: boolean;
  closeMenu: () => void;
}

export interface NewsCardProps {
  news: NewsItem;
  featured?: boolean;
}

export interface NewsGridProps {
  news: NewsItem[];
}

export interface TrendingTopicsProps {
  topics: string[];
}

export interface FeaturedNewsProps {
  news: NewsItem;
}