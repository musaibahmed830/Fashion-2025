# News API Setup Guide

The Latest Trend News section now displays **yesterday's trending news from around the world**. 

## Current Implementation

The system is set up to:
1. **Automatically calculate yesterday's date**
2. **Fetch real trending news** from NewsAPI (if configured)
3. **Fallback to curated content** if API is not configured

## Option 1: Use Real News API (Recommended)

To fetch real trending news from around the world:

### Step 1: Get NewsAPI Key

1. Go to [NewsAPI.org](https://newsapi.org/)
2. Sign up for a free account
3. Get your API key from the dashboard
4. Free tier allows 100 requests per day

### Step 2: Add API Key to Environment Variables

**For Local Development:**
Create a `.env.local` file in the root directory:

```env
NEWS_API_KEY=your_api_key_here
```

**For Vercel Deployment:**
1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add:
   - **Name**: `NEWS_API_KEY`
   - **Value**: Your NewsAPI key
   - **Environment**: Production, Preview, Development (select all)

### Step 3: Deploy

The system will automatically:
- Fetch yesterday's trending fashion news
- Sort by popularity
- Display news from multiple global sources
- Update every 24 hours

## Option 2: Use Fallback Content (Current)

If you don't set up NewsAPI, the system will use curated content that:
- Updates based on yesterday's date
- Features global fashion trends
- Includes links to your fashion pages
- Works without any API setup

## Features

✅ **Automatic Date Calculation** - Always shows yesterday's date  
✅ **Global News Sources** - Fetches from worldwide fashion news  
✅ **Trending Focus** - Sorted by popularity  
✅ **Multiple Categories** - Fashion trends, celebrity style, sustainability, etc.  
✅ **Fallback System** - Works even without API key  
✅ **Caching** - News cached for 1 hour to optimize performance  

## News Categories Tracked

- Fashion Trends
- Fashion Week
- Celebrity Style
- Sustainable Fashion
- Fashion Industry
- Style Trends

## Customization

You can modify the news queries in `lib/news.ts`:

```typescript
const queries = [
  'fashion trends',
  'fashion week',
  'celebrity style',
  // Add your custom queries here
]
```

## Notes

- NewsAPI free tier: 100 requests/day
- News is cached for 1 hour to optimize performance
- The system automatically filters for yesterday's date
- All news is sorted by popularity
- Only English language news is fetched

