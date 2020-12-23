import React, { Component, Link } from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import Database1 from './database';
// import Database from '../Homepages/database';


class CardBody extends Component {
    constructor (props) {
        super (props)
        this.state = { activeTab: 1 }
        // items: []
    }  
    
    // componentDidMount(){
    //     Axios.get("https://api.github.com/users/syomily/repos")
    //     .then(res => {
    //         const items = res.data
    //         this.setState({items});
    //     })
    //     .catch(err => console.log('parsing data is failed', err))
    // }
    
        toggleCategories () { 
                if (this.state.activeTab === 1) {
                    return Database1.map(data => (
                        <div className="squarecard">
                                <CardDeck>
                                    <Card>
                                    <Card.Img variant="top" style={{minwidth:'150', margin: 'auto'}} src={this.props.data.image} />
                                        <Card.Body>
                                            <Card.Title><Link>{this.props.data.Title}</Link></Card.Title>
                                            <Card.Text><Link>{this.props.data.Genre}</Link></Card.Text>
                                        </Card.Body>
                                    </Card>
                                </CardDeck>
                            </div>
                    ));
                    
                }
        }
                
    

}    

export default CardBody;