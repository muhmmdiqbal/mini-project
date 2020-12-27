// import React, { Component } from 'react';

// import BeautyStars from 'beauty-stars';

// export default class Star extends Component {
//   state = { value: 0 };
//   render() {
//     return (
//       <BeautyStars
//         value={this.state.value}
//         onChange={value => this.setState({ value })}
//       />
//     );
//   }
// }

import React, { Component } from 'react' ;
// import "./styles.css";
import ReactStars from 'react-rating-stars-component';



const ratingsStars = {
    size: 18,
    count: 5,
    isHalf: true,
    value: 4,
    emptyIcon: <i className="far fa-star" />,
    activeColor: "red",
  onChange: newValue => {
    console.log(`Example 2: new value is ${newValue}`);
  }
};

export default function Star() {
    return (
      <div>
        
        {/* <h4>Your own icons with half rating and a11y</h4> */}
        <ReactStars {...ratingsStars} />
        
      </div>
    );
  }