import { NextResponse } from 'next/server'
import { getLatestTrendNews } from '@/lib/news'

// API route for fetching latest trend news
// This can be called from client-side or used for webhooks
export async function GET() {
  try {
    const news = await getLatestTrendNews()
    
    return NextResponse.json({
      success: true,
      data: news,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch news',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

// Revalidate every hour
export const revalidate = 3600

