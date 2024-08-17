import Link from 'next/link'

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
  video,
}: Projectprops) {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <div className="h-full my-2 lg:my-4 border-zinc-300 dark:border-zinc-800 dark:border-[1px] shadow-shadowlight  dark:shadow-none hover:border-[1px] border-transparent group">
        {video && (
          <video
            width="500"
            height="500"
            controls
            poster={image}
            preload="false"
            className="group-hover:scale-105  transition-transform duration-500"
          >
            <source src={video} type="video/mp4" />
            <track
              src={video}
              kind="subtitles"
              srcLang="pt-br"
              label="Portuguese"
            />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      <div className=" flex  flex-col justify-between h-[120px] items-center  py-1">
        <h1 className="font-semibold text-center ">{title}</h1>

        <span className="flex  items-center  rounded-full bg-primary px-4 font-semibold">
          {price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </span>
        <Link href={`/${page}/${slug}`} className="text-primary font-bold mt-5">
          <button>Saiba mais</button>
        </Link>
      </div>
    </Suspense>
  )
}
