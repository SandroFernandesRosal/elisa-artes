import { api } from '@/data/api'
import { InvitationProps } from '@/data/types/invitation'

import Image from 'next/image'
import Link from 'next/link'

async function getFeaturedProducts(): Promise<InvitationProps[]> {
  const response = await api('/products/featured', {
    next: {
      revalidate: 1,
    },
  })

  const products = await response.json()

  return products
}

export default async function Highlights() {
  const [highLightedProduct, ...otherProducts] = await getFeaturedProducts()
  return (
    <div className="grid  lg:grid-cols-9 lg:grid-rows-6 gap-4 pt-8 md:pt-12">
      <Link
        href={`/convites/${highLightedProduct.slug}`}
        className=" group relative  col-span-6 row-span-6 rounded-lg bg-bglightsecundary dark:bg-bgdarksecundary overflow-hidden flex justify-center items-end  dark:border-[1px] dark:border-zinc-800 shadow-shadowlight  dark:shadow-none hover:border-primary hover:border-[1px] border-transparent dark:hover:border-primary  "
      >
        {highLightedProduct.image && (
          <Image
            src={highLightedProduct.image}
            className="group-hover:scale-105 transition-transform duration-500 md:w-[70%] lg:w-[90%]"
            width={920}
            height={920}
            alt=""
            quality={100}
          />
        )}

        <div className="absolute bottom-10 right-0 h-12 mr-2 flex items-center gap-2 max-w-[350px]  rounded-full border-2 border-zinc-500 dark:bg-bgdarksecundary/70 bg-bglightsecundary/70 p-1 pl-5">
          <span className="text-sm truncate">{highLightedProduct.title}</span>
          <span className="flex h-full items-center justify-center rounded-full bg-primary px-4 font-semibold">
            {highLightedProduct.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
        </div>
      </Link>

      {otherProducts.map((product) => {
        return (
          <Link
            key={product.id}
            href={`/convites/${product.slug}`}
            className="group relative col-span-3 row-span-3 rounded-lg bg-bglightsecundary dark:bg-bgdarksecundary overflow-hidden flex justify-center items-end  dark:shadow-shadowfooterdark dark:border-[1px] dark:border-zinc-800 shadow-shadowlight  dark:shadow-none hover:border-primary hover:border-[1px] border-transparent dark:hover:border-primary  "
          >
            {product.image && (
              <Image
                src={product.image}
                className="group-hover:scale-105 transition-transform duration-500 md:w-[70%] lg:w-[90%]"
                width={920}
                height={920}
                alt=""
                quality={100}
              />
            )}

            <div className="absolute bottom-5 right-0 md:h-12 h-8 flex items-center gap-2 max-w-[280px] w-[90%] mr-2 justify-between rounded-full border-2 border-zinc-500 dark:bg-bgdarksecundary/70 bg-bglightsecundary/70 p-1 pl-5">
              <span className="text-sm truncate">{product.title}</span>
              <span className="flex h-full items-center justify-center rounded-full bg-primary px-4 font-semibold">
                {product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
