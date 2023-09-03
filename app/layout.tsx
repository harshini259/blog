import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head';
import {Providers} from "./providers";
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dock',
  description: "Join us on a journey of discovery!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark bg-background text-foreground'>
        <Head>
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </Head>
        <body className={inter.className + " relative"}>
          <Providers>
            {children}
          </Providers>
        </body>
    </html>
  )
}
