import { Skeleton } from '@/components/ui/skeleton'

export default function page() {
  return (
    <main className="flex h-screen max-h-screen w-screen flex-col items-center justify-center gap-y-10 bg-zinc-950 p-10">
      <Skeleton className="h-12 w-[500px] max-w-[650px] rounded-xl" />
      <Skeleton className="h-40 w-[500px] max-w-[650px] rounded-lg" />
      <Skeleton className="h-80 w-[500px] max-w-[650px] rounded-lg" />
    </main>
  )
}
