import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import Image from 'next/image'

export default function PainImage({ src }: { src: string }) {
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
      <DialogContent className="rounded-lg">
        <Image
          alt={src.split('.')[0]}
          className="rounded-lg"
          src={`/clicks/${src}`}
          width={600}
          height={600}
        />
      </DialogContent>
    </Dialog>
  )
}
