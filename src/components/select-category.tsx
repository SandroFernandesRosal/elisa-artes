'use client'
import { useCategory } from '@/store/useStore'

export default function SelectCategory() {
  const { setCategory } = useCategory()

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value)
  }

  return (
    <select
      onChange={handleChange}
      className="border-double border-4 border-primary   bg-bglightsecundary dark:bg-bgdarksecundary h-9 flex items-center rounded-md focus:ring-0 outline-none "
    >
      <option value="todos" aria-label="todos">
        Todos
      </option>
      <option value="destaques" aria-label="destaques">
        Destaques
      </option>
      <option value="animado historia" aria-label="animado história">
        Animado História
      </option>
      <option value="animado clip" aria-label="animado clip">
        Animado com Clip
      </option>
      <option value="interativo 2 botoes" aria-label="interativo 2 botões">
        Interativo 2 botões
      </option>
      <option value="interativo 3 botoes" aria-label="interativo 3 botoões">
        Interativo 3 botões
      </option>
    </select>
  )
}
