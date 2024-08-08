'use client'
import { useSize } from '@/store/useStore'
import { FaSquare } from 'react-icons/fa'

import { IoGrid } from 'react-icons/io5'

export default function SizeProject() {
  const { setSize, size } = useSize()

  const handleLocalSelection = (selected: string) => {
    setSize(selected)
  }

  return (
    <div className="flex gap-2 mb-5">
      <FaSquare
        onClick={() => {
          setSize('large')
          handleLocalSelection('large')
        }}
        className={`cursor-pointer text-4xl text-primary  hover:text-primary/40 ${size === 'large' && ' border-4 border-double rounded-md border-primary '}`}
      />

      <IoGrid
        onClick={() => setSize('normal')}
        className={`cursor-pointer text-4xl text-primary  hover:text-primary/40 ${size === 'normal' && ' border-4 border-double rounded-md border-primary  '}`}
      />
    </div>
  )
}
