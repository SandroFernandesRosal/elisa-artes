'use client'
import { MemoryProps, MemoryArray } from '@/data/types/memory'
import { useState } from 'react'
import { useCategory } from '@/store/useStore'
import { MdArrowBack, MdArrowForward } from 'react-icons/md'
import ProjectLine from './project-line'

export default function MemoriesLine({ products }: MemoryArray) {
  const { category } = useCategory()

  const [offset, setOffset] = useState(0)
  const [isDisabledNext, setIsDisabledNext] = useState(false)
  const [isDisabledPrev, setIsDisabledPrev] = useState(true)

  const projectsPerPage = 6

  const filteredProjects = products.filter(
    (project: MemoryProps) => project.title,
  )

  const categoryFilteredProjects = filteredProjects.filter(
    (project: MemoryProps) => {
      if (category === 'todos') {
        return true
      }

      return project.category === category
    },
  )

  const displayedProjects =
    category === 'destaques'
      ? filteredProjects.filter(
          (project: MemoryProps) => project.featured === true,
        )
      : categoryFilteredProjects

  const loadNextPage = () => {
    if (displayedProjects.length < offset + projectsPerPage) {
      setIsDisabledNext(true)
      return
    }
    setOffset(offset + projectsPerPage)
    setIsDisabledPrev(false)
  }

  const loadPreviousPage = () => {
    if (offset <= 0) {
      setIsDisabledPrev(true)
      return
    }
    setOffset(offset - projectsPerPage)
    setIsDisabledNext(false)
  }

  const totalNews = displayedProjects.length
  const totalPages = Math.ceil(totalNews / projectsPerPage)
  const currentPage = Math.ceil((offset + projectsPerPage) / projectsPerPage)
  const displayCurrentPage = Math.min(currentPage, totalPages)

  const projectsToDisplay = displayedProjects.slice(
    (displayCurrentPage - 1) * projectsPerPage,
    displayCurrentPage * projectsPerPage,
  )

  return (
    <>
      <ul className="flex flex-wrap gap-5 justify-center w-full">
        {projectsToDisplay.map((project: MemoryProps) => (
          <ProjectLine
            key={project.id}
            page="lembretes"
            slug={project.slug}
            title={project.title}
            image={project.image}
            price={project.price}
            video={project.video}
          />
        ))}
      </ul>

      {projectsToDisplay.length > 0 && (
        <>
          {' '}
          <div className="flex mt-5">
            <button
              onClick={loadPreviousPage}
              disabled={isDisabledPrev}
              className={`m-2 mb-4 flex h-full w-[50px] cursor-pointer items-center justify-center rounded-xl  p-2 font-bold text-white shadow-light  hover:from-blue-900 hover:to-slate-900 dark:border-[1px] border-zinc-800 shadow-shadowlight dark:shadow-none${
                isDisabledPrev
                  ? 'bg-bglightsecundary/20 dark:bg-bgdarksecundary/20'
                  : 'bg-bglightsecundary dark:bg-bgdarksecundary'
              } `}
            >
              <MdArrowBack className="text-3xl font-bold text-primary" />
            </button>
            <button
              onClick={loadNextPage}
              disabled={isDisabledNext}
              className={`m-2 mb-4 flex h-full w-[50px] cursor-pointer items-center justify-center rounded-xl  p-2 font-bold  shadow-light  hover:from-blue-900 hover:to-slate-900 dark:border-[1px] border-zinc-800 shadow-shadowlight dark:shadow-none ${
                isDisabledNext
                  ? 'bg-bglightsecundary/20 dark:bg-bgdarksecundary/20'
                  : 'bg-bglightsecundary dark:bg-bgdarksecundary'
              } `}
            >
              <MdArrowForward className="text-3xl font-bold text-primary" />
            </button>
          </div>{' '}
          <p className=" font-bold">
            Página {displayCurrentPage} de {totalPages}
          </p>{' '}
        </>
      )}
    </>
  )
}
