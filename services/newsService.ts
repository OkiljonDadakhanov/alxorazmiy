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
      console.log("Starting API fetch to", `${API_URL}/api/blog/`);
      
      const response = await fetch(`${API_URL}/api/blog/`, {
        cache: "no-store",
        next: { revalidate: 0 },
        headers: {
          "Content-Type": "application/json", // Fixed the space
          "Accept": "application/json",
          // Consider adding this if your API requires it
        },
      });
    
      console.log("API response status:", response.status);
      
      if (!response.ok) {
        throw new Error(`Error fetching news: ${response.status}`);
      }
    
      const data = await response.json();
      console.log("Data received:", data ? "yes" : "no", "length:", Array.isArray(data) ? data.length : "not an array");
      
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
  