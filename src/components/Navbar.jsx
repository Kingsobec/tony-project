import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { logo } from '../assets';


const Navbar = () => {

  return (
    <nav className="flex justify-between h-[4rem] py-2 px-4 absolute z-20 w-full">
      <div className="flex items-center ">
        <img src={logo} alt="" className="h-full" />
        <a href="#" className=' text-shadow-lg gothic text-[2rem] text-[#ffa000] '>SHIB SCANNER</a>
      </div>
      <ul className='flex justify-between uppercase gothic text-[#ffa000] text-[2rem] '>
        <li className=' hover:text-[#8b0000] trans'>
          <a href="">about</a>
        </li>
        <li className=' ml-4 hover:text-[#8b0000] trans'>
          <a href="">token</a>
        </li>
        <li className=' ml-4 hover:text-[#8b0000] trans'>
          <a href="">roadmap</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
