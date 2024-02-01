import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Provider from '../components/Provider'
import Navbar from '../components/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel&display=swap" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/archer-2" rel="stylesheet" />
        <link href="https://db.onlinewebfonts.com/c/5346a0951717ff8ed8e9e0253f884d72?family=Cera+Stencil+PRO" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <Provider>
          <Navbar />
          <div className='m-5'>
            {children}
          </div>
        </Provider>
      </body>
    </html>
  )
}
