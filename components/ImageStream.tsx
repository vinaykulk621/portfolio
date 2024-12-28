export default function ImageStream({ src }: { src: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/api/photo?file=${encodeURIComponent(src)}`}
      // src={`/${year}/${img_1}.jpg`}
      alt={src.split('/')[1].replace('.jpg', '')}
      className="flex-1"
    />
  )
}
