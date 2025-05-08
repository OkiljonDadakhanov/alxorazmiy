// app/services/newsService.ts

export interface GalleryImage {
    id: number;
    image: string;
    caption: string;
  }
  
  export interface NewsItem {
    id: number;
    title: string;
    content: string;
    main_image: string;
    gallery_images: GalleryImage[];
    created_at: string;
  }
  
  const API_URL = "https://api.olympcenter.uz"; 
  
  export async function getAllNews(): Promise<NewsItem[]> {
    try {
      const response = await fetch(`${API_URL}/api/blog/`, {
        cache: "no-store",
        next: { revalidate: 0 },
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "X-MEDIA-ACCESS": "SECRET123",
          },
      });
  
      if (!response.ok) {
        throw new Error(`Error fetching news: ${response.status}`);
      }
  
      const data = await response.json();
  
      // Optional: add basic runtime validation if needed
      return Array.isArray(data) ? data : [];
    } catch (error) {
      console.error("Failed to fetch news:", error);
      return [];
    }
  }
  
  export async function getNewsById(id: number): Promise<NewsItem | null> {
    try {
      const response = await fetch(`${API_URL}/api/blog/${id}/`, {
        cache: "no-store",
        next: { revalidate: 0 },
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "X-MEDIA-ACCESS": "SECRET123",
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error fetching news: ${response.status}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error(`Failed to fetch news with id ${id}:`, error);
      return null;
    }
  }
  