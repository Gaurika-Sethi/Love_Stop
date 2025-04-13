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
               <CarouselItem className='flex items-center justify-center'><Image src='/p1.png' width={1200} height={1500}></Image></CarouselItem>
               <CarouselItem className='flex items-center justify-center'><Image src='/p2.png' width={1200} height={1500}></Image></CarouselItem>
               <CarouselItem className='flex items-center justify-center'><Image src='/p3.png' width={1200} height={1500}></Image></CarouselItem>
               <CarouselItem className='flex items-center justify-center'><Image src='/p4.png' width={1200} height={1500}></Image></CarouselItem>
               <CarouselItem className='flex items-center justify-center'><Image src='/p5.png' width={1200} height={1500}></Image></CarouselItem>
               <CarouselItem className='flex items-center justify-center'><Image src='/p6.png' width={1200} height={1500}></Image></CarouselItem>
               <CarouselItem className='flex items-center justify-center'><Image src='/p7.png' width={1200} height={1500}></Image></CarouselItem>
               <CarouselItem className='flex items-center justify-center'><Image src='/p8.png' width={1200} height={1500}></Image></CarouselItem>
               <CarouselItem className='flex items-center justify-center'><Image src='/p9.png' width={1200} height={1500}></Image></CarouselItem>
               <CarouselItem className='flex items-center justify-center'><Image src='/p10.png' width={1200} height={1500}></Image></CarouselItem>
               <CarouselItem className='flex items-center justify-center'><Image src='/p11.png' width={1200} height={1500}></Image></CarouselItem>
               <CarouselItem className='flex items-center justify-center'><Image src='/p12.png' width={1200} height={1500}></Image></CarouselItem>
               <CarouselItem className='flex items-center justify-center'><Image src='/p13.png' width={1200} height={1500}></Image></CarouselItem>
               <CarouselItem className='flex items-center justify-center'><Image src='/p14.png' width={1200} height={1500}></Image></CarouselItem>
               <CarouselItem className='flex items-center justify-center'><Image src='/p15.png' width={1200} height={1500}></Image></CarouselItem>
               <CarouselItem className='flex items-center justify-center'><Image src='/p16.png' width={1200} height={1500}></Image></CarouselItem>
               <CarouselItem className='flex items-center justify-center'><Image src='/p17.png' width={1200} height={1500}></Image></CarouselItem>
               <CarouselItem className='flex items-center justify-center'><Image src='/p18.png' width={1200} height={1500}></Image></CarouselItem>
               <CarouselItem className='flex items-center justify-center'><Image src='/p19.png' width={1200} height={1500}></Image></CarouselItem>
               <CarouselItem className='flex items-center justify-center'><Image src='/p20.png' width={1200} height={1500}></Image></CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
    
        </div>
        </div>
  )
}

export default Poetry
