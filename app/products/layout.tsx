import { Metadata } from 'next'
import StructuredData from '@/components/StructuredData'
import { generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Best Selling Products - Top Fashion Items | StyleVogue',
  description: 'Discover the best selling fashion products, accessories, and beauty items. Top-rated wardrobe essentials, trending accessories, and must-have style products with detailed descriptions and uses.',
  keywords: 'best selling products, top fashion products, best selling accessories, fashion essentials, beauty products, wardrobe must-haves, stylevogue',
  alternates: {
    canonical: 'https://stylevoguefashion.com/products',
  },
  openGraph: {
    title: 'Best Selling Products - Top Fashion Items',
    description: 'Discover the best selling fashion products, accessories, and beauty items with detailed descriptions and uses',
    url: 'https://stylevoguefashion.com/products',
    images: ['/logo.png'],
  },
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://stylevoguefashion.com' },
    { name: 'Products', url: 'https://stylevoguefashion.com/products' },
  ])

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      {children}
    </>
  )
}

