import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { logo } from '../assets';


const Navbar = () => {

  return (
    <nav className="flex justify-between h-[4rem] py-2 px-4 sticky bg-black top-0 z-20 w-full">
      <div className="flex items-center ">
        <img src={logo} alt="" className="h-full" />
        <a href="#" className=' text-shadow-lg gothic text-[2rem] text-[#ffa000] '></a>
      </div>
      <ul className='flex justify-between uppercase gothic text-[#ffa000] sm:text-[2rem] text-[1.5rem] '>
        <li className=' hover:text-[#8b0000] trans'>
          <a href="#about">about</a>
        </li>
        <li className=' ml-4 md:ml-[5rem] sm:ml-[3rem] hover:text-[#8b0000] trans'>
          <a href="#token">token</a>
        </li>
        <li className=' ml-4 md:ml-[5rem] sm:ml-[3rem] hover:text-[#8b0000] trans'>
          <a href="#roadmap">roadmap</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
