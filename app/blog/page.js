// import Link from 'next/link'
// import getPostMetadata from '../components/getPostMetadata'

export default function Home(params) {
  // const postMetadata = getPostMetadata()
  // const postPreviews = postMetadata.map((post) => {
  //   return (
  //     <>
  //       <div
  //         className="rounded-md border border-slate-300 bg-white p-4
  //   shadow-sm"
  //       >
  //         <p className="text-sm text-slate-400">{props.date}</p>

  //         <Link href={`/posts/${props.slug}`}>
  //           <h2 className=" mb-4 text-violet-600 hover:underline">
  //             {props.title}
  //           </h2>
  //         </Link>
  //         <p className="text-slate-700">{props.subtitle}</p>
  //       </div>
  //     </>
  //   )
  // })

  return (
    <>
      {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {postPreviews}
      </div> */}
      <p className="flex h-screen w-screen items-center justify-center bg-black font-spotify text-xl text-white xs:text-4xl md:text-6xl lg:text-9xl">
        Hardly Working On it
      </p>
    </>
  )
}
