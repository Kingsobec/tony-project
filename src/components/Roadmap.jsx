import React from 'react'
import { book, landingBg } from '../assets'

const Roadmap = () => {
  return (
    <div className='min-h-[300px] road mt-[5rem] pb-[10rem]' id='roadmap'>
      <h2 className='text-center text-white gothic text-[2.5rem] uppercase font-bold text-shadow-xl mb-10'>the Roadmap</h2>

      <div className="flex gothic flex-wrap sm:flex-row flex-col justify-between">
        <div className="relative px-[2rem] sm:py-[3rem] rounded-[20px] sm:w-[30%] text-center w-[80%] m-auto py-[4rem]  text-shadow-xl">
          <img src={book} alt="" className='absolute z-[-5] h-full w-full top-0 right-0'/>
          <h4 className=" font-bold text-[1.5rem] z-20">PHASE 1</h4>
        <ul className='z-10 text-[1.2rem]'>
          <li>stealth launch</li>
          <li>lock liquidity</li>
          <li>renouce contract</li>
          <li>community building</li>
          <li>website deployment</li>
          <li>100 holders</li>
          <li>30-50k market cap</li>
        </ul>
        </div>
        <div className="relative px-[2rem] sm:py-[3rem] rounded-[20px] sm:w-[30%] text-center w-[80%] m-auto py-[4rem]  text-shadow-xl">
          <img src={book} alt="" className='absolute z-[-5] h-full w-full top-0 right-0'/>
          <h4 className=" font-bold text-[1.5rem] z-20">PHASE 2</h4>
        <ul className='z-10 text-[1.2rem]'>
          <li>twitter marketing</li>
          <li>telegram marketing</li>
          <li>white paper</li>
          <li>twitter raiding competition</li>
          <li>500 holders</li>
          <li>250k marketcap</li>
        </ul>
        </div>
        <div className="relative px-[2rem] sm:py-[3rem] rounded-[20px] sm:w-[30%] text-center w-[80%] m-auto py-[4rem]  text-shadow-xl">
          <img src={book} alt="" className='absolute z-[-5] h-full w-full top-0 right-0'/>
          <h4 className=" font-bold text-[1.5rem] z-20">PHASE 3</h4>
        <ul className='z-10 text-[1.2rem]'>
            <li>coin gecko listing</li>
            <li>coinmarketcap listing</li>
            <li>press release</li>
            <li>partnerships</li>
            <li>utility development</li>
            <li>1000 holders</li>
            <li>1m marketcap</li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Roadmap