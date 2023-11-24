import { Inter } from 'next/font/google'
import './globals.css'
import TopAnnouncement from './Components/TopAnnouncement/TopAnnouncement'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gweliland',
  description: 'Homepage',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopAnnouncement />
        {children}
      </body>
    </html>
  )
}
