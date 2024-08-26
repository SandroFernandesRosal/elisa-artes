import { api } from '@/data/api'
import { InvitationProps } from '@/data/types/invitation'

import Image from 'next/image'
import Link from 'next/link'

async function getFeaturedProducts(): Promise<InvitationProps[]> {
  const response = await api('/highlight/featured', {
    next: {
      revalidate: 1 * 1,
    },
  })

  const products = await response.json()

  return products
}

export default async function Highlights() {
  const [highLightedProduct, ...otherProducts] = await getFeaturedProducts()
  return (
    <div className="grid w-[85vw] lg:w-[65vw] lg:grid-cols-9 lg:grid-rows-6 gap-4 pt-8 md:pt-12">
      <div className=" group relative  col-span-6 row-span-6 rounded-lg bg-bglightsecundary dark:bg-bgdarksecundary overflow-hidden flex justify-center items-end  dark:border-[1px] dark:border-zinc-800 shadow-shadowlight  dark:shadow-none hover:border-primary hover:border-[1px] border-transparent dark:hover:border-primary w-full">
        {highLightedProduct.image && (
          <Image
            src={highLightedProduct.image}
            className="w-full group-hover:scale-105 transition-transform duration-500 "
            width={500}
            height={500}
            alt={highLightedProduct.title}
            quality={100}
            sizes="(max-width: 500px) 50vw, 100vw"
            priority
          />
        )}

        <div className="absolute top-10  w-full flex justify-end mr-10">
          <Link
            href={`/convites`}
            className="font-bold px-2 h-12  flex items-center gap-2 max-w-[350px]  rounded-full border-2 border-zinc-500 dark:bg-bgdarksecundary/70 bg-bglightsecundary/70 p-1 "
          >
            Ver modelos
          </Link>
        </div>

        <div className="absolute bottom-10  h-12  flex items-center gap-2 max-w-[350px]  rounded-full border-2 border-zinc-500 dark:bg-bgdarksecundary/70 bg-bglightsecundary/70 p-1 pl-2 ">
          <span className="text-sm truncate font-bold">
            {highLightedProduct.title}
          </span>
          <span className="flex h-full items-center justify-center rounded-full bg-primary px-4 font-semibold text-black ">
            {highLightedProduct.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
        </div>
      </div>

      {otherProducts.map((product) => {
        return (
          <div
            key={product.id}
            className="group relative col-span-3 row-span-3 rounded-lg bg-bglightsecundary dark:bg-bgdarksecundary overflow-hidden flex justify-center items-end  dark:shadow-shadowfooterdark dark:border-[1px] dark:border-zinc-800 shadow-shadowlight  dark:shadow-none hover:border-primary hover:border-[1px] border-transparent dark:hover:border-primary  w-full"
          >
            {product.image && (
              <Image
                src={product.image}
                className="group-hover:scale-105 transition-transform duration-500 w-full"
                width={500}
                height={500}
                alt={product.title}
                quality={100}
                sizes="(max-width: 500px) 50vw, 100vw"
              />
            )}

            <div className="absolute top-10  w-full flex justify-end md:mr-10 mr-3">
              <Link
                href={product.theme === 'urso' ? '/filtros' : '/savethedate'}
                className="font-bold px-2   flex items-center gap-2   rounded-full border-2 border-zinc-500 dark:bg-bgdarksecundary/70 bg-bglightsecundary/70 p-1 "
              >
                Ver modelos
              </Link>
            </div>

            <div className="absolute bottom-5  md:h-12 h-8 flex items-center gap-2 max-w-[280px]  w-[95%] md:w-[100%] justify-between rounded-full border-2 border-zinc-500 dark:bg-bgdarksecundary/70 bg-bglightsecundary/70 p-1 pl-2">
              <span className="text-sm truncate font-bold">
                {product.title}
              </span>

              <span className="flex h-full text-black items-center justify-center rounded-full bg-primary px-4 font-semibold">
                {product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
