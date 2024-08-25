import CarouselFilters from '@/components/carousel-filters'
import CarouselInvitations from '@/components/carousel-invitations'

import CarouselMemories from '@/components/carousel-memories'
import CarouselSaveDate from '@/components/carousel-savedate'
import Highlights from '@/components/hightlight'
import { Suspense } from 'react'

import { api } from '@/data/api'

export default async function Home() {
  const response = await api('/invitations', {
    next: {
      revalidate: 1,
    },
  })

  const products = await response.json()

  return (
    <main className="flex min-h-screen flex-col items-center py-24 px-6 md:px-14 lg: max-w-[1400px]">
      <Highlights />
      <Suspense fallback={<p>Carregando...</p>}>
        <CarouselInvitations products={products} />
      </Suspense>

      <Suspense fallback={<p>Carregando...</p>}>
        <CarouselFilters products={products} />
      </Suspense>
      <Suspense fallback={<p>Carregando...</p>}>
        <CarouselSaveDate products={products} />
      </Suspense>
      <Suspense fallback={<p>Carregando...</p>}>
        <CarouselMemories products={products} />
      </Suspense>
    </main>
  )
}
