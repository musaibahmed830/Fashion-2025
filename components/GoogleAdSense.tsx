'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Script from 'next/script'

export default function GoogleAdSense() {
  const pathname = usePathname()
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID || 'ca-pub-7553854040895862'

  // Re-initialize ads when route changes
  useEffect(() => {
    try {
      // Ensure adsbygoogle array exists
      if (typeof window !== 'undefined') {
        (window as any).adsbygoogle = (window as any).adsbygoogle || []
        
        // Push a new ad request after route change
        // This tells AdSense to scan the page for new ad slots
        ;(window as any).adsbygoogle.push({})
      }
    } catch (error) {
      console.error('AdSense error:', error)
    }
  }, [pathname]) // Re-run whenever the route changes

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
      strategy="afterInteractive"
      crossOrigin="anonymous"
      onError={(e) => {
        console.error('AdSense script failed to load:', e)
      }}
    />
  )
}
