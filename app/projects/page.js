import { GithubSVG } from "../../components/svgs/githubSVG"

export default function Home(params) {
  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-black font-spotify">
        <p className="text-9xl text-white">Coming soon</p>{" "}
        <div className="flow-root items-center justify-center space-x-5 p-5">
          <p className="float-left text-xl text-white">
            Till then check out my github
          </p>
          <div
            className="float-right text-xl text-gray-500 transition
          hover:text-gray-600"
          >
            <GithubSVG />
          </div>
        </div>
      </div>
    </>
  )
}
