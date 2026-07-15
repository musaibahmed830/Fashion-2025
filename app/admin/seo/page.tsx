import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO & Indexing Report',
  robots: { index: false, follow: false },
}

// Re-checked at most every 5 minutes - checking 50+ URLs on every single
// page view would be slow and pointless for a page only you visit.
export const revalidate = 300

const SITE_URL = 'https://stylevoguefashion.com'

interface UrlCheck {
  path: string
  section: string
  status: number | 'error'
  ms: number
}

function sectionFor(path: string): string {
  if (path === '/') return 'Home'
  if (path.startsWith('/products/')) return 'Product'
  if (path === '/products') return 'Products — listing'
  if (path.startsWith('/fashion/') && !['/fashion/trends', '/fashion/style-tips'].includes(path)) return 'Fashion — post'
  if (path.startsWith('/fashion')) return 'Fashion — listing'
  return 'Static'
}

async function getSitemapUrls(): Promise<string[]> {
  const res = await fetch(`${SITE_URL}/sitemap.xml`, { cache: 'no-store' })
  const xml = await res.text()
  const matches = Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g))
  return matches.map((m) => m[1])
}

async function checkUrl(url: string): Promise<UrlCheck> {
  const path = url.replace(SITE_URL, '') || '/'
  const start = Date.now()
  try {
    const res = await fetch(url, { method: 'HEAD', cache: 'no-store' })
    return { path, section: sectionFor(path), status: res.status, ms: Date.now() - start }
  } catch {
    return { path, section: sectionFor(path), status: 'error', ms: Date.now() - start }
  }
}

async function checkRobotsTxt(): Promise<{ ok: boolean; content: string }> {
  try {
    const res = await fetch(`${SITE_URL}/robots.txt`, { cache: 'no-store' })
    const content = await res.text()
    const ok = res.ok && content.toLowerCase().includes('sitemap:')
    return { ok, content }
  } catch {
    return { ok: false, content: '' }
  }
}

