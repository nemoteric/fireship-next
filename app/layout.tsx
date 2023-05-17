/* eslint-disable @next/next/no-head-element */
import Link from 'next/link'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <main>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/notes">Notes</Link>
          </nav>
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  )
}
