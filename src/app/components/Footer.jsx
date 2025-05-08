import React from 'react'
import Image from 'next/image'
import{Love_Ya_Like_A_Sister,Irish_Grover,Special_Elite} from 'next/font/google'

const sis= Love_Ya_Like_A_Sister({subsets:['latin'], weight:['400']});
const iri= Irish_Grover({subsets:['latin'], weight:['400']});
const eli= Special_Elite({subsets:['latin'], weight:['400']});

function Footer() {
  return (
    <div className="bg-[#987070] text-white pt-6 pb-3 min-h-[600px]">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-medium text-center px-4">
      Art & Expression . Community . Creativity
    </h1>
  
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-[70px] mt-10 px-4">
      
      {/* Image Section */}
      <div className="relative w-full md:w-[40%] flex justify-center">
        <Image
          src="/letter_footer.png"
          alt="letters and hearts"
          width={500}
          height={500}
          className="max-w-full h-auto"
        />
      </div>
  
      {/* Text Section */}
      <div className="w-full md:w-[50%] mt-6 text-center md:text-left">
        <p className={`${sis.className} text-xl sm:text-2xl md:text-[32px] lg:text-[40px] leading-snug`}>
          Ink fades,
          <br />
          but love remains.
          <br />
          See you again at LOVE STOP
        </p>
  
        <div className="mt-10 text-center md:text-right">
          <p className={`${iri.className} mt-4 text-base sm:text-lg md:text-xl lg:text-[25px]`}>
            gaurikasethi88@gamil.com
          </p>
          <p className={`${eli.className} text-lg sm:text-xl md:text-2xl lg:text-[30px] mt-2`}>
            LOVE STOP
          </p>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default Footer
