'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 animate-fade-in">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-3xl font-bold gradient-text animate-scale-in hover:scale-105 transition-transform"
          >
            StyleVogue
          </Link>
          <ul className="hidden md:flex gap-6 items-center">
            <li className="animate-slide-in-right stagger-1">
              <Link href="/" className="hover:text-pink-600 font-semibold transition-colors relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all group-hover:w-full"></span>
              </Link>
            </li>
            <li className="animate-slide-in-right stagger-2">
              <Link href="/fashion" className="hover:text-pink-600 font-semibold transition-colors relative group">
                Fashion
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all group-hover:w-full"></span>
              </Link>
            </li>
            <li className="animate-slide-in-right stagger-3">
              <Link href="/fashion/trends" className="hover:text-pink-600 font-semibold transition-colors relative group">
                Trends
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all group-hover:w-full"></span>
              </Link>
            </li>
            <li className="animate-slide-in-right stagger-4">
              <Link href="/fashion/style-tips" className="hover:text-pink-600 font-semibold transition-colors relative group">
                Style Tips
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all group-hover:w-full"></span>
              </Link>
            </li>
            <li className="animate-slide-in-right stagger-5">
              <Link href="/about" className="hover:text-pink-600 font-semibold transition-colors relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
          <button
            className="md:hidden text-gray-700 hover:text-pink-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-4 animate-fade-in">
            <li>
              <Link href="/" className="block hover:text-pink-600 font-semibold py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/fashion" className="block hover:text-pink-600 font-semibold py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Fashion
              </Link>
            </li>
            <li>
              <Link href="/fashion/trends" className="block hover:text-pink-600 font-semibold py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Trends
              </Link>
            </li>
            <li>
              <Link href="/fashion/style-tips" className="block hover:text-pink-600 font-semibold py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Style Tips
              </Link>
            </li>
            <li>
              <Link href="/about" className="block hover:text-pink-600 font-semibold py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  )
}


