import formatDate from '@/lib/formatDate'
import Link from 'next/link'

type props = {
  title: string
  blog_count: number
  date: string
  publishedAt: Date
  subtitle: string
  slug: string
}

export default function PostPreview(props: props) {
  return (
    <Link href={`/blog/${props.slug}`} className="group">
      <h2 className="text-xl text-gray-300 group-hover:underline">
        {props.title}
      </h2>
      <p className="text-xs text-slate-400">{formatDate(props.publishedAt)}</p>
    </Link>
  )
}
