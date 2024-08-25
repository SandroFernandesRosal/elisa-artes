import { api } from '@/data/api'

import SizeProject from '@/components/size-project'
import FiltersLine from '@/components/filters-line'
import SelectCategory from '@/components/select-category'

export default async function FiltersPage() {
  const response = await api('/invitations', {
    next: {
      revalidate: 1 * 1,
    },
  })

  const projects = await response.json()

  return (
    <section className="px-5 lg:px-10  flex flex-col items-center dark:bg-bgdark bg-bglight  pb-40   w-full bg-bottom bg-repeat-x pt-36">
      <div className="flex flex-col justify-between items-center px-2 py-5">
        <h1 className="text-2xl  md:text-3xl ">Filtros para instagram</h1>{' '}
        <h2>Torne seu dia inesquecível com um filtro incrível </h2>
      </div>

      <div className="flex flex-col items-center mb-5 ">
        <div className="flex gap-2">
          <SelectCategory />
          <SizeProject />
        </div>
      </div>

      <FiltersLine products={projects} />
    </section>
  )
}
