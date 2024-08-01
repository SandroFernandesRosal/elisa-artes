import Link from 'next/link'

import Menu from './menu'
import ChangeTheme from './change-theme'
import ItensMenu from './itens-menu'
import Socials from './socials'

export default function Header() {
  return (
    <div
      className={` w-[100vw] z-40 shadow-shadowlight flex flex-col items-center   dark:shadow-none dark:border-b-[1px] dark:border-zinc-800   dark:bg-bgdark bg-bglight fixed '} `}
    >
      <nav className="w-full flex justify-evenly bg-primary gap-2 py-1">
        <ItensMenu menu={false} />
        <Socials />
      </nav>
      <div className="flex items-center justify-around gap-2 w-full ">
        <div className="flex items-center">
          <Link
            href="/"
            className="md:text-2xl text-xl font-extrabold hover:text-primary"
          >
            <p className="text-3xl font-medium flex items-center">
              Elisa Artes
            </p>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex">
            <ChangeTheme />
          </div>

          <Menu />
        </div>
      </div>
    </div>
  )
}
