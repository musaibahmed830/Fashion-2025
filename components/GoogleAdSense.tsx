'use client'

import Script from 'next/script'

export default function GoogleAdSense() {
    const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID || 'ca-pub-7553854040895862'

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
