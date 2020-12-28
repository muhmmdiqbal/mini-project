import React, { Component } from 'react';





// class Characters extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             data: data
//         }
//     }

//     // componentDidMount(){
//     //     axios.get("https://api.github.com/users/syomily/repos")
//     //     .then(res => {
//     //         const items = res.data
//     //         this.setState({items});
//     //     })
//     //     .catch(err => console.log('parsing data is failed, err'))
//     // }

//     render(){
//         const{data} = this.state
//         console.log(data, 'cards')
//         return(
//             <CardColumns>
//             <Fragment>
//                 {data ? this.state.data.map((Database1, image) => {
//                     return (
//                         <div className="kotak  mb-4">
//                             <Card>
//                                 <Card.Img width="50" variant="top" src={Database1.image} />
//                                 <Card.Body>
//                                         <Card.Title>{Database1.title}</Card.Title>
//                                 </Card.Body>               
//                             </Card>
                            
//                         </div>
  
//                     )
//                 } ):null}
                
//             </Fragment>
//             </CardColumns>   
//         )    
//     }
// }

// export default Characters;



// import React, { Component } from "react";
 
 
class Characters extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
 
  componentDidMount() {
      fetch("https://randomuser.me/api/?results=10&nat=cn")
        .then(res => res.json())
        .then(parsedJSON => parsedJSON.results.map(data => (
          {
            id: `${data.id.name}`,
            firstName: `${data.name.first}`,
            lastName: `${data.name.last}`,
            location: `${data.location.state}, ${data.nat}`,
            thumbnail: `${data.picture.large}`,
 
          }
        )))
        .then(items => this.setState({
          items,
          isLoaded: false
        }))
        .catch(error => console.log('parsing failed', error))
    }
 
    render() {
      const {items } = this.state;
        return (
          <div className="boxWhite">
         
            {
              items.length > 0 ? items.map(item => {
              const {id, firstName, lastName, location, thumbnail} = item;
               return (
 
               <div key={id} className="bgCircle">
               <center><img src={thumbnail} alt={firstName} className="circle"/> </center><br />
               <div className="ctr">
                  {firstName} {lastName}<br />
                  {location}
                </div>
 
              </div>
              );
            }) : null
          }
          </div>
        );
 
    }
  }
 
export default Characters;
