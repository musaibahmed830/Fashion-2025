/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://stylevoguefashion.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/server-sitemap-index.xml'],
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
        ],
      },
    ],
    additionalSitemaps: [
      'https://stylevoguefashion.com/sitemap.xml',
    ],
  },
}

