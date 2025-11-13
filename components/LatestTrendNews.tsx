import Link from 'next/link'
import Image from 'next/image'
import { getLatestTrendNews } from '@/lib/news'

export default async function LatestTrendNews() {
  const news = await getLatestTrendNews()

  return (
    <section className="mb-20 animate-fade-in">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="text-pink-600 font-semibold uppercase tracking-wider text-sm">This Week's Fashion</span>
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Latest Fashion <span className="gradient-text">News This Week</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Stay updated with all the latest fashion news, trends, and industry updates from this week and yesterday
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Updated daily with the most popular fashion stories from global sources
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item, index) => (
          <article
            key={item.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift border border-gray-100 group animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {item.image && (
              <div className="relative h-48 w-full image-zoom">
                <Image
                  src={item.image}
                  alt={`${item.title} - ${item.category} trending fashion news image`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-pink-600 text-white px-2 py-1 rounded text-xs font-bold">
                    {item.category}
                  </span>
                </div>
              </div>
            )}
            <div className="p-5">
              <div className="flex items-center gap-2 mb-3 text-xs text-gray-500">
                <span className="font-semibold text-pink-600">{item.source}</span>
                <span>•</span>
                <span>{new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-pink-600 transition-colors line-clamp-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                {item.excerpt}
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-xs text-gray-500 uppercase tracking-wide">{item.category}</span>
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 text-sm font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <span className="text-pink-600 text-sm font-semibold inline-flex items-center gap-1">
                    Latest
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 text-center">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-50 to-purple-50 px-6 py-3 rounded-full">
          <svg className="w-5 h-5 text-pink-600 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="text-sm text-gray-700 font-medium">
            Fashion news updates automatically with the latest stories from this week
          </span>
        </div>
      </div>
    </section>
  )
}

