/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://stylevoguefashion.com',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    exclude: ['/api/*', '/server-sitemap.xml'],
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
                    '/api/'
                ]
            }
        ],
        additionalSitemaps: []
    },
    changefreq: 'daily',
    priority: 0.7,
    transform: async (config, path) => {
        // Custom priority for different page types
        let priority = 0.7
        let changefreq = 'daily'

        if (path === '/') {
            priority = 1.0
            changefreq = 'daily'
        } else if (path.startsWith('/fashion/')) {
            priority = 0.8
            changefreq = 'weekly'
        } else if (path.startsWith('/products')) {
            priority = 0.9
            changefreq = 'daily'
        } else if (path === '/about' || path === '/contact') {
            priority = 0.6
            changefreq = 'monthly'
        } else if (path === '/privacy' || path === '/terms') {
            priority = 0.3
            changefreq = 'yearly'
        }

        return {
            loc: path,
            changefreq,
            priority,
            lastmod: new Date().toISOString(),
        }
    }
}
