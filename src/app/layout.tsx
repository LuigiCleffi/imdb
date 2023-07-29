import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IMD Clone',
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
        <link rel="icon" href="favicon.ico" sizes='any' />
      </head>
      <body>{children}</body>
    </html >
  )
}
