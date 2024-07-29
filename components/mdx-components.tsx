'use client'
/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import '@/styles/mdx.css'
import { useMDXComponent } from 'next-contentlayer/hooks'
import type { MDXComponents } from 'mdx/types'

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import { Event } from '@/lib/events'
import { cn } from '@/lib/utils'
import { CopyButton } from '@/components/copy-button'
import { Checkbox } from '@/components/ui/checkbox'

interface MdxProps {
  code: string
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  href?: string
  disabled?: boolean
}

interface CalloutProps {
  children?: React.ReactNode
  className?: string
}

export function ImageGallery({
  img_1,
  img_2,
  img_3,
  video_1,
  video_2,
  video_3,
}: {
  img_1: string
  img_2: string
  img_3: string
  video_1?: string
  video_2?: string
  video_3?: string
}) {
  return (
    <div className="flex items-center justify-center">
      <ResizablePanelGroup
        direction="horizontal"
        className="max-w-xl rounded-lg border"
      >
        <ResizablePanel defaultSize={55}>
          <div className="flex h-[300px] items-center justify-center p-2">
            {(video_1 && (
              <video autoPlay muted loop>
                <source src={`/2023/${video_1}.mp4`} type="video/mp4" />
              </video>
            )) ||
              (img_1 && (
                <img
                  loading="lazy"
                  src={`/2023/${img_1}.jpg`}
                  alt={img_1.split('/')[1].replace('.jpg', '')}
                  className="flex-1"
                />
              ))}
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={45}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-2">
                {(video_2 && (
                  <video autoPlay muted loop>
                    <source src={`/2023/${video_2}.mp4`} type="video/mp4" />
                  </video>
                )) ||
                  (img_2 && (
                    <img
                      loading="lazy"
                      src={`/2023/${img_2}.jpg`}
                      alt={img_2.split('/')[1].replace('.jpg', '')}
                      className="flex-1"
                    />
                  ))}
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-2">
                {(video_3 && (
                  <video autoPlay muted loop>
                    <source src={`/2023/${video_3}.mp4`} type="video/mp4" />
                  </video>
                )) ||
                  (img_3 && (
                    <img
                      loading="lazy"
                      src={`/2023/${img_3}.jpg`}
                      alt={img_3.split('/')[1].replace('.jpg', '')}
                      className="flex-1"
                    />
                  ))}
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

function MdxCard({ href, className, children, disabled, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'group relative rounded-lg border p-6 text-zinc-800 shadow-md transition-shadow hover:shadow-lg dark:text-zinc-400',
        disabled && 'cursor-not-allowed opacity-60',
        className
      )}
      {...props}
    >
      <div className="flex flex-col justify-between space-y-4">
        <div className="space-y-2 [&>h3]:!mt-0 [&>h4]:!mt-0 [&>p]:text-muted-foreground">
          {children}
        </div>
      </div>
      {href && (
        <Link href={disabled ? '#' : href} className="absolute inset-0">
          <span className="sr-only">View</span>
        </Link>
      )}
    </div>
  )
}

function Checker({
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

function Date({ children, ...props }: { children: string }) {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="rounded-md bg-zinc-300 px-2 py-1 text-sm tracking-tighter dark:bg-zinc-800">
        <span
          className="m-0 rounded-3xl bg-zinc-300 px-[10px] py-[6px] dark:bg-zinc-800"
          {...props}
        >
          {children}
        </span>
      </div>
      <div className="mx-2 h-[0.2em] flex-1 bg-zinc-800 dark:bg-zinc-800" />
    </div>
  )
}

function Callout({ children, className }: CalloutProps) {
  return (
    <div
      className={cn(
        'my-6 flex items-start rounded-md border border-l-4 border-zinc-700 p-4 py-2 dark:border-zinc-600 dark:border-l-zinc-400 dark:text-zinc-400',
        className
      )}
    >
      <div>{children}</div>
    </div>
  )
}

const components: MDXComponents = {
  MdxCard,
  Checker,
  Date,
  ImageGallery,
  Callout,
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
        'font-heading mt-12 scroll-m-20 border-b-2 border-b-black pb-2 text-2xl font-semibold tracking-tight first:mt-0 dark:border-b-zinc-700',
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
    <li className={cn('mt-2 dark:text-gray-200', className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className={cn(
        'mt-6 border-l-8 border-l-zinc-600 bg-zinc-300 px-6 italic dark:bg-zinc-900',
        className
      )}
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
      className={cn('rounded-md bg-zinc-800 dark:bg-inherit', className)}
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
        'border border-black px-4 py-2 text-left font-bold dark:border-gray-500 [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
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
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        'border border-black px-4 py-2 text-left dark:border-gray-500 [&[align=center]]:text-center [&[align=right]]:text-right',
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
    <span
      className="m-0 rounded-3xl bg-zinc-400/50 px-[10px] py-[6px] dark:bg-zinc-800"
      {...props}
    >
      {children}
    </span>
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        'relative w-fit rounded bg-zinc-900 p-4 px-[0.3rem] py-[0.2rem] font-mono text-sm text-white dark:bg-zinc-800',
        className
      )}
      {...props}
    />
  ),
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
