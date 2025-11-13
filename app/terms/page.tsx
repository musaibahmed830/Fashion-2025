import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions - StyleVogue | Website Terms',
  description: 'Read the Terms & Conditions for StyleVogue. Learn about content usage, affiliate disclosure, external links, and our website policies.',
  keywords: 'terms and conditions, stylevogue terms, website terms of use, user agreement, affiliate disclosure',
  alternates: {
    canonical: 'https://stylevoguefashion.com/terms',
  },
  openGraph: {
    title: 'Terms & Conditions - StyleVogue | Website Terms',
    description: 'Read the Terms & Conditions for StyleVogue',
    url: 'https://stylevoguefashion.com/terms',
  },
}

export default function TermsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Terms & Conditions',
    description: 'Terms & Conditions for StyleVogueFashion.com',
    url: 'https://stylevoguefashion.com/terms',
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
            Terms & Conditions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' })} 2025
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Welcome to <strong>StyleVogueFashion.com</strong>. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. Please read these carefully.
          </p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8 animate-fade-in">
          <section className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 hover-lift">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">1. Use of Content</h2>
            <p className="text-lg text-gray-700 mb-4">
              All articles, images, and graphics published on this website are the intellectual property of StyleVogueFashion.com, unless otherwise stated. You may not copy, reproduce, or republish any content without our written consent.
            </p>
            <p className="text-lg text-gray-700">
              You are permitted to share links to our articles on social media platforms and through email, but you may not reproduce full articles or substantial portions of our content without explicit permission.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8 hover-lift">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">2. Accuracy of Information</h2>
            <p className="text-lg text-gray-700 mb-4">
              We strive to ensure all content is accurate and up to date; however, we make no warranties regarding completeness or reliability. The information provided is for general fashion and style purposes only.
            </p>
            <p className="text-lg text-gray-700">
              Fashion trends, style advice, and product recommendations are based on our research and opinions at the time of publication. We are not responsible for any decisions made based on the information provided on this website.
            </p>
          </section>

          <section className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 hover-lift">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">3. External Links</h2>
            <p className="text-lg text-gray-700 mb-4">
              Our articles may include links to third-party websites, including retailers, brands, and other fashion resources. We are not responsible for the content, privacy policies, or practices of these external websites.
            </p>
            <p className="text-lg text-gray-700">
              When you click on external links, you will be directed to websites that are not under our control. We encourage you to review the privacy policies and terms of service of any third-party websites you visit.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8 hover-lift">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">4. Affiliate Disclosure</h2>
            <p className="text-lg text-gray-700 mb-4">
              Some of our posts may contain affiliate links. If you purchase through these links, we may earn a small commission — at no extra cost to you. This helps us maintain and grow StyleVogueFashion.
            </p>
            <p className="text-lg text-gray-700">
              Our affiliate relationships do not influence our editorial content or product recommendations. We only recommend products and brands that we genuinely believe in and that align with our fashion philosophy. All affiliate links are clearly disclosed in our articles.
            </p>
          </section>

          <section className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 hover-lift">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">5. Google Ads & Cookies</h2>
            <p className="text-lg text-gray-700 mb-4">
              We display ads through Google AdSense and other ad networks. These may use cookies to show personalized ads based on your visits. You can manage or disable cookies in your browser settings at any time.
            </p>
            <p className="text-lg text-gray-700">
              For more information about how we use cookies and tracking technologies, please review our <a href="/privacy" className="text-pink-600 hover:underline font-semibold">Privacy Policy</a>.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8 hover-lift">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">6. Limitation of Liability</h2>
            <p className="text-lg text-gray-700 mb-4">
              StyleVogueFashion will not be liable for any damages resulting from use of or inability to use the website, including but not limited to errors, interruptions, or data loss.
            </p>
            <p className="text-lg text-gray-700">
              We do not guarantee that our website will be available at all times or that it will be free from errors, viruses, or other harmful components. You agree to use our website at your own risk.
            </p>
          </section>

          <section className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 hover-lift">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">7. User Conduct</h2>
            <p className="text-lg text-gray-700 mb-4">
              When using our website, you agree not to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-4 ml-4">
              <li>Use the website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to any part of the website</li>
              <li>Transmit any harmful code, viruses, or malicious software</li>
              <li>Interfere with or disrupt the website's operation</li>
              <li>Harass, abuse, or harm other users or third parties</li>
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8 hover-lift">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">8. Changes to Terms</h2>
            <p className="text-lg text-gray-700 mb-4">
              We may update these Terms from time to time. The latest version will always be available on this page with a revised date.
            </p>
            <p className="text-lg text-gray-700">
              Your continued use of our website after any changes to these Terms constitutes acceptance of the updated Terms. If you do not agree with any changes, please discontinue use of our website.
            </p>
          </section>

          <section className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 hover-lift">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">9. Intellectual Property</h2>
            <p className="text-lg text-gray-700 mb-4">
              The StyleVogueFashion.com logo, brand name, and all original content are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-lg text-gray-700">
              Unauthorized use of our trademarks, logos, or content may result in legal action. If you wish to use our content, please contact us for permission.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8 hover-lift">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">10. Governing Law</h2>
            <p className="text-lg text-gray-700 mb-4">
              These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
            </p>
            <p className="text-lg text-gray-700">
              Any disputes arising from these Terms or your use of our website shall be resolved through appropriate legal channels.
            </p>
          </section>

          <section className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 hover-lift">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">11. Contact</h2>
            <p className="text-lg text-gray-700 mb-4">
              For questions about these Terms, please contact us at:
            </p>
            <div className="bg-white rounded-lg p-6 mt-4">
              <p className="text-lg text-gray-700 mb-2">
                <strong>Email:</strong>{' '}
                <a href="mailto:musaibahmed830@gmail.com" className="text-pink-600 hover:underline font-semibold">
                  musaibahmed830@gmail.com
                </a>
              </p>
              <p className="text-lg text-gray-700">
                <strong>Website:</strong>{' '}
                <a href="https://stylevoguefashion.com" className="text-pink-600 hover:underline">
                  https://stylevoguefashion.com
                </a>
              </p>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8 hover-lift">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">12. Acceptance of Terms</h2>
            <p className="text-lg text-gray-700 mb-4">
              By accessing and using StyleVogueFashion.com, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.
            </p>
            <p className="text-lg text-gray-700">
              If you do not agree with any part of these Terms, please do not use our website.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}

