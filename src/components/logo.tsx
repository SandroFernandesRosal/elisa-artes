import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/elisa-logo.png'

export default function Logo() {
  return (
    <Link href={'/'}>
      <Image src={logo} alt="logo" height={80} width={80} />
    </Link>
  )
}
