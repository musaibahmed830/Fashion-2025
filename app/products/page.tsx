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
  {
    id: '13',
    name: 'Elegant Lace Winter Wedding Dress',
    category: 'Wedding',
    description: 'Stunning floor-length wedding gown featuring intricate lace detailing and long sleeves. Perfect for winter ceremonies with its sophisticated design, cathedral train, and timeless ivory color. Made from premium lace and satin for a luxurious feel.',
    use: 'Ideal for winter and fall weddings, both indoor and outdoor ceremonies. The long sleeves provide warmth and elegance while the flowing train creates a dramatic entrance. Perfect for traditional church weddings, garden ceremonies, or elegant ballroom receptions. Can be paired with a veil and statement jewelry for a complete bridal look.',
    image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80',
    features: ['Premium Lace & Satin', 'Long Sleeves', 'Cathedral Train', 'Ivory Color', 'Custom Fit Available'],
    rating: 4.9,
    price: '$899.99',
  },
  {
    id: '14',
    name: 'Velvet A-Line Wedding Gown',
    category: 'Wedding',
    description: 'Luxurious velvet wedding dress with A-line silhouette and V-neckline. Features rich texture perfect for cold-weather weddings, fitted bodice, and flowing skirt. The deep burgundy or ivory velvet creates a regal, sophisticated look.',
    use: 'Perfect for winter weddings, especially December and January ceremonies. The velvet fabric provides warmth while maintaining bridal elegance. Ideal for intimate ceremonies, destination winter weddings, or non-traditional brides seeking unique style. Works beautifully in rustic venues, historic estates, or modern ballrooms.',
    image: 'https://images.unsplash.com/photo-1594552072238-5cdae25e71e0?w=800&q=80',
    features: ['Luxe Velvet Fabric', 'A-Line Silhouette', 'V-Neckline', 'Multiple Colors', 'Winter-Ready'],
    rating: 4.8,
    price: '$749.99',
  },
  {
    id: '15',
    name: 'Classic Satin Ball Gown Wedding Dress',
    category: 'Wedding',
    description: 'Timeless ball gown wedding dress in luxurious satin with off-shoulder neckline. Features a fitted bodice with boning, full skirt with layers of tulle, and elegant train. The classic silhouette flatters all body types.',
    use: 'Perfect for formal winter weddings and grand ballroom receptions. The off-shoulder design adds romance while the full skirt creates a princess-like appearance. Ideal for traditional ceremonies, black-tie weddings, or brides wanting a fairytale moment. The layers provide warmth for winter events while maintaining an elegant silhouette.',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80',
    features: ['Premium Satin', 'Ball Gown Silhouette', 'Off-Shoulder Design', 'Layered Tulle Skirt', 'Boned Bodice'],
    rating: 4.9,
    price: '$649.99',
  },
  {
    id: '16',
    name: 'Modern Minimalist Wedding Dress',
    category: 'Wedding',
    description: 'Contemporary wedding dress with clean lines and minimal embellishment. Features long sleeves, subtle V-back, and column silhouette in soft crepe fabric. The understated elegance appeals to modern brides seeking simplicity.',
    use: 'Ideal for modern, minimalist weddings and contemporary brides. Perfect for city hall ceremonies, intimate gatherings, or second weddings. The long sleeves make it suitable for winter events while the simple design allows accessories to shine. Works beautifully in urban venues, art galleries, or minimalist settings.',
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80',
    features: ['Clean Modern Design', 'Long Sleeves', 'Crepe Fabric', 'V-Back Detail', 'Column Silhouette'],
    rating: 4.7,
    price: '$399.99',
  },
  {
    id: '17',
    name: 'Sequin Cocktail Party Dress',
    category: 'Party Wear',
    description: 'Glamorous cocktail dress covered in shimmering sequins with a fitted silhouette. Features a flattering V-neckline, sleeveless design, and knee-length hem. Perfect for making a statement at holiday parties and celebrations.',
    use: 'Perfect for New Year\'s Eve parties, holiday celebrations, cocktail events, and night-out occasions. The sequins catch the light beautifully for photos and dancing. Ideal for festive gatherings, birthday parties, anniversary celebrations, or any event where you want to sparkle. Pair with heels and minimal jewelry for maximum impact.',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80',
    features: ['Full Sequin Coverage', 'Fitted Silhouette', 'V-Neckline', 'Knee-Length', 'Party-Ready'],
    rating: 4.8,
    price: '$249.99',
  },
  {
    id: '18',
    name: 'Velvet Wrap Party Dress',
    category: 'Party Wear',
    description: 'Rich velvet wrap dress with flattering tie-waist and three-quarter sleeves. The wrap design creates a feminine silhouette while the luxe velvet adds sophistication. Available in jewel tones perfect for winter celebrations.',
    use: 'Ideal for Christmas parties, winter weddings as a guest, holiday office parties, and festive dinners. The wrap style flatters various body types and the velvet fabric provides warmth for cold-weather events. Perfect for celebrations from November through February. Can be dressed up with heels or down with boots.',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80',
    features: ['Luxe Velvet Fabric', 'Wrap Design', 'Three-Quarter Sleeves', 'Tie Waist', 'Jewel Tones'],
    rating: 4.7,
    price: '$189.99',
  },
  {
    id: '19',
    name: 'Satin Slip Party Dress',
    category: 'Party Wear',
    description: 'Elegant satin slip dress with adjustable straps and cowl neckline. The bias-cut silhouette drapes beautifully and the midi length is sophisticated and versatile. The lustrous fabric catches the light elegantly.',
    use: 'Perfect for cocktail parties, dinner dates, holiday gatherings, and semi-formal events. The slip dress can be layered with a blazer for cooler evenings or worn alone for indoor parties. Ideal for New Year\'s celebrations, gallery openings, or upscale restaurant reservations. Easy to style with various accessories for different looks.',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
    features: ['Satin Fabric', 'Adjustable Straps', 'Cowl Neckline', 'Bias Cut', 'Midi Length'],
    rating: 4.6,
    price: '$129.99',
  },
  {
    id: '20',
    name: 'Metallic Midi Party Dress',
    category: 'Party Wear',
    description: 'Eye-catching metallic midi dress with a modern fit-and-flare silhouette. Features short sleeves, round neckline, and shimmering fabric that creates a festive look. Budget-friendly option for party season.',
    use: 'Great for office holiday parties, casual New Year\'s gatherings, birthday celebrations, and festive get-togethers. The metallic fabric adds sparkle without being overly formal. Perfect for those wanting a party look on a budget. Can be styled with tights for warmth or worn alone for milder winter climates.',
    image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80',
    features: ['Metallic Fabric', 'Fit-and-Flare', 'Short Sleeves', 'Midi Length', 'Budget-Friendly'],
    rating: 4.6,
    price: '$89.99',
  },
  {
    id: '21',
    name: 'Luxe Faux Fur Coat',
    category: 'Winter Jackets',
    description: 'Statement-making full-length faux fur coat in premium quality synthetic fur. Features a luxurious collar, hook-and-eye closure, and dramatic volume. Available in classic colors including ivory, black, and camel.',
    use: 'Perfect for making a grand entrance at winter weddings, holiday parties, and special events. Provides exceptional warmth for outdoor winter activities while maintaining glamorous style. Ideal for layering over evening dresses, wedding attire, or elevating casual outfits. Can be worn to the theater, upscale restaurants, or any occasion requiring sophisticated outerwear.',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80',
    features: ['Premium Faux Fur', 'Full Length', 'Luxe Collar', 'Hook Closure', 'Statement Piece'],
    rating: 4.9,
    price: '$329.99',
  },
  {
    id: '22',
    name: 'Wool Blend Peacoat',
    category: 'Winter Jackets',
    description: 'Classic double-breasted peacoat in premium wool blend fabric. Features a tailored fit, notched lapels, side pockets, and timeless military-inspired design. The versatile style works for both casual and professional settings.',
    use: 'Essential winter jacket for daily wear, commuting, and professional environments. The peacoat style is appropriate for business settings, casual weekends, and everything in between. Perfect for temperatures from fall through spring. Can be worn over suits, casual outfits, or dresses. A timeless investment that works for multiple seasons and years.',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=800&q=80',
    features: ['Wool Blend', 'Double-Breasted', 'Tailored Fit', 'Side Pockets', 'Classic Design'],
    rating: 4.8,
    price: '$249.99',
  },
  {
    id: '23',
    name: 'Quilted Puffer Jacket',
    category: 'Winter Jackets',
    description: 'Warm quilted puffer jacket with water-resistant exterior and synthetic insulation. Features a hood, zip pockets, and adjustable hem. The practical design provides maximum warmth without sacrificing style.',
    use: 'Ideal for cold winter days, outdoor activities, travel, and casual everyday wear. The water-resistant fabric protects from snow and light rain while the insulation keeps you warm in freezing temperatures. Perfect for ski trips, winter hiking, daily errands, or commuting in harsh weather. Works with jeans, leggings, or casual pants.',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
    features: ['Water-Resistant', 'Synthetic Insulation', 'Hood', 'Zip Pockets', 'Adjustable Hem'],
    rating: 4.7,
    price: '$149.99',
  },
  {
    id: '24',
    name: 'Sherpa-Lined Denim Jacket',
    category: 'Winter Jackets',
    description: 'Trendy denim jacket with cozy sherpa lining throughout. Features a classic denim exterior, button closure, chest pockets, and warm fleece interior. The perfect combination of style and comfort for mild winter days.',
    use: 'Perfect for layering during fall and mild winter days. Great for casual outings, weekend activities, and creating effortlessly cool looks. Can be worn over sweaters, hoodies, or long-sleeve shirts. Ideal for transitional weather, concerts, casual gatherings, or adding a relaxed vibe to any outfit. Works well with jeans, skirts, or dresses.',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80',
    features: ['Denim Exterior', 'Sherpa Lining', 'Button Closure', 'Chest Pockets', 'Trendy Style'],
    rating: 4.8,
    price: '$179.99',
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
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${selectedCategory === category
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
