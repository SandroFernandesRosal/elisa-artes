'use client'
import { InvitationProps, InvitationArray } from '@/data/types/invitation'

import { CornerRightDown } from 'lucide-react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'

export default function CarouselSaveDate({ products }: InvitationArray) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,

    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
      <div className="flex justify-between items-center px-2 py-5">
        <h1 className=" text-3xl font-bold mb-4 border-l-8 pl-2 border-primary rounded-lg">
          Save the date
        </h1>{' '}
        <p className="flex gap-2 hover:text-primary cur text-lg items-center">
          Ver todos <CornerRightDown size={32} />{' '}
        </p>
      </div>

      <Slider {...settings}>
        {products.map((item: InvitationProps) => {
          return (
            <div
              key={item.id}
              className="bg-bglightsecundary rounded-lg dark:bg-bgdarksecundary h-[400px] flex shadow-shadowlight dark:shadow-none dark:border-[1px] dark:border-zinc-800 my-1 hover:border-primary hover:border-[1px] border-transparent"
            >
              <div className="h-[65%] ">
                {item.image && (
                  <Image
                    src={item.image}
                    height={400}
                    width={400}
                    alt=""
                    className="h-full w-full"
                  />
                )}
              </div>

              <div className=" flex  flex-col justify-between h-[35%]  items-center  py-1">
                <p className="font-semibold  text-center">{item.title}</p>

                <span className="flex  items-center  rounded-full bg-primary px-4 font-semibold">
                  {item.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </span>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}
