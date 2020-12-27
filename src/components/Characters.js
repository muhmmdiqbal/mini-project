import React, { Component, Fragment } from 'react';
import { Card, CardColumns, Container, CardGroup, CardDeck, Col } from 'react-bootstrap';
import { data } from '../components/database';
// import '../App.css'; 


class CardBD extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: data
        }
    }

    // componentDidMount(){
    //     axios.get("https://api.github.com/users/syomily/repos")
    //     .then(res => {
    //         const items = res.data
    //         this.setState({items});
    //     })
    //     .catch(err => console.log('parsing data is failed, err'))
    // }

    render(){
        const{data} = this.state
        console.log(data, 'cards')
        return(
            <Container>
            <CardDeck >
            <CardColumns>
              <Fragment>
                  {data ? this.state.data.map((Database1, image) => {
                      return (
                          <div className="kotak mb-4">
                              <Col >
                              <Card>
                                  <Card.Img width="50" variant="top" src={Database1.image} href=""/>
                                  <Card.Body>
                                      <Card.Title>{Database1.title}</Card.Title>
                                      
                                  </Card.Body>               
                              </Card>
                              </Col>
                          </div>    
                      )
                  }) : null}
              </Fragment>
            </CardColumns> 
            </CardDeck> 
            </Container> 
        )    
    }
}
export default CardBD;



