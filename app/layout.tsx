import type { Metadata } from 'next'

import RootLayout from '@/core/layout/RootLayout'

export const metadata: Metadata = {
  metadataBase: new URL('https://illa-ahmad.vercel.app'),
  title: 'Laila & Ahmad',
  description: 'The Wedding of Laila & Ahmad',
  authors: { name: 'Laila & Ahmad' },
  keywords: [
    'laila',
    'ahmad',
    'laila & ahmad',
    'wedding',
    'the wedding',
    'the wedding of laila & ahmad',
  ],
  icons: {
    icon: '/images/gallery-25.jpg',
  },
  openGraph: {
    title: 'Laila & Ahmad',
    description: 'The Wedding of Laila & Ahmad',
    url: 'https://illa-ahmad.vercel.app',
    images: [
      {
        url: '/images/gallery-25.jpg',
        width: 1200,
        height: 630,
        alt: 'laila & ahmad',
      },
    ],
  },
}

export default RootLayout
