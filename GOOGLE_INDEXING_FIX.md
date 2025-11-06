# Google Search Console Indexing Fix Guide

## Issues Identified

Based on your Google Search Console screenshot, the following issues were found:

1. **URL Mismatch**: `metadataBase` was using `https://stylevogue.com` instead of `https://stylevoguefashion.com`
2. **Old Feed URLs**: WordPress/WooCommerce feed URLs from previous site (color, manufacturer, size feeds)
3. **WWW vs Non-WWW**: Mix of www and non-www URLs causing duplicate content
4. **Plugin URLs**: Old WordPress plugin directories being crawled

## Fixes Applied

### 1. Fixed URL Mismatch
- Updated `metadataBase` in `app/layout.tsx` to use `https://stylevoguefashion.com`
- Updated OpenGraph URL to match

### 2. Updated robots.txt
- Added disallow rules for old feed URLs:
  - `/color/*/feed/`
  - `/manufacturer/*/feed/`
  - `/size/*/feed/`
  - `/wp-content/`
  - `/wp-admin/`
  - `/feed/`
  - `/*/feed/`

### 3. Added Redirects
- Redirect www to non-www (canonical)
- Redirect old feed URLs to homepage
- Redirect old WordPress plugin directories

### 4. Enhanced Sitemap Configuration
- Updated `next-sitemap.config.js` to block old feed URLs in robots.txt

## Next Steps in Google Search Console

### Step 1: Request Indexing for Important Pages
1. Go to Google Search Console
2. Use the URL Inspection tool
3. Enter each important page URL:
   - `https://stylevoguefashion.com/`
   - `https://stylevoguefashion.com/about`
   - `https://stylevoguefashion.com/fashion`
   - `https://stylevoguefashion.com/products`
   - etc.
4. Click "Request Indexing" for each

### Step 2: Remove Old URLs
1. Go to **Removals** in Google Search Console
2. Click "New Request"
3. Remove old feed URLs:
   - `https://stylevoguefashion.com/color/*/feed/`
   - `https://stylevoguefashion.com/manufacturer/*/feed/`
   - `https://stylevoguefashion.com/size/*/feed/`
   - `https://stylevoguefashion.com/wp-content/plugins/revslider-transitionpack-addon/`

### Step 3: Set Preferred Domain
1. Go to **Settings** → **Domain**
2. Set preferred domain to: `stylevoguefashion.com` (without www)
3. This ensures all www URLs redirect to non-www

### Step 4: Submit Updated Sitemap
1. Go to **Sitemaps** in Google Search Console
2. Remove old sitemap if exists
3. Add new sitemap: `https://stylevoguefashion.com/sitemap.xml`
4. Submit for indexing

### Step 5: Monitor Coverage Report
1. Go to **Coverage** report
2. Check for any new "Crawled - currently not indexed" pages
3. Review reasons and fix accordingly

## Common Reasons for "Crawled - Currently Not Indexed"

1. **Duplicate Content**: Fixed by setting canonical URLs and www redirects
2. **Low-Quality Content**: Ensure all pages have unique, valuable content
3. **Crawl Budget**: Too many low-value pages (fixed by blocking old feeds)
4. **Technical Issues**: Fixed by proper robots.txt and redirects

## Verification Checklist

- [x] Fixed metadataBase URL mismatch
- [x] Added robots.txt with disallow rules
- [x] Added redirects for www to non-www
- [x] Added redirects for old feed URLs
- [x] Updated sitemap configuration
- [ ] Request indexing in Google Search Console
- [ ] Remove old URLs from index
- [ ] Set preferred domain
- [ ] Submit updated sitemap
- [ ] Monitor coverage report

## Expected Timeline

- **Immediate**: Redirects and robots.txt take effect
- **24-48 hours**: Google re-crawls with new robots.txt
- **1-2 weeks**: Old URLs removed from index
- **2-4 weeks**: New pages indexed

## Additional Recommendations

1. **Add more internal links** between pages to help Google discover content
2. **Create XML sitemap** (already configured with next-sitemap)
3. **Ensure all pages have unique content** (already done)
4. **Add structured data** (already implemented)
5. **Monitor Search Console** weekly for new issues

## Testing

After deployment, test:
1. Visit `https://stylevoguefashion.com/robots.txt` - should show disallow rules
2. Visit `https://www.stylevoguefashion.com/` - should redirect to non-www
3. Visit old feed URL - should redirect to homepage
4. Check sitemap: `https://stylevoguefashion.com/sitemap.xml`

