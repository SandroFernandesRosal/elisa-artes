import CarouselFilters from '@/components/carousel-filters'
import CarouselInvitations from '@/components/carousel-invitations'

import CarouselMemories from '@/components/carousel-memories'
import CarouselSaveDate from '@/components/carousel-savedate'
import Highlights from '@/components/hightlight'

import { api } from '@/data/api'

export default async function Home() {
  const productInvitations = await api('/invitations', {
    next: {
      revalidate: 1,
    },
  })

  const productFilters = await api('/filters', {
    next: {
      revalidate: 1,
    },
  })

  const productMemories = await api('/memories', {
    next: {
      revalidate: 1,
    },
  })

  const productSavethedate = await api('/savethedate', {
    next: {
      revalidate: 1,
    },
  })

  const invitations = await productInvitations.json()
  const filters = await productFilters.json()
  const memories = await productMemories.json()
  const savethedate = await productSavethedate.json()

  return (
    <main className="flex min-h-screen flex-col items-center py-24 px-6 md:px-14 lg: max-w-[1400px]">
      <Highlights />

      <CarouselInvitations products={invitations} />
      <CarouselFilters products={filters} />
      <CarouselSaveDate products={savethedate} />
      <CarouselMemories products={memories} />
    </main>
  )
}
