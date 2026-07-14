import Link from 'next/link'
import Image from 'next/image'
import { getPostsByCategory } from '@/lib/posts'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Style Tips & Fashion Advice - Expert Guide | StyleVogue',
  description: 'Expert style tips and fashion advice for building the perfect wardrobe. Learn professional styling techniques, color coordination, body type dressing, and timeless fashion principles.',
  keywords: 'style tips, fashion advice, styling tips, wardrobe advice, fashion guides, professional styling, beauty tips, stylevogue',
  alternates: {
    canonical: 'https://stylevoguefashion.com/fashion/style-tips',
  },
  openGraph: {
    title: 'Style Tips & Fashion Advice - Expert Guide',
    description: 'Expert style tips and fashion advice for building the perfect wardrobe',
    url: 'https://stylevoguefashion.com/fashion/style-tips',
    images: ['/logo.png'],
  },
}

export default function StyleTipsPage() {
  const styleTipsPosts = getPostsByCategory('Style Tips')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Style Tips & Fashion Advice',
    description: 'Expert style tips and fashion advice for every occasion',
    url: 'https://stylevogue.com/fashion/style-tips',
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
            Style Tips & Fashion Advice
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Master the art of styling with our expert fashion advice. From building a professional wardrobe to understanding color psychology, learn the principles that make great style.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="/fashion" className="text-pink-600 hover:text-pink-700 hover:underline font-semibold">
              All Fashion Posts →
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/fashion/trends" className="text-pink-600 hover:text-pink-700 hover:underline font-semibold">
              Latest Trends →
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/products" className="text-pink-600 hover:text-pink-700 hover:underline font-semibold">
              Best Products →
            </Link>
          </div>
        </div>

        {styleTipsPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {styleTipsPosts.map((post, index) => (
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
                      alt={`${post.title} - Style tips and fashion advice image`}
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
            <p className="text-gray-600 text-lg">No style tips posts found at the moment.</p>
            <Link href="/fashion" className="text-pink-600 hover:underline mt-4 inline-block">
              Browse All Fashion Posts
            </Link>
          </div>
        )}

        {/* Quick Style Tips Section */}
        <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
          <div className="bg-white rounded-lg shadow-lg p-8 hover-lift">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Essential Style Principles</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">•</span>
                <span>Invest in quality basics that form your wardrobe foundation</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">•</span>
                <span>Understand your body shape and dress to flatter it</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">•</span>
                <span>Learn color theory to create harmonious outfits</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">•</span>
                <span>Balance proportions with fitted and loose pieces</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">•</span>
                <span>Accessorize thoughtfully - less is often more</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 hover-lift">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Wardrobe Building Tips</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">•</span>
                <span>Build a capsule wardrobe with versatile pieces</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">•</span>
                <span>Mix high-end investment pieces with affordable basics</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">•</span>
                <span>Choose a cohesive color palette for easy mixing</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">•</span>
                <span>Tailor clothes for the perfect fit</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">•</span>
                <span>Regularly edit your wardrobe to keep it current</span>
              </li>
            </ul>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="mt-16 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 sm:p-8 md:p-12 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Best Style Tips for Women
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Developing personal style is a journey of self-discovery and expression. The best style tips focus on understanding yourself—your lifestyle, body type, color preferences, and personality—and using fashion as a tool to express that.
              </p>
              <p className="mb-4">
                Key to great style is understanding the fundamentals: fit, proportion, color, and texture. A well-fitted garment in the right color can transform your appearance more than the trendiest item that doesn't suit you. Learning to balance these elements is essential.
              </p>
              <p className="mb-4">
                Professional styling involves building a wardrobe that serves multiple purposes. Invest in pieces that can transition from day to night, casual to formal, with simple styling changes. A great blazer, quality accessories, and versatile shoes are worth their weight in gold.
              </p>
              <p>
                Remember, style is personal. While trends can inspire, the most stylish people are those who understand what works for them and aren't afraid to express their individuality. Use style tips as guidelines, but always stay true to what makes you feel confident and authentic.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

