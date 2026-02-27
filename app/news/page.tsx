import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/ui/page-header";
import { getAllNews, NewsItem } from "@/services/newsService";
import { formatDate } from "@/utils/dateFormatter";

export default async function NewsPage() {
  const newsItems = await getAllNews();
  
  return (
    <>
      <PageHeader title='News & Updates' />

      {/* Registration CTA Banner */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 pt-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0a192f] via-[#112240] to-[#0a192f] p-8 md:p-10">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 right-4 w-32 h-32 border border-[#C9A84C]/30 rounded-full" />
            <div className="absolute bottom-4 left-4 w-24 h-24 border border-[#C9A84C]/20 rounded-full" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 text-xs font-medium tracking-wider uppercase text-[#C9A84C] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
                Registration Open
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                4th Al-Khwarizmi KhIMIOs 2026
              </h2>
              <p className="text-gray-300 max-w-lg">
                Registration is now open for the 4th Al-Khwarizmi International Mathematics and Informatics Olympiad. May 25–31, 2026, Tashkent, Uzbekistan.
              </p>
            </div>
            <Link
              href="https://khimio-registration.vercel.app/"
              target="_blank"
              className="group inline-flex items-center gap-2 px-7 py-3 rounded-lg font-semibold text-sm sm:text-base tracking-wide transition-all duration-300 bg-gradient-to-r from-[#B8952F] via-[#C9A84C] to-[#D4B85A] text-[#040C1B] hover:shadow-[0_0_32px_rgba(201,168,76,0.25)] active:scale-[0.98] whitespace-nowrap flex-shrink-0"
            >
              Register Now
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="p-4 md:p-8 max-w-5xl mx-auto">
        {newsItems.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-xl">
            <svg 
              className="w-16 h-16 mx-auto text-gray-400 mb-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <p className="text-lg font-medium text-gray-600">No news articles available at the moment.</p>
            <p className="text-gray-500 mt-2">Please check back later for updates.</p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">Latest Articles</h2>
              {/* Optional: Add filters or search here */}
            </div>
            
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
              {newsItems.map((news: NewsItem) => (
                <Link href={`/news/${news.id}`} key={news.id} className="group">
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full transform group-hover:translate-y-[-5px]">
                    <div className="h-56 relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                      <Image
                        src={news.main_image}
                        alt={news.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 z-20 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                        {formatDate(news.created_at)}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                        {news.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {news.content.length > 140 
                          ? `${news.content.slice(0, 140)}...` 
                          : news.content}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                          Read more
                          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                        
                        {/* Optional: Add categories or tags here */}
                        {false && (
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            Category
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            {/* Pagination (if needed) */}
            {newsItems.length > 10 && (
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <button className="px-3 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
                    Previous
                  </button>
                  <button className="px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
                    1
                  </button>
                  <button className="px-3 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
                    2
                  </button>
                  <button className="px-3 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
                    Next
                  </button>
                </nav>
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
}