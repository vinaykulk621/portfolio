import formatDate from '@/lib/formatDate'
import Link from 'next/link'

type props = {
  title: string
  publishedAt: string
  slug: string
}

export default function PostPreview(props: props) {
  return (
    <Link href={`/blog${props.slug}`} className="group">
      <h2 className="text-lg group-hover:underline dark:text-gray-300 md:text-xl">
        {props.title}
      </h2>
      <p className="text-xs dark:text-slate-400">
        {formatDate(props.publishedAt)}
      </p>
    </Link>
  )
}
