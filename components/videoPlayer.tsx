export default function VideoPlayer({ src }: { src: string }) {
  return (
    <video autoPlay muted loop>
      <source
        src={`/api/video?file=${encodeURIComponent(src)}`}
        // src={src}
        type="video/mp4"
      />
    </video>
  )
}
