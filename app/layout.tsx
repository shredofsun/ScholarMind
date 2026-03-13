import React from 'react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ScholarMind - AI-Powered Research Assistant',
  description: 'Transform your research with ScholarMind',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  )
}
