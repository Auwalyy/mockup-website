import React from 'react'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testmonials'
import ServicesSection from '../components/ServicesSection'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'


const Landing = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServicesSection />
        <WhyChooseUs />
        <Testimonials />
    </div>
  )
}

export default Landing