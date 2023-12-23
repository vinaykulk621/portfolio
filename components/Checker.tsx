'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'

export default function Checker({
  content,
  disabled,
  checked,
  classname,
}: {
  content: string
  disabled: boolean
  checked: boolean
  classname: React.HTMLAttributes<HTMLAnchorElement>
}) {
  return (
    <div className="my-4 flex items-center space-x-2">
      <Checkbox
        id={content}
        disabled={disabled ?? false}
        checked={checked ?? false}
      />
      <label
        htmlFor={content}
        className={cn(
          'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
          classname
        )}
      >
        {content}
      </label>
    </div>
  )
}
