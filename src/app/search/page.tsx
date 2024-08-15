import { redirect } from 'next/navigation'
import { api } from '@/data/api'
import { InvitationProps } from '@/data/types/invitation'
import { Metadata } from 'next'
import ProjectLine from '@/components/project-line'

interface SearchProps {
  searchParams: {
    q: string
  }
}

export const metadata: Metadata = {
  title: 'Buscando produtos',
}

async function searchProducts(query: string): Promise<InvitationProps[]> {
  const response = await api(`/invitations/search?q=${query}`, {
    next: {
      revalidate: 60 * 60,
    },
  })

  const products = await response.json()

  return products
}

export default async function Search({ searchParams }: SearchProps) {
  const { q: query } = searchParams

  if (!query) {
    redirect('/')
  }

  const products = await searchProducts(query)

  return (
    <div className="flex flex-col gap-4 pt-40  min-h-screen w-full">
      <p className="text-sm text-center">
        Resultado Para: <span className="font-semibold">{query}</span>
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {products.map((project) => {
          return (
            <ProjectLine
              key={project.id}
              page="convites"
              slug={project.slug}
              title={project.title}
              image={project.image}
              price={project.price}
              video={project.video}
            />
          )
        })}
      </div>
    </div>
  )
}
