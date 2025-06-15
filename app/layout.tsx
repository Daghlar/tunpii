import React from 'react';
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TunPi',
  description: 'TunPi - Yeni Nesil Geliştirme Kartı',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={`${inter.className} bg-black`}>
        <div className="min-h-screen bg-black">
          <Navbar />
          <main className="relative">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
} 