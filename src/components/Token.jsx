import React from 'react'
import { landingBg } from '../assets'

const Token = () => {
  return (
    <div className="flex justify-between items-center flex-wrap">
      <img src={landingBg} alt="" className='w-full md:w-[40%] m-auto'/>
          <div className=' text-center text-white uppercase flex flex-col justify-center items-center px-8 m-auto'>
      <h2 className='text-[#fff] underline uppercase gothic text-[2.5rem] text-center my-8 font-semibold '>the token</h2>
      <div className=" max-w-[400px] mb-8 md:mr-[6rem] bg-[#222] p-4 trans rounded-2xl hover:bg-[#111]">
        <h4 className="uppercase text-[2rem] gothic italic text-[#ffa000]">total supply</h4>
        <p className=" font-semibold inter">
          This token has a fixed supply of  1,000,000,000 $SHS that is unchangeable under any circumstances. <br />
          half the supply of $SHS has been burnt to decrease the total supply and boost the market cap!</p>
      </div>
      <div className=" max-w-[400px] mb-8 md:ml-[6rem] bg-[#222] p-4 trans rounded-2xl hover:bg-[#111]">
        <h4 className="uppercase text-[2rem] gothic italic text-[#ffa000]">taxes</h4>
        <p className=" font-semibold inter">
          There is a 5% tax on buys and sells. <br />
          1% will be added to Liquidity which will lower the impact of buys and sells over time, creating a more stable and safer price. <br />
          4% will be used for marketing to bring $SHS to the masses!</p>
      </div>
      <div className=" max-w-[400px] mb-8 md:mr-[6rem] bg-[#222] p-4 trans rounded-2xl hover:bg-[#111]">
        <h4 className="uppercase text-[2rem] gothic italic text-[#ffa000]">liquidity</h4>
        <p className=" font-semibold inter">
          the liquidity pool has been locked initially for months allowing investors to feel confident about their investment.</p>
      </div>
    </div>
        
</div>
  )
}

export default Token