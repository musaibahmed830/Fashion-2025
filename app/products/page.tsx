'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

interface Product {
  id: string
  name: string
  category: string
  description: string
  use: string
  image: string
  features: string[]
  rating: number
  price?: string
}

const bestSellingProducts: Product[] = [
  {
    id: '1',
    name: 'Classic White Button-Down Shirt',
    category: 'Wardrobe Essentials',
    description: 'A timeless white button-down shirt made from premium cotton blend. This versatile piece is a wardrobe staple that can be dressed up or down for any occasion. Features a tailored fit, crisp collar, and durable construction.',
    use: 'Perfect for professional settings, casual weekends, or layering under blazers and sweaters. Can be paired with jeans for a relaxed look or with tailored pants for business attire. Ideal for creating multiple outfit combinations throughout the year.',
    image: 'https://images.unsplash.com/photo-1594938291221-94f18e0e43b1?w=800&q=80',
    features: ['100% Premium Cotton Blend', 'Machine Washable', 'Wrinkle-Resistant', 'Classic Fit', 'Versatile Styling'],
    rating: 4.9,
    price: '$49.99',
  },
  {
    id: '2',
    name: 'Leather Crossbody Bag',
    category: 'Accessories',
    description: 'Elegant genuine leather crossbody bag with adjustable strap. Features multiple compartments, secure zipper closure, and spacious interior. The timeless design complements both casual and formal outfits.',
    use: 'Ideal for daily use, travel, shopping, and evening events. Keeps hands free while carrying essentials like phone, wallet, keys, and makeup. The crossbody design distributes weight evenly and provides security. Perfect for busy professionals and fashion-conscious individuals.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    features: ['Genuine Leather', 'Adjustable Strap', 'Multiple Compartments', 'Secure Closure', 'Classic Design'],
    rating: 4.8,
    price: '$89.99',
  },
  {
    id: '3',
    name: 'High-Waisted Wide-Leg Trousers',
    category: 'Bottoms',
    description: 'Comfortable and stylish high-waisted wide-leg trousers in premium fabric. Features an elastic waistband, flowy silhouette, and flattering cut that elongates the legs. Available in multiple colors.',
    use: 'Perfect for office wear, casual outings, and special occasions. The wide-leg design provides comfort and movement while maintaining a polished appearance. Can be styled with blouses, t-shirts, or blazers. Ideal for creating a sophisticated, modern look that works for various body types.',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80',
    features: ['High-Waisted Design', 'Elastic Waistband', 'Flowy Silhouette', 'Premium Fabric', 'Multiple Colors'],
    rating: 4.7,
    price: '$59.99',
  },
  {
    id: '4',
    name: 'Classic Trench Coat',
    category: 'Outerwear',
    description: 'Iconic double-breasted trench coat in water-resistant fabric. Features a belted waist, classic collar, and timeless design inspired by military style. Perfect for transitional weather and rainy days.',
    use: 'Essential for spring and fall seasons. Provides protection from light rain and wind while maintaining style. Can be worn over dresses, suits, or casual outfits. The versatile design works for both professional and casual settings. A must-have for building a complete wardrobe.',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80',
    features: ['Water-Resistant', 'Double-Breasted', 'Belted Waist', 'Classic Design', 'Versatile Styling'],
    rating: 4.9,
    price: '$149.99',
  },
  {
    id: '5',
    name: 'Minimalist Gold Hoop Earrings',
    category: 'Jewelry',
    description: 'Elegant gold-plated hoop earrings with a minimalist design. Features a secure closure, lightweight construction, and timeless appeal. The perfect accessory to elevate any outfit.',
    use: 'Versatile jewelry piece that complements both casual and formal attire. Can be worn daily or for special occasions. The minimalist design adds sophistication without overwhelming the outfit. Perfect for stacking with other earrings or wearing alone as a statement piece.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    features: ['Gold-Plated', 'Hypoallergenic', 'Lightweight', 'Secure Closure', 'Timeless Design'],
    rating: 4.8,
    price: '$29.99',
  },
  {
    id: '6',
    name: 'Comfortable Ballet Flats',
    category: 'Footwear',
    description: 'Classic ballet flats with cushioned insoles and flexible sole. Made from genuine leather with a pointed toe design. Provides all-day comfort while maintaining a polished, feminine look.',
    use: 'Perfect for daily wear, office environments, and occasions requiring comfortable yet stylish footwear. Ideal for commuting, walking, and standing for extended periods. Can be paired with dresses, skirts, or pants. A versatile shoe that works for multiple seasons and occasions.',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80',
    features: ['Genuine Leather', 'Cushioned Insoles', 'Flexible Sole', 'Pointed Toe', 'All-Day Comfort'],
    rating: 4.7,
    price: '$69.99',
  },
  {
    id: '7',
    name: 'Oversized Blazer',
    category: 'Outerwear',
    description: 'Trendy oversized blazer in premium wool blend. Features a relaxed fit, structured shoulders, and modern silhouette. The versatile design can be styled in multiple ways for different occasions.',
    use: 'Perfect for creating a power-dressing look or adding structure to casual outfits. Can be worn over dresses, paired with jeans, or layered over sweaters. The oversized fit provides comfort while maintaining a professional appearance. Ideal for office wear, meetings, or evening events.',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
    features: ['Wool Blend', 'Oversized Fit', 'Structured Shoulders', 'Modern Silhouette', 'Versatile Styling'],
    rating: 4.8,
    price: '$119.99',
  },
  {
    id: '8',
    name: 'Silk Scarf',
    category: 'Accessories',
    description: 'Luxurious silk scarf with elegant print design. Features soft texture, vibrant colors, and versatile styling options. Made from 100% pure silk for a premium feel and appearance.',
    use: 'Can be worn as a headscarf, neck accessory, belt, bag decoration, or hair accessory. Adds elegance and sophistication to any outfit. Perfect for travel, special occasions, or daily styling. The versatile design allows for creative styling and can transform simple outfits into fashion statements.',
    image: 'https://images.unsplash.com/photo-1583292650898-7f22ebad44a0?w=800&q=80',
    features: ['100% Pure Silk', 'Elegant Print', 'Vibrant Colors', 'Versatile Styling', 'Premium Quality'],
    rating: 4.9,
    price: '$39.99',
  },
  {
    id: '9',
    name: 'High-Waisted Midi Skirt',
    category: 'Bottoms',
    description: 'Flattering high-waisted midi skirt in A-line silhouette. Made from premium fabric with comfortable elastic waistband. The classic length and design work for various body types and occasions.',
    use: 'Perfect for office wear, casual outings, and special events. Can be paired with blouses, t-shirts, or sweaters. The midi length is versatile and appropriate for most settings. Ideal for creating feminine, polished looks that are both comfortable and stylish.',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
    features: ['High-Waisted', 'A-Line Silhouette', 'Elastic Waistband', 'Premium Fabric', 'Classic Length'],
    rating: 4.6,
    price: '$54.99',
  },
  {
    id: '10',
    name: 'Structured Leather Belt',
    category: 'Accessories',
    description: 'Classic leather belt with adjustable buckle and structured design. Made from genuine leather with a polished finish. Features a timeless design that complements both casual and formal outfits.',
    use: 'Essential accessory for defining the waist and adding structure to outfits. Can be worn with dresses, skirts, pants, or over blazers. The adjustable design ensures a perfect fit. Perfect for creating a polished, put-together look and adding a finishing touch to any ensemble.',
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583fd?w=800&q=80',
    features: ['Genuine Leather', 'Adjustable Buckle', 'Structured Design', 'Polished Finish', 'Timeless Style'],
    rating: 4.7,
    price: '$34.99',
  },
  {
    id: '11',
    name: 'Cashmere Sweater',
    category: 'Tops',
    description: 'Luxurious cashmere sweater with a relaxed fit and soft texture. Features a classic crew neck design and premium quality that provides warmth and comfort. The timeless design works for multiple seasons.',
    use: 'Perfect for layering during colder months or wearing alone in mild weather. Ideal for casual weekends, office wear, or cozy evenings. Can be paired with jeans, skirts, or tailored pants. The premium material provides exceptional comfort and warmth while maintaining a sophisticated appearance.',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80',
    features: ['100% Cashmere', 'Relaxed Fit', 'Crew Neck', 'Soft Texture', 'Premium Quality'],
    rating: 4.9,
    price: '$179.99',
  },
  {
    id: '12',
    name: 'Ankle Boots with Block Heel',
    category: 'Footwear',
    description: 'Stylish ankle boots with comfortable block heel and cushioned insole. Made from genuine leather with a versatile design that works for multiple occasions. Features a side zipper for easy wear.',
    use: 'Perfect for transitional seasons, office wear, and evening events. The block heel provides stability and comfort for extended wear. Can be paired with dresses, skirts, or pants. Ideal for creating a polished look while maintaining comfort throughout the day.',
    image: 'https://images.unsplash.com/photo-1608256246200-53bd2d3e8c44?w=800&q=80',
    features: ['Genuine Leather', 'Block Heel', 'Cushioned Insole', 'Side Zipper', 'Versatile Design'],
    rating: 4.8,
    price: '$89.99',
  },
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products')
  const categories = ['All Products', ...Array.from(new Set(bestSellingProducts.map(p => p.category)))]
  
  const filteredProducts = selectedCategory === 'All Products' 
    ? bestSellingProducts 
    : bestSellingProducts.filter(p => p.category === selectedCategory)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
          Best Selling Products – Top Fashion Items
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
          Discover the most popular fashion products, accessories, and beauty items. Each product includes detailed descriptions and practical uses to help you build the perfect wardrobe.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Link href="/fashion" className="text-pink-600 hover:text-pink-700 hover:underline font-semibold">
            Fashion Posts →
          </Link>
          <span className="text-gray-400">|</span>
          <Link href="/fashion/trends" className="text-pink-600 hover:text-pink-700 hover:underline font-semibold">
            Latest Trends →
          </Link>
          <span className="text-gray-400">|</span>
          <Link href="/fashion/style-tips" className="text-pink-600 hover:text-pink-700 hover:underline font-semibold">
            Style Tips →
          </Link>
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-8 flex flex-wrap gap-3 justify-center animate-fade-in">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${
              selectedCategory === category
                ? 'bg-pink-600 text-white hover:bg-pink-700'
                : 'bg-gray-100 text-gray-700 hover:bg-pink-100 hover:text-pink-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {filteredProducts.map((product, index) => (
          <article
            key={product.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift border border-gray-100 group animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative h-64 w-full image-zoom">
              <Image
                src={product.image}
                alt={`${product.name} - ${product.category} best selling product image`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-3 left-3 z-10">
                <span className="bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Best Seller
                </span>
              </div>
              <div className="absolute top-3 right-3 z-10">
                <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                  <svg className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <span className="text-xs font-bold text-gray-900">{product.rating}</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-pink-600 font-semibold uppercase tracking-wide">
                  {product.category}
                </span>
                {product.price && (
                  <span className="text-lg font-bold text-gray-900">{product.price}</span>
                )}
              </div>
              
              <h2 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-pink-600 transition-colors">
                {product.name}
              </h2>
              
              <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                {product.description}
              </p>

              <div className="mb-4">
                <h3 className="text-sm font-bold text-gray-900 mb-2">Best Use:</h3>
                <p className="text-sm text-gray-700 leading-relaxed line-clamp-3">
                  {product.use}
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-sm font-bold text-gray-900 mb-2">Key Features:</h3>
                <ul className="space-y-1">
                  {product.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="text-xs text-gray-600 flex items-start">
                      <span className="text-pink-600 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <Link
                  href={`/products/${product.id}`}
                  className="block w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
                >
                  View Product Details
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No products found in this category.</p>
        </div>
      )}

      {/* SEO Content Section */}
      <section className="mt-16 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 sm:p-8 md:p-12 animate-fade-in">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Best Selling Fashion Products for Your Wardrobe
            </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Our curated collection of best-selling products represents the most popular and highly-rated fashion items that have proven their value to thousands of customers. These products are selected based on quality, versatility, customer satisfaction, and timeless design.
            </p>
            <p className="mb-4">
              Each product in our best-selling collection has been carefully chosen for its ability to enhance your wardrobe and provide multiple styling options. From wardrobe essentials like classic white shirts and trench coats to statement accessories like leather bags and gold jewelry, these items form the foundation of a well-rounded, stylish wardrobe.
            </p>
            <p className="mb-4">
              When building your wardrobe, investing in best-selling products ensures you're choosing items that have stood the test of time and proven their worth. These products offer excellent value, versatility, and quality that will serve you well for years to come.
            </p>
            <p>
              Whether you're looking for wardrobe basics, statement pieces, or versatile accessories, our best-selling products collection has something for every style preference and budget. Each product includes detailed descriptions and practical use cases to help you make informed decisions about your fashion investments.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
