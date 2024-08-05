import { FaWhatsapp, FaInstagram, FaFacebookSquare } from 'react-icons/fa'
import Link from 'next/link'

export default function Socials() {
  return (
    <div className="flex gap-3 flex-wrap justify-center">
      <Link
        href={'https://api.whatsapp.com/send?phone=5521969501614'}
        target="blank"
      >
        <FaWhatsapp className="text-xl hover:text-primary" />
      </Link>

      <Link href={'https://github.com/SandroFernandesRosal'} target="blank">
        <FaInstagram className="text-xl hover:text-primary" />
      </Link>

      <Link
        href={'https://www.linkedin.com/in/sandrofernandesrosal'}
        target="blank"
      >
        <FaFacebookSquare className="text-xl hover:text-primary" />
      </Link>
    </div>
  )
}
