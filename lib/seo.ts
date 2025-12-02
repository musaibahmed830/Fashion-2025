import { BlogPost } from './posts'

// Generate Article schema for blog posts
export function generateArticleSchema(post: BlogPost, url: string) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        image: post.image,
        datePublished: new Date(post.date).toISOString(),
        dateModified: new Date(post.date).toISOString(),
        author: {
            '@type': 'Organization',
            name: 'StyleVogue Editorial Team',
            url: 'https://stylevoguefashion.com/about'
        },
        publisher: {
            '@type': 'Organization',
            name: 'StyleVogue',
            logo: {
                '@type': 'ImageObject',
                url: 'https://stylevoguefashion.com/logo.png'
            }
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url
        },
        keywords: post.keywords.join(', '),
        articleSection: post.category,
        inLanguage: 'en-US'
    }
}

// Generate Organization schema
export function generateOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'StyleVogue',
        url: 'https://stylevoguefashion.com',
        logo: {
            '@type': 'ImageObject',
            url: 'https://stylevoguefashion.com/logo.png',
            width: 600,
            height: 60
        },
        description: 'Premier destination for latest fashion trends, expert style tips, and wardrobe essentials',
        sameAs: [
            'https://www.facebook.com/stylevogue',
            'https://www.instagram.com/stylevogue',
            'https://twitter.com/stylevogue',
            'https://www.pinterest.com/stylevogue'
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            email: 'contact@stylevoguefashion.com'
        }
    }
}

// Generate WebSite schema with search action
export function generateWebSiteSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'StyleVogue',
        url: 'https://stylevoguefashion.com',
        description: 'Your premier destination for the latest fashion trends, expert style tips, and wardrobe essentials',
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://stylevoguefashion.com/fashion?search={search_term_string}'
            },
            'query-input': 'required name=search_term_string'
        },
        publisher: {
            '@type': 'Organization',
            name: 'StyleVogue'
        }
    }
}

// Generate BreadcrumbList schema
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url
        }))
    }
}

// Generate FAQ schema
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
            }
        }))
    }
}

// Generate optimized meta description
export function generateMetaDescription(content: string, maxLength: number = 155): string {
    const cleaned = content.replace(/\s+/g, ' ').trim()
    if (cleaned.length <= maxLength) return cleaned

    const truncated = cleaned.substring(0, maxLength - 3)
    const lastSpace = truncated.lastIndexOf(' ')
    return truncated.substring(0, lastSpace) + '...'
}

// Generate keywords from content
export function extractKeywords(content: string, existing: string[] = []): string[] {
    const commonWords = new Set(['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'from', 'as', 'is', 'was', 'are', 'be', 'been', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'should', 'could', 'may', 'might', 'can', 'this', 'that', 'these', 'those'])

    const words = content.toLowerCase()
        .replace(/[^\w\s]/g, ' ')
        .split(/\s+/)
        .filter(word => word.length > 3 && !commonWords.has(word))

    const frequency: { [key: string]: number } = {}
    words.forEach(word => {
        frequency[word] = (frequency[word] || 0) + 1
    })

    const sorted = Object.entries(frequency)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([word]) => word)

    return [...new Set([...existing, ...sorted])]
}
