import React from 'react'
import { discord, telegram, twitter } from '../assets'

const Footer = () => {
  return (
    <div className='flex p-8 justify-center'>
      <div className=" flex">
        <a href="https://t.me/shibscanner">
          <img src={telegram} alt="telegram logo" className=' w-[100px]' />
        </a>
        <a href="https://twitter.com/ScannerShib?t=iVa8UJZGAdOkdlyLjlj4CQ&s=09">
          <img src={twitter} alt="twitter logo" className=' w-[100px]' />
        </a>
        <a href="https://discord.gg/g594aWPc">
          <img src={discord} alt="discord logo" className=' w-[70px] ml-4' />
        </a>
      </div>
    </div>
  )
}

export default Footer