# Google Analytics Events Tracking Guide

This document explains how Google Analytics events are tracked throughout the StyleVogue website.

## Automatic Tracking

### Page Views
- **Automatic**: All page views are automatically tracked when users navigate between pages
- **Component**: `PageViewTracker` (included in `GoogleAnalytics` component)
- **Location**: Tracks route changes using Next.js `usePathname` hook

### Article Views
- **Automatic**: When users view a fashion article, it's automatically tracked
- **Component**: `ArticleViewTracker`
- **Event**: `view_article` with article title as label
- **Location**: `app/fashion/[slug]/page.tsx`

## Manual Event Tracking

### Available Functions

All tracking functions are available in `lib/analytics.ts`:

#### 1. Custom Events
```typescript
import { event } from '@/lib/analytics'

event({
  action: 'click',
  category: 'button',
  label: 'Subscribe Button',
  value: 1
})
```

#### 2. Form Submissions
```typescript
import { trackFormSubmit } from '@/lib/analytics'

trackFormSubmit('contact_form')
// or
trackFormSubmit('newsletter_signup')
```

#### 3. Link Clicks
```typescript
import { trackLinkClick } from '@/lib/analytics'

trackLinkClick('Affiliate Link - Product Name', 'https://example.com')
```

#### 4. Button Clicks
```typescript
import { trackButtonClick } from '@/lib/analytics'

trackButtonClick('Subscribe', 'header')
```

#### 5. Newsletter Signups
```typescript
import { trackNewsletterSignup } from '@/lib/analytics'

trackNewsletterSignup('footer')
```

#### 6. Social Media Clicks
```typescript
import { trackSocialClick } from '@/lib/analytics'

trackSocialClick('facebook')
trackSocialClick('instagram')
trackSocialClick('twitter')
```

#### 7. Search Queries
```typescript
import { trackSearch } from '@/lib/analytics'

trackSearch('fashion trends 2026')
```

## Components

### TrackedLink Component
Use this component for links you want to track:

```tsx
import TrackedLink from '@/components/TrackedLink'

<TrackedLink 
  href="https://example.com" 
  isExternal={true}
  linkName="Product Link"
  className="text-pink-600"
>
  Click here
</TrackedLink>
```

## Current Implementations

### ✅ Contact Form
- **Location**: `app/contact/page.tsx`
- **Component**: `ContactForm`
- **Event**: Tracks `submit` event with category `form` and label `contact_form`

### ✅ Article Pages
- **Location**: `app/fashion/[slug]/page.tsx`
- **Component**: `ArticleViewTracker`
- **Event**: Tracks `view_article` event with article title

### ✅ Page Navigation
- **Location**: All pages via `PageViewTracker`
- **Event**: Automatic page view tracking on route changes

## Adding New Event Tracking

### Example: Track a Button Click

```tsx
'use client'

import { trackButtonClick } from '@/lib/analytics'

export default function MyComponent() {
  const handleClick = () => {
    trackButtonClick('Subscribe', 'header')
    // Your button logic here
  }

  return (
    <button onClick={handleClick}>
      Subscribe
    </button>
  )
}
```

### Example: Track Affiliate Link

```tsx
'use client'

import { trackLinkClick } from '@/lib/analytics'

export default function AffiliateLink({ url, productName }) {
  const handleClick = () => {
    trackLinkClick(`Affiliate - ${productName}`, url)
  }

  return (
    <a href={url} onClick={handleClick} target="_blank" rel="noopener noreferrer">
      Buy Now
    </a>
  )
}
```

## Event Categories

Current event categories used:
- `engagement` - User engagement events (article views, searches)
- `form` - Form submissions
- `button` - Button clicks
- `outbound` - External link clicks
- `social` - Social media clicks
- `newsletter` - Newsletter signups

## Viewing Events in Google Analytics

1. Go to Google Analytics dashboard
2. Navigate to **Reports** → **Engagement** → **Events**
3. You'll see all tracked events with:
   - Event name (action)
   - Event category
   - Event label
   - Event count

## Testing Events

To test if events are firing:
1. Open browser DevTools (F12)
2. Go to Console tab
3. Type: `window.dataLayer`
4. You should see an array with event objects
5. Navigate pages or trigger events to see new entries

## Notes

- All events are client-side only (won't fire during SSR)
- Events are sent to Google Analytics asynchronously
- No personal information is tracked in events
- All tracking respects user privacy settings

