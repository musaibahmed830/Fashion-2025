import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - StyleVogue | Data Protection',
  description: 'Learn how StyleVogue collects, uses, and protects your personal information. Our comprehensive privacy policy explains cookies, analytics, advertising, and your rights.',
  keywords: 'privacy policy, data protection, GDPR, CCPA, cookies policy, stylevogue privacy, user rights',
}

export default function PrivacyPolicyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy',
    description: 'Privacy Policy for StyleVogueFashion.com',
    url: 'https://stylevoguefashion.com/privacy',
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
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            At StyleVogueFashion.com, we are committed to protecting your privacy and ensuring transparency about how we collect, use, and safeguard your personal information.
          </p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8 animate-fade-in">
          <section className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 hover-lift">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">1. Information We Collect</h2>
            
            <h3 className="text-2xl font-semibold mb-3 text-gray-800 mt-6">1.1 Automatically Collected Information</h3>
            <p className="text-lg text-gray-700 mb-4">
              When you visit StyleVogueFashion.com, we automatically collect certain information about your device and browsing behavior, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-4 ml-4">
              <li>IP address and location data</li>
              <li>Browser type and version</li>
              <li>Device information (type, operating system)</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Click patterns and navigation paths</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 text-gray-800 mt-6">1.2 Cookies and Tracking Technologies</h3>
            <p className="text-lg text-gray-700 mb-4">
              We use cookies, web beacons, and similar tracking technologies to enhance your browsing experience and analyze website traffic. Cookies are small text files stored on your device that help us remember your preferences and understand how you interact with our website.
            </p>

            <h3 className="text-2xl font-semibold mb-3 text-gray-800 mt-6">1.3 User-Provided Information</h3>
            <p className="text-lg text-gray-700 mb-4">
              When you voluntarily interact with our website, you may provide us with personal information such as:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-4 ml-4">
              <li>Name and email address (when subscribing to newsletters)</li>
              <li>Contact information (when submitting contact forms)</li>
              <li>Comments and feedback (when engaging with our content)</li>
              <li>Preferences and interests (when customizing your experience)</li>
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8 hover-lift">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">2. How We Use Your Information</h2>
            
            <h3 className="text-2xl font-semibold mb-3 text-gray-800 mt-6">2.1 Content Personalization</h3>
            <p className="text-lg text-gray-700 mb-4">
              We use your information to personalize your experience on our website, including showing you relevant fashion articles, style guides, and product recommendations that match your interests.
            </p>

            <h3 className="text-2xl font-semibold mb-3 text-gray-800 mt-6">2.2 Analytics and Website Improvement</h3>
            <p className="text-lg text-gray-700 mb-4">
              We analyze user behavior and website performance data to understand how visitors interact with our content. This helps us improve our website structure, enhance user experience, and create more valuable fashion content.
            </p>

            <h3 className="text-2xl font-semibold mb-3 text-gray-800 mt-6">2.3 Advertising and Monetization</h3>
            <p className="text-lg text-gray-700 mb-4">
              We use your information to display relevant advertisements through Google AdSense and other advertising partners. This allows us to keep our content free while providing you with ads that are relevant to your interests.
            </p>

            <h3 className="text-2xl font-semibold mb-3 text-gray-800 mt-6">2.4 Communication</h3>
            <p className="text-lg text-gray-700 mb-4">
              If you provide your email address, we may use it to send you newsletters, fashion updates, style tips, and promotional content. You can unsubscribe from these communications at any time by clicking the unsubscribe link in our emails or contacting us directly.
            </p>

            <h3 className="text-2xl font-semibold mb-3 text-gray-800 mt-6">2.5 Legal Compliance</h3>
            <p className="text-lg text-gray-700 mb-4">
              We may use your information to comply with legal obligations, respond to legal requests, protect our rights and the rights of our users, and prevent fraud or security threats.
            </p>
          </section>

          <section className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 hover-lift">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">3. Cookies and Tracking Technologies</h2>
            
            <h3 className="text-2xl font-semibold mb-3 text-gray-800 mt-6">3.1 Types of Cookies We Use</h3>
            <p className="text-lg text-gray-700 mb-4">
              We use several types of cookies on our website:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-4 ml-4">
              <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly and cannot be disabled.</li>
              <li><strong>Analytics Cookies:</strong> These help us understand how visitors use our website (e.g., Google Analytics).</li>
              <li><strong>Advertising Cookies:</strong> These are used to deliver relevant advertisements (e.g., Google AdSense, Google Ads).</li>
              <li><strong>Preference Cookies:</strong> These remember your settings and preferences for a better experience.</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 text-gray-800 mt-6">3.2 Third-Party Cookies</h3>
            <p className="text-lg text-gray-700 mb-4">
              Our website uses third-party services that may set their own cookies:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-4 ml-4">
              <li><strong>Google Analytics:</strong> Tracks website usage and provides analytics data</li>
              <li><strong>Google AdSense:</strong> Displays personalized advertisements</li>
              <li><strong>Google Ads:</strong> Serves relevant advertising content</li>
              <li><strong>Social Media Platforms:</strong> When you interact with social sharing buttons</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 text-gray-800 mt-6">3.3 Managing Cookies</h3>
            <p className="text-lg text-gray-700 mb-4">
              You have control over cookies and can manage them in several ways:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-4 ml-4">
              <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or delete cookies. You can configure your browser to block all cookies or notify you when cookies are being set.</li>
              <li><strong>Opt-Out Tools:</strong> You can opt out of personalized advertising through:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Google's Ad Settings: <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">adssettings.google.com</a></li>
                  <li>Network Advertising Initiative: <a href="http://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">optout.networkadvertising.org</a></li>
                  <li>Digital Advertising Alliance: <a href="http://optout.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">optout.aboutads.info</a></li>
                </ul>
              </li>
              <li><strong>Google Analytics Opt-Out:</strong> You can install the Google Analytics Opt-out Browser Add-on to prevent Google Analytics from collecting your data.</li>
            </ul>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Note:</strong> Disabling cookies may affect your browsing experience and limit some website functionality.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8 hover-lift">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">4. Third-Party Links and Ads</h2>
            
            <h3 className="text-2xl font-semibold mb-3 text-gray-800 mt-6">4.1 Affiliate Links</h3>
            <p className="text-lg text-gray-700 mb-4">
              StyleVogueFashion.com contains affiliate links to fashion products and retailers. When you click on an affiliate link and make a purchase, we may receive a commission at no additional cost to you. This helps us maintain our website and continue providing free fashion content.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our affiliate relationships do not influence our editorial content or product recommendations. We only recommend products and brands that we genuinely believe in and that align with our fashion philosophy.
            </p>

            <h3 className="text-2xl font-semibold mb-3 text-gray-800 mt-6">4.2 Google AdSense</h3>
            <p className="text-lg text-gray-700 mb-4">
              We use Google AdSense to display advertisements on our website. Google AdSense uses cookies and other tracking technologies to serve personalized ads based on your interests and browsing history. These ads help us monetize our content and keep our website free for readers.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Google's use of advertising cookies enables it and its partners to serve ads based on your visits to our site and other sites on the Internet. You can opt out of personalized advertising by visiting Google's Ad Settings.
            </p>

            <h3 className="text-2xl font-semibold mb-3 text-gray-800 mt-6">4.3 External Links</h3>
            <p className="text-lg text-gray-700 mb-4">
              Our website contains links to external websites that are not operated by us. We are not responsible for the privacy practices or content of these third-party websites. We encourage you to review the privacy policies of any external sites you visit.
            </p>
          </section>

          <section className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 hover-lift">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">5. Data Protection and Security</h2>
            
            <h3 className="text-2xl font-semibold mb-3 text-gray-800 mt-6">5.1 Security Measures</h3>
            <p className="text-lg text-gray-700 mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-4 ml-4">
              <li>Secure data transmission using encryption (HTTPS/SSL)</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Secure hosting infrastructure</li>
              <li>Regular backups of website data</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 text-gray-800 mt-6">5.2 Data Retention</h3>
            <p className="text-lg text-gray-700 mb-4">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When data is no longer needed, we securely delete or anonymize it.
            </p>

            <h3 className="text-2xl font-semibold mb-3 text-gray-800 mt-6">5.3 Data Sharing</h3>
            <p className="text-lg text-gray-700 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-4 ml-4">
              <li>With trusted service providers who assist us in operating our website (e.g., hosting, analytics, email services)</li>
              <li>When required by law or to respond to legal processes</li>
              <li>To protect our rights, property, or safety, or that of our users</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8 hover-lift">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">6. User Rights (GDPR & CCPA Compliant)</h2>
            
            <p className="text-lg text-gray-700 mb-4">
              We respect your privacy rights and provide you with control over your personal information. Depending on your location, you may have the following rights:
            </p>

            <h3 className="text-2xl font-semibold mb-3 text-gray-800 mt-6">6.1 Right to Access</h3>
            <p className="text-lg text-gray-700 mb-4">
              You have the right to request access to the personal information we hold about you. You can request a copy of your data, including what information we collect, how we use it, and with whom we share it.
            </p>

            <h3 className="text-2xl font-semibold mb-3 text-gray-800 mt-6">6.2 Right to Rectification</h3>
            <p className="text-lg text-gray-700 mb-4">
              You have the right to request correction of any inaccurate or incomplete personal information we hold about you.
            </p>

            <h3 className="text-2xl font-semibold mb-3 text-gray-800 mt-6">6.3 Right to Erasure (Right to be Forgotten)</h3>
            <p className="text-lg text-gray-700 mb-4">
              You have the right to request deletion of your personal information under certain circumstances, such as when the data is no longer necessary for the original purpose or when you withdraw consent.
            </p>

            <h3 className="text-2xl font-semibold mb-3 text-gray-800 mt-6">6.4 Right to Restrict Processing</h3>
            <p className="text-lg text-gray-700 mb-4">
              You have the right to request that we limit how we use your personal information in certain situations.
            </p>

            <h3 className="text-2xl font-semibold mb-3 text-gray-800 mt-6">6.5 Right to Data Portability</h3>
            <p className="text-lg text-gray-700 mb-4">
              You have the right to receive your personal information in a structured, commonly used, and machine-readable format, and to transmit that data to another service provider.
            </p>

            <h3 className="text-2xl font-semibold mb-3 text-gray-800 mt-6">6.6 Right to Object</h3>
            <p className="text-lg text-gray-700 mb-4">
              You have the right to object to processing of your personal information for direct marketing purposes or when processing is based on legitimate interests.
            </p>

            <h3 className="text-2xl font-semibold mb-3 text-gray-800 mt-6">6.7 Right to Opt-Out (CCPA)</h3>
            <p className="text-lg text-gray-700 mb-4">
              If you are a California resident, you have the right to opt-out of the sale of your personal information. While we do not sell personal information, you can opt-out of personalized advertising and tracking as described in Section 3.3.
            </p>

            <h3 className="text-2xl font-semibold mb-3 text-gray-800 mt-6">6.8 Exercising Your Rights</h3>
            <p className="text-lg text-gray-700 mb-4">
              To exercise any of these rights, please contact us at <a href="mailto:musaibahmed830@gmail.com" className="text-pink-600 hover:underline font-semibold">musaibahmed830@gmail.com</a>. We will respond to your request within 30 days (or as required by applicable law) and may require verification of your identity to protect your privacy.
            </p>
          </section>

          <section className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 hover-lift">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">7. Children's Privacy</h2>
            <p className="text-lg text-gray-700 mb-4">
              StyleVogueFashion.com is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately, and we will delete such information from our records.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8 hover-lift">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">8. Changes to This Privacy Policy</h2>
            <p className="text-lg text-gray-700 mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make changes, we will:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-4 ml-4">
              <li>Update the "Last Updated" date at the top of this page</li>
              <li>Post a prominent notice on our website if changes are significant</li>
              <li>Notify you via email if you have subscribed to our newsletter</li>
            </ul>
            <p className="text-lg text-gray-700 mb-4">
              We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information. Your continued use of our website after any changes constitutes acceptance of the updated Privacy Policy.
            </p>
          </section>

          <section className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 hover-lift">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">9. International Data Transfers</h2>
            <p className="text-lg text-gray-700 mb-4">
              Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country. By using our website, you consent to the transfer of your information to these countries.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              We ensure that appropriate safeguards are in place to protect your personal information when it is transferred internationally, in accordance with applicable data protection laws.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8 hover-lift">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">10. Contact Information</h2>
            <p className="text-lg text-gray-700 mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mt-4">
              <p className="text-lg text-gray-700 mb-2">
                <strong>Email:</strong> <a href="mailto:musaibahmed830@gmail.com" className="text-pink-600 hover:underline font-semibold">musaibahmed830@gmail.com</a>
              </p>
              <p className="text-lg text-gray-700 mb-2">
                <strong>Website:</strong> <a href="https://stylevoguefashion.com" className="text-pink-600 hover:underline">stylevoguefashion.com</a>
              </p>
              <p className="text-lg text-gray-700">
                <strong>Subject Line:</strong> Privacy Policy Inquiry
              </p>
            </div>
            <p className="text-lg text-gray-700 mt-6">
              We are committed to addressing your privacy concerns promptly and transparently. We will respond to all inquiries within 30 days of receipt.
            </p>
          </section>

          <section className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 hover-lift">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">11. Your Consent</h2>
            <p className="text-lg text-gray-700 mb-4">
              By using StyleVogueFashion.com, you consent to this Privacy Policy and agree to our collection, use, and disclosure of your information as described herein. If you do not agree with this Privacy Policy, please do not use our website.
            </p>
            <p className="text-lg text-gray-700">
              Thank you for trusting StyleVogue with your privacy. We are dedicated to protecting your personal information and providing you with a safe, enjoyable browsing experience.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}

