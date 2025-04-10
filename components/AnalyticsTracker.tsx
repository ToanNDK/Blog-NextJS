'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'


declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default function AnalyticsTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : '')

    if (typeof window.gtag === 'function') {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '', {
        page_path: url,
      })
    }
  }, [pathname, searchParams])

  return null
}
