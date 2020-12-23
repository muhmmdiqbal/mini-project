import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

class carouselHome extends Component {
  // constructor () {
  //   super ();
  //   // this.state = { activeBaner: 1 }

  
  
  render(){
    // const {items} = this.state
    
    return(
      <Carousel>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src="holder.js/800x400?text=First slide&bg=373940"
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        className="d-block w-100"
        src="holder.js/800x400?text=Second slide&bg=282c34"
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        className="d-block w-100"
        src="holder.js/800x400?text=Third slide&bg=20232a"
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
    )
  } 
    

  
  

}

export default carouselHome;