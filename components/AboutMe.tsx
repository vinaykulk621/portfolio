export function AboutMe() {
  return (
    <div className="xs:space-y-6 flex flex-col items-center space-y-2 text-justify dark:text-white lg:items-start">
      <p className="xs:text-4xl text-5xl font-bold">About Me</p>
      <p className="xs:text-xl max-w-xl text-lg">
        Hey, This is Vinay Kulkarni and I&apos;m enthusiastic about{' '}
        <span className="bg-clip-text font-extrabold text-transparent dark:bg-gradient-to-r dark:from-purple-400 dark:to-pink-600">
          technology
        </span>
        , especially open source projects. I enjoy tackling problems 🐼💡 and
        constantly expanding my knowledge 🎓. During my free time, I like to
        unwind by watching{' '}
        <span className="font-bold dark:text-green-400">ads</span> and{' '}
        <span className="font-bold dark:text-purple-400">anime</span>.
      </p>
    </div>
  )
}
