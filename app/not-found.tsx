import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="mb-4 text-2xl font-bold">页面未找到</h2>
      <p className="mb-4 text-muted-foreground">
        抱歉，您要访问的页面不存在。
      </p>
      <Button asChild variant="outline">
        <Link href="/">
          返回首页
        </Link>
      </Button>
    </div>
  )
} 