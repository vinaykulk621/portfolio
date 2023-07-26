import Image from 'next/image'

export const metadata = {
  title: 'Vinay | Clicks',
  description: 'Clicks',
}

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-b from-simple-black to-simple-black-2">
        <div className="xs:grid-cols-2 xs:gap-x-6 xs:py-8 grid grid-cols-1 gap-x-4 gap-y-6 px-14 py-5 md:grid-cols-3 lg:grid-cols-4">
          <p className="col-span-2 shrink items-center place-self-center text-center font-spotify text-7xl text-white md:text-9xl lg:col-span-2">
            CLICKS
          </p>
          <div className="col-span-1 row-span-1 grid gap-y-6 ">
            <Image
              alt="table-bottle.jpg"
              className="rounded-lg"
              src={'/clicks/table-bottle.jpg'}
              width={600}
              height={600}
            />
            <Image
              alt="stadium-center-darker-sky.jpg"
              className="rounded-lg"
              src={'/clicks/stadium-center-darker-sky.jpg'}
              width={600}
              height={600}
            />
          </div>
          <div className="col-span-1 row-span-1 grid gap-y-6 ">
            <Image
              alt="hike-clear-sky-1.jpg"
              className="rounded-lg"
              src={'/clicks/hike-clear-sky-1.jpg'}
              width={600}
              height={600}
            />
            <Image
              alt="sea"
              className="rounded-lg"
              src={'/clicks/sea.jpg'}
              width={600}
              height={600}
            />
          </div>
          <Image
            alt="fog.jpg"
            className="rounded-lg"
            src={'/clicks/fog.jpg'}
            width={600}
            height={600}
          />
          <Image
            alt="trees.jpg"
            className="rounded-lg"
            src={'/clicks/trees.jpg'}
            width={600}
            height={600}
          />
          <Image
            alt="nandi.jpg"
            className="rounded-lg"
            src={'/clicks/nandi.jpg'}
            width={600}
            height={600}
          />
          <Image
            alt="road_2.jpg"
            className="rounded-lg"
            src={'/clicks/road_2.jpg'}
            width={600}
            height={600}
          />
          <Image
            alt="jublie-bulding.jpg"
            className="rounded-lg"
            src={'/clicks/jublie-bulding.jpg'}
            width={600}
            height={600}
          />
          <Image
            alt="plane-glider.jpg"
            className="rounded-lg"
            src={'/clicks/plane-glider.jpg'}
            width={600}
            height={600}
          />
          <Image
            alt="sea-beach-closeup.jpg"
            className="rounded-lg"
            src={'/clicks/sea-beach-closeup.jpg'}
            width={600}
            height={600}
          />
          <Image
            alt="forest.jpg"
            className="rounded-lg"
            src={'/clicks/forest.jpg'}
            width={600}
            height={600}
          />
          <Image
            alt="road.jpg"
            className="rounded-lg"
            src={'/clicks/road.jpg'}
            width={600}
            height={600}
          />
          <Image
            alt="stadium-left-side.jpg"
            className="rounded-lg"
            src={'/clicks/stadium-left-side.jpg'}
            width={600}
            height={600}
          />
          <Image
            alt="hike-1.jpg"
            className="rounded-lg"
            src={'/clicks/hike-1.jpg'}
            width={600}
            height={600}
          />
          <Image
            alt="hike-filter-shoes.JPG"
            className="rounded-lg"
            src={'/clicks/hike-filter-shoes.JPG'}
            width={600}
            height={600}
          />
        </div>
      </div>
    </>
  )
}
