import React from 'react'
import { Navbar, LandingPage, About, Token, Roadmap, Footer } from './components'

const App = () => {
  return (
    <div className='max-w-[2000px] m-auto min-h-[350px]'>
      <Navbar />
      <LandingPage/>
      <About/>
      <Token/>
      <Roadmap/>
      <Footer/>
    </div>
  )
}

export default App