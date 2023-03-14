import React from 'react'
import { Navbar, LandingPage, About, Token, Roadmap, Footer } from './components'

const App = () => {
  return (
    <div>
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