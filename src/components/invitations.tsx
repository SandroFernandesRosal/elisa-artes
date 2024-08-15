import { api } from '@/data/api'
import { InvitationProps } from '@/data/types/invitation'
import Project from './project'

export default async function Invitations() {
  const response = await api('/invitations', {
    next: {
      revalidate: 1 * 1,
    },
  })

  const products = await response.json()

  return (
    <div className="mt-10 w-full">
      <h1 className=" text-3xl font-bold mb-4 border-l-8 pl-2 border-primary rounded-lg">
        Coleção Convites
      </h1>

      <div className="flex flex-wrap w-full  gap-3 justify-center md:justify-start ">
        {products.map((product: InvitationProps) => {
          return (
            <Project
              key={product.id}
              page="convites"
              title={product.title}
              price={product.price}
              image={product.image}
              slug={product.slug}
              video={product.video}
            />
          )
        })}
      </div>
    </div>
  )
}
