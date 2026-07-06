import type { Metadata } from 'next'
import './globals.css'

import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import ThemeMenu from '@/components/Theme/ThemeMenu'
import { Fira_Code } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const title =
  'Adeyemi Ayobami Samson | Full Stack Developer | Laravel, Next.js & Software Engineer'

const description =
  'Professional Full Stack Developer specializing in Laravel, Next.js, TypeScript, PHP, MySQL, and VB.NET. I build scalable web applications, enterprise software, and modern digital solutions that solve real-world business challenges.'

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  'https://aytech-portfolio.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title:
    'Adeyemi Ayobami Samson | Full Stack Developer | Laravel, Next.js & Software Engineer',

  description:
    'Professional Full Stack Developer specializing in Laravel, Next.js, TypeScript, PHP, MySQL, and VB.NET. I build scalable web applications, enterprise software, and modern digital solutions that solve real-world business challenges.',

  category: 'technology',

  alternates: {
    canonical: SITE_URL,
  },

  keywords: [
    'Adeyemi Ayobami Samson',
    'Full Stack Developer',
    'Laravel Developer',
    'Next.js Developer',
    'PHP Developer',
    'TypeScript Developer',
    'MySQL Developer',
    'VB.NET Developer',
    'Software Engineer',
    'Web Developer Nigeria',
    'Portfolio',
    'Enterprise Software Development',
  ],

  authors: [
    {
      name: 'Adeyemi Ayobami Samson',
    },
  ],

  creator: 'Adeyemi Ayobami Samson',

  openGraph: {
    title:
      'Adeyemi Ayobami Samson | Full Stack Developer | Laravel, Next.js & Software Engineer',

    description:
      'Professional Full Stack Developer specializing in Laravel, Next.js, TypeScript, PHP, MySQL, and VB.NET.',

    url: SITE_URL,
    siteName: 'AyTECH Portfolio',
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'Adeyemi Ayobami Samson | Full Stack Developer | Laravel, Next.js & Software Engineer',

    description:
      'Professional Full Stack Developer specializing in Laravel, Next.js, TypeScript, PHP, MySQL, and VB.NET.',

    creator: '@AyTECH',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={firaCode.className}>
        <header>
          <Navbar />
        </header>

        {children}

        <ThemeMenu />
        <Footer />
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </body>
    </html>
  )
}