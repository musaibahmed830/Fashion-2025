import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About StyleVogue - Fashion Blog & Style Tips',
  description: 'Learn about StyleVogue, your premier source for the latest fashion trends, expert style tips, and wardrobe inspiration. Discover our mission to inspire personal style.',
  keywords: 'about stylevogue, fashion blog, style inspiration, fashion content creators, beauty tips',
  alternates: {
    canonical: 'https://stylevoguefashion.com/about',
  },
  openGraph: {
    title: 'About StyleVogue - Fashion Blog & Style Tips',
    description: 'Learn about StyleVogue, your premier source for the latest fashion trends and expert style tips',
    url: 'https://stylevoguefashion.com/about',
    images: ['/logo.png'],
  },
}

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About StyleVogue',
    description: 'Your premier source for fashion trends and style inspiration',
    url: 'https://stylevogue.com/about',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            About StyleVogue
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your trusted destination for the latest fashion trends, style tips, and wardrobe inspiration
          </p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8 animate-fade-in">
          <section className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 hover-lift">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Who We Are</h2>
            <p className="text-lg text-gray-700 mb-4">
              Welcome to StyleVogue, your premier destination for the latest fashion trends, expert style tips, and wardrobe inspiration. We are a passionate team of fashion enthusiasts, stylists, and content creators dedicated to bringing you the most current and relevant content in the world of style.
            </p>
            <p className="text-lg text-gray-700">
              Our mission is to democratize fashion knowledge and inspire confidence in personal style. We believe that everyone deserves to feel stylish and express themselves through fashion, regardless of budget or background.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8 hover-lift">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">What We Do</h2>
            <p className="text-lg text-gray-700 mb-4">
              We curate the latest trends from fashion weeks around the world, provide practical style advice from industry experts, and share insights that help you build a wardrobe that works for your lifestyle.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="font-bold text-xl mb-2 text-gray-900">Trend Analysis</h3>
                <p className="text-gray-700">We analyze and break down the latest fashion trends, making them accessible and applicable to everyday style.</p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-gray-900">Style Guides</h3>
                <p className="text-gray-700">Comprehensive guides covering everything from building a professional wardrobe to seasonal styling.</p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-gray-900">Sustainable Fashion</h3>
                <p className="text-gray-700">We champion eco-friendly fashion choices and ethical brands that align with conscious consumer values.</p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-gray-900">Expert Advice</h3>
                <p className="text-gray-700">Practical tips from professional stylists and fashion industry insiders to elevate your style game.</p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 hover-lift">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Values</h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-pink-600 mr-3 mt-1">✓</span>
                <div>
                  <strong className="text-gray-900">Inclusivity:</strong> Fashion is for everyone. We celebrate diverse styles, body types, and personal expressions.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-3 mt-1">✓</span>
                <div>
                  <strong className="text-gray-900">Sustainability:</strong> We promote ethical fashion choices and environmental responsibility in style decisions.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-3 mt-1">✓</span>
                <div>
                  <strong className="text-gray-900">Authenticity:</strong> We encourage finding your unique style rather than following trends blindly.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-3 mt-1">✓</span>
                <div>
                  <strong className="text-gray-900">Education:</strong> We believe in teaching style principles that last beyond seasonal trends.
                </div>
              </li>
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8 hover-lift">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Join Our Community</h2>
            <p className="text-lg text-gray-700 mb-6">
              Whether you're looking for seasonal trends, sustainable fashion options, timeless wardrobe essentials, or inspiration to express your unique style, we've got you covered. Join thousands of fashion enthusiasts who turn to us for style inspiration and practical fashion advice.
            </p>
            <p className="text-lg text-gray-700">
              Follow us on social media for daily inspiration, weekly trend updates, and exclusive style tips. Together, let's explore the ever-evolving world of fashion and discover how to elevate your wardrobe, one trend at a time.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}


