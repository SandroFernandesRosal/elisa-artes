import { api } from '@/data/api'
import { InvitationProps } from '@/data/types/invitation'
import { FilterProps } from '@/data/types/filter'
import { SaveDateProps } from '@/data/types/save-date'
import { MemoryProps } from '@/data/types/memory'

import { Metadata } from 'next'

import Link from 'next/link'
import ProjectLine from '@/components/project-line'

interface ProductProps {
  params: {
    slug: string
  }
}

export interface Propss {
  products: InvitationProps
}

async function getProduct(slug: string): Promise<InvitationProps> {
  const response = await api(`/filters/${slug}`, {
    next: {
      revalidate: 1 * 1,
    },
  })

  const product = await response.json()

  return product
}

async function getInvitation(): Promise<InvitationProps[]> {
  const response = await api(`/invitations`, {
    next: {
      revalidate: 1 * 1,
    },
  })

  const product: InvitationProps[] = await response.json()

  return product
}

async function getMemory(): Promise<MemoryProps[]> {
  const response = await api(`/memories`, {
    next: {
      revalidate: 1 * 1,
    },
  })

  const product: MemoryProps[] = await response.json()

  return product
}

async function getFilter(): Promise<FilterProps[]> {
  const response = await api(`/filters`, {
    next: {
      revalidate: 1 * 1,
    },
  })

  const product: FilterProps[] = await response.json()

  return product
}

async function getSavethedate(): Promise<SaveDateProps[]> {
  const response = await api(`/savethedate`, {
    next: {
      revalidate: 1 * 1,
    },
  })

  const product: SaveDateProps[] = await response.json()

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
  const productInvitation = await getInvitation()
  const productMemory = await getMemory()
  const productFilter = await getFilter()
  const productSavethedate = await getSavethedate()
  return (
    <div>
      {' '}
      <div className="relative min-h-screen my-8 lg:grid  lg:grid-cols-3 gap-4 flex md:items-center flex-col-reverse pt-[100px] overflow-hidden">
        <div className="lg:col-span-2 overflow-hidden flex justify-center px-5 ">
          {product.video && (
            <video
              width="500"
              height="500"
              controls
              poster={product.image}
              preload="metadata"
              className="group-hover:scale-105  transition-transform duration-500  dark:shadow-shadowfooterdark dark:border-[1px] dark:border-zinc-800 shadow-shadowlight  dark:shadow-none   border-transparent m-5 "
            >
              <source src={product.video} type="video/mp4" />
              <track
                src={product.video}
                kind="subtitles"
                srcLang="pt-br"
                label="Portuguese"
              />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <div className="flex flex-col justify-center px-12 pb-5">
          <h1 className="text-3xl font-bold leading-tight text-center">
            {product.title}
          </h1>
          <p className="mt-2 leading-relaxed text-center">
            {product.description}
          </p>
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
              className="inline-block rounded-full bg-primary px-5 py-2.5 font-semibold lg:truncate"
            >
              Quero esse modelo
            </Link>
          </div>
        </div>
      </div>
      {productFilter.length >= 1 ||
      productMemory.length >= 1 ||
      productSavethedate.length >= 1 ||
      productInvitation.length >= 1 ? (
        <div>
          <h1 className="text-3xl flex justify-center">Sugestões</h1>
          <div className="flex justify-center px-2 my-5 gap-5 flex-wrap w-full">
            {productInvitation
              .filter(
                (products: InvitationProps) => products.theme === product.theme,
              )
              .map((products: InvitationProps) => (
                <ProjectLine
                  key={products.id}
                  page={'convites'}
                  image={products.image}
                  title={products.title}
                  slug={products.slug}
                  price={products.price}
                  video={products.video}
                />
              ))}

            {productMemory
              .filter(
                (products: MemoryProps) => products.theme === product.theme,
              )
              .map((products: MemoryProps) => (
                <ProjectLine
                  key={products.id}
                  page={'lembretes'}
                  image={products.image}
                  title={products.title}
                  slug={products.slug}
                  price={products.price}
                  video={products.video}
                />
              ))}

            {productFilter
              .filter(
                (products: FilterProps) => products.theme === product.theme,
              )
              .map((products: FilterProps) => (
                <ProjectLine
                  key={products.id}
                  page={'filtros'}
                  image={products.image}
                  title={products.title}
                  slug={products.slug}
                  price={products.price}
                  video={products.video}
                />
              ))}

            {productSavethedate
              .filter(
                (products: SaveDateProps) => products.theme === product.theme,
              )
              .map((products: SaveDateProps) => (
                <ProjectLine
                  key={products.id}
                  page={'savethedate'}
                  image={products.image}
                  title={products.title}
                  slug={products.slug}
                  price={products.price}
                  video={products.video}
                />
              ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}
