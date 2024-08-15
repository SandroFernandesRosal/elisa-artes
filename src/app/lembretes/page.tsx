import { api } from '@/data/api'

import SelectDisplay from '@/components/select-display'
import SizeProject from '@/components/size-project'
import MemoriesLine from '@/components/memories-line'

export default async function MemoriesPage() {
  const response = await api('/invitations', {
    next: {
      revalidate: 1 * 1,
    },
  })

  const projects = await response.json()

  return (
    <section className="px-5 lg:px-10  flex flex-col items-center dark:bg-bgdark bg-bglight  pb-40   w-full bg-bottom bg-repeat-x pt-36">
      <h1 className="text-3xl font-Rubiki font-bold">Lembretes</h1>
      <span className="border-b-4 pb-2 w-24  border-primary  text-3xl mb-5"></span>
      <div className="flex flex-col items-center mb-5 ">
        <div className="flex gap-2">
          <SelectDisplay />
          <SizeProject />
        </div>
      </div>

      <MemoriesLine products={projects} />
    </section>
  )
}
