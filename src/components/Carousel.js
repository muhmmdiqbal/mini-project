// import React , { useEffect, useState } from 'react'
// import { useSelector, useDiptach } from 'react-redux'
import { Carousel } from 'react-bootstrap'
import React, { Component } from 'react'
import axios from 'axios'
import { data } from './database'

class CarouselHM extends Component {
  constructor(props){
    super(props)
    this.state = {
      result : [],
    }
  }

  componentDidMount(){
    fetch("http://13.212.139.34:3000/home/carouselImages")
    .then(res => res.json())
    .then(parsedJSON => parsedJSON.result.map(data => (
      {
        poster: `${data.Poster}`,
        title: `${data.Title}`

      }
    )))
    .then(result => this.setState({
      result
    }))
    .catch(error => console.log('parsing data is failed', error))
  }

  render(){
    const{result} = this.state
    console.log(result, 'carousel')
    return(
            result.length > 0 ?  result.map(item => {
              const { Poster, Title } = result
                return (
                    <div key={Poster} className="justify-content-center Banner d-flex pb-5">
                    
                        <Carousel>
                                <Carousel.Item>
                                  <img
                                    className="d-block w-100"
                                    src={Poster}
                                    // alt="First slide"
                                  />
                                  <Carousel.Caption>
                                    <h3>{Poster}</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                  </Carousel.Caption>
                                </Carousel.Item>
                    </Carousel>
                    </div>     
                  )
            }) : null

    )    
}
}

export default CarouselHM;

  
//   componentDidMount(){
//     axios.get("http://13.212.139.34:3000/home/carouselImages")
//     .then(res => {
//         const result = res.data
//         this.setState({result});
//     })
//     .catch(err => console.log('parsing data is failed, err'))
//   }

//   render(){
//     const{result} = this.state
//     console.log(result, 'cards')
//     return(
//             result.length > 0?  this.state.map(item => {
//                 return (
//                     <div key={item.id} className="justify-content-center Banner d-flex pb-5">
//                         <Carousel>
//                                 <Carousel.Item>
//                                   <img
//                                     className="d-block w-100"
//                                     src={result.Poster}
//                                     alt="First slide"
//                                   />
//                                   <Carousel.Caption>
//                                     <h3>{result.Title}</h3>
//                                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                                   </Carousel.Caption>
//                                 </Carousel.Item>
//                     </Carousel>
//                     </div>     
//                   )
//             } ):null

//     )    
// }
// }

// export default CarouselHM;

//   render(){
//       const{results} = this.state
//       console.log(results, 'carousel')
//       return(
//         {results.length > 0?  items.map(items => {
//           return(
//             <Carousel>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src="holder.js/800x400?text=First slide&bg=373940"
//                 alt="First slide"
//               />
//               <Carousel.Caption>
//                 <h3>First slide label</h3>
//                 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//               </Carousel.Caption>
//             </Carousel.Item>
//             </Carousel>
//           )
//           }):null}  
//       )
     
//     }

// }

// export default CarouselHM;





// const CarouselHome = () => {
//   const [index, setIndex] = useState(0);
//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };
  
//   const getData = {
//     poster: 
//   }
//     axios.get("http://13.212.139.34:3000/home/carouselImages").then((res) => {
//       setIndex(res.results);
//     })

//   useEffect(() => {
//     getData();
//   }, []);

//   console.log(index);

//   {index.map((results, idx) => {
//             return (
//               <div className="carousleHM" key={idx}>
//               <Carousel activeIndex={index} onSelect={handleSelect}>
//               <Carousel.Item>
//                 <img
//                   className="d-block w-100"
//                   src={results.poster}
//                   alt="First slide"
//                 />
//                 <Carousel.Caption>
//                   <h3>{results.title}</h3>
//                   <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                 </Carousel.Caption>
//               </Carousel.Item>
//             </Carousel>
//             </div>
//             )
//           })}
//         }

// };

// export default CarouselHome;
// // render(<ControlledCarousel />)