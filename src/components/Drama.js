import React, { Component, Fragment } from 'react';
import { Card, CardColumns } from 'react-bootstrap';
import { data } from '../components/database';
import { Link } from 'react-router-dom';
import axios from 'axios';



class CardBD extends Component {
    constructor(props){
        super(props)
        this.state = {
            result : []
        }
    }

    componentDidMount(){
        axios.get("http://13.212.139.34:3000/category/drama?page=1")
        .then(res => {
            const result = res.data
            this.setState({result});
        })
        .catch(err => console.log('parsing data is failed, err'))
    }

    render(){
        const{result} = this.state
        console.log(result, 'cards')
        return(
            <CardColumns>
            <Fragment>
                {result.length > 0?  this.state.map(item => {
                    return (
                        // <HashRouter>
                        <div key={result.id} className="kotak  mb-4">
                            <Card className='kotakecil mr-2'> 
                                <Card.Img width="50" variant="top" src={result.poster} />
                                <Card.Body>
                                    <Link to="/detailpage">
                                        <Card.Title>{result.title}</Card.Title>
                                    </Link>
                                    <Card.Text>{result.genre}</Card.Text>
                                </Card.Body>               
                            </Card>
                        </div>
                        
                        // </HashRouter>    
                    )
                } ):null}
                
            </Fragment>
            </CardColumns>   
        )    
    }
}

export default CardBD;



