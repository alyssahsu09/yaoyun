import type { Metadata, Viewport } from 'next'
import { Inter, Noto_Serif_TC } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const notoSerifTC = Noto_Serif_TC({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-noto-serif-tc',
})

export const viewport: Viewport = {
  themeColor: '#FAF9F6',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: '許耀云 Alyssa | 永續策略顧問 ESG Consultant',
  description: '剛柔並濟耀新局，永續賦能云水齊 -- 5年以上永續顧問經驗，DJSI 全球前10名輔導實績，碳盤查 / 碳足跡 / 企業資源整合',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
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
    <html lang="zh-Hant">
      <body className={`${inter.variable} ${notoSerifTC.variable} font-sans antialiased`}>
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: 'rgba(52, 110, 122, 0.95)',
              color: '#FFFFFF',
              border: '1.5px solid rgba(255,255,255,0.2)',
              boxShadow: '0 8px 32px rgba(52,110,122,0.25)',
              borderRadius: '1rem',
            },
          }}
        />
        <Analytics />
      </body>
    </html>
  )
}
