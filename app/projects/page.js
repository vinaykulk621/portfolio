import { ProjectPallet } from '../../components/Projects/ProjectPallet'

export const metadata = {
  title: 'Projects',
  description: 'Portofolio website',
}

export default function Home() {
  return (
    <>
      <main className="bg-black font-spotify">
        <div className="flex flex-col space-y-9 md:h-fit">
          <div className="grid grid-cols-1 justify-items-center space-y-5 text-white xs:space-y-5 md:grid-cols-2 md:gap-5 md:space-y-0 lg:m-10 lg:grid-cols-4 lg:gap-8">
            <ProjectPallet
              github_repo_name="vinaykulk621/my_spam_bot"
              projectName="Spam Bot"
              projectDescription="A Python Bot to spam messages across any social media."
              Preview={'spamBot.png'}
              alt="Spammer Project at https://github.com/vinaykulk621/my_spam_bot"
            />
            <ProjectPallet
              DemoUrl={'https://cuboido.vercel.app/'}
              github_repo_name="vinaykulk621/Cuboido"
              projectName="Cuboido"
              projectDescription="3D interactive CUBE Built Using Three.js, Next.js and Tailwind CSS."
              Preview={'cuboido.png'}
              alt="Cuboido Project at https://github.com/vinaykulk621/cuboido"
            />
            <ProjectPallet
              DemoUrl={'https://globes.vercel.app/'}
              github_repo_name="vinaykulk621/globes"
              projectName="Globes"
              projectDescription="3D Globes Made Using Three.js, Next.js and Tailwind CSS."
              Preview={'globes.png'}
              alt="Globes Project at https://github.com/vinaykulk621/globes"
            />
            <ProjectPallet
              DemoUrl={'https://vinaykulk621.github.io/typewriter/'}
              github_repo_name="vinaykulk621/typewriter"
              projectName="Typewriter"
              projectDescription="A JS application designed for typing practice on a pool of 3000 words."
              Preview={'typewriter.png'}
              alt="Typewriter Project at https://github.com/vinaykulk621/typewriter"
            />
            <ProjectPallet
              DemoUrl={'https://github.com/vinaykulk621/Spotify-landingPage'}
              github_repo_name="vinaykulk621/Spotify-landingPag"
              projectName="Spotify"
              projectDescription="Spotify Landing Page Clone With Neat and Responsive UI."
              Preview={'spotify.png'}
              alt="Spotify Project at https://github.com/vinaykulk621/Spotify-landingPage"
            />
            <ProjectPallet
              DemoUrl={'https://vinaykulk621.github.io/netflix-profiles/'}
              github_repo_name="vinaykulk621/netflix-profiles"
              projectName="Netflix Profiles"
              projectDescription="Netflix profile picker Landing Page Clone with neat UI."
              Preview={'netflix.png'}
              alt="Netflix Project at https://github.com/vinaykulk621/netflix-profiles"
            />
            <ProjectPallet
              DemoUrl={'https://vinaykulk621.github.io/Crypto_Cell/'}
              github_repo_name="vinaykulk621/Crypto_Cell"
              projectName="Crypto Store"
              projectDescription="A Crypto Market Landing Page With Neat UI."
              Preview={'crypto.png'}
              alt="Cryptopunk Project at https://github.com/vinaykulk621/Crypto_Cell"
            />
            <ProjectPallet
              DemoUrl={'https://vinaykulk621.github.io/DEVIL_FRUITS/'}
              github_repo_name="vinaykulk621/DEVIL_FRUITS"
              projectName="Devil Fruits"
              projectDescription="A Webpage containing details of some Devil Fruits and its users From One Piece Universe."
              Preview={'devil.png'}
              alt="Devil Fruit Project at https://github.com/vinaykulk621/DEVIL_FRUITS"
            />
          </div>
        </div>
      </main>
    </>
  )
}
