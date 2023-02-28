import React from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Experience from './components/experience/experience'
import Nav from './components/nav/nav'
import Portfolio from './components/portfolio/portfolio'
import Services from './components/services/services'
import Testimonials from './components/testimonials/testimonials'


const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App