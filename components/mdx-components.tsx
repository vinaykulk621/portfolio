'use client'

import Link from 'next/link'
import '@/styles/mdx.css'
import { useMDXComponent } from 'next-contentlayer/hooks'
import type { MDXComponents } from 'mdx/types'

import { Event } from '@/lib/events'
import { cn } from '@/lib/utils'
import { Callout } from '@/components/callout'
import { CopyButton } from '@/components/copy-button'
import { MdxCard } from './mdx-card'

interface MdxProps {
  code: string
}

const components: MDXComponents = {
  MdxCard,
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        'font-heading mt-2 scroll-m-20 text-4xl font-bold',
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        'font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0',
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        'font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        'font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        'mt-8 scroll-m-20 text-lg font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        'mt-8 scroll-m-20 text-base font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn('font-medium underline underline-offset-4', className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className={cn(
        'my-6 ml-6 list-disc text-black dark:text-zinc-400',
        className
      )}
      {...props}
    />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className={cn(
        'my-6 ml-6 list-decimal text-black dark:text-zinc-400',
        className
      )}
      {...props}
    />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <li className={cn('mt-2', className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className={cn('mt-6 border-l-2 pl-6 italic', className)}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={cn('rounded-md bg-zinc-500', className)}
      alt={alt}
      {...props}
    />
  ),
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-4 md:my-8" {...props} />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn('w-full', className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className={cn('m-0 border-t p-0', className)} {...props} />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),
  Step: ({ className, ...props }: React.ComponentProps<'h3'>) => (
    <h3
      className={cn(
        'font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  Steps: ({ ...props }) => (
    <div
      className="[&>h3]:step steps mb-0 ml-[14px] border-l pl-8 [counter-reset:step]"
      {...props}
    />
  ),
  Ring: ({ children, ...props }) => (
    <span className="m-0 rounded-3xl bg-zinc-800 px-[10px] py-[6px]" {...props}>
      {children}
    </span>
  ),
  pre: ({
    className,
    __rawString__,
    __withMeta__,
    __src__,
    __event__,
    ...props
  }: React.HTMLAttributes<HTMLPreElement> & {
    __rawString__?: string
    __withMeta__?: boolean
    __src__?: string
    __event__?: Event['name']
  }) => {
    return (
      <div>
        <pre
          className={cn(
            'mb-2 max-h-[650px] overflow-y-auto rounded-lg rounded-tl-none rounded-tr-none border-0 border-t-2 border-zinc-600',
            className
          )}
          {...props}
        />
        {__rawString__ && (
          <CopyButton
            value={__rawString__}
            src={__src__}
            event={__event__}
            className={cn('absolute right-2 top-[2px]')}
          />
        )}
      </div>
    )
  },
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        'relative w-fit rounded bg-zinc-300 p-4 px-[0.3rem] py-[0.2rem] font-mono text-sm dark:bg-zinc-900',
        className
      )}
      {...props}
    />
  ),
  Callout,
  Link: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link
      className={cn('font-medium underline underline-offset-4', className)}
      {...props}
    />
  ),
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  )
}
