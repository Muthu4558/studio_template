import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Service from '../components/Service'
import About from '../components/About'

const Home = () => {
  return (
    <div className='min-h-screen bg-black text-white'>
        <Navbar />
        <Hero />
        <Service />
        <About />
    </div>
  )
}

export default Home
