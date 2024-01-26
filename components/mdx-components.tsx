'use client'

import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import { cn } from '@/lib/utils'
import { Callout } from '@/components/callout'
import { CopyButton } from '@/components/copy-button'
import { MdxCard } from './mdx-card'
import { ImageGallery } from '@/components/ImageGallery'
import Checker from '@/components/Checker'
import React from 'react'

function Code({ children, ...props }: { children: string }) {
  let codeHTML = highlight(children)
  return (
    <code
      dangerouslySetInnerHTML={{ __html: codeHTML }}
      {...props}
      className="relative w-fit rounded bg-zinc-300 p-4 px-[0.3rem] py-[0.2rem] font-mono text-sm dark:bg-zinc-900"
    />
  )
}

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

function createHeading(level: Number, className: string) {
  const HeadingComponent = ({ children }: { children: string }) => {
    let slug = slugify(children)
    return React.createElement(
      `h${level}`,
      { id: slug, className: className },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children
    )
  }

  // Assigning display name to the functional component
  HeadingComponent.displayName = `Heading${level}`

  return HeadingComponent
}

let components = {
  code: Code,
  Callout,
  MdxCard,
  Checker,
  ImageGallery,
  h1: createHeading(1, 'font-heading mt-2 scroll-m-20 text-4xl font-bold'),
  h2: createHeading(
    2,
    'font-heading mt-12 scroll-m-20 border-b-2 border-b-black pb-2 text-2xl font-semibold tracking-tight first:mt-0 dark:border-b-zinc-700'
  ),
  h3: createHeading(
    3,
    'font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight'
  ),
  h4: createHeading(
    4,
    'font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight'
  ),
  h5: createHeading(5, 'mt-8 scroll-m-20 text-lg font-semibold tracking-tight'),
  h6: createHeading(
    5,
    'mt-8 scroll-m-20 text-base font-semibold tracking-tight'
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
      className={cn('rounded-md bg-zinc-500/70 dark:bg-inherit', className)}
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
  Ring: ({ children, ...props }: { children: string }) => (
    <span className="m-0 rounded-3xl bg-zinc-800 px-[10px] py-[6px]" {...props}>
      {children}
    </span>
  ),
  Date: ({ children, ...props }: { children: string }) => (
    <div className="flex flex-row items-center justify-center">
      <div className="rounded-md bg-zinc-300 px-2 py-1 text-sm tracking-tighter dark:bg-zinc-800">
        <span
          className="m-0 rounded-3xl bg-zinc-800 px-[10px] py-[6px]"
          {...props}
        >
          {children}
        </span>
      </div>
      <div className="mx-2 h-[0.2em] flex-1 bg-zinc-800 dark:bg-zinc-800" />
    </div>
  ),
  pre: ({
    className,
    __rawString__,
    ...props
  }: React.HTMLAttributes<HTMLPreElement> & {
    __rawString__?: string
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
            className={cn('absolute right-2 top-[2px]')}
          />
        )}
      </div>
    )
  },
  Link: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link
      className={cn('font-medium underline underline-offset-4', className)}
      {...props}
    />
  ),
}

export function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
