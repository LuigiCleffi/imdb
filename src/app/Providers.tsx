'use client'
import { ThemeProvider } from 'next-themes'
import React from 'react'

interface ProvidersProps {
  children: React.ReactNode
}
export default function Providers({ children }: ProvidersProps): JSX.Element {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <div className='dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors duration-300 min-h-screen select-none'>

        {children}
      </div>
    </ThemeProvider>
  )
}
