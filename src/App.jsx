import React from 'react'
import {About, Navbar, Hero, Support, AllInOne, Pricing, Footer} from './components'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <AllInOne />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App