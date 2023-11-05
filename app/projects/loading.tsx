import { Skeleton } from '@/components/ui/skeleton'

export default function page() {
  return (
    <main className="h-screen dark:bg-zinc-950">
      <div className="grid grid-cols-1 justify-items-center gap-5 p-5 dark:text-white md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <Skeleton className="h-[250px] w-[250px]" />
        <Skeleton className="h-[250px] w-[250px]" />
        <Skeleton className="h-[250px] w-[250px]" />
        <Skeleton className="h-[250px] w-[250px]" />
        <Skeleton className="h-[250px] w-[250px]" />
        <Skeleton className="h-[250px] w-[250px]" />
        <Skeleton className="h-[250px] w-[250px]" />
        <Skeleton className="h-[250px] w-[250px]" />
      </div>
    </main>
  )
}
