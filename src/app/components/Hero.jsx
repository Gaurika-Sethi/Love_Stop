import React from 'react'
import Image from 'next/image'
import {Special_Elite,Playfair_Display,Spicy_Rice} from 'next/font/google';
const elite= Special_Elite({subsets:['latin'], weight:['400']});
const play= Playfair_Display({subsets:['latin'], weight:['400']});
const rice= Spicy_Rice({subsets:['latin'], weight:['400']});

function Hero() {
  return (
    <div className="min-h-screen px-6 py-10 pt-40 flex flex-col">
    {/* Flex container for image + text */}
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
      
      {/* Illustration */}
      <div className="relative mx-auto mb-6 w-full max-w-md">
        <Image
          width={500}
          height={700}
          src="/hero.png"
          alt="Postman delivering letters"
          objectFit="contain"
          priority
          className="w-full h-auto"
        />
      </div>
  
      {/* Description */}
      <div className="flex flex-col justify-center text-center lg:text-left w-full lg:w-2/3">
        <h1 className={`${rice.className} text-3xl sm:text-4xl md:text-[45px] lg:text-[50px] font-semibold text-[#806048]`}>
          LOVE STOP – where love finds its words
        </h1>
  
        <p className={`${play.className} mt-6 text-lg sm:text-xl md:text-[26px] lg:text-[35px] text-[#806048] leading-relaxed`}>
          It's your destination for heartfelt poetry,
          <br />
          where words become the language of love.
        </p>
  
        <p className={`${play.className} mt-6 text-lg sm:text-xl md:text-[26px] lg:text-[35px] text-[#806048] leading-relaxed`}>
          Explore a collection of soulful poems,
          <br />
          craft your own love-filled verses, and
          <br />
          share with those who matter the most.
        </p>
      </div>
    </div>
  
    {/* Closing line */}
    <p className={`${elite.className} mt-10 text-center lg:text-left text-2xl sm:text-3xl md:text-[35px] lg:text-[40px] text-[#806048]`}>
      Pause, feel, and let love speak – welcome to LOVE STOP
    </p>
  </div>
  
  );
}

export default Hero
