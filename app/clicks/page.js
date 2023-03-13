import Image from "next/image"

export default function Home(params) {
  return (
    <div className="h-full w-full bg-gradient-to-b from-black to-gray-900">
      <div className="m-auto grid max-w-6xl grid-cols-2 gap-4 space-x-3 space-y-3 p-4 xs:grid-cols-4">
        <p className="center col-span-2 align-top font-spotify text-9xl text-white">
          CLICKS
        </p>
        <div className="grid">
          <Image
            src={"/clicks/hike-clear-sky-1.jpg"}
            width={600}
            height={600}
          />
          <Image src={"/clicks/sea.jpg"} width={600} height={600} />
        </div>
        <Image src={"/clicks/hike-filter-shoes.JPG"} width={600} height={600} />
        <Image src={"/clicks/jublie-bulding.jpg"} width={600} height={600} />
        <Image src={"/clicks/plane-glider.jpg"} width={600} height={600} />
        <Image
          src={"/clicks/sea-beach-closeup.jpg"}
          width="6000"
          height="3600"
        />
        <Image src={"/clicks/forest.jpg"} width={600} height={600} />
        <Image src={"/clicks/stadium-left-side.jpg"} width={600} height={600} />
        <Image src={"/clicks/hike-1.jpg"} width={600} height={600} />
        <Image src={"/clicks/fog.jpg"} width={600} height={600} />
        <div className="grid gap-2">
          <Image src={"/clicks/table-bottle.jpg"} width={600} height={600} />
          <Image
            src={"/clicks/stadium-center-darker-sky.jpg"}
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  )
}
