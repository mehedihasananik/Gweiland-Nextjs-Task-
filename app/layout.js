import { Inter } from 'next/font/google'
import './globals.css'
import TopAnnouncement from './Components/TopAnnouncement/TopAnnouncement'
import Navbar from './Components/Navbar/Navbar'

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
        <Navbar />
        {children}
      </body>
    </html>
  )
}
