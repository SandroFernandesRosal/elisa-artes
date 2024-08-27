import Link from 'next/link'
import Image from 'next/image'
import { Suspense } from 'react'

export interface Projectprops {
  page: string
  image: string
  title: string
  slug: string
  price: number
  video: string | null
}

export default function Project({
  page,
  image,
  title,
  slug,
  price,
}: Projectprops) {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <div className="h-full my-2 lg:my-4 border-zinc-300 dark:border-zinc-800 dark:border-[1px] shadow-shadowlight  dark:shadow-none hover:border-[1px] border-transparent group max-w-[300px] overflow-hidden">
        {Image && (
          <Image
            className="w-full group-hover:scale-105  transition-transform duration-500"
            src={image}
            alt={title}
            width={300}
            height={300}
            sizes="(max-width: 300px) 50vw, 100vw"
          />
        )}
      </div>

      <div className=" flex  flex-col justify-between h-[140px] items-center">
        <h1 className="font-semibold text-center ">{title}</h1>

        <div className="flex flex-col gap-5">
          <span className="flex  items-center text-black rounded-full bg-primary justify-center font-bold">
            {price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
          <Link href={`/${page}/${slug}`} className="font-bold">
            <button>Ver detalhes</button>
          </Link>
        </div>
      </div>
    </Suspense>
  )
}
