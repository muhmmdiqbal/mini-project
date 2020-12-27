import React from 'react'
// import Header from '../components/Header'
// import Footer from '../components/Footer'
// // import Detailpage from '../Detailpage'
import Routes from '../routes/router'
import ListBrowser from '../components/ListBrowser';
import Paginations from '../components/pagination';
import CarouselHome from '../components/Carousel';
import Card from '../components/Card';


function Home() {
  return (
    <>
      <CarouselHome />
      <ListBrowser />
      <Routes />
      <Paginations />
    </>
  )
}

export default Home
