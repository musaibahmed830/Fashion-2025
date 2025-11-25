import Link from 'next/link'
import Image from 'next/image'
import { getPostsByCategory } from '@/lib/posts'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fashion Trends 2026 - Latest Style Trends | StyleVogue',
  description: 'Explore the latest fashion trends for 2026 including boho chic revival, Y2K styles, athleisure, sustainable fashion, Gen Z fashion, Gen Alpha trends, and 90s fashion revival. Discover boiler suits, bomber jackets, cargo pants, and more trending styles.',
  keywords: 'fashion trends 2026, latest trends, boho chic, Y2K fashion, athleisure, sustainable fashion, Gen Z fashion, Gen Alpha fashion, 90s fashion, boiler suits, bomber jackets, cargo pants, genderless fashion, color blocking, style trends, stylevogue',
  alternates: {
    canonical: 'https://stylevoguefashion.com/fashion/trends',
  },
  openGraph: {
    title: 'Fashion Trends 2026 - Latest Style Trends',
    description: 'Explore the latest fashion trends for 2026 including boho chic, Y2K revival, Gen Z and Gen Alpha fashion, and 90s style comeback',
    url: 'https://stylevoguefashion.com/fashion/trends',
  },
}

export default function TrendsPage() {
  const trendingPosts = getPostsByCategory('Trending')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Fashion Trends 2026',
    description: 'Latest fashion trends and style movements for 2026',
    url: 'https://stylevogue.com/fashion/trends',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
            Fashion Trends 2026 – Latest Style Trends
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Stay ahead of the curve with the latest fashion trends shaping 2026. From seasonal must-haves to celebrity-inspired styles, discover what's trending now.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="/fashion" className="text-pink-600 hover:text-pink-700 hover:underline font-semibold">
              All Fashion Posts →
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/fashion/style-tips" className="text-pink-600 hover:text-pink-700 hover:underline font-semibold">
              Style Tips →
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/products" className="text-pink-600 hover:text-pink-700 hover:underline font-semibold">
              Best Products →
            </Link>
          </div>
        </div>

        {trendingPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingPosts.map((post, index) => (
              <Link
                key={post.id}
                href={`/fashion/${post.slug}`}
                className={`animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <article className="bg-white rounded-lg shadow-lg overflow-hidden hover-lift hover-glow group">
                  <div className="relative h-64 w-full image-zoom">
                    <Image
                      src={post.image}
                      alt={`${post.title} - Fashion trend 2026 image`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-pink-600 font-semibold">
                      {post.category}
                    </span>
                    <h3 className="text-2xl font-bold mt-2 mb-3 text-gray-900 group-hover:text-pink-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <span className="text-pink-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                        Read More →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No trending posts found at the moment.</p>
            <Link href="/fashion" className="text-pink-600 hover:underline mt-4 inline-block">
              Browse All Fashion Posts
            </Link>
          </div>
        )}

        {/* SEO Content Section */}
        <section className="mt-16 space-y-12 animate-fade-in">
          {/* Current Fashion Trends 2026 */}
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 sm:p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Current Fashion Trends 2026: Styles and Aesthetics
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-6 text-lg">
                  Fashion trends in 2026 showcase a dynamic blend of nostalgic revivals, sustainable practices, and bold self-expression. From boho chic comebacks to Y2K nostalgia, this year's trends celebrate both comfort and creativity.
                </p>

                <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-4 text-gray-900">Boho Chic Revival</h3>
                <p className="mb-4">
                  The boho chic aesthetic is making a major comeback in 2026, blending nostalgic elements with contemporary styles. This trend is especially popular for festival wear, featuring flowing maxi dresses, fringe details, floral prints, and layered accessories. Earth tones, paisley patterns, and natural fabrics like cotton and linen define this free-spirited style that emphasizes comfort and individuality.
                </p>

                <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-4 text-gray-900">Y2K Revival</h3>
                <p className="mb-4">
                  Nostalgic styles from the early 2000s continue to dominate fashion in 2026. The Y2K revival brings back low-rise jeans, butterfly clips, tiny sunglasses, and metallic fabrics. Cargo pants, a staple of this era, are particularly popular in both streetwear and more sophisticated looks. This trend appeals to those seeking nostalgic comfort while embracing bold, playful aesthetics.
                </p>

                <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-4 text-gray-900">Athleisure</h3>
                <p className="mb-4">
                  The blend of athletic and leisure wear remains one of the most popular trends for its comfort and versatility. Athleisure seamlessly transitions from gym to street, featuring high-quality activewear pieces like leggings, sports bras, and sneakers that can be styled for everyday wear. This trend reflects the modern lifestyle where comfort and style go hand in hand.
                </p>

                <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-4 text-gray-900">Sustainable Fashion</h3>
                <p className="mb-4">
                  Brands are increasingly focusing on ethical production, with a growing emphasis on transparency in materials like recycled cotton, organic fabrics, and eco-friendly manufacturing processes. Sustainable fashion is no longer niche—it's mainstream, with consumers demanding ethical choices that don't compromise on style. This movement includes circular fashion models, carbon-neutral production, and transparent supply chains.
                </p>

                <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-4 text-gray-900">Genderless Fashion</h3>
                <p className="mb-4">
                  This movement continues to grow, with a focus on styles that are not defined by gender. Genderless fashion breaks traditional boundaries, offering clothing that anyone can wear regardless of gender identity. Oversized silhouettes, neutral color palettes, and versatile designs characterize this inclusive trend that prioritizes personal expression over societal norms.
                </p>

                <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-4 text-gray-900">Key Clothing Items Trending in 2026</h3>
                
                <h4 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-gray-800">Boiler Suits</h4>
                <p className="mb-4">
                  These one-piece outfits are making a major comeback, seen everywhere from runways to ready-to-wear brands. Boiler suits offer a streamlined, effortless look that's both practical and stylish. Available in various fabrics from denim to linen, they can be dressed up or down for any occasion.
                </p>

                <h4 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-gray-800">Bomber Jackets</h4>
                <p className="mb-4">
                  A classic that has been updated with new colors, patterns, and fabrics. Modern bomber jackets feature bold prints, metallic finishes, and sustainable materials. They're perfect for layering and add an instant cool factor to any outfit.
                </p>

                <h4 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-gray-800">Cargo Pants</h4>
                <p className="mb-4">
                  These pants are a staple, popular in both streetwear and more sophisticated looks. The functional pockets and relaxed fit make them practical and comfortable, while their versatility allows them to be styled for various occasions.
                </p>

                <h4 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-gray-800">Chunky Loafers</h4>
                <p className="mb-4">
                  A footwear trend that is both comfortable and stylish. Chunky loafers combine classic elegance with modern comfort, featuring platform soles and bold designs that make a statement while providing all-day wearability.
                </p>

                <h4 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-gray-800">Puff Sleeves</h4>
                <p className="mb-4">
                  A detail that adds volume and a feminine touch to various garments. Puff sleeves appear on blouses, dresses, and even outerwear, creating dramatic silhouettes that balance romance with modern edge.
                </p>

                <h4 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-gray-800">Cropped Cardigans</h4>
                <p className="mb-4">
                  A cozy and fashionable option that pairs well with many outfits. Cropped cardigans are perfect for layering, offering warmth without bulk and creating flattering proportions when paired with high-waisted bottoms.
                </p>

                <h4 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-gray-800">Miniskirts</h4>
                <p className="mb-4">
                  Short skirts are making a strong statement in current fashion. From pleated schoolgirl styles to leather miniskirts, this trend embraces confidence and self-expression, often paired with chunky boots or sneakers for a modern twist.
                </p>

                <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-4 text-gray-900">Other Notable Trends</h3>
                
                <h4 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-gray-800">Colour Blocking</h4>
                <p className="mb-4">
                  The use of bold, contrasting colors is a major trend in 2026. Color blocking creates visual interest and makes a powerful style statement. Think vibrant combinations like electric blue with hot pink, or emerald green with bright orange.
                </p>

                <h4 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-gray-800">Psychedelic Designs</h4>
                <p className="mb-4">
                  A resurgence of vibrant and bold psychedelic-inspired graphics is seen, particularly in t-shirt designs. These eye-catching patterns feature swirling colors, abstract shapes, and trippy visuals that capture attention and express creativity.
                </p>

                <h4 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-gray-800">Classic Garments Reimagined</h4>
                <p className="mb-4">
                  Designers are giving new life to traditional pieces like cashmere, with brands relaunching with contemporary visions. Classic garments are being updated with modern cuts, sustainable materials, and fresh colorways while maintaining their timeless appeal.
                </p>

                <h4 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-gray-800">Collaborations</h4>
                <p className="mb-4">
                  Designers are continuing to partner with other labels for unique capsule collections. These collaborations bring together different aesthetics and expertise, resulting in limited-edition pieces that blend multiple design philosophies and create buzz in the fashion world.
                </p>
              </div>
            </div>
          </div>

          {/* Gen Z Fashion Trends */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 sm:p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Gen Z Fashion Trends: The Digital Generation's Style Revolution
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-6 text-lg">
                  Generation Z (born 1997-2012) is reshaping fashion with their unique blend of digital-native aesthetics, sustainability consciousness, and authentic self-expression. Their style choices reflect values of inclusivity, individuality, and environmental responsibility.
                </p>

                <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-4 text-gray-900">Core Gen Z Fashion Characteristics</h3>
                
                <h4 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-gray-800">Thrifted and Vintage</h4>
                <p className="mb-4">
                  Gen Z has embraced second-hand shopping as both a sustainable choice and a way to find unique pieces. Thrifting is not just about saving money—it's a lifestyle that values individuality and environmental consciousness. Vintage pieces from the 90s and early 2000s are particularly sought after.
                </p>

                <h4 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-gray-800">Oversized Everything</h4>
                <p className="mb-4">
                  Comfort is king for Gen Z. Oversized hoodies, baggy jeans, and loose-fitting silhouettes dominate their wardrobes. This trend prioritizes comfort and movement while creating a relaxed, effortless aesthetic that rejects restrictive traditional fashion norms.
                </p>

                <h4 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-gray-800">Streetwear Influence</h4>
                <p className="mb-4">
                  Streetwear has become mainstream thanks to Gen Z, with brands like Supreme, Stüssy, and Palace influencing everyday fashion. Sneakers, graphic tees, and casual athletic wear are staples that blend comfort with style.
                </p>

                <h4 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-gray-800">Gender-Fluid Fashion</h4>
                <p className="mb-4">
                  Gen Z leads the charge in breaking down gender barriers in fashion. They embrace clothing regardless of traditional gender labels, mixing masculine and feminine elements to create authentic personal styles that reflect their identity.
                </p>

                <h4 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-gray-800">Tech-Integrated Style</h4>
                <p className="mb-4">
                  As digital natives, Gen Z incorporates technology into fashion through smart accessories, digital fashion items, and social media-driven trends. They're early adopters of fashion tech innovations and use platforms like TikTok and Instagram to discover and share trends.
                </p>

                <h4 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-gray-800">Sustainable and Ethical Choices</h4>
                <p className="mb-4">
                  Environmental consciousness drives Gen Z's purchasing decisions. They research brands' sustainability practices, support ethical production, and prioritize quality over quantity. Fast fashion is increasingly rejected in favor of durable, meaningful pieces.
                </p>

                <h4 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-gray-800">Nostalgic Y2K Aesthetics</h4>
                <p className="mb-4">
                  Gen Z has fully embraced Y2K fashion, bringing back low-rise jeans, butterfly accessories, tiny bags, and metallic fabrics. This nostalgic trend connects them to their childhood while allowing creative reinterpretation of early 2000s styles.
                </p>

                <h4 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-gray-800">Minimalist with Statement Pieces</h4>
                <p className="mb-4">
                  Gen Z often combines minimalist basics with bold statement pieces. Think simple white tees paired with eye-catching accessories, or neutral outfits punctuated by one standout item that expresses personality.
                </p>
              </div>
            </div>
          </div>

          {/* Gen Alpha Fashion Trends */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 sm:p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Gen Alpha Fashion Trends: The Next Generation's Style Evolution
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-6 text-lg">
                  Generation Alpha (born 2010-2025) represents the youngest fashion consumers, growing up in a world where digital and physical realities merge. Their fashion preferences are shaped by sustainability, technology, and unprecedented access to global trends.
                </p>

                <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-4 text-gray-900">Emerging Gen Alpha Fashion Characteristics</h3>
                
                <h4 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-gray-800">Sustainable from the Start</h4>
                <p className="mb-4">
                  Gen Alpha is the first generation to be raised with environmental consciousness as a core value. They expect sustainable materials, ethical production, and eco-friendly packaging as standard. Brands targeting this generation must prioritize planet-friendly practices from the ground up.
                </p>

                <h4 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-gray-800">Digital-First Fashion</h4>
                <p className="mb-4">
                  Growing up with virtual worlds and digital avatars, Gen Alpha is comfortable with digital fashion items, NFTs, and virtual styling. They see fashion as existing in both physical and digital realms, with virtual clothing becoming as important as real-world pieces.
                </p>

                <h4 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-gray-800">Comfort and Functionality</h4>
                <p className="mb-4">
                  Like Gen Z, Gen Alpha prioritizes comfort, but takes it further with functional design. Clothing must be practical for active lifestyles, easy to care for, and adaptable to various activities. Performance fabrics and smart materials are expected.
                </p>

                <h4 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-gray-800">Bold Colors and Patterns</h4>
                <p className="mb-4">
                  Gen Alpha embraces vibrant colors, playful patterns, and expressive designs. They're not afraid of standing out and use fashion as a form of creative expression from a young age. Bright neons, animal prints, and graphic designs are popular.
                </p>

                <h4 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-gray-800">Inclusive Sizing and Design</h4>
                <p className="mb-4">
                  This generation expects fashion to be inclusive from the start. Adaptive clothing, diverse representation, and gender-neutral options are not trends but expectations. Brands must reflect diversity in their designs and marketing.
                </p>

                <h4 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-gray-800">Tech-Enhanced Clothing</h4>
                <p className="mb-4">
                  Gen Alpha expects clothing to integrate technology seamlessly. Smart fabrics, temperature-regulating materials, and interactive elements are becoming standard. They see clothing as both functional and connected to their digital lives.
                </p>

                <h4 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-gray-800">Educational and Purpose-Driven</h4>
                <p className="mb-4">
                  Gen Alpha values brands that stand for something beyond fashion. Clothing that supports causes, educates about issues, or contributes to positive change resonates with this generation. Purpose-driven fashion is not optional—it's essential.
                </p>

                <h4 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-gray-800">Customization and Personalization</h4>
                <p className="mb-4">
                  Growing up with on-demand content and personalized experiences, Gen Alpha expects fashion to be customizable. From color choices to fit adjustments, they want clothing that reflects their unique preferences and can be tailored to their needs.
                </p>
              </div>
            </div>
          </div>

          {/* 90s Fashion Revival */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 sm:p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                90s Fashion Revival: Nostalgic Styles Making a Comeback
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-6 text-lg">
                  The 1990s fashion revival continues to dominate trends in 2026, with iconic styles from this decade being reinterpreted for modern wardrobes. From grunge aesthetics to minimalist chic, 90s fashion offers timeless appeal with contemporary updates.
                </p>

                <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-4 text-gray-900">Key 90s Fashion Trends in 2026</h3>
                
                <h4 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-gray-800">Grunge Aesthetic</h4>
                <p className="mb-4">
                  The grunge movement of the early 90s is back with flannel shirts, ripped jeans, combat boots, and layered looks. This anti-fashion aesthetic emphasizes comfort and authenticity, with oversized cardigans, band t-shirts, and distressed denim creating that effortlessly cool vibe.
                </p>

                <h4 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-gray-800">Slip Dresses</h4>
                <p className="mb-4">
                  The iconic slip dress of the 90s has returned, now styled with modern twists. These silky, minimalist dresses can be worn alone for a sleek look or layered over t-shirts for a contemporary take. They embody the 90s minimalist elegance that remains timeless.
                </p>

                <h4 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-gray-800">Crop Tops and High-Waisted Jeans</h4>
                <p className="mb-4">
                  This classic 90s combination is back in full force. High-waisted jeans, particularly in light washes, paired with crop tops create that perfect 90s silhouette. The high-waisted trend provides a flattering fit while the crop top adds a playful, confident element.
                </p>

                <h4 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-gray-800">Minimalist Pieces</h4>
                <p className="mb-4">
                  The 90s minimalist movement emphasized clean lines, neutral colors, and simple silhouettes. This aesthetic is perfect for modern wardrobes, featuring tailored pieces, monochromatic outfits, and understated elegance that never goes out of style.
                </p>

                <h4 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-gray-800">Denim Everything</h4>
                <p className="mb-4">
                  The 90s were all about denim, and this trend is back with denim jackets, jeans, skirts, and even dresses. Double denim (denim on denim) is making a comeback, styled in a more sophisticated way than the original 90s version.
                </p>

                <h4 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-gray-800">Platform Shoes and Chunky Sneakers</h4>
                <p className="mb-4">
                  Platform shoes, from sandals to boots, are a major 90s revival trend. Chunky sneakers, particularly in white or bold colors, complete the 90s look while providing modern comfort. These statement shoes add height and attitude to any outfit.
                </p>

                <h4 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-gray-800">Baby Tees and Fitted Tops</h4>
                <p className="mb-4">
                  Tight-fitting baby tees with logos, band names, or simple graphics are back. These tops pair perfectly with high-waisted bottoms and oversized outerwear, creating that quintessential 90s silhouette.
                </p>

                <h4 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-gray-800">Hair Accessories</h4>
                <p className="mb-4">
                  90s hair accessories like butterfly clips, scrunchies, and claw clips have made a major comeback. These nostalgic accessories add a playful touch to modern hairstyles and complete the 90s aesthetic.
                </p>

                <h4 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-gray-800">Oversized Blazers</h4>
                <p className="mb-4">
                  The power blazer of the 90s is back, but now in oversized, relaxed fits. These blazers can be worn with everything from dresses to jeans, creating a sophisticated yet comfortable look that defines modern 90s-inspired style.
                </p>

                <h4 className="text-lg sm:text-xl font-semibold mt-6 mb-3 text-gray-800">Velvet and Satin</h4>
                <p className="mb-4">
                  Luxurious fabrics like velvet and satin, popular in 90s eveningwear, are making a comeback. These materials add texture and elegance to modern wardrobes, appearing in everything from dresses to blazers and accessories.
                </p>

                <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-4 text-gray-900">How to Style 90s Fashion in 2026</h3>
                <p className="mb-4">
                  The key to modern 90s style is balance. Mix authentic 90s pieces with contemporary items to avoid looking costume-like. Pair a slip dress with chunky sneakers, or style a grunge flannel with tailored trousers. The goal is to capture the spirit of the 90s while maintaining a fresh, current look that reflects your personal style.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

