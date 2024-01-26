import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import Image from 'next/image'

export default function PainImage({
  src,
  desc,
}: {
  src: string
  desc: string
}) {
  return (
    <Dialog>
      <DialogTrigger suppressHydrationWarning>
        <Image
          alt={src.split('.')[0]}
          className="rounded-lg"
          src={`/clicks/${src}`}
          width={600}
          height={600}
        />
      </DialogTrigger>
      <DialogContent className="mb-5 rounded-lg">
        <Image
          alt={src.split('.')[0]}
          className="rounded-lg"
          src={`/clicks/${src}`}
          width={600}
          height={600}
        />
        <p className="px-2 py-1 text-center font-spotify">{desc}</p>
      </DialogContent>
    </Dialog>
  )
}
