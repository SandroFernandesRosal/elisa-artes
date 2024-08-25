import { api } from '@/data/api'

import SizeProject from '@/components/size-project'
import MemoriesLine from '@/components/memories-line'
import SelectCategory from '@/components/select-category'

export default async function MemoriesPage() {
  const response = await api('/invitations', {
    next: {
      revalidate: 1 * 1,
    },
  })

  const projects = await response.json()

  return (
    <section className="px-5 lg:px-10  flex flex-col items-center dark:bg-bgdark bg-bglight  pb-40   w-full bg-bottom bg-repeat-x pt-36">
      <div className="flex flex-col justify-between items-center px-2 py-5">
        <h1 className="text-2xl  md:text-3xl ">Lembretes</h1>{' '}
        <h2>Não deixe que esqueçam do seu dia especial </h2>
      </div>
      <div className="flex flex-col items-center mb-5 ">
        <div className="flex gap-2">
          <SelectCategory />
          <SizeProject />
        </div>
      </div>

      <MemoriesLine products={projects} />
    </section>
  )
}
