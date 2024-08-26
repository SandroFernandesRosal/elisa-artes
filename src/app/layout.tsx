import type { Metadata } from 'next'
import { Roboto_Flex as Roboto } from 'next/font/google'
import './globals.css'
import { ThemeProviders } from './theme-provider'
import Header from '@/components/header'
import Footer from '@/components/footer'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Elisa Rosal',
    default: 'Elisa Rosal',
  },
  description: 'Artes Digitais',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={`${roboto.variable}  overflow-x-hidden flex flex-col items-center `}
      >
        <ThemeProviders>
          <Header />
          {children}
          <Footer />
        </ThemeProviders>
      </body>
    </html>
  )
}
