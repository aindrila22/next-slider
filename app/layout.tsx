import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const inter = Poppins({ weight: "400", subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Coffee Cafe',
  description: 'Solve It Out Website Tutorial',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
