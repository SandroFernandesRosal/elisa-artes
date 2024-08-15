import Link from 'next/link'
import Image from 'next/image'

export interface Projectprops {
  page: string
  image: string | null
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
    <div className="flex flex-col">
      <div className="h-full group my-2 lg:my-4 border-zinc-300 dark:border-zinc-800 dark:border-[1px] shadow-shadowlight  dark:shadow-none hover:border-[1px] border-transparent">
        {image && (
          <Image
            src={image}
            alt=""
            width={1000}
            height={1000}
            quality={100}
            className=" "
          />
        )}
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
    </div>
  )
}
