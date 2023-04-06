import Link from 'next/link'

export default function PostPreview(props) {
  return (
    <>
      <Link href={`/blog/${props.slug}`}>
        <h2 className="text-gray-400 hover:underline text-xl">{props.title}</h2>
        <p className="text-xs text-slate-400">{props.date}</p>
      </Link>
    </>
  )
}
