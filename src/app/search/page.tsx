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

async function invitationsProducts(query: string): Promise<InvitationProps[]> {
  const response = await api(`/invitations/search?q=${query}`, {
    next: {
      revalidate: 60 * 60,
    },
  })

  const invitationsProducts = await response.json()

  return invitationsProducts
}

async function filterProducts(query: string): Promise<InvitationProps[]> {
  const response = await api(`/filters/search?q=${query}`, {
    next: {
      revalidate: 60 * 60,
    },
  })

  const filterProducts = await response.json()

  return filterProducts
}

async function memoriesProducts(query: string): Promise<InvitationProps[]> {
  const response = await api(`/memories/search?q=${query}`, {
    next: {
      revalidate: 60 * 60,
    },
  })

  const memoriesProducts = await response.json()

  return memoriesProducts
}

async function savethedateProducts(query: string): Promise<InvitationProps[]> {
  const response = await api(`/savethedate/search?q=${query}`, {
    next: {
      revalidate: 60 * 60,
    },
  })

  const savethedateProducts = await response.json()

  return savethedateProducts
}

export default async function Search({ searchParams }: SearchProps) {
  const { q: query } = searchParams

  if (!query) {
    redirect('/')
  }

  const productsInvitations = await invitationsProducts(query)
  const productsFilter = await filterProducts(query)
  const productsMemories = await memoriesProducts(query)
  const productsSavethedate = await savethedateProducts(query)

  return (
    <div className="flex flex-col gap-4 pt-40  min-h-screen w-full">
      <p className="text-sm text-center">
        Resultado Para: <span className="font-semibold">{query}</span>
      </p>

      {productsInvitations.length < 1 &&
        productsFilter.length < 1 &&
        productsMemories.length < 1 &&
        productsSavethedate.length < 1 && (
          <p className="text-center">Nenhum produto encontrado</p>
        )}

      {productsInvitations.length > 0 && (
        <div className="flex flex-col">
          <h1 className="text-center text-2xl">Resultado para convites</h1>
          <h2 className="text-center mb-5">
            Encontramos {productsInvitations.length}{' '}
            {productsInvitations.length < 2 ? 'convite' : 'convites'}
          </h2>
          <div className="flex flex-wrap justify-center  gap-4">
            {productsInvitations.map((project) => {
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
      )}

      {productsFilter.length > 0 && (
        <div className="flex flex-col">
          <h1 className="text-center text-2xl">Resultado para filtros</h1>
          <h2 className="text-center mb-5">
            Encontramos {productsFilter.length}{' '}
            {productsFilter.length < 2 ? 'filtro' : 'filtros'}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {productsFilter.map((project) => {
              return (
                <ProjectLine
                  key={project.id}
                  page="filtros"
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
      )}

      {productsMemories.length > 0 && (
        <div className="flex flex-col">
          <h1 className="text-center text-2xl">Resultado para lembretes</h1>
          <h2 className="text-center mb-5">
            Encontramos {productsMemories.length}{' '}
            {productsMemories.length < 2 ? 'lembrete' : 'lembretes'}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {productsMemories.map((project) => {
              return (
                <ProjectLine
                  key={project.id}
                  page="lembretes"
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
      )}

      {productsSavethedate.length > 0 && (
        <div className="flex flex-col">
          <h1 className="text-center text-2xl">Resultado para Save the date</h1>
          <h2 className="text-center mb-5">
            Encontramos {productsSavethedate.length}{' '}
            {productsSavethedate.length < 2
              ? 'save the date'
              : 'save the dates'}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {productsSavethedate.map((project) => {
              return (
                <ProjectLine
                  key={project.id}
                  page="savethedate"
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
      )}
    </div>
  )
}
