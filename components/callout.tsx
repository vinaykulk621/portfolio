import { cn } from '@/lib/utils'

interface CalloutProps {
  children?: React.ReactNode
  className?: string
}

export function Callout({ children, className }: CalloutProps) {
  return (
    <div
      className={cn(
        'my-6 flex items-start rounded-md border border-l-4 p-4 py-2 dark:border-zinc-600 dark:border-l-zinc-400 dark:text-zinc-400',
        className
      )}
    >
      <div>{children}</div>
    </div>
  )
}
