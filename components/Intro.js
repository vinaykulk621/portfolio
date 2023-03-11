import Image from "next/image"
import Link from "next/link"

export function Intro({}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-3">
        <p className="font-spotify text-6xl text-white">
          Vinay&apos;s <span className="text-gray-400 hover:text-white">web</span>
        </p>
        <div className="h-14 w-1/2 border-t border-gray-400"></div>
        <div className="flex flex-row items-center gap-10">
          <Image
            className="overflow-hidden rounded-full"
            src="/me.svg"
            alt="Picture of the Creator"
            width={250}
            height={250}
          />
          <div className="flex flex-col space-y-1 font-spotify text-2xl text-white">
            <h1>
              Hey, This is <span className="text-link">Vinay Kulkarni</span>
            </h1>
            <div className="flex flex-row space-x-5">
              <p>
                Check out my{" "}
                <Link href={"/projects"}>
                  <span className="text-link">Projects</span>
                </Link>{" "}
                and{" "}
                <Link href={"/blog"}>
                  <span className="text-link">Blog</span>
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-row items-center pt-2">
              <h1>Reach me at </h1>
              <div className="m-3 flex space-x-6">
                <div className="has-tooltip">
                  <span className="tooltip -mt-8 rounded bg-black p-1 text-xl text-white">
                    kulkarnivinay621@gmail.com{" "}
                  </span>
                  <a
                    className="text-sm text-gray-500 transition hover:text-gray-600"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:kulkarnivinay621@gmail.com"
                  >
                    <span className="sr-only">mail</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      className="h-6 w-6 fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400"
                    >
                      <path d="M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z"></path>
                      <path d="m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z"></path>
                    </svg>
                  </a>
                </div>

                <a
                  className="text-sm text-gray-500 transition hover:text-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/vinaykulk621"
                >
                  <span className="sr-only">github</span>
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                  </svg>
                </a>

                <a
                  className="text-sm text-gray-500 transition hover:text-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/vinay-kulkarni-725184245/"
                >
                  <span className="sr-only">linkedin</span>
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </a>
                <a
                  className="text-sm text-gray-500 transition hover:text-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/kuylycljhyvvy"
                >
                  <span className="sr-only">twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400"
                  >
                    <path d="M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z"></path>
                  </svg>
                </a>
              </div>
            </div>
            {/* <h1 className="text-link">stalk_me()</h1> */}
          </div>
        </div>
      </div>
    </>
  )
}
