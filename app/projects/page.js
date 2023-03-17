import { GithubSVG } from "../../components/svgs/githubSVG"

export default function Home(params) {
  return (
    <>
      <p className="p-2 text-9xl text-white">Coming soon</p>
      <div className="flex flex-row items-center justify-center space-x-3 p-5">
        <p className="text-xl text-white">Till then check out my github</p>
        <GithubSVG />
      </div>
    </>
  )
}
