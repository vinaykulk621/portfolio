'use client'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { SlashIcon } from '@radix-ui/react-icons'
import { usePathname } from 'next/navigation'
import React from 'react'

export function NavBar() {
  const path = usePathname()
  const pathSegments = path.split('/').filter((segment) => segment !== '') // Split path and filter out empty segments

  return (
    <div className="absolute left-10 top-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem key={-1}>
            <BreadcrumbLink href="/" className="text-2xl">
              ~
            </BreadcrumbLink>
          </BreadcrumbItem>
          {pathSegments.map((segment, i) => (
            <React.Fragment key={i}>
              <BreadcrumbSeparator key={`separator-${i}`}>
                <SlashIcon />
              </BreadcrumbSeparator>
              <BreadcrumbItem key={`item-${i}`}>
                <BreadcrumbLink key={`link-${i}`} href={`/${segment}`}>
                  {segment}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
