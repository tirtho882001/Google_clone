import Footer from '@/components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Google Clone',
  description: 'Next.js Clone Project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
