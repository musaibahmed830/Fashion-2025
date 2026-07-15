import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found',
}

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-2xl text-center">
      <h1 className="text-6xl font-bold mb-4 text-gray-900">404</h1>
      <p className="text-xl text-gray-600 mb-8">
        We couldn&apos;t find the page you were looking for. It may have been moved or no longer exists.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all"
        >
          Back to Home
        </Link>
        <Link
          href="/fashion"
          className="border border-pink-600 text-pink-600 font-bold py-3 px-6 rounded-lg hover:bg-pink-50 transition-all"
        >
          Browse Fashion Posts
        </Link>
        <Link
          href="/products"
          className="border border-pink-600 text-pink-600 font-bold py-3 px-6 rounded-lg hover:bg-pink-50 transition-all"
        >
          Shop Best Sellers
        </Link>
      </div>
    </div>
  )
}
