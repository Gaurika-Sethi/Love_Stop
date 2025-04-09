import React from 'react'
import Image from 'next/image'
import{Love_Ya_Like_A_Sister,Irish_Grover,Special_Elite} from 'next/font/google'

const sis= Love_Ya_Like_A_Sister({subsets:['latin'], weight:['400']});
const iri= Irish_Grover({subsets:['latin'], weight:['400']});
const eli= Special_Elite({subsets:['latin'], weight:['400']});

function Footer() {
  return (
    <div className=' h-[800px] bg-[#987070] text-white pt-6 pb-3'>
    <h1 className='text-[45px] font-[500] text-center  ml-90'>Art&Expression . Community . Creativity </h1>
    <div className='flex  items-center space-x-[70px] '>
    <div className='relative  ml-0'>
        <Image src='/letter_footer.png' alt='letters and hearts' width={500} height={500}></Image>
      </div>
      <div className='text-center mt-6 '>
        <p className={`${sis.className}  text-left text-[40px]`}>
            Ink fades,
            <br />
            but love remains.
            <br />
            See you again at LOVE STOP
        </p>
        <div className='flex flex-col  ml-96 mt-16  text-right'>
        <p className={`${iri.className} mt-4 text-[25px]`}>gaurikasethi88@gamil.com</p>
        <p className={`${eli.className} text-[30px] mt-2`}>LOVE STOP</p>
      </div>
      </div>
    </div>     
    </div>
  );
}

export default Footer
