import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Service from '../components/Service'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Started from '../components/Started'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='min-h-screen bg-black text-white'>
        <Navbar />
        <Hero />
        <Service />
        <About />
        <Portfolio />
        <Started />
        <Footer />
    </div>
  )
}

export default Home
