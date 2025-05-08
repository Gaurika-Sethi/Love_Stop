import React from 'react'
import Image from 'next/image'
import {Cormorant_Upright} from 'next/font/google'

const cor= Cormorant_Upright({subsets:['latin'], weight:['400']});

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"


function Poetry() {
  return (
    <div className='flex items-center justify-center mb-28'>
            <div className=' flex items-center justify-center w-110 h-150 bg-[#FFEDDB]'>
          <Carousel className='flex items-center justify-center'>
              <CarouselContent>
                  {Array.from({ length: 20 }).map((_, i) => (
                      <CarouselItem
                           key={i}
                           className="flex items-center justify-center"
                       >
                      <Image
                        src={`/p${i + 1}.png`}
                        alt={`poem page ${i + 1}`}
                        width={1200}
                        height={1500}
                      />
                      </CarouselItem>
                       ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
    
        </div>
        </div>
  )
}

export default Poetry
