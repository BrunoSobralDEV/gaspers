import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const gilroy = localFont({
  src: '../../public/fonts/gilroy/Gilroy-Regular.ttf',
  variable: '--font-gilroy',
})

export const metadata: Metadata = {
  title: 'Gaspers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className={gilroy.className}>
      <body>{children}</body>
    </html>
  )
}
