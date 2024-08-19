'use client'
import { InvitationProps, InvitationArray } from '@/data/types/invitation'

import { Plus } from 'lucide-react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Project from './project'
import Link from 'next/link'

export default function CarouselSaveDate({ products }: InvitationArray) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  }
  return (
    <div className="w-[80vw]   pt-10">
      <div className="flex flex-col justify-between items-center px-2 py-5">
        <h1 className="text-2xl  md:text-3xl ">Save the date</h1>{' '}
        <h2>Salve esse dia especial na agenda</h2>
      </div>
      <Link
        href={'/convites'}
        className="flex justify-end gap-2 hover:text-primary  text-lg items-center"
      >
        Ver todos <Plus size={32} />{' '}
      </Link>

      <Slider {...settings}>
        {products.map((item: InvitationProps) => {
          return (
            <Project
              page="savethedate"
              image={item.image}
              title={item.title}
              key={item.id}
              slug={item.slug}
              price={item.price}
              video={item.video}
            />
          )
        })}
      </Slider>
    </div>
  )
}
