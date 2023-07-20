import formatDate from '@/lib/formatDate'
import Link from 'next/link'

export default function PostPreview(props) {
  return (
    <Link href={`/blog/${props.slug}`} className="group">
      <h2 className="text-xl text-gray-300 group-hover:underline">
        {props.title}
      </h2>
      <p className="text-xs text-slate-400">{formatDate(props.publishedAt)}</p>
    </Link>
  )
}
