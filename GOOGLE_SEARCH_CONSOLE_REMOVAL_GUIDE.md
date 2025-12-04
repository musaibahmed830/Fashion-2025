# Google Search Console - Remove 404 Error URLs

## URLs to Remove from Google Index

Below are the URLs that are causing 404 errors and need to be removed from Google's index:

### External Domain (Not Your Site)
- `https://stylevogue.com/` - This is a different domain, not yours
- `https://todaybusinessposts.com/elegance-navigating-the-fashion-odyssey-with-stylevoguefashion/` - External site

### Legacy Color Filter Pages
- `https://stylevoguefashion.com/color/khaki/`
- `https://stylevoguefashion.com/color/black-stripes`
- `https://stylevoguefashion.com/color/1-2-beige-plaid/`
- `https://stylevoguefashion.com/color/beige-black/`

### Legacy Manufacturer Filter Pages
- `https://stylevoguefashion.com/manufacturer/tommy-hilfiger/`
- `https://stylevoguefashion.com/manufacturer/clifton-heritage/`

### Legacy Size Filter Pages
- `https://stylevoguefashion.com/size/6-plus-short/`
- `https://stylevoguefashion.com/size/18-long/`

### Authentication Pages
- `https://stylevoguefashion.com/logout/`

### Duplicate Fashion Page
- `https://stylevoguefashion.com/fashion` - Check if this should exist or redirect to `/fashion/`

### Invalid URL (www subdomain)
- `https://www.stylevoguefashion.com/fashion/spring-2025-fashion-trends` - Ensure www redirects to non-www

---

## Steps to Remove URLs from Google Search Console

### Step 1: Access Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select your property: `stylevoguefashion.com`

### Step 2: Use the Removals Tool
1. In the left sidebar, click **"Removals"**
2. Click the **"New Request"** button
3. For each URL above, enter the full URL
4. Select **"Temporarily remove URL from Google Search"**
5. Click **"Next"** and then **"Submit Request"**

### Step 3: Mark as Fixed in Coverage Report
1. Go to **"Indexing" → "Pages"**
2. Scroll to **"Why pages aren't indexed"**
3. Click on **"Not found (404)"**
4. Select the URLs you've blocked with robots.txt
5. Click **"Validate Fix"**

### Step 4: Request Re-crawl of robots.txt
1. In Google Search Console, use the URL Inspection tool
2. Enter: `https://stylevoguefashion.com/robots.txt`
3. Click **"Request Indexing"**

### Step 5: Submit Updated Sitemap
1. Go to **"Indexing" → "Sitemaps"**
2. Remove old sitemap if present
3. Add: `https://stylevoguefashion.com/sitemap.xml`
4. Click **"Submit"**

---

## What We've Done to Prevent Future Issues

### ✅ Updated `robots.txt`
- Blocked `/color/`, `/manufacturer/`, `/size/`, `/logout/` paths
- These will no longer be crawled by search engines

### ✅ Updated `next-sitemap.config.js`
- Excluded legacy paths from sitemap generation
- Only valid pages will appear in your sitemap

### ✅ Created `middleware.ts`
- Returns **410 Gone** status for legacy URLs
- Tells Google these pages are permanently removed (better than 404)
- Adds `X-Robots-Tag: noindex, nofollow` header

---

## Additional Recommendations

### 1. Set Up www to non-www Redirect
If you haven't already, ensure `www.stylevoguefashion.com` redirects to `stylevoguefashion.com`. This can be done in your hosting provider (Vercel) settings.

### 2. Check for Broken Internal Links
Run a site audit to ensure you're not linking to these legacy URLs from your own pages.

### 3. Monitor Coverage Report
After 1-2 weeks, check the Coverage Report again to ensure the 404 errors are decreasing.

### 4. Set Up 301 Redirects (If Needed)
If any of these legacy URLs had valuable content that now exists elsewhere, create 301 redirects in `middleware.ts`.

---

## Timeline

- **Immediate**: robots.txt blocks new crawls
- **1-3 days**: Google re-crawls robots.txt
- **1-2 weeks**: URLs start dropping from index
- **4-6 weeks**: Most URLs should be removed from search results

---

## Verification Commands

After deploying these changes, verify they're working:

```bash
# Test that legacy URLs return 410 Gone
curl -I https://stylevoguefashion.com/color/khaki/

# Should show: HTTP/1.1 410 Gone

# Verify robots.txt is updated
curl https://stylevoguefashion.com/robots.txt

# Verify sitemap doesn't include legacy URLs
curl https://stylevoguefashion.com/sitemap.xml
```
