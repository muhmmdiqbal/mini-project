import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
<<<<<<< HEAD
import Routes from '../routes/router'
import CardBody from '../components/Card'
import carouselHome from '../components/Carousel'
=======
// import Routes from '../routes/router'
// import Detailpage from '../Detailpage'
import Carousel from '../components/Carousel'
import Cards from '../components/Card'
>>>>>>> daedd5eda90c2df5587e87caa1b7f77d8ceac914


function Home() {
  return (
    <>
      <Header />
<<<<<<< HEAD
      <carouselHome />
      <CardBody />
      <Routes />

=======
      <div className="Banner mx-auto container d-flex">
        <Carousel />
      </div>
      <Cards />
>>>>>>> daedd5eda90c2df5587e87caa1b7f77d8ceac914
      <Footer />
    </>
  )
}

export default Home
