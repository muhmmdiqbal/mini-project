import React, { Component, Fragment } from 'react';
import { Card, CardColumns } from 'react-bootstrap';
import { data } from '../components/database';
import { Link } from 'react-router-dom';
import axios from 'axios';



class CardBD extends Component {
    constructor(props){
        super(props)
        this.state = {
            items : []
        }
    }

    componentDidMount(){
        axios.get("http://13.212.139.34:3000/category/action?page=1")
        .then(res => {
            const items = res.data
            this.setState({items});
        })
        .catch(err => console.log('parsing data is failed, err'))
    }

    render(){
        const{items} = this.state
        console.log(items, 'cards')
        return(
            <CardColumns>
            <Fragment>
                {items.length > 0?  items.map(item => {
                    return (
                        // <HashRouter>
                        <div key={item.id} className="kotak  mb-4">
                            <Card className='kotakecil mr-2'> 
                                <Card.Img width="50" variant="top" src={items.poster} />
                                <Card.Body>
                                    <Link to="/detailpage">
                                        <Card.Title>{items.title}</Card.Title>
                                    </Link>
                                    <Card.Text>{items.genre}</Card.Text>
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



