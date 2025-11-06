import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Selling Products – Top Fashion Items & Beauty Products | Style Vogue Fashion',
  description: 'Discover the best selling fashion products, accessories, and beauty items. Top-rated wardrobe essentials, trending accessories, and must-have style products with detailed descriptions and uses.',
  keywords: 'best selling products, top fashion products, best selling accessories, fashion essentials, beauty products, wardrobe must-haves, style vogue fashion',
  openGraph: {
    title: 'Best Selling Products – Top Fashion Items & Beauty Products',
    description: 'Discover the best selling fashion products, accessories, and beauty items with detailed descriptions and uses',
  },
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

