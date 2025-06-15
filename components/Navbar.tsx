'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-blue-500">
            TunPi
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/projeler" className="text-gray-300 hover:text-white">
              Projeler
            </Link>
            <Link href="/egitimler" className="text-gray-300 hover:text-white">
              Eğitimler
            </Link>
            <Link href="/topluluk" className="text-gray-300 hover:text-white">
              Topluluk
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-white">
              Blog
            </Link>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
              Giriş Yap
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="/projeler"
              className="block text-gray-300 hover:text-white"
            >
              Projeler
            </Link>
            <Link
              href="/egitimler"
              className="block text-gray-300 hover:text-white"
            >
              Eğitimler
            </Link>
            <Link
              href="/topluluk"
              className="block text-gray-300 hover:text-white"
            >
              Topluluk
            </Link>
            <Link href="/blog" className="block text-gray-300 hover:text-white">
              Blog
            </Link>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
              Giriş Yap
            </button>
          </div>
        )}
      </div>
    </nav>
  )
} 