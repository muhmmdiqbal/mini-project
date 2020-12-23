import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Routes from '../routes/router'
import Detailpage from '../Detailpage'


function Home() {
  return (
    <>
      <Header />
      <Detailpage />
      <Routes />

      <Footer />
    </>
  )
}

export default Home
