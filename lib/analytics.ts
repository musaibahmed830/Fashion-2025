// Google Analytics utility functions

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-BPZH7KPZHH'

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void
    dataLayer: any[]
  }
}

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track article views
export const trackArticleView = (title: string, slug: string) => {
  event({
    action: 'view_article',
    category: 'engagement',
    label: title,
  })
  pageview(`/fashion/${slug}`)
}

// Track link clicks
export const trackLinkClick = (linkName: string, linkUrl: string) => {
  event({
    action: 'click',
    category: 'outbound',
    label: linkName,
  })
}

// Track form submissions
export const trackFormSubmit = (formName: string) => {
  event({
    action: 'submit',
    category: 'form',
    label: formName,
  })
}

// Track button clicks
export const trackButtonClick = (buttonName: string, location?: string) => {
  event({
    action: 'click',
    category: 'button',
    label: `${buttonName}${location ? ` - ${location}` : ''}`,
  })
}

// Track search queries
export const trackSearch = (searchTerm: string) => {
  event({
    action: 'search',
    category: 'engagement',
    label: searchTerm,
  })
}

// Track newsletter signups
export const trackNewsletterSignup = (source?: string) => {
  event({
    action: 'signup',
    category: 'newsletter',
    label: source || 'unknown',
  })
}

// Track social media clicks
export const trackSocialClick = (platform: string) => {
  event({
    action: 'click',
    category: 'social',
    label: platform,
  })
}

