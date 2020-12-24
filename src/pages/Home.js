import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Routes from '../routes/router'
import CardBody from '../components/Card'
import carouselHome from '../components/Carousel'


function Home() {
  return (
    <>
      <Header />
      <carouselHome />
      <CardBody />
      <Routes />

      <Footer />
    </>
  )
}

export default Home
