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
    <Dialog modal>
      <DialogTrigger suppressHydrationWarning>
        <Image
          alt={src.split('.')[0]}
          className="rounded-lg"
          src={`/clicks/${src}`}
          width={600}
          height={600}
        />
      </DialogTrigger>
      <DialogContent className="rounded-lg">
        <Image
          alt={src.split('.')[0]}
          className="rounded-t-lg"
          src={`/clicks/${src}`}
          width={600}
          height={600}
        />
        <p className="p-2 text-center font-spotify">{desc}</p>
      </DialogContent>
    </Dialog>
  )
}
