import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import GoogleAdSense from '@/components/GoogleAdSense'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'StyleVogue - Fashion Trends & Style Guide 2026',
    template: '%s | StyleVogue'
  },
  description: 'StyleVogue: Your premier destination for the latest fashion trends, expert style tips, and wardrobe essentials in 2026. Discover top fashion trends, sustainable style, celebrity fashion inspiration, and professional styling advice.',
  keywords: ['StyleVogue', 'fashion trends 2026', 'style guide', 'fashion blog', 'wardrobe essentials', 'sustainable fashion', 'celebrity style', 'fashion tips', 'style inspiration', 'fashion trends', 'style advice'],
  authors: [{ name: 'StyleVogue Editorial Team' }],
  creator: 'StyleVogue',
  publisher: 'StyleVogue',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://stylevoguefashion.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://stylevoguefashion.com',
    siteName: 'StyleVogue',
    title: 'StyleVogue - Fashion Trends & Style Guide 2026',
    description: 'Discover the latest fashion trends, style tips, and wardrobe essentials for 2026',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StyleVogue - Fashion Trends & Style Tips',
    description: 'Your ultimate guide to staying stylish in 2026',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'google-adsense-account': 'ca-pub-7553854040895862',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <GoogleAdSense />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}


