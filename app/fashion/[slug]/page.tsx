import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { Metadata } from 'next'
import Link from 'next/link'
import ArticleViewTracker from '@/components/ArticleViewTracker'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }

  const canonicalUrl = `https://stylevoguefashion.com/fashion/${params.slug}`

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords.join(', '),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      url: canonicalUrl,
    },
  }
}

function formatContent(content: string): string {
  let html = content
  
  // Convert headers
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-2xl font-bold mt-6 mb-3 text-gray-900">$1</h3>')
  html = html.replace(/^## (.*$)/gim, '<h2 class="text-3xl font-bold mt-8 mb-4 text-gray-900">$1</h2>')
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold mt-10 mb-6 text-gray-900">$1</h1>')
  
  // Convert lists
  html = html.replace(/^\- (.*$)/gim, '<li class="ml-6 mb-2">$1</li>')
  html = html.replace(/(<li.*<\/li>)/gim, '<ul class="list-disc mb-4">$1</ul>')
  
  // Convert paragraphs
  html = html.split('\n\n').map((paragraph) => {
    if (!paragraph.match(/^<[hul]/) && paragraph.trim()) {
      return `<p class="mb-4 text-gray-700 leading-relaxed">${paragraph.trim()}</p>`
    }
    return paragraph
  }).join('\n')
  
  // Convert bold
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong class="font-semibold">$1</strong>')
  
  // Convert line breaks
  html = html.replace(/\n/g, '<br />')
  
  return html
}

export default function FashionPost({ params }: Props) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const formattedContent = formatContent(post.content)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'StyleVogue',
    },
    publisher: {
      '@type': 'Organization',
      name: 'StyleVogue',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <ArticleViewTracker title={post.title} slug={post.slug} />
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <Link 
          href="/fashion" 
          className="text-pink-600 hover:text-pink-700 hover:underline mb-6 inline-block transition-colors animate-fade-in"
        >
          ← Back to Fashion Posts
        </Link>
        
        <div className="mb-8 animate-fade-in">
          <span className="text-pink-600 font-semibold text-sm uppercase tracking-wide">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 text-gray-900">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {post.date}
            </span>
            <span>•</span>
            <div className="flex flex-wrap gap-2">
              {post.keywords.map((keyword, idx) => (
                <span key={idx} className="text-sm bg-pink-100 text-pink-700 px-3 py-1 rounded-full">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative h-96 w-full mb-12 rounded-lg overflow-hidden shadow-xl animate-scale-in image-zoom">
          <Image
            src={post.image}
            alt={`${post.title} - ${post.category} fashion article featured image`}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div 
          className="prose prose-lg max-w-none animate-fade-in"
          dangerouslySetInnerHTML={{ __html: formattedContent }}
        />
      </article>
    </>
  )
}


