import { FaWhatsapp, FaInstagram, FaFacebookSquare } from 'react-icons/fa'
import Link from 'next/link'

export default function Socials() {
  return (
    <div className="flex gap-3 flex-wrap justify-center">
      <Link
        aria-label="Botão para acessar whatasapp"
        href="https://api.whatsapp.com/send?phone=5521969501614"
        target="blank"
      >
        <FaWhatsapp className="text-xl hover:text-primary" />
      </Link>

      <Link
        aria-label="Botão para acessar instagram"
        href="https://github.com/SandroFernandesRosal"
        target="blank"
      >
        <FaInstagram className="text-xl hover:text-primary" />
      </Link>

      <Link
        aria-label="Botão para acessar facebook"
        href="https://www.linkedin.com/in/sandrofernandesrosal"
        target="blank"
      >
        <FaFacebookSquare className="text-xl hover:text-primary" />
      </Link>
    </div>
  )
}
