import Image from 'next/image'


export function Intro({ }) {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <p className='text-6xl text-white font-spotify'>Vinay's web</p>
        <div className="border-t border-x-cyan-50 w-1/2 h-10"></div>
        <div className="flex flex-row items-center gap-10">
          <Image
            className='rounded-full overflow-hidden'
            src="/me.svg"
            alt="Picture of the author"
            width={250}
            height={250}
          />
          <div className="flex flex-col font-spotify">
            <h1 className='text-white px-4 sm:px-8 py-2 bg-sky-700 sm:py-3 hover:bg-sky-800'>Hey, my name is Vinay Kulkarni</h1>
            <h1 className='text-2xl text-white'>I'm currently studying CSE at BMSCE</h1>
            <h1 className='text-2xl text-white'>get in touch
              <a href="mailto:kulkarnivinay621@gmail.com">
                kulkarnivinay621@gmail.com
              </a>
            </h1>
            <h1 className='text-2xl text-white'>stalk me</h1>
            <div className="flex flex-row space-x-5">
              <h1 className='text-2xl text-white'>Projects</h1>
              <h1 className='text-2xl text-white'>Blog</h1>
            </div>
          </div>
        </div>
        <Image
          className='rounded-full overflow-hidden'
          src="/walking_man.svg"
          alt="Picture of the author"
          width={250}
          height={250}
        />
      </div>
    </>
  );
}
