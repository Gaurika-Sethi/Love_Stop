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
             <CarouselItem><Image src='/q1.png'  width={500} height={500}></Image></CarouselItem>
             <CarouselItem><Image src='/q2.png'  width={500} height={500}></Image></CarouselItem>
             <CarouselItem><Image src='/q3.png'  width={500} height={500}></Image></CarouselItem>
             <CarouselItem><Image src='/q4.png'  width={500} height={500}></Image></CarouselItem>
             <CarouselItem><Image src='/q6.png'  width={500} height={500}></Image></CarouselItem>
             <CarouselItem><Image src='/q7.png'  width={500} height={500}></Image></CarouselItem>
             <CarouselItem><Image src='/q8.png'  width={500} height={500}></Image></CarouselItem>
             <CarouselItem><Image src='/q9.png'  width={500} height={500}></Image></CarouselItem>
             <CarouselItem><Image src='/q10.png'  width={500} height={500}></Image></CarouselItem>
             <CarouselItem><Image src='/q11.png'  width={500} height={500}></Image></CarouselItem>
             <CarouselItem><Image src='/q12.png'  width={500} height={500}></Image></CarouselItem>
             <CarouselItem><Image src='/q13.png'  width={500} height={500}></Image></CarouselItem>
             <CarouselItem><Image src='/q14.png'  width={500} height={500}></Image></CarouselItem>
             <CarouselItem><Image src='/q15.png'  width={500} height={500}></Image></CarouselItem>
             <CarouselItem><Image src='/q16.png'  width={500} height={500}></Image></CarouselItem>
             <CarouselItem><Image src='/q17.png'  width={500} height={500}></Image></CarouselItem>
             <CarouselItem><Image src='/q18.png'  width={500} height={500}></Image></CarouselItem>
             <CarouselItem><Image src='/q19.png'  width={500} height={500}></Image></CarouselItem>
             <CarouselItem><Image src='/q20.png'  width={500} height={500}></Image></CarouselItem>
             <CarouselItem><Image src='/q21.png'  width={500} height={500}></Image></CarouselItem>
             <CarouselItem><Image src='/q22.png'  width={500} height={500}></Image></CarouselItem>
             <CarouselItem><Image src='/q23.png'  width={500} height={500}></Image></CarouselItem>
             <CarouselItem><Image src='/q24.png'  width={500} height={500}></Image></CarouselItem>
             <CarouselItem><Image src='/q25.png'  width={500} height={500}></Image></CarouselItem>
             </CarouselContent>
             <CarouselPrevious />
             <CarouselNext />
             </Carousel>
          </div>
        </div>
  )
}

export default Quote
