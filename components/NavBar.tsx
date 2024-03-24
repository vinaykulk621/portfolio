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

export function NavBar() {
  const path = usePathname()
  const pathSegments = path.split('/').filter((segment) => segment !== '') // Split path and filter out empty segments

  return (
    <div className="absolute left-10 top-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-2xl">
              ~
            </BreadcrumbLink>
          </BreadcrumbItem>
          {pathSegments.map((segment) => (
            <>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href={`/${segment}`}>{segment}</BreadcrumbLink>
              </BreadcrumbItem>
            </>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
