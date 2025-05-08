export interface NewsItem {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    mainImage: string;
    additionalImages?: string[];
    date: string;
  }
  
  export interface NewsApiResponse {
    data: NewsItem[];
    total: number;
    page: number;
    pageSize: number;
  }
  
  export interface NewsDetailApiResponse {
    data: NewsItem;
  }