import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '@/lib/posts'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fashion Posts – Style Guides & Latest Trends | Style Vogue Fashion',
  description: 'Browse all fashion posts covering the latest trends, style tips, wardrobe essentials, sustainable fashion, and celebrity style inspiration for 2026.',
  keywords: 'fashion posts, style guides, fashion articles, wardrobe tips, fashion trends, style vogue fashion',
}

export default function FashionPage() {
  const posts = getAllPosts()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'All Fashion Posts',
    description: 'Complete collection of fashion articles and style guides',
    url: 'https://stylevogue.com/fashion',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
            Fashion Posts – Style Guides & Latest Trends
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our complete collection of fashion articles, style guides, and trend reports covering everything you need to stay stylish in 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Link
              key={post.id}
              href={`/fashion/${post.slug}`}
              className={`animate-fade-in`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <article className="bg-white rounded-lg shadow-lg overflow-hidden hover-lift hover-glow group">
                <div className="relative h-64 w-full image-zoom">
                  <Image
                    src={post.image}
                    alt={`${post.title} - ${post.category} fashion article image`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-pink-600 font-semibold inline-block mb-2">
                    {post.category}
                  </span>
                  <h3 className="text-2xl font-bold mt-2 mb-3 text-gray-900 group-hover:text-pink-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <span className="text-pink-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                      Read More →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}


