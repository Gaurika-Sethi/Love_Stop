'use client'

import {React, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react';
import {Special_Elite} from 'next/font/google'

const par= Special_Elite({subsets:['latin'], weight:['400']});

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
      <nav className="bg-[#987070] text-white px-6 py-4 flex items-center justify-between fixed top-0 left-0 right-0 z-10">
        
        {/* Mobile: Menu icon on left */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
  
        {/* Logo + Name on right in mobile, left in desktop */}
        <div className="flex items-center space-x-2 ml-auto md:ml-0 md:mr-auto">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <span className={`${par.className} text-xl sm:text-2xl md:text-[25px] mt-1`}>
            LOVE STOP
          </span>
        </div>
  
        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-4 lg:space-x-6">
          {['Login', 'Poetry', 'Quotes', 'About'].map((item, index) => (
            <Link
              key={index}
              href="/"
              className="text-white text-sm sm:text-base md:text-[18px] lg:text-[20px] font-medium px-4 py-1 rounded-full transition-all duration-200 hover:bg-[#FFEDDB] hover:text-[#987070]"
            >
              {item}
            </Link>
          ))}
        </div>
  
        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="absolute top-[64px] left-0 right-0 bg-[#987070] flex flex-col items-center space-y-4 py-4 md:hidden">
            {['Login', 'Poetry', 'Quotes', 'About'].map((item, index) => (
              <Link
                key={index}
                href="/"
                className="text-white text-base font-medium px-4 py-2 rounded-full transition-all duration-200 hover:bg-[#FFEDDB] hover:text-[#987070]"
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </nav>
  )
}

export default Navbar
