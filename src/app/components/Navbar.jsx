import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {Special_Elite} from 'next/font/google'

const par= Special_Elite({subsets:['latin'], weight:['400']});

function Navbar() {
  return (
    <nav className='bg-[#987070] text-white p-4 flex items-center justify-between fixed top-0 left-0 right-0 z-10'>
        <div className='flex items-center space-x-2'>
            <Image  src='/logo.png' alt='logo' width={50} height={50}/>
            <span className={`${par.className} mt-4 text-[25px]`}>LOVE STOP</span>
        </div>
        <div className='flex space-x-6'>
            <Link className= 'text-white text-[20px] font-[500] px-4 py-1 rounded-[50px] transition-all ease-linear hover:bg-[#FFEDDB] ]  hover:text-[#987070] 'href="/">Login</Link>
            <Link className= 'text-white text-[20px] font-[500] px-4 py-1 rounded-[50px] transition-all ease-linear hover:bg-[#FFEDDB] ]  hover:text-[#987070] 'href="/">Poetry</Link>
            <Link className= 'text-white text-[20px] font-[500] px-4 py-1 rounded-[50px] transition-all ease-linear hover:bg-[#FFEDDB] ]  hover:text-[#987070] 'href="/">Quotes</Link>
            <Link className= 'text-white text-[20px] font-[500] px-4 py-1 rounded-[50px] transition-all ease-linear hover:bg-[#FFEDDB] ]  hover:text-[#987070] 'href="/">About</Link>
        </div>
    </nav>
  )
}

export default Navbar
