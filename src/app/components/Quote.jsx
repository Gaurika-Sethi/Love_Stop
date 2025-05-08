'use client'
import React from 'react'
import Image from 'next/image'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import Autoplay from 'embla-carousel-autoplay'

function Quote() {
  return (
     <div className='flex items-center justify-center mb-28'>
          <div className=' flex items-center justify-center  w-120 bg-[#FFEDDB]'>
           <Carousel 
           plugins={[Autoplay({ delay: 5000 })]}
           className="flex items-center justify-center">
          <CarouselContent>
             {Array.from({ length: 20 }).map((_, i) => (
                  <CarouselItem
                  key={i}
                  className="flex items-center justify-center"
              >
             <Image
               src={`/q${i + 1}.png`}
               alt={`poem page ${i + 1}`}
               width={500}
               height={500}
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

export default Quote
