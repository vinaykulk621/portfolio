import { Skeleton } from '@/components/ui/skeleton'

export default function page() {
  return (
    <main className="flex h-screen max-h-screen flex-col items-center justify-center gap-y-10 overflow-clip p-10 dark:bg-zinc-950 md:items-start">
      <div className="flex flex-col space-y-3">
        <Skeleton className="w-max-screen md:w-max-[500px] h-12 w-[300px] rounded-lg md:w-[500px]" />
        <Skeleton className="w-max-screen md:w-max-[200px] h-8 w-40 rounded-lg" />
      </div>
      <div className="flex flex-col space-y-3">
        <Skeleton className="w-max-screen md:w-max-[500px] h-12 w-[300px] rounded-lg md:w-[500px]" />
        <Skeleton className="w-max-screen md:w-max-[200px] h-8 w-40 rounded-lg" />
      </div>
      <div className="flex flex-col space-y-3">
        <Skeleton className="w-max-screen md:w-max-[500px] h-12 w-[300px] rounded-lg md:w-[500px]" />
        <Skeleton className="w-max-screen md:w-max-[200px] h-8 w-40 rounded-lg" />
      </div>
      <div className="flex flex-col space-y-3">
        <Skeleton className="w-max-screen md:w-max-[500px] h-12 w-[300px] rounded-lg md:w-[500px]" />
        <Skeleton className="w-max-screen md:w-max-[200px] h-8 w-40 rounded-lg" />
      </div>
      <div className="flex flex-col space-y-3">
        <Skeleton className="w-max-screen md:w-max-[500px] h-12 w-[300px] rounded-lg md:w-[500px]" />
        <Skeleton className="w-max-screen md:w-max-[200px] h-8 w-40 rounded-lg" />
      </div>
    </main>
  )
}
