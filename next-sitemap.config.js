module.exports = {
  siteUrl: 'https://stylevoguefashion.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/color/*/feed/',
          '/manufacturer/*/feed/',
          '/size/*/feed/',
          '/wp-content/',
          '/wp-admin/',
          '/feed/',
          '/*/feed/',
        ]
      },
    ],
    sitemap: 'https://stylevoguefashion.com/sitemap.xml'
  },
};
