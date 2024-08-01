import Link from 'next/link'
import Socials from './socials'

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center w-full">
      <div className="shadow-shadowlight dark:shadow-none  py-2 min-h-24 w-full flex flex-col justify-around items-center dark:border-t-[1px] dark:border-zinc-800">
        <Link
          href="/"
          className="md:text-2xl text-xl font-extrabold  hover:text-primary mb-2"
        >
          <p className="text-3xl font-medium flex items-center">Elisa Artes</p>
        </Link>

        <Socials />
      </div>
    </footer>
  )
}
