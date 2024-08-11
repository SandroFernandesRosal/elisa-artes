import Image from 'next/image'
import Link from 'next/link'
import { useSize } from '@/store/useStore'

export interface Projectprops {
  page: string
  image: string | null
  title: string
  slug: string
  price: number
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
      className={`w-[47%] max-w-[200px] h-[400px] gap-2 pb-2 flex  flex-col  dark:bg-bgdarksecundary bg-bglightsecundary shadow shadow-gray-500 rounded-md dark:shadow-none dark:border-[1px] dark:border-zinc-800 hover:border-primary  dark:hover:border-primary hover:border-[1px]  ${size === 'large' && 'w-[98%] max-w-[400px] h-[650px] justify-between'} ${size === 'small' && 'h-[150px] justify-between py-3 md:py-6 min-w-[100px] w-[25%] md:max-w-[150px] '} ${size === 'normal' && 'h-[400px] w-[45%] gap-2 md:gap-5'}`}
    >
      <Link href={`${page}/${slug}`} className="group ">
        {image && (
          <Image
            src={image}
            width={500}
            height={500}
            alt={title}
            className="group-hover:scale-105  transition-transform duration-500 h-[270px]"
          />
        )}
      </Link>
      <Link href={`${page}/${slug}`}>
        <p className=" text-center px-1">{title}</p>
      </Link>
      <div className="flex flex-col  md:flex-row justify-end md:items-end h-full md:justify-evenly gap-2 mx-2 items-center">
        <span className="flex  items-center justify-center rounded-full bg-primary px-4 font-semibold">
          {price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </span>
      </div>{' '}
    </div>
  )
}
