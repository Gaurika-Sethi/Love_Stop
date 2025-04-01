import React from 'react'
import Image from 'next/image'
import {Special_Elite,Playfair_Display,Spicy_Rice} from 'next/font/google';
const elite= Special_Elite({subsets:['latin'], weight:['400']});
const play= Playfair_Display({subsets:['latin'], weight:['400']});
const rice= Spicy_Rice({subsets:['latin'], weight:['400']});

function Hero() {
  return (
    <div className='min-h-screen flex px-6 py-10 pt-20'>
      <div className='flex flex-col'>
        <div className='flex'>
          {/*illustration*/}
          <div className='mt-[20px] relative mx-auto mb-6'><Image width={500} height={700} src='/hero.png' alt='Postman delivering letters' objectFit='contain' priority /></div>
          {/*description*/}
          <div className='flex flex-col justify-center w-2/3'>
          <h1 className={`${rice.className} ml-0 mt-[0px] text-[50px] font-semibold text-[#806048]`}>LOVE STOP - where love finds its words</h1>
          <p className={`${play.className} mt-[30px] ml-[49px] text-[#806048] text-[35px] leading-relaxed`}>Its your destination for heartfelt poetry,
            <br />
            where words becomes the language of love</p>
          <p className={`${play.className} mt-[20px] ml-[190px] text-[#806048] text-[35px] leading-relaxed`}>Explore a collection of soulful poems, 
            <br />
            craft your own love-filled verses, and
            <br />
            share with those who matters the most</p>
          </div>
        </div>
        <p className={`${elite.className} mt-[10px] ml-25 w-max text-[#806048] text-[40px]`}>Pause, feel, and let love speak - welcome to LOVE STOP</p>
      </div>
    </div>
  );
}

export default Hero
