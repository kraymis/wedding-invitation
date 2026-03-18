import type { Metadata } from 'next'
import { Cormorant_Garamond, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { AppProviders } from '@/components/app-providers'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant"
});

const lato = Lato({ 
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato"
});

export const metadata: Metadata = {
  title: 'Oussama & Wafae | Wedding Invitation - April 1, 2026',
  description: 'Invitation au mariage de Oussama et Wafae le 1 Avril 2026',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-rings.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${cormorant.variable} ${lato.variable} font-sans antialiased`}>
        <AppProviders>{children}</AppProviders>
        <Analytics />
      </body>
    </html>
  )
}
