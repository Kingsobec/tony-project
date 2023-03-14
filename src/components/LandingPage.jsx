import React from 'react'
import { landingBg, sticker, video } from '../assets'

const LandingPage = () => {
  return (
    <div className=' min-h-screen flex relative justify-center items-center pt-[6rem]'>
      <div className="w-full min-h-full
       absolute bg-[#000000] opacity-90 z-[-5] top-0"></div>
      <video src={video} autoPlay loop muted className='w-full h-full object-cover z-[-10] absolute top-0'></video>

      <div className="w-[90%] flex justify-evenly items-center flex-wrap gap-6">
        <div className="md:w-[50%] w-full lg:w-[40%] relative">
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
          {/* <div className="absolute z-[1] w-[80%] h-[85%] rounded-full bottom-40 white__gradient"></div> */}
          <div className="absolute z-[0] w-[30%] h-[25%] right-20 bottom-20 blue__gradient"></div>
          <img src={sticker} alt="shib-scanner logo" className='w-full' />
        </div>
          
        <div className=" flex flex-col gap-5 w-full md:w-auto md:mr-5 justify-center">
          <button className=" text-[2rem] bg-[#ffa000] py-2 rounded-[30px] hover:bg-[#8b2000] hover:text-white text-shadow-xl trans px-8 font-semibold uppercase gothic ">buy $shs</button>
          <button className=" text-[2rem] bg-[#ffa000] py-2 rounded-[30px] hover:bg-[#ae2000] hover:text-white text-shadow-xl trans px-8 font-semibold uppercase gothic mb-[4rem] ">chart</button>
        </div>
      </div>
      
    </div>
  )
}

export default LandingPage

// 
//         