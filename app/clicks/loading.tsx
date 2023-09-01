import { Skeleton } from '@/components/ui/skeleton'

export default function page() {
  return (
    <div className="bg-gradient-to-b from-simple-black to-simple-black-2">
      <div className="xs:grid-cols-2 xs:gap-x-6 xs:py-8 grid grid-cols-1 gap-x-4 gap-y-6 px-14 py-5 md:grid-cols-3 lg:grid-cols-4">
        <p className="col-span-2 shrink items-center place-self-center text-center font-spotify text-7xl font-bold text-zinc-200 md:text-9xl lg:col-span-2">
          CLICKS
        </p>
        <div className="col-span-1 row-span-1 grid gap-y-6 ">
          <Skeleton className="h-[200px] w-[250px]" />
          <Skeleton className="h-[200px] w-[250px]" />
        </div>
        <div className="col-span-1 row-span-1 grid gap-y-6 ">
          <Skeleton className="h-[200px] w-[250px]" />
          <Skeleton className="h-[200px] w-[250px]" />
        </div>
        <Skeleton className="h-[200px] w-[250px]" />
        <Skeleton className="h-[200px] w-[250px]" />
        <Skeleton className="h-[200px] w-[250px]" />
        <Skeleton className="h-[200px] w-[250px]" />
        <Skeleton className="h-[200px] w-[250px]" />
        <Skeleton className="h-[200px] w-[250px]" />
        <Skeleton className="h-[200px] w-[250px]" />
        <Skeleton className="h-[200px] w-[250px]" />
        <Skeleton className="h-[200px] w-[250px]" />
        <Skeleton className="h-[200px] w-[250px]" />
        <Skeleton className="h-[200px] w-[250px]" />
        <Skeleton className="h-[200px] w-[250px]" />
      </div>
    </div>
  )
}
