import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact StyleVogue - Get in Touch | Fashion Blog',
  description: 'Contact StyleVogue for fashion inquiries, partnership opportunities, or general questions. We respond within 24-48 hours.',
  keywords: 'contact stylevogue, fashion blog contact, partnership inquiries, fashion support',
  alternates: {
    canonical: 'https://stylevoguefashion.com/contact',
  },
  openGraph: {
    title: 'Contact StyleVogue - Get in Touch',
    description: 'Contact StyleVogue for fashion inquiries, partnership opportunities, or general questions',
    url: 'https://stylevoguefashion.com/contact',
  },
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Contact StyleVogue
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
                  <a href="mailto:musaibahmed830@gmail.com" className="text-pink-600 hover:underline font-semibold">
                    musaibahmed830@gmail.com
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
            <ContactForm />
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

