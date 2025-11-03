import Link from 'next/link'
import Image from 'next/image'
import { getFeaturedPosts, getAllPosts } from '@/lib/posts'
import { Metadata } from 'next'
import LatestTrendNews from '@/components/LatestTrendNews'

export const metadata: Metadata = {
  title: 'StyleVogue - Premier Fashion Trends & Style Guide 2025',
  description: 'StyleVogue: Discover the hottest fashion trends, expert style tips, and wardrobe essentials for 2025. Your premier guide to staying stylish with sustainable fashion, celebrity inspiration, and seasonal trends.',
  keywords: 'StyleVogue, fashion trends 2025, style guide, fashion blog, wardrobe essentials, sustainable fashion, celebrity style, fashion tips, style inspiration',
  openGraph: {
    title: 'StyleVogue - Premier Fashion Trends & Style Guide 2025',
    description: 'Discover the hottest fashion trends, style tips, and wardrobe essentials for 2025',
    type: 'website',
  },
}

// Revalidate every 24 hours (86400 seconds) for daily news updates
export const revalidate = 86400

export default async function Home() {
  const featuredPosts = getFeaturedPosts()
  const allPosts = getAllPosts()
  const latestPosts = allPosts.slice(0, 6)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'StyleVogue',
    description: 'Premier destination for latest fashion trends, expert style tips, and wardrobe essentials for 2025',
    url: 'https://stylevogue.com',
    publisher: {
      '@type': 'Organization',
      name: 'StyleVogue',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section with Gradient Background */}
      <section className="relative bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-in-left">
              Discover Your Style in <span className="text-yellow-300">2025</span>
        </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed animate-slide-in-right">
              Your ultimate fashion destination for the latest trends, expert style tips, and wardrobe essentials. Transform your look with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Link 
                href="/fashion"
                className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
              >
                Explore Fashion
              </Link>
              <Link 
                href="/fashion/trends"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-pink-600 transition-all hover:scale-105"
              >
                Latest Trends
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 shadow-lg relative -mt-8 rounded-t-3xl animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Fashion Articles' },
              { number: '50K+', label: 'Monthly Readers' },
              { number: '100+', label: 'Style Tips' },
              { number: '24/7', label: 'Fresh Content' },
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">

      {/* Featured Posts Grid */}
        <section className="mb-20">
          <div className="text-center mb-12 animate-fade-in">
            <span className="text-pink-600 font-semibold uppercase tracking-wider text-sm mb-2 block">Hot Right Now</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Trending This Week</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover the most talked-about fashion trends and style tips that everyone is wearing this week
            </p>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <Link 
                key={post.id} 
                href={`/fashion/${post.slug}`}
                className={`animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <article className="bg-white rounded-2xl shadow-xl overflow-hidden hover-lift hover-glow group border border-gray-100">
                  <div className="relative h-72 w-full image-zoom">
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        Trending
                      </span>
                    </div>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                    <span className="text-sm text-pink-600 font-semibold inline-block mb-2 uppercase tracking-wide">
                    {post.category}
                  </span>
                    <h3 className="text-2xl font-bold mt-2 mb-3 text-gray-900 group-hover:text-pink-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-500 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {post.date}
                      </span>
                      <span className="text-pink-600 font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center">
                        Read More 
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

        {/* Featured Categories with Icons */}
        <section className="mb-20 animate-fade-in">
          <div className="text-center mb-12">
            <span className="text-pink-600 font-semibold uppercase tracking-wider text-sm mb-2 block">Explore</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Fashion <span className="gradient-text">Categories</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Dive deep into specific fashion topics that interest you most
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                name: 'Trending', 
                href: '/fashion/trends', 
                icon: '🔥',
                desc: 'Latest trends',
                color: 'from-pink-500 to-rose-500'
              },
              { 
                name: 'Style Tips', 
                href: '/fashion/style-tips', 
                icon: '✨',
                desc: 'Expert advice',
                color: 'from-purple-500 to-indigo-500'
              },
              { 
                name: 'Accessories', 
                href: '/fashion?category=accessories', 
                icon: '💍',
                desc: 'Complete the look',
                color: 'from-blue-500 to-cyan-500'
              },
              { 
                name: 'Essentials', 
                href: '/fashion?category=wardrobe-essentials', 
                icon: '👗',
                desc: 'Must-haves',
                color: 'from-teal-500 to-green-500'
              }
            ].map((category, index) => (
              <Link
                key={category.name}
                href={category.href}
                className={`bg-gradient-to-br ${category.color} text-white p-8 rounded-2xl text-center font-semibold hover:scale-110 hover:shadow-2xl transition-all duration-300 animate-scale-in group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform">{category.icon}</div>
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-sm opacity-90">{category.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Latest Trend News Section */}
        <LatestTrendNews />

        {/* Latest Posts Section */}
        <section className="mb-20">
          <div className="text-center mb-12 animate-fade-in">
            <span className="text-pink-600 font-semibold uppercase tracking-wider text-sm mb-2 block">New Arrivals</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Latest <span className="gradient-text">Fashion Posts</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Stay updated with our newest articles covering the latest in fashion and style
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.slice(0, 3).map((post, index) => (
              <Link
                key={post.id}
                href={`/fashion/${post.slug}`}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <article className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift border border-gray-100">
                  <div className="relative h-48 w-full image-zoom">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs text-pink-600 font-semibold uppercase">{post.category}</span>
                    <h3 className="text-lg font-bold mt-2 mb-2 text-gray-900 group-hover:text-pink-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">{post.excerpt}</p>
                    <span className="text-pink-600 text-sm font-semibold group-hover:underline">
                      Read article →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/fashion"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
            >
              View All Posts
            </Link>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-20 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 rounded-3xl p-12 md:p-16 animate-fade-in">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-pink-600 font-semibold uppercase tracking-wider text-sm mb-2 block">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Your Trusted Fashion <span className="gradient-text">Companion</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: '🎯',
                  title: 'Expert Curation',
                  desc: 'Our team of fashion experts carefully curates every piece of content to ensure you get the most valuable and up-to-date information.'
                },
                {
                  icon: '💎',
                  title: 'Quality Content',
                  desc: 'We focus on quality over quantity, delivering in-depth articles that help you make informed fashion decisions.'
                },
                {
                  icon: '🌟',
                  title: 'Trend Forecasting',
                  desc: 'Stay ahead of the curve with our early trend spotting and analysis of upcoming fashion movements.'
                }
              ].map((feature, index) => (
                <div 
                  key={feature.title}
                  className="bg-white rounded-2xl p-8 hover-lift shadow-lg animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="mb-20 relative overflow-hidden rounded-3xl animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600"></div>
          <div className="relative z-10 p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Never Miss a Trend
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get weekly fashion updates, exclusive style tips, and early access to trend reports.
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50"
              />
              <button
                type="submit"
                className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 hover:scale-105 transition-all shadow-xl"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>

        {/* SEO Rich Content Section */}
        <section className="mb-20 bg-white rounded-3xl shadow-xl p-12 md:p-16 animate-fade-in border border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-pink-600 font-semibold uppercase tracking-wider text-sm mb-2 block">Your Resource</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Complete Fashion Guide for <span className="gradient-text">2025</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 hover-lift">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="font-bold text-2xl mb-3 text-gray-900">Trend Reports</h3>
                <p className="text-gray-700 leading-relaxed">
                  Get weekly updates on the latest fashion trends, seasonal must-haves, and emerging styles from around the world.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 hover-lift">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="font-bold text-2xl mb-3 text-gray-900">Style Guides</h3>
                <p className="text-gray-700 leading-relaxed">
                  Comprehensive guides covering everything from building a professional wardrobe to seasonal styling and color coordination.
                </p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 hover-lift">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="font-bold text-2xl mb-3 text-gray-900">Expert Tips</h3>
                <p className="text-gray-700 leading-relaxed">
                  Professional advice from fashion industry insiders, stylists, and designers to help you elevate your style game.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 hover-lift">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="font-bold text-2xl mb-3 text-gray-900">Sustainable Fashion</h3>
                <p className="text-gray-700 leading-relaxed">
                  Learn about eco-friendly fashion choices, ethical brands, and how to build a sustainable wardrobe without compromising style.
                </p>
              </div>
            </div>
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At StyleVogue, we're committed to bringing you the most comprehensive fashion content covering everything from seasonal trends to sustainable fashion practices. Whether you're looking to build a professional wardrobe, discover the latest celebrity style inspirations, or learn about color psychology in fashion, we've got you covered.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our expert team curates content on vintage fashion revival, minimalist wardrobe essentials, denim styling, and much more. Stay updated with weekly trend reports, style guides, and practical fashion tips that help you express your unique style while staying current with 2025 fashion movements.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-20 text-center animate-fade-in">
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl p-12 md:p-16 text-white shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Style?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of fashion enthusiasts and start your style journey today. Discover trends, get expert tips, and build the wardrobe of your dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/fashion"
                className="bg-white text-pink-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all shadow-xl inline-block"
              >
                Browse Fashion Posts
              </Link>
              <Link 
                href="/about"
                className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-pink-600 transition-all inline-block"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}


