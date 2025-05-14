'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  React.useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="mb-4 text-2xl font-bold">出现了一些问题</h2>
      <Button
        onClick={() => reset()}
        variant="outline"
      >
        重试
      </Button>
    </div>
  )
} 