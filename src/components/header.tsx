import Link from 'next/link'
import Image from 'next/image'
import Menu from './menu'
import ChangeTheme from './change-theme'
import ItensMenu from './itens-menu'
import Socials from './socials'
import SearchForm from './search-form'
import logo from '../../public/elisa-logo.png'

export default function Header() {
  return (
    <div
      className={` w-[100vw] z-40 shadow-shadowlight flex flex-col items-center   dark:shadow-none dark:border-b-[1px] dark:border-zinc-800   dark:bg-bgdark bg-bglight fixed '} `}
    >
      <nav className="w-full flex justify-evenly items-center  border-b-[1px] border-zinc-300 dark:border-zinc-800 gap-2 py-1">
        <ItensMenu menu={false} />
        <Socials />
      </nav>
      <div className="flex items-center justify-around gap-2 w-full">
        <Link href={'/'}>
          <Image src={logo} alt="logo" height={80} width={80} />
        </Link>

        <SearchForm />

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
