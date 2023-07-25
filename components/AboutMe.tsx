import React from "react";

export function AboutMe({ }) {
  return (
    <div className="xs:space-y-6 flex flex-col items-center space-y-2 text-justify lg:items-start" >
      <p className="xs:text-5xl text-4xl text-white ">About Me</p>
      <p className="xs:text-xl max-w-xl text-lg text-white">
        Hey, This is Vinay Kulkarni and I&apos;m enthusiastic about{' '}
        <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text font-extrabold text-transparent">
          technology
        </span>
        , especially open source projects. I enjoy tackling problems 🐼💡 and
        constantly expanding my knowledge 🎓. During my free time, I like to
        unwind by watching <span className="font-bold text-green-400">ads</span>{' '}
        and <span className="font-bold text-purple-400">anime</span>.
      </p>
    </div>
  )
}
