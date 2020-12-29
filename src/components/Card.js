import React, { Component, Fragment } from 'react';
import { Card, CardColumns } from 'react-bootstrap';
import { data } from '../components/database';
import { Link } from 'react-router-dom';
import axios from 'axios';



class CardBD extends Component {
    constructor(){
        super()
        this.state = {
            result : []
        }
    }

    // componentDidMount(){
    //     axios.get("http://13.212.139.34:3000/category?page=1")
    //     .then(res => {
    //         const result = res.data
    //         this.setState({result});
    //     })
    //     .catch(err => console.log('parsing data is failed, err'))
    // }

    componentDidMount(){
        fetch("http://13.212.139.34:3000/category?page=1")
        .then(res => res.json())
        .then(parsedJSON => parsedJSON.result.map(data => (
            {
                poster: `${data.Poster}`,
                title : `${data.Title}`,
                genre: `${data.Genre}`
            }
        )))
        .then(result => this.setState({
            result
        }))
        .catch(error => console.log('parsing data is failed', error))
    }

    render(){
        const{result} = this.state
        console.log(result, 'cards')
        return(
            <CardColumns>
            <Fragment>
                {result?  result.map(item => {
                    const { poster, title, genre} = result
                    return (
                        // <HashRouter>
                        <div key={poster} className="kotak  mb-4">
                            <Card className='kotakecil mr-2'> 
                                <Card.Icmg width="50" variant="top" src={poster} />
                                <Card.Body>
                                    <Link to="/detailpage">
                                        <Card.Title>{title}</Card.Title>
                                    </Link>
                                    <Card.Text>{genre}</Card.Text>
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



