import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - StyleVogue | Get in Touch',
  description: 'Contact StyleVogueFashion.com for fashion inquiries, partnership opportunities, or general questions. We respond within 24-48 hours.',
  keywords: 'contact StyleVogue, fashion blog contact, partnership inquiries, StyleVogue support',
}

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact StyleVogue',
    description: 'Contact page for StyleVogueFashion.com',
    url: 'https://stylevoguefashion.com/contact',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Contact <span className="gradient-text">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have a question about our fashion articles, partnership opportunities, or general inquiries — feel free to reach out.
          </p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8 animate-fade-in">
          <section className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 hover-lift">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Get in Touch</h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p className="flex items-start">
                <span className="text-2xl mr-3">📩</span>
                <div>
                  <strong className="text-gray-900">Email:</strong>{' '}
                  <a href="mailto:support@stylevoguefashion.com" className="text-pink-600 hover:underline font-semibold">
                    support@stylevoguefashion.com
                  </a>
                </div>
              </p>
              <p className="flex items-start">
                <span className="text-2xl mr-3">🌍</span>
                <div>
                  <strong className="text-gray-900">Website:</strong>{' '}
                  <a href="https://stylevoguefashion.com" className="text-pink-600 hover:underline">
                    https://stylevoguefashion.com
                  </a>
                </div>
              </p>
              <p className="flex items-start">
                <span className="text-2xl mr-3">📅</span>
                <div>
                  <strong className="text-gray-900">Response Time:</strong> Within 24–48 hours (Mon–Fri)
                </div>
              </p>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8 hover-lift">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact Form</h2>
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-semibold text-gray-900 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-semibold text-gray-900 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-semibold text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all resize-vertical text-gray-900 placeholder-gray-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-4 px-8 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </section>

          <section className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 hover-lift">
            <p className="text-lg text-gray-700 text-center italic">
              We value your feedback and suggestions — your insights help us make StyleVogue better every day.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}