export default async function SeoReportPage() {
  const [sitemapUrls, robots] = await Promise.all([getSitemapUrls(), checkRobotsTxt()])
  const checks = await Promise.all(sitemapUrls.map(checkUrl))

  const healthy = checks.filter((c) => c.status === 200).length
  const broken = checks.filter((c) => c.status !== 200)
  const checkedAt = new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })

  const gscBase = 'https://search.google.com/search-console'

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#211F26]">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <header className="border-b border-[#E6E0D8] pb-6 mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#9C3C5E]">
            stylevoguefashion.com
          </span>
          <h1 className="text-3xl font-bold mt-1">SEO &amp; Indexing Report</h1>
          <p className="text-sm text-[#625C68] mt-2 flex items-center gap-2 flex-wrap">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-600" />
            Checked live at page load — <strong>{checkedAt}</strong>. Refreshes automatically at most every 5 minutes.
          </p>
        </header>

        {/* Stat tiles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          <div className="bg-white border border-[#E6E0D8] rounded-xl p-4 shadow-sm">
            <div className="text-xs uppercase tracking-wide text-[#8B8590] font-semibold mb-1">Sitemap URLs</div>
            <div className="text-3xl font-bold tabular-nums">{sitemapUrls.length}</div>
          </div>
          <div className="bg-white border border-[#E6E0D8] rounded-xl p-4 shadow-sm">
            <div className="text-xs uppercase tracking-wide text-[#8B8590] font-semibold mb-1">Live &amp; healthy</div>
            <div className="text-3xl font-bold tabular-nums text-green-700">{healthy}/{sitemapUrls.length}</div>
          </div>
          <div className="bg-white border border-[#E6E0D8] rounded-xl p-4 shadow-sm">
            <div className="text-xs uppercase tracking-wide text-[#8B8590] font-semibold mb-1">Broken URLs</div>
            <div className={`text-3xl font-bold tabular-nums ${broken.length > 0 ? 'text-red-600' : 'text-green-700'}`}>
              {broken.length}
            </div>
          </div>
          <div className="bg-white border border-[#E6E0D8] rounded-xl p-4 shadow-sm">
            <div className="text-xs uppercase tracking-wide text-[#8B8590] font-semibold mb-1">robots.txt</div>
            <div className={`text-3xl font-bold ${robots.ok ? 'text-green-700' : 'text-red-600'}`}>
              {robots.ok ? 'Valid' : 'Issue'}
            </div>
          </div>
        </div>

        {broken.length > 0 && (
          <div className="mb-10 bg-red-50 border border-red-200 rounded-xl p-5">
            <h2 className="font-bold text-red-800 mb-2">⚠ {broken.length} URL{broken.length > 1 ? 's' : ''} not returning 200</h2>
            <ul className="text-sm text-red-700 space-y-1 font-mono">
              {broken.map((c) => (
                <li key={c.path}>{c.path} — status: {c.status}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Real ranking/index data - can't be automated, link straight to it */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-1">Real ranking &amp; indexing data</h2>
          <p className="text-sm text-[#625C68] mb-4 max-w-2xl">
            Position, clicks, impressions, and the true indexed-page count only exist inside Google Search Console —
            there's no API connected here to pull them automatically. These links jump straight to the report you need.
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            <a
              href={`${gscBase}/performance/search-analytics?resource_id=sc-domain:stylevoguefashion.com`}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border border-[#E6E0D8] rounded-xl p-4 shadow-sm hover:border-[#9C3C5E] transition-colors"
            >
              <div className="font-semibold text-sm mb-1">Performance</div>
              <div className="text-xs text-[#8B8590]">Position, clicks, impressions over time</div>
            </a>
            <a
              href={`${gscBase}/index?resource_id=sc-domain:stylevoguefashion.com`}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border border-[#E6E0D8] rounded-xl p-4 shadow-sm hover:border-[#9C3C5E] transition-colors"
            >
              <div className="font-semibold text-sm mb-1">Indexing — Pages</div>
              <div className="text-xs text-[#8B8590]">True indexed count &amp; why pages are excluded</div>
            </a>
            <a
              href={`${gscBase}/sitemaps?resource_id=sc-domain:stylevoguefashion.com`}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border border-[#E6E0D8] rounded-xl p-4 shadow-sm hover:border-[#9C3C5E] transition-colors"
            >
              <div className="font-semibold text-sm mb-1">Sitemaps</div>
              <div className="text-xs text-[#8B8590]">Submission status</div>
            </a>
          </div>
        </section>

        {/* URL table */}
        <section className="mb-10">
          <div className="flex items-baseline justify-between mb-3">
            <h2 className="text-xl font-bold">All sitemap URLs — live status</h2>
            <span className="text-xs text-[#8B8590]">one HEAD request per row, checked just now</span>
          </div>
          <div className="bg-white border border-[#E6E0D8] rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#F2EEE9] border-b border-[#E6E0D8]">
                    <th className="text-left font-semibold text-xs uppercase tracking-wide text-[#8B8590] px-4 py-3">Path</th>
                    <th className="text-left font-semibold text-xs uppercase tracking-wide text-[#8B8590] px-4 py-3">Section</th>
                    <th className="text-left font-semibold text-xs uppercase tracking-wide text-[#8B8590] px-4 py-3">Status</th>
                    <th className="text-left font-semibold text-xs uppercase tracking-wide text-[#8B8590] px-4 py-3">Response time</th>
                  </tr>
                </thead>
                <tbody>
                  {checks.map((c) => (
                    <tr key={c.path} className="border-b border-[#E6E0D8] last:border-0 hover:bg-[#F2EEE9]">
                      <td className="px-4 py-2 font-mono text-xs">{c.path}</td>
                      <td className="px-4 py-2 text-[#8B8590] text-xs">{c.section}</td>
                      <td className="px-4 py-2">
                        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2 py-0.5 rounded-full ${
                          c.status === 200 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                        }`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-current" />
                          {c.status}
                        </span>
                      </td>
                      <td className="px-4 py-2 text-[#8B8590] text-xs tabular-nums">{c.ms}ms</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* robots.txt content */}
        <section>
          <h2 className="text-xl font-bold mb-3">robots.txt (live content)</h2>
          <pre className="bg-white border border-[#E6E0D8] rounded-xl p-4 text-xs font-mono overflow-x-auto shadow-sm">
{robots.content || 'Could not fetch robots.txt'}
          </pre>
        </section>

        <footer className="mt-12 pt-6 border-t border-[#E6E0D8] text-xs text-[#8B8590] flex justify-between flex-wrap gap-2">
          <span>Internal report — noindex, password-protected</span>
          <span>stylevoguefashion.com/admin/seo</span>
        </footer>
      </div>
    </div>
  )
}
