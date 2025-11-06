'use client'

import { useEffect } from 'react'
import { trackArticleView } from '@/lib/analytics'

type ArticleViewTrackerProps = {
  title: string
  slug: string
}

export default function ArticleViewTracker({ title, slug }: ArticleViewTrackerProps) {
  useEffect(() => {
    trackArticleView(title, slug)
  }, [title, slug])

  return null
}

