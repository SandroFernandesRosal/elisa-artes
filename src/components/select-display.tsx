'use client'
import { useDisplay } from '@/store/useStore'

export default function SelectDisplay() {
  const { setDisplay } = useDisplay()

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDisplay(event.target.value)
  }

  return (
    <select
      onChange={handleChange}
      className="border-double border-4 border-primary   bg-bglightsecundary dark:bg-bgdarksecundary h-9 flex items-center rounded-md focus:ring-0 outline-none "
    >
      <option value="destaque">Destaques</option>
      <option value="todos">Todos</option>
    </select>
  )
}
