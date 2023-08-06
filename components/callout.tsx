import { cn } from '@/lib/utils'

interface CalloutProps {
  children?: React.ReactNode
  className?: string
}

export function Callout({ children, className }: CalloutProps) {
  return (
    <div
      className={cn(
        'my-6 flex items-start rounded-md border border-l-4 border-zinc-600 border-l-zinc-400 p-4 py-2 text-zinc-400',
        className
      )}
    >
      <div>{children}</div>
    </div>
  )
}
