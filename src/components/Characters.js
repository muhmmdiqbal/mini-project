import React, { Component, Fragment } from 'react';
import { Card, CardColumns } from 'react-bootstrap';
import { data } from '../components/database';




class Characters extends Component {
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
            <CardColumns>
            <Fragment>
                {data ? this.state.data.map((Database1, image) => {
                    return (
                        <div className="kotak  mb-4">
                            <Card>
                                <Card.Img width="50" variant="top" src={Database1.image} />
                                <Card.Body>
                                        <Card.Title>{Database1.title}</Card.Title>
                                </Card.Body>               
                            </Card>
                            
                        </div>
  
                    )
                } ):null}
                
            </Fragment>
            </CardColumns>   
        )    
    }
}

export default Characters;



