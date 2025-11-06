'use client'

import Link from 'next/link'
import { trackLinkClick } from '@/lib/analytics'

type TrackedLinkProps = {
  href: string
  children: React.ReactNode
  className?: string
  isExternal?: boolean
  linkName?: string
  [key: string]: any
}

export default function TrackedLink({ 
  href, 
  children, 
  className, 
  isExternal = false,
  linkName,
  ...props 
}: TrackedLinkProps) {
  const handleClick = () => {
    const name = linkName || (typeof children === 'string' ? children : href)
    trackLinkClick(name, href)
  }

  if (isExternal || href.startsWith('http')) {
    return (
      <a
        href={href}
        className={className}
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}

