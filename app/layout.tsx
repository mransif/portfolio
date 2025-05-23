import Footer from './components/Footer'
import Preload from './components/Preload'
import Menu from './components/menu/Menu'
import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Ansif | Portfolio',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html >
      <body>
        <Preload />
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  )
}
