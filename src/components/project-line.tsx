'use client'
import Link from 'next/link'
import { useSize } from '@/store/useStore'

export interface Projectprops {
  page: string
  image: string | null
  title: string
  slug: string
  price: number
  video: string | null
}

export default function ProjectLine({
  page,

  title,
  slug,
  price,
  video,
}: Projectprops) {
  const { size } = useSize()
  return (
    <div
      className={`w-[47%] h-full max-w-[200px]   flex  flex-col    ${size === 'large' && 'w-[98%] max-w-[400px]  '} ${size === 'small' && '   min-w-[100px] w-[25%] md:max-w-[150px] '} ${size === 'normal' && 'w-[45%]  '} `}
    >
      <div className="group h-full border-zinc-300 dark:border-zinc-800 dark:border-[1px] shadow-shadowlight  dark:shadow-none hover:border-[1px] border-transparent ">
        {video && (
          <video
            width="500"
            height="500"
            controls
            preload="true"
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
      <div className=" flex  flex-col justify-between items-center h-[120px]  py-1">
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
    </div>
  )
}
