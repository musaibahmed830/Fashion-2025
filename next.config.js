/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  output: 'standalone',
  async redirects() {
    return [
      // Redirect www to non-www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.stylevoguefashion.com',
          },
        ],
        destination: 'https://stylevoguefashion.com/:path*',
        permanent: true,
      },
      // Block old feed URLs
      {
        source: '/color/:path*/feed',
        destination: '/',
        permanent: true,
      },
      {
        source: '/manufacturer/:path*/feed',
        destination: '/',
        permanent: true,
      },
      {
        source: '/size/:path*/feed',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-content/:path*',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig


