import Link from 'next/link'
import Image from 'next/image'
import { getPostsByCategory } from '@/lib/posts'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fashion Trends 2026 - Latest Style Trends | StyleVogue',
  description: 'Explore the latest fashion trends for 2026. Discover seasonal trends, celebrity-inspired styles, sustainable fashion movements, and must-have wardrobe pieces.',
  keywords: 'fashion trends 2026, latest trends, seasonal fashion, trending styles, fashion movements, style trends, stylevogue',
  alternates: {
    canonical: 'https://stylevoguefashion.com/fashion/trends',
  },
  openGraph: {
    title: 'Fashion Trends 2026 - Latest Style Trends',
    description: 'Explore the latest fashion trends for 2026',
    url: 'https://stylevoguefashion.com/fashion/trends',
  },
}

export default function TrendsPage() {
  const trendingPosts = getPostsByCategory('Trending')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Fashion Trends 2026',
    description: 'Latest fashion trends and style movements for 2026',
    url: 'https://stylevogue.com/fashion/trends',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
            Fashion Trends 2026 – Latest Style Trends
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Stay ahead of the curve with the latest fashion trends shaping 2026. From seasonal must-haves to celebrity-inspired styles, discover what's trending now.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="/fashion" className="text-pink-600 hover:text-pink-700 hover:underline font-semibold">
              All Fashion Posts →
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/fashion/style-tips" className="text-pink-600 hover:text-pink-700 hover:underline font-semibold">
              Style Tips →
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/products" className="text-pink-600 hover:text-pink-700 hover:underline font-semibold">
              Best Products →
            </Link>
          </div>
        </div>

        {trendingPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingPosts.map((post, index) => (
              <Link
                key={post.id}
                href={`/fashion/${post.slug}`}
                className={`animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <article className="bg-white rounded-lg shadow-lg overflow-hidden hover-lift hover-glow group">
                  <div className="relative h-64 w-full image-zoom">
                    <Image
                      src={post.image}
                      alt={`${post.title} - Fashion trend 2026 image`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-pink-600 font-semibold">
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
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No trending posts found at the moment.</p>
            <Link href="/fashion" className="text-pink-600 hover:underline mt-4 inline-block">
              Browse All Fashion Posts
            </Link>
          </div>
        )}

        {/* SEO Content Section */}
        <section className="mt-16 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 sm:p-8 md:p-12 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Best Fashion Trends for 2026
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Fashion trends in 2026 reflect a dynamic blend of sustainability, comfort, and self-expression. This year, we're seeing a significant shift toward eco-conscious choices, with sustainable fashion becoming mainstream rather than niche.
              </p>
              <p className="mb-4">
                Key trend movements include the revival of vintage styles from the 70s, 80s, and 90s, the dominance of oversized silhouettes that prioritize comfort, and bold color choices that allow for personal expression. Denim continues to evolve with wide-leg and straight-leg cuts taking center stage.
              </p>
              <p className="mb-4">
                Seasonal trends play a crucial role, with spring bringing pastels and florals, while winter emphasizes cozy textures and rich, warm colors. Accessories have become statement-makers, with bold jewelry, designer handbags, and unique footwear complementing minimalist base outfits.
              </p>
              <p>
                To stay on trend in 2026, focus on investing in quality pieces that can be styled multiple ways, embrace sustainable fashion choices, and don't be afraid to mix vintage finds with modern pieces for a unique look that's both current and personal.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

