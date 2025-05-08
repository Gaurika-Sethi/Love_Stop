import React from 'react'
import Image from 'next/image'

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"

import {Lora} from 'next/font/google'
const lora= Lora({subsets:['latin'], weight:['400']});
  

function Login() {
  return (
    <div className='mb-20'>
         <HoverCard>
     <HoverCardTrigger><Image className='mx-auto max-w-full' width={700} height={900}  src='/letter.png' alt='hover to login / sign up'></Image></HoverCardTrigger>
     <HoverCardContent className='flex items-center justify-center'>
     <div className='flex justify-center items-center h-[500px] w-[800px] bg-[#C99C9C] p-6'>
        <div className='w-[700px]'>
        <h2 className='text-center text-[#806048] text-[48px] font-[500] mb-10 '>log in</h2>
        <div className='mb=4'>
         <label className='block text-[#806048] text-[30px] font-[500] mt-10 mb-1'>username</label>
         <input type="text" className='w=full px-3 py-2 border-[8px] border-[#806048] rounded-[30px] bg-transparent text-[#806048] outline-none' />
        </div>
        <div className='mb=4'>
         <label className='block text-[#806048] text-[30px] font-[500] mt-10 mb-1'>Email</label>
         <input type="password" className='w=full px-3 py-2 border-[8px] border-[#806048] rounded-[30px] bg-transparent text-[#806048] outline-none' />
         </div>
         <div className='flex justify-end space-x-[40px]'>
          <button className={`${lora.className} px-4 py-1 mt-4 text-[25px] font-[500] text-[#EDCDBB] rounded-[20px] bg-[#BF9270]`}>next</button>
          <button className={`${lora.className} px-4 py-1 mt-4 text-[25px] font-[500] text-[#EDCDBB] rounded-[20px] bg-[#BF9270]`}>signup</button>
         </div>
         </div>
       </div>
     </HoverCardContent>
   </HoverCard>
   
          
       </div>
  )
}

export default Login
