import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/ui/page-header";
import { getAllNews, getNewsById } from "@/services/newsService";
import { formatDate } from "@/utils/dateFormatter";

interface NewsDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Main Page Component
export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  // Explicitly await the params object
  const resolvedParams = await params;
  const newsId = parseInt(resolvedParams.id);

  if (isNaN(newsId)) return notFound();

  const newsItem = await getNewsById(newsId);

  if (!newsItem) return notFound();

  return (
    <>
      <PageHeader title={newsItem.title} />
      <section className="p-4 max-w-4xl mx-auto">
        <Link
          href="/news"
          className="text-blue-600 hover:underline mb-6 inline-block"
        >
          ← Back to all news
        </Link>

        <div className="text-sm text-gray-500 mb-4">
          {formatDate(newsItem.created_at)}
        </div>

        {/* Main Image */}
        <div className="mb-8 relative h-64 md:h-96">
          <Image
            src={newsItem.main_image}
            alt={newsItem.title}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover rounded-xl"
            priority
          />
        </div>

        {/* Article Content */}
        <div className="prose max-w-none mb-8">
          <p className="text-gray-700">{newsItem.content}</p>
        </div>

        {/* Gallery Images */}
        {newsItem.gallery_images && newsItem.gallery_images.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {newsItem.gallery_images.map((galleryImage) => (
                <div key={galleryImage.id} className="rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-48">
                    <Image
                      src={galleryImage.image}
                      alt={galleryImage.caption || `${newsItem.title} - Image`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  {galleryImage.caption && (
                    <div className="p-2 text-sm text-center text-gray-600">
                      {galleryImage.caption}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}

// Metadata for SEO
export async function generateMetadata({ params }: NewsDetailPageProps) {
  // Explicitly await the params object
  const resolvedParams = await params;
  const newsId = parseInt(resolvedParams.id);

  if (isNaN(newsId)) {
    return {
      title: "News Article Not Found",
    };
  }

  const newsItem = await getNewsById(newsId);

  if (!newsItem) {
    return {
      title: "News Article Not Found",
    };
  }

  return {
    title: newsItem.title,
    description: newsItem.content.slice(0, 160),
  };
}

// Generate static params for static site generation or ISR
export async function generateStaticParams() {
  try {
    const newsItems = await getAllNews();
    
    return newsItems.map((item) => ({
      id: item.id.toString(),
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}