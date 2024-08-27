'use client'
import Link from 'next/link'
import { useSize } from '@/store/useStore'
import Image from 'next/image'

export interface Projectprops {
  page: string
  image: string
  title: string
  slug: string
  price: number
  video: string | null
}

export default function ProjectLine({
  page,
  image,
  title,
  slug,
  price,
}: Projectprops) {
  const { size } = useSize()
  return (
    <div
      className={`w-[47%] h-full max-w-[200px]   flex  flex-col    ${size === 'large' && 'w-[98%] max-w-[400px]  '} ${size === 'small' && '   min-w-[100px] w-[25%] md:max-w-[150px] '} ${size === 'normal' && 'w-[45%]  '} `}
    >
      <div className="group h-full border-zinc-300 dark:border-zinc-800 dark:border-[1px] shadow-shadowlight  dark:shadow-none hover:border-[1px] border-transparent overflow-hidden">
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
      <div className=" flex  flex-col justify-between items-center h-[120px]  py-1">
        <h1 className="font-semibold text-center ">{title}</h1>

        <div className="flex flex-col gap-5">
          <span className="flex  items-center text-black  rounded-full bg-primary justify-center font-bold">
            {price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
          <Link href={`/${page}/${slug}`} className=" font-bold">
            <button>Ver detalhes</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
