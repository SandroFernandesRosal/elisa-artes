import { api } from '@/data/api'
import { FilterProps } from '@/data/types/filter'
import { Metadata } from 'next'

import Image from 'next/image'
import Link from 'next/link'

interface ProductProps {
  params: {
    slug: string
  }
}

async function getProduct(slug: string): Promise<FilterProps> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60,
    },
  })

  const product = await response.json()

  return product
}

export async function generateMetadata({
  params,
}: ProductProps): Promise<Metadata> {
  const product = await getProduct(params.slug)

  return {
    title: product.title,
  }
}

export default async function ProductPage({ params }: ProductProps) {
  const product = await getProduct(params.slug)
  return (
    <div className="relative lg:grid  lg:grid-cols-3 gap-4 flex md:items-center flex-col pt-[100px] overflow-hidden">
      <div className="lg:col-span-2 overflow-hidden">
        {product.image && (
          <Image
            src={product.image}
            alt=""
            width={1000}
            height={1000}
            quality={100}
            className=""
          />
        )}
      </div>
      <div className="flex flex-col justify-center px-12 pb-5">
        <h1 className="text-3xl font-bold leading-tight">{product.title}</h1>
        <p className="mt-2 leading-relaxed">{product.description}</p>
        <div className="mt-8 flex items-center gap-3 justify-center">
          <span className="inline-block rounded-full bg-primary px-5 py-2.5 font-semibold">
            {product.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
          <Link
            href={'/'}
            className="inline-block rounded-full bg-primary px-5 py-2.5 font-semibold"
          >
            Quero esse modelo
          </Link>
        </div>
      </div>
    </div>
  )
}
