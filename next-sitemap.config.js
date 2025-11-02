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
      },
    ],
    additionalSitemaps: [
      'https://stylevoguefashion.com/sitemap.xml',
    ],
  },
}

