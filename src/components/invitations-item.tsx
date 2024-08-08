'use client'
import { InvitationProps, InvitationArray } from '@/data/types/invitation'
import { useState } from 'react'
import { useDisplay, useSize } from '@/store/useStore'
import { MdArrowBack, MdArrowForward } from 'react-icons/md'

import Image from 'next/image'
import Link from 'next/link'

export default function InvitationsLine({ products }: InvitationArray) {
  const { display } = useDisplay()

  const [offset, setOffset] = useState(0)
  const [isDisabledNext, setIsDisabledNext] = useState(false)
  const [isDisabledPrev, setIsDisabledPrev] = useState(true)

  const projectsPerPage = 6

  const filteredProjects = products.filter(
    (project: InvitationProps) => project.title,
  )

  const displayedProjects =
    display === 'featured'
      ? filteredProjects.filter(
          (project: InvitationProps) => project.featured === true,
        )
      : filteredProjects

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
  const { size } = useSize()
  return (
    <>
      <ul className="flex flex-wrap gap-5 justify-center w-full">
        {projectsToDisplay.map((project: InvitationProps) => (
          <div
            className={`w-[47%] max-w-[200px] h-[400px] gap-2 pb-2 flex  flex-col  dark:bg-bgdarksecundary bg-bglightsecundary shadow shadow-gray-500 rounded-md dark:shadow-none dark:border-[1px] dark:border-zinc-800 hover:border-primary  dark:hover:border-primary hover:border-[1px]  ${size === 'large' && 'w-[98%] max-w-[400px] h-[650px] justify-between'} ${size === 'small' && 'h-[150px] justify-between py-3 md:py-6 min-w-[100px] w-[25%] md:max-w-[150px] '} ${size === 'normal' && 'h-[400px] w-[45%] gap-2 md:gap-5'}`}
            key={project.id}
          >
            <Link href={`/product/${project.slug}`} className="group ">
              {project.image && (
                <Image
                  src={project.image}
                  width={500}
                  height={500}
                  alt={project.title}
                  className="group-hover:scale-105  transition-transform duration-500 h-[270px]"
                />
              )}
            </Link>
            <Link href={`/product/${project.slug}`}>
              <p className=" text-center px-1">{project.title}</p>
            </Link>
            <div className="flex flex-col  md:flex-row justify-end md:items-end h-full md:justify-evenly gap-2 mx-2 items-center">
              <span className="flex  items-center justify-center rounded-full bg-primary px-4 font-semibold">
                {project.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>{' '}
          </div>
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
