# Google Analytics & AdSense Integration Setup

## Step 1: Get Your Google Analytics 4 Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property or use an existing one
3. Go to **Admin** → **Data Streams** → Select your stream
4. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

## Step 2: Set Up Environment Variable

### For Local Development:
Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual GA4 Measurement ID.

### For Vercel Deployment:
1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add:
   - **Name**: `NEXT_PUBLIC_GA_ID`
   - **Value**: `G-XXXXXXXXXX` (your GA4 Measurement ID)
   - **Environment**: Production, Preview, Development (select all)

## Step 3: Connect AdSense to Google Analytics

1. Go to [Google AdSense](https://www.google.com/adsense/)
2. Navigate to **Account** → **Access and authorization**
3. Click on **Google Analytics**
4. Link your Google Analytics 4 property
5. Enable **AdSense reporting** in Analytics

## Step 4: Verify Integration

After deployment:
1. Visit your website
2. Check Google Analytics → **Reports** → **Monetization** → **Publisher ads**
3. You should see AdSense data appearing within 24-48 hours

## What You'll Track

- Page views
- User behavior
- AdSense revenue (in Analytics)
- Ad performance
- User demographics
- Traffic sources
- And more...

## Important Notes

- The Analytics component only loads when `NEXT_PUBLIC_GA_ID` is set
- AdSense data may take 24-48 hours to appear in Analytics
- Make sure your AdSense account is approved before expecting revenue data
- All data collection is privacy-compliant

