import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

function isAuthorized(request: NextRequest): boolean {
    const expectedUser = process.env.ADMIN_USERNAME
    const expectedPass = process.env.ADMIN_PASSWORD

    if (!expectedUser || !expectedPass) {
        // No credentials configured - fail closed rather than leaving the page open.
        return false
    }

    const authHeader = request.headers.get('authorization')
    if (!authHeader || !authHeader.startsWith('Basic ')) {
        return false
    }

    const decoded = atob(authHeader.replace('Basic ', ''))
    const [user, pass] = decoded.split(':')
    return user === expectedUser && pass === expectedPass
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    // Password-protect internal admin/reporting pages
    if (pathname.startsWith('/admin')) {
        if (!isAuthorized(request)) {
            return new NextResponse('Authentication required', {
                status: 401,
                headers: {
                    'WWW-Authenticate': 'Basic realm="Admin"',
                    'X-Robots-Tag': 'noindex, nofollow',
                },
            })
        }
        const response = NextResponse.next()
        response.headers.set('X-Robots-Tag', 'noindex, nofollow')
        return response
    }

    // List of legacy WordPress paths that should return 410 Gone
    const legacyPaths = [
        '/color/',
        '/manufacturer/',
        '/size/',
        '/logout/',
        '/login/',
        '/wp-content/',
        '/wp-admin/',
    ]

    // Check if the pathname starts with any legacy path
    const isLegacyPath = legacyPaths.some(path => pathname.startsWith(path))

    if (isLegacyPath) {
        // Return 410 Gone status to tell search engines these pages are permanently removed
        return new NextResponse(
            JSON.stringify({
                error: 'This page has been permanently removed',
                message: 'The content you are looking for no longer exists on this site.'
            }),
            {
                status: 410,
                headers: {
                    'Content-Type': 'application/json',
                    'X-Robots-Tag': 'noindex, nofollow'
                }
            }
        )
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public files (public folder)
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}
